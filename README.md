# Knowledge Base — Claude Code Project

A knowledge base managed by Claude Code AI agents. This repository stores vast amounts of researched content as Markdown files, organized by topic. It is **not a codebase**—it is a structured collection of documentation files.

## For the Human Operator

This README explains how to get started, configure the project, and interact with the AI agent.

---

## Getting Started

### 1. Prerequisites

- **Claude Code** or **Cursor** with Claude Code integration
- (Optional) **Perplexity API key** for enhanced research via MCP

### 2. Clone and Open

```bash
git clone <repository-url>
cd <repository-name>
```

Open the project in **Cursor** or your preferred editor that supports Claude Code.

### 3. Interacting with the AI Agent

**Primary interface: Claude Code CLI chat**

Start a chat session with the AI agent and use natural language to:

| Request | Example |
|---------|---------|
| **Start new research** | "Research and document the topic of quantum computing. Create a new knowledge base entry." |
| **Continue existing research** | "Continue expanding the machine learning topic. Add a section on reinforcement learning." |
| **Recall & summarize** | "What do we know about distributed systems? Summarize our existing documentation." |

The agent will follow the skills in `.claude/skills/` to conduct deep research, optionally use Perplexity, and document findings in `./docs/`.

---

## Perplexity MCP Server Setup

The project includes a skill that uses **Perplexity.AI's API** via an MCP (Model Context Protocol) server for enhanced research. To enable it:

### Step 1: Get a Perplexity API Key

1. Go to [Perplexity API](https://www.perplexity.ai/settings/api) (or the current API signup page)
2. Create an account or sign in
3. Generate an API key

### Step 2: Install and Configure the Perplexity MCP Server

**Option A: Cursor**

1. Open Cursor Settings
2. Navigate to **Features → MCP** (or **Settings → MCP Servers**)
3. Add the Perplexity MCP server. Configuration typically looks like:

```json
{
  "mcpServers": {
    "perplexity": {
      "command": "npx",
      "args": ["-y", "@perplexity-ai/mcp-server"],
      "env": {
        "PERPLEXITY_API_KEY": "your-api-key-here"
      }
    }
  }
}
```

> **Official package**: `@perplexity-ai/mcp-server` — real-time web search, reasoning, and research through Perplexity's API (Sonar, Sonar Pro, etc.).

**Option B: Claude Code / Custom Setup**

If using Claude Code outside Cursor, configure MCP in your project or user config file (e.g., `~/.config/claude/mcp.json` or similar, depending on your setup). Refer to your Claude Code documentation for the exact config location.

### Step 3: Verify

In a chat session, ask the agent to "use Perplexity to research [a topic]." If configured correctly, the agent will be able to invoke the Perplexity tool. If not, the agent will note that Perplexity is unavailable and proceed with standard research.

### Alternative Packages

Other community packages include `perplexity-mcp` and `@jschuller/perplexity-mcp`. The official Perplexity package (`@perplexity-ai/mcp-server`) is recommended. Check [Perplexity's MCP docs](https://docs.perplexity.ai/guides/model-context-protocol) for the latest setup.

---

## Project Structure

```
.
├── .claude/
│   └── skills/
│       ├── deep-research.md      # Exhaustive research methodology
│       ├── perplexity-mcp.md     # Perplexity Sonar augmentation
│       └── document-research.md  # Documentation structure & conventions
├── docs/
│   └── {topic-title}/
│       ├── intro.md              # Main topic entry
│       └── {sub-topic}.md        # Detailed subtopics (as needed)
├── CLAUDE.md                     # Instructions for the AI agent
└── README.md                     # This file (for humans)
```

---

## What Needs to Be Done to Make This Fully Functional

1. **MCP Configuration** — If you want enhanced research, configure the Perplexity MCP server (see above).
2. **First Topic** — Ask the agent to research and document a topic of interest to populate `./docs/`.
3. **Branch/Workflow** — The project is Git-managed. Commit and push as the agent adds content. Consider a workflow for reviewing agent-generated content before merging.
4. **Optional: Custom Skills** — Add more skills to `.claude/skills/` for domain-specific workflows (e.g., academic citation formats, technical diagram conventions).

---

## Tips for Best Results

- **Be specific** when requesting research: "Research Rust's ownership model and document it" is better than "research Rust."
- **Request iterations** when topics are large: "Start with an intro, then we'll add subtopics."
- **Ask for recalls** to verify the agent uses the knowledge base: "Summarize what we have on X" ensures the docs are being used.
- **Review agent output** — The agent follows skills, but human review ensures quality and correctness.

---

## License & Attribution

Content in `./docs/` is researched and synthesized by the AI agent. Sources are cited in each document. Use and attribute according to your project's needs and the terms of the cited sources.
