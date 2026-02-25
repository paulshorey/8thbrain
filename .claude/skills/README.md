# Orchestrator Skills

**For agents:** This is an index. **Read each folder's `SKILL.md` for full procedural instructions.** Skills run in the main context after subagent research. Do not run skills in parallel.

| Skill | When to Run | Phases |
|-------|-------------|--------|
| dialectical-analysis | **Only when** topic has meaningful disagreement, competing approaches, multiple perspectives. Skip for factual/technical topics. | 1–5 |
| research-documentation | Always, after combine (and optionally dialectical-analysis) | 1–9 |

**Invocation:** Read the SKILL.md file. Execute phases sequentially. Complete each phase's gate before proceeding. Do not skip phases. For dialectical-analysis, check "Do NOT Run When" first — most topics skip it.
