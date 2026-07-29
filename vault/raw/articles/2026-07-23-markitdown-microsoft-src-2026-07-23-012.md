---
source_id: src-2026-07-23-012
captured_at: 2026-07-23T05:49:00Z
url: "https://github.com/microsoft/markitdown"
status: complete
---

# MarkItDown — Python Tool for Converting Files to Markdown

**Author:** Microsoft AutoGen Team
**License:** MIT
**Stars:** 168,000 | **Forks:** 12,100
**Latest version:** v0.1.6 (May 26, 2026)
**Commits:** 312

"Lightweight Python utility for converting various files to Markdown for use with LLMs and related text analysis pipelines."

## Quick Start

```bash
pip install 'markitdown[all]'
markitdown path-to-file.pdf > document.md
```

```python
from markitdown import MarkItDown

md = MarkItDown()
result = md.convert("test.xlsx")
print(result.text_content)
```

## Philosophy

- Markdown is close to plain text with minimal markup
- LLMs natively "speak" Markdown (trained on vast amounts)
- Markdown is token-efficient
- Output meant for text analysis tools, not human consumption

## CLI Usage

```bash
markitdown path-to-file.pdf -o document.md
cat path-to-file.pdf | markitdown
markitdown path-to-file.pdf --use-cu --cu-endpoint "<endpoint>"
markitdown --list-plugins
markitdown --use-plugins path-to-file.pdf
```

## Azure Content Understanding Integration

Higher-quality conversion with:
- Structured field extraction as YAML front matter
- Multi-modal support (documents, images, audio, video)
- Configurable prebuilt and custom analyzers
- Single API for all modalities
- Billable Azure API calls

## Plugin System

- Disabled by default, enable with `--use-plugins`
- `markitdown-ocr` plugin: LLM Vision OCR for embedded images in PDF/DOCX/PPTX/XLSX
- Search GitHub for `#markitdown-plugin`
