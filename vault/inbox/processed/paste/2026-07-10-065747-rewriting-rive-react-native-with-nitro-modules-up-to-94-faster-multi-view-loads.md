---
title: Rewriting Rive React Native with Nitro Modules: up to 94× Faster Multi-View Loads
kind: paste
captured_at: 2026-07-10 06:57
tags: [react-native, nitro, rive, animation, jsi, performance, margelo]
source_url: https://blog.margelo.com/rewriting-rive-react-native-with-nitro-modules
status: inbox
---

# Rewriting Rive React Native with Nitro Modules: up to 94× Faster Multi-View Loads

# Rewriting Rive React Native with Nitro Modules: up to 94× Faster Multi-View Loads

**Author:** Miklós Fazekas (Margelo)  
**Published:** July 9, 2026  
**URL:** https://blog.margelo.com/rewriting-rive-react-native-with-nitro-modules  
**Tags:** React Native, Nitro, Rive, Performance, JSI, Animation

## Summary

Margelo rebuilt the Rive React Native SDK on Nitro Modules. The original SDK was limited by classic NativeModules / TurboModule APIs that model *modules* (flat method lists), not *objects* — so Rive's object model (files, view models, properties) was flattened into a single "God object" view. Nitro HybridObjects let the SDK express Rive's domain naturally and unlock large performance wins, especially multi-view loads (up to ~94× faster).

## What is Rive?

Rive is a tool for building interactive graphics (often described as a modern Flash successor). Designers and developers work in one editor; the same `.riv` file runs on web, React Native, Flutter, iOS, Android, Unity, and Unreal. Unlike playback-only formats, a Rive file reacts to input and app data at runtime via an object model of files, artboards, view models, and typed properties.

## TurboModules vs Nitro (architecture)

**Legacy:** One `Rive` God object — whole API behind one view; string-path setters (`setNumber`, `setString`); hidden runtime objects reached by string id.

**Nitro:** Exposes full object model as separate typed classes (`RiveFile`, `ViewModel`, `ViewModelInstance`) that wrap native runtime objects one-to-one.

Note: the legacy SDK actually predates TurboModules (classic bridge ViewManager + NativeModules). TurboModules keep the same singleton/flat-method shape, so a TurboModule port would share the same architectural limits.

## Challenges with TurboModules

1. **Singletons, not objects** — can't hold/pass `RiveFile` with lifetime and instance methods; every call re-identifies file/VM/property by string/id.
2. **Native resources only live inside views** — view is RN's abstraction with identity/lifecycle; non-view resources need hand-rolled id maps; Hermes has no FinalizationRegistry for GC cleanup.
3. **Swift needs Objective-C boilerplate** — RCT_EXTERN_METHOD macros, @objc, bridging headers for a Swift-first Rive iOS runtime.

Example of legacy write path (ViewManager command):

```typescript
setNumber(path: string, value: number) {
  UIManager.dispatchViewManagerCommand(
    findNodeHandle(riveRef.current),
    ViewManagerMethod.setNumberPropertyValue,
    [path, value]
  );
}
```

Fabric/TurboModule equivalents keep the same flat, write-only shape (re-identify by handle + path).

## Nitro Modules

Nitro lets a JS object be implemented in C++, Swift, or Kotlin (**HybridObjects**): native objects that hold state, expose methods, and can be created/held/passed like ordinary JS objects.

Benefits for Rive:
- Typed API from a single TypeScript spec, implemented in Swift directly (no Obj-C bridging)
- HybridObjects on `jsi::NativeState` — GC can reclaim them when JS handle goes away
- Fast: direct JSI, no bridge serialization

**Raw call overhead** (iPhone 13 mini, release, 100k calls):
- Nitro HybridObject method: ~0.3–0.4 µs
- Codegen'd new-arch TurboModule: ~1.5 µs
- Legacy bridge write: ~21 µs

So TurboModules already ~order of magnitude cheaper than legacy bridge; Nitro another ~4–5× faster still.

## Rive React Native with Nitro — API

**Legacy** (implicit load inside view):

```typescript
<Rive url="https://rive.app/vehicles.riv" />
```

Simple, but file is owned inside the view — can't hold, reuse, or observe load state cleanly.

**Nitro** (explicit file + state):

```typescript
const { riveFile, isLoading, error } = useRiveFile(
  "https://rive.app/vehicles.riv"
);
if (isLoading) return <ActivityIndicator />;
if (error) return <Text>Couldn't load animation</Text>;
return <RiveView file={riveFile} />;
```

Unlocks:
- **Preload** before any view mounts → instant render
- **Share** one loaded file across multiple `RiveView`s (parse once, render many)

Four views of one 2.9 MB file (iPhone 13 mini, release):
- Legacy: ~500 ms (parse 4×, no sharing)
- Nitro preload + share: ~58 ms

### Memory / disposal

Hooks dispose eagerly: `useRiveFile` loads in an effect and `dispose()` on cleanup (React lifecycle). Manual `RiveFile` still safe via HybridObject GC (`jsi::NativeState` destructor when Hermes collects handle).

### Setting values before first frame

Legacy: values only after view loads/ref ready → flash of default state; workarounds hide view until init ([issue #115](https://github.com/rive-app/rive-react-native/issues/115)).

Nitro: create view-model instance, set values, then hand to view:

```typescript
const { instance } = useViewModelInstance(file, {
  onInit: (vmi) => {
    vmi.numberProperty('score').set(1000);
    vmi.stringProperty('name').set('Player One');
  },
});
return <RiveView file={file} dataBind={instance} />;
```

## Results (benchmarks)

**Method:** iPhone 13 mini, iOS 26.5, release build; Nitro 0.4.10 vs legacy 9.8.3; mean of 5 runs; memory = process `phys_footprint` delta. Full data: https://github.com/mfazekas/rive-perf-compare

| Scenario | Nitro | Legacy | Ratio |
|----------|-------|--------|-------|
| Show graphics on 24 views (2.9 MB file) | **29 ms** | 2716 ms | ~94× |
| Memory footprint · 6× heavy file | **112 MB** | 525 MB | ~4.7× |
| Memory freed on unmount | **257 ms** | 262 ms | ~same |
| Data-bound property write | **6.3 µs** | 20.4 µs | ~3.2× |
| File load / dispose | **5.3 / 0.9 ms** | 17.6 ms* | ~3.3× |

\*Legacy has no file API; mount → first-frame is proxy.

Key takeaways:
- Biggest wins from **shared parsing and object reuse**, not just Nitro call overhead
- Property-write row is the one mainly about call cost (TurboModule port would narrow that row)
- Memory released promptly either way (~260 ms); difference is how much held while views live

## Testing

SDK tested with [react-native-harness](https://www.react-native-harness.dev/) (grew out of Nitro's on-device runner): real device/simulator tests against Swift implementation. 17 harness suites cover view models, property types, asset loading, triggers, navigation lifecycle, disposal.

## Related links

- Article: https://blog.margelo.com/rewriting-rive-react-native-with-nitro-modules
- Nitro: https://nitro.margelo.com
- Perf compare repo: https://github.com/mfazekas/rive-perf-compare
- react-native-harness: https://www.react-native-harness.dev/
- Legacy issue #115 (pre-first-frame binding): https://github.com/rive-app/rive-react-native/issues/115
- Related Margelo post already in vault: Building a Video Call App with Filters (src-2026-06-18-010)

## Key claims for citation

1. Nitro HybridObjects enable a natural Rive object-model API that classic NativeModules/TurboModules cannot express cleanly.
2. Multi-view load of 24 views of a 2.9 MB file: ~29 ms Nitro vs ~2716 ms legacy (~94×) on iPhone 13 mini release.
3. Memory for 6× heavy file: ~112 MB Nitro vs ~525 MB legacy (~4.7×).
4. Property write: ~6.3 µs Nitro vs ~20.4 µs legacy (~3.2×).
5. Raw call overhead: Nitro ~0.3–0.4 µs, TurboModule ~1.5 µs, legacy bridge ~21 µs.
6. Preload + file sharing is the main architectural driver of multi-view gains.
