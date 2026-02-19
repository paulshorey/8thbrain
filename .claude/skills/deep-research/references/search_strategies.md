# Advanced Search Strategies

## Query Construction Techniques

### Operator Usage

- **Exact phrase**: `"quantum entanglement"` forces the exact phrase
- **OR expansion**: `quantum computing OR quantum information` broadens results
- **Exclusion**: `quantum computing -cryptocurrency` removes noise
- **Site scoping**: `site:arxiv.org quantum error correction` targets a repository
- **Filetype targeting**: `filetype:pdf "machine learning" survey 2025` finds papers
- **Recency**: Include year ranges like `2024..2026` or explicit year terms

### Reformulation Patterns

When initial results are thin, systematically transform the query:

| Pattern | Original | Reformulated |
|---|---|---|
| Synonym swap | "artificial intelligence ethics" | "AI alignment moral philosophy" |
| Abstraction | "React server components" | "server-side rendering component architecture" |
| Concretization | "climate change solutions" | "carbon capture direct air technology deployment costs" |
| Negation | "benefits of remote work" | "remote work drawbacks productivity loss" |
| Audience shift | "CRISPR gene editing" | "CRISPR explained for policymakers" |
| Temporal shift | "current state of fusion energy" | "fusion energy milestones timeline breakthroughs" |
| Geographic shift | "universal basic income" | "UBI pilot programs Finland Kenya Stockton results" |

### Multi-Lingual Considerations

For topics with international significance, consider searching with key terms in other relevant languages. Many authoritative sources exist only in their local language. Note language limitations in your research documentation.

## Source Discovery Chains

When you find a valuable source, extract further leads:

1. **Bibliography mining**: Check the references section of academic papers
2. **Author tracking**: Search for other works by the same expert
3. **Institution tracking**: Look at what else the publishing organization has released
4. **Citation tracking**: Search for who has cited the paper (forward references)
5. **Conference proceedings**: If a talk is referenced, find the full proceedings

## Search Tool Selection

- **WebSearch / web_search**: Standard web search for general queries
- **Perplexity MCP tools**: Use when standard search produces insufficient depth (see the perplexity-research skill)
- **Direct URL fetching**: When you know a specific resource exists at a URL

## Diminishing Returns Detection

Stop adding more searches when:

- New results repeat information already collected
- The same sources keep appearing across different query formulations
- You have covered all facets identified in the decomposition phase
- Three consecutive searches yield no new substantive information
