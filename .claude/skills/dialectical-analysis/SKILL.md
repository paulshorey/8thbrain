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

Stress-test research findings.

Canonical policy lives in `CLAUDE.md`. This skill is optional and should run when disagreement is meaningful.

## Entry Criteria (all required)

- At least one valid research bundle exists (success or partial).
- Major claims are source-linked.
- Topic has genuine disagreement, competing approaches, or hidden assumptions worth testing.

Skip when:

- topic is factual/reference-oriented with broad agreement
- research is incomplete or uncited
- user requested only a concise summary/tutorial

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

Output sections (required):

1. Confirmed Contradictions
2. Hidden Assumptions
3. Alternative Frameworks
4. Conditional Claims
5. Unknown Unknowns
6. Strongest Challenge

Save to:

- `./docs/{topic-slug}/research-bundles/latest-dialectical-analysis.md` when slug exists
- otherwise return structured markdown output

This output feeds `research-documentation`.

## Query Patterns

Direct challenge: "criticism of [X]", "problems with [X]", "limitations of [X]". Assumption: "[X] assumes", "[X] myth", "rethinking [X]". Alternatives: "alternative to [X]", "instead of [X]", "beyond [X]". Failure: "[X] failed", "unintended consequences [X]". Who disagrees: "[X] critics", "[X] skeptics", "[X] controversy".

## Anti-Patterns

Manufactured controversy; fake balance (unsupported equal to evidenced); weak-manning; nihilistic relativism; contrarianism as identity; ignoring base rates; domain blindness.

## Exit Criteria

- Strongest competing positions are steelmanned.
- Evidence and assumptions are explicit.
- Contradictions and unresolved uncertainties are clearly documented.
- Output is saved using the expected path convention.
