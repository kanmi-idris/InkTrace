---
title: PDFx — Multi-Document PDF Bundler (Open Format + Desktop Viewer)
kind: paste
captured_at: 2026-06-28 06:11
tags: [pdf, open-source, electron, typescript, document-management]
source_url: https://github.com/AlexandrosGounis/pdfx
status: inbox
---

# PDFx — Multi-Document PDF Bundler (Open Format + Desktop Viewer)

PDFx by Alexandros Gounis — an open, backwards-compatible extension of PDF that bundles multiple documents into a single .pdfx file, plus a minimal desktop viewer for macOS and Windows.

Key concept: A .pdfx file is a fully valid PDF — opens anywhere and every page shows in sequence. Open it in PDFx viewer and it splits back into original documents. Plain single PDFs work as-is.

Format: Entire trick is one embedded JSON manifest in metadata (see SPEC.md — short spec).

Viewer: Built with Electron, Vite, TypeScript, React. PDF rendering by pdf.js, assembly by pdf-lib. Drag-and-drop .pdf or .pdfx files anywhere in the window. Each document renders as a horizontal strip of pages, documents stack vertically. Reorder or remove documents, then Export .pdfx to save the whole collection.

Usage: yarn install, yarn dev (development), yarn build:mac / yarn build:win (package).

376 stars, 42 forks. MIT license. No releases published yet.
