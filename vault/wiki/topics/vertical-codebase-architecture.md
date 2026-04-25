---
id: topic-vertical-codebase-architecture
type: topic
status: active
confidence: medium
source_ids: [src-2026-04-14-001, src-2026-04-14-002]
updated_at: 2026-04-14
---

# Vertical Codebase Architecture

## Summary
Vertical codebase architecture groups code by what it does rather than by technical layer. Across the reviewed sources, this means colocating components, hooks, types, utilities, and other artifacts inside functionality-oriented verticals so that code that changes together also lives together. [src-2026-04-14-001][src-2026-04-14-002]

## Key Ideas
- Horizontal splits such as `components`, `hooks`, `types`, and `utils` create arbitrary buckets that separate logically related code and increase navigation cost. [src-2026-04-14-001]
- A simpler rule of thumb from the second source is that files modified together should be kept together, because that makes cohesion visible and makes whole-feature deletion cleaner. [src-2026-04-14-002]
- Vertical grouping is meant to improve cohesion and reduce coupling by aligning structure with routes, product areas, ownership boundaries, or shared functional units such as a design system. [src-2026-04-14-001]
- Domain-oriented folder trees can still contain internal `components`, `containers`, `hooks`, and `utils`, but those subfolders live inside the domain boundary instead of becoming the top-level organizing principle for the whole codebase. [src-2026-04-14-002]
- Shared code is not an exception to the model; when it is truly shared and coherent, it can become its own vertical with a clear scope. [src-2026-04-14-001]
- Vertical structure is strongest when paired with explicit boundaries such as public interfaces, package exports, or lint rules that prevent deep imports into private implementation code. [src-2026-04-14-001]
- The source explicitly argues that this matters for AI-assisted engineering too, because agents need navigable structure, constraints, and fast feedback loops just like humans do. [src-2026-04-14-001]

## Related
- [[developer-tooling-catalog]]
- [[ai-agent-tooling-from-chat]]
- [[frontend-code-quality-principles]]

## Contradictions
- None noted in the current source set. The main open difficulty is choosing the right vertical boundary for each piece of code, which the source acknowledges is not an exact science. [src-2026-04-14-001]

## Open Questions
- What heuristics make a vertical boundary “good enough” in practice for a growing multi-team codebase?
- When should a shared concept become its own vertical rather than staying inside a route- or domain-specific vertical?
