# Tacit Knowledge and AI: The Persistent Unsolved Core Problem

## The Fundamental Challenge

Since Michael Polanyi articulated "we can know more than we can tell" in 1966, the tacit knowledge problem has been the central, unresolved challenge of every knowledge management generation. Tacit knowledge — the knowledge people possess but cannot easily articulate — accounts for the majority of organizational expertise. Every KM technology from expert systems to LLMs has promised to address it. None has fully succeeded.

**[HIGH CONFIDENCE]** The tacit knowledge problem is not a bug in specific KM implementations — it is a structural feature of how human knowledge works. Understanding this changes how we evaluate AI's promise.

## What Tacit Knowledge Actually Is

### It's not one thing

A critical insight, often missed in both KM practice and AI development: tacit knowledge is not a single extractable entity. It is an ecology distributed across multiple dimensions:

**Embodied knowledge:** Stored in timing, force, posture, gaze, and micro-sequencing. A surgeon's hand movements, a pilot's feel for turbulence, a teacher's sense of when a student is confused — these cannot be reliably verbalized even by the practitioners themselves.

**Relational knowledge:** Knowledge that exists only within social relationships and community membership. An experienced salesperson's understanding of a client's unspoken concerns, a team's shared sense of priorities — this knowledge disappears when relationships dissolve.

**Contextual knowledge:** Knowledge embedded in tools, spatial arrangements, shared attention, and environmental cues. A factory worker's awareness of machine sounds indicating problems, a trader's feel for market mood from the trading floor — this knowledge is inseparable from its physical and social context.

[Source: [Tacit Knowledge Is Not One Thing - Yu Sato, Medium, 2026](https://medium.com/@yusato/tacit-knowledge-is-not-one-thing-and-that-is-why-ai-keeps-missing-it-1c07718293a2)]

### The systems view of expertise

Competence is often a property of entire systems — people, artifacts, procedures, and shared attention working together — not of individual minds holding extractable knowledge. Situated learning theory (Lave and Wenger, 1991) demonstrates that expertise develops through legitimate peripheral participation in communities of practice, not through knowledge extraction and transfer.

This means the very premise of most KM systems — that knowledge can be extracted from experts, stored in a system, and transferred to others — fundamentally misunderstands how expertise works.

## The SECI Model and Its Limitations

Nonaka and Takeuchi's SECI model (1991/1995) remains the most influential framework for understanding tacit-explicit knowledge conversion:

- **Socialization:** Tacit → tacit (shared experience)
- **Externalization:** Tacit → explicit (articulation)
- **Combination:** Explicit → explicit (systematization)
- **Internalization:** Explicit → tacit (learning by doing)

### Criticisms of SECI

**[CONTESTED]** The SECI model faces significant scholarly critique:

1. **Weak empirical basis.** Gourlay (2004) argues the empirical foundation is "highly unsatisfactory" and the model may be "seriously flawed."
2. **Conflation of transfer with conversion.** Critics argue that socialization (tacit-to-tacit) and combination (explicit-to-explicit) are transfer processes, not conversion processes — they don't actually transform the nature of the knowledge.
3. **Overapplication.** The model's popularity has led to superficial applications far beyond its original conceptual limits.
4. **The conversion illusion.** Externalization (tacit → explicit) is inherently partial and lossy. What gets externalized is always a simplified, decontextualized version of the original tacit knowledge.

[Source: [Critical Evaluation of Nonaka's SECI Model - Springer](https://link.springer.com/chapter/10.1007/978-3-319-71434-9_3); [SECI Empirical Shortcomings - Kingston University](https://eprints.kingston.ac.uk/id/eprint/2291/)]

### The conversion is never finished

Many tacit KM projects fail because they treat conversion as an engineering task with a definitive endpoint. In reality, tacit-explicit conversion is inherently partial and cyclical — a spiral that never completes. Organizations that expect to "capture" tacit knowledge once and store it are misunderstanding the nature of the process.

## How Each KM Generation Approached Tacit Knowledge

| Generation | Approach to Tacit Knowledge | Result |
|------------|----------------------------|--------|
| Expert Systems (1980s) | Encode expert rules through knowledge engineering interviews | Knowledge engineering bottleneck; experts couldn't articulate tacit knowledge |
| First Wave KM (1990s) | Capture in documents and databases | Most valuable knowledge resisted codification |
| Communities of Practice (2000s) | Facilitate social sharing; don't try to codify | Better outcomes but hard to scale and measure |
| Semantic Web (2000s) | Formalize in ontologies | Only worked for narrow, well-defined domains |
| AI/LLM Era (2020s) | Learn patterns from vast text corpora | Can mimic some expert-like responses; fundamental limits remain |

## AI's New Romance with Tacit Knowledge

### What AI proponents claim

The GRAI framework (proposed 2024-2025) argues that generative AI enables machines to represent and process implicit or tacit knowledge through pattern recognition from large datasets. Key claims:
- LLMs learn implicit patterns from how experts write and communicate
- AI can iteratively discover tacit knowledge through organizational interactions
- Simulations show up to 94.9% knowledge recall for certain types of organizational knowledge

[Source: [From SECI to GRAI - ScienceDirect, 2025](https://www.sciencedirect.com/org/science/article/pii/S2059589125000463)]

### What critics argue

**[MEDIUM CONFIDENCE]** The critical response highlights several fundamental limitations:

1. **Statistical patterns ≠ understanding.** LLMs identify statistical regularities in text. This captures some dimensions of tacit knowledge that happen to be expressed in writing, but misses embodied, relational, and contextual dimensions entirely.

2. **Text corpus bias.** LLMs can only learn from what has been written down. But the most important tacit knowledge is precisely the knowledge that has never been written down — and often cannot be.

3. **Polanyi's revenge.** CACM (Communications of the ACM) published an analysis arguing that while AI can learn some aspects of perception and skilled action from data, the underlying tacit dimension remains inherently difficult to formalize and transfer.

4. **The simulation fallacy.** Achieving 94.9% recall in simulated organizational interactions is not the same as capturing 94.9% of an organization's tacit knowledge. Simulations test against knowledge that was already explicitly represented — the very knowledge that is easiest to capture.

[Source: [Polanyi's Revenge and AI's New Romance with Tacit Knowledge - CACM](https://cacm.acm.org/opinion/polanyis-revenge-and-ais-new-romance-with-tacit-knowledge/); [Tacit Knowledge Is Not One Thing - Medium, 2026](https://medium.com/@yusato/tacit-knowledge-is-not-one-thing-and-that-is-why-ai-keeps-missing-it-1c07718293a2)]

## What Would Actually Solve This?

**[LOW CONFIDENCE]** — these are speculative assessments based on the historical pattern:

1. **Multimodal AI that learns from observation.** If AI systems could learn from video, sensor data, and environmental context — not just text — they might capture some embodied and contextual knowledge dimensions. This is technically possible but far from current enterprise KM capabilities.

2. **AI as facilitator rather than repository.** Rather than trying to capture tacit knowledge in a system, use AI to facilitate the social processes through which tacit knowledge is shared — connecting the right people, suggesting relevant past experiences, prompting reflection.

3. **Accepting irreducibility.** Some tacit knowledge may be fundamentally irreducible — it can only be learned through practice and participation, not through any information system. Organizations that accept this can design KM systems for what they can do (explicit knowledge management, knowledge facilitation) rather than what they can't (full tacit knowledge capture).

## The Honest Assessment

The history of tacit knowledge in KM teaches a humbling lesson: **every generation has claimed to solve the tacit knowledge problem, and every generation has been wrong — or at best, partially right in ways that fell far short of the promise.**

AI genuinely adds new capabilities. LLMs can process natural language, identify patterns across large corpora, and provide contextual responses that previous KM technologies could not. But the core of the tacit knowledge problem — that the most valuable human knowledge is embodied, relational, and contextual — has not changed. The technology has advanced; the fundamental challenge has not.

## Sources

1. [Tacit Knowledge Is Not One Thing - Yu Sato, Medium, 2026](https://medium.com/@yusato/tacit-knowledge-is-not-one-thing-and-that-is-why-ai-keeps-missing-it-1c07718293a2)
2. [Polanyi's Revenge and AI's New Romance with Tacit Knowledge - CACM](https://cacm.acm.org/opinion/polanyis-revenge-and-ais-new-romance-with-tacit-knowledge/)
3. [AI and NLP for Tacit Knowledge Conversion - MDPI, 2025](https://www.mdpi.com/2227-7080/13/2/87)
4. [AI and KM: Questioning the Tacit Dimension - ScienceOpen, 2017](https://www.scienceopen.com/hosted-document?doi=10.1080%2F08109028.2017.1364547)
5. [Iterative Tacit Knowledge Discovery - arXiv](https://arxiv.org/abs/2507.03811)
6. [Critical Evaluation of Nonaka's SECI Model - Springer](https://link.springer.com/chapter/10.1007/978-3-319-71434-9_3)
7. [SECI Empirical Shortcomings - Kingston University](https://eprints.kingston.ac.uk/id/eprint/2291/)
8. [From SECI to GRAI - ScienceDirect, 2025](https://www.sciencedirect.com/org/science/article/pii/S2059589125000463)
