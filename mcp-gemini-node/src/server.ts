/**
 * MCP server definition - shared between stdio and HTTP transports.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { GoogleGenAI } from "@google/genai";

const DEEP_RESEARCH_AGENT = "deep-research-pro-preview-12-2025";
const POLL_INTERVAL_MS = 10_000;
const MAX_POLL_RETRIES = 3;
const INITIAL_RETRY_DELAY_MS = 2_000;

function getApiKey(): string {
  const key = process.env.GOOGLE_API_KEY ?? process.env.GEMINI_API_KEY;
  if (!key) {
    throw new Error("No API key found. Set GOOGLE_API_KEY or GEMINI_API_KEY in your .env file.");
  }
  return key;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

function createServer(): McpServer {
  const server = new McpServer(
    {
      name: "gemini-deep-research",
      version: "0.1.0",
    },
    {
      capabilities: { logging: {} },
    }
  );

  server.registerTool(
    "run_deep_research",
    {
      description:
        "Run a comprehensive deep research task using Google Gemini Deep Research agent. " +
        "The Deep Research agent performs multi-step research across hundreds of sources " +
        "and produces cited reports. Use for exhaustive, fact-based research on complex topics.",
      inputSchema: z.object({
        query: z.string().describe("The research question or topic to investigate (required)"),
        focus_areas: z
          .string()
          .optional()
          .describe("Optional bullet points or numbered list of specific areas to focus on"),
        output_format: z
          .string()
          .optional()
          .describe(
            'Optional formatting instructions (e.g., "as a strategic briefing", "with a comparison table")'
          ),
        max_wait_seconds: z
          .number()
          .default(600)
          .describe("Maximum time to wait for research to complete (default: 600)"),
      }),
    },
    async ({ query, focus_areas, output_format, max_wait_seconds = 600 }, extra) => {
      const sessionId = extra?.sessionId as string | undefined;

      const log = (level: "info" | "debug" | "error", message: string): void => {
        try {
          server.sendLoggingMessage({ level, data: message }, sessionId);
        } catch {
          console.log(`[${level}] ${message}`);
        }
      };

      let prompt = query;
      if (focus_areas) prompt += `\n\nFocus on:\n${focus_areas}`;
      if (output_format) prompt += `\n\nFormat the output: ${output_format}`;

      let ai: GoogleGenAI;
      try {
        ai = new GoogleGenAI({ apiKey: getApiKey() });
      } catch (err) {
        return {
          content: [{ type: "text", text: String(err) }],
        };
      }

      let interaction: Awaited<ReturnType<typeof ai.interactions.create>>;
      try {
        interaction = await ai.interactions.create({
          agent: DEEP_RESEARCH_AGENT,
          input: prompt,
          background: true,
        });
      } catch (err) {
        return {
          content: [{ type: "text", text: `Failed to start research: ${err}` }],
        };
      }

      const interactionId = interaction.id;
      const maxWaitMs = (max_wait_seconds ?? 600) * 1000;
      const start = Date.now();
      let lastStatus: string | null = null;

      log("info", `Research started. Interaction ID: ${interactionId}`);

      while (Date.now() - start < maxWaitMs) {
        let retries = 0;
        type InteractionResult = { status: string; outputs?: Array<{ text?: string }>; error?: string };
        let current: InteractionResult | undefined;

        while (retries <= MAX_POLL_RETRIES) {
          try {
            current = (await ai.interactions.get(interactionId)) as InteractionResult;
            break;
          } catch (err) {
            retries++;
            if (retries > MAX_POLL_RETRIES) {
              log("error", `Poll failed after ${MAX_POLL_RETRIES} retries: ${err}`);
              return {
                content: [{ type: "text", text: `Failed to poll research status after ${MAX_POLL_RETRIES} retries: ${err}` }],
              };
            }
            const delayMs = INITIAL_RETRY_DELAY_MS * Math.pow(2, retries - 1);
            log("info", `Poll failed (attempt ${retries}/${MAX_POLL_RETRIES}), retrying in ${delayMs}ms: ${err}`);
            await sleep(delayMs);
          }
        }

        if (!current) {
          return {
            content: [{ type: "text", text: "Unexpected error: no response from polling" }],
          };
        }

        if (current.status !== lastStatus) {
          lastStatus = current.status;
          log("info", `Status: ${current.status}`);
        }

        if (current.status === "completed") {
          const lastOutput = current.outputs?.[current.outputs.length - 1];
          const text =
            lastOutput && typeof lastOutput === "object" && "text" in lastOutput && lastOutput.text
              ? lastOutput.text
              : "Research completed but no output was returned.";
          log("info", `Research completed. Output length: ${text.length} chars`);
          return { content: [{ type: "text", text }] };
        }
        if (current.status === "failed" || current.status === "cancelled") {
          const err = (current as { error?: string }).error ?? "Unknown error";
          log("error", `Research ${current.status}: ${err}`);
          return {
            content: [{ type: "text", text: `Research failed: ${err}` }],
          };
        }

        await sleep(POLL_INTERVAL_MS);
      }

      log("info", `Research timed out after ${max_wait_seconds}s. Interaction ID: ${interactionId}`);
      return {
        content: [
          {
            type: "text",
            text: `Research timed out after ${max_wait_seconds}s. Interaction ID for manual follow-up: ${interactionId}`,
          },
        ],
      };
    }
  );

  return server;
}

export { createServer };
