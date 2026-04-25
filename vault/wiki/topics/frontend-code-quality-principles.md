---
id: topic-frontend-code-quality-principles
type: topic
status: active
confidence: medium
source_ids: [src-2026-04-14-003, src-2026-04-14-004, src-2026-04-14-005]
updated_at: 2026-04-14
---

# Frontend Code Quality Principles

## Summary
In the reviewed source, frontend code quality is defined primarily as ease of modification. The proposed framework evaluates that quality across four lenses: readability, predictability, cohesion, and coupling. [src-2026-04-14-003]

## Key Ideas
- Readability is about limiting the amount of context the reader must keep in mind at once, which can require splitting mutually exclusive branches, abstracting detail, simplifying top-to-bottom flow, naming non-trivial conditions or magic numbers so intent is visible, and reducing eye movement across indirection layers or nested expressions. [src-2026-04-14-003][src-2026-04-14-004][src-2026-04-14-005]
- Predictability is about making behavior inferable from names, inputs, and outputs, so that a teammate can anticipate what a function or component does before reading every implementation detail. [src-2026-04-14-003]
- Cohesion is about ensuring that code which must change together is also structured together, whether in the same component boundary, hook boundary, or directory boundary. [src-2026-04-14-003]
- Coupling is about minimizing the surface area affected by a change, which can justify narrower responsibilities, less global state entanglement, and even selective duplication. [src-2026-04-14-003]
- The source explicitly warns that these values can conflict, especially readability versus cohesion and cohesion versus duplication, so design decisions should be driven by long-term modifiability rather than by one absolute rule. [src-2026-04-14-003]
- The readability guidance becomes more concrete in the second source: introduce names when logic is complex, reusable, or worth testing, but avoid ceremony when the logic is already obvious and one-off. [src-2026-04-14-004]
- The third readability source adds another heuristic: prefer code that can be followed top-to-bottom with minimal jumping, which can justify exposing simple conditions directly, simplifying ternaries, and ordering comparisons more naturally. [src-2026-04-14-005]

## Related
- [[vertical-codebase-architecture]]
- [[developer-tooling-catalog]]

## Contradictions
- None noted in the current source set. The main tension is internal to the framework itself: improvements in one dimension can worsen another, so tradeoffs are expected rather than exceptional. [src-2026-04-14-003]

## Open Questions
- What heuristics are most useful for deciding when to favor readability over cohesion in a real codebase?
- When is selective duplication actually the best way to reduce coupling without creating long-term drift?
