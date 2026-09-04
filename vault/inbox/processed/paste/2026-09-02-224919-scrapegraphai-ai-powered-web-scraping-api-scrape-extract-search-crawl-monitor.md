---
title: "ScrapeGraphAI: AI-Powered Web Scraping API (Scrape, Extract, Search, Crawl, Monitor)"
kind: "paste"
captured_at: "2026-09-02 22:49"
tags: ["scrapegraphai", "web-scraping", "ai-agents", "mcp", "api", "markdown", "structured-data", "python", "javascript", "open-source", "mit"]
source_url: "https://scrapegraphai.com/"
status: "inbox"
---

# ScrapeGraphAI: AI-Powered Web Scraping API (Scrape, Extract, Search, Crawl, Monitor)

## Source overview
ScrapeGraphAI is a hosted API product for turning webpages into structured data using natural-language prompts instead of hand-written CSS selectors or XPath rules. It is built on top of the ScrapeGraphAI/Scrapegraph-ai open-source Python project (MIT licensed; GitHub API metadata checked on 2026-09-02 reports 30,419 stars, 3,025 forks, 14 open issues, and Python as the primary language), which the hosted product's homepage links to as its origin.

## Core API endpoints
Five documented REST endpoints, each called with an SGAI-APIKEY header:
- Scrape: converts a URL into clean Markdown (or other formats), positioned for documentation capture, content migration, or preparing LLM context.
- Extract: takes a URL plus a natural-language prompt and returns structured JSON matching an implied or defined schema, e.g. pulling top stories with title/points/author from a page.
- Search: runs a web search and extracts structured data from the results in one call, with parameters for result count, a location geo-code, and an extraction prompt; positioned for market research, competitor analysis, and trend tracking.
- Crawl: crawls all pages of a given site and returns structured data per page, for site-wide extraction, content audits, or data-pipeline ingestion.
- Monitor: watches a URL on a cron-style interval and calls a webhook when the page's content changes, positioned for price tracking and competitor intelligence.

## Pricing and credit model
ScrapeGraphAI uses a credit-based pricing model with a free tier (500 one-time API credits, 10 requests/minute, 1 monitor, 1 concurrent crawl) plus paid monthly tiers scaling up in credits (10,000 / 100,000 / 750,000 credits per month at increasing price points), rate limits, monitor counts, concurrent crawl limits, and proxy-rotation features, plus a custom/enterprise tier with ad-hoc credits and an SLA. One-time credit top-up packs (never expiring, stacking on top of a subscription) are also offered at three sizes with volume-based per-1,000-credit pricing.

Per-endpoint base credit costs documented on the site: Scrape costs 1 credit for markdown, 2 for a screenshot, or 25 for a 'branding analysis' format, plus a stealth-mode modifier; Extract costs a base of 5 credits plus stealth modifier; Search costs 2 credits per result without a prompt or 5 credits per result with a prompt; Crawl costs a 2-credit startup fee plus the per-page scrape cost for each crawled page; Monitor adds a 5-credit bonus when a change is actually detected on top of the base scrape cost; PDF processing is billed per processed page (1 credit/page) with a documented default cap of 25 pages per request. A separate 'stealth' toggle (anti-bot bypass layered on top of the chosen render mode) adds a flat 5-credit modifier regardless of endpoint; choosing between auto/fast/js render modes does not itself change credit cost. The site states all requests are handled under SOC 2 Type II compliance.

## AI-agent and coding-tool integrations
The product is explicitly positioned around AI-agent and coding-assistant workflows: a Model Context Protocol (MCP) server for connecting Claude, Codex, Gemini, and other MCP-compatible clients directly to live web data; an installable 'skill' package; and a command-line tool (just-scrape) distributed both via a skills registry and as its own open-source GitHub repository. Beyond MCP, the site lists official integrations with a Python SDK (scrapegraph-py on PyPI), a JavaScript SDK (scrapegraph-js on npm), and framework/platform integrations for LangChain, CrewAI, LlamaIndex, Agno, Vercel AI, LiteLLM, Hermes, OpenClaw, Smithery, n8n, Zapier, and Make.

## Positioned use cases
The marketing site lists several named use-case patterns as blog-linked examples rather than separate products: price-monitoring bots against e-commerce sites (Amazon, eBay, Shopify), lead-generation extraction from professional/social profile pages, market-research dashboards aggregating reviews and sentiment across sites, and real-estate listing trackers (Zillow, Redfin, and local sites). These are marketing framings rather than independently verified case studies.

## Positioning versus traditional scraping tools
The site's own comparison table contrasts itself against Scrapy, BeautifulSoup, and Selenium on dimensions including AI-powered extraction, automatic proxy management, JavaScript rendering, and automatic adaptation to site-layout changes; as a vendor-authored comparison table, the specific checkmarks reflect ScrapeGraphAI's own framing of its competitors rather than an independently benchmarked comparison.

## Underlying open-source project
The ScrapeGraphAI/Scrapegraph-ai GitHub repository, described in its own metadata as a 'Python scraper based on AI,' predates and underlies the current hosted V2 API product; the hosted API is described in the site's own blog post history as a 2026-04-24 evolution ('ScrapeGraphAI V2') consolidating scrape, extract, search, crawl, monitor, and related capabilities into one API surface, alongside separate blog posts documenting the CLI (just-scrape, published 2026-05-30) and the MCP server (published 2026-06-26).

## Evidence boundary
The hosted product's marketing site was directly inspected, and the underlying open-source repository's metadata was checked via the GitHub API. No API key was generated, no credits were purchased, and no scrape/extract/search/crawl/monitor request was executed against the live API during this capture. Named use cases, comparison-table claims, and 'zero maintenance' / 'auto-adapts to changes' style claims are the vendor's own marketing framing and have not been independently verified.

## Sources
- https://scrapegraphai.com/
- https://github.com/ScrapeGraphAI/Scrapegraph-ai
- https://github.com/ScrapeGraphAI/scrapegraph-mcp
- https://github.com/ScrapeGraphAI/just-scrape
- https://pypi.org/project/scrapegraph-py/
- https://www.npmjs.com/package/scrapegraph-js
