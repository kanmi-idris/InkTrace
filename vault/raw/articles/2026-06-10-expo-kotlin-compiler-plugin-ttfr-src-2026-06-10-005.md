# How a Kotlin compiler plugin cut Android time to first render

Captured from the Expo blog on 2026-06-10.

Canonical URL:
https://expo.dev/blog/how-a-kotlin-compiler-plugin-cut-android-time-to-first-render

Article metadata captured:
- Title: How a Kotlin compiler plugin cut Android time to first render by 30%
- Publisher: Expo Blog
- Author: Lukasz Kosmaty
- OG description: A new Kotlin compiler plugin in SDK 56 strips reflection from Expo Modules on Android: 70% faster init, no code changes for app developers.

Core framing captured from the article:

- Expo SDK 56 introduces a Kotlin compiler plugin for Expo Modules on Android.
- The plugin removes reflection-heavy runtime work from module initialization and Record conversion.
- Expo reports three top-level outcomes:
  - 70% faster module initialization
  - 30% lower Android time to first render
  - Record conversions about 6x faster than in SDK 55
- App developers get the optimization without changing application code.

Historical and technical context captured:

- Older Android module infrastructure inherited reflection-heavy patterns from Unimodules and earlier bridge-style exposure models.
- Even after the Expo Modules API and Kotlin DSL removed most reflection, runtime type resolution still remained for function arguments and Record properties.
- The article identifies two remaining costs:
  - reconstructing type parameters, often via `typeOf<T>()`
  - expensive Record conversion that relies on Kotlin reflection, property introspection, annotations, accessibility changes, and parsing Kotlin `@Metadata`

Why code generation was not chosen:

- Expo evaluated annotation processors, KSP, and standalone code-generation approaches.
- The article argues against them because generated code becomes part of the developer-facing project surface, complicates debugging, and cannot surgically modify existing code in place.

Why K2 changed the solution space:

- Kotlin 2.0 and the K2 compiler expose an IR-based compiler plugin API.
- That API lets Expo make compile-time substitutions inside existing code paths instead of generating parallel source files or editing bytecode directly.
- The article positions this as safer and easier to test than raw bytecode modification.

What the plugin does, as captured from the article:

- It replaces runtime type discovery with precomputed type descriptors at compile time.
- Calls like `typeDescriptorOf<T>()` are written as stubs in source but are replaced during compilation with direct references to precomputed descriptor objects.
- It also optimizes Record conversion by avoiding repeated runtime reflection over property structure and type metadata.
- The article says module maintainers can opt into the Record-side speedup with one annotation.

Interpretive note:

- This source is strongest as a build-time architecture and performance reference for Expo Modules on Android.
- The durable idea is not just “compiler plugin equals faster startup,” but that K2 lets Expo replace reflection-driven metadata recovery with IR-time substitutions that preserve developer ergonomics while materially reducing startup work.