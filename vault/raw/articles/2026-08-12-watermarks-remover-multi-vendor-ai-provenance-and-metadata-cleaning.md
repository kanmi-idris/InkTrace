---
title: "watermarks-remover: Multi-Vendor AI Provenance and Metadata Cleaning"
kind: "paste"
captured_at: "2026-08-12 22:51"
tags: ["github", "python", "ai-provenance", "watermarks", "c2pa", "synthid", "unicode", "metadata", "docx", "pdf", "html", "privacy"]
source_url: "https://github.com/guillaumemeyer/watermarks-remover"
status: "inbox"
---

# watermarks-remover: Multi-Vendor AI Provenance and Metadata Cleaning

## Source overview
watermarks-remover is an MIT-licensed Python agent skill and standard-library-first toolset for cleaning AI provenance marks from content owned by the user. The repository's latest release shown on the inspected page is v0.3.0.

The repository separates three areas:
- Layer A: deterministic Unicode and text hygiene.
- Layer B: best-effort statistical text rewriting.
- File cleaners: C2PA, EXIF, XMP, and document-property removal.

The repository explicitly says that no tool can certify that a vendor detector will fail when official detectors and keys are unavailable.

## Supported content and formats
The README lists text support for Markdown and HTML, and file support for PNG, JPEG, SVG, PDF, DOCX, and ODT.

It describes:
- Unicode scrubbing for zero-width characters, bidi controls, tag characters, exotic spaces, and related edit-based carriers.
- Statistical rewrite hooks for sampling-based text marks.
- C2PA and metadata cleaning for supported containers.
- Optional pixel-domain SynthID scoring through an external checkout.

Pixel-domain watermark removal, soft-bound C2PA links, and training backdoors are explicitly out of scope. The optional SynthID component is detection or scoring only.

## Tool layout and usage model
The repository includes an agent skill at skills/remove-ai-marks. It also documents a migration from the former remove-claude-marks name, with a slash alias retained in the documentation.

The documented scripts include:
- inspect_file.py and clean_file.py for unified file inspection and cleaning.
- inspect_text.py and clean_text.py for text inspection and Layer A cleaning.
- rewrite_text.py for Layer B rewrite hooks.
- inspect_image.py and clean_image.py for image metadata work and optional SynthID scoring.
- setup_synthid.sh and score_synthid.py for the optional external scorer.

Core scripts use Python 3.10+ standard library components. Optional model calls and system tools such as c2patool and exiftool provide extra functions.

This capture did not execute repository scripts, install dependencies, clone external checkouts, or modify any files.

## Provenance layers
The README's coverage matrix distinguishes:
- Unicode or edit-based text marks: Layer A, deterministic.
- Statistical sampling marks: Layer B, best-effort rewriting.
- C2PA or file metadata: supported where present in the listed formats.
- Pixel image marks: out of scope, except for optional external SynthID scoring.
- Training backdoors: out of scope.

The README warns that Layer B rewriting can degrade tone, voice, and precision. It recommends preserving the original prose when quality matters and using a non-origin model if rewriting is necessary, because rewriting with the origin model may re-stamp the text.

## Residual-risk guidance
The tool reports verifiable removals such as Unicode counts and metadata actions. Layer B results are best-effort. Remaining risks include soft-bound provenance, pixel or audio or video watermarks, and strong statistical marks after light edits.

The README recommends checking residual signals with external verification tools when available. It separates privacy and research use on content owned by the user from academic fraud or false human-written claims.

## User-provided repository description
@guillaumemeyer/watermarks-remover: Strip multi-vendor AI provenance marks: Unicode text hygiene, statistical rewrite hooks, and C2PA/metadata from PNG/JPEG/SVG/PDF/DOCX/HTML/MD
