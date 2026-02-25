---
name: dialectical-analysis
description: Find contradictions, alternative framings, hidden assumptions, opposing viewpoints. Run ONLY when topic has meaningful disagreement.
allowed-tools:
  - WebSearch
  - Read
  - Glob
  - Grep
  - Write
  - TodoWrite
  - Task
---

# Dialectical Analysis

**Goal:** Stress-test research findings. Surface credible contradictions, hidden assumptions, and alternative framings. Aim for intellectual honesty about credible thought — not balance for its own sake, not contrarianism.

**Execute phases 1–5 in order. Do not skip phases.** Phase is complete when the gate artifact exists.

---

## ⚠️ Do NOT Run When (Skip This Skill)

- Topic is purely factual, reference-oriented, technical, or tutorial-style.
- Topic is an implementation plan, technical deep dive, or exhaustive fact list.
- Subagent research found broad agreement with no real controversy.
- Research is incomplete or uncited.
- User wants summary or tutorial only.

**Default: SKIP** for most factual and technical topics.

---

## Run When (All Must Apply)

- Topic has genuine disagreement, competing approaches with real trade-offs.
- Hidden assumptions worth examining.
- User explicitly requested ("find contradictions", "devil's advocate").

## Phase 1 — Assumption Extraction

**Do:** List every implicit and explicit assumption underlying conclusions. For each: Is it universal or context-dependent? Who would reject it and why? What changes if it is false? Categorize: structural, normative, empirical, temporal, methodological.

**Gate:** Produce an assumption inventory with vulnerability ratings. Phase complete when this artifact exists.

## Phase 2 — Challenge Search

**Do:** For each major conclusion: negate and search ("X is effective" → "X failures", "X limitations"); find strongest credible critic; find historical reversals; find conditional inversions.

**Scale:** Deeply contested topics: 8+ searches. Mildly nuanced: 3–4.

**Gate:** Every conclusion tested against credible alternatives. Phase complete when documented.

## Phase 3 — Alternative Framing

**Do:** Reframe the question. Try: cross-disciplinary lens, contextual reframing (settings, cultures, use cases), temporal reframing, scale reframing. Contested topics: 4+ explorations, 2+ genuinely different framings.

**Gate:** Alternative framings documented. Phase complete when recorded.

## Phase 4 — Disagreement Map

**Do:** For each position: Position Holder, Position, Best Argument, Best Evidence, What Would Change This Position. Present strongest argument (not weakest). Note absent perspectives.

**Gate:** Disagreements mapped with specific reasoning. Phase complete when map exists.

## Phase 5 — Contradiction Synthesis

**Do:** Produce output with: Confirmed Contradictions, Hidden Assumptions, Alternative Frameworks, Conditional Claims, Unknown Unknowns, Strongest Challenge. Save to disk. Feeds into research-documentation.

## Query Patterns

- Direct challenge: "criticism of [X]", "problems with [X]", "limitations of [X]"
- Assumption: "[X] assumes", "[X] myth", "rethinking [X]"
- Alternatives: "alternative to [X]", "instead of [X]", "beyond [X]"
- Failure: "[X] failed", "unintended consequences [X]"
- Who disagrees: "[X] critics", "[X] skeptics", "[X] controversy"

## Anti-Patterns

Do NOT: manufacture controversy; fake balance (unsupported equal to evidenced); weak-manning; nihilistic relativism; contrarianism as identity; ignore base rates; domain blindness.
