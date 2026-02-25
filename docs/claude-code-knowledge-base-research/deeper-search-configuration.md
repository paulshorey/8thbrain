# Deeper Search Configuration Playbook

## Objective

Configure Claude Code to find more perspectives, including contradictory and alternative
ideas, before writing repository knowledge artifacts.

## What was configured in this repository

1. `README.md` now includes a "Deep Search Mode" prompt template and minimum evidence bar.
2. `CLAUDE.md` now includes explicit deep-search defaults and report artifact requirements.
3. `.claude/skills/deep-research/SKILL.md` now requires a contradiction log and report handoff.
4. `.claude/skills/research-documentation/SKILL.md` now includes:
   - `perspectives.md`
   - `research-report-YYYY-MM-DD.md`
   as expected outputs for non-trivial updates.

## Recommended deep-search operating loop

### 1) Query lattice construction

Run at least 12 searches with coverage across:

- direct formulation
- terminology variants
- contrarian framing
- temporal framing
- regional framing
- stakeholder framing

This is consistent with systematic evidence-search practice where multiple query
formulations and multiple indexes are needed to avoid blind spots
([Cochrane guidance](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04)).

### 2) Source-class balancing

Require at least 3 source classes for non-trivial topics:

- primary/official (vendor docs, standards, laws, policy text)
- technical/academic (peer-reviewed or strong preprints/surveys)
- practitioner/institutional analysis (industry, journalism, operations)

### 3) Contradiction mapping

For each major claim:

- strongest supporting source
- strongest opposing source
- confidence level
- unresolved uncertainty

This protects against confirmation bias and over-trust in AI-generated suggestions
([confirmation bias evidence](https://www.sciencedirect.com/science/article/pii/S2949882124000264),
[automation bias review](https://academic.oup.com/jamia/article/19/1/121/732254)).

### 4) Saturation gate

Do not draft final synthesis unless:

- claim-level citations exist
- at least 2 opposing viewpoints are represented
- unresolved uncertainty is explicit
- net-new insight rate is no longer meaningfully increasing

### 5) Report artifact handoff

Save research results under:

```text
docs/{topic}/intro.md
docs/{topic}/perspectives.md
docs/{topic}/research-report-YYYY-MM-DD.md
docs/{topic}/{sub-topic}.md
```

Use merge-first updates for existing topic files.

## Prompt template for operators

```text
Research <topic> as a knowledge-base update, not a coding task.
Build a deep query lattice with direct + contrarian + regional + temporal + stakeholder framings.
Include at least two strong opposing viewpoints and label unresolved uncertainties.
Then write/update:
- docs/<topic>/intro.md
- docs/<topic>/perspectives.md
- docs/<topic>/research-report-YYYY-MM-DD.md
- docs/<topic>/<sub-topic>.md
with citations for major claims.
```

## Why this configuration matters

- Anthropic recommends explicit anti-hallucination controls and citation grounding
  ([minimizing hallucinations](https://docs.anthropic.com/en/docs/minimizing-hallucinations),
  [citations](https://docs.anthropic.com/en/docs/build-with-claude/citations)).
- Empirical studies show citation hallucination risk remains material if outputs are not
  source-verified ([Scientific Reports](https://www.nature.com/articles/s41598-023-41032-5)).
- Governance frameworks increasingly require traceability and documentation
  ([NIST GenAI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence),
  [EU GPAI obligations](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act),
  [OECD AI Principles](http://oecd.ai/ai-principles)).
