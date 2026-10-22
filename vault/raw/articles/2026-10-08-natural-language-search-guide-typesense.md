---
title: "Natural Language Search guide | Typesense"
kind: "article capture"
author: "Typesense"
source_url: "https://typesense.org/docs/guide/natural-language-search.html"
tags: ["Typesense", "natural-language-search", "LLM", "search", "query-parsing"]
---

# Natural Language Search guide

## Core behavior
Typesense describes natural-language search as converting a user's free-form query into a structured Typesense search query. The documented outputs include `filter_by`, `sort_by`, and `q`. The search request then runs against a Typesense collection.

The current guide says built-in natural-language search is available in Typesense v29.0 and later. It requires LLM API keys. The guide's example uses Gemini. It warns that LLMs can misunderstand a query or return invalid Typesense syntax, and recommends prompt refinement or fallback handling.

## Evidence limits
The guide documents the feature and its setup. It does not establish that every natural-language query will produce correct filters or sorting. The user's BMW example is not the exact example shown in this guide. I did not run the demo or test the query.

Last updated on the guide page: 2026-07-30.
