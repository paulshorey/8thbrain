# Claude Code Knowledge Base

This repository is a Markdown-first knowledge base managed through the **Claude Code CLI chat interface**.

It is designed for continuous research and documentation across:

- engineering
- mathematics
- investing
- politics
- world events
- history
- latest news

The agent workflow is implemented through custom Claude skills in `.claude/skills/`.

## Repository Structure

```text
.
├── CLAUDE.md                  # Operating instructions for Claude Code agent
├── AGENTS.md                  # Agent identity, cognitive mandates, and defaults
├── .claude/
│   └── skills/
│       ├── deep-research/
│       │   └── SKILL.md       # Exhaustive multi-perspective source harvesting
│       ├── dialectical-analysis/
│       │   └── SKILL.md       # Contradiction finding and alternative paradigms
│       ├── perplexity-sonar-followup/
│       │   └── SKILL.md       # Gap-filling with Perplexity MCP
│       └── research-documentation/
│           └── SKILL.md       # Structured writing with perspective labels
└── docs/
    ├── README.md              # Master topic index with maturity tracking
    └── {topic}/               # Generated topic knowledge folders
        ├── intro.md
        ├── {subtopic}.md
        ├── disagreements.md
        └── sources.md
```

## What Makes This Different

This knowledge base is designed to fight the most common failure mode of AI-assisted research: **confirmation bias and premature closure.**

The system enforces:

1. **Adversarial search** -- deliberately hunting for contradictions and opposing evidence
2. **Steelmanning** -- presenting every viewpoint in its strongest form
3. **Assumption extraction** -- making hidden premises visible and testable
4. **Perspective labeling** -- marking claims as `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
5. **Confidence ratings** -- explicit `[HIGH]` / `[MEDIUM]` / `[LOW]` confidence on major claims
6. **Dialectical analysis** -- a dedicated skill for systematic contradiction-finding
7. **Cross-referencing** -- bidirectional links between related topics
8. **Maturity tracking** -- each topic carries a Seed / Growing / Mature / Needs Update indicator

## Research Pipeline

```text
User Request
    │
    ▼
┌─────────────────────┐
│   deep-research      │  16+ queries across 12 framing types
│                     │  20+ unique sources from 4+ classes
│                     │  Mandatory saturation and exhaustiveness gates
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│ dialectical-analysis │  Assumption extraction and inversion search
│                     │  Alternative paradigm discovery
│                     │  Stakeholder disagreement mapping
│                     │  Contradiction synthesis
└─────────┬───────────┘
          │
          ▼
┌─────────────────────────────┐
│ perplexity-sonar-followup    │  (Only when gaps remain)
│                             │  Targeted gap-filling via Perplexity MCP
│                             │  Merge with existing context
└─────────┬───────────────────┘
          │
          ▼
┌─────────────────────────┐
│ research-documentation   │  Structured Markdown with perspective labels
│                         │  Confidence ratings and steelmanned disagreements
│                         │  Cross-references and topic index updates
└─────────────────────────┘
```

## Quick Start (Human Operator)

### 1) Prerequisites

- Claude Code CLI installed and authenticated
- Node.js + npm available (for MCP server package execution)
- (Optional but recommended) Perplexity API key for deep follow-up research

### 2) Open Claude Code in this repo

From this repository root:

```bash
claude
```

### 3) (Recommended) Configure Perplexity MCP server

Get an API key from Perplexity API settings:

- <https://www.perplexity.ai/account/api/group>

Then add the MCP server:

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -yq @perplexity-ai/mcp-server
```

Verify:

```bash
claude mcp list
```

Expected outcome: a `perplexity` MCP server is listed and available.

## How to Interact with the Agent

Use plain language in Claude Code chat. Suggested commands:

### Start a new research topic

```text
Start a new research topic on <topic>. Perform deep research with multiple perspectives
and dialectical analysis, then create docs in ./docs/<topic>/.
```

### Continue an existing research topic

```text
Continue research on <topic>. Merge new findings into existing files and add new subtopic
files when needed.
```

### Challenge existing research

```text
Run dialectical analysis on our existing research about <topic>. Find contradictions,
hidden assumptions, and alternative frameworks we may have missed.
```

### Recall and summarize previous work

```text
Summarize what we already know about <topic> from this repository, including key
disagreements and open questions.
```

## Skill Design References

The included skills were authored using current public patterns and docs:

- Trail of Bits skills marketplace and workflow design references
  <https://github.com/trailofbits/skills>
- Community production skill examples
  <https://github.com/daymade/claude-code-skills>
- Official Perplexity MCP server configuration and tool docs
  <https://github.com/perplexityai/modelcontextprotocol>
