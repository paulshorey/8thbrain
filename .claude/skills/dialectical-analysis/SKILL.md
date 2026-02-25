---
name: dialectical-analysis
description: Systematically find contradictions, alternative framings, hidden assumptions, and opposing viewpoints for any research topic. Use after deep-research when the topic is contested, multi-stakeholder, or when findings feel too one-sided.
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

Stress-test research findings by systematically generating contradictions, alternative paradigms, and the strongest possible opposing arguments. This skill operationalizes the cognitive mandates in `CLAUDE.md`.

## Core Principle

The goal is intellectual honesty about the full landscape of credible thought — not balance for its own sake, not contrarianism as performance. Comfort with your conclusions is a warning sign.

## When to Use

- After `deep-research` on any contested, political, economic, or multi-stakeholder topic.
- When existing docs feel one-sided or suspiciously unanimous.
- When user explicitly asks for contradictions, devil's-advocate analysis, or alternative views.

## When NOT to Use

- Purely factual, uncontested reference lookups.
- Before `deep-research` has been completed (this skill needs material to work with).

## Workflow

### Phase 1 — Assumption Extraction

Read the existing research findings and list every **implicit and explicit assumption** underlying the conclusions. For each, ask:

- Is this universal or context-dependent?
- Who would reject this and why?
- What changes if this assumption is false?

Categorize as:

- **Structural** (how the system works)
- **Normative** (what is good/desirable)
- **Empirical** (what the data shows)
- **Temporal** (what will continue to be true)

**Gate:** Assumption inventory with vulnerability ratings exists.

### Phase 2 — Inversion Search

For each major conclusion, perform targeted inversion searches:

- **Negate the conclusion** and search for supporting evidence. ("X is effective" → "X failures", "X criticism")
- **Find the strongest critic** — the most credible, well-argued opponent.
- **Find historical reversals** — cases where the equivalent consensus was later proven wrong.
- **Find conditional inversions** — conditions under which the conclusion flips.

Minimum **8 targeted inversion searches** per major topic.

**Gate:** Each major conclusion has been deliberately challenged with specific counter-evidence.

### Phase 3 — Alternative Paradigm Discovery

Look beyond the current framing:

- **Reframe the question.** "Instead of asking whether X works, ask whether X is the right category of solution."
- **Cross-disciplinary lens.** How does a completely different field approach the same underlying problem?
- **Geographic reframing.** How is this understood in countries/cultures not yet covered?
- **Temporal reframing.** How would someone 50 years ago or 50 years from now view this?
- **Scale reframing.** Does the conclusion hold at individual, institutional, and civilizational scales?

Minimum **4 alternative paradigm explorations**, yielding at least **2 genuinely different framings**.

**Gate:** Alternative framings documented.

### Phase 4 — Stakeholder Disagreement Map

Map who disagrees and why:

| Stakeholder | Position | Best Argument | Best Evidence | What Would Change Their Mind |
|-------------|----------|---------------|---------------|------------------------------|
| ... | ... | ... | ... | ... |

For each group: identify their interests (financial, political, ideological), their strongest argument (not their weakest), and what evidence would change their mind. Note any stakeholders whose voices are **absent** from the conversation.

**Gate:** Disagreement mapped to specific actors with specific reasoning.

### Phase 5 — Contradiction Synthesis

Produce a structured output:

1. **Confirmed Contradictions** — credible sources directly disagree on facts or interpretation
2. **Hidden Assumptions** — beliefs the mainstream narrative takes for granted that are debatable
3. **Alternative Frameworks** — different framings that lead to different conclusions
4. **Conditional Claims** — true under some conditions, false under others
5. **Unknown Unknowns** — areas where we don't even know what questions to ask
6. **Strongest Counterargument** — the single most powerful challenge to the default narrative, in its strongest form

This output feeds directly into `research-documentation`.

**Gate:** Contradiction synthesis is complete. Save to disk before proceeding.

## Search Pattern Templates

| Category | Query Patterns |
|----------|---------------|
| Direct opposition | "criticism of [X]", "problems with [X]", "why [X] fails" |
| Assumption challenges | "[X] assumes", "[X] myth", "rethinking [X]" |
| Alternatives | "alternative to [X]", "instead of [X]", "beyond [X]" |
| Historical failures | "[X] failed", "unintended consequences [X]", "[X] backfired" |
| Who disagrees | "[X] critics", "[X] skeptics", "[X] controversy" |

## Anti-Patterns

- **Fake balance** — treating conspiracy theories as equivalent to expert consensus
- **Weak-manning** — finding the worst version of an opposing argument
- **Nihilistic relativism** — concluding "nobody knows anything"
- **Contrarianism as identity** — opposing the mainstream just to be different
- **Ignoring base rates** — treating one counterexample as disproof of the general pattern
