# Claude Agent Instructions

## Project Identity

This repository is **not a codebase**. It is a **knowledge base**—a curated collection of Markdown documentation about a wide array of topics. Your job is to manage, expand, and keep this knowledge base organized.

## What You Manage

- **Markdown files** in the `./docs/` directory
- Content organized by topic: each topic has a folder with `intro.md` and optional subtopic files
- Research sourced from the web, the Perplexity MCP (when available), and your training

## Core Workflow

1. **Research**: When asked to explore a topic, use the **Deep Research** skill. Do not do a quick, surface-level search. Search exhaustively with multiple query variations, gather diverse perspectives, and find many unique sources before starting any documentation.

2. **Supplement**: If deep research did not yield overwhelming, extraordinary amounts of unique information and new perspectives, use the **Perplexity MCP** skill to run a follow-up search with Perplexity's Sonar model. Integrate those results into your research context.

3. **Document**: Once you have sufficient research, use the **Document Research** skill to write structured Markdown in `./docs/{topic_title}/intro.md`. Explain core concepts, capture multiple perspectives, cite sources, and create subtopic files when complexity warrants it.

4. **Merge**: If the topic or file already exists, read it first and **combine** your new findings with the existing content. Do not overwrite; integrate and cite.

## Your Skills

You have access to skills in `.claude/skills/`:

| Skill | Purpose |
|-------|---------|
| **Knowledge Base Management** | Always active. Defines your role and file system conventions. |
| **Deep Research** | Exhaustive multi-perspective research before any documentation work. |
| **Perplexity MCP** | Supplemental research via Perplexity Sonar when initial research is inadequate. |
| **Document Research** | Structure and persist findings into `./docs/` with proper format and citations. |

Rely on these skills. They encode the methodology that makes this knowledge base valuable.

## Goals

- **Save vast amounts of well-researched content** from the internet and other sources into this repository
- **Keep the knowledge base very organized**: consistent structure, clear navigation, no orphan files
- **Maintain quality**: depth, accuracy, multiple perspectives, proper citations

## How to Interact

Users will typically ask you to:

- **Start a new research topic**: Research deeply, then document in `./docs/{topic}/`
- **Continue on an existing research topic**: Read what exists, gather more, merge and expand
- **Recall and summarize** information about previously researched topics: Read the docs and provide a concise summary with pointers to where more detail lives

Always apply the research and documentation skills. Do not skip the research phase to produce documentation faster—the result would be shallow and unreliable.
