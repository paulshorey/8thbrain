# Perplexity Sonar Deep Research Follow-Up Skill

## Purpose
When deep research via standard web search does not yield overwhelming, extraordinary amounts of unique information and new perspectives, the agent MUST perform a follow-up search using the **Perplexity AI API** (via MCP server) with the **Sonar** deep research model to supplement findings.

## When to Trigger
Apply this skill when ANY of the following are true after completing the Deep Research protocol:
- Fewer than 5 high-quality, unique sources were found
- Key perspectives (e.g., contrarian, international, academic) are missing
- The topic is complex, contested, or rapidly evolving and standard search yielded shallow results
- Important subtopics remain underexplored or have conflicting information
- The user explicitly asks for "deeper" or "more comprehensive" research

## Required Protocol

### 1. Prepare the Perplexity Query
- Formulate a comprehensive, multi-faceted query that asks Perplexity to synthesize across perspectives
- Include explicit prompts such as: "Compare different viewpoints", "Include international perspectives", "Summarize key debates and controversies", "What do critics say?"
- Optionally run 2–3 different Perplexity queries if the topic has distinct dimensions (e.g., technical, policy, economic)

### 2. Invoke Perplexity MCP
- Use the Perplexity MCP server tool to run a search/query
- Specify use of the **Sonar** or deep-research-capable model when available
- Request detailed, cited responses

### 3. Integrate with Existing Research
- Add Perplexity's findings to your existing research context
- Cross-reference with previously collected sources—note agreements, disagreements, and new information
- Treat Perplexity output as additional source material; cite it appropriately in documentation

### 4. Reassess Completeness
After Perplexity research:
- If still lacking depth on critical subtopics, consider another Perplexity query with a narrowed focus
- Only proceed to documentation when satisfied that research is exhaustive

## MCP Tool Usage
- The Perplexity MCP server should be configured in the project (see README)
- Tool names may vary (e.g., `perplexity_search`, `perplexity_query`, `sonar_search`)—use whatever is exposed by the server
- If the MCP server is not configured or returns errors, document this and proceed with available sources, noting the limitation

## Integration with Other Skills
- This skill runs **after** the Deep Research skill
- Findings feed into the Document Research skill for final markdown documentation
