---
name: research-documentation
description: Convert research context into organized Markdown knowledge-base files under ./docs/{topic_title}/, including intro.md, subtopic files, disagreement documentation, source-backed citations, perspective labels, confidence ratings, and merges with existing topic content.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich, perspective-diverse Markdown files in the local knowledge base.

## Essential Principles

1. Documentation is cumulative: read and merge existing topic files before writing.
2. Every substantial claim should be source-attributed.
3. `intro.md` explains the full topic landscape; deeper files handle complex subtopics.
4. Structure should optimize long-term retrieval and updates, not one-time output.
5. **Contested claims must show multiple sides.** Never present a debated position as settled fact.
6. **Confidence and uncertainty are first-class content.** They belong in the document, not just in the author's head.
7. **Disagreements are features, not bugs.** Documenting where smart people disagree is more valuable than pretending consensus exists.

## When to Use

- After `deep-research` (and optionally `dialectical-analysis` and `perplexity-sonar-followup`) is complete.
- User asks to create, continue, or expand a topic in the knowledge base.
- User asks for a summary of previously researched material.

## When NOT to Use

- Research is incomplete, uncited, or low-confidence.
- The user explicitly wants brainstorming without filesystem updates.

## Output Contract

Write research artifacts to:

```text
./docs/{topic_title}/intro.md
./docs/{topic_title}/{sub_topic}.md
./docs/{topic_title}/disagreements.md     (when topic has significant debates)
./docs/{topic_title}/sources.md           (when source table is large)
./docs/{topic_title}/timeline.md          (when chronology matters)
```

Where:

- `{topic_title}` is a kebab-case topic directory (for example, `quantum-computing`).
- `{sub_topic}` is a concise kebab-case file name (for example, `error-correction`).

## Workflow

### Phase 1 - Topic Path Resolution

**Entry criteria:** A topic title and research context exist.

1. Normalize topic title to a directory-safe kebab-case slug.
2. Locate existing topic directory under `./docs/`.
3. If multiple candidate directories exist, choose the best semantic match and note assumptions.

**Exit criteria:** Target topic directory is selected.

### Phase 2 - Existing Content Intake

**Entry criteria:** Topic directory is known.

1. Read existing `intro.md` if present.
2. Read major subtopic files if present.
3. Build a merge map:
   - keep (content still valid)
   - update (content needs revision with new evidence)
   - extend (content needs additional perspectives or depth)
   - deprecate (only with explicit rationale and preserved in a note)

**Exit criteria:** Existing context is integrated into writing plan.

### Phase 3 - Intro Authoring

**Entry criteria:** Merge map and source set exist.

Write or update `./docs/{topic_title}/intro.md` with:

1. **Topic overview** -- what this is and why it matters
2. **Core concepts** -- foundational ideas needed to understand the topic
3. **Major perspectives** -- clearly labeled with perspective tags:
   - `[CONSENSUS]`, `[MAJORITY VIEW]`, `[CONTESTED]`, `[MINORITY VIEW]`, `[HETERODOX]`
4. **Key developments and timeline notes** -- what happened and when
5. **Open questions and uncertainties** -- what we don't know, with confidence ratings
6. **Strongest counterarguments** -- steelmanned challenges to the dominant narrative
7. **Subtopic index** -- links to deeper files
8. **Related topics** -- cross-references to other topics in the knowledge base
9. **Sources and citations** -- linked references for all major claims

The intro should be understandable standalone and should link to subtopic files.

**Exit criteria:** `intro.md` is comprehensive, multi-perspective, and cross-linked.

### Phase 4 - Subtopic Decomposition

**Entry criteria:** Intro draft exists.

Create subtopic files when a section is:

- complex enough to exceed concise intro coverage
- high-impact for understanding or decision-making
- likely to be updated independently
- a site of significant disagreement that deserves full treatment

For each complex subtopic, create:

```text
./docs/{topic_title}/{sub_topic}.md
```

Include:

- focused explanation
- technical or conceptual depth
- perspective differences with labels
- confidence ratings on key claims
- citations

**Exit criteria:** Important complex areas are split into dedicated files.

### Phase 5 - Disagreement Documentation

**Entry criteria:** Dialectical analysis output exists or research contains significant disagreements.

When a topic has substantial debates, create `./docs/{topic_title}/disagreements.md` with:

1. **Disagreement inventory** -- list of contested claims
2. For each disagreement:
   - **Claim under dispute**
   - **Position A** (steelmanned) with best evidence
   - **Position B** (steelmanned) with best evidence
   - **Additional positions** if relevant
   - **What would resolve this** -- what evidence or events would settle the debate
   - **Who holds each position and why** -- interests and reasoning of each camp
3. **Meta-observations** -- patterns in what is disputed and why

**Exit criteria:** Disagreements are documented fairly with steelmanned positions.

### Phase 6 - Citation and Link Integrity

**Entry criteria:** Draft files exist.

1. Ensure claims reference original sources with direct links.
2. Preferred citation format:
   - Inline: `[Title - Author/Org, Date](URL)`
   - For extended source lists, use a table in `sources.md`
3. Add confidence indicators to major claims:
   - **[HIGH CONFIDENCE]** -- multiple A-tier sources agree
   - **[MEDIUM CONFIDENCE]** -- supported but with caveats or limited sources
   - **[LOW CONFIDENCE]** -- preliminary, contested, or poorly sourced
4. Validate internal links between intro and subtopic pages.
5. Add cross-references to related topics in `./docs/`.

**Exit criteria:** Documentation is source-traceable, confidence-rated, and navigable.

### Phase 7 - Topic Index Update

**Entry criteria:** Topic files are written.

Update `./docs/README.md` to include or refresh:

- Topic name with link to `intro.md`
- One-line description
- Maturity level (Seed / Growing / Mature / Needs Update)
- Last updated date

**Exit criteria:** Master topic index reflects current state.

### Phase 8 - Merge-Safe Finalization

**Entry criteria:** Content is complete and indexed.

Before saving final edits:

1. Re-check existing file content for accidental overwrites.
2. Preserve useful previous context unless superseded by better evidence.
3. If contradictory historical content exists, keep both and label the conflict.
4. Verify the quality checklist:
   - [ ] Topic folder is correctly placed
   - [ ] Intro covers core concepts and multiple perspectives
   - [ ] Complex subtopics are split into dedicated files
   - [ ] Disagreements are documented with steelmanned positions
   - [ ] Citations and links are present for important claims
   - [ ] Confidence ratings are assigned to major findings
   - [ ] Existing files were merged rather than blindly replaced
   - [ ] Cross-references to related topics are included
   - [ ] Topic index is updated

**Exit criteria:** Topic files are updated without losing valuable prior knowledge.

## Suggested Intro Skeleton

```markdown
# {Topic Title}

## Why this topic matters

## Core concepts

## Major perspectives

### [CONSENSUS] Mainstream view
### [CONTESTED] Key debate areas
### [MINORITY VIEW] Notable dissenting positions

## Key developments and timeline

## Open questions and uncertainties

## Strongest counterarguments to the dominant narrative

## Subtopics
- [Subtopic A](./subtopic-a.md)
- [Subtopic B](./subtopic-b.md)

## Related Topics
- [Related Topic](../related-topic/intro.md) -- brief description of connection

## Sources and citations
```

## Anti-Patterns

- Writing `intro.md` without reading existing topic files
- Dumping all detail into intro and skipping subtopic decomposition
- Presenting one-sided conclusions on contested topics
- Omitting links to original sources
- Treating all perspectives as equally valid regardless of evidence quality
- Forgetting to update the topic index
- Overwriting previous research without merge consideration
- Omitting confidence ratings, leaving readers to guess how solid a claim is

## Success Criteria

- [ ] Topic content is saved under `./docs/{topic_title}/`
- [ ] `intro.md` covers core concepts and multiple labeled perspectives
- [ ] Complex subtopics are split into dedicated files
- [ ] Disagreements are documented with steelmanned opposing positions
- [ ] Existing files were merged rather than blindly replaced
- [ ] Citations and links are present for important claims
- [ ] Confidence ratings are assigned to major findings
- [ ] Cross-references to related topics are included
- [ ] Topic index in `docs/README.md` is updated
