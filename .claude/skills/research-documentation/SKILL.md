---
name: research-documentation
description: Convert research into Markdown under ./docs/{topic_title}/ with perspective labels, confidence ratings, steelmanned disagreements, cross-references, merge-safe updates.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich Markdown. See CLAUDE.md for file structure, naming, perspective labels, confidence ratings, and source quality tiers.

**When to use:** Subagent research (and optionally dialectical-analysis) is complete; user asks to create, continue, or expand a topic.

**When NOT to use:** Research is incomplete or uncited; user wants brainstorming only; user is in Recall mode and just wants a summary of existing docs.

## Phase 1 — Topic Path Resolution

1. Normalize topic to kebab-case slug.
2. Check `./docs/README.md` for existing or semantically similar topics (see CLAUDE.md Topic Deduplication).
3. If near-duplicate exists, merge into it. If genuinely different but related, create new topic with cross-references.

**Completion criterion:** Target directory selected, no duplication.

## Phase 2 — Existing Content Intake

If the topic already exists:
1. Read `intro.md` and all subtopic files.
2. If `research-bundles/` exist and orchestrator did not already combine them, combine now.
3. If `reflection.md` exists, read it for context on prior sessions' gaps and next steps.
4. Build a merge map for each section: **keep** (unchanged), **update** (revise with new evidence), **extend** (add new material), **deprecate** (flag as outdated but preserve).

**Completion criterion:** Full context of existing content integrated into writing plan.

## Phase 3 — Write intro.md

Write or update `./docs/{topic_title}/intro.md`. Select building blocks appropriate to the topic:

**Available building blocks** (use what fits — not every topic needs all of these):

| Block | Use When | Example Content |
|-------|----------|-----------------|
| Topic Overview | Always | 2–4 paragraph executive summary of the topic |
| Core Concepts | Topic has foundational ideas to explain | Definitions, taxonomies, key terms |
| How It Works | Topic involves processes or mechanisms | Step-by-step, diagrams-as-text, code examples |
| Major Perspectives | Multiple viewpoints exist | Labeled positions with [CONSENSUS]/[CONTESTED]/etc. |
| Key Developments | Topic has important history | Timeline of milestones, turning points |
| Trade-offs & Limitations | Topic involves choices or constraints | Comparison tables, failure modes, edge cases |
| Open Questions | Active unknowns remain | What's unresolved, what research is needed |
| Strongest Challenges | Dialectical analysis found real pushback | The best argument against the primary narrative |
| Practical Applications | Topic is actionable | How-to guidance, implementation patterns, code |
| Subtopic Index | Multiple subtopic files exist | Links to subtopic files with one-line descriptions |
| Related Topics | Other knowledge base topics connect | Cross-references with relationship explanation |
| Sources | Fewer than 15 sources | Inline source list; if 15+, link to sources.md |

**Structure guidance:**
- A *technical tutorial* topic: Overview → Core Concepts → How It Works → Trade-offs → Practical Applications → Sources.
- A *policy analysis* topic: Overview → Major Perspectives → Key Developments → Trade-offs → Open Questions → Strongest Challenges → Sources.
- A *historical* topic: Overview → Key Developments (timeline) → Major Perspectives → Open Questions → Sources.

`intro.md` must stand alone as a useful document. A reader should be able to understand the topic from `intro.md` without reading subtopic files.

**Completion criterion:** `intro.md` is comprehensive, well-structured, and cross-linked.

## Phase 4 — Subtopic Decomposition

Create `./docs/{topic_title}/{sub_topic}.md` when a section:
- Exceeds ~500 words of dense material.
- Covers an area that may update independently of the rest.
- Contains significant disagreement worth its own detailed treatment.

Each subtopic file includes:
- Focused explanation with appropriate building blocks.
- Perspective labels where viewpoints differ.
- Confidence ratings on major claims.
- Citations for key claims.
- A `## See Also` section linking back to `intro.md` and related subtopics.

**Completion criterion:** Complex areas are split into dedicated files, each self-contained.

## Phase 5 — Disagreements

When the topic has substantial debates (especially if dialectical-analysis was run):

Create `disagreements.md` with this structure per disagreement:

```markdown
### {Question at Issue}

**Position A: {name}**
{Steelmanned argument — the strongest version, not a strawman}
**Evidence:** {specific sources and data}
**Held by:** {who — named individuals, orgs, schools of thought}

**Position B: {name}**
{Steelmanned argument}
**Evidence:** {specific sources and data}
**Held by:** {who}

**What would resolve this:** {what evidence or event would settle it}
**Current assessment:** {[CONTESTED] / [MAJORITY VIEW] / etc. with brief justification}
```

**Completion criterion:** Every significant disagreement has steelmanned positions with evidence.

## Phase 6 — Citation and Confidence

1. Assign inline citations to major claims: `[Title - Author/Org, Date](URL)`.
2. If 15+ sources: create `sources.md` with a full source table and reference by number in text.
3. Assign confidence per CLAUDE.md: `[HIGH CONFIDENCE]`, `[MEDIUM CONFIDENCE]`, `[LOW CONFIDENCE]` with brief justification.
4. Validate all internal links (subtopic references, cross-topic links).
5. Add cross-references to related topics in `## Related Topics`.

**Completion criterion:** Every major claim is source-traceable, confidence-rated, and the document is navigable.

## Phase 7 — Index Update

Update `./docs/README.md`:
- Topic name linked to `intro.md`.
- One-line description.
- Maturity level: Seed → Growing → Mature → Needs Update.
- Last-updated date.

If this is a new topic, add a new row. If updating, change the date and maturity if warranted.

**Completion criterion:** Index reflects the current state of the topic.

## Phase 8 — Self-Reflection

Write `./docs/{topic_title}/reflection.md`:

```markdown
# Research Reflection

**Date:** {ISO date}
**Scope tier:** {tier used}
**Subagents used:** {which succeeded, which failed}

## What Surprised Me
{findings that were unexpected or counter to initial assumptions}

## Where I'm Least Confident
{claims with thin evidence, areas where sources conflicted}

## What to Research Next
{specific questions or angles for a future session}

## Suspected Blind Spots
{perspectives, sources, or framings that might be missing}
```

This file is cumulative — append new reflections below previous ones, separated by a horizontal rule.

**Completion criterion:** Reflection documented with actionable next steps.

## Phase 9 — Merge-Safe Finalization

1. Re-read all existing files in the topic folder.
2. Verify that prior content was preserved unless explicitly superseded by better evidence.
3. If contradictory historical content exists, keep both and label the conflict.
4. Run the CLAUDE.md Quality Checklist.
5. Commit with a descriptive message: `docs({topic-slug}): {what changed}`.

**Completion criterion:** No valuable prior knowledge lost; quality checklist passes.

## Anti-Patterns

- Writing without reading existing content first.
- Dumping everything into `intro.md` instead of splitting subtopics.
- One-sided conclusions on contested topics.
- Omitting sources for significant claims.
- Treating all positions as equally valid regardless of evidence quality.
- Overwriting existing content without merging.
- Omitting confidence ratings.
- Forcing debate structure onto non-contested topics.
- Forcing tutorial structure onto genuinely contested topics.
