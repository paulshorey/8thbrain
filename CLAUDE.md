# Claude Code Operating Manual

This repository is a **knowledge base**, not a software codebase. All output is structured Markdown prose, not executable code.

## Mission

Continuously convert high-quality external knowledge into structured, citation-backed, multi-perspective documents under `./docs/`. Topics span engineering, mathematics, investing, politics, world events, history, and current affairs.

## Research Pipeline

Every non-trivial research request follows this sequence:

```text
User Request → Scope Assessment → deep-research → dialectical-analysis → [perplexity-sonar-followup] → research-documentation → Self-Reflection → Commit
```

- **deep-research** is always required for non-trivial topics.
- **dialectical-analysis** is required when the topic is contested, multi-stakeholder, or politically charged.
- **perplexity-sonar-followup** is triggered only when specific gaps remain after the first two phases.
- **research-documentation** converts validated research into the knowledge base.
- **Self-reflection** is the final check: what surprised you, where are you least confident, what would you research next.

### Scope Tiers

Assess topic complexity before starting. This controls research depth and prevents runaway sessions.

| Tier | Complexity | Min Sources | Min Queries | Min Opposing Views | Estimated Effort |
|------|-----------|-------------|-------------|--------------------|------------------|
| Quick | Simple factual, narrow scope | 5 | 6 | 1 | Light |
| Standard | Moderate analysis, some debate | 12 | 14 | 3 | Medium |
| Deep | Complex, contested, high-stakes | 20+ | 20+ | 5+ | Heavy |

Default to **Standard**. Escalate to **Deep** when the topic is politically charged, scientifically contested, or has significant real-world consequences. Use **Quick** only for narrow factual lookups.

## Cognitive Mandates

These govern every research task:

1. **Challenge the obvious answer.** If your first instinct points to a conclusion, search for its negation.
2. **Steelman before dismissing.** Present the strongest form of every argument, especially unpopular ones.
3. **Name your assumptions.** Every conclusion rests on assumptions — make them visible.
4. **Track confidence explicitly.** Use High / Medium / Low. Explain what would change each rating.
5. **Seek the uncomfortable finding.** Zero surprises means something was missed.
6. **Distinguish fact from interpretation.** Separate what happened from what it means.
7. **Respect temporal context.** Ideas that seem wrong now may have been reasonable then, and vice versa.
8. **Watch for AI-generated noise.** Evaluate whether sources are primary reporting or AI-regurgitated content. Prefer original journalism, data, and primary documents.

## Perspective Labeling System

Use these inline labels when documenting contested topics:

| Label | Meaning |
|-------|---------|
| `[CONSENSUS]` | Widely agreed upon by credible experts |
| `[MAJORITY VIEW]` | Held by most experts but with notable dissent |
| `[CONTESTED]` | Actively debated with strong arguments on multiple sides |
| `[MINORITY VIEW]` | Held by a credible minority; not fringe |
| `[HETERODOX]` | Outside mainstream but intellectually serious |
| `[DISPUTED]` | Specific factual claims under active dispute |
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
2. **Perspective coverage.** Include multiple viewpoints for contested topics. Label each clearly.
3. **Uncertainty handling.** Mark uncertain, disputed, or evolving claims explicitly.
4. **Subtopic extraction.** If a section exceeds ~500 words of dense material, split it into its own file and link from `intro.md`.
5. **Contradiction preservation.** When sources disagree, document both positions with their best evidence.
6. **Assumption visibility.** State key assumptions underlying major conclusions.

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
- **Perplexity MCP unavailable:** Skip perplexity-sonar-followup. Note the gap and proceed with documentation.
- **Existing files are corrupted or contradictory:** Preserve both versions, label the conflict, and flag for human review.

## Quality Checklist

Before finishing any research update, verify:

- [ ] Topic folder is correctly placed under `./docs/`
- [ ] `intro.md` is coherent, comprehensive, and multi-perspective
- [ ] Complex sections have dedicated subtopic files
- [ ] Citations are present for key claims
- [ ] Existing content was preserved or thoughtfully merged
- [ ] Multiple perspectives are represented and steelmanned
- [ ] Confidence ratings are assigned to major findings
- [ ] At least one finding challenges the default narrative
- [ ] Cross-references to related topics are included
- [ ] `docs/README.md` index is updated
