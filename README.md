# Knowledge Base

A Markdown-first knowledge base managed through **Claude Code**. Designed for continuous, deep, multi-perspective research across engineering, mathematics, investing, politics, world events, history, and current affairs.

## What Makes This Different

This system fights the most common failure mode of AI-assisted research: **confirmation bias and premature closure.** It enforces:

- **Adversarial search** — deliberately hunting for contradictions and opposing evidence
- **Steelmanning** — presenting every viewpoint in its strongest form
- **Assumption extraction** — making hidden premises visible and testable
- **Perspective labeling** — marking claims as `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
- **Confidence ratings** — explicit High / Medium / Low on major claims
- **Dialectical analysis** — a dedicated skill for systematic contradiction-finding
- **Self-reflection** — documenting surprises, weaknesses, and future research directions

## Repository Structure

```text
.
├── CLAUDE.md                           # Operating manual (pipeline, standards, mandates)
├── AGENTS.md                           # Agent identity and cognitive stance
├── .claude/skills/
│   ├── deep-research/SKILL.md          # Multi-perspective source harvesting
│   ├── dialectical-analysis/SKILL.md   # Contradiction and alternative paradigm discovery
│   ├── perplexity-sonar-followup/SKILL.md  # Gap-filling via Perplexity MCP
│   └── research-documentation/SKILL.md # Structured writing with merge-safe updates
└── docs/
    ├── README.md                       # Master topic index
    └── {topic}/
        ├── intro.md
        ├── {subtopic}.md
        ├── disagreements.md
        └── sources.md
```

## Research Pipeline

```text
User Request
    │
    ▼
┌──────────────────┐
│  Scope Assessment │  Quick / Standard / Deep tier
└────────┬─────────┘
         ▼
┌──────────────────┐
│  deep-research    │  14-20+ queries, 4+ source classes, saturation gates
└────────┬─────────┘
         ▼
┌──────────────────────┐
│ dialectical-analysis  │  Assumption extraction, inversion search, paradigm discovery
└────────┬─────────────┘
         ▼
┌────────────────────────────┐
│ perplexity-sonar-followup   │  (Only when gaps remain)
└────────┬───────────────────┘
         ▼
┌────────────────────────┐
│ research-documentation  │  Structured Markdown + self-reflection
└────────────────────────┘
```

## Quick Start

### 1. Prerequisites

- Claude Code CLI installed and authenticated
- Node.js + npm (for MCP server)
- (Recommended) Perplexity API key

### 2. Open Claude Code

```bash
claude
```

### 3. (Recommended) Configure Perplexity MCP

Get an API key from [Perplexity API settings](https://www.perplexity.ai/account/api/group), then:

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -yq @perplexity-ai/mcp-server
```

Verify:

```bash
claude mcp list
```

## How to Use

### Start a new topic

> Research [topic]. Perform deep research with multiple perspectives and dialectical analysis.

### Continue an existing topic

> Continue research on [topic]. Merge new findings into existing files.

### Challenge existing research

> Run dialectical analysis on [topic]. Find contradictions, hidden assumptions, and alternative frameworks.

### Recall previous work

> Summarize what we know about [topic] from this repository.

## Design References

- [Trail of Bits skills marketplace](https://github.com/trailofbits/skills)
- [Community Claude Code skills](https://github.com/daymade/claude-code-skills)
- [Perplexity MCP server](https://github.com/perplexityai/modelcontextprotocol)
