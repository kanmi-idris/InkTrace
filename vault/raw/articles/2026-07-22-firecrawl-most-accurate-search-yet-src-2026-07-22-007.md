Source: https://www.firecrawl.dev/blog/introducing-our-most-accurate-search-yet
Title: Introducing our most accurate search yet
Author: Eric Ciarla (Cofounder, Firecrawl)
Published: 2026-07-22
Source ID: src-2026-07-22-007

---

Firecrawl shipped a major upgrade to /search: a new custom relevance model that returns the excerpts that best answer your query from each result.

## Key improvements

- **Custom relevance model** scores every paragraph, list, and table against the query, then surfaces the most relevant excerpts wherever they appear on the page.
- **94.7% on SimpleQA** — state-of-the-art accuracy, higher than any other provider tested (OpenAI's factuality benchmark, 4,326 questions).
- **10x fewer tokens** than processing full pages — more context window available for reasoning, cheaper and faster downstream calls.
- **Zero code changes** — existing /search calls automatically return more relevant context. Full-page Markdown still available if needed.

## Evaluation methodology

- Agent: GPT-5.4 with high reasoning effort, up to 20 tool calls
- Tools: search_web (backed by provider under test) + web_fetch (provider's extract API)
- Baseline: GPT-5.4 with no search tools scores 43.8%
- Compared against: Firecrawl Scrape, Parallel Extract, Exa Contents, Claude native search (Sonnet 4.6 with Anthropic server-side web search)
- 4,326 questions across two sessions per provider, best score selected
- Judge: GPT-5.4 with the official SimpleQA grader prompt

## Use cases

- Multi-step agent search (lean context across long chains)
- RAG and LLM grounding (relevant excerpts directly in prompts)
- Lead enrichment (titles, revenue, hiring signals)
- Research and market intelligence (specific claims, figures, quotes)

## Availability

Live for every Firecrawl user — API, SDKs, CLI, and MCP. No configuration changes needed.
