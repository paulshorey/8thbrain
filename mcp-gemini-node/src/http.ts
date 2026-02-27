/**
 * Streamable HTTP transport - for public deployment with X-API-Key auth.
 */

import { createMcpExpressApp } from "@modelcontextprotocol/sdk/server/express.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import type { Request, Response } from "express";
import { createServer } from "./server.js";

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

export function startHttpServer(): void {
  const app = createMcpExpressApp({ host: process.env.MCP_HOST ?? "0.0.0.0" });

  app.use("/mcp", apiKeyMiddleware);

  app.post("/mcp", async (req: Request, res: Response) => {
    const server = createServer();
    try {
      const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined });
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
      res.on("close", () => {
        transport.close();
        server.close();
      });
    } catch (error) {
      console.error("Error handling MCP request:", error);
      if (!res.headersSent) {
        res.status(500).json({
          jsonrpc: "2.0",
          error: { code: -32603, message: "Internal server error" },
          id: null,
        });
      }
    }
  });

  app.get("/mcp", (_req: Request, res: Response) => {
    res.status(405).json({
      jsonrpc: "2.0",
      error: { code: -32000, message: "Method not allowed." },
      id: null,
    });
  });

  const port = Number(process.env.MCP_PORT ?? "8000");
  const host = process.env.MCP_HOST ?? "0.0.0.0";

  app.listen(port, host, () => {
    console.log(`MCP Gemini Deep Research server listening on http://${host}:${port}/mcp`);
  });

  process.on("SIGINT", () => {
    console.log("Shutting down server...");
    process.exit(0);
  });
}
