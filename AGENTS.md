# Agent Configuration

Knowledge-base repository. Primary output is structured Markdown under `./docs/`.

## Policy Priority

`CLAUDE.md` is the canonical policy for:

- mode routing (Recall, Quick-Write, Deep Research)
- confidence and perspective labels
- citation integrity rules
- research bundle schema
- failure handling and acceptance gates

If guidance in this file differs from `CLAUDE.md`, follow `CLAUDE.md`.

## Minimal Operating Checklist

1. Check `./docs/README.md` for existing topic paths before creating new folders.
2. Read existing topic files before making edits; merge-first, never blind overwrite.
3. Use kebab-case file/folder names.
4. Cite non-trivial claims using `[Title - Author/Org, Date](URL)`.
5. Apply confidence labels and perspective labels where relevant.
6. Update `./docs/README.md` when topic coverage changes.

## Deep Research Execution

For Deep Research, use `.claude/ORCHESTRATOR.md` plus subagent/skill docs under `.claude/`.
