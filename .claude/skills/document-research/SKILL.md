---
name: document-research
description: |
  Transform collected research into well-organized Markdown documentation within the knowledge base file system. This skill should be used after the deep-research and optionally perplexity-research skills have produced sufficient source material, and the agent is ready to write, organize, or update knowledge base documents in the ./docs/ directory. It governs file naming, folder structure, content organization, citation formatting, and the merge-not-replace policy for existing content.
---

# Document Research

Convert research findings into structured, richly cited Markdown files within the knowledge base.

## When to Activate

Use this skill when:

- The deep-research sufficiency check has passed (all criteria met)
- The user asks to document, write up, or save research findings
- New information needs to be added to an existing topic in the knowledge base
- The user asks to organize or restructure existing knowledge base content

## File System Convention

All knowledge base documents live under `./docs/`. The structure follows a strict convention:

```
docs/
├── {topic_title}/
│   ├── intro.md              # Required: topic overview and core concepts
│   ├── {sub_topic_1}.md      # Optional: deep dive on a major subtopic
│   ├── {sub_topic_2}.md      # Optional: deep dive on another subtopic
│   └── sources.md            # Required: consolidated source list with metadata
├── {another_topic}/
│   ├── intro.md
│   └── sources.md
└── ...
```

### Naming Rules

- **Topic folders**: lowercase, hyphens for spaces, descriptive but concise
  - `quantum-computing/`, `climate-change-mitigation/`, `large-language-models/`
- **Subtopic files**: lowercase, hyphens for spaces, named after the subtopic
  - `error-correction.md`, `carbon-capture.md`, `transformer-architecture.md`
- **Reserved filenames**: `intro.md` (topic overview), `sources.md` (bibliography)

### When to Create Subtopic Files

A subtopic earns its own file when **any** of the following are true:

- The subtopic has 3+ Tier A or B sources dedicated to it
- Writing about it would add more than ~500 words to `intro.md`
- It represents a distinct discipline, technique, or controversy
- It has its own history, key figures, or dedicated community
- The user has specifically asked for depth on that subtopic

If a subtopic does not meet these criteria, cover it as a section within `intro.md`.

## Content Structure for `intro.md`

Every `intro.md` must follow this template:

```markdown
# {Topic Title}

> **Last updated**: {YYYY-MM-DD}
> **Sources**: {count} sources across {tier breakdown}

## Overview

{2-4 paragraph executive summary of the topic. What it is, why it matters,
and the current state of knowledge. Written for an intelligent reader who
may be encountering the topic for the first time.}

## Core Concepts

### {Concept 1}

{Explanation with citations. Use inline links: [Source Title](URL).}

### {Concept 2}

{Explanation with citations.}

## Key Perspectives

### {Perspective/Angle 1}

{Present this viewpoint fairly, with citations to its proponents.}

### {Perspective/Angle 2}

{Present the contrasting viewpoint, with citations.}

## Current State and Recent Developments

{What has happened recently. Dated facts with citations.}

## Open Questions and Controversies

{What remains unresolved or contested. Be explicit about uncertainty.}

## Subtopics

{If subtopic files exist, link to them here:}

- [{Subtopic 1 Title}](./{sub_topic_1}.md) — {one-line description}
- [{Subtopic 2 Title}](./{sub_topic_2}.md) — {one-line description}

## References

See [sources.md](./sources.md) for the complete bibliography.

{Optionally list the 5-10 most important sources inline here as well.}
```

## Content Structure for Subtopic Files

```markdown
# {Subtopic Title}

> **Parent topic**: [{Topic Title}](./intro.md)
> **Last updated**: {YYYY-MM-DD}

## Overview

{Brief context connecting this subtopic to the parent topic.}

## {Main Sections}

{Detailed coverage. Every factual claim should have an inline citation.}

## References

See [sources.md](./sources.md) for the complete bibliography.
```

## Content Structure for `sources.md`

```markdown
# Sources: {Topic Title}

> **Last updated**: {YYYY-MM-DD}
> **Total sources**: {count}

## Tier A — Primary Sources

1. **{Title}** — {Author(s)}, {Publication}, {Date}
   {URL}
   Quality: Tier A | Used in: {list of .md files referencing this}

2. ...

## Tier B — Authoritative Secondary

1. ...

## Tier C — Supplementary

1. ...
```

## The Merge-Not-Replace Policy

**This is a cardinal rule of the knowledge base.**

When writing about a topic that already has files in `./docs/`:

1. **Read all existing files** in the topic folder first
2. **Never delete or overwrite** existing content without explicit justification
3. **Merge new information** into the existing structure:
   - Add new sections for newly discovered subtopics
   - Append new sources to `sources.md`
   - Update the "Last updated" date
   - If new information contradicts existing content, note both with citations and flag the discrepancy
4. **Expand, don't compress**: If existing content is sparse, add depth. If it's already detailed, add nuance or new perspectives.
5. **Preserve citations**: Never remove an existing citation unless the source is confirmed dead (404) and no archive exists.

## Writing Style Guidelines

- **Factual, encyclopedic tone** — neutral, informative, free of marketing language
- **Dense with information** — every paragraph should convey substantive content
- **Citation-heavy** — inline links `[Title](URL)` for specific claims; general knowledge needs no citation
- **Structured with clear headings** — readers should be able to scan and find what they need
- **No filler** — avoid "In today's world..." or "It's important to note that..." constructions
- **Accessible but not dumbed down** — explain jargon on first use, then use it freely
- **Explicit about uncertainty** — "As of {date}, no consensus exists on..." is better than omitting the topic

## Quality Checklist Before Committing

Before saving any documentation file:

- [ ] Every factual claim has an inline citation or is marked as needing one
- [ ] `sources.md` is updated with all new sources
- [ ] The "Last updated" date is current
- [ ] If the topic folder already existed, existing content was read and merged
- [ ] Subtopic files are linked from `intro.md`
- [ ] File and folder names follow the naming convention
- [ ] No orphan files (every `.md` is reachable from `intro.md`)

See [references/writing_guide.md](references/writing_guide.md) for extended style guidance.
See [references/merge_workflow.md](references/merge_workflow.md) for detailed merge procedures.

## Anti-Patterns

- Writing documentation before the research sufficiency check passes
- Creating a topic folder with only `intro.md` and no `sources.md`
- Overwriting existing content instead of merging
- Using vague folder names like `misc/` or `other/`
- Dumping raw search results into a file without synthesis
- Omitting citations because "it's common knowledge"
- Creating deeply nested folder hierarchies (keep it to `docs/{topic}/{file}.md`)
