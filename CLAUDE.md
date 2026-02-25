# Claude Code Operating Manual

This repository is a **knowledge base**, not a software codebase. The primary output is structured Markdown prose stored under `./docs/`. When a topic involves code, algorithms, or technical implementations, include working examples directly in the Markdown documents.

## Mission

Continuously convert high-quality external knowledge into comprehensive, citation-backed documents under `./docs/`. Topics are unrestricted — any subject the user asks about is in scope.

**Research style adapts to the topic.** Not every topic has competing perspectives or controversies. The output may be an exhaustive list of facts, a technical deep dive with code examples, a timeline of events, a comparison of approaches, or a multi-perspective analysis of a contested issue. Match the format to what the topic actually requires — not to a fixed template.

## Routing Rules

Choose mode by matching the user's request to triggers. Use exactly one path.

| User Request Pattern | Mode | Action |
|---------------------|------|--------|
| "deep research", "research [topic]", "all perspectives", "full analysis", thorough multi-source investigation | **Deep Research** | Run full pipeline: scope → parallel subagents → combine → dialectical-analysis (if warranted) → research-documentation. See `.claude/ORCHESTRATOR.md`. |
| "add a note", "jot down", "update [topic] with", "log this", small addition/correction/editorial | **Quick-Write** | Skip subagents. Resolve topic path, read existing files, write or update directly. Update index if new topic. Commit. |
| Unclear or ambiguous | **Deep Research** | Default to thorough investigation. Over-research is preferable to poorly sourced content. |

Do not mix modes. Quick-Write never launches subagents. Deep Research always launches all three subagents in parallel.

## Operating Modes

### Deep Research Mode

Follow the subagent orchestration pipeline in `.claude/ORCHESTRATOR.md`:

1. **Scope Assessment** — Determine tier (Quick/Standard/Deep) and topic slug. Pass tier and slug to every subagent.
2. **Launch** — Invoke all three subagents in parallel. Do not wait for one to finish before starting the next. Ignore failures and timeouts.
3. **Combine** — Execute the combine procedure in ORCHESTRATOR.md: collect bundles, deduplicate sources, merge claim-to-source, reconcile conflicts.
4. **Dialectical-Analysis** — Run when topic has meaningful disagreement, competing approaches, or multiple legitimate perspectives. Skip for purely factual, reference, or tutorial topics.
5. **Research-Documentation** — Convert combined research into Markdown under `./docs/{topic}/`.
6. **Self-Reflection** — What surprised you? Where are you least confident? What would you research next?
7. **Commit** — Save and commit the research session.

**Subagents** (launch all three; see `.claude/subagents/` for full instructions):

- **deeper-research** — WebSearch, 20+ queries, term variations
- **perplexity-deep-research** — Perplexity MCP Sonar
- **gemini-deep-research** — Gemini Deep Research MCP or API

Each subagent receives: user topic, topic slug, scope tier (with min sources/queries from Scope Tiers table). Each subagent returns a research bundle. Combine outputs; never block on one provider.

### Quick-Write Mode

1. Resolve the target topic path (create folder if new, merge if existing). Check `docs/README.md` for similar topics.
2. Read all existing files in that topic folder before writing.
3. Write or update the relevant Markdown file(s) directly.
4. Follow knowledge base file structure, naming rules, and merge-first behavior defined below.
5. Update `docs/README.md` if a new topic was created.
6. Commit.

Respect documentation standards: citations where possible, confidence ratings on claims, no blind overwrites. Do not run subagents, dialectical-analysis, or full research-documentation skill.

## Scope Tiers

Apply to Deep Research Mode only. Assess topic complexity before launching subagents. **Pass the tier and its numeric targets to every subagent** so they scale effort accordingly.

| Tier | Complexity | Min Sources | Min Queries | Estimated Effort |
|------|-----------|-------------|-------------|------------------|
| Quick | Simple factual, narrow scope | 5 | 6 | Light |
| Standard | Moderate depth, some nuance | 12 | 14 | Medium |
| Deep | Complex, technical, or contested | 20+ | 20+ | Heavy |

Default to **Standard**. Escalate to **Deep** when the topic is large, deeply technical, or actively contested. Use **Quick** only for narrow, simple factual lookups.

## Cognitive Mandates

These govern every research task:

1. **Don't stop at the first answer.** Look beyond the obvious. For contested topics, search for the negation. For factual topics, look for edge cases, caveats, and common misconceptions. For technical topics, look for limitations, failure modes, and alternatives.
2. **When multiple approaches or positions exist, steelman each.** Present the strongest form of every credible position — especially less popular ones — before comparing them. Skip this for topics where genuine alternatives don't exist.
3. **Name your assumptions.** Every conclusion rests on assumptions — make them visible.
4. **Track confidence explicitly.** Use High / Medium / Low. Explain what would change each rating.
5. **Distinguish fact from interpretation.** Separate what is established from what is inferred.
6. **Respect temporal context.** Ideas that seem wrong now may have been reasonable then, and vice versa.
7. **Prefer primary sources.** Prefer original research, official documentation, specifications, and firsthand accounts over commentary or summaries.
8. **Reason from mechanisms and first principles.** Decompose complex topics into foundational components. Explain *why* something happens, not just *that* it happens.
9. **Think by analogy across domains.** When a topic is hard to evaluate directly, look for structurally similar problems in other fields that have been studied more thoroughly.

### Before You Finish (Cognitive Check)

Before completing any research update, confirm:

- [ ] Depth check — did you go beyond the first obvious answer? Edge cases, caveats, and uncommon details captured?
- [ ] Steelman (if contested) — strongest form of each competing position presented.
- [ ] Assumptions named — key assumptions underlying conclusions are visible.
- [ ] Confidence tagged — every major finding has High/Medium/Low with rationale.
- [ ] Fact vs interpretation distinguished — what is established vs inferred is clear.

## Perspective Labeling System

Use these inline labels when documenting topics where perspectives differ. Not every topic requires every label — use what fits.

| Label | Meaning |
|-------|---------|
| `[CONSENSUS]` | Widely agreed upon by credible sources in the relevant field |
| `[MAJORITY VIEW]` | Held by most qualified voices but with notable dissent |
| `[CONTESTED]` | Actively debated — specific claims or interpretations under dispute with strong reasoning on multiple sides |
| `[MINORITY VIEW]` | Held by a credible minority; not fringe |
| `[HETERODOX]` | Outside mainstream but intellectually serious |
| `[EVOLVING]` | Understanding is actively changing |

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
7. **Adaptive structure.** Let the topic dictate the document shape. A technical tutorial, a policy analysis, and a historical overview each need different section structures. Select from the building blocks in `research-documentation` rather than following a rigid template.

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
| 3 | Mature | Comprehensive coverage, well-cited, depth appropriate to topic type |
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
- **Perplexity or Gemini MCP unavailable or fails:** The perplexity and gemini subagents will fail; the deeper-research subagent (WebSearch) will still run. Proceed with whatever subagent outputs are available. Never block the pipeline on one provider.
- **Existing files are corrupted or contradictory:** Preserve both versions, label the conflict, and flag for human review.

## Quality Checklist

Before finishing any research update, verify:

- [ ] Topic folder is correctly placed under `./docs/`
- [ ] `intro.md` is coherent, comprehensive, and structured appropriately for the topic
- [ ] Complex sections have dedicated subtopic files
- [ ] Citations are present for key claims
- [ ] Existing content was preserved or thoughtfully merged
- [ ] Alternative perspectives, approaches, or trade-offs are represented — where they genuinely exist
- [ ] Confidence ratings are assigned to major findings
- [ ] Cross-references to related topics are included
- [ ] `docs/README.md` index is updated
