# Deep Research Orchestrator

The main agent thread is the orchestrator. It coordinates research workers, waits for their outputs, combines evidence, and writes final documentation.

## Purpose

Produce comprehensive, source-backed documentation for any research request, including:

- exhaustive factual collections
- technical implementation research
- contested topics requiring structured disagreement mapping

## Routing

| Condition | Action |
|---|---|
| Request contains or implies research/evidence gathering | Run this orchestrator workflow |
| Request is a small edit without new research | Skip workflow, use Quick-Write from `CLAUDE.md` |
| Unsure | Run this orchestrator workflow |

## Orchestrator Responsibilities

1. Define scope and success criteria.
2. Spawn all research subagents in parallel.
3. Wait for completion/timeouts.
4. Combine bundles into one unified research context.
5. Run optional `dialectical-analysis` skill only when disagreement is meaningful.
6. Run `research-documentation` skill to publish/merge docs.

## Step-by-Step Workflow

### 1) Scope Assessment

Determine:

- `topic_slug`
- `tier`: Quick / Standard / Deep
- numeric targets from tier:
  - Quick: min 6 queries, 5 sources
  - Standard: min 14 queries, 12 sources
  - Deep: min 20+ queries, 20+ sources
- `topic_type`: factual, technical, contested
- user-specific output preferences (if provided)

### 2) Launch Subagents (Parallel)

Always launch all three:

- `deeper-research`
- `perplexity-deep-research`
- `gemini-deep-research`

Pass each subagent the same input contract:

```text
research_topic: <user request>
topic_slug: <slug>
tier: <Quick|Standard|Deep>
min_queries: <N>
min_sources: <N>
topic_type: <factual|technical|contested>
expected_bundle_schema: standard-bundle-v1
```

Do not serialize launches. Start all in parallel and proceed when all have returned or timed out.

### 3) Collect and Combine

If zero bundles succeed, produce a clearly marked partial/failure report and stop.

Otherwise combine successful bundles:

1. Merge source tables and deduplicate by canonical URL.
2. Keep best metadata per source (title, date, publisher, source class).
3. Build claim-to-source map (one claim can map to multiple sources).
4. Keep competing claims when evidence conflicts.
5. Produce a unified context package.

### 4) Optional Dialectical Analysis

Run only if topic type is contested or the evidence shows real disagreements/competing approaches.

Skip for straightforward factual and technical-reference topics with broad agreement.

### 5) Documentation

Run `research-documentation` skill on the unified context.

Documentation format must be adaptive:

- one markdown file for simple topics
- multiple files for complex topics/subtopics

Do not force a rigid template.

## Subagent Failure Policy

- Never block the entire workflow on one provider.
- If a subagent fails or times out, continue with the remaining bundles.
- Do not retry failed subagents in the same run unless the user explicitly requests retries.

## Standard Bundle Schema (`standard-bundle-v1`)

Each subagent should return:

1. Scope summary
2. Query log (or method log)
3. Source table (title, URL, date, source class, quality notes)
4. Claim-to-source mapping
5. Coverage notes:
   - factual inventory and/or
   - technical implementation insights and/or
   - disagreement map (if contested)
6. Open questions / gaps
7. Confidence notes

## Notes for Implementers

- Keep orchestration logic explicit and deterministic.
- Keep worker prompts focused with clear input/output contracts.
- Preserve evidence traceability from source -> claim -> final document.
