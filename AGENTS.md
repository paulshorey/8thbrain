# Agent Configuration

Knowledge base. Output: structured Markdown under `./docs/`. Include working code examples when the topic involves implementations.

## Repository Layout

- `./docs/` — Knowledge base. Topic folders contain `intro.md` plus optional subtopics, disagreements.md, sources.md.
- `.claude/subagents/` — Three parallel research agents. See `.claude/ORCHESTRATOR.md` for launch logic.
- `.claude/skills/` — dialectical-analysis, research-documentation.
- `CLAUDE.md` — Full operating manual. Read for cognitive mandates and quality checklists.

## Procedures

**Read existing topics:** Check `./docs/README.md` for index. Topic entry: `./docs/{topic-title}/intro.md`.

**Add or update content:**
1. Read `./docs/README.md`. Search for similar folder names. Merge into existing topics when possible.
2. Read all existing files in the target topic folder before writing. Never overwrite blindly.
3. Use kebab-case for folder and file names.
4. Cite sources: `[Title - Author/Org, Date](URL)`.
5. Assign confidence ratings on major claims: [HIGH CONFIDENCE], [MEDIUM CONFIDENCE], [LOW CONFIDENCE].
6. Label perspectives where they differ: [CONSENSUS], [CONTESTED], [MINORITY VIEW].
7. Update `./docs/README.md` with topic name, description, maturity, date.

**File structure per topic:** intro.md (required), {sub-topic}.md (when section exceeds ~500 words), disagreements.md (when significant debates), sources.md (when 15+ sources).

**Prohibited:** Near-duplicate topic folders. Overwriting without reading. One-sided conclusions on contested topics. Omitting sources for significant claims.
