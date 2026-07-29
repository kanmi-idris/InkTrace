Source: https://github.com/koala73/worldmonitor
Title: World Monitor — Real-time global intelligence dashboard
Author: Elie Habib
Retrieved: 2026-07-21
Stars: 67.2k | Forks: 10.4k | License: AGPL-3.0

---

Real-time global intelligence dashboard — AI-powered news aggregation, geopolitical monitoring, and infrastructure tracking in a unified situational awareness interface.

## Key Capabilities
- **500+ curated news feeds** across 15 categories, AI-synthesized into briefs
- **Dual map engine** — 3D globe (globe.gl) and WebGL flat map (deck.gl) with 56 map layer types
- **Cross-stream correlation** — military, economic, disaster, and escalation signal convergence
- **Country Instability Index (CII)** — server-authoritative CII v8 stress scoring for 31 Tier-1 countries
- **Finance radar** — 29 stock exchanges, commodities, crypto, and 7-signal market composite
- **Local AI** — run everything with Ollama, no API keys required
- **6 site variants** from single codebase (world, tech, finance, commodity, happy, energy)
- **Native desktop app** (Tauri 2) for macOS, Windows, and Linux
- **25 languages** with native-language feeds and RTL support

## Programmatic Access
- MCP server at `worldmonitor.app/mcp` (Streamable HTTP, public tools/list, tools/call via X-WorldMonitor-Key or OAuth)
- REST API at `api.worldmonitor.app` with OpenAPI spec
- CLI via `npx worldmonitor` or `npm install -g worldmonitor`
- SDKs: Python (`worldmonitor-sdk`), Ruby, Go (`github.com/koala73/worldmonitor/sdk/go`)
- Agent discovery: llms.txt, agent-skills manifest, api-catalog

## Tech Stack
- Frontend: Vanilla TypeScript, Vite, globe.gl + Three.js, deck.gl + MapLibre GL
- Desktop: Tauri 2 (Rust) with Node.js sidecar
- AI/ML: Ollama / Groq / OpenRouter, Transformers.js
- API contracts: Protocol Buffers (281 protos, 35 services)
- Deployment: Vercel Edge Functions (60+), Railway relay
- Caching: Redis (Upstash), 3-tier cache, CDN, service worker

## About
- 65+ external providers and APIs across geopolitics, finance, energy, climate, aviation, cyber, military, infrastructure, and news intelligence
- Aggregated through 500+ curated feeds tracked by a freshness monitor covering 35 source groups
- Flight data provided by Wingbits (ADS-B)
- v2.5.23 latest release (Mar 1, 2026)
