# Subagent Best Practices

Best practices and latest techniques for organizing parallel AI agents in Claude Code and similar contexts. Sourced from official docs, community guides, and this repository's design.

## Core Principles

### 1. Parallel Over Sequential When Possible

When tasks are **independent** (no shared state, no file conflicts), run them **in parallel**. Benefits:

- Faster total time — three 5-minute tasks finish in ~5 minutes, not 15
- Better resource use — multiple contexts can work simultaneously
- Graceful degradation — if one fails, others still complete

**When to use parallel dispatch:**

- 3+ unrelated research tasks (e.g., WebSearch, Perplexity, Gemini)
- No shared mutable state
- Clear output boundaries (each writes to a distinct file or returns a bundle)

**When to use sequential:**

- Tasks depend on each other
- Same files are read/written
- One task's output is input to the next

### 2. Context Isolation

Subagents run in **separate context windows**. Each has:

- Its own tool access (can be restricted)
- Its own system prompt / instructions
- No direct access to the main conversation

The main orchestrator:

- Launches subagents with the task and any needed context
- Waits for or collects their outputs
- Combines and processes in the primary context

### 3. Failure Tolerance

Design for partial success:

- **Ignore failures** — If a subagent times out or errors, proceed with the rest
- **Don't retry endlessly** — One retry maximum for transient errors
- **Document gaps** — Note which subagent failed and what might be missing

### 4. Model Selection

Use **Claude Sonnet** for subagents when available. It balances cost, speed, and capability. Reserve faster/cheaper models for simple tasks and more capable models for complex orchestration.

## .claude Folder Organization

### Layout

```text
.claude/
  ORCHESTRATOR.md       # How to launch subagents, combine output
  subagents/            # Parallel research agents
    deeper-research/AGENT.md
    perplexity-deep-research/AGENT.md
    gemini-deep-research/AGENT.md
    README.md
  skills/               # Orchestrator-only skills (run after subagents)
    dialectical-analysis/SKILL.md
    research-documentation/SKILL.md
    README.md
```

### Subagent File Format

Each subagent lives in `.claude/subagents/{name}/AGENT.md` with:

- **YAML frontmatter**: `name`, `description`, `model`, `timeout`, `allowed-tools`
- **Body**: Full system prompt / instructions for the subagent

Example:

```yaml
---
name: deeper-research
description: Perform exhaustive multi-perspective research with term variations.
model: claude-sonnet
timeout: 600
allowed-tools:
  - WebSearch
  - Read
  - Glob
  - Grep
  - TodoWrite
---

# Deeper Research Subagent
...instructions...
```

### Skill vs Subagent

| Concept | Purpose | Runs In | When |
|---------|---------|---------|------|
| **Subagent** | Focused research task (WebSearch, Perplexity, Gemini) | Parallel, isolated context | First phase of Deep Research |
| **Skill** | Orchestrator workflow (dialectical-analysis, research-documentation) | Main context | After subagent outputs combined |

Subagents gather evidence. Skills process and document it.

## Orchestration Patterns

### Pattern 1: Fan-Out, Fan-In

```
Orchestrator
    │
    ├──→ Subagent A ──┐
    ├──→ Subagent B ──┼──→ Combine ──→ Skills ──→ Output
    └──→ Subagent C ──┘
```

### Pattern 2: Background Dispatch

For long-running research that doesn't block the user:

- Launch subagents with `background=True` or equivalent
- User can continue other work
- Poll or subscribe for completion
- Process when ready

### Pattern 3: Conditional Subagents

Only launch subagents that are configured:

- Always: deeper-research (WebSearch)
- If Perplexity MCP available: perplexity-deep-research
- If Gemini MCP available: gemini-deep-research

## Tool Restrictions

Restrict subagents to only the tools they need:

- **deeper-research**: WebSearch, Read, Glob, Grep, TodoWrite (no Write to docs — orchestrator does that)
- **perplexity-deep-research**: Perplexity MCP tools, Read, Write (for bundle), TodoWrite
- **gemini-deep-research**: Run, Read, Write, Glob, TodoWrite

This reduces accidental overwrites and keeps each agent focused.

## Sources

- [Claude Code Sub-Agents - Official Docs](https://code.claude.com/docs/en/sub-agents)
- [Subagents in the SDK](https://docs.anthropic.com/en/docs/claude-code/sdk/subagents)
- [Claude Code Sub-Agents: Parallel vs Sequential](https://claudefa.st/blog/guide/agents/sub-agent-best-practices)
- [Cursor Subagents](https://cursor.com/docs/context/subagents)
