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

Goal: stress-test findings only when disagreement analysis is genuinely useful.

Do not run this skill by default for every topic.

## Run When

- Topic has meaningful disagreement or competing approaches.
- Major conclusions depend on assumptions that could plausibly fail.
- User explicitly asks for counterarguments, contradictions, or trade-off analysis.

## Skip When

- Topic is mostly factual/reference/tutorial with broad agreement.
- User wants straightforward factual or technical documentation only.
- Upstream research is incomplete or poorly sourced.

## Inputs

Use the orchestrator's unified research context:

- claim-to-source map
- key conclusions
- confidence notes
- unresolved questions

## Procedure

### 1) Assumption Inventory

List major assumptions behind each key conclusion. Tag each assumption type (empirical, methodological, structural, temporal, normative).

### 2) Strong Challenge Pass

For each major conclusion, find strongest credible opposing evidence or limiting case. Prefer high-quality critiques over weak objections.

### 3) Alternative Framing

Reframe the problem from at least one substantially different lens (for example scale, stakeholder, timeline, or mechanism).

### 4) Disagreement Map

When multiple positions exist, capture:

- position statement
- strongest supporting evidence
- strongest counter-evidence
- what evidence would change the conclusion

### 5) Synthesis Output

Return a concise artifact for documentation with:

- tested assumptions
- strongest challenges
- conditional claims (what is true under which conditions)
- unresolved disputes

## Output Requirements

- Preserve evidence traceability (link claims back to sources).
- Do not force "both sides" framing when evidence strongly favors one side.
- Keep output useful for integration into final docs.

## Anti-Patterns

- manufacturing controversy where none exists
- weak-manning opposing views
- treating unsupported claims as equal to evidence-backed claims
