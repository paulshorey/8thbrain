# Research Report: Configuring Claude Code for Deeper, Contradiction-Aware KB Research

**Date:** 2026-02-25  
**Topic slug:** `claude-code-knowledge-base-research`  
**Audience:** operator maintaining a long-horizon Markdown knowledge base  
**Confidence target:** medium-high (traceable citations, explicit uncertainty labels)

## 1) Scope statement

This research pass evaluates how to configure Claude Code to operate as a
knowledge-base manager (not just a code assistant), with emphasis on:

- deeper multi-angle search
- contradictory perspective capture
- citation-backed report outputs saved to `./docs/`

Coverage focused on global guidance and evidence between 2019-2026, combining:
official docs, policy/governance frameworks, academic/technical studies, and
practitioner standards.

## 2) Method summary

- Ran a multi-angle query lattice covering direct, contrarian, comparative,
  regional/policy, temporal, and stakeholder framings.
- Collected sources across 4 classes:
  1. primary vendor/official docs
  2. policy/standards frameworks
  3. academic/technical evidence
  4. practitioner operations standards
- Built contradiction mapping for major claims.
- Checked for follow-up acceleration via MCP resources; none were available in
  the current environment at run time.

## 3) What changed in the repository

### Configuration/documentation upgrades

1. `README.md`
   - Added Deep Search Mode prompt template.
   - Added minimum evidence bar and non-trivial output contract.
2. `CLAUDE.md`
   - Added deep-search defaults (query lattice + opposing views + uncertainty).
   - Added explicit report artifacts (`perspectives.md`, dated report file).
3. `.claude/skills/deep-research/SKILL.md`
   - Added explicit contrarian branch requirement.
   - Added contradiction log requirement.
   - Added report handoff phase.
4. `.claude/skills/research-documentation/SKILL.md`
   - Extended output contract with `perspectives.md` and dated report snapshots.
5. `docs/README.md`
   - Updated docs topic file pattern to include perspectives and dated reports.

### New knowledge files

- `docs/claude-code-knowledge-base-research/intro.md`
- `docs/claude-code-knowledge-base-research/deeper-search-configuration.md`
- `docs/claude-code-knowledge-base-research/perspectives.md`
- `docs/claude-code-knowledge-base-research/research-report-2026-02-25.md`

## 4) Key findings

1. **Claude Code can support robust research workflows when skill + repo
   instructions enforce process gates.**
   - Skills and workflow docs support project-specific automation and standards
     ([Claude Code skills](https://docs.anthropic.com/en/docs/claude-code/skills),
     [common workflows](https://docs.anthropic.com/en/docs/claude-code/common-workflows)).

2. **Grounding and citations materially reduce, but do not eliminate, false claims.**
   - Anthropic provides anti-hallucination and citation guidance
     ([minimizing hallucinations](https://docs.anthropic.com/en/docs/minimizing-hallucinations),
     [citations](https://docs.anthropic.com/en/docs/build-with-claude/citations)).
   - Citation fabrication remains empirically observed in peer-reviewed studies
     ([Scientific Reports 2023](https://www.nature.com/articles/s41598-023-41032-5)).

3. **Multi-source, multi-angle search is a strong default for knowledge-quality
   but needs strict filtering.**
   - Evidence-synthesis standards emphasize broad search and transparent selection
     ([Cochrane chapter 4](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04)).
   - Too much low-signal information can reduce decision quality
     ([information overload review](https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1122200/full)).

4. **Human review remains a hard requirement.**
   - Automation bias and confirmation bias can cause experts to over-accept AI
     outputs, especially when they align with priors
     ([JAMIA review](https://academic.oup.com/jamia/article/19/1/121/732254),
     [AI-assisted confirmation bias study](https://www.sciencedirect.com/science/article/pii/S2949882124000264)).

5. **Governance pressure is increasing in favor of traceable documentation and
   transparent evidence practices.**
   - NIST GenAI Profile, EU GPAI obligations, OECD AI Principles all reinforce
     documentation and accountability needs
     ([NIST](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence),
     [EU](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act),
     [OECD](http://oecd.ai/ai-principles)).

6. **Retrieval-centric deep search is useful but not risk-free.**
   - RAG helps grounding and recency, but adversarial/noisy retrieval conditions
     still degrade performance
     ([RAG evaluation survey](https://arxiv.org/abs/2504.14891),
     [RAG adversarial robustness](https://arxiv.org/abs/2412.16708)).

## 5) Claim-to-source mapping

| Claim | Supporting sources | Counter/caution sources | Confidence |
| --- | --- | --- | --- |
| Process-constrained skills improve repeatability. | Anthropic skills and workflows docs | Operator discipline still required | Medium-high |
| Citations reduce hallucination risk. | Anthropic citation + hallucination docs | Scientific Reports shows fabricated references still occur | Medium |
| Deeper search improves coverage. | Cochrane and systematic-review search practice | Information overload and noise can hurt quality | Medium |
| Human review protects quality. | Reuters standards, Cochrane rigor | Bias studies show reviewers can still over-trust AI | Medium |
| Governance will increasingly require traceable outputs. | NIST, EU, OECD | Implementation burden varies by team maturity | Medium-high |
| RAG is a strong default for external grounding. | RAG surveys | Poisoning/jamming vulnerabilities remain | Medium |

## 6) Perspective matrix

- **Supporting:** deep search + citation controls improve evidence quality and
  reproducibility.
- **Critical:** hallucinations, fake citations, and over-trust can persist.
- **Mixed:** best outcomes require human verification + uncertainty labels +
  merge-safe documentation.
- **Outlier:** some workloads may prefer long-context-first patterns; hybrid
  retrieval + long-context approaches may be optimal by task.

## 7) Unresolved questions

1. What is the right stopping rule for deep-search saturation in this repository?
2. Which review workflow best reduces anchoring and automation bias in practice?
3. Should fast-moving topic folders include explicit refresh cadences and SLAs?

## 8) Source table (deduplicated)

| Source | Org / venue | URL | Class | Quality |
| --- | --- | --- | --- | --- |
| Claude Code skills docs | Anthropic | https://docs.anthropic.com/en/docs/claude-code/skills | Primary | A |
| Claude Code common workflows | Anthropic | https://docs.anthropic.com/en/docs/claude-code/common-workflows | Primary | A |
| Minimizing hallucinations | Anthropic | https://docs.anthropic.com/en/docs/minimizing-hallucinations | Primary | A |
| Citations docs | Anthropic | https://docs.anthropic.com/en/docs/build-with-claude/citations | Primary | A |
| Perplexity MCP server | Perplexity (GitHub) | https://github.com/ppl-ai/modelcontextprotocol | Primary | A |
| Perplexity MCP guide | Perplexity | https://docs.perplexity.ai/guides/mcp-server | Primary | A |
| NIST AI RMF GenAI Profile | NIST | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence | Primary/policy | A |
| EU GPAI obligations | European Commission | https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act | Primary/policy | A |
| OECD AI Principles | OECD | http://oecd.ai/ai-principles | Policy | A |
| Reuters and AI | Reuters | https://www.reuters.com/info-pages/reuters-and-ai/ | Practitioner | B |
| Reuters Journalistic Standards | Reuters | https://handbook.reuters.com/ | Practitioner | B |
| AI Index Report 2025 | Stanford HAI | https://hai.stanford.edu/ai-index/2025-ai-index-report | Institutional analysis | B |
| Fabrication/errors in ChatGPT citations | Scientific Reports | https://www.nature.com/articles/s41598-023-41032-5 | Academic | A |
| Automation bias systematic review | JAMIA | https://academic.oup.com/jamia/article/19/1/121/732254 | Academic | A |
| Confirmation bias in AI-assisted decisions | Current Psychology Reports | https://www.sciencedirect.com/science/article/pii/S2949882124000264 | Academic | B |
| RAG evaluation survey | arXiv | https://arxiv.org/abs/2504.14891 | Technical survey | B |
| RAG under adversarial poisoning | arXiv | https://arxiv.org/abs/2412.16708 | Technical study | B |
| Cochrane searching for studies | Cochrane | https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04 | Method standard | A |
| Docs as Code guide | Write the Docs | https://writethedocs.org/guide/docs-as-code | Practitioner method | B |
| Diataxis framework | Diataxis | https://diataxis.fr/ | Documentation method | B |
| Information overload review | Frontiers in Psychology | https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1122200/full | Academic | B |

## 9) Limitations

1. Perplexity MCP follow-up could not be executed in this environment because no MCP
   resources were available at run time.
2. Several technical robustness sources are recent preprints (valuable but less
   settled than long-established peer-reviewed results).
3. This pass focused on process configuration and governance, not benchmarked task
   performance within this specific repository.
