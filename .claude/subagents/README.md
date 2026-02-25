# Research Subagents

**For agents:** This index lists subagents. Full instructions are in each folder's `AGENT.md`. The orchestrator (ORCHESTRATOR.md) launches and combines them.

| Subagent | Purpose | Min Queries (Standard tier) | Config |
|----------|---------|----------------------------|--------|
| deeper-research | WebSearch, term variations, exhaustive harvesting | 20+ | none |
| perplexity-deep-research | Perplexity MCP Sonar | 8+ | PERPLEXITY_API_KEY, MCP |
| gemini-deep-research | Gemini Deep Research 100+ sources | via Gemini | GEMINI_API_KEY, MCP or API |

Launch all three in parallel. Pass topic slug, tier, and tier's min sources/queries. On failure or timeout, ignore and continue with others.
