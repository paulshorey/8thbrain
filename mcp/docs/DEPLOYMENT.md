# Deploying the MCP Server for Remote Access

This guide covers hosting the MCP server on a VPS with a public domain and HTTPS so that **Cursor** and **Claude** (and other MCP clients) can connect from the cloud.

## Overview

- The server runs in **HTTP (Streamable HTTP) mode** only. It listens on `MCP_HOST` / `MCP_PORT` and exposes:
  - **Gemini Deep Research:** `POST/GET/DELETE` at `/gemini/mcp`
  - **Perplexity Sonar:** `POST/GET/DELETE` at `/perplexity/mcp`
- Clients connect by URL and send `X-API-Key` (matching `MCP_KEY`) in headers.
- TLS (HTTPS) is **not** implemented in the app. Use a reverse proxy (e.g. Nginx, Caddy) on the VPS to terminate HTTPS and proxy to this server.

## Prerequisites

- Node.js 18+
- **Gemini:** `GOOGLE_API_KEY` or `GEMINI_API_KEY`
- **Perplexity:** `PERPLEXITY_API_KEY`
- `MCP_KEY` (secret for `X-API-Key` header)

## VPS Setup (typical)

1. **Install Node.js** on the VPS and clone/upload this project (e.g. under `/opt/mcp` or your app user’s home).
2. **Environment:** Create a `.env` (or use systemd/process manager env) with:
   - `GOOGLE_API_KEY` or `GEMINI_API_KEY`
   - `PERPLEXITY_API_KEY`
   - `MCP_KEY` (strong random secret for remote clients)
   - Optionally: `MCP_HOST=127.0.0.1`, `MCP_PORT=8000` (so only the reverse proxy talks to the app).
3. **Run the server:**
   ```bash
   npm start
   ```
   Or with env from file:
   ```bash
   set -a && source .env && set +a && node --import tsx src/index.ts
   ```
4. **Process manager:** Use systemd, PM2, or similar so the process restarts on failure and runs under a dedicated user.

## HTTPS (reverse proxy)

- Bind the app to `127.0.0.1:8000` (or a Unix socket) so it is not directly exposed.
- Point your **domain** (e.g. `mcp.yourdomain.com`) to the VPS IP and configure the proxy.

### Example: Caddy

```text
mcp.yourdomain.com {
  reverse_proxy 127.0.0.1:8000
}
```

Caddy obtains and renews TLS automatically.

### Example: Nginx

- Obtain a certificate (e.g. Let’s Encrypt with certbot).
- Server block:

```nginx
server {
  listen 443 ssl http2;
  server_name mcp.yourdomain.com;
  ssl_certificate     /path/to/fullchain.pem;
  ssl_certificate_key /path/to/privkey.pem;

  location / {
    proxy_pass http://127.0.0.1:8000;
    proxy_http_version 1.1;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Accept $http_accept;
    proxy_buffering off;
  }
}
```

After editing, reload Nginx.

## Security

- **Auth:** All requests to `/gemini/mcp` and `/perplexity/mcp` require the `X-API-Key` header to match `MCP_KEY`. Use a long, random value and keep it secret.
- **Firewall:** Allow 80/443 on the VPS; do not expose the Node port (e.g. 8000) publicly unless you add auth at the proxy.
- **DNS rebinding:** With `MCP_HOST=0.0.0.0`, the SDK may warn about missing DNS rebinding protection; behind a reverse proxy and with `MCP_KEY`, this is acceptable. For stricter setups, bind to `127.0.0.1` and proxy only.

## Health / sanity check

From your machine (with `MCP_KEY` set locally):

```bash
curl -s -X POST "https://mcp.yourdomain.com/gemini/mcp" \
  -H "Content-Type: application/json" \
  -H "X-API-Key: $MCP_KEY" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05","capabilities":{},"clientInfo":{"name":"test","version":"0.0.0"}}}'
```

You should get a JSON-RPC `result` with server capabilities. Repeat with `/perplexity/mcp` for the Perplexity endpoint.
