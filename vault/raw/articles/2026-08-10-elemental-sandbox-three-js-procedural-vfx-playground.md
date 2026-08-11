---
title: "Elemental Sandbox: Three.js Procedural VFX Playground"
kind: "paste"
captured_at: "2026-08-10 21:16"
tags: ["github", "threejs", "webgl", "glsl", "vfx", "gpu-particles", "shader-design", "vite"]
source_url: "https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS"
status: "inbox"
---

# Elemental Sandbox: Three.js Procedural VFX Playground

## Source overview
Elemental Sandbox is a Three.js and Vite skillshot VFX playground using hand-written GLSL, procedural geometry, GPU-simulated instanced particles, and vertex-shader world-position reconstruction.

## Live abilities
The README documents five live abilities:
- Q Frost Lance: a fracture front, ice-crystal field, impact cluster, and frost effects.
- E Storm Lance: lightning filaments, sparks, ground burn, scorch, and ionised-air shell.
- R Cinder Fall: an arcing meteor, raymarched burning wake, fragments, crater, and molten cracks.
- F Nova Beam: a charged beam with white core, cyan sheath, gold ribbons, shock discs, ground burn, and collapse.
- V Voltaic Snare: a far cast with a targeting circle, violet column, tendrils, rim arcs, and a burning field.

The supplied user summary says there are six fully customizable abilities. The inspected README documents five live abilities. The repository also contains a retired four-element sandbox in src/archive, so the ability count should be treated as a source discrepancy.

## Procedural VFX architecture
The README states that the VFX effects are generated without effect textures, sprite sheets, or baked effect meshes:
- Crystals use procedural geometry.
- Lightning uses a ribbon strip whose vertices are positioned in the vertex shader.
- The meteor uses an icosphere with CPU-generated fracture features.
- The beam is a parametric tube rendered at multiple radii.
- The snare uses ribbon strips along several parametric paths.
- Arrows, targeting circles, rime, burns, and molten cracks use signed-distance and noise shaders.
- Mist, sparks, chips, and glitter use GPU particles.

The README also states that the character uses FBX files, a diffuse texture, and an HDR probe. Therefore, the no-texture claim applies to the procedural VFX layer, not every asset in the application.

## Live editing
The editor exposes 938 live sliders. Settings remain live while the simulation is paused. Press P to pause and reshape an eruption, strike, or burn against a still frame. src/config/settings.js is the single source of truth for shader, particle, lighting, environment, and post-processing parameters.

Press G to show the editor. Presets are stored in localStorage and can be duplicated, deleted, exported to JSON, imported from JSON, or reset to defaults.

## Controls
- Q or 1: Frost Lance.
- E or 2: Storm Lance.
- R or 3: Cinder Fall.
- F or 4: Nova Beam.
- V or 5: Voltaic Snare.
- Mouse: aim the line arrow or far-cast circle.
- Left click: cast.
- Escape or right click: cancel.
- Right mouse drag: orbit the camera.
- Scroll: zoom.
- C: clear effects.
- H: hide controls.

## Quick start
- npm install
- npm run dev
- npm run build
- npm run preview

The project uses Vite and defaults to 127.0.0.1:5173.

## Project structure
The source includes ability classes and managers, FBX animation loading, procedural assets, central settings, renderer and camera systems, effects and targeting, loaders, materials, GPU particles, post-processing, UI, utilities, and world lighting.

To add another ability, the README says to add a settings block and metadata entry, subclass Ability, register it with AbilityManager, add an editor folder and glyph, and bind a key. A far cast needs a cast shape of ZONE and a zoneRadius setting. The targeting loop is shared.

## Performance notes
- Abilities, decals, bursts, and particles are pooled.
- Crystal rendering uses three draw calls with a stated cap of 288 crystals.
- Lightning uses two draw calls with a stated cap of 24 filaments at 72 samples each.
- The snare uses two ribbon draws and one field draw.
- The beam uses six draw calls for tube, coils, discs, and charge orb.
- The renderer caps pixel ratio at 1.75 and uses half-resolution depth and distortion buffers.
- Shader compilation is warmed during boot.

## Assets and licensing
The repository lists an idle character FBX, three cast animation FBX files, a diffuse PNG, and an HDR probe. The code is provided as-is. The README says the bundled HDR probe and character FBX retain their original licenses.

## User-provided summary
I've built a new opensource Elemental Sandbox, VFX playground built with 
@threejs
 . it contains 6 fully custamizable abilities.

Everything you see is generated: no textures, no sprite sheets, no baked meshes.

hand-written GLSL, GPU-simulated instanced particles, World position resolved in the vertex shaders...

Source code :
https://github.com/achrefelouafi/LinearAbiltyCastingThreeJS
