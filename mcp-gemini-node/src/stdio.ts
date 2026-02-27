/**
 * Stdio transport - for local Cursor / Claude Desktop.
 */

import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { createServer } from "./server.js";

const server = createServer();
const transport = new StdioServerTransport();

export async function startStdioServer(): Promise<void> {
  await server.connect(transport);
}
