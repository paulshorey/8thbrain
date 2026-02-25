# Claude Code Operating Manual

This repository is a **knowledge base**, not a software codebase. The primary output is structured Markdown prose stored under `./docs/`. When a topic involves code, algorithms, or technical implementations, include working examples directly in the Markdown documents.

## Mission

Continuously convert high-quality external knowledge into structured, citation-backed, multi-perspective documents under `./docs/`. Topics are unrestricted — any subject the user asks about is in scope.

## Operating Modes

Select the mode using this decision tree:

1. Is the request a small edit, note, or correction? → **Quick-Write**
2. Does the topic already exist locally and the user wants a summary? → **Recall**
3. Does the request call for new research or investigation? → **Deep Research**

When the mode is ambiguous (e.g., "tell me about X"), check whether the topic exists in `docs/README.md`. If it does and the user hasn't asked for new research, use **Recall**. Otherwise, use **Deep Research**.

### Deep Research Mode

**Trigger:** The user asks for "deep research", "research [topic]", "all perspectives", "full analysis", or any request that calls for new external information that isn't already in the knowledge base.

Follow the subagent orchestration pipeline (see `.claude/ORCHESTRATOR.md`):

1. Scope Assessment — determine tier (Quick/Standard/Deep) and topic slug.
2. Launch subagents in parallel; ignore failures and timeouts.
3. Combine research bundles from successful subagents.
4. If all subagents fail, fall back to direct WebSearch in the main context (see Error Recovery).
5. Optionally run dialectical-analysis when the topic has meaningful disagreement.
6. Run research-documentation to produce structured Markdown.
7. Self-reflection — save to `./docs/{topic}/reflection.md`. Commit.

**Parallel Subagents** (launch all three; ignore failures/timeouts):
1. **deeper-research** — WebSearch, extended queries, term variations (`.claude/subagents/deeper-research/`)
2. **perplexity-deep-research** — Perplexity MCP Sonar model (`.claude/subagents/perplexity-deep-research/`)
3. **gemini-deep-research** — Google Gemini Deep Research MCP or API (`.claude/subagents/gemini-deep-research/`)

Each subagent uses Claude Sonnet. If one fails or times out, proceed with the others. Combine their research bundles into one.

- **dialectical-analysis** is recommended when the topic has meaningful disagreement, competing approaches, or multiple legitimate perspectives. Skip it for purely factual, reference, or tutorial-style topics where no real controversy exists.
- **research-documentation** converts the combined research into the knowledge base.
- **Self-reflection** is the final check: what surprised you, where are you least confident, what would you research next. Save it to `./docs/{topic}/reflection.md` so it can inform future research sessions.

### Recall Mode

**Trigger:** The user asks "what do we know about [topic]", "summarize [topic]", or any request where the answer likely exists in the knowledge base already.

1. Check `docs/README.md` for the topic.
2. If the topic exists, read all files in its folder and synthesize a response.
3. If the topic's maturity is "Needs Update" or sources are older than 12 months, suggest refreshing via Deep Research.
4. If the topic does not exist, inform the user and offer to run Deep Research.

Recall mode does not modify any files unless the user explicitly asks for edits.

### Quick-Write Mode

**Trigger:** The user asks to "add a note", "jot down", "update [topic] with", "log this", or makes a request that is clearly a small addition, correction, or editorial change — not a call for broad research.

Skip the skills pipeline. Instead:

1. Resolve the target topic path (create the folder if new, merge if existing).
2. Read existing files in that topic folder.
3. Write or update the relevant Markdown file(s) directly.
4. Follow the knowledge base file structure, naming rules, and merge-first behavior defined below.
5. Update `docs/README.md` if a new topic was created.
6. Commit.

Quick-write mode still respects documentation standards (citations where possible, confidence ratings on claims, no blind overwrites), but does not require subagents, the query lattice, saturation gates, or dialectical analysis.

### When in doubt

Default to **Recall** if the topic exists, **Deep Research** if it doesn't. It is better to over-research than to add poorly sourced content to the knowledge base.

## Scope Tiers

These apply to Deep Research Mode. Assess topic complexity before starting. This controls research depth and prevents runaway sessions.

| Tier | Complexity | Min Sources | Min Queries | Min Perspectives | Subagents |
|------|-----------|-------------|-------------|------------------|-----------|
| Quick | Simple factual, narrow scope | 5 | 6 | 1 | deeper-research only |
| Standard | Moderate analysis, some nuance | 12 | 14 | 3 | All available |
| Deep | Complex, contested, high-stakes | 20+ | 20+ | 5+ | All available |

**Tier selection criteria:**

- **Quick** — The answer is likely a single fact, definition, or narrow how-to. Little genuine disagreement. Example: "What port does PostgreSQL use by default?"
- **Standard** — The topic has some nuance, multiple approaches, or a meaningful history. Most research requests fall here. Example: "Research container orchestration options."
- **Deep** — The topic is actively contested, has significant real-world consequences, involves policy/ethics, or resists simple answers. Example: "Research the safety implications of autonomous vehicles."

Default to **Standard**. Escalate to **Deep** when the topic is deeply contested, has significant real-world consequences, or resists simple answers. Use **Quick** only for narrow factual lookups.

**Pass the tier to subagents** so they can scale their query count and depth accordingly (see ORCHESTRATOR.md).

## Cognitive Mandates

These govern every research task:

1. **Don't stop at the first answer.** If the topic has depth or nuance, look beyond the obvious conclusion. For contested topics, search for the negation. For factual topics, look for edge cases, caveats, or common misconceptions.
2. **Steelman before dismissing.** When multiple positions exist, present the strongest form of each, especially unpopular ones.
3. **Name your assumptions.** Every conclusion rests on assumptions — make them visible.
4. **Track confidence explicitly.** Use High / Medium / Low. Explain what would change each rating.
5. **Distinguish fact from interpretation.** Separate what is established from what is inferred.
6. **Respect temporal context.** Ideas that seem wrong now may have been reasonable then, and vice versa.
7. **Prefer primary sources.** Evaluate whether sources are original work or derivative summaries. Prefer original research, data, documentation, and firsthand accounts over commentary.
8. **Reason from mechanisms and first principles.** Decompose complex topics into foundational components. Explain *why* something happens, not just *that* it happens.
9. **Think by analogy across domains.** When a topic is hard to evaluate directly, look for structurally similar problems in other fields that have been studied more thoroughly.

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
  reflection.md         # Self-reflection from the most recent research session
  research-bundles/     # Working files from subagents (temporary)
```

**Research bundles** (`research-bundles/`) are intermediate working files produced by subagents. They are useful for auditing and re-processing but are not part of the published knowledge base. Do not link to them from `intro.md`. They may be deleted after the topic reaches "Growing" maturity or higher.

### Naming Rules

- Lowercase kebab-case for all folder and file names.
- Short but descriptive.
- No near-duplicate topics — merge semantically equivalent folders.

### Topic Deduplication

Before creating a new topic folder:

1. Read `docs/README.md` for existing topics.
2. Check for semantic equivalents, not just exact name matches. Examples: "machine-learning" and "ml", "kubernetes" and "k8s", "large-language-models" and "llms".
3. If an existing topic covers 80%+ of the same ground, merge into it. Add a new subtopic file if the new angle is distinct enough.
4. If genuinely different but related, create the new topic and add cross-references in both directions.

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
| 3 | Mature | Comprehensive coverage, strong perspective diversity, well-cited |
| 4 | Needs Update | Previously mature but stale |

**Staleness detection:** A topic should be marked "Needs Update" when:
- Its last-updated date in `docs/README.md` is older than 12 months.
- A user or search result reveals significant new developments not reflected in the docs.
- The topic's `reflection.md` identifies gaps that haven't been addressed.

When encountering a stale topic during Recall mode, note this to the user and suggest refreshing via Deep Research.

## Topic Lifecycle

- **New topic:** Create folder + intro + initial subtopics + index entry.
- **Continue topic:** Update existing files with new sources and insights. Update index date.
- **Challenge topic:** Run dialectical analysis to find weaknesses and blind spots.
- **Recall topic:** Summarize from existing local docs first. If stale, suggest refresh.

## Context and Session Management

Research can be extensive. To avoid losing work:

1. **Save incrementally.** Write docs to disk after each major phase, not only at the end. At minimum, save after: subagent bundles are combined, dialectical analysis completes, and documentation is written.
2. **Commit after each research session.** Don't wait until everything is perfect. Use descriptive commit messages: `docs(topic-slug): add initial research` or `docs(topic-slug): add dialectical analysis`.
3. **Summarize before continuing.** If context is growing large, write a concise summary of findings so far into the topic's `intro.md` before starting new phases. This protects against context loss and helps future sessions pick up where you left off.
4. **Prioritize depth over breadth when constrained.** It's better to deeply cover 3 subtopics than to shallowly cover 10.
5. **Resume gracefully.** When continuing a previous research session, read the topic's existing files first. Check `reflection.md` for notes on what to research next.

## Error Recovery

- **Web search fails:** Try alternate query formulations (rephrase, use synonyms, broaden/narrow). If search is completely unavailable, document what you can from existing knowledge and flag the topic as `[NEEDS VERIFICATION]`.
- **One or two subagents fail:** Proceed with whatever subagent outputs are available. Never block the pipeline on one provider. Note in `reflection.md` which subagents failed so a future session can re-run them.
- **All subagents fail:** Fall back to direct research in the main context. Run 10+ WebSearch queries yourself, covering multiple angles. Proceed with dialectical-analysis and research-documentation as normal. The pipeline must not silently produce empty output.
- **Existing files are corrupted or contradictory:** Preserve both versions, label the conflict, and flag for human review.
- **Topic is too broad:** If the user's request would require Deep-tier effort across multiple distinct subtopics (e.g., "research all of computer science"), narrow the scope. Pick the most relevant subtopic, research it thoroughly, and note the remaining subtopics in `reflection.md` for future sessions.

## Source Quality

Not all sources are equal. When evaluating and citing sources:

| Tier | Type | Examples | Weight |
|------|------|----------|--------|
| 1 | Primary | Original research, official docs, specs, raw data, firsthand accounts | Highest |
| 2 | Peer-reviewed | Academic papers, published standards, systematic reviews | High |
| 3 | Expert analysis | Long-form journalism, technical blogs by domain experts, conference talks | Medium |
| 4 | Secondary | Wikipedia, textbooks, general-audience summaries | Lower (useful for orientation, not for claims) |
| 5 | Unverified | Forum posts, social media, anonymous sources, undated content | Lowest (flag if used) |

**Guidelines:**
- When sources conflict, higher-tier sources take precedence unless there's a strong reason otherwise.
- Flag undated content as `[DATE UNKNOWN]`. Prefer dated sources.
- For paywalled sources, cite them normally but note the access limitation.
- If a claim rests entirely on Tier 4–5 sources, mark it `[LOW CONFIDENCE]` and note the sourcing gap.

## Quality Checklist

Before finishing any research update, verify:

- [ ] Topic folder is correctly placed under `./docs/`
- [ ] `intro.md` is coherent, comprehensive, and structured appropriately for the topic
- [ ] Complex sections have dedicated subtopic files
- [ ] Citations are present for key claims (with Tier 1–3 sources for important claims)
- [ ] Existing content was preserved or thoughtfully merged
- [ ] Alternative perspectives, approaches, or trade-offs are represented where they exist
- [ ] Confidence ratings are assigned to major findings
- [ ] At least one finding challenges or complicates the obvious answer (where the topic permits)
- [ ] Cross-references to related topics are included
- [ ] `docs/README.md` index is updated
- [ ] `reflection.md` captures surprises, low-confidence areas, and next steps
