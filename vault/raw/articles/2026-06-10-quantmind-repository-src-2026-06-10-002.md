# QuantMind repository

Captured from the public GitHub repository on 2026-06-10.

Primary URL:
https://github.com/LLMQuant/quant-mind

Additional captured pages:
- README: https://raw.githubusercontent.com/LLMQuant/quant-mind/master/README.md
- Project homepage: http://llmquantdata.com/

Repository metadata captured:
- Full name: `LLMQuant/quant-mind`
- Description: `QuantMind is an intelligent knowledge extraction and retrieval framework for quantitative finance.`
- Default branch: `master`
- Language: Python
- Topics: `data`, `knowledge`, `llm`, `pipeline`, `quantitative-finance`, `quantitative-research`, `workflow`
- Stars at capture: 820
- Forks at capture: 132
- Open issues at capture: 17
- Last pushed at capture: 2026-06-04T05:50:23Z

Top-level repository structure captured:
- `quantmind/`
- `docs/`
- `tests/`
- `scripts/`
- `wiki/`
- `pyproject.toml`
- `AGENTS.md`
- `CLAUDE.md`

README framing captured:

- QuantMind positions itself as an intelligent knowledge extraction and retrieval framework for quantitative finance.
- It aims to ingest papers, news, blogs, reports, and SEC filings into a queryable knowledge base or semantic knowledge graph.
- The architecture is explicitly split into two stages: knowledge extraction and intelligent retrieval.

Architecture details captured:

- Stage 1, Knowledge Extraction:
  - Pull content from source APIs such as arXiv, news feeds, blogs, and search sources.
  - Parse PDFs, HTML, and related formats.
  - Tag content into research areas and topics.
  - Run workflow or agent orchestration with quality control and deduplication.
- Stage 2, Intelligent Retrieval:
  - Convert structured knowledge units into embeddings.
  - Support multiple retrieval modes including DeepResearch, RAG, and Data MCP.

Concrete package details captured from source files:

- The apex layer lives in `quantmind.flows`, exposing `paper_flow`, `batch_run`, and `UnsupportedContentTypeError`.
- `quantmind.magic.resolve_magic_input()` uses an OpenAI Agents SDK resolver agent to map natural-language intent into typed flow input and configuration objects.
- `PaperInput` is a discriminated union over `ArxivIdentifier`, `HttpUrl`, `LocalFilePath`, `RawText`, and `DoiIdentifier`.
- `PaperFlowCfg` includes extraction toggles such as `extract_methodology`, `extract_limitations`, and `asset_class_hint`.
- The knowledge layer defines typed artifacts such as `Paper`, `PaperKnowledgeCard`, `News`, `Earnings`, `Factor`, and `Thesis`, organized around base shapes like flattened, tree, and graph knowledge.
- The preprocess layer surfaces fetchers and formatters such as `fetch_arxiv`, `fetch_url`, `resolve_doi`, `pdf_to_markdown`, and `html_to_markdown`.

Dependency and implementation notes captured from `pyproject.toml`:

- Core dependencies include `openai`, `openai-agents`, `litellm`, `pydantic`, `pymupdf`, `trafilatura`, and optional packages such as `sentence-transformers` and `marker-pdf`.
- The repository encodes architecture constraints with Import Linter and emphasizes typed Pydantic models plus test coverage in pytest.

Interpretive note:

- QuantMind is strongest as a domain-specific research-ingestion framework rather than a full production trading system.
- Its most concrete current implementation surface appears to be paper-centric ingestion with a typed flow API, while the README’s larger quant-knowledge-graph vision and future memory-backed agent workflows are broader than the currently captured implementation.