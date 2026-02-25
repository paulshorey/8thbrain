---
name: perplexity-sonar-followup
description: Use Perplexity API MCP tools as a second-pass research accelerator when deep-research coverage is insufficient, stale, low-diversity, or missing important perspectives.
allowed-tools:
  - WebSearch
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
  - Task
---

# Perplexity Sonar Follow-Up

Use Perplexity MCP tools to close specific research gaps identified after deep-research. This is a **targeted, optional amplifier** — not a replacement for first-pass research. The pipeline produces good output without this step.

## Failure Behavior

**This entire skill is skippable.** If the Perplexity MCP server is unavailable, misconfigured, or returns errors at any point during execution:

1. Stop attempting Perplexity calls immediately (do not retry more than once).
2. Note briefly which gaps remain unfilled.
3. Proceed to the next pipeline step (`research-documentation`).
4. Do not treat this as a failure of the overall research process.

## When to Use

- Deep research did not reach saturation on key claims.
- Perspective coverage is missing important alternatives or challenges.
- Topic is rapidly changing and needs a freshness refresh.
- Core claims still have low confidence.

## When NOT to Use

- No research gap has been identified (run `deep-research` first).
- User explicitly disallows external APIs.
- MCP server is unavailable — skip this skill entirely and proceed.

## Workflow

### Phase 1 — Gap Definition

From the deep-research bundle, list concrete gaps:

- Missing source classes
- Weak coverage of alternative perspectives or trade-offs
- Stale timestamps on key claims
- Unresolved contradictions or open questions

Convert each gap into an explicit follow-up question.

**Gate:** Gap-driven follow-up plan exists.

### Phase 2 — MCP Preflight

Confirm the Perplexity MCP server is configured and check available tools (typically `perplexity_search`, `perplexity_ask`, `perplexity_research`, `perplexity_reason`).

If unavailable: log the limitation, skip this skill, and proceed to documentation. Do not block the pipeline.

**Gate:** Tool readiness confirmed or limitation recorded.

### Phase 3 — Targeted Perplexity Pass

For each gap question:

1. Prefer `perplexity_research` for deep synthesis, `perplexity_search` for breadth, `perplexity_reason` for complex analytical reconciliation.
2. Request explicit citations and dates.
3. Vary framing: supportive, critical, neutral, regional, temporal.

**Gate:** Gap-focused outputs collected.

### Phase 4 — Merge and Deduplicate

1. Deduplicate against the existing source table.
2. Add only net-new insights, sources, and perspectives.
3. For each claim, note whether confidence increased, stayed the same, or decreased due to contradictory evidence.

**Gate:** Merged context is richer and conflict-aware.

### Phase 5 — Provenance

For each new claim, record: source link, publication date, source type, brief evidence note. Save the updated bundle to disk.

**Gate:** New content is auditable and citation-ready.

## Anti-Patterns

- Using Perplexity before defining specific research gaps
- Copying generated text without source-level verification
- Replacing prior context instead of merging
- Treating Perplexity output as a primary source rather than a search aggregator
