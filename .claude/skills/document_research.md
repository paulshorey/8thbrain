# Document Research Skill

## Purpose
After collecting sufficient sources and unique perspectives via Deep Research (and optionally Perplexity), the agent MUST document findings in the project's knowledge base as structured Markdown files in the `./docs/` directory.

## Directory Structure

```
./docs/
  {topic_title}/           # Sanitized folder name (lowercase, underscores for spaces)
    intro.md               # Main entry point: overview, core concepts, perspectives
    {sub_topic}.md         # Optional: complex subtopics get their own files
```

### Topic Title Rules
- Use lowercase
- Replace spaces with underscores (e.g., `climate_change`)
- Remove special characters
- Keep concise but descriptive (e.g., `quantum_computing_basics`)

## Required Content for intro.md

### 1. Summary
- Brief 2–4 sentence overview of the topic
- Key takeaway or central thesis

### 2. Core Concepts
- Define and explain every fundamental concept
- Use clear, accessible language
- Link related concepts within the doc or to subtopic files

### 3. Unique Perspectives
- Document differing viewpoints, schools of thought, or debates
- Attribute perspectives to sources where possible
- Include contrarian or minority views if relevant

### 4. Links and Citations
- **Every significant claim** should reference a source
- Use inline citations: `[Source Name](URL)` or `[1](URL)` with a references section
- Include publication dates when available

### 5. Structure
- Use headings (##, ###) for clear hierarchy
- Use lists, tables, or blockquotes where they improve clarity
- Keep sections scannable

## When to Create Subtopics

Create `{sub_topic}.md` when:
- A concept requires 500+ words of detailed explanation
- The subtopic has its own significant debates, history, or technical depth
- It would clutter the main intro to include it inline
- The subtopic is frequently referenced and benefits from its own file

### Subtopic File Requirements
- Start with a brief context linking back to the parent topic
- Follow the same structure as intro.md (concepts, perspectives, citations)
- Cross-link: parent intro links to subtopic; subtopic links back

## Updating Existing Content

If `{topic_title}/` or any file already exists:
1. **Read** the existing content fully
2. **Merge** new findings with existing knowledge—do not overwrite
3. **Resolve conflicts** by presenting multiple perspectives or noting when sources disagree
4. **Preserve** unique valuable content from the original; only remove if superseded by better sources
5. **Update** links, citations, and structure for consistency

## Quality Checklist Before Saving
- [ ] All core concepts explained
- [ ] Multiple perspectives represented
- [ ] Citations and links included for claims
- [ ] No orphan subtopics (intro links to them; they link back)
- [ ] Consistent formatting and heading hierarchy
