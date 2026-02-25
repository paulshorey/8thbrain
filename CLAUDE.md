# Claude Code Operating Manual

This repository is a **knowledge base**, not a software codebase. The primary output is structured Markdown prose stored under `./docs/`. When a topic involves code, algorithms, or technical implementations, include working examples directly in the Markdown documents.

## Mission

Continuously convert high-quality external knowledge into structured, citation-backed, multi-perspective documents under `./docs/`. Topics are unrestricted — any subject the user asks about is in scope.

## Operating Modes

Decide which mode to use based on the user's request.

### Deep Research Mode

**Trigger:** The user asks for "deep research", "research [topic]", "all perspectives", "full analysis", or any request that clearly calls for thorough, multi-source investigation.

Follow the full skills pipeline:

```text
User Request → Scope Assessment → deep-research → dialectical-analysis → [perplexity-sonar-followup] → research-documentation → Self-Reflection → Commit
```

- **deep-research** is always required.
- **dialectical-analysis** is required when the topic has meaningful disagreement, competing approaches, or multiple legitimate perspectives.
- **perplexity-sonar-followup** is triggered only when specific gaps remain after the first two phases. If Perplexity is unavailable or fails, skip it and continue — never block the pipeline on this step.
- **research-documentation** converts validated research into the knowledge base.
- **Self-reflection** is the final check: what surprised you, where are you least confident, what would you research next.

### Quick-Write Mode

**Trigger:** The user asks to "add a note", "jot down", "update [topic] with", "log this", or makes a request that is clearly a small addition, correction, or editorial change — not a call for broad research.

Skip the skills pipeline. Instead:

1. Resolve the target topic path (create the folder if new, merge if existing).
2. Read existing files in that topic folder.
3. Write or update the relevant Markdown file(s) directly.
4. Follow the knowledge base file structure, naming rules, and merge-first behavior defined below.
5. Update `docs/README.md` if a new topic was created.
6. Commit.

Quick-write mode still respects documentation standards (citations where possible, confidence ratings on claims, no blind overwrites), but does not require the full query lattice, saturation gates, or dialectical analysis.

### When in doubt

Default to **Deep Research Mode**. It is better to over-research than to add poorly sourced content to the knowledge base.

### Scope Tiers

Assess topic complexity before starting. This controls research depth and prevents runaway sessions.

| Tier | Complexity | Min Sources | Min Queries | Min Alternative Perspectives | Estimated Effort |
|------|-----------|-------------|-------------|------------------------------|------------------|
| Quick | Simple factual, narrow scope | 5 | 6 | 1 | Light |
| Standard | Moderate analysis, some nuance | 12 | 14 | 3 | Medium |
| Deep | Complex, contested, high-stakes | 20+ | 20+ | 5+ | Heavy |

Default to **Standard**. Escalate to **Deep** when the topic is deeply contested, has significant real-world consequences, or resists simple answers. Use **Quick** only for narrow factual lookups.

## Cognitive Mandates

These govern every research task:

1. **Challenge the obvious answer.** If your first instinct points to a conclusion, search for its negation.
2. **Steelman before dismissing.** Present the strongest form of every position, especially unpopular ones.
3. **Name your assumptions.** Every conclusion rests on assumptions — make them visible.
4. **Track confidence explicitly.** Use High / Medium / Low. Explain what would change each rating.
5. **Seek the uncomfortable finding.** Zero surprises means something was missed.
6. **Distinguish fact from interpretation.** Separate what is established from what is inferred.
7. **Respect temporal context.** Ideas that seem wrong now may have been reasonable then, and vice versa.
8. **Prefer primary sources.** Evaluate whether sources are original work or derivative summaries. Prefer original research, data, documentation, and firsthand accounts over commentary.
9. **Reason from first principles.** Decompose complex topics into foundational components before building up to conclusions.
10. **Think by analogy across domains.** When a topic is hard to evaluate directly, look for structurally similar problems in other fields that have been studied more thoroughly.
11. **Prefer mechanisms over correlations.** When possible, explain *why* something happens, not just *that* it happens.

## Perspective Labeling System

Use these inline labels when documenting topics where perspectives differ. Not every topic requires every label — use what fits.

| Label | Meaning |
|-------|---------|
| `[CONSENSUS]` | Widely agreed upon by credible sources in the relevant field |
| `[MAJORITY VIEW]` | Held by most qualified voices but with notable dissent |
| `[CONTESTED]` | Actively debated with strong reasoning on multiple sides |
| `[MINORITY VIEW]` | Held by a credible minority; not fringe |
| `[HETERODOX]` | Outside mainstream but intellectually serious |
| `[DISPUTED]` | Specific claims under active dispute |
| `[EVOLVING]` | Understanding is actively changing |
| `[LOW CONFIDENCE]` | Insufficient evidence for strong conclusions |

## Confidence Ratings

Assign to every major finding:

- **[HIGH CONFIDENCE]** — Multiple independent, high-quality sources agree. Would be surprised if wrong.
- **[MEDIUM CONFIDENCE]** — Supported but with caveats, limited sources, or active debate. State what would move it higher or lower.
- **[LOW CONFIDENCE]** — Preliminary, contested, or poorly sourced. State what evidence is needed.

## Knowledge Base File Structure

### Layout

```text
./docs/{topic-title}/
  intro.md              # Required — topic-level synthesis and navigation
  {sub-topic}.md        # Required when intro becomes too dense
  disagreements.md      # When topic has significant debates
  sources.md            # When source table is large (15+ sources)
  timeline.md           # When chronological development matters
```

### Naming Rules

- Lowercase kebab-case for all folder and file names.
- Short but descriptive.
- No near-duplicate topics — merge semantically equivalent folders. Check `docs/README.md` before creating a new topic.

### Merge-First Behavior

Always read existing topic files before writing. Merge new findings with existing content. Never blindly overwrite. If sources contradict prior content, document both positions and label the conflict.

## Documentation Standards

1. **Citations required.** Link to original sources for key claims. Inline format: `[Title - Author/Org, Date](URL)`.
2. **Perspective coverage.** When multiple viewpoints exist, present and label them. Not every topic is contested — for settled or technical topics, focus on completeness and accuracy instead.
3. **Uncertainty handling.** Mark uncertain, disputed, or evolving claims explicitly.
4. **Subtopic extraction.** If a section exceeds ~500 words of dense material, split it into its own file and link from `intro.md`.
5. **Contradiction preservation.** When sources disagree, document both positions with their best evidence.
6. **Assumption visibility.** State key assumptions underlying major conclusions.
7. **Adaptive structure.** Let the topic dictate the document shape. A technical tutorial, a policy analysis, and a historical overview each need different section structures. Use the intro skeleton as a starting point, not a rigid template.

## Cross-Referencing

- Add a `## Related Topics` section at the bottom of each `intro.md`.
- Use relative links: `[Related Topic](../related-topic/intro.md)`.
- Briefly explain the connection.
- Maintain `./docs/README.md` as the master topic index with name, description, maturity level, and last-updated date.

## Topic Maturity

| Level | Name | Description |
|-------|------|-------------|
| 1 | Seed | Initial research, basic intro exists |
| 2 | Growing | Multiple subtopics, decent source diversity |
| 3 | Mature | Comprehensive coverage, strong perspective diversity, well-cited |
| 4 | Needs Update | Previously mature but stale |

## Topic Lifecycle

- **New topic:** Create folder + intro + initial subtopics + index entry.
- **Continue topic:** Update existing files with new sources and insights. Update index date.
- **Challenge topic:** Run dialectical analysis to find weaknesses and blind spots.
- **Recall topic:** Summarize from existing local docs first, then optionally refresh.

## Context and Session Management

Research can be extensive. To avoid losing work:

1. **Save incrementally.** Write docs to disk after each major phase, not only at the end.
2. **Commit after each research session.** Don't wait until everything is perfect.
3. **Summarize before continuing.** If context is growing large, write a concise summary of findings so far into the topic files before starting new phases.
4. **Prioritize depth over breadth when constrained.** It's better to deeply cover 3 subtopics than to shallowly cover 10.

## Error Recovery

- **Web search fails:** Try alternate query formulations. If search is completely unavailable, document what you can from existing knowledge and flag the topic as `[NEEDS VERIFICATION]`.
- **Perplexity MCP unavailable or fails:** Skip `perplexity-sonar-followup` entirely and proceed to the next pipeline step. Do not retry more than once, do not wait, and do not treat this as a blocking error. The pipeline is designed to produce good output without Perplexity — it is an optional enhancement, not a requirement. Note the gap briefly in the research bundle and move on.
- **Existing files are corrupted or contradictory:** Preserve both versions, label the conflict, and flag for human review.

## Quality Checklist

Before finishing any research update, verify:

- [ ] Topic folder is correctly placed under `./docs/`
- [ ] `intro.md` is coherent, comprehensive, and structured appropriately for the topic
- [ ] Complex sections have dedicated subtopic files
- [ ] Citations are present for key claims
- [ ] Existing content was preserved or thoughtfully merged
- [ ] Alternative perspectives, approaches, or trade-offs are represented where they exist
- [ ] Confidence ratings are assigned to major findings
- [ ] At least one finding challenges or complicates the obvious answer
- [ ] Cross-references to related topics are included
- [ ] `docs/README.md` index is updated
