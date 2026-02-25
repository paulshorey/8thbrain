# Historical Context: 80 Years of Knowledge Management

## Overview

The current AI-powered knowledge management wave is the latest in a series of technology-driven attempts to solve the same fundamental problem: how to make collective knowledge accessible, actionable, and maintainable. Understanding this history is essential because the same failure patterns recur with remarkable consistency.

## Timeline of Major Eras

### The Visionary Era (1945-1970s)

**Vannevar Bush and the Memex (1945)**

Bush described the memex in "As We May Think" (The Atlantic, July 1945) -- a desk-sized device for storing and retrieving personal knowledge through associative trails, marginal annotations, and flexible indexing. His vision of "an enlarged intimate supplement to memory" is strikingly similar to what AI knowledge agents attempt today ([As We May Think, Wikipedia](https://en.wikipedia.org/wiki/As_We_May_Think)).

Less remembered: Emanuel Goldberg pioneered electronic document retrieval in the 1920s, anticipating Bush by two decades ([Buckland, Berkeley](https://people.ischool.berkeley.edu/~buckland/goldbush.html)).

**Key insight**: We have been building toward the memex for 80 years. The vision has been stable; the execution keeps failing in new ways.

**Peter Drucker and Knowledge as Capital (1970s)**

Drucker and Paul Strassman first treated knowledge as a formal corporate asset. This reframing -- from knowledge as a byproduct of work to knowledge as the work itself -- created the conceptual foundation for the KM industry.

### The Expert Systems Era (1980s)

**[HIGH CONFIDENCE]** The 1980s expert systems boom offers the most direct historical parallel to current AI-KM.

**What happened:**
- Systems like DENDRAL, MYCIN, and XCON attempted to codify expert knowledge into rule-based inference engines
- DENDRAL established the foundational principle of separating knowledge bases from inference engines -- an architecture echoed in modern RAG ([DENDRAL History, MIT](https://web.mit.edu/6.034/www/6.s966/dendral-history.pdf))
- XCON at DEC reportedly saved $40M/year in its peak years

**Why it failed:**
- The **knowledge engineering bottleneck**: domain experts couldn't articulate their tacit knowledge in rules, and knowledge engineers couldn't learn the domain fast enough
- Errors came from *misunderstandings between experts and knowledge engineers*, not from the technology itself ([Buchanan-Shortliffe, 1984](https://people.dbmi.columbia.edu/~ehs7001/Buchanan-Shortliffe-1984/Chapter-08.pdf))
- Maintenance was prohibitively expensive -- rule bases became brittle and outdated
- The "knowledge principle" (knowledge is the source of problem-solving power) proved correct, but the extraction method was wrong

**Parallel to today:** LLMs bypass the knowledge engineering bottleneck by learning from data rather than requiring manual rule encoding. But the tacit knowledge problem persists -- AI can process *documented* knowledge but cannot capture what experts know but have never written down.

### First-Wave KM: Technology-Centric (1990s)

**[HIGH CONFIDENCE]** The first corporate KM wave was driven by technology optimism.

**What happened:**
- McKinsey coined "knowledge management" in its modern business sense in 1987
- By the mid-1990s, KM was standard business practice, driven by Lotus Notes, corporate intranets, and document management systems
- Billions invested in KM technology platforms

**Why it disappointed:**
- Organizations treated KM as a technology installation problem rather than a cultural change
- "If we build it, they will share" proved false -- knowledge hoarding was rational behavior when incentives didn't align
- 47% of employees today still don't use their company's knowledge base due to poor content organization -- the same problem that plagued first-wave systems ([Slack, 2026](https://slack.com/blog/productivity/what-is-an-ai-knowledge-base-tools-features-and-best-practices))

**Lesson:** Technology cannot solve a people problem. Organizations that succeed at KM invest more in culture and incentives than in tools.

### Second-Wave KM: People-Centric (2000s)

**What happened:**
- Reaction against technology determinism
- Nonaka's SECI model (socialization, externalization, combination, internalization) became dominant framework
- Focus on communities of practice, storytelling, mentoring, and organizational learning
- The US Army's After Action Reviews and BP's Peer Assists became canonical success stories

**What worked:** The most successful KM initiatives from this era are still primarily social processes with minimal technology ([Bain, 2024](https://bain.com/insights/helping-knowledge-management-be-all-it-can-be)).

**What didn't:** Scaling social processes proved difficult. Communities of practice require sustained investment and often die when executive sponsorship lapses.

### The Semantic Web Detour (2001-2014)

**[HIGH CONFIDENCE]** The Semantic Web's failure offers a cautionary tale about grand visions of structured knowledge.

**The vision:** A universal layer of machine-readable meaning atop the web, enabling automated knowledge discovery and reasoning.

**Why it failed:**
- Relied on obscure, complex XML-based languages (RDF, OWL) that developers avoided
- Ontologies proved costly to develop, impossible to standardize universally, and expensive to maintain
- Required cooperative infrastructure (everyone publishing machine-readable data) that never materialized
- The "Grand Unified Domain Model" assumption -- that one schema could capture all knowledge -- was wrong

**What survived:** Schema.org for SEO and corporate knowledge graphs (Google, Microsoft) are the Semantic Web's tangible legacy ([ACM, 2017](https://dl.acm.org/doi/abs/10.1145/3078714.3078751)).

**Parallel to today:** The Semantic Web's assumption that a single universal structure could organize all knowledge mirrors current expectations that a single LLM can handle all organizational knowledge. Both underestimate the maintenance burden and coordination costs.

### Third-Wave KM: Content Findability (2010s)

Focus shifted to making existing content discoverable through better taxonomy, enterprise search, and content management. More pragmatic than previous waves but limited in ambition.

### Wikipedia: The Anomaly

**[CONTESTED]** Wikipedia's success defied KM orthodoxy:
- Open, not controlled
- Distributed, not centralized
- Self-organizing, not expert-driven
- Volunteer, not compensated
- Yet it produced the largest, most comprehensive, and most frequently updated knowledge resource in human history

This suggests the KM field's core assumptions about requiring expertise, incentives, and control may be fundamentally wrong -- or at least that the right conditions can make those assumptions irrelevant.

Wikipedia is now under threat from AI: it lost 1B+ visits between 2022-2025 as AI search reduced click-through, and ~5% of new articles contain significant AI-generated content ([Scientific American, 2025](https://www.scientificamerican.com/article/at-25-wikipedia-now-faces-its-most-existential-threat-generative-a-i/)).

## The Pattern That Repeats

Every KM generation follows the same arc:

1. **New technology arrives** with genuine capabilities
2. **Evangelists claim** it will finally solve the KM problem
3. **Early adopters report** impressive results (often from vendor-affiliated studies)
4. **Mainstream adoption** encounters organizational, cultural, and maintenance challenges
5. **Disillusionment** as ROI fails to materialize for most organizations
6. **Plateau** where the technology finds a sustainable but narrower role than promised
7. **Next technology arrives**, and the cycle restarts

### The Consistent Failure Rate

**[MEDIUM CONFIDENCE]** Across three technology generations, approximately 70% of KM initiatives fail to deliver their promised value. There is no evidence yet that AI changes this rate:

- 95% of AI pilots fail to deliver measurable business impact ([MIT Sloan](https://mitsmr.com/4qcrj9F))
- 68% of enterprise data remains unanalyzed and inaccessible to AI queries ([IBM](https://elium.com/blog/why-ai-projects-fail-knowledge-foundation/))
- Gartner predicted 30% of GenAI initiatives would be abandoned after proof of concept by end of 2025

## The Tacit Knowledge Wall

**[HIGH CONFIDENCE]** Every KM generation encounters the same fundamental limit: tacit knowledge -- the knowledge people use but cannot articulate.

- Nonaka's SECI model treats tacit-to-explicit conversion as an engineering task, but it's inherently partial and cyclical
- Tacit knowledge is not one extractable entity but an ecology across embodied, relational, and contextual dimensions ([Medium, 2026](https://medium.com/@yusato/tacit-knowledge-is-not-one-thing-and-that-is-why-ai-keeps-missing-it-1c07718293a2))
- Competence is often a property of systems (people + tools + context), not individual minds
- "Polanyi's revenge": the most valuable knowledge is precisely what cannot be told ([CACM](https://cacm.acm.org/opinion/polanyis-revenge-and-ais-new-romance-with-tacit-knowledge/))
- LLMs achieve up to 94.9% recall on simulations -- but simulations test explicit (documented) knowledge, not tacit knowledge

## What History Teaches

1. **Technology alone has never been sufficient.** The constraint is organizational, not technical.
2. **~30% success rate has not improved** across decades. Success requires culture change, not just better tools.
3. **The tacit knowledge problem is structural**, not a gap waiting for the right technology.
4. **The most successful KM approaches are social processes** with minimal technology (AAR, Peer Assists, communities of practice).
5. **Maintenance, not deployment, is the real challenge.** Building a KM system is 20% of the work; keeping it alive is 80%.
6. **Market hype precedes and exceeds demonstrated value** in every cycle.
7. **The exceptions (Wikipedia) suggest radical openness may matter more than sophisticated technology.**

## Is This Time Different?

**Arguments that AI-KM genuinely breaks the pattern:**
- LLMs bypass the knowledge engineering bottleneck that killed expert systems
- Semantic search solves the "findability" problem that plagued every previous wave
- Natural language interfaces eliminate the adoption barrier of complex query languages
- AI can process unstructured content at scale, unlike every previous approach

**Arguments that the pattern will repeat:**
- The organizational and cultural barriers remain identical
- AI adds new failure modes (hallucination, knowledge collapse, verification paradox) that previous technologies didn't have
- Market growth and investment levels match previous hype cycles
- The 95% pilot failure rate is worse than previous KM waves, not better

**Assessment: [MEDIUM CONFIDENCE]** AI-KM is genuinely more capable than previous technology waves, but the historical evidence strongly suggests it will find a narrower, more modest role than current projections assume. The organizational factors that cause KM failure are not technology problems, and AI does not solve them.

## Sources

- [Bloomfire: History of Knowledge Management](https://bloomfire.com/blog/knowledge-management-history/) [B-tier]
- [DKMS: Generations of KM](https://dkms.com/papers/generationsofkm.pdf) [B-tier]
- [DENDRAL History -- MIT](https://web.mit.edu/6.034/www/6.s966/dendral-history.pdf) [A-tier]
- [Buchanan-Shortliffe 1984 -- Columbia](https://people.dbmi.columbia.edu/~ehs7001/Buchanan-Shortliffe-1984/Chapter-08.pdf) [A-tier]
- [ACM: What Happened to the Semantic Web?](https://dl.acm.org/doi/abs/10.1145/3078714.3078751) [A-tier]
- [Bain: Helping KM Be All It Can Be](https://bain.com/insights/helping-knowledge-management-be-all-it-can-be) [B-tier]
- [Springer: Key Milestones in KM Evolution](https://ideas.repec.org/h/spr/kmochp/978-3-031-38696-1_3.html) [A-tier]
- [CACM: Polanyi's Revenge](https://cacm.acm.org/opinion/polanyis-revenge-and-ais-new-romance-with-tacit-knowledge/) [A-tier]
- [Scientific American: Wikipedia's Existential Threat](https://www.scientificamerican.com/article/at-25-wikipedia-now-faces-its-most-existential-threat-generative-a-i/) [B-tier]
