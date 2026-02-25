# Deep Research Orchestration

This file defines execution behavior for **Deep Research Mode** only.
Policy and conflict resolution authority live in `CLAUDE.md`.

## Preconditions

Before running this pipeline, the mode router in `CLAUDE.md` must already select Deep Research.

Required inputs:

- user research request
- topic slug (kebab-case)
- scope tier (`quick`, `standard`, or `deep`)

## Pipeline

1. **Scope Assessment**
   - Confirm tier and topic slug.
   - Capture known constraints (time range, geography, domain context).
2. **Parallel Subagent Dispatch**
   - Launch all three subagents concurrently.
   - Do not wait for one to complete before launching the others.
3. **Bundle Collection**
   - Gather all successful or partial outputs.
   - Normalize to canonical bundle schema from `CLAUDE.md`.
4. **Bundle Combination**
   - Deduplicate sources by URL/title/date.
   - Merge claim-to-source mappings.
   - Preserve contradictions and counterevidence.
5. **Dialectical Analysis (conditional)**
   - Run when topic has meaningful disagreement or competing frameworks.
6. **Research Documentation**
   - Convert unified context into docs via `research-documentation`.
7. **Reflection + Commit**
   - Record reflection in `./docs/{topic}/notes.md`.
   - Commit changes.

Subagents:

- `deeper-research` (WebSearch)
- `perplexity-deep-research` (Perplexity MCP)
- `gemini-deep-research` (Gemini MCP/API)

## Launching Subagents

Use parallel dispatch. Each subagent receives:

- Research topic (verbatim user request)
- Topic slug
- Scope tier
- Required output format: canonical bundle schema

### Cursor (`mcp_task`)

For each subagent:

1. Read `.claude/subagents/{name}/AGENT.md`.
2. Compose prompt with topic + slug + tier + schema requirement.
3. Launch via `mcp_task` with suitable `subagent_type`.

Launch all three in the same turn.

### Runtime Expectations

- Individual failures/timeouts are non-fatal.
- Partial bundle output is acceptable if clearly marked.
- Prefer Claude Sonnet for each subagent.

## Bundle Combination Rules

1. Keep source IDs stable per provider where possible.
2. Map equivalent sources into one canonical entry.
3. Keep both sides of conflicts; do not flatten disagreements.
4. Track confidence at claim level, not only topic level.
5. Build one merged context for downstream skills.

## Failure Handling Matrix

| Condition | Orchestrator Action |
|----------|---------------------|
| One subagent failed | Continue with remaining bundles. |
| Two subagents failed | Continue with one bundle; increase caveat density. |
| All three subagents failed | Fallback to direct WebSearch in main context; produce partial output labeled `[NEEDS VERIFICATION]`. |
| Perplexity/Gemini unavailable | Continue with available providers; do not block pipeline. |

## Completion Gates

Deep Research orchestration is complete only when:

- Tier and slug are recorded.
- At least one valid research bundle exists (or fallback path executed).
- Combined context preserves contradictions and gaps.
- Required skills have run (dialectical-analysis when warranted, research-documentation always).
- Reflection note has been added.
