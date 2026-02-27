# Remote MCP Connections: Perplexity and Gemini

This document describes how to connect **Cursor** and **Claude** (and other MCP clients) to the **Perplexity** and **Gemini** MCP servers over **HTTPS** (cloud) and **stdio** (local development).

**Cursor cloud agent (cursor.com) and secrets:** To avoid committing your API key, use `${env:MCP_API_KEY}` in `.cursor/mcp.json` and set `MCP_API_KEY` in Cursor’s Secrets. See [CURSOR-CLOUD-AGENT.md](CURSOR-CLOUD-AGENT.md).

---

## 1. Connection model

| Context               | Transport                  | How agents connect                                                                    |
| --------------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| **Cloud (remote)**    | Streamable HTTP over HTTPS | One URL per provider; auth via headers (e.g. `X-API-Key`).                            |
| **Local development** | Stdio                      | One process per provider; Cursor/Claude start the process and talk over stdin/stdout. |

You run **two separate logical “servers”** for research:

- **Gemini Deep Research** → tool `run_deep_research` (one endpoint or one stdio process).
- **Perplexity Sonar** → tool `sonar_research` (one endpoint or one stdio process).

So you will configure **two MCP “servers”** in Cursor and (where supported) in Claude: one for Gemini, one for Perplexity.

---

## 2. Remote connection to Perplexity MCP server

- **URL:** `https://<your-domain>/perplexity/mcp`  
  Example: `https://mcp.yourdomain.com/perplexity/mcp`
- **Method:** POST (and GET/DELETE as per MCP Streamable HTTP; clients use POST for JSON-RPC).
- **Auth:** Set header `X-API-Key` to the same secret you set as `MCP_API_KEY` on the server.
- **TLS:** Use HTTPS only. The app does not do TLS; the reverse proxy (Caddy/Nginx) does.

**Cursor (remote):** In `.cursor/mcp.json` (project or user):

```json
{
  "mcpServers": {
    "perplexity-sonar": {
      "url": "https://mcp.yourdomain.com/perplexity/mcp",
      "headers": {
        "X-API-Key": "${env:MCP_API_KEY}"
      }
    }
  }
}
```

If your client expects a transport type explicitly (e.g. `streamableHttp`), add it; Cursor may infer from `url`:

```json
"perplexity-sonar": {
  "type": "streamableHttp",
  "url": "https://mcp.yourdomain.com/perplexity/mcp",
  "headers": {
    "X-API-Key": "${env:MCP_API_KEY}"
  }
}
```

**Claude (remote):** Add a Custom Connector with URL `https://mcp.yourdomain.com/perplexity/mcp` and complete any auth step (e.g. API key) as prompted. Claude uses the same Streamable HTTP endpoint.

---

## 3. Remote connection to Gemini MCP server

- **URL:** `https://<your-domain>/gemini/mcp`  
  Example: `https://mcp.yourdomain.com/gemini/mcp`
- **Method:** POST (and GET/DELETE as per MCP Streamable HTTP).
- **Auth:** Same as Perplexity: header `X-API-Key` = `MCP_API_KEY`.
- **TLS:** HTTPS at the reverse proxy.

**Cursor (remote):**

```json
"gemini-deep-research": {
  "url": "https://mcp.yourdomain.com/gemini/mcp",
  "headers": {
    "X-API-Key": "${env:MCP_API_KEY}"
  }
}
```

**Claude (remote):** Add a Custom Connector with URL `https://mcp.yourdomain.com/gemini/mcp` and complete auth as required.

---

## 4. Configuring Cursor and Claude: HTTPS (cloud) vs local

### 4.1 Cursor

**Remote (HTTPS, cloud):**  
Use `url` + `headers` (and optionally `type: "streamableHttp"`) for each server, as in sections 2 and 3. No `command`/`args`/`cwd`.

**Local (stdio):**  
Use `command`/`args`/`cwd` and env so Cursor spawns the Node process; no URL.

Example **full** `.cursor/mcp.json` with both modes (use only one of the two entries per server in practice):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "https://mcp.yourdomain.com/gemini/mcp",
      "headers": {
        "X-API-Key": "${env:MCP_API_KEY}"
      }
    },
    "perplexity-sonar": {
      "url": "https://mcp.yourdomain.com/perplexity/mcp",
      "headers": {
        "X-API-Key": "${env:MCP_API_KEY}"
      }
    }
  }
}
```

Local-only alternative (no URL; Cursor runs the process):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/absolute/path/to/8th/mcp",
      "env": {
        "MCP_PROVIDER": "gemini"
      }
    },
    "perplexity-sonar": {
      "command": "npx",
      "args": ["tsx", "src/index.ts"],
      "cwd": "/absolute/path/to/8th/mcp",
      "env": {
        "MCP_PROVIDER": "perplexity"
      }
    }
  }
}
```

- For **local**, ensure `.env` (or environment) has `GOOGLE_API_KEY`/`GEMINI_API_KEY` and `PERPLEXITY_API_KEY`; `MCP_API_KEY` is only needed for HTTP mode.
- For **remote**, the server must have been started with `MCP_TRANSPORT=http` and the same `MCP_API_KEY` you put in `headers`.

### 4.2 Claude

- **Remote:** In Claude (e.g. claude.ai), add a Custom Connector for each URL:
  - `https://mcp.yourdomain.com/gemini/mcp`
  - `https://mcp.yourdomain.com/perplexity/mcp`  
    Complete authentication (e.g. API key) as shown in the UI.
- **Local:** If your Claude client supports local MCP (e.g. Claude Desktop), configure it to start this repo’s process with `MCP_PROVIDER=gemini` or `MCP_PROVIDER=perplexity` and stdio transport; see the repo README for the exact command and env.

---

## 5. Summary

| Server     | Remote URL (HTTPS)                | Local (stdio)             |
| ---------- | --------------------------------- | ------------------------- |
| Gemini     | `https://<domain>/gemini/mcp`     | `MCP_PROVIDER=gemini`     |
| Perplexity | `https://<domain>/perplexity/mcp` | `MCP_PROVIDER=perplexity` |

- **Remote:** Always use HTTPS; set `X-API-Key` to `MCP_API_KEY` in client headers (or equivalent in Claude’s connector auth).
- **Local:** Use `command`/`args`/`cwd`/`env` (Cursor) or the equivalent in Claude Desktop; no URL, no `MCP_API_KEY` on the client.
