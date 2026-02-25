# Orchestrator Skills

This file is an index. Operational instructions are in each skill's `SKILL.md`.

Skills run in the orchestrator context after subagent results are combined.

| Skill | When to Run | Purpose |
|---|---|---|
| `dialectical-analysis` | Only when topic has meaningful disagreement or competing approaches | Stress-test assumptions and map strongest competing claims |
| `research-documentation` | Always after combine | Convert research context into maintainable docs |

## Execution Rules

1. Read the relevant `SKILL.md` before execution.
2. Run skills sequentially (not in parallel).
3. Skip `dialectical-analysis` for straightforward factual/technical topics with broad agreement.
