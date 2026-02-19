---
name: perplexity-research
description: |
  Leverage the Perplexity AI Sonar API via MCP server to conduct deep follow-up research when standard web searches have not yielded sufficient breadth, depth, or unique perspectives. This skill should be used as a second-stage research amplifier after the deep-research skill's sufficiency check indicates gaps remain, or when a topic demands the synthesis and citation capabilities of Perplexity's deep research models.
---

# Perplexity Research

Use the Perplexity AI MCP server tools as a powerful research amplifier to fill knowledge gaps that standard web search cannot close.

## Prerequisites

The Perplexity MCP server must be configured in the project or user environment. See [references/setup.md](references/setup.md) for installation instructions.

The MCP server exposes four tools:

| Tool | Model | Purpose |
|---|---|---|
| `perplexity_search` | Search API | Direct web search with ranked results and metadata |
| `perplexity_ask` | `sonar-pro` | Quick conversational answers with real-time web grounding |
| `perplexity_research` | `sonar-deep-research` | Comprehensive multi-step research with detailed citations |
| `perplexity_reason` | `sonar-reasoning-pro` | Complex analytical reasoning with chain-of-thought |

## When to Activate

Invoke this skill when **any** of the following are true after completing the deep-research skill workflow:

- The sufficiency check from deep-research has one or more failing criteria
- Fewer than 15 unique substantive sources were found via standard search
- A critical subtopic has zero Tier A (primary) sources
- The topic is highly technical, niche, or rapidly evolving and mainstream search returned shallow results
- The user explicitly requests deeper or more comprehensive research
- Conflicting information was found and authoritative resolution is needed

## Core Workflow

### Step 1: Gap Identification

Before calling any Perplexity tool, explicitly list what is missing from the research so far:

```
Perplexity Research Gaps:
- [ ] Missing perspective: {describe}
- [ ] Thin coverage on subtopic: {describe}
- [ ] No primary sources for claim: {describe}
- [ ] Conflicting data needing resolution: {describe}
- [ ] Geographic/temporal blind spot: {describe}
```

### Step 2: Tool Selection

Choose the appropriate Perplexity tool based on the gap type:

| Gap Type | Recommended Tool | Rationale |
|---|---|---|
| Need broad, current facts quickly | `perplexity_ask` | Fast, grounded in live web data |
| Need exhaustive coverage of a subtopic | `perplexity_research` | Multi-step deep research with citations |
| Need to resolve conflicting claims | `perplexity_reason` | Chain-of-thought analysis weighing evidence |
| Need specific URLs or documents | `perplexity_search` | Direct search results with metadata |

### Step 3: Query Formulation

Craft queries for Perplexity tools that are **specific, contextual, and targeted to the gap**. Do not repeat the same broad queries already used in standard search.

**Effective patterns:**

- "What are the primary peer-reviewed studies on {specific claim} published between {year range}?"
- "Compare and contrast {position A} versus {position B} regarding {topic}, citing specific evidence"
- "What are the most cited criticisms of {theory/technology/policy} and what counter-evidence exists?"
- "Provide a comprehensive technical overview of {niche subtopic} including implementation details and known limitations"

### Step 4: Execute and Integrate

1. Call the selected Perplexity tool with the crafted query
2. Extract new sources, claims, and perspectives from the response
3. Evaluate new sources using the same tier system from deep-research (A/B/C/D)
4. **Merge** new findings into your existing research context — do not replace, always accumulate
5. Update the gap checklist: mark filled gaps, identify any new gaps that emerged

### Step 5: Combined Sufficiency Re-check

After integrating Perplexity results, re-run the deep-research sufficiency check:

- [ ] **Volume**: 15-20+ unique substantive sources (combined from all search methods)
- [ ] **Breadth**: 4+ distinct perspectives represented
- [ ] **Depth**: 3+ Tier A primary sources
- [ ] **Recency**: Current or prior year sources present
- [ ] **Controversy**: Both sides represented if topic is contested
- [ ] **Subtopics**: All major subtopics have dedicated coverage

If the check now passes, proceed to documentation (see the document-research skill).

### Step 6: Escalation (Rare)

If gaps persist even after Perplexity deep research:

- Note the specific gaps as open questions in the documentation
- Flag them as areas requiring human expert consultation
- Do not fabricate information to fill gaps

## Tool-Specific Guidance

### Using `perplexity_research` Effectively

This is the most powerful tool — it triggers Perplexity's multi-step deep research pipeline.

- Provide detailed, paragraph-length prompts for best results
- Include context about what you already know to avoid redundant coverage
- Use `strip_thinking: true` to conserve context tokens when the reasoning trace is not needed
- Results include inline citations — preserve these in your notes

### Using `perplexity_reason` for Analysis

Best for resolving ambiguity or synthesizing conflicting evidence.

- Frame queries as analytical questions, not simple lookups
- Ask it to weigh evidence and identify the strongest arguments
- Useful for "is X true?" verification tasks

### Using `perplexity_ask` for Quick Fills

Best for small, specific factual gaps.

- Keep queries focused on a single fact or claim
- Good for verifying dates, statistics, definitions, and current status

### Using `perplexity_search` for Source Discovery

Best for finding specific documents or URLs.

- Use when you need the actual links, not synthesized answers
- Good for finding the original paper, report, or dataset behind a claim

## Anti-Patterns

- Using Perplexity as the first and only research tool (always do standard search first)
- Issuing vague, broad queries to Perplexity that duplicate work already done
- Trusting Perplexity output without evaluating source quality
- Discarding standard search results in favor of Perplexity results (merge, don't replace)
- Calling `perplexity_research` for simple factual lookups (use `perplexity_ask` instead)
