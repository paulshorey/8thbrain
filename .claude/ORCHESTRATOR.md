# Deep Research Orchestration

The main context orchestrates research by launching subagents in parallel, combining their output, and applying orchestrator skills.

## Pipeline

1. **Scope Assessment** — determine tier (Quick/Standard/Deep) and topic slug.
2. **Launch subagents** in parallel. Do not wait for one to finish before starting the next.
3. **Combine bundles** — merge research from successful subagents; ignore failures and timeouts.
4. **Fallback** — if all subagents fail, perform direct research in the main context (see below).
5. **Dialectical analysis** — run when the topic has meaningful disagreement, competing approaches, or multiple legitimate perspectives. Skip for purely factual or tutorial-style topics.
6. **Research documentation** — write or update docs under `./docs/{topic}/`.
7. **Self-reflection** — save to `./docs/{topic}/reflection.md`. Commit.

Subagents: deeper-research (WebSearch), perplexity-deep-research (Perplexity MCP), gemini-deep-research (Gemini MCP or API).

## Launching Subagents

Use **parallel dispatch** — launch subagents at once. Each receives the research topic, scope tier, and topic slug.

For **Quick tier**, launch only `deeper-research`. For **Standard** and **Deep** tiers, launch all three.

### Prompt Template

When composing the prompt for each subagent, include all of:

```
You are the {subagent-name} subagent.

{Full contents of .claude/subagents/{name}/AGENT.md body (below the YAML frontmatter)}

---
Research topic: {user's research request}
Topic slug: {kebab-case slug}
Scope tier: {Quick | Standard | Deep}

Produce a research bundle in the standardized format. Save it to ./docs/{topic-slug}/research-bundles/{bundle-filename}.md
```

This ensures the subagent has its full instructions, the topic, and the tier in one prompt.

### Cursor (Task tool)

Use the `Task` tool to launch subagents in parallel:

1. **Read** `.claude/subagents/{name}/AGENT.md` for full instructions.
2. **Compose prompt** using the template above.
3. **Launch** with `Task` — use `subagent_type: "generalPurpose"` for research tasks.

Launch all applicable subagents **concurrently** (multiple Task calls in the same turn).

### Claude Code

If using Claude Code's built-in subagent support, subagents may be defined in `.claude/agents/` or invoked via the SDK. Follow the same parallel-dispatch pattern: launch applicable subagents with the research topic, then combine outputs.

### General

- **Timeout:** If a subagent fails or does not respond in reasonable time, ignore it and continue with the others.
- **Model:** Each subagent should use Claude Sonnet when possible.

## Standardized Research Bundle Format

All subagents must produce output in this format (fields may be empty if not applicable, but the structure must be consistent):

```markdown
# Research Bundle: {subagent-name}

## Metadata
- **Topic:** {topic}
- **Scope tier:** {Quick/Standard/Deep}
- **Subagent:** {name}
- **Status:** {complete | partial | failed}
- **Timestamp:** {ISO 8601}

## Query Lattice
List of queries executed, with brief rationale for each.

## Source Table
| # | Title | Author/Org | Date | URL | Type | Quality |
|---|-------|------------|------|-----|------|---------|
| 1 | ...   | ...        | ...  | ... | ...  | ...     |

Type: primary, academic, expert-analysis, secondary, unverified (see CLAUDE.md Source Quality).
Quality: high, medium, low — brief justification.

## Key Findings
Numbered findings. Each finding includes:
- The claim
- Supporting source(s) by number from the source table
- Confidence: [HIGH CONFIDENCE] / [MEDIUM CONFIDENCE] / [LOW CONFIDENCE]
- Perspective label if applicable: [CONSENSUS] / [CONTESTED] / [MINORITY VIEW] / etc.

## Perspective Map
Summary of major positions found, who holds them, and strength of evidence.

## Gaps and Unresolved Questions
What couldn't be determined, what needs more research, what surprised you.
```

## Combining Outputs

1. Collect research bundles from successful subagents.
2. **Deduplicate sources** — match on URL first, then on title + author. Keep the entry with the most metadata.
3. **Merge findings** — group by claim. If multiple subagents found the same claim, note the convergence (stronger confidence). If they conflict, preserve both with perspective labels.
4. **Reconcile confidence** — when subagents disagree on confidence for the same claim, use the more conservative rating and note the disagreement.
5. **Combine gaps** — union of all unresolved questions from all bundles.
6. Produce a single unified research context for `dialectical-analysis` and `research-documentation`.

## All-Subagent Failure Fallback

If every subagent fails (MCP errors, timeouts, network issues):

1. Do not silently produce empty output or skip research.
2. Perform direct research in the main context using WebSearch.
3. Run at least 10 queries covering: definitional, causal, critical, comparative, and temporal angles.
4. Construct a research bundle in the standard format above, with status "fallback".
5. Continue the pipeline (dialectical-analysis → research-documentation → commit).
6. Note in `reflection.md` that subagents failed and a fallback was used.

## When to Skip Subagents

- **Recall Mode:** User asks to summarize existing knowledge. Read local docs, don't launch subagents.
- **Quick-Write Mode:** User asks to "add a note", "update [topic] with", etc. Skip subagents and write directly.
- **Perplexity/Gemini unavailable:** Proceed with whatever subagents succeeded. Never block on one provider.
