---
name: dialectical-analysis
description: Systematically find contradictions, alternative framings, hidden assumptions, and opposing viewpoints for any research topic. Use after deep-research when findings feel too one-sided or the topic has meaningful disagreement.
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

Stress-test research findings by systematically generating contradictions, alternative approaches, and the strongest possible challenges. This skill operationalizes the cognitive mandates in `CLAUDE.md`.

## Core Principle

The goal is intellectual honesty about the full landscape of credible thought — not balance for its own sake, not contrarianism as performance. Comfort with your conclusions is a warning sign.

## When to Use

- After `deep-research` on any topic where meaningful disagreement, competing approaches, or unexamined assumptions may exist.
- When existing docs feel one-sided or suspiciously unanimous.
- When user explicitly asks for contradictions, devil's-advocate analysis, or alternative views.
- When a topic has real-world trade-offs that depend on context, values, or priorities.

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

- **Structural** (how the system or mechanism works)
- **Normative** (what is good, desirable, or correct)
- **Empirical** (what the evidence shows)
- **Temporal** (what will continue to be true)
- **Methodological** (how the question was framed or studied)

**Gate:** Assumption inventory with vulnerability ratings exists.

### Phase 2 — Challenge Search

For each major conclusion, perform targeted challenge searches:

- **Negate the conclusion** and search for supporting evidence. ("X is effective" → "X failures", "X limitations")
- **Find the strongest critic** — the most credible, well-argued challenger.
- **Find historical reversals** — cases where equivalent consensus or practice was later revised.
- **Find conditional inversions** — conditions under which the conclusion flips or breaks down.

Minimum **8 targeted challenge searches** per major topic.

**Gate:** Each major conclusion has been deliberately challenged with specific counter-evidence.

### Phase 3 — Alternative Framing Discovery

Look beyond the current framing:

- **Reframe the question.** "Instead of asking whether X works, ask whether X is the right approach."
- **Cross-disciplinary lens.** How does a completely different field approach the same underlying problem?
- **Contextual reframing.** How is this understood in different settings, cultures, or use cases?
- **Temporal reframing.** How has understanding of this changed over time, and where might it go?
- **Scale reframing.** Does the conclusion hold at different scales (individual vs. system, prototype vs. production, local vs. global)?

Minimum **4 alternative framing explorations**, yielding at least **2 genuinely different ways to think about the topic**.

**Gate:** Alternative framings documented.

### Phase 4 — Disagreement Map

Map who or what disagrees and why:

| Position Holder | Position | Best Argument | Best Evidence | What Would Change This Position |
|----------------|----------|---------------|---------------|--------------------------------|
| ... | ... | ... | ... | ... |

For each entry: identify the reasoning or interest behind the position, present their strongest argument (not their weakest), and note what evidence would change the position. Note any perspectives that are **absent** from the conversation.

**Gate:** Disagreements mapped to specific positions with specific reasoning.

### Phase 5 — Contradiction Synthesis

Produce a structured output:

1. **Confirmed Contradictions** — credible sources directly disagree on facts or interpretation
2. **Hidden Assumptions** — beliefs the mainstream position takes for granted that are debatable
3. **Alternative Frameworks** — different framings that lead to different conclusions
4. **Conditional Claims** — true under some conditions, false under others
5. **Unknown Unknowns** — areas where we don't even know what questions to ask
6. **Strongest Challenge** — the single most powerful challenge to the default position, in its strongest form

This output feeds directly into `research-documentation`.

**Gate:** Contradiction synthesis is complete. Save to disk before proceeding.

## Search Pattern Templates

| Category | Query Patterns |
|----------|---------------|
| Direct challenge | "criticism of [X]", "problems with [X]", "limitations of [X]" |
| Assumption challenges | "[X] assumes", "[X] myth", "rethinking [X]" |
| Alternatives | "alternative to [X]", "instead of [X]", "beyond [X]" |
| Failure cases | "[X] failed", "unintended consequences [X]", "[X] pitfalls" |
| Who disagrees | "[X] critics", "[X] skeptics", "[X] controversy" |

## Anti-Patterns

- **Fake balance** — treating unsupported claims as equivalent to well-evidenced findings
- **Weak-manning** — finding the worst version of an opposing argument
- **Nihilistic relativism** — concluding "nobody knows anything"
- **Contrarianism as identity** — opposing the default position just to be different
- **Ignoring base rates** — treating one counterexample as disproof of the general pattern
- **Domain blindness** — failing to check whether adjacent fields have already resolved the question
