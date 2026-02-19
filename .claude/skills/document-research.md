# Document Research Skill

After completing Deep Research (and optionally Perplexity augmentation), document your findings in this knowledge base. The goal is to create well-organized, cited, and comprehensive markdown files that preserve vast amounts of content for future reference.

## Location Structure

```
./docs/{topic_title}/
├── intro.md           # Main entry point: overview, core concepts, structure
├── {sub_topic_1}.md   # Detailed subtopic (if complex enough)
├── {sub_topic_2}.md   # Another detailed subtopic
└── ...
```

### Topic Title Format
- Use `kebab-case` for folder and file names (e.g., `machine-learning`, `quantum-computing`)
- Make it descriptive and discoverable (e.g., `rust-programming-language` not just `rust`)
- For multi-word topics: `distributed-systems`, `natural-language-processing`

## When to Create Sub-files

Create a separate markdown file for a subtopic when it is:
- **Complex**: Requires 500+ words to explain properly
- **Detailed**: Has multiple sub-concepts, procedures, or variations
- **Important**: Core to understanding the parent topic
- **Standalone**: Could be referenced independently (e.g., "see docs/machine-learning/backpropagation.md")

Examples:
- `docs/machine-learning/intro.md` + `docs/machine-learning/neural-networks.md` + `docs/machine-learning/backpropagation.md`
- `docs/rust/intro.md` + `docs/rust/ownership.md` + `docs/rust/async-await.md`

Keep subtopics in `intro.md` when they're brief (1-2 paragraphs) or purely contextual.

## intro.md Structure

1. **Title & Brief Description** (1-2 sentences)
2. **Core Concepts** — Define and explain each major concept. Link to subtopic files where applicable.
3. **Key Perspectives** — Summarize different viewpoints (academic, practical, critical) you discovered.
4. **History & Evolution** — Brief timeline or context if relevant.
5. **Current State** — What's true today? Recent developments?
6. **Common Misconceptions** — Address myths or oversimplifications.
7. **Related Topics** — Links to other docs/ folders.
8. **Sources & Citations** — Full reference section with links.

### Citation Format

Use inline citations: `[Source Name](URL)` or `[1]` with numbered references at the end.

```markdown
## Sources
1. [Official Documentation - Topic](https://example.com/docs)
2. [Academic Paper: Title](https://arxiv.org/...)
3. [Blog: Author - Post Title](https://blog.example.com/...)
```

Always include the URL. For academic papers, prefer DOI or stable links.

## Merging with Existing Content

**If the topic folder or intro.md already exists:**

1. **Read the existing file(s) first** — Do not overwrite blindly.
2. **Identify gaps** — What does your new research add?
3. **Merge strategically**:
   - Add new sections for uncovered content
   - Enhance existing sections with new perspectives or citations
   - Update outdated information (note what changed)
   - Resolve contradictions by presenting multiple viewpoints when appropriate
4. **Preserve citations** — Keep old citations; add new ones. Avoid duplicate URLs.
5. **Improve structure** — If your research suggests better organization, refactor—but don't lose content.

## Subtopic File Structure

Each `{sub_topic}.md` should:
1. Start with a 1-2 sentence definition
2. Explain the concept in depth
3. Include examples, diagrams (describe in text if needed), or code snippets if relevant
4. Link back to intro: "See [Parent Topic intro](./intro.md)"
5. Include its own citations
6. Link to sibling subtopics when they relate

## Quality Checklist

Before considering documentation complete:
- [ ] Every non-obvious claim has a citation or is clearly attributed
- [ ] Core concepts are defined
- [ ] Multiple perspectives are represented where they exist
- [ ] Links to subtopic files work
- [ ] No broken external links (verify or note if uncertain)
- [ ] Topic title and structure follow the conventions above
- [ ] Existing content was merged, not overwritten

## Markdown Conventions

- Use `##` for main sections, `###` for subsections
- Use bullet lists for multiple items; numbered lists for sequences
- Use **bold** for key terms on first use
- Use `>` for important callouts or warnings
- Keep line length reasonable (80-100 chars) for readability in code editors
- Use consistent heading hierarchy (don't skip levels)

## Continuous Improvement

When you return to expand an existing topic:
1. Re-read intro.md and relevant subtopic files
2. Conduct fresh Deep Research on the specific gap or new angle
3. Merge new findings following the merge rules above
4. Update the "Last updated" or similar marker if you use one
