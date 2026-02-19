---
name: research-documentation
description: Convert research context into organized Markdown knowledge-base files under ./docs/{topic_title}/, including intro.md, subtopic files, source-backed citations, and merges with existing topic content.
allowed-tools:
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - TodoRead
  - TodoWrite
---

# Research Documentation

Transform validated research into maintainable, citation-rich Markdown files in the local knowledge base.

## Essential Principles

1. Documentation is cumulative: read and merge existing topic files before writing.
2. Every substantial claim should be source-attributed.
3. `intro.md` explains the full topic landscape; deeper files handle complex subtopics.
4. Structure should optimize long-term retrieval and updates, not one-time output.

## When to Use

- After `deep-research` (and optionally `perplexity-sonar-followup`) is complete.
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
   - keep
   - update
   - extend
   - deprecate (only with explicit rationale)

**Exit criteria:** Existing context is integrated into writing plan.

### Phase 3 - Intro Authoring

**Entry criteria:** Merge map and source set exist.

Write or update `./docs/{topic_title}/intro.md` with:

1. Topic overview
2. Core concepts
3. Important competing perspectives
4. Current state and unresolved questions
5. Suggested subtopic index
6. References / citations

The intro should be understandable standalone and should link to subtopic files.

**Exit criteria:** `intro.md` is comprehensive and cross-linked.

### Phase 4 - Subtopic Decomposition

**Entry criteria:** Intro draft exists.

Create subtopic files when a section is:

- complex enough to exceed concise intro coverage
- high-impact for understanding or decision-making
- likely to be updated independently

For each complex subtopic, create:

```text
./docs/{topic_title}/{sub_topic}.md
```

Include:

- focused explanation
- technical or conceptual depth
- perspective differences if relevant
- citations

**Exit criteria:** Important complex areas are split into dedicated files.

### Phase 5 - Citation and Link Integrity

**Entry criteria:** Draft files exist.

1. Ensure claims reference original sources with direct links.
2. Prefer transparent citation format:
   - inline link with title and publisher/date context
3. Validate internal links between intro and subtopic pages.

**Exit criteria:** Documentation is source-traceable and navigable.

### Phase 6 - Merge-Safe Finalization

**Entry criteria:** Content is complete.

Before saving final edits:

1. Re-check existing file content for accidental overwrites.
2. Preserve useful previous context unless superseded by better evidence.
3. If contradictory historical content exists, keep both and label the conflict.

**Exit criteria:** Topic files are updated without losing valuable prior knowledge.

## Suggested Intro Skeleton

```markdown
# {Topic Title}

## Why this topic matters
## Core concepts
## Major schools of thought / perspectives
## Key developments and timeline notes
## Open questions and uncertainties
## Subtopics
- [Subtopic A](./subtopic-a.md)
- [Subtopic B](./subtopic-b.md)

## Sources and citations
```

## Anti-Patterns

- Writing `intro.md` without reading existing topic files
- Dumping all detail into intro and skipping subtopic decomposition
- Presenting one-sided conclusions on contested topics
- Omitting links to original sources

## Success Criteria

- [ ] Topic content is saved under `./docs/{topic_title}/`
- [ ] `intro.md` covers core concepts and multiple perspectives
- [ ] Complex subtopics are split into dedicated files
- [ ] Existing files were merged rather than blindly replaced
- [ ] Citations and links are present for important claims
