# Perspective Matrix and Contradictions

## Perspective overview

### Supporting case

Deep-search workflows improve coverage, recency, and grounding when they combine broad
query reframing, retrieval, and citation requirements
([Anthropic hallucination guidance](https://docs.anthropic.com/en/docs/minimizing-hallucinations),
[Anthropic citations](https://docs.anthropic.com/en/docs/build-with-claude/citations),
[RAG survey](https://arxiv.org/abs/2504.14891)).

### Critical case

Even strong models still fabricate or distort references; deeper search can also increase
operator cognitive load and encourage automation bias if verification is weak
([Scientific Reports](https://www.nature.com/articles/s41598-023-41032-5),
[JAMIA review](https://academic.oup.com/jamia/article/19/1/121/732254),
[information overload review](https://www.frontiersin.org/articles/10.3389/fpsyg.2023.1122200/full)).

### Mixed / nuanced case

Performance and trust improve most when AI outputs are co-audited by humans with clear
standards for evidence, disclosure, and correction
([Reuters standards](https://handbook.reuters.com/),
[Reuters and AI](https://www.reuters.com/info-pages/reuters-and-ai/),
[Cochrane search guidance](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04)).

### Outlier / minority interpretation

Some teams argue long-context models can reduce reliance on retrieval orchestration.
However, this can increase token cost and does not remove the need for source validation;
hybrid patterns are often recommended
([RAG vs long context discussion](https://arxiv.org/abs/2501.01880),
[RAG robustness work](https://arxiv.org/abs/2412.16708)).

## Contradiction log

| Claim | Supporting evidence | Opposing / cautionary evidence | Current confidence |
| --- | --- | --- | --- |
| Deeper search improves factual quality. | Anthropic recommends grounding and citation verification. | Citation fabrication remains non-trivial even in stronger models. | Medium |
| Retrieval reduces hallucinations. | RAG surveys show grounding benefits for factual QA. | Retrieval noise, poisoning, and jamming attacks can degrade reliability. | Medium |
| More search always helps. | Multi-angle search improves recall and perspective diversity. | Information overload can reduce decision quality and increase stress. | Medium |
| Experts will correct AI mistakes. | Human review can catch errors with proper process. | Confirmation bias and automation bias can make experts over-accept aligned AI outputs. | Medium |
| Compliance pressure favors traceable KB workflows. | NIST, OECD, and EU frameworks emphasize transparency and accountability. | Practical implementation burden may reduce adoption quality in smaller teams. | Medium |

## Unresolved disagreements to monitor

1. **Depth vs efficiency:** where does additional search stop paying off?
2. **RAG vs long context:** which architecture is better by task type and budget?
3. **Human review quality:** which review workflow best reduces anchoring and over-trust?

## Monitoring triggers

- Material new regulation changes for GPAI transparency and documentation
  ([EU GPAI obligations](https://digital-strategy.ec.europa.eu/en/factpages/general-purpose-ai-obligations-under-ai-act)).
- New benchmark evidence on retrieval robustness and adversarial behavior in production
  ([RAG adversarial study](https://arxiv.org/abs/2412.16708)).
- New empirical data on citation reliability or AI incident rates
  ([Scientific Reports](https://www.nature.com/articles/s41598-023-41032-5),
  [AI Index 2025](https://hai.stanford.edu/ai-index/2025-ai-index-report)).
