# Overview

Goal: Build a knowledge base that continuously extends and improves.

Solution: Do this by configuring Claude Code commands, skills, and subagents.

End result: User starts a new research topic. AI agent will research that topic, find existing documentation in this knowledgebase, and rewrite the documentation to include the new information.

# To do

This Claude Code configuration is unfinished.

Your job is to help set up the best architecture for agentic AI research management.

## Repository Structure

- README.md - instructions for humans
- AGENTS.md - instructions for AI agents helping to build and configure the codebase and Claude Code instructions
- CLAUDE.md - instructions for Claude Code AI agent to manage the research and documentation
- .claude/ - folder of commands, skills, subagents, and other configurations for Claude Code
- docs/ - folder where Claude Code AI agent will read and write all research documentation as .md files
