---
title: "GPUix: React Bindings for Zed's GPU-Accelerated GPUI"
kind: "paste"
captured_at: "2026-08-23 20:16"
tags: ["github", "gpuix", "gpui", "react", "typescript", "rust", "napi-rs", "desktop-apps", "metal", "vulkan", "directx", "native-ui"]
source_url: "https://github.com/remorses/gpuix"
status: "inbox"
---

# GPUix: React Bindings for Zed's GPU-Accelerated GPUI

## Source overview
GPUix provides React bindings for GPUI, Zed's GPU-accelerated UI framework. It allows developers to build native desktop applications with React and TypeScript. Components render through GPU backends instead of Electron or web views.

The repository describes Metal on macOS, DirectX on Windows, and Vulkan on Linux. Flexbox layout uses Taffy. The project is licensed under Apache-2.0.

## Examples
The repository includes:
- Chat: a Waku-style app with transparent titlebar, animated sidebar, message list, composer, and native markdown.
- Native text: three native text components with a tab switcher.
- Counter: minimal state, events, and hover example.
- Diff: a diff viewer built from div and text elements.

The examples use hardcoded data and run with bun --hot.

## Architecture
GPUix bridges React to GPUI through a mutation-based protocol over napi-rs FFI. React's reconciler sends direct DOM-like mutations such as createElement, appendChild, setStyle, and setText to Rust. It does not serialize a complete JSON tree.

Rust stores a retained element tree with styles, children, and event flags. On each GPUI frame, GpuixView renders the retained tree into ephemeral GPUI elements. GPUI performs layout and GPU rendering.

Only changed elements cross the FFI boundary because React's reconciler computes the differences.

The event path runs in reverse through a ThreadsafeFunction. Rust emits an event payload to the Node.js event loop. A JavaScript event registry resolves the element ID and event type, then invokes the React handler.

## Packages
- @gpuix/native: Rust and napi-rs bindings, GpuixRenderer, RetainedTree, element construction, style application, and event wiring.
- @gpuix/react: React reconciler, event registry, TypeScript types, and mutation host configuration.

## Usage
The @gpuix/react render() function creates the native window, mounts React, and starts the frame loop. Options include title, width, height, transparent titlebar, window background, traffic-light position, and a debug frame overlay.

The README recommends render() as the application entry point. createRenderer(), createRoot(), and startFrameLoop() remain public for tests and custom hosts.

Bun hot reload remounts React on the same native window. The window, GPU device, native addon, and GPUI scroll physics stay active. React state, focus, and event handlers reset on remount unless a Bun React Fast Refresh transform preserves hook state.

## Native animation
motion.div animates numeric style targets on the native side. Rust calculates intermediate values and requests GPUI frames without a React render or N-API call for every animation frame.

Supported targets include width, height, top, right, bottom, left, opacity, and borderRadius. Transitions support duration, delay, and easing. Springs, keyframes, variants, exit transitions, and shared-layout animations are not available yet.

## Scrolling and virtualization
Containers with overflow: scroll use native GPUI scrolling with persistent offsets. Nested vertical scrolling is not supported. Horizontal scrolling is the exception when configured with overflowX.

virtual-list supports long, variable-height collections. React and Rust retain all rows, while GPUI builds, lays out, and paints only rows near the viewport. Stable React keys and bounded height are required. Chat-style lists can use alignment=bottom and followTail.

## Native elements and UI capabilities
The status list includes native text input and multiline textarea, image and SVG elements, virtual lists, code, diff, and markdown elements, cross-element text selection, headless Select, Combobox and Tooltip, native hover and active styles, keyboard events, focus management, scroll APIs, window chrome, multiple windows, canvas, and debug frame overlays.

Text painted by GPUI is selectable and copyable, including code, diff, and markdown content. Text elements need explicit color because GPUI does not inherit text color like CSS.

## Testing and automation
The project includes a GPU-backed test renderer that runs the same GpuixView, element construction, style application, and event handlers as production.

Automation supports testId locators, text and type locators, click, fill, press, waitFor, screenshots, and deterministic native motion clocks. Tests can pause or fast-forward the motion clock and capture exact frames for review.

The lower-level renderer can simulate clicks and keystrokes, drain native events, capture screenshots, and return painted text. The repository documents screenshot tests and a development loop that rebuilds the Rust side and refreshes screenshots.

## Platform and development notes
Prerequisites include Rust, Node.js 18+, Xcode with the Metal Toolchain on macOS, Bun, and the pinned GPUI fork submodule. Windows and Linux use GPUI's native event loop on a dedicated Rust UI thread. The README says Windows runtime validation is pending.

On macOS, the frame loop ticks at a fixed rate of about 125 frames per second by default. The README warns not to drive tick with setImmediate because an unpaced loop can consume high idle CPU.

Native .node edits require a rebuild because Node cannot unload the loaded native library. The documented development command watches Rust sources, rebuilds, and reruns screenshot tests.

## User-provided source
https://github.com/remorses/gpuix
