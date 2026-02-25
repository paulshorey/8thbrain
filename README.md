# Knowledge Base

A Markdown-first knowledge base managed through **Claude Code**. Designed for continuous, deep, multi-perspective research on any topic — from technical implementations to historical analysis to scientific inquiry.

## What Makes This Different

This system fights the most common failure modes of AI-assisted research: **confirmation bias, shallow coverage, and premature closure.** It enforces:

- **Parallel subagents** — three research agents (WebSearch, Perplexity, Gemini) run simultaneously for faster, broader coverage
- **Broad search** — deliberately seeking contradictions, alternative approaches, and overlooked evidence
- **Steelmanning** — presenting every position in its strongest form
- **Assumption extraction** — making hidden premises visible and testable
- **Perspective labeling** — marking claims as `[CONSENSUS]`, `[CONTESTED]`, `[MINORITY VIEW]`, etc.
- **Confidence ratings** — explicit High / Medium / Low on major claims
- **Dialectical analysis** — a dedicated skill for systematic challenge of findings
- **Self-reflection** — documenting surprises, weaknesses, and future research directions
- **Adaptive structure** — document shape follows the topic, not a rigid template

## Repository Structure

```text
.
├── CLAUDE.md                           # Claude Code operating manual
├── AGENTS.md                           # Cursor / Copilot agent orientation
├── .claude/
│   ├── ORCHESTRATOR.md                 # Subagent launch and combine logic
│   ├── subagents/                      # Parallel research agents (Claude Sonnet)
│   │   ├── deeper-research/            # WebSearch, term variations, 20+ queries
│   │   ├── perplexity-deep-research/   # Perplexity MCP Sonar model
│   │   └── gemini-deep-research/       # Google Gemini Deep Research MCP/API
│   └── skills/                         # Orchestrator-only skills
│       ├── dialectical-analysis/       # Contradiction and alternative framing
│       └── research-documentation/     # Structured writing with merge-safe updates
└── docs/
    ├── README.md                       # Master topic index
    └── {topic}/
        ├── intro.md
        ├── {subtopic}.md
        ├── disagreements.md
        └── sources.md
```

### Configuration Files

| File | Used By | Purpose |
|------|---------|---------|
| `CLAUDE.md` | Claude Code | Full operating manual with subagent pipeline, quick-write mode, cognitive mandates |
| `AGENTS.md` | Cursor, Copilot, other editors | Knowledge base structure, file conventions, content guidelines |
| `.claude/ORCHESTRATOR.md` | Main context | How to launch subagents, combine output, apply skills |

## Operating Modes (Claude Code)

Claude Code operates in two modes, chosen based on the user's request:

### Deep Research Mode

Triggered by requests for "deep research", "research [topic]", "full analysis", or anything calling for thorough multi-source investigation.

```text
User Request
    │
    ▼
┌──────────────────┐
│  Scope Assessment │  Quick / Standard / Deep tier
└────────┬─────────┘
         ▼
┌────────────────────────────────────────────────────────────┐
│  PARALLEL SUBAGENTS (launch 3, ignore failures)             │
│  ┌───────────────┐ ┌──────────────────┐ ┌─────────────────┐│
│  │ deeper-research│ │ perplexity-deep  │ │ gemini-deep     ││
│  │ (WebSearch)    │ │ (Perplexity MCP) │ │ (Gemini MCP/API)││
│  └───────┬───────┘ └────────┬─────────┘ └────────┬────────┘│
└──────────┼──────────────────┼────────────────────┼─────────┘
           ▼                  ▼                    ▼
┌────────────────────────────────────────────────────────────┐
│  Combine research bundles into one                          │
└────────┬───────────────────────────────────────────────────┘
         ▼
┌──────────────────────┐
│ dialectical-analysis  │  (When topic warrants it)
└────────┬─────────────┘
         ▼
┌────────────────────────┐
│ research-documentation  │  Structured Markdown + self-reflection
└────────────────────────┘
```

### Quick-Write Mode

Triggered by requests to "add a note", "update [topic] with", or other small additions. Skips subagents and writes directly to docs, still following knowledge base conventions.

## Quick Start

### 1. Prerequisites

- Claude Code CLI installed and authenticated
- Node.js + npm (for MCP servers)
- (Optional) Perplexity API key
- (Optional) Gemini API key

### 2. Open Claude Code

```bash
claude
```

### 3. (Optional) Configure Perplexity MCP

Perplexity adds deep search via the Sonar model. Get an API key from [Perplexity API settings](https://www.perplexity.ai/account/api/group), then:

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -yq @perplexity-ai/mcp-server
```

### 4. (Optional) Configure Gemini Deep Research MCP

Gemini adds autonomous research across 100+ sources. Get an API key from [Google AI Studio](https://aistudio.google.com/), then:

```bash
# Install: pip install gemini-deep-research-mcp
# Or use uvx: uvx gemini-deep-research-mcp

# Add to MCP config (Claude Desktop, Cursor, etc.)
# {"gemini-deep-research": {"command": "uvx", "args": ["gemini-deep-research-mcp"], "env": {"GEMINI_API_KEY": "..."}}}
```

See `docs/claude-subagents-setup/` for detailed setup instructions.

Verify MCPs:

```bash
claude mcp list
```

## How to Use

### Deep research on a new topic

> Research [topic]. Perform deep research with multiple perspectives and dialectical analysis.

### Continue existing research

> Continue research on [topic]. Merge new findings into existing files.

### Challenge existing research

> Run dialectical analysis on [topic]. Find contradictions, hidden assumptions, and alternative frameworks.

### Quick note or update

> Add a note to [topic] about [specific thing].

> Update [topic] with this new information: [details].

### Recall previous work

> Summarize what we know about [topic] from this repository.

## Design References

- [Claude Code Sub-Agents](https://code.claude.com/docs/en/sub-agents)
- [Claude Code Sub-Agents: Parallel vs Sequential](https://claudefa.st/blog/guide/agents/sub-agent-best-practices)
- [Trail of Bits skills marketplace](https://github.com/trailofbits/skills)
- [Perplexity MCP server](https://github.com/perplexityai/modelcontextprotocol)
- [Gemini Deep Research MCP](https://pypi.org/project/gemini-deep-research-mcp/)
- [Google Gemini Interactions API](https://blog.google/technology/developers/deep-research-agent-gemini-api/)
