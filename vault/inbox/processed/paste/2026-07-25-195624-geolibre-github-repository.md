---
title: GeoLibre GitHub Repository
kind: paste
captured_at: 2026-07-25 19:56
tags: []
source_url: 
status: inbox
---

# GeoLibre GitHub Repository

https://github.com/opengeos/GeoLibre — GeoLibre GitHub repository. Open-source cloud-native GIS platform by opengeos/giswqs. MIT license. 849 commits, 1.9k stars, 258 forks. Built with Tauri v2, React, TypeScript, MapLibre GL JS, DuckDB-WASM Spatial, deck.gl.

Monorepo structure:
- apps/geolibre-desktop: Tauri desktop app
- backend/geolibre_server: Python FastAPI sidecar
- packages/: shared packages
- python/: geolibre Python package (anywidget for Jupyter)
- docker/: Docker deployment
- docs/: documentation site (MkDocs)
- e2e/: Playwright E2E tests
- workers/: Cloudflare Workers (share.geolibre.app)
- packaging/: Homebrew Cask, MSIX, AUR, FlatPark

Available as: npm, PyPI (geolibre), conda-forge, Homebrew Cask, Microsoft Store, AUR, FlatPark, Docker (ghcr.io), ChromeOS (Codesandbox/StackBlitz).

Website: geolibre.app | Web app: web.geolibre.app | Share: share.geolibre.app | Plugins: plugins.geolibre.app
