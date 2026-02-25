# Research Subagents

This file is an index and quick reference. Operational instructions live in each subagent's `AGENT.md`.

## Role in Workflow

The orchestrator (`../ORCHESTRATOR.md`) launches all research subagents in parallel for research-intent requests, then combines their bundles.

## Subagent Catalog

| Subagent | Primary role | Typical strength | Config |
|---|---|---|---|
| `deeper-research` | Broad web harvesting with query variation | Coverage breadth and edge cases | none |
| `perplexity-deep-research` | Perplexity-powered research synthesis | Fast synthesis with linked citations | Perplexity MCP/API |
| `gemini-deep-research` | Gemini deep research runs | Large-source autonomous scans | Gemini MCP/API |

## Parallel Launch Rule

Launch all available subagents in parallel with the same input contract (topic, tier, targets, topic type). Do not serialize worker starts.

## Failure Rule

If one subagent fails, continue with remaining bundles. Never block the whole run on a single provider.
