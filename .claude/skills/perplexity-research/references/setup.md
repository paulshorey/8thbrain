# Perplexity MCP Server Setup

## Overview

The Perplexity MCP server (`@perplexity-ai/mcp-server`) provides Claude Code with access to Perplexity's Sonar models for real-time web search, deep research, and analytical reasoning. It is the official MCP server published by Perplexity AI.

## Prerequisites

- **Node.js 18+** installed (for `npx`)
- **Perplexity API Key** from [https://www.perplexity.ai/account/api/group](https://www.perplexity.ai/account/api/group)

## Installation for Claude Code

### Method 1: CLI Command (Recommended)

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="pplx-your-key-here" -- npx -y @perplexity-ai/mcp-server
```

This registers the Perplexity MCP server with Claude Code and injects your API key as an environment variable.

### Method 2: Plugin Marketplace

```bash
export PERPLEXITY_API_KEY="pplx-your-key-here"
claude
# Inside Claude Code:
/plugin marketplace add perplexityai/modelcontextprotocol
/plugin install perplexity
```

### Method 3: Manual Configuration

Add to your Claude Code MCP configuration file (`.claude/mcp.json` in the project root or `~/.claude/mcp.json` for global):

```json
{
  "mcpServers": {
    "perplexity": {
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"],
      "env": {
        "PERPLEXITY_API_KEY": "pplx-your-key-here"
      }
    }
  }
}
```

## Configuration Options

| Environment Variable | Default | Description |
|---|---|---|
| `PERPLEXITY_API_KEY` | (required) | Your Perplexity API key |
| `PERPLEXITY_TIMEOUT_MS` | `300000` (5 min) | Request timeout in milliseconds |
| `PERPLEXITY_BASE_URL` | `https://api.perplexity.ai` | API base URL |
| `PERPLEXITY_LOG_LEVEL` | `ERROR` | Log verbosity: `DEBUG`, `INFO`, `WARN`, `ERROR` |

## Available Tools After Setup

Once configured, Claude Code gains access to four MCP tools:

- **`perplexity_search`** — Direct web search returning ranked results with metadata
- **`perplexity_ask`** — Quick Q&A using `sonar-pro` with live web grounding
- **`perplexity_research`** — Deep multi-step research using `sonar-deep-research`
- **`perplexity_reason`** — Analytical reasoning using `sonar-reasoning-pro`

## Verifying the Setup

After configuration, start Claude Code and ask it to use a Perplexity tool:

```
Use perplexity_ask to look up today's weather in San Francisco.
```

If the MCP server is configured correctly, Claude will invoke the tool and return a grounded answer. If it fails, check that:

1. Your API key is valid and has remaining credits
2. Node.js 18+ is installed and `npx` is on your PATH
3. The configuration file is in the correct location

## API Pricing

Perplexity API usage is metered. Check [https://docs.perplexity.ai/guides/pricing](https://docs.perplexity.ai/guides/pricing) for current pricing. The `sonar-deep-research` model is the most expensive per query but produces the most comprehensive results.

## Troubleshooting

| Symptom | Likely Cause | Fix |
|---|---|---|
| "Tool not found" | MCP server not registered | Re-run `claude mcp add` command |
| Timeout errors | Query too complex or network issue | Increase `PERPLEXITY_TIMEOUT_MS` |
| Authentication error | Invalid or expired API key | Regenerate key at Perplexity dashboard |
| "npx not found" | Node.js not installed | Install Node.js 18+ |
