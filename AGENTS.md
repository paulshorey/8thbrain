# Agent Configuration

Objective: maintain a source-backed knowledge base in `./docs/` for any topic type (factual, technical, or contested).

## Routing

- If the request mentions or implies **research/evidence gathering**, run **Deep Research** via `.claude/ORCHESTRATOR.md`.
- Use **Quick-Write** only for small edits that do not require new external research.
- If unsure, choose Deep Research.

## Key Files

- `CLAUDE.md` — primary operating manual
- `.claude/ORCHESTRATOR.md` — orchestrator workflow (main context thread)
- `.claude/subagents/*/AGENT.md` — parallel research worker instructions
- `.claude/skills/*/SKILL.md` — post-research skills
- `docs/README.md` — topic index

## Working Rules

1. Read `docs/README.md` before creating new topics.
2. Merge into existing topic material when appropriate.
3. Read existing topic files before editing.
4. Cite major claims and track confidence levels.
5. Update `docs/README.md` when you create or significantly expand topics.

## Documentation Shape

Use adaptive structure:

- one markdown file for simple topics
- multiple files for complex topics or independent subtopics

Do not force a fixed template.

## Avoid

- creating near-duplicate topics
- overwriting existing content without reading it
- forcing controversy framing onto non-contested topics
- omitting sources for consequential claims
