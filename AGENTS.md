# Agent Configuration

**Objective:** Maintain a knowledge base. Output: structured Markdown under `./docs/`. Include working code examples when topics involve implementations.

## Routing

- **Deep research** (research [topic], all perspectives, full analysis) → CLAUDE.md Deep Research Mode → `.claude/ORCHESTRATOR.md` pipeline.
- **Quick-write** (add a note, update [topic] with) → CLAUDE.md Quick-Write Mode. Skip subagents and skills.

## Repository Layout

- `./docs/` — Knowledge base. Topic folders: `intro.md`, optional subtopics, disagreements.md, sources.md.
- `./docs/README.md` — Topic index. Check before creating or updating topics.
- `.claude/ORCHESTRATOR.md` — Pipeline, combine procedure, subagent launch logic.
- `.claude/subagents/` — Three parallel research agents. Read `AGENT.md` in each folder.
- `.claude/skills/` — dialectical-analysis, research-documentation. Read `SKILL.md` in each folder.
- `CLAUDE.md` — Full operating manual. Cognitive mandates, quality checklist, scope tiers.

## Procedures

**Read existing topics:** Check `./docs/README.md` for index. Topic entry: `./docs/{topic-title}/intro.md`.

**Add or update content:**
1. Read `./docs/README.md`. Search for similar folder names. Merge into existing topics when possible.
2. Read all existing files in the target topic folder before writing. Never overwrite blindly.
3. Use kebab-case for folder and file names.
4. Cite sources: `[Title - Author/Org, Date](URL)`.
5. Assign confidence ratings: [HIGH CONFIDENCE], [MEDIUM CONFIDENCE], [LOW CONFIDENCE].
6. Label perspectives: [CONSENSUS], [CONTESTED], [MINORITY VIEW].
7. Update `./docs/README.md` with topic name, description, maturity, date.

**File structure per topic:** intro.md (required), {sub-topic}.md (when section exceeds ~500 words), disagreements.md (when significant debates), sources.md (when 15+ sources).

## Prohibited

Near-duplicate topic folders. Overwriting without reading. One-sided conclusions on contested topics. Omitting sources for significant claims.
