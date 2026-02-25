---
name: deep-research
description: Perform exhaustive multi-perspective research before writing. Use for any request needing external knowledge, current events, technical background, policy context, historical framing, investment analysis, mathematical references, or evidence-backed synthesis.
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

Disciplined research process prioritizing completeness, perspective diversity, and citation quality. See `CLAUDE.md` for cognitive mandates, perspective labels, and confidence ratings that apply to all phases.

## When to Use

- User asks for analysis, explanation, comparison, recommendation, or forecast.
- The answer depends on facts that may be recent, disputed, or context-sensitive.
- User asks for "deep research", "sources", "citations", "evidence", or "all perspectives".

## When NOT to Use

- Purely local repository edits unrelated to external knowledge.
- Trivially factual with no need for synthesis.

## Workflow

### Phase 1 — Define Research Contract

1. Restate the objective in one sentence.
2. Define scope: time horizon, geography, audience, acceptable confidence level.
3. **Assess scope tier** (Quick / Standard / Deep per `CLAUDE.md`). This determines minimum source counts and query depth.
4. Generate a topic slug for `./docs/`.
5. Create a tracking checklist with `TodoWrite`.
6. **Write down the default/obvious answer** so you can deliberately test it.

**Gate:** Objective, scope, and tier are explicit.

### Phase 2 — Build Query Lattice

Create a query lattice scaled to the scope tier. For Standard/Deep, use at least **14-20 searches** across these framing types:

| Framing Type | Example Pattern |
|-------------|----------------|
| Direct | User's own wording |
| Terminology variants | Synonyms, domain jargon |
| Causal | "why/how did X happen" |
| Comparative | "X vs Y" |
| Contrarian | "criticisms of X", "why X is wrong" |
| Regional | Country/region-specific angles |
| Temporal | Historical background, latest developments |
| Stakeholder | Investor, regulator, engineer, policymaker, consumer, worker perspectives |
| Adversarial | "who benefits from X", "hidden costs of X" |
| Alternative-paradigm | "alternatives to X", "what if X is the wrong question" |
| Failure-mode | "what went wrong with X", "unintended consequences" |
| Meta-analytical | "meta-analysis of X", "replication crisis in X" |

At least **one-third of queries must be intentionally non-obvious or adversarial.**

**Gate:** Query lattice covers broad, contrarian, and domain-specific variants.

### Phase 3 — Source Harvesting

Collect sources across multiple classes:

1. **Primary** — official reports, filings, standards, datasets, raw data
2. **Academic/technical** — peer-reviewed papers, preprints, technical standards
3. **Quality journalism** — investigative reporting, detailed long-form features
4. **Practitioner/institutional** — professional organizations, industry reports
5. **Critical/dissenting** — known critics, contrarian analysts, whistleblower accounts
6. **Historical/archival** — how similar situations played out before

Target at least **4 distinct source classes** per the scope tier.

**Freshness check:** For each source, note the publication date. Flag anything older than 2 years on fast-moving topics. Watch for AI-generated content masquerading as primary sources.

**Gate:** Multi-class source set exists, deduplicated, with dates noted.

### Phase 4 — Perspective Mapping and Disagreement

Build a perspective matrix:

| Perspective | Description | Min Sources |
|------------|-------------|-------------|
| Supporting case | Best evidence for mainstream view | 3 |
| Critical case | Strongest arguments against it | 3 |
| Nuanced/conditional | "It depends" positions | 2 |
| Outlier/minority | Unconventional but non-trivial | 1 |
| Historical parallel | How similar situations resolved | 1 |
| Dissenting stakeholder | A party with skin in the game who disagrees | 1 |

**Dialectical stress test** (must all pass before proceeding):

- [ ] Can you articulate the strongest opposing argument as its proponent would?
- [ ] Have you found at least one credible source disagreeing with your emerging conclusion?
- [ ] Have you found evidence of past predictions on this topic that turned out wrong?
- [ ] Have you identified which assumptions, if changed, would reverse the conclusion?

**Gate:** Core claims have explicit supporting and opposing evidence.

### Phase 5 — Quality Scoring

Score each source:

- **A:** Primary, rigorous, transparent methodology
- **B:** Credible secondary with clear sourcing
- **C:** Weak, opinionated, low transparency
- **D:** Misleading, retracted, or discredited (document why)

**Saturation check:** If the last two search passes produce less than 10% net-new insights, saturation is near. If no contradictions have been found, perform one more targeted adversarial search before accepting saturation.

**Gate:** Sources are quality-ranked and saturation trend is known.

### Phase 6 — Exhaustiveness Gate

Do not proceed unless **all** are true:

- [ ] At least 4 source classes represented
- [ ] At least 3 opposing perspectives documented with steelmanned arguments
- [ ] Major claims cite A or B sources
- [ ] Key uncertainties are named with resolution conditions
- [ ] At least one "uncomfortable finding" that challenges the obvious narrative
- [ ] Alternative framings of the core question have been explored
- [ ] Saturation reached or limitations documented

If gate fails, return to Phase 2 with targeted gap-filling queries.

### Phase 7 — Structured Research Bundle

Produce a research context bundle containing:

- Scope statement and tier
- Source table (title, author/org, date, URL, class, quality tier)
- Claim-to-source mapping
- Perspective matrix with strength ratings
- Disagreement map (which claims are contested, by whom, how strongly)
- Assumption sensitivity analysis (which assumptions matter most)
- Unresolved questions
- Confidence assessment per major finding (High / Medium / Low with rationale)

**Save this bundle to disk** before proceeding to the next skill.

**Gate:** Research context is synthesis-ready, traceable, and conflict-aware.

### Phase 8 — Escalation Decision

Escalate to `perplexity-sonar-followup` when:

- Source diversity is weak (fewer than 4 classes)
- Confidence remains low despite research effort
- Current-events coverage is stale or fragmented
- Topic is fast-moving or highly contested
- Opposing perspectives are poorly sourced
- Research feels "too clean" — no real disagreements found

Otherwise, proceed to `dialectical-analysis` (if warranted by topic complexity) or directly to `research-documentation`.

## Anti-Patterns

- Stopping after 3-5 easy web results
- Searching only one framing of the question
- Writing conclusions before saturation checks pass
- Confirmation bias — only finding evidence for the emerging narrative
- False balance — treating fringe views as equal to well-evidenced consensus
- Recency bias — ignoring historical context
- Premature closure — settling on an answer before adversarial search completes
