#!/usr/bin/env node
/**
 * MCP server exposing Google Gemini Deep Research agent (deep-research-pro-preview-12-2025)
 * as an MCP tool. Supports both local (stdio) and public HTTP deployment.
 *
 * Local (Cursor): Uses stdio transport, reads API keys from .env.
 * Public HTTP:   Uses streamable-http, requires MCP_API_KEY for X-API-Key header auth.
 */

import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env from project root (parent of mcp-gemini-node)
const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..", "..");
config({ path: resolve(projectRoot, ".env") });

const transport = (process.env.MCP_TRANSPORT ?? "stdio").toLowerCase();

if (transport === "http" || transport === "streamable-http" || transport === "https") {
  const { startHttpServer } = await import("./http.js");
  startHttpServer();
} else {
  const { startStdioServer } = await import("./stdio.js");
  startStdioServer();
}
