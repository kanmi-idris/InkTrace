---
title: "Valhalla: OpenStreetMap Routing and Network-Analysis Engine"
kind: "paste"
captured_at: "2026-08-26 10:20"
tags: ["valhalla", "routing", "openstreetmap", "maps", "navigation", "isochrone", "map-matching", "elevation", "tsp", "c-plus-plus", "python", "nodejs", "docker", "mit", "odbl"]
source_url: "https://valhalla.github.io/valhalla/"
status: "inbox"
---

# Valhalla: OpenStreetMap Routing and Network-Analysis Engine

## Source overview
Valhalla is an open-source routing engine and library ecosystem for OpenStreetMap data. It provides route calculation, time and distance matrices, isochrones, elevation sampling, map matching, and tour optimization using a Travelling Salesman approach.

Valhalla and projects under the Valhalla organization use the MIT License. Test data from OpenStreetMap is licensed under ODbL and copyrighted by OpenStreetMap contributors. Data-source licenses must be checked separately from the software license.

## Design goals
Valhalla's documented differentiators include:
- Open-source software with open-source data.
- A tiled hierarchical graph for small memory footprints, offline routing, regional extracts, and partial updates.
- Dynamic runtime costing of graph edges and vertices through a plugin architecture.
- A C++ API that can be cross-compiled for offline and portable devices.
- Plugin-based narrative and manoeuvre generation customized for administrative areas or locales.
- Multimodal and time-based routes combining automobile, pedestrian, bicycle, and public transportation, including arrival-time constraints.

## Architecture modules
The Valhalla organization is split into modules:
- Midgard: geographic and geometric algorithms.
- Baldr: tiled route-data structures and caching.
- Sif: graph-edge and graph-node costing used by Loki and Thor.
- Skadi: elevation data access.
- Mjolnir: tools that turn open data into graph tiles.
- Loki: graph-tile search and input-location correlation.
- Meili: map matching.
- Thor: path generation through the graph tile hierarchy.
- Odin: manoeuvre and narrative generation.
- Tyr: HTTP service that coordinates the APIs and formats responses.
- Tools: command-line utilities for querying, benchmarking, data processing, and quality testing.

## Deployment options
Valhalla supports Linux and macOS and is used on iOS and Android. Windows support is partial. The library and several modules work on Windows, including tools, data tools, Python bindings, and related functionality, but not all features are fully supported.

The project documents three installation paths:
- Build from source using the building documentation.
- Run official Docker images locally or on a server.
- Install Python bindings from PyPI as pyvalhalla, which also exposes C++ executables such as valhalla_build_tiles and valhalla_service.

Node.js bindings are available as @valhallajs/valhallajs. The project also documents a one-shot valhalla_service mode for route, isochrone, matrix, and other actions without a full HTTP API.

## Public demo server
FOSSGIS e.V. hosts a public demo server with a full-planet graph and the open-source valhalla-app web interface. The HTTP API uses a related subdomain.

The documentation says public-demo usage follows fair-use policies and rate limits similar to OSRM and Nominatim demo servers. Apps that request the public server for end users should contact the project through GitHub Discussions and include an identifying X-Client-Id header.

The public server is a demo resource, not a default production backend for unrestricted application traffic.

## Related projects
The documentation links to OpenStreetMapSpeeds for speed classification, valhalla-operator for Kubernetes deployment, valhalla-app for a React web interface, a QGIS plugin, routingpy for Python clients, routingjs for TypeScript clients, and a Julia binary wrapper.

## AI contribution policy
The project documentation says AI-assisted contributions are accepted but asks human developers to understand and verify generated code, rewrite pull-request descriptions themselves, avoid contrived generic AI logic, and document non-obvious changes inline. This is recorded as project contribution guidance, not as an instruction for this capture workflow.

## Execution boundary
The documentation was inspected. No Valhalla build, Docker image, public demo request, map-data download, or install command was executed.

## Sources
- https://valhalla.github.io/valhalla/
- https://github.com/valhalla/valhalla
- https://valhalla.openstreetmap.de/
