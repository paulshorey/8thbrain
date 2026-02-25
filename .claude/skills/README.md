# Orchestrator Skills

Two skills are used by the **main orchestrator** after subagent research completes. These run in the primary context thread — not in parallel subagents.

| Order | Skill | Purpose |
|-------|-------|---------|
| 1 | `dialectical-analysis` | Assumption extraction, challenge search, alternative framings, disagreement mapping (when topic warrants it) |
| 2 | `research-documentation` | Structured Markdown writing with adaptive structure, confidence ratings, self-reflection, and merge-safe updates |

The orchestrator first runs the three research subagents in parallel (see `.claude/subagents/`), waits for their bundled outputs, then applies these skills to produce the final docs.

## Layout

```text
.claude/skills/
  dialectical-analysis/SKILL.md
  research-documentation/SKILL.md
  README.md
```
