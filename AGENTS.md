# Agent Configuration (Cursor / Copilot)

This file is for AI agents running in **Cursor, Copilot, or similar editors**. If you are running in **Claude Code**, follow `CLAUDE.md` instead — it contains the full deep-research pipeline and skills workflow.

## What This Repository Is

A Markdown knowledge base stored under `./docs/`. Each topic has its own folder with an `intro.md` and optional subtopic files. The knowledge base spans any subject — technical, scientific, historical, political, or otherwise.

## How to Work With It

### Reading existing topics

- Check `./docs/README.md` for the master topic index.
- Each topic lives in `./docs/{topic-title}/intro.md`.
- Subtopics, disagreement docs, and source tables may exist alongside the intro.

### Adding or updating content

1. **Check for existing topics first.** Read `./docs/README.md` and search for similar folder names before creating a new one. Merge into existing topics when possible.
2. **Read before writing.** Always read existing files in a topic folder before editing. Never blindly overwrite.
3. **Use kebab-case** for all folder and file names.
4. **Cite sources** for key claims. Inline format: `[Title - Author/Org, Date](URL)`.
5. **Mark uncertainty.** Use confidence ratings (`[HIGH CONFIDENCE]`, `[MEDIUM CONFIDENCE]`, `[LOW CONFIDENCE]`) on major claims.
6. **Label perspectives** where they differ: `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
7. **Update the index.** After creating or significantly updating a topic, update `./docs/README.md` with the topic name, description, maturity level, and date.

### File structure

```text
./docs/{topic-title}/
  intro.md              # Required — topic overview, understandable standalone
  {sub-topic}.md        # When intro becomes too dense (~500+ words per section)
  disagreements.md      # When topic has significant competing positions
  sources.md            # When source table is large (15+ sources)
  timeline.md           # When chronological development matters
```

### What NOT to do

- Don't create near-duplicate topic folders.
- Don't overwrite existing research without reading it first.
- Don't present one-sided conclusions on contested topics.
- Don't omit sources for significant claims.

## Deep Research

This repository includes a structured deep-research pipeline defined in `CLAUDE.md` and `.claude/skills/`. That pipeline is designed for Claude Code and involves multi-phase source harvesting, dialectical analysis, and gated quality checks. You do not need to follow that pipeline — but if the user asks for "deep research" or "full analysis," point them toward running it in Claude Code where the skills are available.
