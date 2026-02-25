# Deep Research Orchestration

The main context (orchestrator) launches research subagents in parallel, combines their output, then runs skills in sequence. Subagents run independently; skills run in the main context.

## Objective

Produce a unified research context from multiple subagent bundles, then document it under `./docs/{topic}/`. Research applies to **any topic type**: factual lists, technical guides, implementation plans, political/contested topics, reference compilations. Subagents harvest exhaustively — many sources and many ideas — regardless of whether the topic has opposing opinions or not.

## Routing

| Condition | Action |
|-----------|--------|
| User asks for deep research, find many examples, implementation plan, thorough investigation, multi-perspective analysis | Run this pipeline |
| User asks to "add a note", "update [topic] with", small edit | Skip. Use Quick-Write (CLAUDE.md). |
| Perplexity or Gemini MCP/API unavailable | Launch subagents anyway. Proceed with whatever succeeds. Never block on one provider. |

## Pipeline (Execute in Order)

1. **Scope Assessment** — Determine tier (Quick/Standard/Deep) and topic slug. Use CLAUDE.md Scope Tiers table.
2. **Launch Subagents** — All three in parallel. Pass: user topic, topic slug, tier with min sources/queries. Do not wait for one before starting the next.
3. **Combine** — Execute combine procedure below on successful subagent outputs.
4. **Dialectical-Analysis** — Run when topic has meaningful disagreement. Skip for factual/tutorial topics. Read `.claude/skills/dialectical-analysis/SKILL.md` and execute phases 1–5 in order.
5. **Research-Documentation** — Always run. Read `.claude/skills/research-documentation/SKILL.md` and execute phases 1–9 in order.
6. **Self-Reflection** — What surprised you? Where least confident? What to research next?
7. **Commit** — Save all changes and commit.

## Subagents

| Subagent | Purpose | Config |
|----------|---------|--------|
| deeper-research | WebSearch, term variations, min queries per tier | none |
| perplexity-deep-research | Perplexity MCP Sonar | PERPLEXITY_API_KEY, MCP |
| gemini-deep-research | Gemini 100+ sources | GEMINI_API_KEY, MCP or API |

**Launch instructions:** Read `.claude/subagents/{name}/AGENT.md` for each. Compose prompt: subagent instructions + "Research topic: [user request]. Topic slug: [slug]. Tier: [Quick|Standard|Deep]. Min sources: [N]. Min queries: [N]. Produce a research bundle." Use `mcp_task` with `subagent_type: "generalPurpose"` or `"explore"`. Launch all three concurrently (multiple mcp_task calls in the same turn).

**On timeout or failure:** Ignore that subagent. Continue with others. Do not retry.

## Combine Procedure

Execute after subagents complete. Input: research bundles from successful subagents. Output: single unified research context for skills.

1. **Collect** — Gather all research bundles. If none succeeded, document failure and stop.
2. **Deduplicate sources** — Merge source tables by URL. Keep earliest publication date, best quality metadata.
3. **Merge claim-to-source** — Aggregate claim-to-source mappings. When multiple subagents cite the same claim, keep all source links.
4. **Reconcile conflicts** — When subagents disagree on a claim: keep both positions. Label with perspective tags (e.g. [CONTESTED]). Do not pick a winner.
5. **Produce unified context** — Single structure: scope, source table, claim-to-source, perspective map (when topic has debate), unresolved questions, confidence per finding. Pass this to dialectical-analysis (if warranted) and research-documentation.

## When to Skip Subagents

- **Quick-Write Mode** — User asks to add a note, update topic, jot down. Skip entire pipeline. Write directly per CLAUDE.md.

## When to Skip Dialectical-Analysis

**Skip when any apply:**

- Topic is purely factual, reference, technical, or tutorial.
- Subagent research found broad agreement, no real controversy.
- Topic is an implementation plan, technical deep dive, or exhaustive fact list.
- Research incomplete or uncited.
- User wants summary or tutorial only.

**Run only when:** Topic has genuine disagreement, competing approaches with real trade-offs, or user explicitly requested ("find contradictions", "devil's advocate").

Do not skip research-documentation when research is complete.
