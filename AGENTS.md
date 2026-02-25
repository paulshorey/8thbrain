# Agent Configuration

Knowledge base. Output: structured Markdown under `./docs/`. Include working code examples when the topic involves implementations.

**Full operating manual:** Read `CLAUDE.md` for the complete instruction set — cognitive mandates, quality checklists, documentation standards, source quality tiers, and all operating modes.

This file covers Cursor-specific procedures only. `CLAUDE.md` is the canonical source of truth.

## Quick Reference

| Mode | Trigger | Action |
|------|---------|--------|
| Deep Research | "research [topic]", "full analysis" | Orchestration pipeline (`.claude/ORCHESTRATOR.md`) |
| Recall | "what do we know about [topic]", "summarize [topic]" | Read existing `./docs/` files, synthesize response |
| Quick-Write | "add a note", "update [topic] with" | Direct edit to docs, skip subagents |

## Repository Layout

- `./docs/` — Knowledge base. Topic folders contain `intro.md` plus optional subtopics, disagreements.md, sources.md, reflection.md.
- `.claude/ORCHESTRATOR.md` — Subagent launch logic and standardized bundle format.
- `.claude/subagents/` — Three parallel research agents (deeper-research, perplexity-deep-research, gemini-deep-research).
- `.claude/skills/` — Orchestrator skills (dialectical-analysis, research-documentation).
- `CLAUDE.md` — Full operating manual.

## Cursor-Specific Procedures

### Launching Subagents

Use the `Task` tool with `subagent_type: "generalPurpose"`. See `.claude/ORCHESTRATOR.md` for the prompt template and parallel dispatch pattern.

### Skills

Cursor agent skills for this project:
- `dialectical-analysis` — Challenge research findings (read `.claude/skills/dialectical-analysis/SKILL.md`)
- `research-documentation` — Convert research to docs (read `.claude/skills/research-documentation/SKILL.md`)

### Writing to the Knowledge Base

1. Read `./docs/README.md` for the topic index. Check for semantic duplicates before creating new topics.
2. Read all existing files in the target topic folder before writing. Never overwrite blindly.
3. Use kebab-case for folder and file names.
4. Cite sources: `[Title - Author/Org, Date](URL)`.
5. Assign confidence ratings: `[HIGH CONFIDENCE]`, `[MEDIUM CONFIDENCE]`, `[LOW CONFIDENCE]`.
6. Label perspectives: `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
7. Update `./docs/README.md` with topic name, description, maturity, date.

### Prohibited

- Near-duplicate topic folders (check semantic equivalents, not just exact names).
- Overwriting without reading existing content first.
- One-sided conclusions on contested topics.
- Omitting sources for significant claims.
- Producing empty output when subagents fail (use the fallback strategy in ORCHESTRATOR.md).
