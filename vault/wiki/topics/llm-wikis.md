---
id: topic-llm-wikis
type: topic
status: active
confidence: high
source_ids: [src-2026-04-12-001]
updated_at: 2026-04-12
---

# LLM Wikis

## Summary
LLM wikis are persistent, agent-maintained markdown knowledge bases that sit between raw sources and query-time answers, allowing knowledge synthesis to accumulate over time. [src-2026-04-12-001]

## Key Ideas
- The system differs from classic RAG by compiling knowledge into durable wiki pages instead of rediscovering it from raw files for each query. [src-2026-04-12-001]
- The wiki should be treated as a maintained artifact that is updated whenever new sources arrive. [src-2026-04-12-001]
- Query answers can be filed back into the wiki when they represent durable analysis. [src-2026-04-12-001]

## Related
- [[retrieval-augmented-generation]]
- [[obsidian]]
- [[llm-wiki-vs-rag]]

## Contradictions
- None noted in the current source set. [src-2026-04-12-001]

## Open Questions
- What guardrails best prevent a persistent wiki from turning one hallucination into a durable false belief?
- [[persistent-error-risk]] collects the current operational risk around durable synthesis mistakes.
