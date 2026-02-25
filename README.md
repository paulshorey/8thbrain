# Knowledge Base

Markdown-first knowledge base managed via Claude Code. Deep, multi-perspective research on any topic.

## Repository Structure

```text
.
├── CLAUDE.md              # Claude Code operating manual (AI)
├── AGENTS.md              # Cursor/Copilot agent orientation (AI)
├── .claude/
│   ├── ORCHESTRATOR.md    # Subagent launch, bundle format, combine logic
│   ├── subagents/         # 3 parallel research agents
│   └── skills/            # dialectical-analysis, research-documentation
└── docs/
    ├── README.md          # Topic index
    └── {topic}/
        ├── intro.md       # Required — topic synthesis
        ├── {subtopic}.md  # When sections exceed ~500 words
        ├── disagreements.md
        ├── sources.md
        ├── reflection.md  # Self-reflection from research sessions
        └── research-bundles/  # Working files from subagents
```

## Operating Modes

| Mode | Trigger | What Happens |
|------|---------|-------------|
| **Deep Research** | "research [topic]", "full analysis" | Scope assessment → parallel subagents → combine → dialectical analysis → documentation → commit |
| **Recall** | "what do we know about [topic]", "summarize" | Read existing docs, synthesize response, suggest refresh if stale |
| **Quick-Write** | "add a note", "update [topic] with" | Direct edit, skip subagents |

## Pipeline (Deep Research Mode)

```text
User Request → Scope Assessment (Quick/Standard/Deep)
    ↓
PARALLEL SUBAGENTS (launch per tier; ignore failures)
    Quick: deeper-research only
    Standard/Deep: deeper-research | perplexity-deep-research | gemini-deep-research
    ↓
Combine bundles (standardized format)
    ↓
Dialectical analysis (if topic has real disagreement)
    ↓
Research documentation → Reflection → Commit
```

If all subagents fail, the orchestrator falls back to direct WebSearch in the main context.

## Quick Start

1. `claude` (CLI installed, authenticated)
2. Optional MCPs: Perplexity (`PERPLEXITY_API_KEY`), Gemini (`GEMINI_API_KEY`)
3. See `docs/claude-subagents-setup/` for setup.

## Example Prompts

- **Deep research:** *Research [topic]. Perform deep research with multiple perspectives.*
- **Continue:** *Continue research on [topic].*
- **Recall:** *What do we know about [topic]?*
- **Quick note:** *Add a note to [topic] about [thing].*

## References

[Claude Sub-Agents](https://code.claude.com/docs/en/sub-agents) · [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol) · [Gemini Deep Research MCP](https://pypi.org/project/gemini-deep-research-mcp/)
