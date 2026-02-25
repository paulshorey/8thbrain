# Knowledge Base

Markdown-first knowledge base managed via Claude Code. Deep, multi-perspective research on any topic.

## Repository Structure

```text
.
├── CLAUDE.md              # Claude Code operating manual (AI)
├── AGENTS.md              # Cursor/Copilot agent orientation (AI)
├── .claude/
│   ├── ORCHESTRATOR.md    # Subagent launch and combine (AI)
│   ├── subagents/         # 3 parallel research agents
│   └── skills/            # dialectical-analysis, research-documentation
└── docs/
    ├── README.md          # Topic index
    └── {topic}/
```

## Pipeline (Deep Research Mode)

```text
User Request → Scope Assessment (Quick/Standard/Deep)
    ↓
PARALLEL SUBAGENTS (launch all 3, ignore failures)
    deeper-research | perplexity-deep-research | gemini-deep-research
    ↓
Combine bundles → dialectical-analysis (if warranted) → research-documentation → Commit
```

**Quick-Write Mode:** "add a note", "update [topic] with" — skips subagents, writes directly.

## Quick Start

1. `claude` (CLI installed, authenticated)
2. Optional MCPs: Perplexity (`PERPLEXITY_API_KEY`), Gemini (`GEMINI_API_KEY`)
3. See `docs/claude-subagents-setup/` for setup.

## Example Prompts

- **Deep research:** *Research [topic]. Perform deep research with multiple perspectives.*
- **Continue:** *Continue research on [topic].*
- **Quick note:** *Add a note to [topic] about [thing].*
- **Recall:** *Summarize what we know about [topic].*

## References

[Claude Sub-Agents](https://code.claude.com/docs/en/sub-agents) · [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) · [Gemini Deep Research MCP](https://pypi.org/project/gemini-deep-research-mcp/)
