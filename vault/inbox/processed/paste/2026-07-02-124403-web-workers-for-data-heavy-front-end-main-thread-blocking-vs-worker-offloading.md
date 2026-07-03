---
title: Web Workers for Data-Heavy Front-End — Main Thread Blocking vs Worker Offloading
kind: paste
captured_at: 2026-07-02 12:44
tags: [web-workers, frontend, performance, main-thread, react, rendering]
source_url: 
status: inbox
---

# Web Workers for Data-Heavy Front-End — Main Thread Blocking vs Worker Offloading

Transcript of a video/article about Web Workers for keeping UI responsive during expensive client-side computation.

Core problem: Even with caching, pagination, code splitting, and virtualization, UI can still freeze if expensive JavaScript runs on the main thread. The bottleneck is not always network — sometimes data is already loaded but the browser still needs to do heavy processing before rendering.

Demo: log analyzer (simplified Splunk-like dashboard). 50,000 log entries (~10MB) loaded into browser. Client-side search, filtering, aggregation, timeline building, pagination — no backend requests after initial load.

Main thread mode: Debouncing (300ms) helps avoid running analysis too often, but doesn't make it non-blocking. Once work starts on main thread, UI freezes. FPS drops from ~50 to as low as 3 during computation. Analysis takes 400-1500ms.

Web Worker mode: Worker receives logs once (kept in worker's own memory). Each query sends only a small query object to the worker. Worker runs the same analysis function. UI stays responsive — FPS unchanged during computation. Analysis takes the same time but doesn't block.

Key architecture patterns:
- Same shared analysis function used by both main thread and worker
- Worker receives large input (50k logs) once via 'ingest' event
- Subsequent queries send only small query objects
- Workers use postMessage/onmessage for communication
- Worker does NOT directly update DOM or run React components — pure computation only
- Request ID pattern to handle out-of-order results (async race condition): each query has a request ID; worker returns it with result; main thread compares with latest request ID and ignores stale results

Trade-offs: Worker improves responsiveness but adds architecture complexity (message-based system, lifecycle, error handling, data transfer cost). Not appropriate for every UI logic.

When to use Web Workers: after identifying bottleneck as CPU-heavy JavaScript blocking the main thread. Not the first tool for network bottlenecks (use lazy loading, code splitting) or rendering bottlenecks (use pagination, virtualization) or repeated calculations (use memoization, better data structures).
