/**
 * Streamable HTTP transport - separate endpoints per provider.
 * Serves Gemini at /gemini/mcp and Perplexity at /perplexity/mcp.
 */

import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { Request, Response } from "express";
import { createGeminiServer, createPerplexityServer } from "./server.js";

function apiKeyMiddleware(req: Request, res: Response, next: () => void): void {
  const expected = process.env.MCP_API_KEY;
  if (!expected) {
    console.error("MCP_API_KEY not set; rejecting all requests. Set MCP_API_KEY for HTTP mode.");
    res.status(500).send("Server misconfigured: MCP_API_KEY required");
    return;
  }
  const provided = req.headers["x-api-key"];
  if (!provided || provided !== expected) {
    res.status(401).send("Unauthorized: invalid or missing X-API-Key");
    return;
  }
  next();
}

function mountMcpRoute(
  app: ReturnType<typeof createMcpExpressApp>,
  path: string,
  createMcp: () => import("@modelcontextprotocol/sdk/server/mcp.js").McpServer
): void {
  app.use(path, apiKeyMiddleware);
  // Handle GET, POST, DELETE so the MCP Streamable HTTP transport can respond per spec
  // (POST = JSON-RPC; GET = SSE stream when supported; DELETE = close session)
  app.all(path, async (req: Request, res: Response) => {
    const server = createMcp();
    try {
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
      res.on("close", () => {
        transport.close();
        server.close();
      });
    } catch (error) {
      console.error(`Error handling MCP request at ${path}:`, error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });
}

export function startHttpServer(): void {
  const app = createMcpExpressApp({ host: process.env.MCP_HOST ?? "0.0.0.0" });

  mountMcpRoute(app, "/gemini/mcp", createGeminiServer);
  mountMcpRoute(app, "/perplexity/mcp", createPerplexityServer);

  const port = Number(process.env.MCP_PORT ?? "8000");
  const host = process.env.MCP_HOST ?? "0.0.0.0";

  app.listen(port, host, () => {
    console.log(`MCP server listening:`);
    console.log(`  - Gemini:     http://${host === "0.0.0.0" ? "localhost" : host}:${port}/gemini/mcp`);
    console.log(`  - Perplexity: http://${host === "0.0.0.0" ? "localhost" : host}:${port}/perplexity/mcp`);
  });

  process.on("SIGINT", () => {
    console.log("Shutting down server...");
    process.exit(0);
  });
}
