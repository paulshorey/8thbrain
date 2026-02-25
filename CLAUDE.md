# Claude Code Operating Manual

This repository is a research knowledge base. The primary output is Markdown in `./docs/`.

The workflow is designed for **any research topic**:

- factual reference topics
- technical deep dives and implementation planning
- historical or policy topics with competing interpretations

Use analysis when it is useful, but do not force debate framing onto straightforward factual or technical subjects.

## Mission

Convert user requests into comprehensive, source-backed documentation that is easy to maintain over time.

## Core Routing Rule

Route requests to exactly one mode.

| User intent | Mode | Action |
|---|---|---|
| Any research intent ("research", "investigate", "find examples", "gather sources", "analyze", "deep dive", evidence-heavy planning) | **Deep Research** | Run orchestrator pipeline in `.claude/ORCHESTRATOR.md` (parallel subagents, combine, optional dialectical-analysis, research-documentation). |
| Small editorial update with no new sourcing required ("add a note", "log this", minor correction) | **Quick-Write** | Update existing docs directly; skip subagents and skills. |
| Ambiguous | **Deep Research** | Default to thorough evidence collection. |

**Hard rule:** If the user request mentions research or implies evidence gathering, run Deep Research.

## Deep Research Mode (Main Workflow)

1. **Scope** — Determine topic slug, tier (Quick/Standard/Deep), topic type (factual, technical, contested), and documentation goal.
2. **Launch subagents in parallel** — Always launch all configured research subagents.
3. **Wait and combine** — Collect successful bundles, deduplicate sources, reconcile overlaps/conflicts.
4. **Dialectical analysis (conditional)** — Run only when there are meaningful disagreements or competing approaches.
5. **Research documentation (always)** — Write/update docs in an adaptive structure.
6. **Quality pass** — Verify coverage, source traceability, merge safety.
7. **Commit** — Save the session.

See `.claude/ORCHESTRATOR.md` for exact execution order and handoff format.

## Quick-Write Mode

Use only for small updates that do not require new external research.

1. Locate existing topic in `docs/README.md`.
2. Read relevant existing files before editing.
3. Merge updates without losing prior useful content.
4. Update `docs/README.md` if new files/topics are created.
5. Commit.

## Scope Tiers (for Deep Research)

| Tier | Typical use | Min sources | Min queries |
|---|---|---:|---:|
| Quick | Narrow factual question | 5 | 6 |
| Standard | Most requests | 12 | 14 |
| Deep | Complex or high-stakes topics | 20+ | 20+ |

Default to **Standard** unless the request is clearly narrower or clearly more complex.

## Topic Type Guidance

### Factual / Reference

Prioritize completeness, precise facts, dates, definitions, and edge cases. Do not force opposing-position analysis when none exists.

### Technical / Implementation

Prioritize mechanisms, architecture options, constraints, examples, and implementation steps. Include code snippets when useful.

### Contested / Multi-Interpretation

Represent strongest competing views with evidence. Clearly separate established facts from interpretation.

## Evidence Standards

1. Cite key claims with links to original or high-quality sources when possible.
2. Prefer primary sources (official docs, standards, papers, data, firsthand material).
3. Track source recency and note when a source may be outdated.
4. Mark confidence on major findings: **[HIGH CONFIDENCE]**, **[MEDIUM CONFIDENCE]**, **[LOW CONFIDENCE]**.
5. When sources conflict, preserve the conflict and explain what would resolve it.

Perspective labels are optional and should be used only when they add clarity: `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, `[EVOLVING]`.

## Documentation Shape (Adaptive, Not Fixed)

Choose output structure based on complexity:

- **Simple topic:** one file (for example `./docs/topic-name.md`)
- **Complex topic:** topic folder with multiple files (for example `./docs/topic-name/intro.md` + subtopics)

Do not force a rigid template. Let the topic and user request determine structure.

## Merge-First Rule

Always read existing topic material before writing. Merge new evidence into existing docs. Do not blindly overwrite prior content.

## Reliability and Recovery

- If one subagent fails, continue with remaining bundles.
- If all external research tools fail, produce a clearly marked partial result and flag what needs verification.
- If existing docs contain contradictions, preserve both claims with clear labeling and sources.

## Final Checklist

Before finishing:

- [ ] Correct routing mode used
- [ ] Research depth meets tier targets
- [ ] Sources are traceable for major claims
- [ ] Output format fits topic complexity (single file vs multi-file)
- [ ] Existing knowledge preserved or intentionally superseded
- [ ] `docs/README.md` updated when needed
