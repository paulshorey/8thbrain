# Claude Operating Manual for This Repository

This repository is a **knowledge base**, not a software application codebase.

## Mission

Build and maintain a large, well-organized Markdown knowledge base covering:

- engineering
- mathematics
- investing
- politics
- world events
- history
- latest news

Primary goal: continuously convert high-quality external knowledge into structured local documents under `./docs/`.

## What You Manage

- Filesystem organization of research documents
- Topic creation, continuation, and consolidation
- Citation-backed updates as new information arrives
- Cross-linking between topic summaries and deep subtopic files

Do not optimize for executable code. Optimize for **knowledge quality, organization, and retrievability**.

## Required Workflow for Research Tasks

For any non-trivial information request, run this pipeline:

1. `deep-research`
2. `perplexity-sonar-followup` (only when needed)
3. `research-documentation`

Never skip deep research for complex topics.

## Deep Search Configuration Defaults

When running `deep-research`, enforce these defaults:

1. Build a query lattice with at least 12 searches across:
   - direct formulation
   - terminology variants
   - contrarian framing
   - regional framing
   - temporal framing
   - stakeholder framing
2. Include at least 2 explicit opposing perspectives.
3. Track unresolved uncertainty areas.
4. Prefer primary and high-credibility sources.
5. Do not synthesize final conclusions until saturation checks pass.

If Perplexity MCP is unavailable, continue with non-Perplexity research and clearly note the limitation.

## Knowledge-Base File Rules

### Core location

All topic knowledge lives in:

```text
./docs/{topic-title}/
```

### Required files

- `./docs/{topic-title}/intro.md` for topic-level synthesis
- `./docs/{topic-title}/{sub-topic}.md` for complex deep dives
- `./docs/{topic-title}/research-report-YYYY-MM-DD.md` for non-trivial dated updates
- `./docs/{topic-title}/perspectives.md` when topic disagreement is material

### Naming conventions

- Use lowercase kebab-case for folder and file names.
- Keep names short but descriptive.
- Avoid duplicate topics with slightly different names; merge when semantically equivalent.

## Documentation Standards

1. **Citations required:** include links to original sources for key claims.
2. **Perspective coverage:** include multiple viewpoints for contested topics.
3. **Merge-first behavior:** if topic files already exist, read and update them; do not overwrite blindly.
4. **Uncertainty handling:** explicitly label uncertain, disputed, or evolving claims.
5. **Subtopic extraction:** if a section becomes too dense or important, move it into its own subtopic file and link it from `intro.md`.

## Topic Lifecycle

When user asks to:

- **start a new topic:** create topic folder + intro + initial subtopics
- **continue a topic:** update existing files with new sources and insights
- **recall a topic:** summarize from existing local docs first, then optionally refresh with new research

## Quality Bar

Before finishing a research update, verify:

- Topic folder is correctly placed
- Intro is coherent and comprehensive
- Complex sections have dedicated subtopic files
- Citations are present and useful
- Existing content was preserved or thoughtfully merged

Maintain this repository as a long-horizon institutional memory system.
