# MCP Server: Multi-Provider Research

TypeScript/Node.js MCP server exposing **multiple research backends** as tools for Claude Code and Cursor agents:

| Tool | Backend | Model | Use case |
|------|---------|-------|----------|
| `run_deep_research` | Google Gemini | deep-research-pro-preview-12-2025 | Exhaustive, multi-step research with cited reports |
| `sonar_research` | Perplexity | sonar-pro | Quick, factual real-time research (non-streaming) |

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

For **HTTP deployment** (remote access), also set:

```bash
MCP_API_KEY=your_secret_key   # Sent by clients in X-API-Key header; required in HTTP mode
```

## Usage

### stdio (default) – Cursor, Claude Desktop

Each provider runs as a separate MCP server. Use `MCP_PROVIDER` to select which one:

```bash
MCP_PROVIDER=gemini npm start
MCP_PROVIDER=perplexity npm start
```

Default (no env) is `gemini`.

### HTTP (Streamable HTTP) – public deployment

```bash
MCP_TRANSPORT=http npm start
```

The server exposes **separate endpoints per provider** (no built-in TLS; put a reverse proxy in front for HTTPS):

- `http://localhost:8000/gemini/mcp`
- `http://localhost:8000/perplexity/mcp`

Host and port are configurable via `MCP_HOST` and `MCP_PORT` (defaults: `0.0.0.0`, `8000`).

## Cursor configuration

### Local (stdio)

For **local** Cursor IDE, add both providers to `.cursor/mcp.json`. Use an absolute path for `cwd` (or `${workspaceFolder}/mcp` if your workspace root is the repo containing `mcp`):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/absolute/path/to/8th/mcp",
      "env": { "MCP_PROVIDER": "gemini" }
    },
    "perplexity-sonar": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/absolute/path/to/8th/mcp",
      "env": { "MCP_PROVIDER": "perplexity" }
    }
  }
}
```

Ensure `GOOGLE_API_KEY`/`GEMINI_API_KEY` and `PERPLEXITY_API_KEY` are in your `.env` (repository root); no `MCP_API_KEY` needed for stdio.

### Remote (HTTPS) – Cursor cloud agent and IDE

For **remote** access (e.g. chat from [cursor.com](https://cursor.com) or IDE pointing at your deployed server), use **Streamable HTTP** with `url` and `headers`. Use **two** endpoints: `/gemini/mcp` and `/perplexity/mcp` (not `/mcp`).

**Recommended (no secrets in repo):** use Cursor’s config interpolation and set `MCP_API_KEY` in Cursor’s Secrets (cloud) or your shell (local):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "https://your-domain.com/gemini/mcp",
      "headers": { "X-API-Key": "${env:MCP_API_KEY}" }
    },
    "perplexity-sonar": {
      "url": "https://your-domain.com/perplexity/mcp",
      "headers": { "X-API-Key": "${env:MCP_API_KEY}" }
    }
  }
}
```

If your Cursor version expects an explicit transport type, add `"type": "streamableHttp"` to each server. For full steps (including cloud agent Secrets), see [docs/CURSOR-CLOUD-AGENT.md](docs/CURSOR-CLOUD-AGENT.md).

**Alternative (literal key, do not commit):** you can put the key directly in `headers` (e.g. `"X-API-Key": "<your-MCP_API_KEY>"`). Prefer `${env:MCP_API_KEY}` so the file is safe to commit.

More on Cursor vs Claude and local vs remote: [docs/REMOTE-CONNECTIONS.md](docs/REMOTE-CONNECTIONS.md).

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

**Cursor cloud agent** (chat from cursor.com, no secrets in repo): use `${env:MCP_API_KEY}` in `.cursor/mcp.json` and set `MCP_API_KEY` in Cursor’s Secrets. Full steps: [docs/CURSOR-CLOUD-AGENT.md](docs/CURSOR-CLOUD-AGENT.md).

API implementation notes (Perplexity vs Gemini deep research, correctness): [docs/API-IMPLEMENTATION.md](docs/API-IMPLEMENTATION.md).

## Architecture

```
mcp/
├── src/
│   ├── index.ts       # Entry point, transport selection
│   ├── server.ts      # createGeminiServer(), createPerplexityServer()
│   ├── http.ts        # Mounts /gemini/mcp and /perplexity/mcp
│   ├── stdio.ts       # Stdio; MCP_PROVIDER selects which server
│   └── providers/
│       ├── gemini.ts       # run_deep_research
│       └── perplexity.ts  # sonar_research
├── docs/
│   ├── DEPLOYMENT.md          # VPS, HTTPS, reverse proxy
│   ├── REMOTE-CONNECTIONS.md  # Cursor/Claude remote + local config
│   ├── CURSOR-CLOUD-AGENT.md  # Cursor cloud agent + ${env:MCP_API_KEY}
│   └── API-IMPLEMENTATION.md  # Perplexity/Gemini API review
├── package.json
└── tsconfig.json
```
