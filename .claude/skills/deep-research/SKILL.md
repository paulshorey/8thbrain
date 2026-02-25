---
name: deep-research
description: Perform exhaustive multi-perspective research before writing or implementation. Use for any request needing external knowledge, current events, technical background, policy context, historical framing, investment analysis, mathematical references, or evidence-backed synthesis.
allowed-tools:
  - WebSearch
  - Read
  - Glob
  - Grep
  - Write
  - TodoWrite
  - Task
---

# Deep Research

Run a disciplined research process that prioritizes completeness, perspective diversity, dialectical rigor, and citation quality before producing conclusions.

## Essential Principles

1. Research depth is mandatory, not optional.
2. Rephrase and reframe the query across multiple interpretations before concluding.
3. Seek disagreement on purpose (supporting, skeptical, neutral, and opposing views).
4. Prefer primary and high-credibility sources when available.
5. Do not draft final output until coverage and novelty checks pass.
6. **Steelman every position** -- present the strongest version of each viewpoint, especially ones you might be inclined to dismiss.
7. **Hunt for the idea that makes you uncomfortable** -- if all findings confirm the obvious answer, the research is incomplete.
8. **Distinguish between "no evidence against" and "evidence for"** -- absence of counterargument is not confirmation.

## When to Use

- User asks for analysis, explanation, comparison, recommendation, or forecast.
- The topic involves engineering, mathematics, investing, politics, world events, history, or latest news.
- The answer depends on facts that may be recent, disputed, or context-sensitive.
- The user asks for "deep research", "sources", "citations", "evidence", or "all perspectives".

## When NOT to Use

- The user asks for purely local repository edits unrelated to external knowledge.
- The task is trivial and factual with no need for synthesis (for example, "What is 2+2?").

## Workflow

### Phase 1 - Define Research Contract

**Entry criteria:** A research request exists.

1. Restate the objective in one sentence.
2. Define scope boundaries:
   - time horizon
   - geography
   - audience
   - acceptable confidence level
3. Generate a topic slug candidate for downstream docs output.
4. Create a brief checklist with `TodoWrite`.
5. **Identify the default/obvious answer** -- write it down explicitly so you can test it.

**Exit criteria:** Objective and scope are explicit and tracked.

### Phase 2 - Build Query Lattice (Rephrase + Reframe)

**Entry criteria:** Scope is defined.

Create a query lattice with at least **16 searches** split across:

- **Direct formulation:** the user's wording
- **Terminology variants:** synonyms and domain terms
- **Causal framing:** "why/how did X happen"
- **Comparative framing:** "X vs Y"
- **Contrarian framing:** "criticisms of X", "risks of X", "failures of X", "why X is wrong"
- **Regional framing:** country/region-specific phrasing
- **Temporal framing:** historical background and latest developments
- **Stakeholder framing:** investor, regulator, engineer, historian, policymaker, consumer, worker
- **Adversarial framing:** "who benefits from X", "who loses from X", "hidden costs of X"
- **Alternative-paradigm framing:** "alternatives to X", "X vs competing approaches", "what if X is the wrong question"
- **Failure-mode framing:** "what went wrong with X", "unintended consequences of X"
- **Meta-analytical framing:** "meta-analysis of X", "systematic review of X", "replication crisis in X"

At least **6 query branches must be intentionally non-obvious or adversarial.**

**Exit criteria:** Query lattice includes broad, contrarian, adversarial, and domain-specific variants.

### Phase 3 - Source Harvesting by Class

**Entry criteria:** Query lattice exists.

Collect sources from multiple classes:

1. **Primary sources** (official reports, filings, standards, court text, datasets, raw data)
2. **Academic/technical references** (peer-reviewed papers, preprints, technical standards)
3. **High-quality journalism and long-form analysis** (investigative reporting, detailed features)
4. **Domain practitioners / institutions** (professional organizations, industry reports)
5. **Critical/dissenting sources** (known critics, contrarian analysts, whistleblower accounts)
6. **Historical/archival sources** (how similar situations played out before)

Target at least **4 distinct source classes** and **20 unique sources** for non-trivial topics.

**Exit criteria:** Multi-class source set exists and is deduplicated.

### Phase 4 - Perspective Expansion and Disagreement Mapping

**Entry criteria:** Initial sources collected.

Build a **perspective matrix** with these mandatory categories:

| Perspective Type | Description | Minimum Sources |
|-----------------|-------------|-----------------|
| Supporting case | Best evidence for the mainstream view | 3 |
| Critical case | Strongest arguments against the mainstream view | 3 |
| Mixed/nuanced case | "It depends" positions with conditional logic | 2 |
| Outlier/minority interpretation | Unconventional but non-trivial positions | 2 |
| Historical parallel | How similar situations resolved in the past | 1 |
| Stakeholder who disagrees | A party with skin in the game who sees it differently | 1 |

For each major claim, identify:

- agreement sources (with strength rating)
- disagreement sources (with strength rating)
- unresolved uncertainty (with explanation of what would resolve it)

**Dialectical stress-testing checklist:**

- [ ] Can you articulate the strongest opposing argument as well as a proponent would?
- [ ] Have you found at least one credible source that disagrees with your emerging conclusion?
- [ ] Have you searched for evidence of past predictions on this topic that turned out wrong?
- [ ] Have you identified which assumptions, if changed, would reverse the conclusion?

**Exit criteria:** Core claims have explicit supporting and opposing evidence. Dialectical checklist passes.

### Phase 5 - Quality and Novelty Scoring

**Entry criteria:** Perspective matrix exists.

Score each source quickly:

- **A:** primary, rigorous, transparent methodology
- **B:** credible secondary with clear sourcing
- **C:** weak/opinionated/low transparency
- **D:** actively misleading, retracted, or discredited (document why)

Then run novelty checks:

- last two research passes should produce at least one net-new high-value angle each
- if net-new insights drop below 10% for two consecutive passes, saturation is near
- **contradiction check:** if no contradictions found, perform one more targeted adversarial search

**Exit criteria:** Source quality is ranked and saturation trend is known.

### Phase 6 - Exhaustiveness Gate

**Entry criteria:** Quality and novelty scoring complete.

Do not proceed unless **all** are true:

- [ ] at least 4 source classes represented
- [ ] at least 3 opposing perspectives documented with their strongest arguments
- [ ] major claims have citations from A or B sources
- [ ] key uncertainty areas are named with specifics on what would resolve them
- [ ] saturation threshold reached, or limitations clearly identified
- [ ] at least one "uncomfortable finding" -- something that challenges the obvious narrative
- [ ] alternative framings of the core question have been explored

If gate fails, continue Phases 2-5 with targeted gap-filling queries.

**Exit criteria:** Evidence is sufficient for synthesis or clearly documented as limited.

### Phase 7 - Prepare Structured Research Context

**Entry criteria:** Exhaustiveness gate passed.

Produce a structured research context bundle containing:

- scope statement
- source table (title, author/org, date, URL, class, quality tier)
- claim-to-source mapping
- perspective matrix (with strength ratings)
- **disagreement map** (which claims are contested, by whom, and how strongly)
- **assumption sensitivity analysis** (which assumptions matter most for the conclusion)
- unresolved questions
- **confidence assessment** per major finding (high/medium/low with rationale)

Use this bundle as the only input to drafting and documentation skills.

**Exit criteria:** Research context is synthesis-ready, traceable, and conflict-aware.

### Phase 8 - Escalation Decision

**Entry criteria:** Structured research context exists.

Escalate to `perplexity-sonar-followup` when any condition is true:

- source diversity is still weak (fewer than 4 source classes)
- novelty is low but confidence remains low
- current-events coverage is stale or fragmented
- the topic is fast-moving or highly contested
- opposing perspectives are weak or poorly sourced
- the research feels "too clean" -- no real disagreements found

**Exit criteria:** Either proceed to documentation or trigger Perplexity follow-up.

## Anti-Patterns

- Stopping after 3-5 easy web results
- Searching only one framing of the question
- Ignoring credible opposing views
- Writing conclusions before saturation checks
- Using only opinion sources for technical or policy claims
- **Confirmation bias:** only searching for evidence that supports the emerging narrative
- **False balance:** treating a fringe view as equal to well-evidenced consensus
- **Recency bias:** ignoring historical context and precedent
- **Authority bias:** accepting claims because of who said them rather than the evidence
- **Premature closure:** settling on an answer before adversarial search is complete

## Success Criteria

- [ ] Query lattice includes multiple reframings, contrarian, and adversarial branches
- [ ] Source set includes 4+ diverse classes and multiple viewpoints
- [ ] Claims are traceable to citations with quality tiers
- [ ] Uncertainties are explicit with resolution conditions
- [ ] Research is saturated or limitations are clearly documented
- [ ] At least 3 genuinely opposing perspectives are steelmanned
- [ ] Assumptions that would change the conclusion are identified
- [ ] The research challenged the obvious answer, not just confirmed it
