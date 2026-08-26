---
title: "MapCN Installation: shadcn Map Component with MapLibre and CARTO Tiles"
kind: "paste"
captured_at: "2026-08-26 08:33"
tags: ["mapcn", "maps", "maplibre", "react", "tailwind", "shadcn", "carto", "web-worker", "csp", "installation"]
source_url: "https://www.mapcn.dev/docs/installation"
status: "inbox"
---

# MapCN Installation: shadcn Map Component with MapLibre and CARTO Tiles

## Relation to existing sources
MapCN is already captured in src-2026-05-01-004 and src-2026-05-31-001 for the project and API model, and src-2026-08-26-008 for the React Native site. This supplemental source records the current web installation page.

## Prerequisites
The web installation page requires a project with Tailwind CSS and shadcn/ui already configured.

## Install
Run:

pnpm dlx shadcn@latest add @mapcn/map

The command installs maplibre-gl and adds the map component to the project.

The documented usage imports Map and MapControls from @/components/ui/map. The example renders a Map inside a Card with a center coordinate, zoom level, and MapControls.

## Default basemap
The map uses free CARTO basemap tiles by default. The tiles switch automatically between light and dark themes.

Basemap licensing and usage limits still depend on the selected tile provider. The installation page documents the default provider but does not replace the provider's own terms.

## MapLibre Web Worker
MapLibre parses tiles in a separate Web Worker. MapCN loads the worker from unpkg, pinned to the installed maplibre-gl version, so no extra setup is required in a normal project.

Under a strict Content Security Policy, the page says to allow:

script-src 'self' https://unpkg.com;
worker-src 'self' blob:;

The basemap host needs its own CSP entries.

## Self-hosting the worker
To self-host the worker, copy both maplibre-gl-worker.mjs and maplibre-gl-shared.mjs from node_modules/maplibre-gl/dist/ into public/ and keep them side by side.

Then replace the unpkg worker URL near the top of the component with:

MapLibreGL.setWorkerUrl("/maplibre-gl-worker.mjs");

## Evidence boundary
This source records the published installation instructions. No package was installed and no project was modified during capture.

## Sources
- https://www.mapcn.dev/docs/installation
- https://www.mapcn.dev/docs
- https://mapcn-rn.dev/
