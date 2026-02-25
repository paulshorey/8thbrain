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

**Goal:** Transform validated research into maintainable, citation-rich Markdown under `./docs/{topic_title}/`. Produce docs that stand alone, trace to sources, and preserve prior content.

**Execute phases 1–9 in order. Do not skip phases.** Phase is complete when the gate artifact exists.

## Run When

- Subagent research (and optionally dialectical-analysis) is complete.
- User asks to create, continue, or expand a topic.

## Do NOT Run When

- Research is incomplete or uncited.
- User wants brainstorming only.

## Required Conventions (Inline)

- **Citations:** `[Title - Author/Org, Date](URL)` for key claims.
- **Perspective labels:** [CONSENSUS], [MAJORITY VIEW], [CONTESTED], [MINORITY VIEW], [HETERODOX], [EVOLVING].
- **Confidence:** [HIGH CONFIDENCE], [MEDIUM CONFIDENCE], [LOW CONFIDENCE] on major findings.
- **File naming:** Lowercase kebab-case. Check `docs/README.md` before creating topics. Merge into existing if near-duplicate.

## Phase 1 — Topic Path Resolution

**Do:** Normalize topic to kebab-case slug. Check `./docs/README.md` for existing or similar topics. Merge into existing if near-duplicate.

**Gate:** Target directory selected, no duplication. Phase complete.

## Phase 2 — Existing Content Intake

**Do:** If topic exists, read intro.md and subtopics. If research-bundles exist, treat as primary context; merge if orchestrator did not combine. Build merge map: keep, update, extend, deprecate.

**Gate:** Context integrated into writing plan. Phase complete.

## Phase 3 — Write intro.md

**Do:** Write or update `./docs/{topic_title}/intro.md`. Select building blocks by topic type:

- Topic overview
- Core concepts
- How it works
- Major perspectives (label [CONSENSUS], [CONTESTED], [MINORITY VIEW])
- Key developments / timeline
- Trade-offs / limitations
- Open questions
- Strongest challenges
- Practical applications
- Subtopic index
- Related topics
- Sources

Intro must stand alone. Include cross-links to subtopics.

**Gate:** Comprehensive, structured, cross-linked. Phase complete.

## Phase 4 — Subtopic Decomposition

**Do:** Create `./docs/{topic_title}/{sub_topic}.md` when a section exceeds ~500 words, may update independently, or has significant disagreement. Include: focused explanation, perspective labels, confidence ratings, citations.

**Gate:** Complex areas split. Phase complete.

## Phase 5 — Disagreements

**Do:** When topic has substantial debates, create `disagreements.md`. Per claim: question at issue, Position A (steelmanned + evidence), Position B (steelmanned + evidence), what resolves it, who holds each.

**Gate:** Steelmanned positions documented. Phase complete.

## Phase 6 — Citation and Confidence

**Do:** Major claims: `[Title - Author/Org, Date](URL)`. If 15+ sources, use `sources.md` table. Assign confidence per CLAUDE.md. Validate internal links. Add cross-references.

**Gate:** Source-traceable, confidence-rated, navigable. Phase complete.

## Phase 7 — Index Update

**Do:** Update `./docs/README.md`: topic name linked to intro.md, one-line description, maturity (Seed/Growing/Mature/Needs Update), last updated.

**Gate:** Index reflects current state. Phase complete.

## Phase 8 — Self-Reflection

**Do:** Write reflection: what surprised, where least confident, what to research next, suspected blind spots.

**Gate:** Reflection documented. Phase complete.

## Phase 9 — Merge-Safe Finalization

**Do:** Re-read existing files. Preserve prior context unless superseded. If contradictory historical content, keep both and label conflict. Run CLAUDE.md quality checklist.

**Gate:** No valuable prior knowledge lost. Phase complete.

## Anti-Patterns

Do NOT: write without reading first; dump into intro; conclude one-sidedly; omit sources; treat unevidenced positions as equal to evidenced; overwrite without merge; omit confidence; force debate onto non-contested topics; force tutorial onto contested topics.
