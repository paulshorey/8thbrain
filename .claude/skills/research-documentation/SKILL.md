---
name: research-documentation
description: Convert research into Markdown under ./docs/{topic_title}/ with citations, confidence ratings, cross-references, and merge-safe updates. Adapt structure to match the topic — exhaustive facts for technical subjects, multiple perspectives for contested topics.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

**Goal:** Transform validated research into maintainable, citation-rich Markdown under `./docs/{topic_title}/`. Produce docs that stand alone, trace to sources, and preserve prior content. The document shape is determined by the topic — not by a fixed template.

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

**Do:** Write or update `./docs/{topic_title}/intro.md`. Select building blocks that fit the topic. Do not force blocks that don't apply.

**Universal — use for most topics:**
- Topic overview (what it is, why it matters)
- Core concepts and terminology
- How it works / mechanisms
- Practical applications and use cases
- Trade-offs, limitations, or caveats
- Subtopic index (links to sub-files)
- Related topics
- Sources

**For technical or reference topics:**
- Specifications, API details, or formal definitions
- Implementation patterns and worked examples
- Edge cases and failure modes
- Comparison with alternatives (factual, not adversarial)

**For historical or chronological topics:**
- Key developments and timeline
- Context and causes

**For contested or analytical topics:**
- Major perspectives (label [CONSENSUS], [CONTESTED], [MINORITY VIEW], etc.)
- Strongest arguments and evidence for each position
- Open questions and unresolved debates

Intro must stand alone. Include cross-links to subtopics. Do not pad with sections the topic doesn't need.

**Gate:** Comprehensive, structured for this topic type, cross-linked. Phase complete.

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

Do NOT:
- Write without reading existing files first
- Dump everything into intro.md — split large sections into subtopic files
- Omit citations for significant claims
- Overwrite prior content without merging
- Omit confidence ratings on major findings
- Force analytical or debate framing onto factual/technical topics that don't need it
- Force tutorial framing onto genuinely contested topics
- Treat unevidenced positions as equal to evidenced ones
- Conclude one-sidedly on contested topics
