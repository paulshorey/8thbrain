---
name: research-documentation
description: Convert research into Markdown under ./docs/{topic_title}/ with perspective labels, confidence ratings, steelmanned disagreements, cross-references, merge-safe updates.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich Markdown.
`CLAUDE.md` is canonical for structure, labels, confidence, and quality gates.

Use when:

- subagent research (and optionally dialectical-analysis) is complete
- user asks to create, continue, or expand a topic

Do not use when:

- research is incomplete and uncited
- user only wants brainstorming

## Entry Criteria (all required)

- Topic slug resolved.
- At least one research bundle or validated local evidence exists.
- Major claims are source-traceable.

## Phase 1 — Topic Path Resolution

Normalize topic to kebab-case slug. Check ./docs/README.md for existing or similar topics. Merge into existing if near-duplicate. Gate: target directory selected, no duplication.

## Phase 2 — Existing Content Intake

If topic exists: read intro.md and subtopics. If research-bundles exist, treat as primary context; merge if orchestrator did not combine. Build merge map: keep, update, extend, deprecate. Gate: context integrated into writing plan.

## Phase 3 — Write intro.md

Write or update `./docs/{topic_title}/intro.md`.
Select building blocks by topic:

- topic overview
- core concepts
- mechanism/how it works
- major perspectives (labels as appropriate)
- key developments/timeline
- trade-offs and limitations
- open questions
- strongest challenges
- practical applications (if relevant)
- subtopic index
- related topics

Intro must stand alone while linking to deeper files.
Gate: comprehensive, structured, cross-linked.

## Phase 4 — Subtopic Decomposition

Create ./docs/{topic_title}/{sub_topic}.md when section exceeds ~500 words, may update independently, or has significant disagreement. Include focused explanation, perspective labels, confidence ratings, citations. Gate: complex areas split.

## Phase 5 — Disagreements

When topic has substantial debates: create disagreements.md. Per claim: question at issue, Position A (steelmanned + evidence), Position B (steelmanned + evidence), what resolves it, who holds each. Gate: steelmanned positions documented.

## Phase 6 — Citation and Confidence

Major claims: `[Title - Author/Org, Date](URL)`.
If source volume is large (15+), use `sources.md` table.
Assign confidence using CLAUDE.md evidence rubric.
Validate internal links and cross-references.
Gate: source-traceable, confidence-rated, navigable.

Anti-hallucination checks:

- no fabricated sources
- any inaccessible/unverified source marked explicitly
- confidence downgraded when evidence is weak

## Phase 7 — Index Update

Update ./docs/README.md: topic name linked to intro.md, one-line description, maturity (Seed/Growing/Mature/Needs Update), last updated. Gate: index reflects state.

## Phase 8 — Self-Reflection

Write reflection to `./docs/{topic_title}/notes.md` with dated heading:

- what surprised you
- where confidence is weakest
- what to research next
- suspected blind spots

Gate: reflection documented.

## Phase 9 — Merge-Safe Finalization

Re-read existing files. Preserve prior context unless superseded. If contradictory historical content, keep both and label conflict. Run CLAUDE.md quality checklist. Gate: no valuable prior knowledge lost.

## Exit Criteria

- `intro.md` and needed subtopic files updated.
- Confidence and perspective labels are applied appropriately.
- Source traceability is preserved for major claims.
- `docs/README.md` updated.
- Reflection appended to `notes.md`.
- Existing valuable content retained or explicitly superseded.

## Anti-Patterns

Writing without reading first; dumping into intro; one-sided conclusions; omitting sources; equal validity regardless of evidence; overwriting without merge; omitting confidence; forcing debate onto non-contested; forcing tutorial onto contested.
