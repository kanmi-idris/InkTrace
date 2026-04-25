---
id: topic-react-native-and-expo-notes
type: topic
status: active
confidence: medium
source_ids: [src-2026-04-12-006, src-2026-04-12-007, src-2026-04-12-023, src-2026-04-12-026, src-2026-04-12-033, src-2026-04-12-044, src-2026-04-12-048, src-2026-04-12-049, src-2026-04-12-055, src-2026-04-12-058, src-2026-04-13-003, src-2026-04-13-004, src-2026-04-15-001, src-2026-04-16-001, src-2026-04-25-001, src-2026-04-25-004, src-2026-04-25-005, src-2026-04-25-006]
updated_at: 2026-04-25
---

# React Native And Expo Notes

## Summary
The reviewed mobile-development slice of the export looks like a rolling toolbox for React Native and Expo work, with attention on editing rich text, motion and interaction patterns, deep linking, security review, Live Activities, bottom-sheet orchestration, and AI-assisted app creation. [src-2026-04-12-007][src-2026-04-12-023][src-2026-04-12-026][src-2026-04-12-033][src-2026-04-12-044][src-2026-04-12-048][src-2026-04-12-049][src-2026-04-12-055]

## Key Ideas
- The reviewed links combine editor infrastructure, interaction polish, and navigation primitives rather than focusing on a single feature area. Rich text editing, animation examples, sortable layouts, and stacked bottom sheets all appear as reusable UX building blocks. [src-2026-04-12-007][src-2026-04-12-023][src-2026-04-12-026][src-2026-04-12-055]
- The follow-up repository references also reinforce the polish-and-feedback layer of the stack: `expo-gooey-toast` fits the same family of reusable feedback primitives as animated interaction libraries and notification surfaces, even though its README has not yet been fetched directly. [src-2026-04-13-004][src-2026-04-12-023]
- A follow-up repository source, `expo-pretext`, reinforces the same toolbox direction around text measurement and layout by exposing pre-render height prediction, obstacle-aware text reflow, and streaming-text use cases while staying inside the standard React Native rendering tree. [src-2026-04-12-058]
- A newer follow-up source, `react-native-nano-icons`, pushes the same performance-oriented toolbox into icon rendering by converting SVG folders into optimized icon fonts and rendering them as native glyph stacks, with explicit positioning around repeated small-icon use cases such as lists, tab bars, and inline badges. [src-2026-04-15-001]
- `react-native-capture-view` extends the same native-utility layer into screenshot and export workflows by offering Fabric-oriented capture primitives for a single view subtree, the visible screen, and full plain-`ScrollView` content, with explicit Expo dev-build and New Architecture requirements. [src-2026-04-16-001]
- `react-native-transformer-text-input` extends the same performance-oriented utility layer into text entry by moving input transformation onto the UI thread through worklets, aiming to preserve JS-level flexibility while avoiding controlled-input lag, cursor flicker, and unstable caret behavior. [src-2026-04-25-001]
- `expo-circular-reveal` adds a more specialized theming-motion primitive to the toolbox by packaging screenshot capture, overlay management, and native circular-mask animation into a single Expo Module for polished theme transitions triggered from a tap point. [src-2026-04-25-004]
- `TypeGPU` adds a more experimental GPU-compute and rendering angle to the mobile stack through its explicit React Native support story via `react-native-wgpu`, positioning typed WebGPU primitives as usable beyond the browser. [src-2026-04-25-005]
- Integration and platform concerns also show up directly through deep linking and security tooling. Detour positions itself as a developer-first deep linking library, RNSEC targets vulnerability discovery in React Native and Expo apps, and MobSF broadens that security slice into full static and dynamic analysis of shipped mobile binaries and runtime behavior. [src-2026-04-12-044][src-2026-04-12-048][src-2026-04-25-006]
- `expo-app-blocker` extends the same native-integration theme into device-governance and blocking workflows by claiming to hide the usual complexity around Screen Time APIs, iOS extension targets, entitlements, Android overlays, and manifest wiring behind an Expo config plugin and TypeScript API. [src-2026-04-13-003]
- The presence of Voltra and Rork extends the mobile toolbox into emerging workflow layers: JSX-driven Live Activities on one side and AI-generated Expo apps on the other. [src-2026-04-12-033][src-2026-04-12-049]
- The chat export itself reinforces that this topic was not accidental drift; React Native, Expo, and related implementation notes recur repeatedly across the captured links and short notes. [src-2026-04-12-006]

## Related
- [[whatsapp-tools-cheatsheet-import]]
- [[ai-agent-tooling-from-chat]]
- [[developer-tooling-catalog]]
- [[unresolved-whatsapp-links]]

## Contradictions
- None noted in the reviewed subset. The main limitation is coverage: many earlier GitHub and documentation links for the mobile stack did not resolve cleanly during import. [src-2026-04-12-006]

## Open Questions
- Which unresolved mobile links are worth manually recovering first: libraries, tutorials, or video walkthroughs? [src-2026-04-12-006]
