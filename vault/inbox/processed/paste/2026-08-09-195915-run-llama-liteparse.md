---
title: "run-llama/liteparse"
kind: "paste"
captured_at: "2026-08-09 19:59"
tags: ["github", "liteparse", "pdf", "ocr", "rust", "typescript", "python", "wasm"]
source_url: "https://github.com/run-llama/liteparse"
status: "inbox"
---

# run-llama/liteparse

## Repository overview
LiteParse is a standalone open-source PDF parser focused on fast local parsing. It provides spatial text parsing with bounding boxes and has no proprietary LLM features or cloud dependency.

## Capabilities
- PDFium-based spatial text parsing.
- Built-in Tesseract OCR and optional HTTP OCR servers such as EasyOCR, PaddleOCR, or custom services.
- Complexity detection before full parsing.
- Page screenshots for LLM agents.
- Markdown, JSON, and text output.
- Structured Markdown with headings, tables, lists, images, and links.
- Precise text positioning and bounding boxes.
- Rust, Node.js/TypeScript, Python, and browser WASM interfaces.
- Linux, macOS Intel/ARM, and Windows support.

## Installation
- Node.js: npm i -g @llamaindex/liteparse
- Python: pip install liteparse
- Rust: cargo install liteparse for the CLI or cargo add liteparse for the library.
- Browser: npm i @llamaindex/liteparse-wasm

## CLI examples
- lit parse document.pdf
- lit parse document.pdf --format markdown -o output.md
- lit parse document.pdf --format json -o output.json
- lit parse document.pdf --target-pages "1-5,10,15-20"
- lit parse document.pdf --no-ocr
- lit batch-parse ./input-directory ./output-directory
- lit screenshot document.pdf -o ./screenshots
- lit is-complex document.pdf

## OCR and input support
Tesseract is the default OCR backend. Users can set TESSDATA_PREFIX or --tessdata-path for offline trained data. HTTP OCR servers implement POST /ocr with file and language parameters and return text, bounding boxes, and confidence.

LiteParse can convert Office documents to PDF through LibreOffice. It supports Word, PowerPoint, spreadsheet, and image formats.

## Architecture and license
The repository is a Rust workspace with core, PDFium, Node, Python, and WASM crates or packages. The project is licensed under Apache 2.0 and is built on PDFium, Tesseract, napi-rs, PyO3, and wasm-bindgen. The inspected repository showed release v2.11.1 as the latest release on 2026-08-05.
