#!/usr/bin/env node
/**
 * Multi-provider MCP server: Gemini Deep Research + Perplexity Sonar Pro.
 * HTTP (Streamable HTTP) only: one process serves both providers at /gemini/mcp and /perplexity/mcp.
 * Use locally (http://localhost:8000/...) or behind HTTPS for remote access.
 */

import { config } from "dotenv";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, "..", "..");
config({ path: resolve(projectRoot, ".env") });

const { startHttpServer } = await import("./http.js");
startHttpServer();
