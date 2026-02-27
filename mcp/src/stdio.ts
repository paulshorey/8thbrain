/**
 * Stdio transport - for local Cursor / Claude Desktop.
 * Use MCP_PROVIDER=gemini or MCP_PROVIDER=perplexity to select which provider to run.
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createGeminiServer, createPerplexityServer } from "./server.js";

export async function startStdioServer(): Promise<void> {
  const provider = (process.env.MCP_PROVIDER ?? "gemini").toLowerCase();
  const server =
    provider === "perplexity" ? createPerplexityServer() : createGeminiServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}
