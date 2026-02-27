/**
 * Perplexity Sonar Pro provider.
 * Exposes sonar_research tool using Perplexity's sonar-pro model.
 * Non-streaming, single-shot research queries.
 */

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import Perplexity from "@perplexity-ai/perplexity_ai";

const MODEL = "sonar-pro";

function getApiKey(): string {
  const key = process.env.PERPLEXITY_API_KEY;
  if (!key) {
    throw new Error("No API key found. Set PERPLEXITY_API_KEY in your .env file.");
  }
  return key;
}

export function registerPerplexityTools(server: McpServer): void {
  server.registerTool(
    "sonar_research",
    {
      description:
        "Run a research query using Perplexity Sonar Pro. " +
        "Sonar Pro provides deep content understanding with enhanced search accuracy, " +
        "optimized for complex, multi-step Q&A. Use for factual, real-time research queries " +
        "when you need a quicker, non-streaming response than Gemini Deep Research.",
      inputSchema: z.object({
        query: z.string().describe("The research question or topic to investigate (required)"),
        system_context: z
          .string()
          .optional()
          .describe(
            "Optional system-level context to guide the research (e.g., 'Focus on recent events')"
          ),
      }),
    },
    async ({ query, system_context }, extra) => {
      const sessionId = extra?.sessionId as string | undefined;

      const log = (level: "info" | "debug" | "error", message: string): void => {
        try {
          server.sendLoggingMessage({ level, data: message }, sessionId);
        } catch {
          console.log(`[${level}] ${message}`);
        }
      };

      const messages: Array<{ role: "user" | "system"; content: string }> = [];
      if (system_context) {
        messages.push({ role: "system", content: system_context });
      }
      messages.push({ role: "user", content: query });

      let client: Perplexity;
      try {
        client = new Perplexity({ apiKey: getApiKey() });
      } catch (err) {
        return {
          content: [{ type: "text", text: String(err) }],
        };
      }

      try {
        log("info", "Starting Perplexity Sonar Pro research...");
        const completion = await client.chat.completions.create({
          model: MODEL,
          messages,
        });

        const choice = completion.choices?.[0];
        const raw = choice?.message?.content;
        const text =
          typeof raw === "string"
            ? raw
            : Array.isArray(raw)
              ? raw.map((c) => (typeof c === "string" ? c : (c as { text?: string }).text ?? "")).join("")
              : "No content returned from Perplexity.";
        const usage = (completion as { usage?: { total_tokens?: number } }).usage;
        log("info", `Research completed.${usage?.total_tokens ? ` Tokens: ${usage.total_tokens}` : ""}`);

        return { content: [{ type: "text", text }] };
      } catch (err) {
        log("error", `Perplexity research failed: ${err}`);
        return {
          content: [{ type: "text", text: `Perplexity research failed: ${err}` }],
        };
      }
    }
  );
}
