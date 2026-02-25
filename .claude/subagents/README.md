# Research Subagents

Three parallel subagents (Claude Sonnet). Launch per scope tier; ignore failures/timeouts.

| Subagent | Purpose | Config | Launched For |
|----------|---------|--------|--------------|
| deeper-research | WebSearch, tier-scaled queries | none | All tiers |
| perplexity-deep-research | Perplexity Sonar | PERPLEXITY_API_KEY, MCP | Standard, Deep |
| gemini-deep-research | Gemini 100+ sources | GEMINI_API_KEY, MCP or API | Standard, Deep |

All subagents produce output in the **standardized bundle format** (see ORCHESTRATOR.md). The orchestrator combines bundles, then runs dialectical-analysis (when warranted) and research-documentation.

If all subagents fail, the orchestrator falls back to direct WebSearch research.
