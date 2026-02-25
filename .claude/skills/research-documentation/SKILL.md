---
name: research-documentation
description: Convert research context into organized Markdown knowledge-base files under ./docs/{topic_title}/, with perspective labels, confidence ratings, steelmanned disagreements, cross-references, and merge-safe updates.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich, multi-perspective Markdown files. See `CLAUDE.md` for file structure, naming rules, perspective labels, and confidence ratings.

## When to Use

- After subagent research (deeper-research, perplexity, gemini) and optionally `dialectical-analysis` is complete.
- User asks to create, continue, or expand a topic in the knowledge base.

## When NOT to Use

- Research is incomplete or uncited.
- User explicitly wants brainstorming without filesystem updates.

## Workflow

### Phase 1 — Topic Path Resolution

1. Normalize topic title to kebab-case slug.
2. Check `./docs/README.md` for existing topics with the same or similar names.
3. If a near-duplicate exists, merge into the existing topic rather than creating a new one.

**Gate:** Target topic directory is selected, no duplication.

### Phase 2 — Existing Content Intake

If topic files exist:

1. Read `intro.md` and all subtopic files.
2. If subagent bundles exist (`./docs/{topic}/research-bundles/*.md`), treat them as the primary research context. The orchestrator may have already combined them; otherwise merge them here.
3. Build a merge map: **keep** (still valid), **update** (needs revision), **extend** (needs more depth/perspectives), **deprecate** (superseded, with rationale preserved in a note).

**Gate:** Existing context and research bundles integrated into writing plan.

### Phase 3 — Write intro.md

Write or update `./docs/{topic_title}/intro.md`. The structure should fit the topic — choose and adapt sections from the building blocks below rather than mechanically including all of them:

**Building blocks** (select and order based on what serves the topic):

- **Topic overview** — what this is and why it matters
- **Core concepts / foundations** — key ideas or mechanisms needed to understand the topic
- **How it works** — technical detail, algorithms, processes, or implementations (include code when relevant)
- **Major perspectives or approaches** — labeled with `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc. where applicable
- **Key developments or timeline** — what happened and when, or how understanding has evolved
- **Trade-offs and limitations** — what the main approaches sacrifice, where they break down
- **Open questions** — what remains uncertain, with confidence ratings
- **Strongest challenges** — the best arguments against the dominant position or approach
- **Practical applications** — how this is used in practice, real-world examples
- **Subtopic index** — links to deeper files
- **Related topics** — cross-references to other `./docs/` topics
- **Sources** — linked references for major claims

The intro must be understandable standalone.

**Gate:** `intro.md` is comprehensive, appropriately structured, and cross-linked.

### Phase 4 — Subtopic Decomposition

Create `./docs/{topic_title}/{sub_topic}.md` files when a section is:

- Complex enough to exceed concise intro treatment (~500+ words of dense material)
- Likely to be updated independently
- A site of significant disagreement or nuance deserving full treatment

Each subtopic file includes: focused explanation, perspective differences with labels (where relevant), confidence ratings, and citations.

**Gate:** Complex areas are split into dedicated files.

### Phase 5 — Disagreement / Trade-off Documentation

When a topic has substantial debates or design trade-offs, create `./docs/{topic_title}/disagreements.md`:

1. **Inventory** — list of contested claims or competing approaches
2. For each: the question at issue, Position A (steelmanned + evidence), Position B (steelmanned + evidence), additional positions if relevant, what evidence or outcome would resolve it, who holds each position and why
3. **Meta-observations** — patterns in what is disputed and why

**Gate:** Disagreements and trade-offs documented fairly with steelmanned positions.

### Phase 6 — Citation and Confidence Integrity

1. Ensure major claims reference original sources with links. Inline format: `[Title - Author/Org, Date](URL)`.
2. For large source lists (15+), use a `sources.md` table.
3. Assign confidence ratings to major claims per `CLAUDE.md`.
4. Validate internal links between intro and subtopic files.
5. Add cross-references to related topics.

**Gate:** Documentation is source-traceable, confidence-rated, and navigable.

### Phase 7 — Topic Index Update

Update `./docs/README.md` with:

- Topic name linked to `intro.md`
- One-line description
- Maturity level (Seed / Growing / Mature / Needs Update)
- Last updated date

**Gate:** Master index reflects current state.

### Phase 8 — Self-Reflection

Before finalizing, write a brief reflection (can be a section at the bottom of `intro.md` or a separate note):

1. **What surprised me** — findings that contradicted initial expectations
2. **Where I'm least confident** — claims that feel weakest and why
3. **What I'd research next** — promising threads that weren't fully explored
4. **Blind spots I suspect** — perspectives, source types, or framings that may be underrepresented

This reflection serves as a roadmap for future research sessions on the topic.

**Gate:** Reflection documented.

### Phase 9 — Merge-Safe Finalization

Before saving:

1. Re-read existing file content to prevent accidental overwrites.
2. Preserve useful prior context unless superseded by better evidence.
3. If contradictory historical content exists, keep both and label the conflict.
4. Run the quality checklist from `CLAUDE.md`.

**Gate:** Topic files updated without losing valuable prior knowledge.

## Anti-Patterns

- Writing without reading existing files first
- Dumping all detail into intro instead of splitting subtopics
- One-sided conclusions on contested topics
- Omitting source links
- Treating all positions as equally valid regardless of evidence
- Overwriting previous research without merge consideration
- Omitting confidence ratings
- Forcing a debate structure onto non-contested topics
- Forcing a tutorial structure onto contested topics
