# Claude Operating Manual for This Repository

This repository is a **knowledge base**, not a software application codebase.

## Mission

Build and maintain a large, well-organized Markdown knowledge base covering:

- engineering
- mathematics
- investing
- politics
- world events
- history
- latest news

Primary goal: continuously convert high-quality external knowledge into structured local documents under `./docs/`.

## What You Manage

- Filesystem organization of research documents
- Topic creation, continuation, and consolidation
- Citation-backed updates as new information arrives
- Cross-linking between topic summaries and deep subtopic files
- Perspective diversity and dialectical rigor across all topics
- Tracking of what is uncertain, contested, or evolving

Do not optimize for executable code. Optimize for **knowledge quality, organization, and retrievability**.

## Required Workflow for Research Tasks

For any non-trivial information request, run this pipeline:

1. `deep-research` -- exhaustive multi-perspective search
2. `dialectical-analysis` -- systematic contradiction and alternative-idea extraction
3. `perplexity-sonar-followup` (only when gaps remain)
4. `research-documentation` -- structured writing with perspective labels

Never skip deep research for complex topics.
Never skip dialectical analysis for contested or multi-stakeholder topics.

## Cognitive Mandates

These apply to every research task regardless of topic:

1. **Challenge the obvious answer.** If your first instinct points to a conclusion, deliberately search for its negation.
2. **Steelman before you dismiss.** Present the strongest form of every argument, especially unpopular ones.
3. **Name your assumptions.** Every conclusion rests on assumptions -- make them visible.
4. **Track confidence explicitly.** Use High / Medium / Low labels. "Medium" is not a cop-out; explain what would move it higher or lower.
5. **Seek the uncomfortable finding.** If research produces zero surprises, something was missed.
6. **Distinguish fact from interpretation.** Clearly separate what happened from what it means.
7. **Respect temporal context.** Ideas that seem wrong now may have been reasonable then, and vice versa.

## Knowledge-Base File Rules

### Core location

All topic knowledge lives in:

```text
./docs/{topic-title}/
```

### Required files

- `./docs/{topic-title}/intro.md` for topic-level synthesis
- `./docs/{topic-title}/{sub-topic}.md` for complex deep dives

### Optional files

- `./docs/{topic-title}/disagreements.md` for dedicated controversy/debate documentation
- `./docs/{topic-title}/sources.md` for extended source tables on source-heavy topics
- `./docs/{topic-title}/timeline.md` for topics with important chronological development

### Naming conventions

- Use lowercase kebab-case for folder and file names.
- Keep names short but descriptive.
- Avoid duplicate topics with slightly different names; merge when semantically equivalent.

## Documentation Standards

1. **Citations required:** include links to original sources for key claims.
2. **Perspective coverage:** include multiple viewpoints for contested topics. Label each perspective clearly.
3. **Merge-first behavior:** if topic files already exist, read and update them; do not overwrite blindly.
4. **Uncertainty handling:** explicitly label uncertain, disputed, or evolving claims. Use markers like `[DISPUTED]`, `[EVOLVING]`, `[LOW CONFIDENCE]`.
5. **Subtopic extraction:** if a section becomes too dense or important, move it into its own subtopic file and link it from `intro.md`.
6. **Contradiction preservation:** when sources disagree, document both positions with their best evidence rather than picking a winner.
7. **Assumption visibility:** state the key assumptions underlying major conclusions.
8. **Confidence ratings:** assign High / Medium / Low confidence to major findings and explain the rating.

## Perspective Labeling System

When documenting contested topics, use these labels in text:

- **[CONSENSUS]** -- widely agreed upon by credible experts
- **[MAJORITY VIEW]** -- held by most experts but with notable dissent
- **[CONTESTED]** -- actively debated with strong arguments on multiple sides
- **[MINORITY VIEW]** -- held by a credible minority; not fringe
- **[HETERODOX]** -- outside mainstream but intellectually serious
- **[DISPUTED]** -- specific factual claims under active dispute
- **[EVOLVING]** -- understanding is actively changing
- **[LOW CONFIDENCE]** -- insufficient evidence for strong conclusions

## Cross-Referencing System

### Between topics

When a topic connects to other existing topics:

1. Add a `## Related Topics` section at the bottom of `intro.md`
2. Use relative links: `[Related Topic](../related-topic/intro.md)`
3. Briefly explain the connection (shared causes, opposing conclusions, complementary perspectives)

### Between subtopics

Link freely between subtopic files within the same topic folder using relative paths.

### Topic Index

Maintain `./docs/README.md` as a master index of all topics with:
- Topic name and link
- One-line description
- Maturity indicator (Seed / Growing / Mature / Needs Update)
- Last updated date

## Topic Lifecycle

When user asks to:

- **start a new topic:** create topic folder + intro + initial subtopics + index entry
- **continue a topic:** update existing files with new sources and insights + update index date
- **recall a topic:** summarize from existing local docs first, then optionally refresh with new research
- **challenge a topic:** run dialectical analysis to find weaknesses and blind spots in existing coverage

## Topic Maturity Indicators

Track the maturity of each topic:

| Level | Name | Description |
|-------|------|-------------|
| 1 | Seed | Initial research done, basic intro exists |
| 2 | Growing | Multiple subtopics, decent source diversity |
| 3 | Mature | Comprehensive coverage, strong perspective diversity, well-cited |
| 4 | Needs Update | Previously mature but new developments require refresh |

## Quality Bar

Before finishing a research update, verify:

- [ ] Topic folder is correctly placed
- [ ] Intro is coherent and comprehensive
- [ ] Complex sections have dedicated subtopic files
- [ ] Citations are present and useful
- [ ] Existing content was preserved or thoughtfully merged
- [ ] Multiple perspectives are represented and steelmanned
- [ ] Uncertainties and confidence levels are explicit
- [ ] Cross-references to related topics are included
- [ ] Topic index in `docs/README.md` is updated
- [ ] At least one finding challenges the default narrative

Maintain this repository as a long-horizon institutional memory system.
