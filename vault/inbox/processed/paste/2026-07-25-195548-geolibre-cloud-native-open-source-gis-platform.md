---
title: GeoLibre - Cloud-Native Open-Source GIS Platform
kind: paste
captured_at: 2026-07-25 19:55
tags: []
source_url: 
status: inbox
---

# GeoLibre - Cloud-Native Open-Source GIS Platform

https://geolibre.app/ — GeoLibre: free, open-source, lightweight cloud-native GIS platform. Runs in browser, desktop (Tauri), mobile (Android/iOS via Tauri v2), and Jupyter notebooks. Built with React, TypeScript, MapLibre GL JS, DuckDB-WASM Spatial, deck.gl, Tauri.

Key capabilities:
- MapLibre GL workspace with OpenFreeMap basemaps, globe/terrain, geolocation
- Vector/raster data: local files, remote URLs, cloud-native formats (COG, GeoParquet, PMTiles, FlatGeobuf, Zarr, MBTiles, STAC)
- Services: XYZ, WMS, WFS, WMTS, ArcGIS, OSM PBF, DuckDB/PostgreSQL DBs
- 3D: 3D Tiles, LiDAR, Gaussian splats, deck.gl layers
- Styling: categorized, graduated, expression, heatmap, clustering, SLD/QML/style JSON import/export, rule-based renderer
- Processing: Turf.js vector tools (buffer, clip, overlay, etc.), raster (hillshade, slope, reproject, NDVI etc.), Whitebox toolbox, conversion to cloud-native formats
- SQL Workspace: DuckDB Spatial SQL (in-browser), PGlite PostGIS, Apache Sedona
- Python: geolibre Python package, in-app Python Console, docked Jupyter notebook panel (JupyterLite on web, JupyterLab on desktop)
- AI Assistant: natural-language to SQL/symbology/map control, provider-pluggable (Gemini, Anthropic, OpenAI)
- Story maps: scroll-driven with presenter view, standalone HTML export
- Real-time collaboration (MVP), field collection (GPS/map-tap)
- Network analysis: isochrones, service areas, OD cost matrices
- Geocoding: multi-provider forward/batch/reverse
- Plugins marketplace: GeoLens, Overture Maps, GeoAgent, Time Slider, etc.
- Controls: Measure, Bookmark, Minimap, View State, Print, Layout
- Mobile: Android Google Play-ready, iOS Tauri scaffold, offline downloads
- Embed: compact layout, panels=none, maponly mode, URL-parameter-driven

Current release: v2.3.0 (Jul 25, 2026). Hosted on GitHub Pages — no analytics, no server, client-side only.
Website: geolibre.app | Repo: github.com/opengeos/GeoLibre | By giswqs/opengeos
