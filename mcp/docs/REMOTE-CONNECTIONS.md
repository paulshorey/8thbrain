# Remote and Local MCP Connections (HTTP Only)

This server runs **only** in HTTP (Streamable HTTP) mode. Cursor and Claude connect the same way locally and remotely: by **URL + headers**. No stdio; no per-provider process.

**Cursor cloud agent (cursor.com) and secrets:** Use `${env:MCP_KEY}` in `.cursor/mcp.json` and set `MCP_KEY` in Cursor’s Secrets so the key never lives in the repo. See [CURSOR-CLOUD-AGENT.md](CURSOR-CLOUD-AGENT.md).

---

## 1. Connection model

| Context            | Base URL                  | Auth               |
| ------------------ | ------------------------- | ------------------ |
| **Local**          | `http://localhost:8000`   | `X-API-Key` header |
| **Remote (cloud)** | `https://your-domain.com` | `X-API-Key` header |

Two endpoints per base URL:

- **Gemini:** `{base}/gemini/mcp` → tool `run_deep_research`
- **Perplexity:** `{base}/perplexity/mcp` → tool `sonar_research`

Start the server once (`npm start`); both providers are available. For **local** use, run the server on your machine and point Cursor at `http://localhost:8000/...`. For **remote**, deploy behind HTTPS and use your public URL.

---

## 2. Perplexity MCP endpoint

- **Path:** `/perplexity/mcp`
- **Local:** `http://localhost:8000/perplexity/mcp`
- **Remote:** `https://your-domain.com/perplexity/mcp`
- **Auth:** Header `X-API-Key` = value of `MCP_KEY` on the server.

**Cursor** (same config for local or remote; change the base URL):

```json
"perplexity-sonar": {
  "url": "https://your-domain.com/perplexity/mcp",
  "headers": { "X-API-Key": "${env:MCP_KEY}" }
}
```

For local, use `"url": "http://localhost:8000/perplexity/mcp"` (and ensure the server is running). Add `"type": "streamableHttp"` if your Cursor version requires it.

**Claude:** Add a Custom Connector with the same URL and provide the API key when prompted.

---

## 3. Gemini MCP endpoint

- **Path:** `/gemini/mcp`
- **Local:** `http://localhost:8000/gemini/mcp`
- **Remote:** `https://your-domain.com/gemini/mcp`
- **Auth:** Same: `X-API-Key` = `MCP_KEY`.

**Cursor:**

```json
"gemini-deep-research": {
  "url": "https://your-domain.com/gemini/mcp",
  "headers": { "X-API-Key": "${env:MCP_KEY}" }
}
```

**Claude:** Custom Connector with the Gemini URL and API key.

---

## 4. Cursor: local vs remote

Use **one** style of config: `url` + `headers` for both providers. Only the base URL changes:

- **Local:** Start the server (`npm start`), then set `MCP_HOST=http://localhost:8000` and `MCP_KEY` in your shell (or use hardcoded localhost URLs in the config).
- **Remote / cloud:** Set `MCP_HOST` to your public base (e.g. `https://mcp.yourdomain.com`) and `MCP_KEY` in Cursor’s Secrets so both `${env:...}` values resolve.

Example **with base URL from env** (one config for local and remote; set `MCP_HOST` to `http://localhost:8000` or `https://mcp.yourdomain.com`):

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

Example **local** (hardcoded localhost; server must be running):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "http://localhost:8000/gemini/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    },
    "perplexity-sonar": {
      "url": "http://localhost:8000/perplexity/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    }
  }
}
```

Example **remote** (hardcoded HTTPS base):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "https://mcp.yourdomain.com/gemini/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    },
    "perplexity-sonar": {
      "url": "https://mcp.yourdomain.com/perplexity/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    }
  }
}
```

---

## 5. Claude

- **Remote:** In Claude (e.g. claude.ai), add a Custom Connector for each URL (`.../gemini/mcp` and `.../perplexity/mcp`) and complete API key auth.
- **Local:** If your Claude client supports a custom MCP URL, point it at `http://localhost:8000/gemini/mcp` and `http://localhost:8000/perplexity/mcp` with the same `X-API-Key` (or equivalent) and ensure the server is running.

---

## 6. Summary

| Server     | Local URL                              | Remote URL                        |
| ---------- | -------------------------------------- | --------------------------------- |
| Gemini     | `http://localhost:8000/gemini/mcp`     | `https://<domain>/gemini/mcp`     |
| Perplexity | `http://localhost:8000/perplexity/mcp` | `https://<domain>/perplexity/mcp` |

- **Single transport:** HTTP (Streamable HTTP) only; no stdio.
- **Auth:** Always send `X-API-Key` with the value of `MCP_KEY` (or use `${env:MCP_KEY}` in Cursor).
- **Local:** Run `npm start`, then connect Cursor/Claude to the localhost URLs above.
