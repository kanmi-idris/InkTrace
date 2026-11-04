# Searchata documentation and connection overview

Captured: 2026-11-01
Sources: https://searchata.com/docs and https://searchata.com/docs/connectors
Publisher: Searchata

## Product scope

Searchata documents a read-only connector for Google Search Console and optional Bing Webmaster Tools. It says MCP tools cannot modify websites, change source settings, submit or delete sitemaps, or request indexing. Google Analytics 4 is described as coming soon and is not available through MCP. Searchata says it does not provide competitor analysis.

The docs list search-performance data (clicks, impressions, CTR, and average position), date comparisons, search-opportunity reports, URL inspection, sitemap status, Bing crawl health, PageSpeed lab audits, Chrome UX Report measurements, and saved content guidelines.

## Connection flow

Users connect Google with read-only Search Console approval, optionally connect Bing with read-only Webmaster Tools permission, then connect an AI agent through the remote MCP endpoint `https://searchata.com/mcp` and browser-based OAuth.

The docs say users need an active trial or paid plan before data tools can run. Tool discovery and content-guideline tools are available before the trial. A seven-day trial requires a payment card.

## Evidence limits

These are Searchata's own product and permissions descriptions. I did not connect a Google or Microsoft account or call the MCP service. Pricing details are [src-2026-11-01-013].
