# Research Subagents

**For agents:** This is an index. **Read each folder's `AGENT.md` for full procedural instructions.** The orchestrator (ORCHESTRATOR.md) launches all three in parallel and combines their output.

| Subagent | Purpose | Min Queries (Standard tier) | Config |
|----------|---------|----------------------------|--------|
| deeper-research | WebSearch, term variations, exhaustive harvesting | 20+ | none |
| perplexity-deep-research | Perplexity MCP Sonar | 8+ | PERPLEXITY_API_KEY, MCP |
| gemini-deep-research | Gemini Deep Research 100+ sources | via Gemini | GEMINI_API_KEY, MCP or API |

**Launch:** All three in parallel. Pass topic slug, tier, and tier's min sources/queries. On failure or timeout, ignore and continue with others. Applies to all research types (factual, technical, contested).
