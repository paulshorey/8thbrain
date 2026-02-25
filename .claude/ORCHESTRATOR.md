# Deep Research Orchestration

The main context thread **orchestrates** research by launching subagents in parallel, then combining their output and applying orchestrator skills.

## Pipeline

```text
User Request
    │
    ▼
┌─────────────────────┐
│  Scope Assessment   │  Tier (Quick/Standard/Deep), topic slug
└──────────┬──────────┘
           │
           ▼
┌──────────────────────────────────────────────────────────┐
│  PARALLEL SUBAGENTS (launch all 3, ignore failures)      │
│  ┌─────────────────┐ ┌─────────────────────┐ ┌────────┐ │
│  │ deeper-research  │ │ perplexity-deep      │ │ gemini │ │
│  │ (WebSearch)      │ │ (Perplexity MCP)     │ │ (MCP/  │ │
│  │                  │ │                     │ │  API)  │ │
│  └────────┬─────────┘ └──────────┬──────────┘ └───┬────┘ │
└───────────┼──────────────────────┼────────────────┼──────┘
            │                      │                │
            ▼                      ▼                ▼
┌──────────────────────────────────────────────────────────┐
│  COMBINE BUNDLES  — Merge all research bundles into one   │
└──────────┬───────────────────────────────────────────────┘
           │
           ▼
┌──────────────────────────────┐
│  dialectical-analysis        │  (When topic warrants it)
└──────────┬───────────────────┘
           ▼
┌──────────────────────────────┐
│  research-documentation      │  Write/update docs
└──────────┬───────────────────┘
           ▼
┌──────────────────────────────┐
│  Self-Reflection + Commit    │
└──────────────────────────────┘
```

## Launching Subagents

Use **parallel dispatch** — launch all three research subagents at once. Each receives the user's research topic and any scope context.

### Cursor (mcp_task)

Use the `mcp_task` tool to launch subagents in parallel. For each subagent:

1. **Read** `.claude/subagents/{name}/AGENT.md` for full instructions
2. **Compose prompt** = subagent instructions + "Research topic: [user request]. Topic slug: [slug]. Produce a research bundle."
3. **Launch** with `mcp_task` — use `subagent_type: "generalPurpose"` for research tasks, or `"explore"` for broad exploration

Launch all three **concurrently** (multiple mcp_task calls in the same turn). Do not wait for one before starting the next.

### Claude Code

If using Claude Code's built-in subagent support, subagents may be defined in `.claude/agents/` or invoked via the SDK. Follow the same parallel-dispatch pattern: launch all three with the research topic, then combine outputs.

### General

- **Timeout:** If a subagent fails or does not respond in reasonable time, ignore it and continue with the others.
- **Model:** Each subagent should use Claude Sonnet when possible.

## Combining Outputs

1. Collect research bundles from successful subagents.
2. Deduplicate sources.
3. Merge claim-to-source mappings.
4. Reconcile conflicting claims — document both with perspective labels.
5. Produce a single unified research context for `dialectical-analysis` and `research-documentation`.

## When to Skip Subagents

- **Quick-Write Mode:** User asks to "add a note", "update [topic] with", etc. Skip subagents and write directly.
- **Perplexity/Gemini unavailable:** Proceed with whatever subagents succeeded. Never block on one provider.
