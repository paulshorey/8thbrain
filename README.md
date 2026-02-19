# Knowledge Base

An AI-managed knowledge base powered by Claude Code. Research any topic, and the agent will conduct deep multi-source investigation, synthesize findings, and maintain an organized library of Markdown documents — complete with citations, source quality assessments, and structured navigation.

## How It Works

This repository is managed through the **Claude Code CLI**. You interact with the AI agent in a conversational chat interface, and it handles all research, writing, and file management. The knowledge base grows as you ask the agent to investigate topics.

The agent has three specialized **skills** that form a research pipeline:

1. **Deep Research** — Exhaustive multi-pass web search with query decomposition, perspective reframing, and a mandatory sufficiency check
2. **Perplexity Research** — Follow-up deep research via the Perplexity AI Sonar API when standard search leaves gaps
3. **Document Research** — Structured Markdown documentation with citations, source triage, and a merge-not-replace policy for existing content

## Getting Started

### Prerequisites

- [Claude Code CLI](https://github.com/anthropics/claude-code) installed
- A Claude API key or active Claude subscription
- Node.js 18+ (required for the Perplexity MCP server)
- A Perplexity API key (optional but recommended for deeper research)

### Step 1: Install Claude Code

**macOS / Linux:**
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Homebrew (macOS / Linux):**
```bash
brew install --cask claude-code
```

**Windows:**
```powershell
irm https://claude.ai/install.ps1 | iex
```

See the [official setup docs](https://code.claude.com/docs/en/setup) for additional options and troubleshooting.

### Step 2: Set Up the Perplexity MCP Server (Recommended)

The Perplexity MCP server gives the agent access to Perplexity's Sonar models for deep web research. Without it, the agent can still function using standard web search, but research depth will be limited.

1. **Get a Perplexity API key** from [https://www.perplexity.ai/account/api/group](https://www.perplexity.ai/account/api/group)

2. **Register the MCP server with Claude Code:**
   ```bash
   claude mcp add perplexity --env PERPLEXITY_API_KEY="pplx-your-key-here" -- npx -y @perplexity-ai/mcp-server
   ```

   Alternatively, create or edit `.claude/mcp.json` in the project root:
   ```json
   {
     "mcpServers": {
       "perplexity": {
         "command": "npx",
         "args": ["-y", "@perplexity-ai/mcp-server"],
         "env": {
           "PERPLEXITY_API_KEY": "pplx-your-key-here"
           }
       }
     }
   }
   ```

3. **Verify** by starting Claude Code and asking it to use a Perplexity tool:
   ```
   Use perplexity_ask to search for "latest developments in quantum computing"
   ```

### Step 3: Clone and Start

```bash
git clone <this-repo-url>
cd <repo-directory>
claude
```

You're now in the Claude Code chat interface and ready to interact with the knowledge base agent.

## Usage

All interaction happens through the Claude Code CLI chat. Here are the primary workflows:

### Research a New Topic

```
Research the topic: quantum computing
```

```
I'd like a comprehensive deep dive into the history and current state of CRISPR gene editing
```

The agent will:
1. Decompose the topic into subtopics and search angles
2. Run 15-25+ web searches across multiple query variations
3. Evaluate source quality and check for coverage gaps
4. Use Perplexity for follow-up research if needed
5. Write structured Markdown files in `docs/{topic}/`
6. Commit the results to the repository

### Continue Existing Research

```
Expand the research on quantum computing — focus on recent error correction breakthroughs
```

```
Add information about the latest clinical trials to the CRISPR docs
```

The agent reads existing files first, then researches and merges new findings without overwriting prior work.

### Recall and Summarize

```
What do we know about quantum computing?
```

```
Summarize the key takeaways from our CRISPR research
```

The agent reads from the existing knowledge base and provides a conversational summary.

### Browse the Knowledge Base

```
What topics have been researched so far?
```

```
List all the subtopic files under quantum computing
```

## Repository Structure

```
.
├── CLAUDE.md                         # Agent instructions (read by Claude Code)
├── AGENTS.md                         # Workspace agent configuration
├── README.md                         # This file (for human operators)
├── .claude/
│   └── skills/                       # Agent skill definitions
│       ├── deep-research/            # Multi-pass web research skill
│       │   ├── SKILL.md
│       │   └── references/
│       ├── perplexity-research/      # Perplexity API research amplifier
│       │   ├── SKILL.md
│       │   └── references/
│       └── document-research/        # Knowledge base documentation skill
│           ├── SKILL.md
│           └── references/
└── docs/                             # The knowledge base (grows over time)
    └── {topic}/
        ├── intro.md                  # Topic overview
        ├── {subtopic}.md             # Deep dives (created as needed)
        └── sources.md                # Bibliography with quality tiers
```

## Remaining Setup Tasks

The following items must be handled by the human operator to make the project fully functional:

| Task | Status | Notes |
|---|---|---|
| Install Claude Code CLI | Required | See Step 1 above |
| Configure Perplexity API key | Recommended | See Step 2 above. Without this, the agent falls back to standard web search only. |
| Verify MCP server connection | Recommended | Run a test query after configuring the Perplexity server. |
| Grant tool permissions | As needed | Claude Code will prompt for permission to use web search and MCP tools on first use. Approve these for full functionality. |

## How the Skills Work

### Deep Research Skill

The agent doesn't just run one search query. It:

- Decomposes the topic into facets (history, theory, applications, controversies, etc.)
- Generates 15-25+ distinct queries across four search waves (broad, reframed, deep dive, gap fill)
- Evaluates every source on a quality tier system (A: primary, B: authoritative, C: supplementary, D: discard)
- Runs a mandatory sufficiency check before any writing begins (minimum source count, breadth of perspectives, primary source coverage)

### Perplexity Research Skill

When standard search isn't enough, the agent escalates to Perplexity's Sonar models:

- `perplexity_research` for exhaustive multi-step deep research
- `perplexity_reason` for resolving conflicting claims with analytical reasoning
- `perplexity_ask` for quick factual gap-fills
- `perplexity_search` for finding specific documents and URLs

### Document Research Skill

All findings are written into structured Markdown:

- Every topic gets a folder in `docs/` with `intro.md` and `sources.md`
- Complex subtopics get their own dedicated files
- All factual claims include inline citations
- Existing content is always merged, never overwritten
- Source lists include quality tier ratings and metadata

## License

This knowledge base repository structure and agent configuration are provided as-is. The content generated in the `docs/` folder is derived from publicly available sources; original source attribution is maintained in `sources.md` files within each topic.
