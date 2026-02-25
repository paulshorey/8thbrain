---
name: dialectical-analysis
description: Systematically find contradictions, alternative framings, hidden assumptions, and opposing viewpoints for any research topic. Use after deep-research when the topic is contested, multi-stakeholder, or when the research feels too one-sided.
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

Deliberately stress-test research findings by systematically generating and investigating contradictions, alternative paradigms, hidden assumptions, and the strongest possible opposing arguments.

## Essential Principles

1. **The goal is not balance for its own sake** -- it is intellectual honesty about the full landscape of credible thought.
2. **Steelmanning is mandatory.** Present every position in its strongest form as its best advocate would.
3. **Comfort is a warning sign.** If the research feels neat and conclusive, something is probably missing.
4. **Good faith only.** Seek credible dissent, not manufactured controversy or conspiracy theories.
5. **Disagreement is information.** The pattern of who disagrees and why often reveals more than the consensus itself.

## When to Use

- After `deep-research` on any contested, political, economic, or multi-stakeholder topic.
- When existing research in `./docs/` feels one-sided or too clean.
- When the user explicitly asks for contradictions, alternative views, or devil's-advocate analysis.
- When initial research produces suspiciously unanimous conclusions on a complex topic.

## When NOT to Use

- For purely factual, uncontested reference lookups.
- When the user explicitly wants only the mainstream position.
- Before `deep-research` has been completed (dialectical analysis needs material to work with).

## Workflow

### Phase 1 - Assumption Extraction

**Entry criteria:** Deep research context bundle or existing topic documentation exists.

1. Read existing research findings.
2. List every **implicit and explicit assumption** that underlies the current conclusions.
3. For each assumption, ask:
   - Is this assumption universal or context-dependent?
   - Who would reject this assumption and why?
   - What would change if this assumption were false?
4. Categorize assumptions:
   - **Structural** (about how the system works)
   - **Normative** (about what is good/desirable)
   - **Empirical** (about what the data shows)
   - **Temporal** (about what will continue to be true)

**Exit criteria:** Assumption inventory with vulnerability ratings.

### Phase 2 - Inversion Search

**Entry criteria:** Assumption inventory exists.

For each major conclusion in the research, perform an **inversion search**:

1. **Negate the conclusion** and search for evidence supporting the negation.
   - If conclusion is "X is effective" → search "X is ineffective", "X failures", "X criticism"
   - If conclusion is "X causes Y" → search "X does not cause Y", "alternative causes of Y"
2. **Search for the strongest critic.** Find the most credible, well-argued opponent of each major position.
3. **Search for historical reversals.** Find cases where the equivalent consensus turned out to be wrong.
4. **Search for conditional inversions.** Find conditions under which the conclusion flips.

Minimum: **8 targeted inversion searches** per major topic.

**Exit criteria:** Each major conclusion has been deliberately challenged with specific counter-evidence.

### Phase 3 - Alternative Paradigm Discovery

**Entry criteria:** Inversion search complete.

Look beyond the current framing entirely:

1. **Reframe the question.**
   - "Instead of asking whether X works, ask whether X is the right category of solution"
   - "Instead of comparing X and Y, ask what Z would look like"
2. **Cross-disciplinary search.** How does a different field approach the same underlying problem?
   - If the topic is economic → how do ecologists, psychologists, or historians see it?
   - If the topic is technical → how do ethicists, sociologists, or artists see it?
3. **Geographic reframing.** How is this issue understood in countries/cultures not covered in initial research?
4. **Temporal reframing.** How would someone from 50 years ago or 50 years from now view this?
5. **Scale reframing.** Does the conclusion hold at different scales (individual vs. institutional vs. civilizational)?

Minimum: **4 alternative paradigm explorations.**

**Exit criteria:** At least 2 genuinely different ways of framing the topic are documented.

### Phase 4 - Stakeholder Disagreement Mapping

**Entry criteria:** Alternative paradigms explored.

Map who disagrees and why:

| Stakeholder | Position | Key Argument | Best Evidence | What They'd Need to Change Their Mind |
|-------------|----------|-------------|---------------|---------------------------------------|
| (fill)      | (fill)   | (fill)      | (fill)        | (fill)                                |

For each stakeholder group:

1. Identify their **interests** (financial, political, ideological, professional).
2. Identify their **best argument** (not their worst one).
3. Identify what **evidence would change their mind** (falsifiability).
4. Note any stakeholders whose voices are **absent from the conversation** and why.

**Exit criteria:** Disagreement is mapped to specific actors with specific reasoning.

### Phase 5 - Contradiction Synthesis

**Entry criteria:** All previous phases complete.

Produce a structured contradiction report:

1. **Confirmed Contradictions** -- places where credible sources directly disagree on facts or interpretation.
2. **Hidden Assumptions** -- beliefs the mainstream narrative takes for granted that are actually debatable.
3. **Alternative Frameworks** -- different ways of framing the entire topic that lead to different conclusions.
4. **Conditional Claims** -- conclusions that are true under some conditions but false under others.
5. **Unknown Unknowns** -- areas where the research reveals we don't even know what questions to ask.
6. **Strongest Counterargument** -- the single most powerful challenge to the default narrative, presented in its strongest form.

This output feeds directly into the `research-documentation` skill for integration into topic files.

**Exit criteria:** Contradiction synthesis is complete and ready for documentation.

## Search Pattern Templates

Use these query templates to find contradictions and alternatives:

### Direct Opposition
- `"criticism of [topic]"`
- `"problems with [topic]"`
- `"why [topic] fails"`
- `"[topic] debunked"`
- `"against [topic]" [credible source domain]`

### Assumption Challenges
- `"[topic] assumes" OR "[topic] assumption"`
- `"[topic] myth" OR "[topic] misconception"`
- `"rethinking [topic]"`
- `"[topic] is wrong because"`

### Alternative Approaches
- `"alternative to [topic]"`
- `"instead of [topic]"`
- `"beyond [topic]"`
- `"[topic] vs [alternative]"`
- `"[other field] perspective on [topic]"`

### Historical Failures
- `"[topic] failed" OR "[topic] failure"`
- `"[topic] did not work"`
- `"unintended consequences [topic]"`
- `"[topic] backfired"`

### Who Disagrees
- `"[topic] critics"`
- `"[topic] skeptics"`
- `"[topic] opposition"`
- `"[topic] controversy"`
- `"[topic] debate"`

## Anti-Patterns

- **Fake balance:** treating fringe conspiracy theories as equivalent to expert consensus
- **Weak-manning:** finding the worst version of an opposing argument instead of the best
- **Motivated reasoning:** searching for contradictions you want to find rather than ones that exist
- **Nihilistic relativism:** concluding "nobody knows anything" instead of mapping the actual state of evidence
- **Contrarianism as identity:** opposing the mainstream just to be different, not because evidence warrants it
- **Ignoring base rates:** treating one counterexample as proof that the general pattern is wrong

## Success Criteria

- [ ] Every major conclusion has been deliberately challenged
- [ ] At least 3 hidden assumptions are surfaced and examined
- [ ] At least 2 alternative framings of the core question are explored
- [ ] Stakeholder disagreement is mapped with specific reasoning
- [ ] The strongest counterargument is presented in steelmanned form
- [ ] Contradictions are categorized and documented
- [ ] The analysis distinguishes between credible dissent and fringe positions
