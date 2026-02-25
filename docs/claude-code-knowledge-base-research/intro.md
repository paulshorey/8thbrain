# Claude Code Knowledge-Base-First Research

## Why this topic matters

Claude Code can be used for more than software implementation. With project skills and
repo-level instructions, it can operate as a research and documentation engine that
continuously updates a local knowledge base in Markdown. Anthropic's documentation for
skills and workflows supports this operating model, including project-specific skill
packs and repeatable workflows ([Skills docs](https://docs.anthropic.com/en/docs/claude-code/skills),
[Common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)).

## Core concepts

1. **Deep query lattice**: search the same topic through direct, contrarian, regional,
   temporal, and stakeholder framings instead of one-shot queries.
2. **Contradiction-aware synthesis**: preserve supporting and opposing evidence in the
   same report rather than collapsing into one perspective.
3. **Citation-first drafting**: claims should be traceable to sources, and uncertainty
   should be explicit (not implied).
4. **Docs-as-memory**: save updates as topic files under `docs/{topic}/` so knowledge
   compounds over time ([Write the Docs](https://writethedocs.org/guide/docs-as-code),
   [Diataxis](https://diataxis.fr/)).

## Major schools of thought / perspectives

- **Supportive view:** deeper search + retrieval grounding usually improves factual
  quality and recency versus relying on model memory alone
  ([Anthropic hallucination guidance](https://docs.anthropic.com/en/docs/minimizing-hallucinations),
  [RAG evaluation survey](https://arxiv.org/abs/2504.14891)).
- **Critical view:** deeper search does not eliminate hallucinations or fake citations,
  and can increase cognitive overload or automation bias
  ([Scientific Reports citation fabrication study](https://www.nature.com/articles/s41598-023-41032-5),
  [JAMIA automation bias review](https://academic.oup.com/jamia/article/19/1/121/732254),
  [information overload review](https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1122200/full)).
- **Mixed view:** best results come from structured human-in-the-loop review, explicit
  uncertainty labels, and governance controls
  ([Cochrane search standards](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04),
  [NIST GenAI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence),
  [OECD AI Principles](http://oecd.ai/ai-principles)).

## Key developments and timeline notes

- **2019, updated 2024:** OECD AI Principles emphasize transparency and accountability
  across the AI lifecycle ([OECD](http://oecd.ai/ai-principles)).
- **2024-07:** NIST published the GenAI Profile for AI RMF with risk-focused controls
  for generative AI deployment
  ([NIST AI 600-1](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence)).
- **2025-08 (effective obligations):** EU AI Act obligations for GPAI providers add
  stronger transparency and documentation expectations
  ([EU Commission fact page](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act)).
- **2025:** Stanford AI Index continues to report reliability and incident concerns,
  despite major capability gains
  ([AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)).

## Open questions and uncertainties

1. How much additional quality gain comes from deeper search after the first saturation
   pass, versus additional cost and complexity?
2. Which contradiction-handling format (matrix vs narrative debate) best improves future
   retrieval and update speed?
3. How should this repository trigger refreshes for fast-moving topics (policy, markets,
   security incidents)?

## Subtopics

- [Deeper Search Configuration Playbook](./deeper-search-configuration.md)
- [Perspective Matrix and Contradictions](./perspectives.md)
- [Research Report (2026-02-25)](./research-report-2026-02-25.md)

## Sources and citations

- Anthropic Claude Code Skills: <https://docs.anthropic.com/en/docs/claude-code/skills>
- Anthropic Minimizing Hallucinations: <https://docs.anthropic.com/en/docs/minimizing-hallucinations>
- Anthropic Citations: <https://docs.anthropic.com/en/docs/build-with-claude/citations>
- Perplexity MCP Server: <https://github.com/ppl-ai/modelcontextprotocol>
- NIST GenAI Profile (AI 600-1): <https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence>
- EU GPAI obligations: <https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act>
- OECD AI Principles: <http://oecd.ai/ai-principles>
- Reuters and AI: <https://www.reuters.com/info-pages/reuters-and-ai/>
- Reuters Journalistic Standards: <https://handbook.reuters.com/>
- AI Index 2025: <https://hai.stanford.edu/ai-index/2025-ai-index-report>
- Scientific Reports citation fabrication study: <https://www.nature.com/articles/s41598-023-41032-5>
- JAMIA automation bias review: <https://academic.oup.com/jamia/article/19/1/121/732254>
- AI-assisted confirmation bias study: <https://www.sciencedirect.com/science/article/pii/S2949882124000264>
- RAG evaluation survey: <https://arxiv.org/abs/2504.14891>
- RAG adversarial robustness: <https://arxiv.org/abs/2412.16708>
- Cochrane search guidance: <https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04>
- Write the Docs (Docs as Code): <https://writethedocs.org/guide/docs-as-code>
- Diataxis framework: <https://diataxis.fr/>
