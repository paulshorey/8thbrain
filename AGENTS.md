# Agent Configuration

This repository is a **knowledge base**, not a software codebase. The primary output is structured Markdown prose stored under `./docs/`. When a topic involves code, algorithms, or technical implementations, include working examples directly in the Markdown documents.

## What This Repository Contains

- `./docs/` — The knowledge base. Each topic has its own folder with an `intro.md` and optional subtopic files. Topics span any subject.
- `.claude/skills/` — Research workflow skills (deep-research, dialectical-analysis, perplexity-sonar-followup, research-documentation). These define a structured pipeline for thorough, multi-perspective research.
- `CLAUDE.md` — The full operating manual with cognitive mandates, documentation standards, and quality checklists.

## Reading Existing Topics

- Check `./docs/README.md` for the master topic index.
- Each topic lives in `./docs/{topic-title}/intro.md`.
- Subtopics, disagreement docs, and source tables may exist alongside the intro.

## Adding or Updating Content

1. **Check for existing topics first.** Read `./docs/README.md` and search for similar folder names before creating a new one. Merge into existing topics when possible.
2. **Read before writing.** Always read existing files in a topic folder before editing. Never blindly overwrite.
3. **Use kebab-case** for all folder and file names.
4. **Cite sources** for key claims. Inline format: `[Title - Author/Org, Date](URL)`.
5. **Mark uncertainty.** Use confidence ratings (`[HIGH CONFIDENCE]`, `[MEDIUM CONFIDENCE]`, `[LOW CONFIDENCE]`) on major claims.
6. **Label perspectives** where they differ: `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
7. **Update the index.** After creating or significantly updating a topic, update `./docs/README.md` with the topic name, description, maturity level, and date.

## File Structure

```text
./docs/{topic-title}/
  intro.md              # Required — topic overview, understandable standalone
  {sub-topic}.md        # When intro becomes too dense (~500+ words per section)
  disagreements.md      # When topic has significant competing positions
  sources.md            # When source table is large (15+ sources)
  timeline.md           # When chronological development matters
```

## What NOT to Do

- Don't create near-duplicate topic folders.
- Don't overwrite existing research without reading it first.
- Don't present one-sided conclusions on contested topics.
- Don't omit sources for significant claims.
