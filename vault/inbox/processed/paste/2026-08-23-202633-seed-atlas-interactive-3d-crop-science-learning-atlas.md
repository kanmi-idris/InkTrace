---
title: "Seed Atlas: Interactive 3D Crop-Science Learning Atlas"
kind: "paste"
captured_at: "2026-08-23 20:26"
tags: ["github", "seeds-atlas", "threejs", "webgpu", "webgl", "3d", "education", "crop-science", "interactive-learning", "gsap", "zustand"]
source_url: "https://github.com/thebuggeddev/seed"
status: "inbox"
---

# Seed Atlas: Interactive 3D Crop-Science Learning Atlas

## Source overview
Seed Atlas is an interactive crop-science atlas. It covers eight staple crops and three 3D specimen states per crop: whole, section, and germinating. Users can select a seed, choose a model state, rotate and zoom the model, inspect anatomical markers, read science cards, open lessons, and take quizzes.

The inspected live site presents Maize with a 3D viewer, whole-seed, longitudinal-section, and germinating-seed tabs. It exposes keyboard rotation, zoom, reset, label visibility, stand visibility, a scale bar, anatomy buttons, lessons, and quizzes.

## Crops and content model
The README states that adding a ninth crop requires one data file under src/data/seeds/, assets, and one index entry. Crop content is not hard-coded in components.

The live page currently lists eight crops:
- Maize.
- Wheat.
- Rice.
- Bean.
- Sunflower.
- Pea.
- Soybean.
- Cotton.

The atlas includes seed type, storage tissue, embryo parts, germination stages, growing regions, uses, and importance. Germination cards include crop-specific footage. Quiz modes include written multiple-choice questions and identify-on-the-model tasks.

## 3D rendering architecture
The SeedScene owns the render loop, GSAP transitions, and annotation projection outside React so normal interaction does not trigger React renders.

The renderer uses Three.js WebGPURenderer because the project uses node-based TSL materials. When WebGPU is unavailable, the same node materials compile to GLSL through the WebGL2 backend.

The canvas is transparent. The ivory stage ground is CSS. Lighting uses a key-led studio rig and a procedural environment probe. MaterialProfile objects adapt roughness, micro-variation, faux subsurface response, and sheen per crop and model state.

## Anatomical annotations
Markers are authored in model space and welded to specimen surfaces at load time. A ray finds the surface, then the marker is nudged outward along the face normal. World matrices are updated before resolving markers and again after the entry transition settles.

The README reports an offline audit of all 104 markers across 24 views. Twelve rays initially missed thin germinating structures. An offset-ring fallback reduced the miss count to zero. The audit found authored coordinates up to 0.296 model units from the true surface, which the weld absorbs.

Markers keep constant size and fade based on facing. Clicking a marker pins teaching text and turns the camera toward it. Tissue highlights use TSL uniforms when segmentation can distinguish the structure. Otherwise, the viewer keeps a spatial highlight.

## Asset pipeline
The repository ships 24 source GLBs totalling about 1.35GB and 56 source PNGs totalling about 89MB. Source assets are preserved and never replaced. npm run assets derives web-ready assets under public/seeds/.

The pipeline:
- Vendors the Three.js Draco decoder.
- Removes image backgrounds through border flood fill with Sobel-edge protection.
- Restores anti-aliased edges with two thresholds and preserves soft shadows.
- Trims transparent images to their bounds and converts them to WebP.
- Simplifies GLB geometry, resizes textures, and applies Draco compression.
- Renders thumbnails from the actual GLBs in headless Chromium.
- Rasterises globe land and crop-distribution textures.

The README reports reductions from 89MB of images to 10.3MB WebP assets and from 1.35GB of models to 11.6MB processed models. A first visit downloads one model at about 450KB. Other states of the same seed are prefetched at low priority.

## Performance work
The project reports these measured optimizations:
- Replace five per-frame ray casts against a 70k-triangle mesh with load-time surface normals and a dot-product facing test.
- Draw only while movement, transitions, highlight fades, or other active work exists.
- Remove bloom because it was invisible against the editorial ground.
- Remove clearcoat and a fine noise octave that did not show at display size.
- Halve geometry to 70k triangles, Draco-compress it, and decode in a worker pool.
- Reduce textures from 2048 squared to 1024 squared.
- Defer the Three.js chunk so the page paints before parsing it.
- Preload the first model and Draco decoder from HTML.
- Load the globe on demand.

Quality tiers are based on device signals and measured frame cost. Resolution drops before the viewer disables shadows and procedural shading terms.

## Tissue segmentation
The shipped models are single closed meshes with anatomy encoded in base-color textures. scripts/segment-tissues.mjs samples triangle UV colors, uses deterministic k-means++, merges near-duplicate clusters, smooths labels across adjacency, assigns majority labels to vertices, and writes a _TISSUE attribute.

The result is two to five tissues per model. The README says it enables full-tissue selection and per-tissue surface response. If a label covers more than 60% of a mesh or is shared by neighboring markers, the viewer uses a spatial highlight instead of pretending that surface color uniquely identifies the structure.

## Growing-regions globe
The globe uses explicit country-level data in src/data/distribution.json rather than trying to infer countries from the artwork's undocumented map projection.

The dataset contains 908 country fills and 48 named regions across the eight crops, graded over five tiers. The build fails when a country name is missing from Natural Earth geometry. The rasterizer handles antimeridian wrapping. Globe textures are small: a 39KB shared land mask and about 20KB per seed.

Users can switch between a 3D globe and a flat map. The preference lasts for the session.

## Learning and accessibility
Written quiz questions show explanations immediately. Identify-on-the-model questions reuse the viewer's markers, occlusion, and highlighting. Wrong answers reveal the correct structure with its explanation.

The 3D viewer is not the only content route. Markers are focusable buttons, tooltips are DOM content, and each view lists structures as expandable text. Keyboard controls include arrow-key rotation, plus and minus zoom, and Home reset. Reduced motion is supported through CSS and GSAP timelines. Search uses Command-K or slash, and dialogs trap and restore focus.

## Analytics and verification
The README says Vercel Web Analytics is mounted outside the React app tree and adds about 1.2KB gzip to the entry chunk. It requires enabling Analytics in the Vercel dashboard and is inert when the Vercel endpoint is unavailable.

The documented visual verification commands include npm run dev, npm run shots, viewport selection, full mobile shots, and low-quality mode.

## User-provided sources
https://github.com/thebuggeddev/seed
https://seedsatlas.vercel.app/
