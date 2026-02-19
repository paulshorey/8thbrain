# Claude Code Skills for Knowledge-Base Operations

This repository uses Claude Code skills to run a repeatable research pipeline:

1. Discover and saturate sources (`deep-research`)
2. Escalate with Perplexity Sonar when coverage is still weak (`perplexity-sonar-followup`)
3. Publish and maintain structured Markdown documentation (`research-documentation`)

## Skill layout

Each skill lives in its own folder and is recognized by a `SKILL.md` file:

```text
.claude/skills/
  deep-research/SKILL.md
  perplexity-sonar-followup/SKILL.md
  research-documentation/SKILL.md
```

## Usage model

- Skills are intended to be auto-invoked by Claude Code based on their frontmatter `description`.
- The skills are designed as workflows with quality gates, not one-shot prompts.
- The output target is always the local knowledge base under `./docs/`.

## Authoring notes

These skills were designed from current public examples and guidance:

- Trail of Bits Skills marketplace and workflow skill design patterns  
  <https://github.com/trailofbits/skills>
- Community reference for production skill structure  
  <https://github.com/daymade/claude-code-skills>
- Official Perplexity MCP server setup and tool names  
  <https://github.com/perplexityai/modelcontextprotocol>
