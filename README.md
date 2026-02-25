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
├── .claude/
│   └── skills/
│       ├── deep-research/
│       │   └── SKILL.md
│       ├── perplexity-sonar-followup/
│       │   └── SKILL.md
│       └── research-documentation/
│           └── SKILL.md
└── docs/
    └── ...                    # Generated topic knowledge folders
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
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -y @perplexity-ai/mcp-server
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
Start a new research topic on <topic>. Perform deep research with multiple perspectives, then create docs in ./docs/<topic>/.
```

### Continue an existing research topic

```text
Continue research on <topic>. Merge new findings into existing files and add new subtopic files when needed.
```

### Recall and summarize previous work

```text
Summarize what we already know about <topic> from this repository, including key disagreements and open questions.
```

## Deep Search Mode (Recommended Default)

To push Claude Code beyond shallow answers, use a prompt that explicitly asks for:

- multi-query reframing
- opposing viewpoints
- uncertainty labeling
- saved report artifacts in `./docs/`

Suggested operator prompt:

```text
Research <topic> using deep search. Build a query lattice with direct, contrarian,
regional, temporal, comparative, and stakeholder framings. Include at least two
serious opposing viewpoints and label unresolved uncertainties. Then write/update:
1) ./docs/<topic>/intro.md
2) ./docs/<topic>/perspectives.md
3) ./docs/<topic>/research-report-YYYY-MM-DD.md
with citations for major claims.
```

## Research Output Contract (Non-trivial Topics)

For any substantial research run, expect these files:

```text
docs/{topic-title}/
  intro.md
  perspectives.md
  research-report-YYYY-MM-DD.md
  {sub-topic}.md
```

Where:

- `intro.md` = topic-level synthesis and navigation
- `perspectives.md` = explicit agreement/disagreement map
- `research-report-YYYY-MM-DD.md` = dated source-backed update snapshot
- `{sub-topic}.md` = deeper analysis files for complex sections

## Minimum Evidence Bar

Before finalizing a research update, verify:

1. At least 3 source classes (primary, technical/academic, high-quality analysis/journalism)
2. At least 15 unique sources for non-trivial topics
3. At least 2 opposing perspectives represented with citations
4. Uncertainties and disputed claims explicitly labeled
5. Existing topic files merged/extended rather than overwritten

## What Makes This Fully Functional

This repository is ready to use now, but full production readiness depends on:

1. **Perplexity API key configured** (for Sonar follow-up capability)
2. **Consistent operator usage** of start/continue/recall workflows
3. **Regular topic maintenance** (updating fast-moving topics like news and policy)
4. **Optional quality automation** (Markdown linting, link checks, backup policies)

## Skill Design References

The included skills were authored using current public patterns and docs:

- Trail of Bits skills marketplace and workflow design references  
  <https://github.com/trailofbits/skills>
- Community production skill examples  
  <https://github.com/daymade/claude-code-skills>
- Official Perplexity MCP server configuration and tool docs  
  <https://github.com/perplexityai/modelcontextprotocol>
