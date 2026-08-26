---
title: "Shirei: Cross-Platform Declarative GUI Framework for Go"
kind: "paste"
captured_at: "2026-08-24 10:23"
tags: ["shirei", "go", "gui", "native-apps", "declarative-ui", "flexbox", "cross-platform", "mobile", "snapshot-testing", "github"]
source_url: "https://judi.systems/shirei/"
status: "inbox"
---

# Shirei: Cross-Platform Declarative GUI Framework for Go

## Source overview
Shirei is a cross-platform declarative GUI framework for Go. It targets lightweight native applications instead of HTML and JavaScript interfaces.

The project repository is https://github.com/hasenj/go-shirei. The package import path is go.hasen.dev/shirei. The inspected site lists Shirei v0.6.7 as the latest release, with OS dark mode, window controls, color emoji, and widgets.

## Application model
Shirei describes the current interface with ordinary Go functions, structs, loops, and control flow. A view function composes containers and controls from application state. A button returns a boolean when clicked, so interaction can be handled in ordinary control flow rather than callback wiring.

Application state remains plain Go data: structs, slices, maps, selected items, filters, and sort modes. On a requested update, Shirei rebuilds a transient container tree from that state, then performs layout and rendering in deferred passes.

Custom components can retain internal state. Mutable data can be bound directly to controls such as text inputs, toggles, and sliders. Go loops compose repeated UI elements, and if statements control which elements exist.

## Layout and widgets
The layout system uses a flexbox-style container tree. It provides padding, gaps, rows, alignment, wrapping, backgrounds, borders, corners, shadows, and expansion attributes.

The framework includes default widgets, robust text editing, virtual lists, tables, modals, scrollbars, icon fonts, drag-and-drop support, audio support, and mobile extensions.

The site includes demos for drag-and-drop, layout, text editing, styling, animation, audio, custom widgets, and a browser-based try page. The WebAssembly build downloads only after the user opens the try page.

## Platform support
The repository README lists support for:
- Windows.
- macOS.
- Linux with Wayland and X11.
- iOS.
- Android.

Cross-compilation works for most platforms without CGO. macOS and iOS are exceptions. The repository provides shirei_mobilerun for mobile development runs and shirei_bundle for release packaging.

Example applications include a Markdown viewer, Git history viewer, find-in-files tool, process monitor, disk-usage visualizer, piano, font viewer, icon gallery, pprof visualizer, executable-size viewer, and Hacker News reader.

## Performance and testing
The project treats binary size, performance, and resource use as first-class concerns. The site says a typical native binary is about 10 MB.

Snapshot testing can render a normal application frame to an image without opening a native window or requiring a GPU. The repository uses this approach in examples such as the pprof visualizer.

## Current limitations
The repository README documents these limitations:
- Shirei applications support one window with standard decorations.
- Accessibility support is not available yet and is planned before v1.0.
- GPU surfaces are not available and remain under consideration.

## Tutorial provenance
The linked tutorial explains the plain-data declarative model, layout mechanics, interaction, application patterns, and common mistakes. The tutorial states that Claude Fable 5 wrote it and that the original human author and technical director edited it. It also states that an initial version was written with Fugu from SakanaAI. These authorship statements describe the tutorial source and are not independent evidence about framework behavior.

## Security and execution boundary
The site provides Go installation and run commands, but no commands were executed during this capture.

## Source links
- https://judi.systems/shirei/
- https://github.com/hasenj/go-shirei
- https://github.com/hasenj/go-shirei/blob/master/docs/tutorial.md
