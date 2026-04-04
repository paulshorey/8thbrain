# API Implementation Review: Perplexity and Gemini

This document summarizes how this MCP server uses the **Perplexity** and **Google Gemini** APIs, and whether the implementation matches current docs and best practices.

---

## 1. Gemini Deep Research API

### Official API

- **Product:** [Gemini Deep Research](https://blog.google/technology/developers/deep-research-agent-gemini-api/) via the **Interactions API** (public beta).
- **Agent ID:** `deep-research-pro-preview-12-2025` (matches [community/docs](https://www.philschmid.de/gemini-deep-research-getting-started)).
- **Flow:** Create an interaction with `background: true`, then poll `interactions.get(interactionId)` until `status === "completed"` (or `failed`/`cancelled`). No streaming in this server.

### Implementation in this server

- **File:** `src/providers/gemini.ts`
- **SDK:** `@google/genai` (`GoogleGenAI`).
- **Behavior:**
  - `ai.interactions.create({ agent: DEEP_RESEARCH_AGENT, input: prompt, background: true })`.
  - Polling with `ai.interactions.get(interactionId)` every 10s, up to `max_wait_seconds` (default 600), with retries (exponential backoff, 3 retries per poll).
  - Returns the last output’s `text` on success; on failure/cancel returns the error; on timeout returns the interaction ID for manual follow-up.
- **Tool:** `run_deep_research` with `query`, optional `focus_areas`, `output_format`, and `max_wait_seconds`.

### Verdict

- **Implemented correctly** for the documented Interactions API and agent ID.
- **Optional improvement:** Expose or document the interaction ID in the success response so users can resume or inspect in Google AI Studio.

---

## 2. Perplexity API (Sonar Pro)

### Official API

- **Chat completions:** [Perplexity Chat Completions](https://docs.perplexity.ai/api-reference/chat-completions-post), OpenAI-compatible.
- **Model:** This server uses `**sonar-pro`** for fast, factual, real-time research (single request/response, non-streaming).
- **Auth:** `Authorization: Bearer <api_key>` (handled by the official SDK).

### Implementation in this server

- **File:** `src/providers/perplexity.ts`
- **SDK:** `@perplexity-ai/perplexity_ai` (`Perplexity`).
- **Behavior:**
  - `client.chat.completions.create({ model: "sonar-pro", messages })` with optional system message for `system_context`.
  - Single-shot; no streaming. Response: `choices[0].message.content` (string or array of parts); usage logged.
- **Tool:** `sonar_research` with `query` and optional `system_context`.

### Sonar Pro vs Sonar Deep Research

Perplexity also offers **Sonar Deep Research** ([docs](https://docs.perplexity.ai/docs/getting-started/models/models/sonar-deep-research)):

- **Model name:** `sonar-deep-research`
- **Use case:** Exhaustive, multi-step research (many searches, detailed reports), closer to Gemini Deep Research.
- **Endpoint:** Same `POST https://api.perplexity.ai/chat/completions`, different `model` field.

This server currently implements **only `sonar-pro`**. That is correct for “quick, factual real-time research” as described in the README. It is **not** missing for the stated scope; adding an optional tool or parameter for `sonar-deep-research` would be an enhancement for users who want Perplexity-based deep research.

### Verdict

- **Implemented correctly** for **Sonar Pro** (chat completions, correct model and usage).
- **Not missing** for the current design; **optional enhancement:** support `sonar-deep-research` for long-form research via Perplexity.

---

## 3. MCP and client expectations

### Streamable HTTP

- The server uses **Streamable HTTP** (`StreamableHTTPServerTransport`) with **stateless** mode (`sessionIdGenerator: undefined`): each request can be handled independently; no in-memory session store.
- **Methods:** GET, POST, and DELETE are forwarded to the transport so the server is compliant with the MCP Streamable HTTP spec (POST for JSON-RPC; GET for optional SSE; DELETE for session teardown). In stateless mode, GET may not establish a long-lived SSE stream but the transport still handles the method correctly.
- **Auth:** `X-API-Key` header required; no built-in OAuth (can be added at the reverse proxy or in middleware).

### Cursor and Claude

- **Cursor:** Expects a **Streamable HTTP** MCP server when using a `url`. Configuration is via `url` and `headers` (and optionally `type: "streamableHttp"`). This server’s endpoints and auth match that.
- **Claude:** Custom Connectors use the same HTTPS URL and support header-based auth; the server meets that.

No missing pieces for standard remote Cursor/Claude connections over HTTPS, assuming TLS is provided by the reverse proxy and `MCP_KEY` is set and passed as `X-API-Key`.

---

## 4. Summary


| Backend    | API / model                      | Status  | Notes                                                |
| ---------- | -------------------------------- | ------- | ---------------------------------------------------- |
| Gemini     | Deep Research (Interactions API) | Correct | Agent ID and polling flow match docs.                |
| Perplexity | Sonar Pro (chat completions)     | Correct | Optional: add Sonar Deep Research for long research. |
| MCP        | Streamable HTTP, stateless       | Correct | GET/POST/DELETE handled; suitable for Cursor/Claude. |


