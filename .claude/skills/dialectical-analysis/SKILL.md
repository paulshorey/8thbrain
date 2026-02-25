---
name: dialectical-analysis
description: Systematically find contradictions, alternative framings, hidden assumptions, and opposing viewpoints for any research topic. Use after subagent research when findings feel too one-sided or the topic has meaningful disagreement.
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

Stress-test research findings by looking for contradictions, alternative approaches, and the strongest possible challenges. This skill is **optional** — it adds value for contested or nuanced topics but should be skipped when it would only produce forced controversy.

## Should You Use This Skill?

Ask these questions after subagent research (deeper-research, perplexity, gemini) is complete:

1. **Does genuine disagreement exist?** Did the research surface credible sources that disagree with each other — not just about nuance, but about conclusions?
2. **Are there competing approaches with real trade-offs?** (e.g., different design patterns, policy options, treatment protocols)
3. **Are there hidden assumptions worth examining?** Could reasonable people frame the question differently and arrive at different answers?
4. **Did the user request it?** ("find contradictions", "devil's advocate", "challenge this")

**If yes to any → use this skill.** If no to all — the subagent research perspective mapping already covers what's needed. Skip this skill and proceed to `research-documentation`.

## When NOT to Use

- The topic is primarily factual, mathematical, or reference-oriented (e.g., "list of sorting algorithms", "how does DNS work", "examples of design patterns").
- The subagent research phase found broad source agreement with no meaningful dissent.
- Before subagent research has been completed (this skill needs material to work with).
- The user asked for a summary, tutorial, or reference document — not an analysis of competing views.

## Core Principle

The goal is intellectual honesty about the full landscape of credible thought — not balance for its own sake, not contrarianism as performance.

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

Scale the number of challenge searches to the topic's complexity and the strength of disagreement found during subagent research. For deeply contested topics, aim for **8+ targeted searches**. For mildly nuanced topics, **3-4** focused searches may suffice.

**Gate:** Major conclusions have been tested against credible alternatives where they exist.

### Phase 3 — Alternative Framing Discovery

Look beyond the current framing:

- **Reframe the question.** "Instead of asking whether X works, ask whether X is the right approach."
- **Cross-disciplinary lens.** How does a completely different field approach the same underlying problem?
- **Contextual reframing.** How is this understood in different settings, cultures, or use cases?
- **Temporal reframing.** How has understanding of this changed over time, and where might it go?
- **Scale reframing.** Does the conclusion hold at different scales (individual vs. system, prototype vs. production, local vs. global)?

Explore alternative framings proportional to the topic's complexity. For deeply contested topics, aim for **4+ explorations** yielding at least **2 genuinely different ways to think about the topic**. For simpler topics, even one meaningful reframing adds value.

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

- **Manufactured controversy** — forcing dialectical analysis on factual topics where no real disagreement exists. If the research found consensus, document the consensus.
- **Fake balance** — treating unsupported claims as equivalent to well-evidenced findings
- **Weak-manning** — finding the worst version of an opposing argument
- **Nihilistic relativism** — concluding "nobody knows anything"
- **Contrarianism as identity** — opposing the default position just to be different
- **Ignoring base rates** — treating one counterexample as disproof of the general pattern
- **Domain blindness** — failing to check whether adjacent fields have already resolved the question
