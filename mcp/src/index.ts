#!/usr/bin/env node
/**
 * Multi-provider MCP server: Gemini Deep Research + Perplexity Sonar Pro.
 * Supports both local (stdio) and public HTTP deployment.
 *
 * Local (Cursor): Uses stdio transport, reads API keys from .env.
 * Public HTTP:    Uses streamable-http, requires MCP_API_KEY for X-API-Key header auth.
 */

import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

// Load .env from project root
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
