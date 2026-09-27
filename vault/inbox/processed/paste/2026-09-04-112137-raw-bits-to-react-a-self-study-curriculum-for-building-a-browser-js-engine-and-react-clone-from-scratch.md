---
title: "Raw Bits to React: A Self-Study Curriculum for Building a Browser, JS Engine, and React Clone from Scratch"
kind: "paste"
captured_at: "2026-09-04 11:21"
tags: ["react", "browser-internals", "javascript-engine", "learning-curriculum", "performance", "systems-programming", "rust", "cplusplus", "webassembly", "self-study"]
source_url: "https://github.com/renderffx/raw-bits-to-react"
status: "inbox"
---

# Raw Bits to React: A Self-Study Curriculum for Building a Browser, JS Engine, and React Clone from Scratch

## Source overview
Raw Bits to React is a self-study curriculum/reading-list-style repository, not a code library, that walks through building an increasingly complete web stack from first principles: a toy CPU simulator, a networking layer, a browser rendering engine, a JavaScript engine, a virtual DOM, a React-like reconciler with hooks and concurrent features, and a Next.js-style app framework, culminating in a capstone project. GitHub metadata checked at time of capture reports 987 stars, 48 forks, and no detected repository license (the repo did not have a recognized SPDX license at the time of this check); it was created 2025-08-25.

## Framing and motivation
The README's framing argument is that most AI-generated React code today is unoptimized (citing patterns like unnecessary useEffect chains and re-render/state-thrashing issues) because the engineers writing or reviewing it do not understand the layers underneath React: CPU execution, caches, virtual memory, networking, browser parsing/layout/paint, JS bytecode execution and garbage collection, and Fiber reconciliation. The stated thesis is that deep, from-scratch understanding of that full stack is what differentiates a 'craft'-focused engineer in an era of AI-generated code, framed with a quoted line attributed to Benji Taylor: 'In the age of slop, craft is the differentiator.' The author explicitly states this curriculum will not directly guarantee a job, but frames it as producing genuine systems-level engineering competence.

## What the curriculum has learners build (summarized, not the full detailed breakdown)
Across its documented weeks, the curriculum has learners implement, from scratch:
- A toy RV32I CPU instruction-set simulator with a two-level cache, to feel branch misprediction and cache-miss costs directly.
- A raw networking layer: TCP/UDP sockets, a persistent HTTP/1.1 client/server with chunked encoding, an HTTP/2 overview, TLS 1.3 handshake intuition (without a full cryptography deep-dive), and WebSocket framing.
- A browser rendering engine: an HTML tokenizer and tree constructor, a CSS parser covering cascade/specificity/layers, a layout engine implementing Flexbox and Grid, and a paint/compositing stage with a basic software rasterizer, tested by rendering real Wikipedia pages.
- A JavaScript engine: a hand-written lexer/parser/AST, a stack-based bytecode virtual machine, closures and prototype chains with inline caching, a generational garbage collector, and a full event loop (microtasks, macrotasks, requestAnimationFrame, requestIdleCallback).
- A virtual DOM library progressing from a naive diff algorithm to keyed O(n) heuristics to a Fiber-style architecture with units of work, yielding, and time-slicing.
- A React clone: a Fiber reconciler, a full hooks system, concurrent features (Suspense, transitions, deferred values), streaming server-side rendering, and selective/progressive hydration.
- A Next.js-inspired application layer on top of that stack: file-based routing, static generation and incremental static regeneration, API routes, and code-splitting.
- A capstone project combining all of the above into one coherent custom web platform, plus a documented 'extreme constraints' exercise porting the stack to a simulated low-power, low-memory, high-latency environment.

## Prerequisites and target audience
The README states this curriculum assumes fluency in C++ or Rust (including templates/lifetimes/unsafe code), working knowledge of CPU pipelines, branch prediction, cache associativity, virtual memory and TLBs, general operating-system concepts (processes, syscalls, memory layout, scheduling), strong data structures and algorithms background, and real experience with low-level debugging and profiling tools (GDB/LLDB, Valgrind, perf, strace). It explicitly states this is not intended for readers looking for quick copy-paste code or who are intimidated by terms like 'mark-compact,' 'TLB miss,' 'bailout,' or 'paint chunk,' and not for those unwilling to work in C++/Rust for an extended period.

## Time commitment
The README states a realistic commitment of about 12 core weeks of deep, focused study, typically stretching to 4-6 months when done part-time.

## Stated success criteria
The README frames a successful completion as producing complex UIs that render at a stable 60fps, graceful handling of 10,000-plus concurrent DOM mutations, sub-second initial page loads, graceful degradation under constraints, and complete documentation (architecture diagrams, performance traces, and metrics) of the learner's own implementation.

## Evidence boundary
The repository README was fetched and read directly for this capture, and GitHub API metadata (stars, forks, license, creation date) was checked separately. This capture summarizes the curriculum's structure and stated goals; no part of the curriculum was actually followed, no code from the repository was run, and the specific week-by-week technical claims (e.g. exact algorithmic details of the described Fiber/hooks/GC implementations) reflect the author's own curriculum design rather than an independently verified technical reference. The repository's license status should be confirmed directly on GitHub before reusing any of its content, since no recognized open-source license was detected on the repository at the time of this check.

## Source
https://github.com/renderffx/raw-bits-to-react
