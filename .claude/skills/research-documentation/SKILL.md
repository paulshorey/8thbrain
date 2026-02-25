---
name: research-documentation
description: Convert combined research into adaptive, source-backed Markdown in ./docs with merge-safe updates.
allowed-tools:
  - Read
  - Write
  - Glob
  - Grep
  - TodoWrite
---

# Research Documentation

Goal: turn combined research into clear, source-backed Markdown that can be maintained over time.

## Run When

- Subagent outputs are combined (and optional dialectical analysis is complete when needed).
- User requested creation, continuation, or expansion of a research topic.

## Skip When

- Research context is too incomplete to support source-backed writing.

## Core Principles

1. Merge-first: read existing docs before editing.
2. Adaptive structure: one file for simple topics, multiple files for complex topics.
3. Evidence traceability: major claims should map to sources.
4. Fit the topic type: factual, technical, or contested.

## Procedure

### 1) Resolve Topic Path and Existing Content

- Check `docs/README.md` for existing or similar topics.
- If topic exists, read relevant files and merge rather than overwrite.
- Avoid creating near-duplicate topics.

### 2) Choose Documentation Shape

Select based on complexity:

- **Simple topic** -> one file (for example `./docs/{topic}.md`)
- **Complex topic** -> folder with multiple files (for example `./docs/{topic}/intro.md` plus subtopics)

No mandatory fixed template.

### 3) Draft Content for Topic Type

Prioritize according to topic type:

- **Factual/reference:** definitions, key facts, timelines, examples.
- **Technical:** mechanisms, architecture/options, implementation steps, constraints, code examples where useful.
- **Contested:** strongest competing views, supporting evidence, and what would resolve disagreements.

### 4) Apply Source and Confidence Standards

- Cite consequential claims.
- Prefer primary/high-quality sources where available.
- Mark confidence on major findings when useful:
  - `[HIGH CONFIDENCE]`
  - `[MEDIUM CONFIDENCE]`
  - `[LOW CONFIDENCE]`

Perspective labels are optional; use only when clarifying disagreement.

### 5) Finalize and Link

- Add internal links when the topic has multiple files.
- Ensure claims remain traceable to sources.
- Preserve useful prior context unless clearly superseded.

### 6) Update Topic Index

Update `docs/README.md` when creating a new topic or significantly changing scope/structure.

## Anti-Patterns

- writing without reading existing topic files
- forcing multi-perspective debate onto non-contested topics
- omitting sources for consequential claims
- rigidly enforcing one template regardless of topic needs
