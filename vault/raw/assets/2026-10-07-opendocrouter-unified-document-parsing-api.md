---
title: "OpenDocRouter: unified document-parsing API"
kind: "project capture"
author: "OpenDocRouter / LlamaIndex"
source_url: "https://www.opendocrouter.ai/"
origin_url: "https://t.co/v8PieWWUNV"
related_urls: ["https://www.opendocrouter.ai/models", "https://www.opendocrouter.ai/docs", "https://www.opendocrouter.ai/privacy", "https://www.parsebench.ai/"]
tags: ["document-parsing", "API", "PDF", "OCR", "LLM-routing", "ParseBench", "pricing", "data-retention", "LlamaIndex"]
---

# OpenDocRouter

## Product description
OpenDocRouter presents itself as a unified API for parsing PDFs and images into page-level Markdown. Developers choose a model. Each model has a versioned parsing recipe. The API returns a status and charge for each page. The docs describe Python and TypeScript SDKs.

The docs list public HTTPS URLs and uploads up to 50 MB or 500 pages. Inline files are limited to about 3 MB. Sync requests support up to 50 pages; async requests support up to 500 pages and require `cache: true`.

## Model scores and estimated cost
The Models page shows ParseBench overall scores, token prices, average estimated cost per 1,000 pages, and a maximum per-page charge. It says scores are an unweighted mean of five dimensions and costs use token use across ParseBench documents. Actual documents may cost more or less. Prices are shown as of version `2026-10-06`.

Examples from that page:
- `anthropic/claude-opus-5-5`: overall 84.20; estimated $48.82 per 1,000 pages; maximum $0.784 per page.
- `google/gemini-3-flash`: overall 79.70; estimated $19.67 per 1,000 pages; maximum $0.199 per page.
- `google/gemini-3.8-flash-low`: overall 73.35; estimated $5.91 per 1,000 pages; maximum $0.126 per page.
- `openai/gpt-6-luna`: overall 71.34; estimated $0.80 per 1,000 pages; maximum $0.019 per page.

The site links ParseBench as the benchmark. ParseBench identifies itself as a LlamaIndex project. Treat the scores as vendor-associated benchmark results, not independent validation.

## Billing
The docs say credit is prepaid, with a $25 minimum top-up and a 5% fee on each top-up. Frontier models use provider token prices without markup. Successful pages are charged by token use; failed, cached, and blank pages are free. Before a request runs, the account must cover the maximum possible charge. Unused held credit is released after processing.

## Data handling
The API docs say that without `cache: true`, a synchronous request's Markdown is returned only in the POST response and the document is not stored. With caching, results are encrypted and retained for 24 hours. Uploaded files are deleted after a parse request reads them.

The linked privacy notice is a general LlamaIndex notice, last updated 2024-03-30. It says Customer Content may be used to provide and improve services. The product docs say documents are not stored without caching, but they do not clarify downstream model-provider retention or how the general notice applies to OpenDocRouter. Confirm data handling before sending sensitive documents.

## Evidence limits
I inspected the homepage, Models page, API docs, linked privacy notice, and ParseBench homepage. I did not create an account, send a document, or test billing, parsing, or retention. The models page's benchmark and price estimates are vendor-associated claims.
