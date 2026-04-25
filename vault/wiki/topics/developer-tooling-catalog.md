---
id: topic-developer-tooling-catalog
type: topic
status: active
confidence: medium
source_ids: [src-2026-04-12-006, src-2026-04-12-014, src-2026-04-12-024, src-2026-04-12-027, src-2026-04-12-045, src-2026-04-12-047, src-2026-04-12-050, src-2026-04-12-051, src-2026-04-12-056, src-2026-04-13-001, src-2026-04-13-002, src-2026-04-23-002, src-2026-04-25-002]
updated_at: 2026-04-25
---

# Developer Tooling Catalog

## Summary
Outside the strongest AI and React Native clusters, the reviewed links still form a useful secondary catalog: WebView integration patterns, framework ergonomics, localization architecture, programmatic video, UX heuristics, software design patterns, App Store review advice, and a smaller set of product or marketing references. [src-2026-04-12-014][src-2026-04-12-024][src-2026-04-12-027][src-2026-04-12-045][src-2026-04-12-047][src-2026-04-12-050][src-2026-04-12-051][src-2026-04-12-056]

## Key Ideas
- Some reviewed links are implementation-oriented references that can feed future engineering work directly, such as Shopify's Mobile Bridge writeup, Paraglide JS architecture notes, Remotion, ElysiaJS, and Refactoring Guru's design-pattern catalog. [src-2026-04-12-024][src-2026-04-12-045][src-2026-04-12-050][src-2026-04-12-051][src-2026-04-12-056]
- The catalog also includes component-level motion tooling, such as Fancy Components' Gravity documentation, which exposes a Matter.js-based gravity wrapper with concrete positioning, rotation, and shape-sampling configuration. [src-2026-04-13-002]
- The catalog also now includes an audio-creation utility layer through MiniMax Audio, which spans multilingual text-to-speech, voice browsing, voice cloning, downloadable outputs, and music-creation or project-oriented audio workflows. [src-2026-04-13-001]
- A later discussion source adds an operational-risk lens to the Bun or Elysia ecosystem: the DX and performance story is attractive, but the thread repeatedly favors established runtimes for critical infrastructure because of perceived maturity, compatibility, approval, and fallback concerns. [src-2026-04-23-002]
- `metadata-gen` adds a local branding-and-metadata automation layer to the catalog by scanning existing project files for title, colors, and logo assets, then generating OG-image variants plus a full favicon set with a local preview-and-download flow. [src-2026-04-25-002]
- Other links serve as broader design or product heuristics instead of hard technical guidance, including Laws of UX, App Store review guidance, and HubSpot's landing-page prompt asset. [src-2026-04-12-014][src-2026-04-12-027][src-2026-04-12-047]
- The export therefore works as a mixed reference shelf rather than a purely engineering backlog: it holds technical building blocks next to UX and go-to-market material. [src-2026-04-12-006][src-2026-04-12-027][src-2026-04-12-047]

## Related
- [[whatsapp-tools-cheatsheet-import]]
- [[ai-agent-tooling-from-chat]]
- [[bun]]
- [[react-native-and-expo-notes]]
- [[unresolved-whatsapp-links]]

## Contradictions
- The Bun or Elysia material is internally split between ergonomic appeal and perceived runtime risk, but the evidence is discussion-heavy and anecdotal rather than coming from formal incident reports or long-horizon production studies. [src-2026-04-23-002]

## Open Questions
- Should future vault curation split this page into separate engineering, design, and product-reference pages once more durable sources accumulate?
