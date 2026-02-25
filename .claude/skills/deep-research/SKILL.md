---
name: deep-research
description: Perform exhaustive multi-perspective research before writing or implementation. Use for any request needing external knowledge, current events, technical background, policy context, historical framing, investment analysis, mathematical references, or evidence-backed synthesis.
allowed-tools:
  - WebSearch
  - WebFetch
  - Read
  - Glob
  - Grep
  - Write
  - Edit
  - TodoRead
  - TodoWrite
  - Task
---

# Deep Research

Run a disciplined research process that prioritizes completeness, perspective diversity, and citation quality before producing conclusions.

## Essential Principles

1. Research depth is mandatory, not optional.
2. Rephrase and reframe the query across multiple interpretations before concluding.
3. Seek disagreement on purpose (supporting, skeptical, neutral, and opposing views).
4. Prefer primary and high-credibility sources when available.
5. Do not draft final output until coverage and novelty checks pass.

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

**Exit criteria:** Objective and scope are explicit and tracked.

### Phase 2 - Build Query Lattice (Rephrase + Reframe)

**Entry criteria:** Scope is defined.

Create a query lattice with at least 12 searches split across:

- **Direct formulation:** the user's wording
- **Terminology variants:** synonyms and domain terms
- **Causal framing:** "why/how did X happen"
- **Comparative framing:** "X vs Y"
- **Contrarian framing:** "criticisms of X", "risks of X"
- **Regional framing:** country/region-specific phrasing
- **Temporal framing:** historical background and latest developments
- **Stakeholder framing:** investor, regulator, engineer, historian, policymaker

At least 4 query branches must be intentionally non-obvious.
At least 2 branches must be explicitly contrarian (critical/opposing).

**Exit criteria:** Query lattice includes broad, contrarian, and domain-specific variants.

### Phase 3 - Source Harvesting by Class

**Entry criteria:** Query lattice exists.

Collect sources from multiple classes:

1. Primary sources (official reports, filings, standards, court text, datasets)
2. Academic/technical references
3. High-quality journalism and long-form analysis
4. Domain practitioners / institutions

Target at least 3 distinct source classes and 15 unique sources for non-trivial topics.

**Exit criteria:** Multi-class source set exists and is deduplicated.

### Phase 4 - Perspective Expansion and Disagreement Mapping

**Entry criteria:** Initial sources collected.

Build a perspective matrix:

- Supporting case
- Critical case
- Mixed/nuanced case
- Outlier or minority interpretation

For each major claim, identify:

- agreement sources
- disagreement sources
- unresolved uncertainty

Also produce a contradiction log with:

- claim statement
- strongest supporting source(s)
- strongest opposing source(s)
- current confidence (high/medium/low)

**Exit criteria:** Core claims have explicit supporting and opposing evidence.

### Phase 5 - Quality and Novelty Scoring

**Entry criteria:** Perspective matrix exists.

Score each source quickly:

- **A:** primary, rigorous, transparent methodology
- **B:** credible secondary with clear sourcing
- **C:** weak/opinionated/low transparency

Then run novelty checks:

- last two research passes should produce at least one net-new high-value angle each
- if net-new insights drop below 10% for two consecutive passes, saturation is near

**Exit criteria:** Source quality is ranked and saturation trend is known.

### Phase 6 - Exhaustiveness Gate

**Entry criteria:** Quality and novelty scoring complete.

Do not proceed unless all are true:

- at least 3 source classes represented
- at least 2 opposing perspectives documented
- major claims have citations
- key uncertainty areas are named
- saturation threshold reached, or limitations clearly identified

If gate fails, continue Phases 2-5.

**Exit criteria:** Evidence is sufficient for synthesis or clearly documented as limited.

### Phase 7 - Prepare Structured Research Context

**Entry criteria:** Exhaustiveness gate passed.

Produce a structured research context bundle containing:

- scope statement
- source table (title, author/org, date, URL, class, quality tier)
- claim-to-source mapping
- perspective matrix
- unresolved questions
- contradiction log
- recommended report outputs:
  - `./docs/{topic-title}/intro.md`
  - `./docs/{topic-title}/perspectives.md`
  - `./docs/{topic-title}/research-report-YYYY-MM-DD.md`

Use this bundle as the only input to drafting and documentation skills.

**Exit criteria:** Research context is synthesis-ready and traceable.

### Phase 8 - Escalation Decision

**Entry criteria:** Structured research context exists.

Escalate to `perplexity-sonar-followup` when any condition is true:

- source diversity is still weak
- novelty is low but confidence remains low
- current-events coverage is stale or fragmented
- the topic is fast-moving or highly contested

**Exit criteria:** Either proceed to documentation or trigger Perplexity follow-up.

### Phase 9 - Research Report Handoff

**Entry criteria:** Structured context is complete.

Prepare a documentation handoff that can be written directly into the knowledge base:

1. Executive summary
2. What changed since last update
3. Supporting vs opposing evidence
4. Uncertainties and monitoring triggers
5. Source table with links and dates

**Exit criteria:** Context is ready for `research-documentation` with minimal transformation.

## Anti-Patterns

- Stopping after 3-5 easy web results
- Searching only one framing of the question
- Ignoring credible opposing views
- Writing conclusions before saturation checks
- Using only opinion sources for technical or policy claims

## Success Criteria

- [ ] Query lattice includes multiple reframings and contrarian branches
- [ ] Source set includes diverse classes and viewpoints
- [ ] Claims are traceable to citations
- [ ] Uncertainties are explicit
- [ ] Research is saturated or limitations are clearly documented
