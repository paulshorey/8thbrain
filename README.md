# Knowledge Base — Claude Code Project

A knowledge base managed by Claude Code AI agents. This repository stores Markdown documentation on a wide range of topics, sourced through rigorous research and organized for easy discovery.

## What This Is

- **Not an app**: No code to run. This is a collection of Markdown files.
- **AI-managed**: A Claude Code agent expands and maintains the content using defined skills.
- **Research-driven**: Content comes from exhaustive web research and Perplexity Sonar (via MCP when configured).

## Getting Started

### 1. Prerequisites

- **Claude Code** or **Cursor** with Claude Code / AI agent support
- (Optional) **Perplexity API key** for enhanced research via MCP

### 2. Project Layout

```
.
├── .claude/
│   └── skills/           # Agent skills (research, documentation, etc.)
├── docs/                 # Knowledge base content (topics as folders)
├── AGENTS.md             # Project rules for agents
├── CLAUDE.md             # Instructions for the Claude agent
└── README.md             # This file (for humans)
```

### 3. Interacting with the Knowledge Base

Use the **Claude Code CLI chat interface** (or Cursor's chat) to talk to the agent. Example prompts:

| Intent | Example |
|--------|---------|
| **Start new research** | "Research and document event sourcing patterns" |
| **Continue research** | "Continue and expand the distributed-systems topic" |
| **Recall/summarize** | "Summarize what we have on consensus algorithms" |

The agent will:
1. Perform deep research (multiple queries, perspectives, sources)
2. Optionally use Perplexity Sonar if more depth is needed
3. Write or update docs in `./docs/{topic}/` with citations

### 4. Perplexity MCP Server Setup (Optional but Recommended)

For richer research, configure the Perplexity MCP server so the agent can use Perplexity's Sonar model when web search alone is insufficient.

**Steps:**

1. **Get an API key**  
   - Sign up at [Perplexity AI](https://www.perplexity.ai/)  
   - Obtain an API key (check Perplexity's developer/docs for API access)

2. **Configure MCP in Cursor**  
   - Open Cursor Settings → Features → MCP  
   - Add a Perplexity MCP server configuration  

   Example `mcp.json` (or equivalent in Cursor's MCP settings):

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

   The official package is `@perplexity-ai/mcp-server`. Alternative community packages include `perplexity-mcp` and `@jschuller/perplexity-mcp` (with deep research options). Check each package's README for specific env vars and Sonar model selection.

3. **Environment variable alternative**  
   If the MCP server reads from the environment, set:

   ```bash
   export PERPLEXITY_API_KEY="your-api-key-here"
   ```

4. **Restart** Cursor (or reload MCP) so the server connects.

**Verification:** Ask the agent to research a niche topic. If it mentions using Perplexity or Sonar, the MCP connection is likely working.

### 5. What Still Needs to Be Done

To make this project fully functional:

1. **Perplexity MCP** (optional): Configure as above for enhanced research.
2. **First run**: Ask the agent to research a topic of interest to populate `./docs/`.
3. **Review**: Skim the generated docs and, if needed, ask the agent to expand or refine specific sections.

No code deployment or build steps are required. The knowledge base grows as you and the agent add research and documentation.

## Tips for Best Results

- **Be specific**: "Research and document the Raft consensus algorithm" is better than "research consensus."
- **Iterate**: Ask to "continue" or "go deeper" on a topic to improve coverage.
- **Recall first**: Before starting new research, ask "What do we already have on X?" to avoid duplication and build on existing content.

---

*This README is for the human operator. The Claude agent follows instructions in `CLAUDE.md` and the skills in `.claude/skills/`.*
