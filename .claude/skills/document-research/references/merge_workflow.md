# Merge Workflow for Existing Topics

## Overview

When new research is conducted on a topic that already exists in the knowledge base, the new findings must be merged into the existing documentation rather than replacing it. This ensures the knowledge base grows monotonically in information density.

## Pre-Merge Checklist

Before writing anything:

1. **Read every file** in the existing topic folder (`intro.md`, subtopic files, `sources.md`)
2. **Inventory existing content**: list sections, claims, sources, and subtopics already covered
3. **Inventory new findings**: list what the new research adds that is genuinely new
4. **Identify overlaps**: where does new research confirm, contradict, or extend existing content?
5. **Plan the merge**: decide what gets added, what gets updated, and what conflicts need flagging

## Merge Operations

### Adding New Information

When the new research covers something not in the existing files:

- **New subtopic**: Create a new subtopic file if it meets the threshold (see SKILL.md). Add a link to it from `intro.md` in the Subtopics section.
- **New section within an existing file**: Add the section in the logical position within the document's hierarchy.
- **New sources**: Append to `sources.md` in the appropriate tier section.

### Updating Existing Information

When new research provides more current or detailed information:

- **More recent data**: Update the figure and change the citation. Add a note: "Previously reported as {old figure} ([old source](url)); updated to {new figure} based on [new source](url)."
- **Deeper explanation**: Expand the existing section. Do not remove the original text unless it is factually incorrect.
- **New citations for existing claims**: Add the new citation alongside the existing one.

### Handling Contradictions

When new research contradicts existing content:

- **Do not silently overwrite** the existing claim
- Add the new finding with its citation
- Explicitly note the contradiction:

```markdown
> **Note**: Earlier sources reported {X} ([Source A](url)), but more recent research
> indicates {Y} ([Source B](url)). The discrepancy may be due to {reason if known}.
```

- If the contradiction is resolved (newer, higher-quality source clearly supersedes), note this and update the primary claim while preserving the historical note.

### Source Deduplication

When merging `sources.md`:

- Check for duplicate URLs before adding
- If the same source appears in both old and new research, keep it once with the higher tier rating
- If a source was previously Tier C but new evaluation shows it should be Tier B, upgrade it

## Post-Merge Checklist

After completing the merge:

- [ ] "Last updated" date is current in all modified files
- [ ] Source count in `intro.md` header is accurate
- [ ] No duplicate entries in `sources.md`
- [ ] All new subtopic files are linked from `intro.md`
- [ ] Contradictions are explicitly flagged, not silently resolved
- [ ] No existing citations were removed
- [ ] The file reads coherently as a whole (not like patched fragments)
