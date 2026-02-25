# Claude Code Subagents Setup

How to configure and use the subagent-based research pipeline in this knowledge base. Covers parallel research agents, MCP setup for Perplexity and Gemini Deep Research, and orchestration patterns.

## Overview

The research pipeline uses **multiple AI agents** instead of one agent with multiple skills. Three subagents run **in parallel**, each using Claude Sonnet:

| Subagent | Purpose | Requirements |
|----------|---------|--------------|
| deeper-research | Extended web search with term variations, 20+ queries | Built-in WebSearch only |
| perplexity-deep-research | Perplexity Sonar model via MCP | Perplexity MCP, `PERPLEXITY_API_KEY` |
| gemini-deep-research | Google Gemini Deep Research | Gemini MCP or Interactions API, `GEMINI_API_KEY` |

The main orchestrator launches all three, waits for responses (ignoring failures/timeouts), combines their research bundles, then applies dialectical-analysis and research-documentation to produce the final docs.

## Perplexity MCP Setup

Perplexity provides deep search via the Sonar model.

### 1. Get API Key

[Perplexity API settings](https://www.perplexity.ai/account/api/group)

### 2. Add to Claude Code

```bash
claude mcp add perplexity --env PERPLEXITY_API_KEY="your_key_here" -- npx -yq @perplexity-ai/mcp-server
```

### 3. Verify

```bash
claude mcp list
```

If Perplexity MCP is unavailable, the perplexity subagent fails and the pipeline continues with the others.

## Gemini Deep Research Setup

Google Gemini Deep Research performs autonomous research across 100+ web sources and returns structured reports with citations. Available via MCP or the Interactions API.

### Option A: Gemini Deep Research MCP (Recommended)

**Install:**

```bash
pip install gemini-deep-research-mcp
# Or: uvx gemini-deep-research-mcp
```

**API Key:** [Google AI Studio](https://aistudio.google.com/)

**Configure for Claude Desktop** (`claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "gemini-deep-research": {
      "command": "uvx",
      "args": ["gemini-deep-research-mcp"],
      "env": {"GEMINI_API_KEY": "your_api_key"}
    }
  }
}
```

**Configure for Cursor** (MCP settings):

```json
{
  "gemini-deep-research": {
    "command": "uvx",
    "args": ["gemini-deep-research-mcp"],
    "env": {"GEMINI_API_KEY": "your_api_key"}
  }
}
```

**Configure for VS Code** (`.vscode/mcp.json`):

```json
{
  "servers": {
    "gemini-deep-research": {
      "command": "uvx",
      "args": ["gemini-deep-research-mcp"],
      "env": {"GEMINI_API_KEY": "your_api_key"}
    }
  }
}
```

### Option B: Google Interactions API (Python)

For programmatic use without MCP:

```bash
pip install google-genai
export GEMINI_API_KEY="your_key"
```

```python
from google import genai

client = genai.Client()
interaction = client.interactions.create(
    agent="deep-research-pro-preview-12-2025",
    input="Perform comprehensive deep research on: [your topic]",
    background=False
)
for event in interaction:
    if hasattr(event, 'text') and event.text:
        print(event.text)
```

Requires Python 3.10+ and `google-genai` >= 0.6.0.

### Notes

- Deep Research can take 5–15 minutes per task.
- Agent ID: `deep-research-pro-preview-12-2025`
- [Official documentation](https://blog.google/technology/developers/deep-research-agent-gemini-api/)
- [PyPI: gemini-deep-research-mcp](https://pypi.org/project/gemini-deep-research-mcp/)

## Subagent Best Practices

1. **Parallel dispatch** — Launch all three subagents at once. Don't wait for one to finish before starting another.
2. **Ignore failures** — If Perplexity or Gemini MCP fails, proceed with deeper-research (WebSearch) output.
3. **Timeout handling** — Each subagent has a reasonable timeout; if exceeded, discard and continue.
4. **Combine carefully** — Deduplicate sources, reconcile conflicts with perspective labels, merge claim-to-source mappings.
5. **Context isolation** — Subagents run in separate contexts; the orchestrator holds the combined view.

## Cursor Agent Skills

If your Cursor project references agent skills, update the list to only include the **orchestrator skills** (subagents are invoked via `mcp_task`, not skills):

- `dialectical-analysis`
- `research-documentation`

The old `deep-research` and `perplexity-sonar-followup` skills have been replaced by subagents.

## Related Topics

- [Subagent Best Practices](subagent-best-practices.md) — Parallel dispatch, context isolation, .claude folder organization
- [Knowledge base structure](../README.md) — How docs are organized
- [Dialectical analysis](../../.claude/skills/dialectical-analysis/SKILL.md) — Challenge search and assumption extraction
