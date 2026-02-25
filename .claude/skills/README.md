# Skills

Four skills form the research pipeline:

| Order | Skill | Purpose |
|-------|-------|---------|
| 1 | `deep-research` | Broad multi-perspective source harvesting with saturation gates |
| 2 | `dialectical-analysis` | Assumption extraction, challenge search, alternative framings, disagreement mapping |
| 3 | `perplexity-sonar-followup` | Targeted gap-filling via Perplexity MCP (only when gaps remain after steps 1-2) |
| 4 | `research-documentation` | Structured Markdown writing with adaptive structure, confidence ratings, self-reflection, and merge-safe updates |

In Deep Research Mode, skills are invoked sequentially as part of the pipeline defined in `CLAUDE.md`. Each skill references `CLAUDE.md` for shared standards (cognitive mandates, perspective labels, confidence ratings, file structure).

## Layout

```text
.claude/skills/
  deep-research/SKILL.md
  dialectical-analysis/SKILL.md
  perplexity-sonar-followup/SKILL.md
  research-documentation/SKILL.md
```
