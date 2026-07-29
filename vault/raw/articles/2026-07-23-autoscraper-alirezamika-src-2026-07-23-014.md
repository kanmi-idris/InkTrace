---
source_id: src-2026-07-23-014
captured_at: 2026-07-23T06:50:00Z
url: "https://github.com/alirezamika/autoscraper"
status: complete
---

# AutoScraper — A Smart, Automatic, Fast and Lightweight Web Scraper for Python

**Author:** Alireza Mika
**License:** MIT
**Stars:** 7,700 | **Forks:** 788 | **Watchers:** 118
**Latest release:** v1.1.14 (Jul 17, 2022)
**Commits:** 147
**Language:** Python (100%)

## Philosophy

AutoScraper learns scraping rules by example rather than requiring the user to write CSS selectors or XPath expressions manually. You give it a URL and a list of sample values you want, and it automatically deduces the extraction pattern, then reuses that pattern on any similar page.

## Quick Start

```python
from autoscraper import AutoScraper

url = 'https://stackoverflow.com/questions/2081586/web-scraping-with-python'

# Provide example data you want to scrape
wanted_list = ["What are metaclasses in Python?"]

scraper = AutoScraper()
result = scraper.build(url, wanted_list)
# Returns all related post titles from the page

# Reuse on any similar page
scraper.get_result_similar('https://stackoverflow.com/questions/606191/convert-bytes-to-a-string')
```

## Usage Modes

- **`get_result_similar`** — returns all elements matching the learned pattern
- **`get_result_exact`** — returns data in the exact order of the wanted list (useful for structured data like price + market cap)
- **`save`/`load`** — persist learned models to disk

## Features

- Automatic rule learning from examples
- Supports text, URLs, and HTML tag values as targets
- Custom requests parameters (proxies, headers)
- Can pass raw HTML instead of URL
- Lightweight: single Python package, no external ML dependencies beyond lxml/bs4

## Key Differentiator

Unlike programmatic scraping frameworks (Scrapy, Crawlee) or AI-agent-driven browsers (browser-use, Firecrawl), AutoScraper uses a rule-inference approach: it analyzes the DOM tree to find the common ancestor pattern that produces the wanted values. This makes it extremely quick to set up for repetitive scraping of similarly-structured pages, but less robust than full frameworks or agent-based approaches for complex workflows.

## Notes

- The project appears dormant (latest release Jul 2022, 147 commits, 1 open issue). It's a mature, stable utility rather than actively developed.
- Cross-reference: sits between Scrapling (adaptive structural relocation) and Scrapy (full framework) on the scraping spectrum.
- The example-based approach is conceptually similar to what LLM-based scrapers do, but without any LLM dependency.
