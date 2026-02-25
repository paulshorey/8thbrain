# Knowledge Base

Markdown-first knowledge base managed via Claude Code. Exhaustive research on any topic — factual, technical, reference, contested, or implementation-focused. Output adapts to the topic: one file for simple topics, multiple files for complex subtopics.

## Repository Structure

```text
.
├── CLAUDE.md              # Operating manual — routing, modes, cognitive mandates (AI)
├── AGENTS.md              # Cursor/Copilot agent orientation (AI)
├── .claude/
│   ├── ORCHESTRATOR.md    # Pipeline, combine procedure, subagent launch (AI)
│   ├── subagents/         # 3 parallel research agents — README + AGENT.md per agent
│   └── skills/            # dialectical-analysis, research-documentation — README + SKILL.md each
└── docs/
    ├── README.md          # Topic index (human + agent)
    └── {topic}/
```

**Note:** Files under `.claude/` serve both human orientation and AI agent instructions. For agents: `AGENT.md` and `SKILL.md` hold full procedural instructions; `README` files are indexes and should point agents to those files. See `.claude/README.md` for layout and file roles.

## Pipeline (Deep Research Mode)

```text
User Request → Routing (Deep Research vs Quick-Write)
    ↓
Scope Assessment (tier + slug) → PARALLEL SUBAGENTS (launch all 3, ignore failures)
    deeper-research | perplexity-deep-research | gemini-deep-research
    ↓
Combine bundles → dialectical-analysis (if warranted) → research-documentation → Commit
```

**Quick-Write Mode:** "add a note", "update [topic] with" — skips subagents, writes directly. See CLAUDE.md routing rules.

## Quick Start

1. `claude` (CLI installed, authenticated)
2. Optional MCPs: Perplexity (`PERPLEXITY_API_KEY`), Gemini (`GEMINI_API_KEY`)
3. See `docs/claude-subagents-setup/` for setup.

## Example Prompts

- **Deep research:** *Research [topic].* / *Find many examples of [politician] saying [X].* / *Develop an implementation plan for [data analysis with ML].*
- **Continue:** *Continue research on [topic].*
- **Quick note:** *Add a note to [topic] about [thing].*
- **Recall:** *Summarize what we know about [topic].*

## References

[Claude Sub-Agents](https://code.claude.com/docs/en/sub-agents) · [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) · [Gemini Deep Research MCP](https://pypi.org/project/gemini-deep-research-mcp/)
