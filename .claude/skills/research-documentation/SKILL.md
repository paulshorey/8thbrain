---
name: research-documentation
description: Convert research context into organized Markdown knowledge-base files under ./docs/{topic_title}/, with perspective labels, confidence ratings, steelmanned disagreements, cross-references, and merge-safe updates.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich, multi-perspective Markdown files. See `CLAUDE.md` for file structure, naming rules, perspective labels, and confidence ratings.

## When to Use

- After `deep-research` (and optionally `dialectical-analysis` and `perplexity-sonar-followup`) is complete.
- User asks to create, continue, or expand a topic in the knowledge base.

## When NOT to Use

- Research is incomplete or uncited.
- User explicitly wants brainstorming without filesystem updates.

## Workflow

### Phase 1 — Topic Path Resolution

1. Normalize topic title to kebab-case slug.
2. Check `./docs/README.md` for existing topics with the same or similar names.
3. If a near-duplicate exists, merge into the existing topic rather than creating a new one.

**Gate:** Target topic directory is selected, no duplication.

### Phase 2 — Existing Content Intake

If topic files exist:

1. Read `intro.md` and all subtopic files.
2. Build a merge map: **keep** (still valid), **update** (needs revision), **extend** (needs more depth/perspectives), **deprecate** (superseded, with rationale preserved in a note).

**Gate:** Existing context integrated into writing plan.

### Phase 3 — Write intro.md

Write or update `./docs/{topic_title}/intro.md` with:

1. **Topic overview** — what this is and why it matters
2. **Core concepts** — foundational ideas needed to understand the topic
3. **Major perspectives** — clearly labeled with `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
4. **Key developments** — what happened and when
5. **Open questions** — what we don't know, with confidence ratings
6. **Strongest counterarguments** — steelmanned challenges to the dominant narrative
7. **Subtopic index** — links to deeper files
8. **Related topics** — cross-references to other `./docs/` topics
9. **Sources** — linked references for major claims

The intro must be understandable standalone.

**Gate:** `intro.md` is comprehensive, multi-perspective, and cross-linked.

### Phase 4 — Subtopic Decomposition

Create `./docs/{topic_title}/{sub_topic}.md` files when a section is:

- Complex enough to exceed concise intro treatment (~500+ words of dense material)
- Likely to be updated independently
- A site of significant disagreement deserving full treatment

Each subtopic file includes: focused explanation, perspective differences with labels, confidence ratings, and citations.

**Gate:** Complex areas are split into dedicated files.

### Phase 5 — Disagreement Documentation

When a topic has substantial debates, create `./docs/{topic_title}/disagreements.md`:

1. **Disagreement inventory** — list of contested claims
2. For each: claim under dispute, Position A (steelmanned + evidence), Position B (steelmanned + evidence), additional positions if relevant, what evidence would resolve it, who holds each position and why
3. **Meta-observations** — patterns in what is disputed and why

**Gate:** Disagreements documented fairly with steelmanned positions.

### Phase 6 — Citation and Confidence Integrity

1. Ensure major claims reference original sources with links. Inline format: `[Title - Author/Org, Date](URL)`.
2. For large source lists (15+), use a `sources.md` table.
3. Assign confidence ratings to major claims per `CLAUDE.md`.
4. Validate internal links between intro and subtopic files.
5. Add cross-references to related topics.

**Gate:** Documentation is source-traceable, confidence-rated, and navigable.

### Phase 7 — Topic Index Update

Update `./docs/README.md` with:

- Topic name linked to `intro.md`
- One-line description
- Maturity level (Seed / Growing / Mature / Needs Update)
- Last updated date

**Gate:** Master index reflects current state.

### Phase 8 — Self-Reflection

Before finalizing, write a brief reflection (can be a comment block at the bottom of `intro.md` or a separate note):

1. **What surprised me** — findings that contradicted initial expectations
2. **Where I'm least confident** — claims that feel weakest and why
3. **What I'd research next** — promising threads that weren't fully explored
4. **Blind spots I suspect** — perspectives or source types that may be underrepresented

This reflection serves as a roadmap for future research sessions on the topic.

**Gate:** Reflection documented.

### Phase 9 — Merge-Safe Finalization

Before saving:

1. Re-read existing file content to prevent accidental overwrites.
2. Preserve useful prior context unless superseded by better evidence.
3. If contradictory historical content exists, keep both and label the conflict.
4. Run the quality checklist from `CLAUDE.md`.

**Gate:** Topic files updated without losing valuable prior knowledge.

## Intro Skeleton

```markdown
# {Topic Title}

## Why this topic matters

## Core concepts

## Major perspectives

### [CONSENSUS] Mainstream view
### [CONTESTED] Key debate areas
### [MINORITY VIEW] Notable dissenting positions

## Key developments and timeline

## Open questions and uncertainties

## Strongest counterarguments to the dominant narrative

## Subtopics
- [Subtopic A](./subtopic-a.md)
- [Subtopic B](./subtopic-b.md)

## Related Topics
- [Related Topic](../related-topic/intro.md) — connection description

## Sources and citations

## Research Reflection
<!-- What surprised me, where I'm least confident, what I'd explore next -->
```

## Anti-Patterns

- Writing without reading existing files first
- Dumping all detail into intro instead of splitting subtopics
- One-sided conclusions on contested topics
- Omitting source links
- Treating all perspectives as equally valid regardless of evidence
- Overwriting previous research without merge consideration
- Omitting confidence ratings
