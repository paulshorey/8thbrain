# Perplexity.AI API MCP Server Skill

Use this skill when standard web search and deep research have not yielded **overwhelming and extraordinary** amounts of unique information and diverse perspectives. Perplexity's Sonar model excels at synthesizing across sources and surfacing nuanced viewpoints.

## When to Invoke

Invoke Perplexity MCP **after** completing the Deep Research skill's phases 1-3. Use it when:

### Definite Triggers
- Initial research found fewer than 10-12 quality unique sources
- Key subtopics have thin or conflicting coverage
- The topic has significant recent developments (past year) you couldn't verify
- You need synthesis of academic + industry + critical perspectives
- The topic is highly technical and you need expert-level clarification
- Multiple sources conflict and you need a reasoned synthesis
- You're documenting a rapidly evolving domain (AI, crypto, regulations)

### Strong Recommendations
- The topic is broad or interdisciplinary
- You anticipate the knowledge base entry will be referenced frequently
- The user explicitly requested "comprehensive" or "exhaustive" coverage
- Standard search results feel repetitive or shallow

### When to Skip
- Deep research already yielded 20+ diverse, high-quality sources
- The topic is very narrow and well-covered by your initial search
- Perplexity MCP is unavailable or not configured (proceed with existing research)

## How to Use the Perplexity MCP

1. **Prepare your query**: Craft a focused Perplexity query that:
   - Asks for comprehensive coverage, not just a summary
   - Requests multiple perspectives (pros/cons, academic vs. practical, historical vs. current)
   - Specifies if you need citations and sources
   - Can include: "What are the key controversies?", "What do critics say?", "How has this evolved?"

2. **Query templates** (adapt to your topic):
   - "Comprehensive deep dive on [TOPIC]: key concepts, history, current state, main criticisms, and recent developments. Include diverse viewpoints."
   - "Expert analysis of [TOPIC]: academic consensus, industry practices, common misconceptions, and emerging trends. Cite sources."
   - "Compare and contrast different approaches to [TOPIC]. What do proponents and critics say?"

3. **Call the MCP tool**: Use the configured Perplexity MCP server tool (exact tool name may vary—check your MCP configuration) with your query. Sonar/Pro models are preferred for deep research.

4. **Integrate results**: 
   - Add Perplexity's response to your research context
   - Extract any new sources Perplexity cites—investigate them
   - Note any perspectives or facts you hadn't encountered
   - Merge this with your existing research; do not replace it
   - Perplexity may surface sources you missed—chase those citations

## Post-Perplexity Checklist

- [ ] Did Perplexity add new sources? Record them for citation
- [ ] Did it resolve conflicts between your existing sources?
- [ ] Did it surface recent developments you missed?
- [ ] Are there new subtopics to document separately?
- [ ] Update your research notes with Perplexity's insights before documenting

## Integration with Document Research

When you proceed to the Document Research skill, **cite Perplexity when appropriate** (e.g., "According to Perplexity's synthesis...") and include any original sources Perplexity referenced. Perplexity is a research aid, not a replacement for citing primary sources.

## MCP Configuration Reminder

The human operator must configure the Perplexity MCP server in their Cursor/Claude Code setup. See README.md for setup instructions. If the Perplexity tool is not available, log that you attempted to use it and proceed with existing research—do not block documentation.
