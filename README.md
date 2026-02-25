# Knowledge Base

A Markdown-first knowledge base managed through **Claude Code**. Designed for continuous, deep, multi-perspective research on any topic — from technical implementations to historical analysis to scientific inquiry.

## What Makes This Different

This system fights the most common failure modes of AI-assisted research: **confirmation bias, shallow coverage, and premature closure.** It enforces:

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
├── CLAUDE.md                           # Claude Code operating manual (deep research pipeline + quick-write mode)
├── AGENTS.md                           # Cursor / Copilot agent orientation
├── .claude/skills/
│   ├── deep-research/SKILL.md          # Multi-perspective source harvesting
│   ├── dialectical-analysis/SKILL.md   # Contradiction and alternative framing discovery
│   ├── perplexity-sonar-followup/SKILL.md  # Optional gap-filling via Perplexity MCP
│   └── research-documentation/SKILL.md # Structured writing with merge-safe updates
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
| `CLAUDE.md` | Claude Code | Full operating manual with deep research pipeline, quick-write mode, cognitive mandates, and quality standards |
| `AGENTS.md` | Cursor, Copilot, other editors | Knowledge base structure, file conventions, and content guidelines |

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
┌──────────────────┐
│  deep-research    │  Broad multi-perspective source harvesting with saturation gates
└────────┬─────────┘
         ▼
┌──────────────────────┐
│ dialectical-analysis  │  Assumption extraction, challenge search, alternative framings
└────────┬─────────────┘
         ▼
┌────────────────────────────┐
│ perplexity-sonar-followup   │  (Optional — skipped if unavailable)
└────────┬───────────────────┘
         ▼
┌────────────────────────┐
│ research-documentation  │  Structured Markdown + self-reflection
└────────────────────────┘
```

### Quick-Write Mode

Triggered by requests to "add a note", "update [topic] with", or other small additions. Skips the skills pipeline and writes directly to docs, still following knowledge base conventions.

## Quick Start

### 1. Prerequisites

- Claude Code CLI installed and authenticated
- Node.js + npm (for MCP server)
- (Optional) Perplexity API key

### 2. Open Claude Code

```bash
claude
```

### 3. (Optional) Configure Perplexity MCP

Perplexity adds a second-pass research capability but is not required — the pipeline works without it.

Get an API key from [Perplexity API settings](https://www.perplexity.ai/account/api/group), then:

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -yq @perplexity-ai/mcp-server
```

Verify:

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

- [Trail of Bits skills marketplace](https://github.com/trailofbits/skills)
- [Community Claude Code skills](https://github.com/daymade/claude-code-skills)
- [Perplexity MCP server](https://github.com/perplexityai/modelcontextprotocol)
