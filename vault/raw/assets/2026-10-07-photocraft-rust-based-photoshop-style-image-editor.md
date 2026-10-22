---
title: "PhotoCraft: Rust-based Photoshop-style image editor"
kind: "project capture"
author: "storytold"
source_url: "https://github.com/storytold/photocraft"
origin_url: "https://t.co/0sxtGNaPtq"
tags: ["image-editor", "rust", "PSD", "WebAssembly", "MCP", "early-alpha", "MIT", "Apache-2.0"]
---

# PhotoCraft

## Project description
The repository describes PhotoCraft as an open-source, clean-room reimplementation of Adobe Photoshop in pure Rust. It presents itself as an offline editor with layers, masks, adjustment layers, type, vectors, brushes, and PSD support. These are maintainer claims; I did not test them.

## Platform, license, and maturity
The README badges list macOS, Windows, Linux, FreeBSD, and Web. They show dual licensing under MIT or Apache-2.0 and mark the project as early alpha. The README says the desktop app is native and the engine and UI also compile to WebAssembly.

## Technical highlights
- The README lists a GPU compositor using wgpu with Metal, Vulkan, DX12, and WebGPU backends.
- The README says the app has a CLI, JSON control channel, and MCP server. It describes more than 500 commands shared by the UI and these interfaces.
- The README reports PSD compatibility results: 307 of 309 files in the psd-tools test set and 169 of 170 files in a mixed ag-psd/psd-tools set. These are project-reported test results, not independent verification.
- The README says its implementation uses public specifications and observed behavior, with no proprietary code, shaders, or assets. This clean-room claim is not independently verified.

## Evidence limits
I inspected the public GitHub README and its badges. I did not download, build, or test PhotoCraft. Its early-alpha status is important when evaluating compatibility or production use.
