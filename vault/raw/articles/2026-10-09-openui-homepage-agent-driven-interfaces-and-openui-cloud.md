---
title: OpenUI homepage: agent-driven interfaces and OpenUI Cloud
kind: article
captured_at: 2026-10-09 19:15
tags: [OpenUI, generative-UI, agent-driven-interfaces, OpenUI-Lang, Gateway, Observability]
source_url: https://www.openui.com/
status: raw
---

# OpenUI homepage: agent-driven interfaces and OpenUI Cloud

## Source scope
The OpenUI homepage describes its open-source framework and its managed Gateway and Observability services. This is a vendor page. Treat product descriptions, usage counts, customer names, and performance claims as OpenUI or Thesys statements.

Related earlier source: `src-2026-07-01-004` covers the OpenUI Lang documentation page. This homepage capture supplements it; it does not replace it.

## Homepage claims
- OpenUI calls itself an open standard and framework for agent-driven interfaces.
- The framework composes charts, forms, cards, tables, and dashboards. It streams UI as the model responds and supports interaction, runtime tool or MCP data queries, and user components.
- The homepage names React, Vue, Svelte, React Native, email, and script tags as rendering targets. It names OpenAI, Anthropic, Gemini, DeepSeek, xAI, and Mistral as model providers; Vercel AI SDK, LangChain, LangGraph, Convex, and Cloudflare as backend options.
- The homepage says the model composes supplied components and does not run arbitrary code. This is the vendor's safety description, not an independent security audit.
- The homepage claims “Renders 3x faster” and “67% fewer tokens” than JSON-based formats. The claim is vendor-produced; the separate benchmark page and its limits are captured in a related source.
- OpenUI Gateway is presented as an optional service that repairs invalid output while streaming, uses existing SDKs and provider credentials, and switches providers during outages.
- OpenUI Observability is presented as user analytics for AI agents, including user drop-off, session replay, and product-analytics insights. The homepage offers early access.

## FAQ statements
- The FAQ recommends starting with the free, open-source OpenUI framework. It recommends Gateway and Observability for production reliability and monitoring.
- The FAQ says OpenUI works with a user's own models, infrastructure, components, and design system. It describes Gateway and Observability as managed services.
- The FAQ says Gateway is not required. Users can call a supported LLM directly. Gateway adds validation, automatic corrections, model routing, and provider fallback through an OpenAI-compatible API.

## Counts shown during capture
The homepage displayed 10,549 GitHub stars and “3 Million+ downloads across all packages.” These are site-displayed, time-sensitive counts. I did not verify them against package registries or GitHub history.
