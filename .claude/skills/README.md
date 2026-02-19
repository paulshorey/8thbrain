# Skills Index

This directory contains skills that extend the Claude Code agent's capabilities for managing this knowledge base.

## Active Skills

| Skill | File | Purpose |
|-------|------|---------|
| Deep Research | `deep_research.md` | Exhaustive, multi-perspective research protocol before any information lookup |
| Perplexity Follow-Up | `perplexity_followup.md` | Supplemental research via Perplexity Sonar when standard search is insufficient |
| Document Research | `document_research.md` | Structured documentation of research into `./docs/` Markdown files |

## Skill Execution Order

For any new or expanded research topic:

1. **Deep Research** → Run query expansion, multi-query search, collect diverse sources
2. **Perplexity Follow-Up** → If depth is lacking, supplement with Perplexity MCP
3. **Document Research** → Write/update `./docs/{topic}/intro.md` and subtopic files
