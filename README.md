# Knowledge Base

Markdown-first knowledge base managed by Claude Code agents.

## Source of Truth

Operational policy lives in `CLAUDE.md`. Other AI docs are role-specific helpers and should not redefine policy:

- `CLAUDE.md` - canonical rules, mode router, quality gates
- `.claude/ORCHESTRATOR.md` - Deep Research execution flow
- `.claude/subagents/*/AGENT.md` - leaf-agent behavior
- `.claude/skills/*/SKILL.md` - post-research transformation

If conflicts appear, follow `CLAUDE.md` and then reconcile downstream files.

## Repository Structure

```text
.
├── CLAUDE.md
├── AGENTS.md
├── .claude/
│   ├── ORCHESTRATOR.md
│   ├── subagents/
│   └── skills/
└── docs/
    ├── README.md
    └── {topic}/
```

## Mode Summary

| Mode | Use When | Default Behavior |
|------|----------|------------------|
| Recall | User asks to summarize existing local knowledge | Read `./docs/` first; refresh only if requested |
| Quick-Write | Small targeted update/edit/note | Edit topic files directly; skip subagents |
| Deep Research | New, broad, contested, or high-stakes topic | Run parallel subagents and synthesis pipeline |

## Deep Research Pipeline

```text
Scope (Quick/Standard/Deep)
  -> Launch 3 subagents in parallel
  -> Combine canonical research bundles
  -> Dialectical analysis (when disagreement is meaningful)
  -> Research documentation update
  -> Reflection in notes.md
  -> Commit
```

## Quick Start

1. Ensure Claude Code CLI is authenticated.
2. Optional providers:
   - Perplexity MCP (`PERPLEXITY_API_KEY`)
   - Gemini Deep Research MCP or API (`GEMINI_API_KEY`)
3. Topic outputs go under `./docs/{topic}/`.

## Example Prompts

- Deep research: `Research [topic] with all major perspectives.`
- Continue topic: `Continue research on [topic] and update docs.`
- Quick edit: `Add a note to [topic] about [thing].`
- Recall: `Summarize what we already know about [topic].`

## References

- [Claude Sub-Agents](https://code.claude.com/docs/en/sub-agents)
- [Perplexity MCP](https://github.com/perplexityai/modelcontextprotocol)
- [Gemini Deep Research MCP](https://pypi.org/project/gemini-deep-research-mcp/)
