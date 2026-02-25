---
name: dialectical-analysis
description: Find contradictions, alternative framings, hidden assumptions, opposing viewpoints. Run after subagent research when topic has meaningful disagreement.
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

Stress-test research findings. Optional. Use when topic has genuine disagreement, competing approaches with real trade-offs, hidden assumptions worth examining, or user requested ("find contradictions", "devil's advocate"). Skip when: topic is factual/reference-oriented, subagent research found broad agreement, research incomplete, or user wants summary/tutorial only.

Goal: intellectual honesty about credible thought. Not balance for its own sake. Not contrarianism.

## Phase 1 — Assumption Extraction

List every implicit and explicit assumption underlying conclusions. For each: is it universal or context-dependent; who would reject and why; what changes if false. Categorize: structural, normative, empirical, temporal, methodological. Gate: assumption inventory with vulnerability ratings exists.

## Phase 2 — Challenge Search

For each major conclusion: negate and search ("X is effective" to "X failures", "X limitations"); find strongest credible critic; find historical reversals; find conditional inversions. Scale: deeply contested 8+ searches; mildly nuanced 3-4. Gate: conclusions tested against credible alternatives.

## Phase 3 — Alternative Framing

Reframe question, cross-disciplinary lens, contextual reframing (settings, cultures, use cases), temporal reframing, scale reframing. Contested topics: 4+ explorations, 2+ genuinely different framings. Gate: alternative framings documented.

## Phase 4 — Disagreement Map

For each position: Position Holder, Position, Best Argument, Best Evidence, What Would Change This Position. Present strongest argument (not weakest). Note absent perspectives. Gate: disagreements mapped with specific reasoning.

## Phase 5 — Contradiction Synthesis

Output: Confirmed Contradictions, Hidden Assumptions, Alternative Frameworks, Conditional Claims, Unknown Unknowns, Strongest Challenge. Save to disk. Feeds into research-documentation.

## Query Patterns

Direct challenge: "criticism of [X]", "problems with [X]", "limitations of [X]". Assumption: "[X] assumes", "[X] myth", "rethinking [X]". Alternatives: "alternative to [X]", "instead of [X]", "beyond [X]". Failure: "[X] failed", "unintended consequences [X]". Who disagrees: "[X] critics", "[X] skeptics", "[X] controversy".

## Anti-Patterns

Manufactured controversy; fake balance (unsupported equal to evidenced); weak-manning; nihilistic relativism; contrarianism as identity; ignoring base rates; domain blindness.
