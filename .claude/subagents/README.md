# Research Subagents

Three parallel subagents (Claude Sonnet). Launch all three; ignore failures/timeouts.

| Subagent | Purpose | Config |
|----------|---------|--------|
| deeper-research | WebSearch, 20+ queries | none |
| perplexity-deep-research | Perplexity Sonar | PERPLEXITY_API_KEY, MCP |
| gemini-deep-research | Gemini 100+ sources | GEMINI_API_KEY, MCP or API |

Orchestrator launches via mcp_task, combines bundles, runs dialectical-analysis (when warranted) and research-documentation.
