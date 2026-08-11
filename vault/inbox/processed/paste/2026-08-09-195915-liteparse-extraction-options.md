---
title: "LiteParse Extraction Options"
kind: "paste"
captured_at: "2026-08-09 19:59"
tags: ["liteparse", "llamaindex", "pdf", "extraction", "metadata", "document-processing"]
source_url: "https://developers.llamaindex.ai/liteparse/guides/extraction/"
status: "inbox"
---

# LiteParse Extraction Options

## Purpose
LiteParse keeps its default output small and stable. Extra PDF data is opt-in because each option increases parse time or output size.

## Main options
- extract_images / --extract-images adds an images array with bytes or output paths and image metadata.
- extract_vector_graphics / --extract-vector-graphics adds page vector shapes and lines.
- extract_annotations / --extract-annotations adds comments, highlights, and link targets.
- extract_form_fields / --extract-form-fields adds AcroForm widgets and resolved values.
- extract_structure_tree / --extract-structure-tree adds tagged-PDF logical structure.
- extract_content_bounds / --extract-content-bounds adds the bounding box of actual page content.
- extract_xfa_packets / --extract-xfa-packets adds raw XFA packets.
- extract_text_metadata / --extract-text-metadata adds typography and marked-content metadata to text items.
- include_complexity / --complexity adds per-page complexity data.
- emit_word_boxes is library-only and adds per-word bounding boxes.
- extract_links is enabled by default and can be disabled with --no-links.

## Image handling
image_output_dir requires image extraction. image_mode controls Markdown references and does not itself extract image bytes. Duplicate images can point to a canonical image entry with duplicate_of.

## Library-only options
The documentation lists crop_box, skip_diagonal_text, detect_screenshot_rects, render_form_fields, ocr_failure_fatal, and ocr_hedge_delays_ms as options without CLI flags.

## Example
A TypeScript parser can enable outputFormat: json, extractImages, extractFormFields, extractAnnotations, and extractTextMetadata before parsing a PDF.
