# Research Subagents

Three research subagents run **in parallel** to gather multi-perspective evidence. Each uses **Claude Sonnet**. If one fails or times out, it is ignored — the orchestrator continues with the others.

| Subagent | Purpose | Key Tools |
|----------|---------|-----------|
| `deeper-research` | Exhaustive web search with term variations, 20+ queries, multi-class sources | WebSearch, Read, Glob, Grep |
| `perplexity-deep-research` | Deep search via Perplexity Sonar model | Perplexity MCP (search, research, ask, reason) |
| `gemini-deep-research` | Autonomous research across 100+ sources via Google Gemini | Gemini MCP or Interactions API |

## Orchestration

The **main orchestrator** (running in the primary context) coordinates these subagents:

1. **Launch in parallel** — Use `mcp_task` or equivalent to spawn all three with the user's research topic.
2. **Wait for responses** — Collect outputs; ignore failures/timeouts.
3. **Combine** — Merge research bundles from successful subagents into a unified context.
4. **Then run** — `dialectical-analysis` (when warranted) and `research-documentation` to produce the final docs.

## Layout

```text
.claude/subagents/
  deeper-research/AGENT.md
  perplexity-deep-research/AGENT.md
  gemini-deep-research/AGENT.md
  README.md
```

## Configuration

- **Perplexity**: Requires Perplexity MCP and `PERPLEXITY_API_KEY`.
- **Gemini**: Requires `GEMINI_API_KEY` and either `gemini-deep-research-mcp` or `google-genai` (Interactions API).
- **Deeper research**: No external config — uses built-in WebSearch.
