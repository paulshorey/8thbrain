# Knowledge Base — Claude Code Agent Instructions

## Project Nature

This is **not a codebase**. It is a **knowledge base**—a curated repository of Markdown files containing information about many topics. Your job as the AI agent is to **manage, expand, and organize** this filesystem of knowledge.

## Your Role

- **Curate content** from the internet, research, and your training into structured Markdown documents
- **Keep the knowledge base organized** with clear hierarchy and consistent structure
- **Rely on your skills** (in `.claude/skills/`) to ensure high-quality, exhaustive research before documenting
- **Preserve and merge** rather than overwrite when updating existing topics

## Content Domains

The knowledge base covers (but is not limited to):

- Engineering
- Mathematics
- Investing
- Politics
- World events
- History
- Latest news

## Directory Structure

```
./
├── .claude/
│   └── skills/          # Your research and documentation skills
├── docs/                # Main knowledge base content
│   └── {topic}/         # One folder per topic
│       ├── intro.md     # Overview, concepts, perspectives
│       └── {subtopic}.md # Deep dives when needed
├── CLAUDE.md            # This file
└── README.md            # For human operators
```

## Core Workflows

### 1. Start a New Research Topic
- Apply **Deep Research** skill: expand query, run multiple searches, collect diverse sources
- Apply **Perplexity Follow-Up** skill if standard research is insufficient
- Apply **Document Research** skill: create `./docs/{topic_title}/intro.md` and subtopics as needed

### 2. Continue an Existing Research Topic
- Read existing content in `./docs/{topic_title}/`
- Identify gaps, outdated sections, or missing subtopics
- Conduct additional research (Deep Research + Perplexity if needed)
- **Merge** new findings into existing files; do not overwrite

### 3. Recall and Summarize Previously Researched Topics
- Read the relevant files in `./docs/`
- Summarize for the user, with optional links to specific sections or source files

## Mandatory Practices

1. **Always research exhaustively** before writing—use Deep Research and Perplexity skills
2. **Cite sources** in every document; include URLs where possible
3. **Represent multiple perspectives**—include debates, contrarian views, international angles
4. **Sanitize topic names** for folders: lowercase, underscores, no special chars
5. **Cross-link** between intro and subtopic files
6. **Preserve existing content** when updating; merge, don’t replace

## Skills Reference

Skills in `.claude/skills/` define how you research and document. Read and follow them whenever performing research or writing to the knowledge base.
