---
title: "Santiago on X: Searching 32 million records in 30 milliseconds"
kind: "social post capture"
author: "Santiago (@svpino)"
source_url: "https://x.com/svpino/status/1936019528779206879"
related_urls: ["https://github.com/typesense/typesense", "https://songs-search.typesense.org/", "https://typesense.org/docs/overview/benchmarks.html", "https://typesense.org/docs/guide/natural-language-search.html"]
tags: ["Typesense", "search", "sponsored-post", "benchmark-claim", "natural-language-search"]
---

# Santiago's Typesense post

## Post evidence
The inspected X post is by Santiago (@svpino), dated June 20, 2025. It says: “Searching 32 million records in 30 milliseconds is insane!” It describes Typesense as a fast, open-source search engine and lists fuzzy, vector, semantic, and geo search. The post explicitly says Typesense sponsored it. It has a 2 minute 38 second video. I did not play or analyze the video.

The X post links to a Typesense GitHub repository through a short link. The link supplied by the user also resolves to the Typesense repository. The post does not include the natural-language-search paragraph in the text inspected. The user's pasted copy includes that additional section.

## Related official evidence
The live demo identifies itself as instant search over 32 million songs. Its About panel says the data comes from MusicBrainz, the app is hosted on DigitalOcean App Platform, and the search backend is a geo-distributed three-node Typesense Cloud cluster, with nodes in Oregon, Frankfurt, and Mumbai. The demo page does not state a 30 ms benchmark or the conditions for that number.

The current Typesense benchmark page reports:
- 28 million books: 28 ms average processing time at 46 queries per second on a 4-vCPU server.
- 2.2 million recipes: 11 ms average processing time at 104 queries per second on a 4-vCPU server.
- 3 million products: 250 concurrent queries per second on an 8-vCPU, three-node cluster.

I did not find a current official benchmark result for 32 million songs at exactly 30 ms. The 30 ms figure remains a sponsored-post claim, not a result I reproduced. Search latency depends on the workload and deployment conditions.

## Natural-language search copy
The user's pasted text also describes converting a natural-language car query into structured filters and sorting. Typesense's current guide documents natural-language search as LLM-based conversion into `filter_by`, `sort_by`, and `q` parameters. The guide says built-in natural-language search is available from v29.0 and requires LLM API keys. It warns that an LLM can misunderstand a query or produce invalid search syntax. See the related Typesense guide and source record.

## Related InkTrace records
- Typesense repository: `src-2026-05-18-004`.
- Earlier Typesense natural-language-search documentation: `src-2026-04-12-030`.
