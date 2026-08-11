---
title: "LiteParse Document Complexity"
kind: "paste"
captured_at: "2026-08-09 19:59"
tags: ["liteparse", "llamaindex", "pdf", "ocr", "document-processing", "complexity-detection"]
source_url: "https://developers.llamaindex.ai/liteparse/guides/complexity/"
status: "inbox"
---

# LiteParse Document Complexity

## Purpose
LiteParse's is_complex check decides whether a document needs OCR or heavier parsing before a full parse.

## Routing uses
- Route documents to cheaper or more expensive parsing and OCR backends.
- Reject or flag documents that a text-only pipeline cannot handle, such as pages that would be empty with --no-ocr.
- Estimate OCR cost by counting pages that need OCR.

## How complexity works
Complexity is computed per page. Each page receives a needs_ocr verdict and reasons. A document is complex when any page needs OCR.

OCR reasons include scanned, no-text, sparse-text, embedded-images, garbled, vector-text, and annotation-text. The reasons list is open-ended and should be treated as data rather than a fixed exhaustive set.

Layout complexity is separate from OCR complexity. Layout reasons include multi-column, table-likely, and dense-graphics. A digital two-column document can be layout-complex without needing OCR.

## CLI
- lit is-complex document.pdf prints per-page JSON to stdout and a human-readable verdict to stderr.
- The command exits non-zero when any page needs OCR.
- Options include --compact, --max-pages, --target-pages, --password, and --quiet.
- --complexity on lit parse adds a complexity object to each page.
- The TypeScript library exposes parser.isComplex(path), with one result per page and reasons for flagged pages.

## Per-page signals
Fields include page_number, needs_ocr, reasons, text_length, text_coverage, has_substantial_images, image_block_count, image_coverage, largest_image_coverage, full_page_image, uncovered_vector_area, is_garbled, page_area, and nested layout signals.
