---
title: "Atlas: Self-Hosted Maps Platform for African Road Networks"
kind: "paste"
captured_at: "2026-08-26 09:37"
tags: ["atlas", "maps", "africa", "rust", "openstreetmap", "pmtiles", "geocoding", "routing", "navigation", "telemetry", "maplibre", "mit"]
source_url: "https://github.com/Augani/atlas"
status: "inbox"
---

# Atlas: Self-Hosted Maps Platform for African Road Networks

## Source overview
Atlas is an open-source maps platform built in Rust. It provides tile serving, geocoding, routing, place search, and turn-by-turn navigation for OpenStreetMap data.

The project is designed with African road networks, addressing patterns, and languages in mind, but the repository says it can ingest OSM data from other regions. It is MIT licensed.

## Core capabilities
Atlas includes:
- PMTiles vector-tile serving with S3 range requests and an LRU cache.
- Forward and reverse geocoding.
- Multi-language search support for English, French, Arabic, Swahili, Twi, and Yoruba.
- Landmark-relative addressing such as “near the MTN mast.”
- Place search with distance scoring and category filtering.
- Point-to-point routing.
- Four routing profiles: car, motorcycle, bicycle, and foot.
- African road-condition penalties for unpaved roads and seasonal closures.
- Turn-by-turn instructions and a simulated navigation camera.
- Community reports for wrong turns, closures, and bad conditions.
- Optional trip telemetry and ETA learning from aggregated GPS traces.
- DynamoDB API-key authentication with per-key token-bucket rate limiting.
- Prometheus metrics for request counts, latency histograms, and cache statistics.

## Architecture
The Rust workspace contains atlas-core, atlas-tiles, atlas-geocode, atlas-search, atlas-route, atlas-ingest, atlas-server, and atlas-cli. The frontend lives under sdk/atlas-js and uses React with MapLibre.

Atlas uses Tantivy for full-text geocoding search, contraction hierarchies for precomputed routing, on-demand Dijkstra or A* fallback routing, and PMTiles for single-file tile archives with HTTP range requests.

The repository describes a small single-binary deployment. It reports a binary size of approximately 15 to 30 MB. The article describes the project as a single file that can be copied to a server, but the documented setup also includes Rust, pmtiles, OSM data, generated indices, and a frontend.

## API surface
The documented server endpoints include:
- GET /v1/tiles/{tileset}/{z}/{x}/{y}.mvt
- GET /v1/tiles/{tileset}/tilejson.json
- GET /v1/geocode?q=Makola+Market
- GET /v1/reverse?lat=5.55&lon=-0.21
- GET /v1/search?q=restaurant&lat=5.6&lon=-0.2
- POST /v1/route
- POST /v1/matrix
- POST /v1/contribute
- POST /v1/telemetry/start
- POST /v1/telemetry/{id}/update
- POST /v1/telemetry/{id}/end
- GET /metrics
- GET /health

The route example uses coordinates in Ghana and a car profile. The default server port is 3001.

## Data pipeline and deployment
The quickstart downloads a small Accra PMTiles extract and a Ghana OSM PBF of about 105 MB. The ingest command builds geocoding and search indices. The server then loads tiles, indices, and a road graph for routing.

Atlas defaults to Ghana data. The self-hosting guide explains how to download country OSM PBF files from Geofabrik, extract regional PMTiles, rebuild indices, and run the server for another region.

Key configuration includes local or S3 tile sources, a tile directory, server port, OSM directory, and an optional API-auth flag. The production checklist recommends enabling API-key auth, setting a public URL, using a TLS reverse proxy, monitoring /metrics, and preprocessing contraction hierarchies for high traffic.

The repository hardware table reports:
- Ghana: 2 GB RAM, 10 GB disk, 2 CPU cores.
- West Africa: 4 GB RAM, 30 GB disk, 4 CPU cores.
- All of Africa: 8 GB RAM, 50 GB disk, 4 or more CPU cores.

## Routing behavior and limits
The transport profiles account for different road access and conditions. Cars penalize unpaved roads and seasonal closures. Motorcycles can use narrow tracks. Bicycles avoid highways and prefer quieter roads. Walking ignores one-way restrictions.

The routing system detects roundabouts and counts exits from OSM junction tags. The README describes this as approximate because tags can be missing or inaccurate.

Atlas does not include live traffic data. Static OSM data cannot represent current congestion or flooding. OSM coverage and quality also vary by region. Community corrections and trip telemetry are designed to improve route scoring and ETA estimates over time, but they do not provide an immediate replacement for a mature live-traffic network.

Trip learning is opt-in. When enabled, clients send GPS traces. Atlas aggregates actual travel speeds by road segment and can adjust future ETA calculations. The article's comparison between Atlas and Google Maps is a conceptual explanation, not an independent accuracy benchmark.

## Navigation demo
The article describes a desktop-simulated navigation mode with a 3D camera, road-following rotation, turn cards, turn arrows, and playback speeds from 1x to 10x. The repository documents turn-by-turn route instructions and a simulated navigation camera. Desktop simulation is not the same as production phone GPS navigation.

## Article-reported claims
The supplied article reports 225 passing tests, more than 10 API endpoints, four transport profiles, an 8 GB deployment target, and a possible $60 per month server. The repository confirms the four profiles, broad endpoint list, and an 8 GB all-Africa hardware tier. The 225-test count and $60 monthly cost were not independently reproduced in this capture and remain article-reported.

## User-provided article
The article says a tweet about Chowdeck's lack of maps inspired the project. It presents Atlas as a starting point for delivery, logistics, ride-hailing, and location products in Africa and other regions. It emphasizes owning the infrastructure instead of paying per-request map API costs, while acknowledging that Atlas is not a Google Maps replacement and lacks satellite imagery, Street View, and mature ground-truth traffic data.

It highlights landmark-aware search, language normalization, road-condition-aware routing, okada and motorcycle paths, community corrections, opt-in trip learning, simulated navigation, Rust, a single binary, MIT licensing, and OpenStreetMap support.

## Execution boundary
The article and official repository were inspected. No repository was cloned, no Rust build was run, and no external map data was downloaded during this capture.

## Sources
- https://github.com/Augani/atlas
- https://github.com/Augani/atlas/blob/main/README.md
