# MCP Server: Gemini Deep Research (Node.js)

TypeScript/Node.js port of the [mcp-gemini-deep-research](../mcp-gemini-deep-research) Python MCP server. Exposes **Google Gemini Deep Research** (`deep-research-pro-preview-12-2025`) as an MCP tool for Claude Code and Cursor agents.

## Prerequisites

- **Node.js 18+**
- **Google Gemini API key** from [Google AI Studio](https://aistudio.google.com/app/apikey)

## Setup

### 1. Install dependencies

```bash
cd mcp-gemini-node
npm install
```

### 2. Environment variables

Create or edit `.env` in the project root:

```bash
GOOGLE_API_KEY=your_api_key_here
# or GEMINI_API_KEY=your_api_key_here
```

For HTTP deployment, also add:

```bash
MCP_API_KEY=your_secret_key   # For X-API-Key header auth
```

## Usage

### stdio (default) – Cursor, Claude Desktop

```bash
npm start
```

Or with tsx directly: `tsx src/index.ts`

### streamable-http – Public deployment

```bash
MCP_TRANSPORT=http npm start
```

The server listens on `http://0.0.0.0:8000/mcp` (configurable via `MCP_HOST` and `MCP_PORT`).

## Cursor configuration

Add to `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "command": "node",
      "args": ["/path/to/8th/mcp-gemini-node/node_modules/.bin/tsx", "src/index.ts"],
      "cwd": "/path/to/8th/mcp-gemini-node"
    }
  }
}
```

Or with npx:

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/path/to/8th/mcp-gemini-node"
    }
  }
}
```

## HTTP client configuration

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "https://your-domain.com/mcp",
      "headers": {
        "X-API-Key": "${env:MCP_API_KEY}"
      }
    }
  }
}
```

## Tool: run_deep_research

- **query** (required): Research question or topic
- **focus_areas** (optional): Bullet list of areas to focus on
- **output_format** (optional): Formatting instructions
- **max_wait_seconds** (optional): Timeout (default: 600)
