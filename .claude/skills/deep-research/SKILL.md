---
name: deep-research
description: |
  Perform exhaustive multi-pass web research on any topic before beginning work. This skill should be used ALWAYS when the user asks to research a topic, learn about something, or when any task requires gathering information from external sources. It enforces breadth and depth of research by generating multiple query variations, reframing the topic from different angles, and iterating until an extraordinary volume of unique sources and perspectives has been collected.
---

# Deep Research

Conduct exhaustive, multi-angle web research that prioritizes breadth, depth, and diversity of sources before any synthesis or writing begins.

## When to Activate

This skill is mandatory whenever:

- The user asks to research any topic
- A task requires external knowledge gathering
- New content must be added to the knowledge base
- Existing knowledge base entries need expansion or verification

## Core Workflow

### Phase 1: Query Decomposition

Before issuing a single search, analyze the research topic and decompose it.

1. **Identify the core subject** and its key facets (history, current state, future, controversies, applications, theory)
2. **Extract entities**: people, organizations, technologies, events, locations, concepts
3. **Generate synonyms and related terms** for each entity (technical jargon, colloquial terms, acronyms, alternative spellings)
4. **Map adjacent domains** that intersect with the topic (e.g., for "quantum computing" also consider physics, cryptography, materials science, venture capital, national security)
5. **Identify stakeholder perspectives**: academic, industry, government, consumer, critic, advocate

### Phase 2: Multi-Pass Search Strategy

Execute searches in structured waves, each with a distinct purpose.

#### Wave 1: Broad Orientation (3-5 searches)

Establish the landscape. Use straightforward queries to understand the mainstream narrative.

- Direct topic query: `"{topic}"`
- Overview query: `"{topic}" overview OR introduction OR guide`
- Recent developments: `"{topic}" 2025 OR 2026 latest developments`

#### Wave 2: Reframed Perspectives (5-8 searches)

Rephrase the topic to surface different angles that a single query would miss.

- **Causal framing**: "what causes {topic}" / "effects of {topic}"
- **Comparative framing**: "{topic} vs {alternative}" / "{topic} compared to {competitor}"
- **Problem framing**: "{topic} challenges" / "{topic} limitations" / "{topic} criticism"
- **Stakeholder framing**: "{topic} from {perspective} perspective" (e.g., academic, industry, policy)
- **Historical framing**: "history of {topic}" / "evolution of {topic}" / "origins of {topic}"
- **Future framing**: "future of {topic}" / "{topic} predictions" / "{topic} trends"

#### Wave 3: Deep Dive on Subtopics (5-10 searches)

Based on Waves 1 and 2, identify the most important subtopics and drill down.

- Target specific claims, statistics, or controversies discovered earlier
- Search for primary sources: research papers, official reports, original datasets
- Search for expert opinions: interviews, conference talks, blog posts by domain authorities
- Search for counter-arguments and dissenting views

#### Wave 4: Gap Analysis and Fill (3-5 searches)

Review what you have collected so far. Identify blind spots.

- Are there geographic regions not covered?
- Are there time periods missing?
- Are there stakeholder groups whose perspective is absent?
- Are there technical details that remain vague?
- Search specifically to fill these gaps

### Phase 3: Source Triage

After all search waves, evaluate the collected material.

| Quality Tier | Criteria | Examples |
|---|---|---|
| **A - Primary** | Original research, official documents, peer-reviewed | Academic papers, government reports, RFC documents |
| **B - Authoritative** | Expert analysis, reputable journalism, official blogs | IEEE Spectrum, Nature News, company engineering blogs |
| **C - Supplementary** | General reporting, community discussion, tutorials | Wikipedia, Stack Overflow, Medium articles, Reddit |
| **D - Discard** | Outdated, unverifiable, SEO spam, AI-generated filler | Content farms, undated pages, broken citations |

Retain Tiers A through C. Discard Tier D. Note conflicts between sources explicitly.

### Phase 4: Sufficiency Check

Before proceeding to any synthesis, documentation, or task execution, verify:

- [ ] **Volume**: At least 15-20 unique, substantive sources collected
- [ ] **Breadth**: At least 4 distinct perspectives or angles represented
- [ ] **Depth**: At least 3 sources qualify as Tier A (primary)
- [ ] **Recency**: At least some sources are from the current or prior year
- [ ] **Controversy**: If the topic is contested, both sides are represented
- [ ] **Subtopics**: Every major subtopic identified in Phase 1 has dedicated coverage

If any check fails, return to Phase 2 and issue additional targeted searches.

See [references/search_strategies.md](references/search_strategies.md) for advanced search operator techniques.
See [references/source_evaluation.md](references/source_evaluation.md) for detailed source quality assessment criteria.

## Anti-Patterns

- Issuing a single search query and treating the results as sufficient
- Stopping research after finding one or two good sources
- Only searching the obvious, mainstream phrasing of a topic
- Ignoring dissenting or minority viewpoints
- Treating all sources as equally authoritative
- Proceeding to synthesis before the sufficiency check passes
- Searching only in one language when the topic has international relevance
