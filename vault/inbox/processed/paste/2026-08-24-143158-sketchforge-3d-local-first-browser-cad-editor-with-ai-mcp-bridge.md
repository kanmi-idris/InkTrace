---
title: "SketchForge 3D: Local-First Browser CAD Editor with AI MCP Bridge"
kind: "paste"
captured_at: "2026-08-24 14:31"
tags: ["github", "sketchforge", "3d", "cad", "browser", "threejs", "react", "nextjs", "manifold", "stl", "step", "mcp", "agpl-3"]
source_url: "https://github.com/Formsmith746/SketchForge-3D"
status: "inbox"
---

# SketchForge 3D: Local-First Browser CAD Editor with AI MCP Bridge

## Source overview
SketchForge is a local-first 3D design editor that runs in a browser. It supports building shapes, cutting holes, grouping parts, importing STL files, and exporting models without accounts or SketchForge cloud storage.

The documented stack includes Next.js, React, TypeScript, Three.js, and Manifold/CSG geometry tooling. The repository is licensed under GNU Affero General Public License v3.0 only (AGPL-3.0-only).

## Editor capabilities
The editor provides:
- Browser-local projects with generated thumbnails.
- A 3D workplane with grid, camera controls, snap settings, transform handles, outlines, and inspector controls.
- Primitive shapes such as boxes, cylinders, spheres, cones, pyramids, wedges, text, roofs, half spheres, torus shapes, and tubes.
- Solid and hole workflows for constructive geometry.
- Boolean intersection for retaining geometry shared by selected solids and holes.
- Reversible chamfer and fillet tools with history controls.
- Rotated-solid edge treatment that preserves analytic box topology after one-, two-, or three-axis rotations.
- STL import into the same workspace as primitives.
- STL, OBJ, and STEP export workflows.

Pressing O switches between perspective and orthographic projection while preserving the current view direction and framing.

## Storage and deployment
In the normal browser workflow, designs remain in each user's browser storage. STL and OBJ exports download through the browser. The app does not upload models to a SketchForge cloud service.

The repository documents two deployment paths:
- Docker or FabLab server for classrooms, shared computers, and local networks.
- Local development for code editing.

Docker deployments can include a shared .skf project library stored in a persistent volume or host directory. Opening a shared file creates a private local working copy. Saving back checks the server revision and refuses to overwrite a changed file. This is shared file storage, not simultaneous live editing.

The documented Docker container uses port 3000 and also accepts port 80 for backward compatibility with older UnRAID templates.

## Desktop release
GitHub releases include macOS DMG files for Intel x64 and Apple Silicon arm64 Macs. Unsigned releases may trigger a Gatekeeper warning. The README documents the macOS approval and quarantine-removal steps.

Some macOS virtual machines lack hardware WebGL. The README documents launching the app with software WebGL through SwiftShader in that case.

## Development workflow
Local development requires Node.js 20 or newer and npm. The documented commands include npm install, npm run dev, npm run typecheck, npm run test, npm run build, and npm run export.

The repository includes a local SketchForge MCP bridge. It runs during local development, is disabled in production builds and Docker/static hosting, and exposes editor automation tools for listing editors, reading scenes, creating and updating objects, grouping, cutting, separating, listing CAD edge IDs, applying chamfers or fillets, inspecting errors, and capturing viewport images.

## AI integration
The MCP skill is provided for AI clients that support MCP tools. The README documents Codex and Claude Desktop configuration examples. The client can ask the MCP server to inspect or modify a live local editor tab.

This capture records the documented integration only. It does not install dependencies, start SketchForge, configure MCP, or execute repository scripts.

## Contributing and security
The project welcomes editor fixes, geometry and boolean test cases, STL import/export edge cases, UI polish, documentation media, accessibility, and performance improvements. The README directs security-sensitive reports to the repository SECURITY.md process rather than public issues.

## License boundary
SketchForge is AGPL-3.0-only. If a modified version is used over a network, the operator must offer users the corresponding source code under the same license. Operators distributing or hosting a modified build should configure NEXT_PUBLIC_SOURCE_CODE_URL to point to the complete corresponding source.

## Source
https://github.com/Formsmith746/SketchForge-3D
