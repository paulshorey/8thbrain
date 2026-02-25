# .claude Directory — Agent Instructions

**For AI agents:** This folder contains orchestration logic, subagent definitions, and skills. Use it to run the deep research workflow.

## File Roles

| File Type | Purpose | When to Read |
|-----------|---------|--------------|
| **ORCHESTRATOR.md** | Pipeline definition, combine procedure, when to run skills | Start of any deep research task |
| **AGENT.md** (in subagents/) | Full procedural instructions for each research subagent | When launching subagents |
| **SKILL.md** (in skills/) | Full procedural instructions for each skill | When running dialectical-analysis or research-documentation |
| **README** (this, subagents/, skills/) | Index and orientation — lists what exists, quick reference | For overview; use AGENT.md and SKILL.md for execution |

**Canonical instructions:** Agents should read `AGENT.md` and `SKILL.md` for step-by-step execution. README files are indexes that point to them — useful for orientation but not sufficient for running the workflow.

## Layout

```
.claude/
├── README.md           # This file — orientation
├── ORCHESTRATOR.md     # Pipeline, combine, subagent launch
├── subagents/
│   ├── README.md       # Subagent index
│   └── {name}/AGENT.md # Full instructions per subagent
└── skills/
    ├── README.md       # Skill index
    └── {name}/SKILL.md # Full instructions per skill
```

## Human Use

Humans can read these files to understand how the research workflow operates. The same files serve both human orientation and AI agent execution.
