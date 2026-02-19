# Knowledge Base — Claude Code Project

A curated knowledge base containing information about engineering, mathematics, investing, politics, world events, history, and latest news. Managed by a Claude Code AI agent.

---

## For Human Operators

This README is for **you**, the developer or operator. It explains how to set up and interact with this project.

### Prerequisites

- **Claude Code** (or Cursor with Claude)—the AI coding interface you'll use to chat with the agent
- Optional: **Perplexity API** access for enhanced deep research (see setup below)

### Getting Started

1. **Clone and open** this repository in your Claude Code / Cursor environment.

2. **Configure the Perplexity MCP server** (recommended for best research quality):
   - Obtain a Perplexity API key from [Perplexity AI](https://www.perplexity.ai/settings/api)
   - Add the Perplexity MCP server to your Cursor/Claude Code MCP configuration
   - See [Perplexity MCP setup](#perplexity-mcp-setup) below

3. **Start a chat** with the Claude Code agent and give it instructions.

### How to Interact With the Agent

Use the chat interface to ask the AI agent to:

| Request | Example |
|---------|---------|
| **Start a new research topic** | "Research and document quantum computing basics" |
| **Continue an existing topic** | "Expand the section on quantum error correction in docs/quantum_computing" |
| **Recall and summarize** | "Summarize what we have on climate change policy" |

The agent will use its skills to research exhaustively, optionally use Perplexity for deeper search, and document everything in `./docs/`.

### Project Structure

```
./
├── .claude/skills/    # Agent skills (deep research, Perplexity, documentation)
├── docs/              # Knowledge base Markdown files (organized by topic)
├── CLAUDE.md          # Instructions for the AI agent
└── README.md          # This file (for humans)
```

### Perplexity MCP Setup

To enable the Perplexity Sonar deep-research follow-up:

1. **Get an API key**
   - Go to [Perplexity API](https://www.perplexity.ai/settings/api) or your Perplexity dashboard
   - Create an API key

2. **Add the MCP server to Cursor**
   - Open Cursor Settings → MCP (or `~/.cursor/mcp.json` / project-level config)
   - Add a configuration for the Perplexity MCP server. Example structure:

   ```json
   {
     "mcpServers": {
       "perplexity": {
         "command": "npx",
         "args": ["-y", "@modelcontextprotocol/server-perplexity"],
         "env": {
           "PERPLEXITY_API_KEY": "your-api-key-here"
         }
       }
     }
   }
   ```

   **Note:** The MCP server package name may vary. Search for "Perplexity MCP server" or "Model Context Protocol Perplexity" for the official package. Common locations for MCP config: Cursor Settings → Features → MCP, or `~/.cursor/mcp.json`.

3. **Verify**
   - Restart Cursor / Claude Code
   - In a chat, the agent should have access to Perplexity tools when the MCP server is active

### What Needs to Be Done to Make This Fully Functional?

| Item | Status | Notes |
|------|--------|-------|
| Perplexity MCP server | Optional | Improves research depth; project works without it |
| API key | You provide | Required only if using Perplexity MCP |
| First research run | Pending | Run a test topic (e.g., "Document the basics of machine learning") to validate the flow |

### Tips

- **Be specific** when requesting research: "Research and document the history of the Federal Reserve" works better than "Research money"
- **Request updates**: "Update the climate change docs with 2024–2025 developments"
- **Ask for summaries**: "What do we have on European Union energy policy?"
