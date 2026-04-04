# MCP Server: Multi-Provider Research

TypeScript/Node.js MCP server exposing **multiple research backends** as tools for Claude Code and Cursor agents:


| Tool                | Backend       | Model                             | Use case                                           |
| ------------------- | ------------- | --------------------------------- | -------------------------------------------------- |
| `run_deep_research` | Google Gemini | deep-research-pro-preview-12-2025 | Exhaustive, multi-step research with cited reports |
| `sonar_research`    | Perplexity    | sonar-pro                         | Quick, factual real-time research (non-streaming)  |


## Prerequisites

- **Node.js 18+**
- **Google Gemini API key** from [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Perplexity API key** from [Perplexity](https://docs.perplexity.ai/)

## Setup

### 1. Install dependencies

```bash
cd mcp
npm install
```

### 2. Environment variables

Create or edit `.env` in the **repository root** (the parent directory of `mcp`). The server loads it from there when you run from inside `mcp`.

```bash
GOOGLE_API_KEY=your_gemini_key
# or GEMINI_API_KEY=your_gemini_key

PERPLEXITY_API_KEY=your_perplexity_key
```

The server always requires `MCP_KEY` (clients send it in the `X-API-Key` header):

```bash
MCP_KEY=your_secret_key
```

## Usage

The server runs in **HTTP (Streamable HTTP)** mode only. One process serves both providers:

```bash
npm start
```

Endpoints (no built-in TLS; use a reverse proxy for HTTPS in production):

- `http://localhost:8000/gemini/mcp`
- `http://localhost:8000/perplexity/mcp`

Configure host/port with `MCP_HOST` and `MCP_PORT` (defaults: `0.0.0.0`, `8000`).

**Local:** Start the server, then point Cursor (or any MCP client) at `http://localhost:8000/gemini/mcp` and `http://localhost:8000/perplexity/mcp` with the same `MCP_KEY` in the `X-API-Key` header.

**Remote:** Deploy behind HTTPS and use `https://your-domain.com/gemini/mcp` and `https://your-domain.com/perplexity/mcp`. See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) and [docs/REMOTE-CONNECTIONS.md](docs/REMOTE-CONNECTIONS.md).

## Cursor configuration

Use **one** config for both local and remote: `url` + `headers`. For **local**, start the server (`npm start`) and use `http://localhost:8000/...`. For **remote** or **cloud agent**, use your public HTTPS URL.

**Recommended (no secrets or host in repo):** use `${env:MCP_HOST}` for the base URL and `${env:MCP_KEY}` for the key. Set `MCP_HOST` to `http://localhost:8000` (local) or `https://mcp.yourdomain.com` (remote), and set `MCP_KEY` in Cursor’s Secrets (cloud) or your shell (local):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "${env:MCP_HOST}/gemini/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    },
    "perplexity-sonar": {
      "url": "${env:MCP_HOST}/perplexity/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    }
  }
}
```

For **local only**, replace the host with `http://localhost:8000` (and ensure the server is running). You can use the same file for local and remote by switching the base URL or using two config files.

Add `"type": "streamableHttp"` if your Cursor version requires it. Cloud agent setup: [docs/CURSOR-CLOUD-AGENT.md](docs/CURSOR-CLOUD-AGENT.md). Full connection details: [docs/REMOTE-CONNECTIONS.md](docs/REMOTE-CONNECTIONS.md).

## Tools

### run_deep_research (Gemini)

- **query** (required): Research question or topic
- **focus_areas** (optional): Bullet list of areas to focus on
- **output_format** (optional): Formatting instructions
- **max_wait_seconds** (optional): Timeout (default: 600)

### sonar_research (Perplexity)

- **query** (required): Research question or topic
- **system_context** (optional): System-level context (e.g., "Focus on recent events")

The tool returns the assistant message text (and logs token usage). The underlying API response shape is the standard Perplexity chat-completions format.

## Remote (HTTPS) deployment and agents

For **public HTTPS** so Cursor and Claude **cloud** agents can connect:

1. **Deploy** the server behind HTTPS (reverse proxy). See [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).
2. **Configure Cursor/Claude** with the remote URLs and `X-API-Key` header. See [docs/REMOTE-CONNECTIONS.md](docs/REMOTE-CONNECTIONS.md).

**Cursor cloud agent** (chat from cursor.com, no secrets in repo): use `${env:MCP_KEY}` in `.cursor/mcp.json` and set `MCP_KEY` in Cursor’s Secrets. Full steps: [docs/CURSOR-CLOUD-AGENT.md](docs/CURSOR-CLOUD-AGENT.md).

API implementation notes (Perplexity vs Gemini deep research, correctness): [docs/API-IMPLEMENTATION.md](docs/API-IMPLEMENTATION.md).

## Architecture

```
mcp/
├── src/
│   ├── index.ts       # Entry point; starts HTTP server
│   ├── server.ts      # createGeminiServer(), createPerplexityServer()
│   ├── http.ts        # Streamable HTTP; mounts /gemini/mcp and /perplexity/mcp
│   └── providers/
│       ├── gemini.ts       # run_deep_research
│       └── perplexity.ts   # sonar_research
├── docs/
│   ├── DEPLOYMENT.md          # VPS, HTTPS, reverse proxy
│   ├── REMOTE-CONNECTIONS.md  # Cursor/Claude remote + local config
│   ├── CURSOR-CLOUD-AGENT.md  # Cursor cloud agent + ${env:MCP_KEY}
│   └── API-IMPLEMENTATION.md  # Perplexity/Gemini API review
├── package.json
└── tsconfig.json
```

