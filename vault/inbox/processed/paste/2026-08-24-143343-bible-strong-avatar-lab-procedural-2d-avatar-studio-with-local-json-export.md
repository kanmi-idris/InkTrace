---
title: "Bible Strong Avatar Lab: Procedural 2D Avatar Studio with Local JSON Export"
kind: "paste"
captured_at: "2026-08-24 14:33"
tags: ["bible-strong", "avatar", "procedural-graphics", "svg", "react", "typescript", "animation", "local-first", "json-export", "agpl-3"]
source_url: "https://avatars.bible-strong.app/"
status: "inbox"
---

# Bible Strong Avatar Lab: Procedural 2D Avatar Studio with Local JSON Export

## Source overview
Bible Strong Avatar Lab is a browser-based authoring studio for procedural 2D avatars. It combines 3D-inspired geometry with SVG rendering. Users can construct characters, define neutral appearances, create expressions, compose reusable animations, and export the result without an account or backend.

The site links to https://github.com/smontlouis/bible-strong-avatar-lab. The repository is licensed under GNU Affero General Public License v3.0.

## Live editor inventory
The inspected live editor showed:
- 10 built-in avatars: Strobi, Freddy, Citrus, Nova, Grok bot, Sunee, Kirby, Cloudee, Cubee, and Onee.
- A New avatar action.
- 27 expression presets.
- 23 animations.
- English, French, and Simplified Chinese interface options.

The live editor displayed 23 of 23 animations selected and 28 expressions ready to export for the selected Cloudee avatar. This differs from the visible 27-expression preset count and may reflect an exported behavior set or UI state. The counts are recorded as observed, not treated as a stable global inventory.

## Avatar and pose editing
An avatar can have a primary facial surface and additional 3D-inspired primitives. The editor supports dimensions, roundness, position, local rotation, perspective, colors, and wireframe guides.

The live Pose panel exposes body color, head rotation on X, Y, and Z axes, eye color, independent or linked eye width, height, size, position, spacing, local rotation, perspective, and a wireframe switch. The canvas supports direct translation and rotation controls.

Expressions can edit each eye independently or use linked size, proportions, and position. Expression values are relative to the avatar's neutral appearance, so behavior can remain compatible with different body surfaces.

## Expressions and animations
Expressions are reusable named visual presets. An expression can include temporary body and eye color overrides, ambient movement, and a spring-speed motion setting. The editor includes blinking and random-expression actions.

Animations arrange expressions into steps with custom hold times and transitions. The documented playback modes are loop, play-once, and ping-pong. Animations can configure automatic blinking and can be previewed, played, paused, and stopped inside the Studio.

The live animation library includes lifecycle states such as sleeping, waking, idle, listening, thinking, searching, and working. It also includes reactions such as excited, bored, suspicious, angry, drowsy, happy, curious, confused, surprised, proud, shy, sad, laughing, scared, playful, and celebrate.

## Local-first storage
The application runs entirely in the browser. Studio changes save automatically to browser local storage. No account or backend is required.

Users can transfer projects between browsers with JSON export and import. The complete Studio project JSON contains avatars, base and avatar-specific behavior libraries, expressions, animations, and playback selection. Importing a project replaces the current local document after confirmation. Clearing site data removes the local project, so JSON export is the recommended backup.

The behavior system uses copy-on-write. Avatars initially share bundled base expressions and animations. When an avatar's behavior is first edited, the Studio copies the collections into an avatar-specific library. Duplicating an avatar duplicates its custom behavior.

## Export formats
The selected avatar and animations can be exported as one portable .avatar.json definition. React and framework-free JavaScript/ESM use the same definition.

React / TypeScript exports use @bible-strong/avatar-react and createAvatar. The React package depends on @bible-strong/avatar-core for validation, playback, and geometry.

JavaScript / ESM exports use @bible-strong/avatar-web. The integration ZIP contains the same .avatar.json, a lightweight ESM wrapper, and usage instructions. It does not copy the rendering engine into every avatar export. avatar-web also depends on avatar-core.

Photo Mode exports the currently rendered avatar as SVG or PNG. It supports configurable resolution and transparent, solid, linear-gradient, or radial-gradient backgrounds.

The live Export panel offers a JSON definition download, a React demo ZIP, JSON copy, preview, animation customization, and an AI instruction copy action.

## Technical architecture
The repository documents React 19 for editor UI and durable application state, strict TypeScript, Vite 8, Motion for high-frequency rendering and playback values, SVG for procedural geometry, Tailwind CSS 4 for the interface, and Vitest for geometry, playback, editing, persistence, rendering, and export behavior.

Geometry, playback, document operations, and the standalone runtime remain framework-independent. React state stores durable editor data. Motion values handle frame-by-frame visual updates without forcing React renders.

The production site is a client-only Vite site with no server runtime or environment variables. Static output can be hosted at a domain root or subpath.

## Language and deployment
The interface supports English, French, and Simplified Chinese. The repository requires Node.js 22.12 or newer and pnpm 10.34 for local development.

The repository includes commands for development, strict type checking, tests, standalone engine generation, engine freshness checks, production builds, preview, and a complete check command.

## License
Bible Strong Avatar Lab uses AGPL-3.0. The repository states that distributed or network-offered modified versions must provide corresponding source code, preserve notices, use AGPL-3.0 for derivatives, and document significant changes. The LICENSE file is authoritative.

## Execution boundary
The live editor was inspected in the browser. No repository was cloned, no package was installed, and no local command was executed.

## Sources
- https://avatars.bible-strong.app/
- https://github.com/smontlouis/bible-strong-avatar-lab
