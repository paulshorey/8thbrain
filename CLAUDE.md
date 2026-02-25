# Claude Code Operating Manual

This repository is a **knowledge base**, not a software codebase. The primary output is structured Markdown prose stored under `./docs/`. When a topic involves code, algorithms, or technical implementations, include working examples directly in the Markdown documents.

## Instruction Hierarchy (Single Source of Truth)

To prevent instruction drift:

1. `CLAUDE.md` (this file) is the **canonical policy**.
2. `.claude/ORCHESTRATOR.md` defines **execution flow** for Deep Research mode only.
3. `.claude/subagents/*/AGENT.md` define **leaf-agent behavior** only.
4. `.claude/skills/*/SKILL.md` define **post-research transformations** only.

If any file conflicts with this manual, **follow this manual** and update the other file.

## Mission

Continuously convert high-quality external knowledge into structured, citation-backed, multi-perspective documents under `./docs/`. Topics are unrestricted: any subject the user asks about is in scope.

## Deterministic Mode Router

Choose mode in this order:

1. **Recall Mode** if the user asks to summarize what is already in this repository and does not explicitly request fresh external research.
2. **Quick-Write Mode** if the user requests a small addition, correction, editorial update, or note.
3. **Deep Research Mode** for new topics, broad analysis, multi-perspective requests, contested questions, or unclear requests.

Escalation rules:

- If Recall Mode reveals stale/missing coverage and the user asks for refresh, escalate to Deep Research.
- If Quick-Write requires substantial net-new evidence, escalate to Deep Research.
- When uncertain between Quick-Write and Deep Research, choose **Deep Research (Standard tier)**.

## Operating Modes

### Recall Mode

Use local docs first, external web second.

1. Read relevant existing topic files under `./docs/`.
2. Summarize what is known, including confidence and open questions.
3. If user asks to refresh/verify externally, switch to Deep Research.

### Quick-Write Mode

Trigger examples: "add a note", "jot down", "update [topic] with", "log this", targeted corrections.

1. Resolve topic path (merge with existing topic if equivalent).
2. Read existing files in the topic folder before editing.
3. Write/update only the relevant Markdown files.
4. Preserve prior content; never blindly overwrite.
5. Update `docs/README.md` if new topic created or maturity changed.
6. Commit.

Quick-write still requires citations where claims are non-trivial and confidence labels on major claims.

### Deep Research Mode

Trigger examples: "research [topic]", "deep research", "all perspectives", "full analysis", contested or high-stakes requests.

Follow `.claude/ORCHESTRATOR.md`:

1. Scope Assessment: set tier (Quick/Standard/Deep) and topic slug.
2. Launch all three research subagents in parallel; do not serialize.
3. Combine successful bundles using the canonical bundle schema.
4. Run dialectical-analysis when meaningful disagreement exists.
5. Run research-documentation to write/update `./docs/{topic}/`.
6. Add session reflection to `./docs/{topic}/notes.md`.
7. Commit.

Parallel subagents (launch all three, ignore individual failures/timeouts):

1. `deeper-research` (WebSearch + query lattice)
2. `perplexity-deep-research` (Perplexity MCP Sonar)
3. `gemini-deep-research` (Gemini Deep Research MCP or API)

## Scope Tiers and Adaptive Search Budgets

Default to **Standard**.

| Tier | Typical Use | Minimum Sources | Query Budget | Alternative Perspectives |
|------|-------------|-----------------|--------------|--------------------------|
| Quick | Narrow factual lookup | 5 | 6-8 | 1 |
| Standard | Moderate complexity | 12 | 14-18 | 3 |
| Deep | Contested/high-stakes/complex | 20+ | 20-30 | 5+ |

Adaptive stopping rule (prevents busywork):

- Do not stop before meeting tier minimums.
- After minimums are met, stop when **3 consecutive queries** each add minimal novelty (less than 10% new non-duplicate sources and no material new claims).
- If novelty stalls early, run at least one targeted search from a different framing before stopping.

## Canonical Research Bundle Schema (Required)

All research subagents must emit this structure (same headers/order), either to disk or as structured markdown:

```markdown
# Research Bundle

## Metadata
- topic:
- topic_slug:
- generated_at_utc:
- agent_name:
- scope_tier:
- status: success | partial | failed
- limitations:

## Query Ledger
| Query | Intent | New Sources | New Claims |

## Source Table
| Source ID | Title | Author/Org | Date | URL | Class | Quality Notes |

## Major Claims and Evidence
### C1
- Claim:
- Supporting sources:
- Opposing/qualifying sources:
- Confidence: High | Medium | Low
- Rationale:

## Perspective Map
| Perspective | Label | Strongest Argument | Key Evidence | What Would Change It |

## Conflicts and Contradictions

## Gaps and Open Questions

## Suggested Next Searches
```

Path convention when topic slug exists:

- `./docs/{topic-slug}/research-bundles/latest-deeper-research-bundle.md`
- `./docs/{topic-slug}/research-bundles/latest-perplexity-bundle.md`
- `./docs/{topic-slug}/research-bundles/latest-gemini-bundle.md`
- `./docs/{topic-slug}/research-bundles/latest-dialectical-analysis.md` (if used)

## Citation Integrity and Anti-Hallucination Rules

1. **Never fabricate sources, URLs, titles, or dates.**
2. Every non-trivial claim must map to at least one source.
3. Any source not directly verified must be marked `[UNVERIFIED SOURCE]`.
4. If evidence is missing or inaccessible, downgrade confidence and state what is needed.
5. Do not cite secondary commentary when a primary source is reasonably available.

## Evidence-Weight Rubric

Use this rubric when assigning confidence (heuristic, not rigid math):

| Dimension | 0 | 1 | 2 |
|----------|---|---|---|
| Source proximity | tertiary/opinion | secondary summary | primary/original |
| Corroboration | single source | two partly related sources | multiple independent sources |
| Method quality | anecdotal/unclear | mixed quality | robust method/data |
| Recency/temporal fit | stale/misaligned | somewhat dated | current for claim context |
| Domain credibility | unknown/weak | mixed | credible domain authority |

Confidence guidance:

- **[HIGH CONFIDENCE]**: generally requires strong corroboration and no unresolved major contradictions.
- **[MEDIUM CONFIDENCE]**: supported with caveats, partial corroboration, or meaningful disagreement.
- **[LOW CONFIDENCE]**: weak, sparse, preliminary, or highly contested evidence.

## Cognitive Mandates

These govern every research task:

1. **Do not stop at the first answer.** Search for caveats, edge cases, and negations.
2. **Steelman before dismissing.** Present the strongest credible opposing case.
3. **Name assumptions.** Make hidden assumptions explicit.
4. **Separate fact from interpretation.**
5. **Respect temporal context.** Older positions may have been rational then.
6. **Prefer primary sources.**
7. **Reason from mechanisms and first principles.**
8. **Think by analogy across domains** when direct evidence is sparse.

## Perspective Labeling System

Use labels only when they fit the topic:

| Label | Meaning |
|-------|---------|
| `[CONSENSUS]` | Widely agreed among credible sources |
| `[MAJORITY VIEW]` | Held by most qualified voices with notable dissent |
| `[CONTESTED]` | Active, evidence-backed disagreement |
| `[MINORITY VIEW]` | Credible minority position |
| `[HETERODOX]` | Outside mainstream but intellectually serious |
| `[EVOLVING]` | Understanding is actively changing |

## Knowledge Base File Structure

### Layout

```text
./docs/{topic-title}/
  intro.md                 # Required: topic synthesis + navigation
  {sub-topic}.md           # Use when intro section is too dense
  disagreements.md         # Use for meaningful ongoing debates
  timeline.md              # Use when chronology matters
  sources.md               # Use when source table is large (15+)
  notes.md                 # Session reflections, caveats, follow-ups
  research-bundles/        # Intermediate evidence artifacts
```

### Naming Rules

- Lowercase kebab-case for all folder and file names.
- Keep names short but descriptive.
- Do not create near-duplicate topics; check `docs/README.md` first.

### Merge-First Behavior

Always read existing topic files before writing. Merge new findings with existing content. Never blindly overwrite. If sources contradict prior content, preserve both positions and label the conflict.

## Artifact Retention and Reflection Policy

1. Keep `latest-*` research bundle files for reproducibility.
2. Optionally create dated archives for major updates (for example, `2026-02-25-perplexity-bundle.md`).
3. Do not delete bundles that are referenced by current topic docs.
4. Record reflection under `./docs/{topic}/notes.md` with a dated heading:
   - what surprised you
   - where confidence is weakest
   - what to research next
   - likely blind spots

## Cross-Referencing

- Add a `## Related Topics` section near the bottom of each `intro.md`.
- Use relative links: `[Related Topic](../related-topic/intro.md)`.
- Briefly explain each connection.
- Maintain `./docs/README.md` as the master topic index with description, maturity, and last-updated date.

## Topic Maturity

| Level | Name | Description |
|-------|------|-------------|
| 1 | Seed | Initial research, basic intro exists |
| 2 | Growing | Multiple subtopics, decent source diversity |
| 3 | Mature | Comprehensive, well-cited, perspective-rich coverage |
| 4 | Needs Update | Previously strong topic is now stale |

## Topic Lifecycle

- **New topic:** Create folder, intro, initial subtopics, index entry.
- **Continue topic:** Merge new evidence and update index date.
- **Challenge topic:** Run dialectical analysis for blind spots and stress tests.
- **Recall topic:** Summarize local docs first; refresh only when requested.

## Error Recovery and Failure Matrix

| Failure Case | Action |
|-------------|--------|
| One subagent fails/times out | Continue with successful subagents. |
| Two subagents fail | Continue with one, increase uncertainty notes. |
| All three subagents fail | Fallback to direct WebSearch in main context; produce partial output labeled `[NEEDS VERIFICATION]`. |
| WebSearch unavailable | Use local docs + existing knowledge; clearly mark verification gaps. |
| Source inaccessible/paywalled | Mark `[UNVERIFIED SOURCE]` and avoid strong claims from it alone. |
| Existing docs contradictory/corrupted | Preserve conflicting versions, label conflict, add review note. |

## Mode-Specific Acceptance Gates

### Recall Mode completion

- [ ] Relevant local topic files read.
- [ ] Summary distinguishes established facts from interpretation.
- [ ] Open questions and confidence are explicit.

### Quick-Write completion

- [ ] Existing topic files read before edits.
- [ ] Changes merged without dropping prior valuable context.
- [ ] Citations added for non-trivial claims.
- [ ] Confidence labels added for major claims.
- [ ] `docs/README.md` updated when required.

### Deep Research completion

- [ ] Tier selected and justified.
- [ ] Parallel subagents launched (or failure matrix invoked).
- [ ] Canonical bundles produced and combined.
- [ ] Dialectical-analysis run when disagreement is meaningful.
- [ ] `research-documentation` completed.
- [ ] Reflection added to `notes.md`.
- [ ] `docs/README.md` updated.

## Final Quality Checklist

Before finishing any update:

- [ ] Topic folder is under `./docs/`
- [ ] `intro.md` is coherent, navigable, and current
- [ ] Dense sections moved to subtopic files
- [ ] Claims are source-traceable
- [ ] Conflicts are preserved and labeled
- [ ] Perspective labels used when relevant
- [ ] Confidence ratings assigned and justified
- [ ] At least one non-obvious caveat or challenge included (where applicable)
- [ ] Related topics linked
- [ ] Index entry in `docs/README.md` updated
