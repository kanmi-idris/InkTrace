---
title: "MargeloChat: Native-Feeling React Native AI Chat with WebSocket Streaming and Pinecone RAG"
kind: "paste"
captured_at: "2026-09-25 15:20"
tags: ["react-native", "ai-chat", "rag", "openai", "websocket", "nitro", "legend-list", "keyboard-controller", "liquid-glass", "skia", "pinecone", "supplemental-capture"]
source_url: "https://margelo.com/blog/building-native-llm-chat-app-with-rag"
status: "inbox"
---

# MargeloChat: Native-Feeling React Native AI Chat with WebSocket Streaming and Pinecone RAG

## Relation to existing coverage
InkTrace already has a placeholder-only source record for this article: src-2026-07-16-006. This supplemental capture fills the missing source summary without overwriting the earlier raw notes. The canonical source is Margelo's July 16, 2026 article by Dave Mkpa-Eke, titled Building a ChatGPT-Style AI Chat App in React Native with RAG and Streaming.

The accompanying open-source demo repository is margelo/ai-chat-demo. Its README confirms the app's central structure: a React Native New Architecture chat app, OpenAI Responses API streaming over a native WebSocket, a Pinecone-backed search tool for Margelo-specific questions, native markdown rendering, reasoning display, Liquid Glass fallbacks, and a keyboard-aware chat list.

## Product architecture
The demo, called MargeloChat, aims to feel like a native ChatGPT or Claude client while remaining a React Native application. Its major design choice is to keep expensive work away from the JavaScript frame loop:

- Reanimated and react-native-keyboard-controller drive composer, message, and keyboard animations on the UI thread.
- react-native-nitro-websockets provides the native WebSocket connection to OpenAI.
- react-native-nitro-text-decoder handles UTF-8 decoding natively for incoming text frames.
- react-native-enriched-markdown parses and renders streaming markdown natively.
- react-native-nitro-fetch handles the Pinecone HTTP lookup.
- Legend List manages chat scrolling and message anchoring.
- React Native Skia draws the animated Thinking shimmer.

The article's thesis is that React Native can produce native-feeling AI chat when animation, networking, parsing, and list work are assigned to native or UI-thread implementations rather than repeatedly blocking the JavaScript thread.

## Composer and keyboard behavior
The composer is absolutely positioned and wrapped in KeyboardStickyView from react-native-keyboard-controller. The component reads live keyboard height on the UI thread and translates the composer, while the opened offset uses the bottom safe-area inset to avoid a dead gap above the keyboard.

Attachment thumbnails use a measured content height inside an overflow-hidden clipping container. Reanimated animates the clip's height and opacity, while a displayedAttachments copy keeps the final thumbnails mounted until the collapse finishes. This avoids both a fixed-height composer and a visual pop during removal.

The empty-state logo uses useReanimatedKeyboardAnimation and the keyboard progress value. The lift distance is based on measured composer height plus a gap, rather than a hardcoded number, so the logo clears the composer even when attachments make it taller.

Liquid Glass surfaces use Callstack's @callstack/liquid-glass on iOS 26 and a plain tinted rounded surface elsewhere. The library's capability check lets the demo keep the same layout when real system glass is unavailable.

## Message animation and chat scrolling
The user bubble uses a Reanimated SlideInDown entering animation with an exponential easing curve. A delayed Thinking shimmer appears after the bubble settles. The shimmer is rendered with Skia text and a moving dim-bright-dim linear gradient driven by a UI-thread clock.

The chat list uses Legend List's anchoredEndSpace behavior. On send, the newly created user message becomes the anchor and the list adds trailing space so the message can animate to the top even when the conversation is too short to fill the viewport. The reply streams below it. As the answer grows and the reserved space drains, the app switches to follow-the-bottom behavior. Keyboard-aware list helpers keep the scroll target, keyboard, and composer aligned.

## Native reply rendering and reasoning
Assistant replies are rendered with react-native-enriched-markdown. The demo enables GitHub-flavored markdown, tappable links, and a streaming animation for incoming chunks. The article presents native parsing and native text rendering as a way to avoid parsing large or continuously changing markdown on the JS thread.

A reasoning summary is handled as a separate streamed event, response.reasoning_summary_text.delta, rather than being mixed into the visible answer. The app shows a collapsible reasoning row and opens the full trace in react-native-true-sheet. The sheet is mounted once at the screen root, lazy-loaded, and mounted only while a trace is open. Its auto and full-height detents support both short and long traces.

SF Symbols are rendered through react-native-nitro-symbols on iOS, with Material Design Icons as the Android fallback.

## OpenAI WebSocket integration
The app connects to the OpenAI Responses API through WebSocket mode. Each turn sends a response.create event. Text arrives through response.output_text.delta events. Tool calls arrive as function-call items, and the tool result is sent back as a function_call_output using previous_response_id, so the model can continue the same response chain.

The official OpenAI WebSocket documentation confirms this continuation model and states that WebSocket mode is intended for long-running, tool-call-heavy workflows. It documents incremental continuation using previous_response_id and new input items, and reports up to roughly 40 percent faster end-to-end execution for rollouts with 20 or more tool calls. That latency figure is OpenAI's own documentation claim, not a benchmark of this demo.

The demo prewarms the WebSocket at app start from native code, before the JavaScript bundle loads. The article reports roughly 150 ms saved on an iPhone 16 and 250 ms on a Samsung Galaxy S22 in release builds. These measurements are author-reported and were not independently reproduced.

The article warns that the API key is stored in the demo app only for convenience. A production app must place the provider key behind a server-side relay or API route because a key in an app bundle can be extracted. The demo repository repeats this warning.

## RAG flow
Each request declares a search_margelo_kb function tool. Its description instructs the model to search for Margelo-specific questions and not answer those questions from memory. When the model emits a function call, the app sends the natural-language query to a Pinecone index with integrated embeddings. Pinecone embeds the raw query server-side, returns the closest chunks, and the app joins the selected chunk text into one context string.

The app sends that context back as a function_call_output linked to the original call. The model then produces a grounded answer over the same WebSocket. The tool is re-declared for subsequent turns, and the app caps tool calls per turn to avoid an accidental search loop.

## Navigation and native interactions
Recents and the active chat are two pages in react-native-pager-view, which wraps UIPageViewController on iOS and ViewPager2 on Android. The swipe follows the platform pager instead of a JavaScript gesture animation. When the pager settles on the recents page, the app dismisses the keyboard. An off-screen chat page can be frozen to avoid unnecessary renders.

## Reported performance
The article reports release-build measurements on a physical iPhone 16: approximately 57 to 60 FPS while scrolling long conversations, around 15 percent CPU, and approximately 225 MB memory. During reply generation, CPU rises to roughly 45 to 55 percent while the UI thread remains at about 60 FPS. It also reports approximately 0.6 seconds from process creation to first frame. These are demo measurements from the article, not independently reproduced.

The article also cites a react-native-nitro-fetch benchmark claiming a 1.30x average result, or about 192 ms versus 147 ms, against the built-in fetch in an idle release build over Wi-Fi. The package's own README describes its native Cronet and URLSession stack, but the benchmark was not rerun here.

## Limitations and production warnings
This is a demo, not a production-ready chat backend. It requires an OpenAI key and Pinecone credentials in local configuration. The repository explicitly warns that those keys are safe only for local demonstration. The demo also depends on a specific native stack and a development environment using the New Architecture.

The article's most reusable advice is to profile release builds, treat markdown rendering as a performance-sensitive path, use list-specific performance controls, keep streaming work off the JS thread, and use a server-side key relay in real products.

## Evidence boundary
The Margelo article, the margelo/ai-chat-demo README, the official OpenAI WebSocket documentation, and the react-native-nitro-fetch README were inspected. I did not install the demo, open an OpenAI connection, provision Pinecone, run a device build, or reproduce its FPS, CPU, memory, launch, prewarm, or fetch measurements. All performance figures remain author or vendor claims.

## Sources
- https://margelo.com/blog/building-native-llm-chat-app-with-rag
- https://github.com/margelo/ai-chat-demo
- https://developers.openai.com/api/docs/guides/websocket-mode
- https://github.com/margelo/react-native-nitro-fetch
- Existing placeholder: src-2026-07-16-006
