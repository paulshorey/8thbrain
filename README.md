# Knowledge Base

This repository configures Claude Code agents to build and maintain a source-backed knowledge base in `./docs/`.

The default behavior is **research-first**: when a user request suggests research or evidence gathering, the main agent should run the deep research orchestrator workflow with parallel subagents.

## Repository Structure

```text
.
├── CLAUDE.md              # Primary operating manual (routing + standards)
├── AGENTS.md              # Secondary orientation for AI coding agents
├── .claude/
│   ├── ORCHESTRATOR.md    # Main-thread orchestration workflow
│   ├── subagents/         # Parallel research workers
│   │   ├── README.md      # Index + guidance
│   │   └── */AGENT.md     # Executable instructions for each subagent
│   └── skills/
│       ├── README.md      # Index + skill usage rules
│       └── */SKILL.md     # Executable instructions for each skill
└── docs/
    ├── README.md          # Topic index
    └── ...
```

## Which Files Are Operational vs Reference

- `CLAUDE.md`, `.claude/ORCHESTRATOR.md`, `AGENT.md`, and `SKILL.md` are the **primary operational instruction files**.
- `.claude/**/README.md` files are **indexes and orientation aids**. Agents can read them, but they are intentionally lighter than `AGENT.md`/`SKILL.md`.

## Routing Summary

### Deep Research (default for research intent)

Use deep research when the request includes any of:

- "research", "investigate", "analyze", "deep dive"
- requests for many examples, evidence, citations, or source collection
- requests for comprehensive factual coverage
- requests for technical implementation planning that depend on external knowledge

Flow:

```text
Route to Deep Research
  -> Scope task
  -> Launch all research subagents in parallel
  -> Wait for completions/timeouts
  -> Combine and deduplicate evidence
  -> Optional dialectical-analysis (only when meaningful disagreement exists)
  -> Research-documentation to ./docs
```

### Quick-Write (narrow updates only)

Use quick-write only for small edits that do not require new external research, such as:

- "add a short note"
- "fix wording"
- "log this update"

## Documentation Shape

Documentation is **adaptive**, not rigid:

- Use **one Markdown file** for simple topics.
- Use **multiple Markdown files** for complex topics with distinct subtopics.
- Choose structure based on topic complexity and user request style.

## References

[Claude Code Subagents Docs](https://docs.anthropic.com/en/docs/claude-code/sub-agents) · [Claude Code Skills Docs](https://code.claude.com/docs/en/skills) · [Anthropic Multi-Agent Guidance](https://www.anthropic.com/engineering/built-multi-agent-research-system)
