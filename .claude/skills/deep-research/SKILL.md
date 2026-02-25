---
name: deep-research
description: Perform exhaustive multi-perspective research before writing. Use for any request needing external knowledge, evidence-backed analysis, technical depth, or synthesis across sources.
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

- User asks for analysis, explanation, comparison, recommendation, or in-depth coverage of any topic.
- The answer depends on facts that may be recent, disputed, nuanced, or context-sensitive.
- User asks for "deep research", "sources", "citations", "evidence", or "all perspectives".

## When NOT to Use

- Purely local repository edits unrelated to external knowledge.
- Trivially factual with no need for synthesis.

## Workflow

### Phase 1 — Define Research Contract

1. Restate the objective in one sentence.
2. Define scope: time horizon, domain boundaries, audience, acceptable confidence level.
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
| Terminology variants | Synonyms, alternative names, domain jargon |
| Causal / mechanistic | "why does X happen", "how does X work" |
| Comparative | "X vs Y", "X compared to Y" |
| Critical | "problems with X", "limitations of X", "why X fails" |
| Contextual | Region-specific, field-specific, or era-specific angles |
| Temporal | Historical background, latest developments, trend over time |
| Stakeholder / role | How different groups (users, builders, critics, beneficiaries) see X |
| Adversarial | "who benefits from X", "hidden costs of X", "X trade-offs" |
| Alternative-paradigm | "alternatives to X", "what if X is the wrong approach" |
| Failure-mode | "what went wrong with X", "unintended consequences" |
| Synthesis | "meta-analysis of X", "systematic review of X", "state of the art in X" |

At least **one-third of queries should probe weaknesses, alternatives, or non-obvious angles.**

**Gate:** Query lattice covers broad, critical, and domain-appropriate variants.

### Phase 3 — Source Harvesting

Collect sources across multiple classes. Which classes matter most depends on the topic — choose what fits:

1. **Primary** — original research, official documents, specifications, datasets, raw data, source code
2. **Academic / technical** — peer-reviewed papers, preprints, technical standards, documentation
3. **Long-form analysis** — investigative reporting, detailed features, expert commentary
4. **Practitioner / institutional** — professional organizations, industry reports, conference talks
5. **Critical / dissenting** — known critics, alternative approaches, documented failures
6. **Historical / archival** — how similar problems were approached or resolved before
7. **Community / applied** — forums, open-source projects, case studies, real-world usage reports

Target at least **4 distinct source classes** per the scope tier. Let the topic dictate which classes are most relevant.

**Freshness check:** For each source, note the publication date. Flag anything older than 2 years on fast-moving topics. Watch for AI-generated content masquerading as primary sources.

**Gate:** Multi-class source set exists, deduplicated, with dates noted.

### Phase 4 — Perspective Mapping

Build a perspective map appropriate to the topic. The goal is to capture the full landscape of credible thought, not to force debate where none exists. The tables below are starting templates — adapt the categories to fit the topic.

For **contested topics**, map:

| Perspective | Description | Min Sources |
|------------|-------------|-------------|
| Supporting case | Best evidence for the dominant position | 3 |
| Critical case | Strongest arguments against it | 3 |
| Conditional / nuanced | "It depends" positions | 2 |
| Outlier / minority | Unconventional but non-trivial | 1 |
| Historical precedent | How similar situations resolved | 1 |

For **technical topics**, map:

| Perspective | Description | Min Sources |
|------------|-------------|-------------|
| Standard approach | The established way to do it | 3 |
| Alternative approaches | Credible alternatives with different trade-offs | 2 |
| Known limitations | Where the standard approach breaks down | 2 |
| Emerging developments | What's changing or improving | 1 |

**Stress test** (must all pass before proceeding):

- [ ] Can you articulate the strongest alternative position as its advocate would?
- [ ] Have you found at least one credible source that challenges your emerging conclusion?
- [ ] Have you identified which assumptions, if changed, would reverse the conclusion?

**Gate:** Core claims have explicit supporting and challenging evidence.

### Phase 5 — Quality Assessment

Assess source reliability:

- **Strong:** Primary source, rigorous methodology, transparent reasoning
- **Moderate:** Credible secondary source with clear sourcing
- **Weak:** Opinionated, low transparency, or poorly sourced (document why it's still included)

**Saturation check:** If the last two search passes produce less than 10% net-new insights, saturation is near. If no challenges to the main findings have emerged, perform one more targeted critical search before accepting saturation.

**Gate:** Sources are assessed and saturation trend is known.

### Phase 6 — Exhaustiveness Gate

Do not proceed unless **all** are true:

- [ ] At least 4 source classes represented
- [ ] Alternative perspectives documented where they exist
- [ ] Major claims cite strong or moderate sources
- [ ] Key uncertainties are named with resolution conditions
- [ ] At least one finding that challenges or complicates the obvious answer
- [ ] Alternative framings of the core question have been explored
- [ ] Saturation reached or limitations documented

If gate fails, return to Phase 2 with targeted gap-filling queries.

### Phase 7 — Structured Research Bundle

Produce a research context bundle containing:

- Scope statement and tier
- Source table (title, author/org, date, URL, class, quality assessment)
- Claim-to-source mapping
- Perspective map with strength ratings
- Disagreement or trade-off map (which claims are contested, by whom, how strongly)
- Assumption sensitivity analysis (which assumptions matter most)
- Unresolved questions
- Confidence assessment per major finding (High / Medium / Low with rationale)

**Save this bundle to disk** in the topic folder (e.g., `./docs/{topic-title}/research-bundle.md`) before proceeding to the next skill. This file can be removed or folded into the final docs during the documentation phase.

**Gate:** Research context is synthesis-ready, traceable, and conflict-aware.

### Phase 8 — Escalation Decision

Consider escalating to `perplexity-sonar-followup` when:

- Source diversity is weak (fewer than 4 classes)
- Confidence remains low despite research effort
- Coverage is stale or fragmented on time-sensitive topics
- The topic is fast-moving or highly contested
- Alternative perspectives are poorly sourced
- Research feels "too clean" — no real disagreements or trade-offs found

**Perplexity is optional.** If the MCP server is unavailable, fails, or returns errors, skip it immediately and continue. Do not retry more than once. Do not block the pipeline. Note the gap briefly in the research bundle and proceed to `dialectical-analysis` (if warranted by topic complexity) or directly to `research-documentation`.

## Anti-Patterns

- Stopping after 3-5 easy web results
- Searching only one framing of the question
- Writing conclusions before saturation checks pass
- Confirmation bias — only finding evidence for the emerging narrative
- False balance — treating fringe claims as equal to well-evidenced findings
- Recency bias — ignoring historical context and established foundations
- Premature closure — settling on an answer before critical search completes
- Domain tunnel vision — ignoring relevant insights from adjacent fields
