# Claude Code Skills for Knowledge-Base Operations

This repository uses Claude Code skills to run a repeatable research pipeline:

1. Discover and saturate sources (`deep-research`)
2. Stress-test conclusions through contradiction and alternative-paradigm search (`dialectical-analysis`)
3. Escalate with Perplexity Sonar when coverage is still weak (`perplexity-sonar-followup`)
4. Publish and maintain structured Markdown documentation (`research-documentation`)

## Skill layout

Each skill lives in its own folder and is recognized by a `SKILL.md` file:

```text
.claude/skills/
  deep-research/SKILL.md
  dialectical-analysis/SKILL.md
  perplexity-sonar-followup/SKILL.md
  research-documentation/SKILL.md
```

## Skill descriptions

### deep-research
Exhaustive multi-perspective research with a 16+ query lattice, adversarial search patterns, 4+ source classes, and mandatory saturation checks. Produces a structured research context bundle.

### dialectical-analysis
Systematically challenges research findings through assumption extraction, inversion search, alternative paradigm discovery, and stakeholder disagreement mapping. Produces a contradiction synthesis report.

### perplexity-sonar-followup
Uses Perplexity MCP tools to close specific research gaps identified after deep-research and dialectical-analysis. Merges new findings with existing context while preserving provenance.

### research-documentation
Converts research into organized Markdown files with perspective labels, confidence ratings, steelmanned disagreement documentation, cross-references, and topic maturity tracking.

## Usage model

- Skills are auto-invoked by Claude Code based on their frontmatter `description`.
- The skills are designed as workflows with quality gates, not one-shot prompts.
- The output target is always the local knowledge base under `./docs/`.
- The pipeline is designed to maximize perspective diversity and catch blind spots.

## Authoring references

These skills were designed from current public examples and guidance:

- Trail of Bits Skills marketplace and workflow skill design patterns
  <https://github.com/trailofbits/skills>
- Community reference for production skill structure
  <https://github.com/daymade/claude-code-skills>
- Official Perplexity MCP server setup and tool names
  <https://github.com/perplexityai/modelcontextprotocol>
