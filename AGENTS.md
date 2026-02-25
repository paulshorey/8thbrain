# Agent Configuration

**Objective:** Maintain a knowledge base. Output: structured Markdown under `./docs/`. Include working code examples when topics involve implementations. Research spans all types — factual, technical, reference, contested, implementation plans.

## Routing

- **Deep research** (research [topic], find many examples, implementation plan, full analysis) → CLAUDE.md Deep Research Mode → `.claude/ORCHESTRATOR.md` pipeline.
- **Quick-write** (add a note, update [topic] with) → CLAUDE.md Quick-Write Mode. Skip subagents and skills.

## Repository Layout

- `./docs/` — Knowledge base. Topic folders: intro.md (required), optional subtopics. disagreements.md and sources.md when topic warrants.
- `./docs/README.md` — Topic index. Check before creating or updating topics.
- `.claude/ORCHESTRATOR.md` — Pipeline, combine procedure, subagent launch logic.
- `.claude/subagents/` — Three parallel research agents. Read `AGENT.md` in each folder for full instructions.
- `.claude/skills/` — dialectical-analysis, research-documentation. Read `SKILL.md` in each folder for full instructions.
- `.claude/README.md` — Explains file roles. README files are indexes; AGENT.md and SKILL.md hold procedural details.
- `CLAUDE.md` — Full operating manual. Cognitive mandates, quality checklist, scope tiers.

## Procedures

**Read existing topics:** Check `./docs/README.md` for index. Topic entry: `./docs/{topic-title}/intro.md`.

**Add or update content:**
1. Read `./docs/README.md`. Search for similar folder names. Merge into existing topics when possible.
2. Read all existing files in the target topic folder before writing. Never overwrite blindly.
3. Use kebab-case for folder and file names.
4. Cite sources: `[Title - Author/Org, Date](URL)`.
5. Assign confidence ratings: [HIGH CONFIDENCE], [MEDIUM CONFIDENCE], [LOW CONFIDENCE].
6. Label perspectives only when topic has debate: [CONSENSUS], [CONTESTED], [MINORITY VIEW]. Omit for factual/technical topics.
7. Update `./docs/README.md` with topic name, description, maturity, date.

**File structure per topic:** Adaptive. intro.md required. {sub-topic}.md when section exceeds ~500 words. disagreements.md only when significant debates exist. sources.md when 15+ sources.

## Prohibited

Near-duplicate topic folders. Overwriting without reading. One-sided conclusions on contested topics. Omitting sources for significant claims. Forcing perspective labels or disagreements onto factual/technical topics.
