# Research Subagents

Three parallel leaf subagents support Deep Research mode.

Canonical policy lives in `CLAUDE.md`; orchestration flow lives in `.claude/ORCHESTRATOR.md`.

## Shared Contract

All subagents must:

1. Accept topic, topic slug, and scope tier.
2. Return output in the canonical research bundle schema defined in `CLAUDE.md`.
3. Mark status as `success`, `partial`, or `failed`.
4. Include confidence and limitations.
5. Never invoke other subagents.

## Subagents

| Subagent | Purpose | Config |
|----------|---------|--------|
| deeper-research | Broad WebSearch query lattice and source harvesting | none |
| perplexity-deep-research | Perplexity Sonar research synthesis | `PERPLEXITY_API_KEY` + MCP |
| gemini-deep-research | Gemini deep research synthesis | `GEMINI_API_KEY` + MCP or API |

Failures/timeouts are expected in real-world runs; orchestrator continues with available bundles.
