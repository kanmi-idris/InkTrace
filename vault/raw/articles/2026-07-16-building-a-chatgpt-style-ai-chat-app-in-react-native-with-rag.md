---
title: Building a ChatGPT-Style AI Chat App in React Native with RAG
kind: paste
captured_at: 2026-07-16 21:11
tags: [react-native, rag, ai-chat, margelo, streaming, nitro]
source_url: https://blog.margelo.com/building-native-llm-chat-app-with-rag
status: inbox
---

# Building a ChatGPT-Style AI Chat App in React Native with RAG

# Building a ChatGPT-Style AI Chat App in React Native with RAG & Streaming

**Author:** Dave Mkpa-Eke (Software Engineer @ Margelo)
**Date:** July 16, 2026
**URL:** https://blog.margelo.com/building-native-llm-chat-app-with-rag

A native-feeling AI chat app built in React Native with OpenAI's Responses API streamed over native WebSockets, a Liquid Glass composer, smooth native animations, and Pinecone-backed RAG.

## Key Technical Details

### Liquid-Glass Floating Composer
- Uses `@callstack/liquid-glass` by Callstack — wraps UIKit's real glass material (iOS 26+ only)
- `isLiquidGlassSupported` for branching: real glass on iOS 26+, flat tinted rounded rect fallback elsewhere
- Composer pinned with `KeyboardStickyView` from `react-native-keyboard-controller` — reads keyboard's live height on UI thread via Reanimated, no JS round-trip
- Attachment thumbnails use `useAnimatedStyle` with `withTiming` for height/opacity transitions, measured via `onLayout`
- Margelo logo lifts with keyboard using `useReanimatedKeyboardAnimation()` `progress` value

### Message Sending & Streaming
- User bubble uses `SlideInDown` entering animation with `Easing.out(Easing.exp)` (700ms)
- "Thinking" shimmer fades in after 450ms delay to avoid competing with bubble animation
- Shimmer drawn with React Native Skia: `useClock` drives a LinearGradient sweep across glyphs
- Legend List v3 `anchoredEndSpace` anchors sent message to top while reply streams in below
- `scrollMessageToEnd` helper animated without dismissing keyboard

### Reply Rendering
- Markdown rendered natively by `react-native-enriched-markdown` (Software Mansion) — uses native md4c parser, renders native text components
- `streamingAnimation` prop eases each new chunk in
- SF Symbols via `react-native-nitro-symbols` (by Dave Mkpa-Eke) with Material Design Icon fallback on Android
- Reasoning trace: collapsible row above reply, opens full trace in `react-native-true-sheet` (native bottom sheet, zero JS hacks)
- Sheet uses `detents={['auto', 1]}` — auto sizes to content, full screen option; leaving backgroundColor unset keeps system's Liquid Glass sheet material on iOS 26

### OpenAI Integration
- WebSocket to OpenAI Responses API via `react-native-nitro-websockets` — native drop-in (Nitro-backed, libwebsockets + mbedTLS)
- Token deltas arrive as `response.output_text.delta` events
- Single connection for tool-calling loop — ~40% faster end-to-end for 20+ tool calls vs HTTP
- `prewarmOnAppStart` opens connection on native background thread before React Native boots: ~150ms saved on iOS (iPhone 16), ~250ms on Android (Samsung Galaxy S22)
- UTF-8 decoding done natively via `react-native-nitro-text-decoder`
- API key warning: ship via server-side proxy, never in production bundle

### RAG (Retrieval-Augmented Generation)
- OpenAI function call `search_margelo_kb` declared as tool per request
- Model calls tool for Margelo-specific questions; description steers "do not answer from memory"
- `response.output_item.done` event captures function_call items
- Pinecone index uses integrated embedding — sends raw text, Pinecone embeds server-side
- Uses `react-native-nitro-fetch` for HTTP call (~15-25% faster than built-in fetch)
- Top chunks joined into context string, sent back as `function_call_output` via `previous_response_id`
- Tool re-declared each round; cap at few calls per turn to prevent loops

### Navigation
- `react-native-pager-view` (Callstack) wraps UIPageViewController / ViewPager2
- Two pages: recents list and chat — swipe right for recents
- `initialPage={1}` opens on chat; `onPageSelected` dismisses keyboard on recents

### Performance
- All animations on UI thread (Reanimated + keyboard-controller)
- Stream decoded natively (NitroWebSocket)
- Markdown parsed/rendered natively (enriched-markdown)
- RAG lookup via nitro-fetch
- Measured on iPhone 16 release build: ~57-60fps scrolling, ~15% CPU, ~225MB memory
- Generating reply: ~45-55% CPU, UI thread maintains 60fps
- Cold launch: ~0.6s process creation to first frame
- Tools: react-native-performance-toolkit, Xcode Instruments, react-native-release-profiler

### General Tips
- Profile in release build, not dev — use `react-native-release-profiler`
- Treat markdown rendering as hot spot — use native parsing/rendering
- Read list performance docs (Legend List: recycleItems, estimatedItemSize, keyExtractor, drawDistance)
- Study UIs you admire — Spotted in Prod, Mobbin, ChatGPT for iOS, Claude, v0

### Libraries & Maintainers
- Legend List — Jay Meistrich / Margelo
- react-native-keyboard-controller — Kiryl Ziusko / Margelo
- @callstack/liquid-glass — Oskar Kwaśniewski / Callstack
- react-native-pager-view — Callstack
- react-native-reanimated — Software Mansion
- react-native-enriched-markdown — Software Mansion Labs
- @shopify/react-native-skia — Shopify
- react-native-true-sheet — Jovanni Lo
- Nitro — Marc Rousavy / Margelo
- react-native-nitro-fetch, react-native-release-profiler, nitro-websockets — Szymon Kapała / Margelo
- react-native-nitro-symbols — Dave Mkpa-Eke / Margelo
