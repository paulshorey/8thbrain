/**
 * Provider-specific MCP servers.
 * Each endpoint serves one provider on its own path.
 */

import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { McpServer as McpServerClass } from "@modelcontextprotocol/sdk/server/mcp.js";
import { registerGeminiTools } from "./providers/gemini.js";
import { registerPerplexityTools } from "./providers/perplexity.js";

function createProviderServer(
  name: string,
  registerTools: (server: McpServer) => void
): McpServer {
  const server = new McpServerClass(
    { name, version: "0.1.0" },
    { capabilities: { logging: {} } }
  );
  registerTools(server);
  return server;
}

export function createGeminiServer(): McpServer {
  return createProviderServer("gemini-deep-research", registerGeminiTools);
}

export function createPerplexityServer(): McpServer {
  return createProviderServer("perplexity-sonar", registerPerplexityTools);
}
