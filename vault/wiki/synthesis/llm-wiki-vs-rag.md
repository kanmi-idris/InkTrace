---
id: synthesis-llm-wiki-vs-rag
type: synthesis
status: active
confidence: high
source_ids: [src-2026-04-12-001]
updated_at: 2026-04-12
---

# LLM Wiki vs RAG

## Question
How does the LLM wiki pattern differ from retrieval-augmented generation?

## Answer
The source argues that RAG answers questions by retrieving raw chunks at query time, while an LLM wiki compiles knowledge into durable markdown pages that are updated whenever new sources arrive. [src-2026-04-12-001]

## Evidence Base
- The source explicitly contrasts NotebookLM and file-upload style systems with a persistent wiki that accumulates synthesis over time. [src-2026-04-12-001]
- The source also states that query outputs can themselves be filed back into the wiki, increasing long-term value. [src-2026-04-12-001]

## Tensions
- A persistent wiki increases leverage, but it also creates a risk that incorrect claims become durable and influence future answers. [src-2026-04-12-001]

## Follow-up Questions
- What checks should InkTrace enforce so a synthesized page never outranks its underlying evidence?
