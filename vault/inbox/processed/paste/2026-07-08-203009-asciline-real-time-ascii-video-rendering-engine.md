---
title: ASCILINE — Real-Time ASCII Video Rendering Engine
kind: paste
captured_at: 2026-07-08 20:30
tags: [ascii-art, video-rendering, websockets, python, fastapi, opencv, canvas, real-time, streaming]
source_url: 
status: inbox
---

# ASCILINE — Real-Time ASCII Video Rendering Engine

## ASCILINE — Real-Time ASCII Video Rendering Engine

Source: https://github.com/YusufB5/ASCILINE (2.4k stars, 273 forks, MIT with anti-ad restriction)
Author: YusufB5

### What it is
High-performance, cross-platform real-time ASCII video rendering engine. Maps pixels to text-based representations, streams binary-encoded frames via WebSockets for ultra-low latency 30 FPS playback using HTML5 Canvas and requestAnimationFrame.

Core objective: transform the web into a dynamic typographic canvas.

### Architecture
- **Backend**: Python/FastAPI — decodes video with OpenCV, maps pixels to ASCII via NumPy, streams binary data
- **Frontend**: Vanilla JS — receives binary frames via WebSockets, jitter buffer, renders to Canvas grid
- **Communication**: Optimized WebSocket protocol with custom INIT handshake for dynamic resolution/FPS adjustment

### Rendering Modes
| Mode | Colors | Description |
|------|--------|-------------|
| 1 | B&W | DOM mode |
| 2 | 512 | Basic color |
| 3 | 32K | High color |
| 4 | 262K | Millions |
| 5 | 16M | Ultra fidelity |
| --pixel flag | 16M | Replaces chars with colored blocks, ~360p quality |

### Features
- Cross-platform (Windows, macOS, Linux)
- Real-time ASCII & Pixel streaming
- Multiple color modes (B&W to 16M)
- Master clock sync — audio track as absolute master clock for perfect A/V sync
- Low-overhead binary protocol (Uint8Array directly to canvas)
- Adaptive Frame Codec — opt-in codec picks smallest of RAW/ZLIB/DELTA per frame, measured wire savings up to 375x on static content
- Webcam live streaming support (selfie-mirror, device select, FPS control)
- YouTube/URL playback via yt-dlp with LRU cache garbage collection
- JSON playlists with per-video mode/volume overrides
- Folder-based auto-queuing
- Real-time frontend filters (contrast, brightness, gamma, sharpen, invert, palettes)
- Terminal standalone mode (ANSI, zero-flicker, true color)
- LAN streaming (--host 0.0.0.0)

### Adaptive Codec
3 encodings per frame, 1-byte tag:
- RAW — framebuffer as-is (incompressible frames)
- ZLIB — zlib(framebuffer) for general motion
- DELTA — only cells that changed since last frame (static/low-motion)
Clients opt in with /ws?codec=adaptive. Bit-exact verified.

### Installation
```sh
pip install fastapi uvicorn opencv-python numpy websockets
python stream_server.py video.mp4 --cols 240
```
Open http://localhost:8000.

### Live Demo
https://www.asciline.dev

### Languages
Python 62.4%, JavaScript 25.7%, CSS 7.2%, HTML 4.2%, Shell 0.5%
