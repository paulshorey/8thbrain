---
name: perplexity-sonar-followup
description: Use Perplexity API MCP tools as a second-pass research accelerator when deep-research coverage is still insufficient, stale, low-diversity, or missing strong opposing viewpoints.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - TodoRead
  - TodoWrite
  - Task
---

# Perplexity Sonar Follow-Up

Use Perplexity MCP tools to fill research gaps after the core deep-research pass.

## Essential Principles

1. Perplexity is a follow-up amplifier, not a replacement for first-pass deep research.
2. Use it to close identified gaps, not to re-run the exact same query blindly.
3. Merge Perplexity findings with existing context; do not discard prior evidence.
4. Preserve provenance so every new claim is traceable to a source.

## When to Use

- Deep research did not produce an overwhelming amount of unique information.
- Perspective coverage is narrow or lacks informed counterarguments.
- The topic is rapidly changing and needs a current-events refresh.
- Core claims still have low confidence after normal research passes.

## When NOT to Use

- No research gap has been identified yet (run `deep-research` first).
- The user explicitly disallows external APIs.
- MCP server is unavailable and no fallback path exists.

## Workflow

### Phase 1 - Gap Definition

**Entry criteria:** Deep research context bundle exists.

1. List concrete gaps:
   - missing source classes
   - weak disagreement coverage
   - stale timestamps
   - unresolved key claims
2. Convert each gap into explicit follow-up questions.

**Exit criteria:** A gap-driven follow-up plan exists.

### Phase 2 - MCP Preflight

**Entry criteria:** Follow-up questions are ready.

1. Confirm Perplexity MCP server is configured.
2. Confirm available tools (typically `perplexity_search`, `perplexity_ask`, `perplexity_research`, `perplexity_reason`).
3. If unavailable, report setup gap and continue with non-Perplexity methods only when requested.

**Exit criteria:** Tool readiness is confirmed or limitation is recorded.

### Phase 3 - Sonar Deep Research Pass

**Entry criteria:** MCP tools are available.

1. For each gap question, run a targeted Perplexity pass:
   - prefer `perplexity_research` for deep synthesis
   - use `perplexity_search` for breadth checks
   - use `perplexity_reason` for complex analytical reconciliation
2. Ask for explicit citations and dates in responses.
3. Vary framing (supportive, critical, neutral, regional, temporal).

**Exit criteria:** Gap-focused Perplexity outputs collected.

### Phase 4 - Merge and Deduplicate

**Entry criteria:** Perplexity outputs collected.

1. Deduplicate against existing source table.
2. Add only net-new insights, sources, and perspectives.
3. Update confidence by claim:
   - increased confidence
   - unchanged confidence
   - contradictory evidence discovered

**Exit criteria:** Merged context is richer and conflict-aware.

### Phase 5 - Provenance and Traceability

**Entry criteria:** Merge complete.

For each new claim, keep:

- source link
- publication date
- source type
- brief evidence note

Record additions in a follow-up section inside the topic documentation workspace.

**Exit criteria:** New content is auditable and citation-ready.

## Recommended Prompting Pattern for Perplexity Tools

When invoking Perplexity MCP tools, ask for:

- explicit links to sources
- distinction between fact, estimate, and interpretation
- conflicting evidence when available
- recency notes for fast-moving topics

## Anti-Patterns

- Using Perplexity before defining specific research gaps
- Copying generated text without source-level verification
- Replacing prior context instead of merging
- Ignoring conflicting evidence surfaced in follow-up

## Success Criteria

- [ ] Follow-up queries directly map to known research gaps
- [ ] Perplexity adds net-new, high-value information
- [ ] Merged context preserves old + new evidence
- [ ] Every adopted claim remains traceable to original sources
