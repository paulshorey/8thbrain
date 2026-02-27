# Connecting Cursor Cloud Agent to This MCP Server

This guide explains how to connect **Cursor’s cloud agent** (when you start a chat from [cursor.com](https://cursor.com)) to your deployed MCP server, **without putting your API key in the repo**. This server is **HTTP only** (no stdio); use the same URL + headers config for local (localhost) or remote (HTTPS).

---

## 1. How the cloud agent uses MCP

- When you use the **cloud agent** (e.g. start a chat from cursor.com against a repo), Cursor can use MCP servers defined for that project.
- MCP config is read from **`.cursor/mcp.json`** in the **project** (repo). You can commit this file so the cloud agent sees the same config as your team.
- For **remote** (HTTPS) servers, Cursor uses the **Streamable HTTP** transport: you specify a `url` and optional `headers`.

---

## 2. Use environment variables for URL and API key

Cursor supports **config interpolation** in `mcp.json`: you can use **`${env:VAR}`** in `url`, `headers`, and other fields. So you can keep both the base URL and the API key out of the repo.

- **URL:** Use a base URL in an env var (e.g. `MCP_HOST`) and append the path: `"url": "${env:MCP_HOST}/gemini/mcp"`. Set `MCP_HOST` to `http://localhost:8000` for local or `https://mcp.yourdomain.com` for remote (no trailing slash).
- **API key:** Use `"X-API-Key": "${env:MCP_KEY}"` in headers. For the **cloud agent**, set `MCP_KEY` in Cursor’s Secrets.

Official Cursor docs: [Config interpolation](https://cursor.com/docs/context/mcp#config-interpolation) — _"Cursor resolves variables in these fields: command, args, env, url, and headers"_ with syntax `${env:NAME}`. Use the full syntax with closing brace: `${env:MCP_HOST}` not `${env:MCP_HOST"`.

---

## 3. Exact `.cursor/mcp.json` for this server

Use **two** entries (one for Gemini, one for Perplexity). Each needs the **full path** to your MCP endpoint: `/gemini/mcp` and `/perplexity/mcp` (not just `/mcp`).

**Option A – Base URL from env (recommended):** Set `MCP_HOST` to your base (e.g. `http://localhost:8000` or `https://mcp.yourdomain.com`, no trailing slash). One env var switches local vs remote.

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

**Option B – Hardcoded base URL:** Replace the base in the URLs below with your real host (e.g. `https://mcp.yourdomain.com`).

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "url": "https://your-domain.com/gemini/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    },
    "perplexity-sonar": {
      "url": "https://your-domain.com/perplexity/mcp",
      "headers": { "X-API-Key": "${env:MCP_KEY}" }
    }
  }
}
```

If your Cursor version expects an explicit transport type, add `"type": "streamableHttp"` to each server. With a base URL from env:

```json
"gemini-deep-research": {
  "type": "streamableHttp",
  "url": "${env:MCP_HOST}/gemini/mcp",
  "headers": { "X-API-Key": "${env:MCP_KEY}" }
}
```

---

## 4. Providing env vars for the cloud agent

The cloud agent needs **environment variables** when Cursor resolves your `mcp.json`. Cursor exposes **Secrets** (from the dashboard) as environment variables for cloud agents.

### Steps

1. **Create secrets in Cursor**
   - Go to [cursor.com](https://cursor.com) → your account/workspace.
   - Open **Settings** (or [cursor.com/dashboard](https://cursor.com/dashboard)) and find the **Cloud agents** / **Secrets** area.
   - Add:
     - **`MCP_KEY`** — same value as `MCP_KEY` on your MCP server (sent in `X-API-Key` header).
     - **`MCP_HOST`** (if you use Option A) — base URL, e.g. `https://mcp.yourdomain.com` (no trailing slash).

2. **Use it in the cloud agent**
   - When you start a chat from cursor.com and open a repo that contains `.cursor/mcp.json` with `${env:MCP_KEY}`, Cursor should resolve it using the workspace/account secrets.
   - If Cursor’s UI labels this as “Secrets for cloud agents” or “Environment variables for cloud agents”, those are the values used when the **cloud** agent runs; the exact menu name may vary by Cursor version.

3. **Keep the key out of the repo**
   - Do **not** put the real key in `.cursor/mcp.json`. Only the string `"${env:MCP_KEY}"` should be in the file so it is safe to commit and push to GitHub.

If your Cursor version does not expose Secrets as env vars for MCP config resolution, check the latest [Cursor docs](https://cursor.com/docs/cloud-agent/setup) and [MCP docs](https://cursor.com/docs/context/mcp) for “Secrets” and “config interpolation” for cloud agents.

---

## 5. Local Cursor IDE (optional)

For **local** Cursor IDE (not the cloud agent), you can also use the same `mcp.json` and set `MCP_KEY` on your machine:

- **macOS/Linux:** e.g. in `~/.zshrc` or `~/.bashrc`:  
  `export MCP_KEY='your-secret'`
- **Windows:** set a user or system environment variable `MCP_KEY`.

Then restart Cursor so it reloads env and resolves `${env:MCP_KEY}` when connecting to your remote MCP server.

---

## 6. Checklist

| Step | Action                                                                                                                  |
| ---- | ----------------------------------------------------------------------------------------------------------------------- |
| 1    | Deploy MCP server with HTTPS and set `MCP_KEY` on the server.                                                           |
| 2    | In repo, add `.cursor/mcp.json` with `url` and `"X-API-Key": "${env:MCP_KEY}"` for `/gemini/mcp` and `/perplexity/mcp`. |
| 3    | Add `MCP_KEY` in Cursor’s Cloud agent / Secrets (or equivalent) with the same value as on the server.                   |
| 4    | Open a chat from cursor.com on that repo; cloud agent should have access to the MCP tools.                              |

---

## 7. Troubleshooting

- **401 Unauthorized:** The value of `MCP_KEY` in Cursor (Secrets) must match exactly the `MCP_KEY` on the MCP server. Check for extra spaces or different keys.
- **Tool not available in cloud chat:** Confirm the repo has `.cursor/mcp.json` and that the cloud agent is using that project. Check Cursor’s MCP logs (e.g. Output → MCP Logs) for connection errors.
- **URL wrong:** This server has **two** paths: `https://your-domain.com/gemini/mcp` and `https://your-domain.com/perplexity/mcp`. Do not use `https://your-domain.com/mcp` (that path is not served).
