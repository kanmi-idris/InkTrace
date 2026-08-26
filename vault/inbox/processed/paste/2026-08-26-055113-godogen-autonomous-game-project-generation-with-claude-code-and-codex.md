---
title: "Godogen: Autonomous Game-Project Generation with Claude Code and Codex"
kind: "paste"
captured_at: "2026-08-26 05:51"
tags: ["github", "godogen", "game-development", "godot", "bevy", "babylonjs", "claude-code", "codex", "asset-generation", "visual-qa", "ai-agents", "mit"]
source_url: "https://github.com/htdt/godogen"
status: "inbox"
---

# Godogen: Autonomous Game-Project Generation with Claude Code and Codex

## Source overview
Godogen is an open-source generator for autonomous game development with Godot, Bevy, and Babylon.js using Claude Code or Codex. It is not itself a game. The repository publishes a generator into a fresh game repository, where an agent builds the actual game.

The repository is MIT licensed. GitHub API metadata checked on 2026-08-26 reported 6,132 stars, 548 forks, and 8 open issues. These counts can change.

## Generation model
The user describes a game. Godogen publishes a runtime manifest, an engine guide, and an asset-generation skill into a fresh output repository. The host agent then recreates the project scaffold and capture tooling from the selected engine guide.

The source layout includes:
- prompts/runtime.md for the runtime manifest.
- asset-gen/ for cross-engine asset generation.
- engines/godot.md, engines/bevy.md, and engines/babylon.md for engine-specific guides.
- publish.sh for rendering a runtime layout for a selected engine and host agent.

Claude Code and Codex are publish-time render choices, not separate source trees.

## Supported engines
Godot 4 output uses C#/.NET projects, build-time scene generation, runtime scripts, and Jolt physics.

Bevy output uses Rust and code-first ECS scenes with offscreen capture.

Babylon.js output uses TypeScript and Vite browser games served at a live URL.

Asset generation uses Gemini for precise references and characters, xAI Grok for textures and simple objects, and Tripo3D for image-to-3D and rigged biped animation. Animated sprites can use Grok video generation with loop detection and background removal.

## Visual proof loop
Godogen emphasizes proof from a running game rather than proof from a clean compile. The agent can run the engine, capture screenshots or a live browser game, and use visible defects to drive the next iteration.

The user can watch a live game and steer at decision points, or leave a run unattended and receive a 15 to 20 second proof recording at the end. The repository says the agent chooses the mode from how the task is framed.

This is an autonomous generation workflow, not a guarantee that every generated game is complete, polished, or production-ready.

## Prerequisites
The documented prerequisites include:
- Godot 4 .NET build for Godot projects.
- Rust and Cargo for Bevy projects.
- Node.js 22.12 or newer and npm for Babylon.js projects.
- Chrome or Chromium with hardware WebGL2 for Babylon.js browser capture.
- Python 3 with pip.
- Claude Code or Codex.
- API keys for Gemini, xAI Grok, and Tripo3D asset generation.
- System packages including Vulkan tools, Xvfb, FFmpeg, ImageMagick, and platform-specific extras.

The repository says it has been tested on Ubuntu, Debian, and macOS. A full generation run can take hours, and the README recommends a server or GPU instance for faster rendering and video capture.

## Publishing commands
The README documents examples such as:

./publish.sh --engine godot --agent claude --out ~/my-game
./publish.sh --engine babylon --agent codex --out ~/my-game
./publish.sh --engine bevy --agent claude --out ~/my-game

The --force option can wipe existing contents at the target before republishing. No repository commands were executed during this capture.

## User-provided post
The post describes Godogen as a complete game-generation workflow that handles architecture design, asset generation, code writing, engine screenshots, and visual quality checks. It highlights support for Godot 4, Bevy, and Babylon.js; Claude Code and Codex; and language references and lazy-loaded API documentation for more than 850 GDScript classes.

The official README confirms the three-engine workflow, Claude Code and Codex support, asset generation, running-engine proof, and screenshot-driven iteration. The current README does not state the 850 GDScript-class count. That count is therefore recorded as an unverified user-provided claim.

The phrases “holy grail,” “complete games,” “ready to run right away,” and “everyday hardware” are promotional or broad claims. The repository requires several local tools, external API keys, and platform dependencies. It also says full runs can take hours and may be faster on GPU servers.

## Source links
- https://t.co/YCqhrL7OL7
- https://github.com/htdt/godogen
- https://github.com/htdt/godogen/blob/master/README.md
