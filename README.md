## Repository Structure

- README.md - instructions for humans
- AGENTS.md - instructions for AI agents helping to build and configure the codebase and Claude Code instructions
- CLAUDE.md - instructions for Claude Code AI agent to manage the research and documentation
- .claude/ - commands, skills, subagents, and other configurations for Claude Code
- .cursor/ - Cursor IDE MCP server configuration
- mcp-gemini-deep-research/ - MCP server exposing Google Gemini Deep Research as a tool (Python)
- mcp-gemini-node/ - Same MCP server in TypeScript/Node.js

## MCP Gemini Deep Research

To add more research depth, an MCP server exposes the Google Gemini Deep Research agent. See [mcp-gemini-deep-research/README.md](mcp-gemini-deep-research/README.md) for setup. Requires Python 3.10+ and a `GOOGLE_API_KEY` in `.env`.
