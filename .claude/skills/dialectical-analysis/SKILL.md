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

Stress-test research findings. Run after subagent research is combined, before research-documentation.

**When to use:** The topic has genuine disagreement, competing approaches with real trade-offs, hidden assumptions worth examining, or the user explicitly requested it ("find contradictions", "devil's advocate", "challenge this").

**When to skip:** Topic is factual/reference-oriented with no meaningful debate, subagent research found broad agreement with no cracks, or the user wants a summary/tutorial only.

**Goal:** Intellectual honesty about what credible people actually disagree on. Not balance for its own sake. Not contrarianism.

## Scope Scaling

Scale the depth of analysis to the scope tier and the degree of actual controversy:

| Tier | Phases Required | Challenge Searches | Alternative Framings |
|------|----------------|-------------------|---------------------|
| Quick | 1 (Assumption Extraction) + 4 (Disagreement Map) | 2–4 | 1 |
| Standard | All 5 phases | 4–8 | 2–3 |
| Deep | All 5 phases, exhaustive | 8–15 | 4+ |

If the topic turns out to have less disagreement than expected, it is fine to produce a shorter analysis. Document the lack of controversy as a finding.

## Phase 1 — Assumption Extraction

List every implicit and explicit assumption underlying the research conclusions.

For each assumption:
- Is it universal or context-dependent?
- Who would reject it and why?
- What changes if it's false?

Categorize each as: **structural** (built into the framing), **normative** (value judgment), **empirical** (factual claim that could be wrong), **temporal** (true now but maybe not later), **methodological** (depends on how you measure).

**Completion criterion:** An assumption inventory exists with vulnerability ratings (high/medium/low — how likely is this assumption to be wrong or contested?).

## Phase 2 — Challenge Search

For each major conclusion from the research:
1. Negate it and search. ("X is effective" → "X failures", "X limitations", "X doesn't work")
2. Find the strongest credible critic — not a strawman, the best opposing argument.
3. Look for historical reversals — was the consensus ever different? Why did it change?
4. Look for conditional inversions — contexts where the conclusion flips ("X works except when...").

**Completion criterion:** Every major conclusion has been tested against the best available counterargument. If no credible counterargument exists, note that explicitly.

## Phase 3 — Alternative Framing

Reframe the question to see if different frames produce different answers:
- **Cross-disciplinary:** How would an economist, engineer, ethicist, or historian frame this?
- **Contextual:** Does the answer change across settings, cultures, scales, or use cases?
- **Temporal:** How has the framing evolved? How might it look in 10 years?
- **Scale:** Does it work at small scale but not large, or vice versa?

**Completion criterion:** At least the minimum number of genuinely different framings documented (see scope scaling table).

## Phase 4 — Disagreement Map

For each identified disagreement, document:

| Field | Content |
|-------|---------|
| **Question at Issue** | The specific point of disagreement |
| **Position A** | Steelmanned — the strongest version of this position |
| **Best Evidence for A** | Sources, data, reasoning |
| **Position B** | Steelmanned — the strongest version |
| **Best Evidence for B** | Sources, data, reasoning |
| **What Would Resolve It** | What evidence or event would settle the question? |
| **Who Holds Each** | Named individuals, organizations, or schools of thought |

Present the strongest argument for each position, not the weakest. Note absent perspectives — voices that should be represented but aren't in the available evidence.

**Completion criterion:** Disagreements are mapped with specific reasoning and evidence, not just "some people disagree."

## Phase 5 — Contradiction Synthesis

Produce a structured synthesis:

- **Confirmed Contradictions** — places where the evidence genuinely conflicts.
- **Hidden Assumptions** — from Phase 1, the most vulnerable ones.
- **Alternative Frameworks** — from Phase 3, the most illuminating reframings.
- **Conditional Claims** — conclusions that are true only under specific conditions.
- **Unknown Unknowns** — areas where the research might be missing something fundamental.
- **Strongest Challenge** — the single most compelling argument against the research's primary conclusion.

Save the synthesis to disk. It feeds directly into research-documentation as input for `disagreements.md` and perspective labels throughout the topic.

## Query Patterns for Challenge Search

| Category | Example Queries |
|----------|----------------|
| Direct challenge | "criticism of [X]", "problems with [X]", "limitations of [X]" |
| Assumption probe | "[X] assumes", "[X] myth", "rethinking [X]" |
| Alternative | "alternative to [X]", "instead of [X]", "beyond [X]" |
| Failure | "[X] failed", "unintended consequences [X]" |
| Who disagrees | "[X] critics", "[X] skeptics", "[X] controversy" |

## Anti-Patterns

Avoid these:

- **Manufactured controversy** — creating debate where none credibly exists.
- **Fake balance** — treating an unsupported claim as equal to one with strong evidence.
- **Weak-manning** — presenting the weakest version of an opposing view.
- **Nihilistic relativism** — concluding "nobody knows" when there is a weight of evidence.
- **Contrarianism as identity** — disagreeing for the sake of it.
- **Ignoring base rates** — giving equal time to a view held by 2% of experts as one held by 95%.
- **Domain blindness** — only looking at one field's perspective when the topic spans multiple.
