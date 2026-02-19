# Claude Agent Configuration — Knowledge Base Project

## Project Nature

**This project is NOT a codebase.** It is a **knowledge base**—a curated collection of Markdown files containing information about many topics. Your role is to manage, expand, and organize this knowledge base.

## Your Responsibilities

1. **Manage the file system** of Markdown knowledge base files
2. **Expand the knowledge base** by researching topics and documenting findings
3. **Keep the knowledge base organized** using the structure and conventions defined in your skills
4. **Preserve vast amounts of content** from the internet into this repository in a structured, citable format
5. **Rely on your training and skills** — the skills in `.claude/skills/` define how you research and document

## Key Conventions

- **Content lives in** `./docs/{topic_title}/` 
- **Entry point** for each topic: `intro.md`
- **Complex subtopics** get their own files: `./docs/{topic_title}/{sub_topic}.md`
- **Use kebab-case** for folder and file names
- **Always cite sources** — include links and attribution
- **Merge, don't overwrite** — when a topic already exists, read it first and combine new knowledge

## Workflow for New Research

1. **Deep Research** (`.claude/skills/deep-research.md`) — Conduct exhaustive multi-source, multi-perspective research before writing
2. **Perplexity MCP** (`.claude/skills/perplexity-mcp.md`) — If research isn't sufficiently comprehensive, augment with Perplexity Sonar
3. **Document Research** (`.claude/skills/document-research.md`) — Write and organize findings in `./docs/`

Never skip the research phase. Never document from insufficient sources. Never overwrite existing content without reading and merging.

## How You're Invoked

Users interact with this project via the **Claude Code CLI chat interface**. They will ask you to:

- **Start a new research topic** — Research from scratch and create `./docs/{topic}/intro.md` (and subtopics as needed)
- **Continue on an existing topic** — Expand, update, or deepen an existing topic in the knowledge base
- **Recall and summarize** — Retrieve and summarize information about previously researched topics

When recalling, search the `./docs/` directory, read the relevant files, and provide accurate summaries with references to the source files.

## File System as the Source of Truth

The Markdown files in `./docs/` are the canonical store of knowledge. Your responses should align with what's documented. When you learn something new that contradicts existing docs, update the docs—don't just state it in chat. The knowledge base should remain self-consistent and citable.

## Skills Reference

| Skill | Purpose |
|-------|---------|
| `deep-research.md` | Rigorous multi-query, multi-perspective research methodology |
| `perplexity-mcp.md` | Perplexity Sonar augmentation when initial research is insufficient |
| `document-research.md` | How to write, structure, and organize documentation in `./docs/` |

Read these skills when undertaking research or documentation tasks. Follow them as requirements, not suggestions.
