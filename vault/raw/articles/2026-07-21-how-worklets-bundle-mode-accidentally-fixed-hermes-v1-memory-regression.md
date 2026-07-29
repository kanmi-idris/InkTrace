---
title: How Worklets Bundle Mode accidentally fixed Hermes V1 memory regression
kind: paste
captured_at: 2026-07-21 16:17
tags: [react-native, hermes, worklets, reanimated, memory-leak, performance, swmansion]
source_url: https://swmansion.com/blog/how-worklets-bundle-mode-accidentally-fixed-Hermes-v1-memory-regression/
status: raw
---

# How Worklets Bundle Mode accidentally fixed Hermes V1 memory regression

**Author**: Tomasz J. Żelawski  
**Published**: July 21, 2026  
**Source**: https://swmansion.com/blog/how-worklets-bundle-mode-accidentally-fixed-Hermes-v1-memory-regression/

## TL;DR
Some apps using Reanimated and Worklets started using a lot more memory after switching to Hermes V1. The cause turned out to be in Hermes itself: it quietly attached half a megabyte of extra debugging data to every worklet function.

The Hermes team already fixed it; the fix ships with React Native 0.87. You can avoid the problem entirely by turning on Worklets Bundle Mode, which should be beneficial for your app regardless. You can also pin your Hermes version or use the experimental bytecode option for Worklets Legacy Eval Mode.

## Backstory
A few weeks ago we received reports that Reanimated uses significantly more memory on Hermes V1 compared to the previous, legacy Hermes. We were cautious not to spread panic while looking into the issue to figure out what the root cause was and whether we could fix it.

Now that we have a full picture and both fixes and workarounds at hand, we want to tell you what exactly happened and what our recommendations are.

## The problem
Hermes V1 is a significant overhaul of the engine, not just simple improvements over the legacy version. For instance, it features a completely different way of evaluating the code at runtime, storing a lot of additional metadata, which is useful in debugging. And this metadata is what ate the memory.

But how come we jumped from debugging metadata to the increased memory consumption of an animation library? It all comes down to react-native-worklets and what we now call *Legacy Eval Mode*.

Reanimated uses Worklets as an underlying engine to move critical animation calculations (note: not the Reanimated 4 CSS animations; those are implemented solely in C++) off the JS thread, where the React part of your animation lives. This is achieved by sending the code of the animation function as a string to a secondary JavaScript runtime and evaluating it there, directly on the UI thread.

If you want to know more about that model, I highly recommend watching my 2025 React Universe talk, where I talk about the internals of Worklets in depth.

We can see the connection here - animation code is evaluated in production builds, and Hermes V1 adds some extra debugging data to the `eval`uation process. Why does Hermes V1 add that debugging data in production builds? The Hermes team probably didn't anticipate that apps use `eval` in production for purposes other than sandboxing untrusted code, and especially not for UI-critical operations.

## The scale
Hermes V1 attaches a metadata block to each worklet (animation), so the more worklets you have (and trigger), the more memory is consumed. For each unique worklet, Hermes V1 allocates 512KB. Is that a lot?

We checked the Expensify app's JS bundle – it holds over 1,000 unique worklets. **That means that, potentially, the app could consume over 0.5GB of memory if all of them were to be evaluated!** Fortunately, that's not the case for the typical user – everything is done lazily, so you'd have to go to every single screen in the app and interact with every UI element in a single session to reach such figures.

However, Reanimated and Worklets would evaluate more than 100 worklets on the UI runtime to properly initialize. It’s at least 50MB at app startup, and that's no joke.

## The fixes
We promptly contacted the Hermes team about our findings, and the awesome folks there merged a fix (facebook/hermes#2090) in no time. However, it would still take some time for that fix to be ported into the Hermes version bundled with React Native, and then for a new React Native version to be released.

We didn't want to leave our users hanging, so we looked for workarounds for the time being. And the workaround was ready at hand – a direct replacement for Legacy Eval Mode, Bundle Mode, which we were preparing to release as stable in the following days with the Worklets 0.10.0 release.

### 1. Bundle Mode
We created Bundle Mode to unlock a new feature in React Native (offloading whole JS libraries to different threads), but in this case it turned out to be a perfect fix. Bundle Mode doesn't send individual strings of code for evaluation but, as the name suggests, exposes the whole JS (bytecode) bundle to the secondary runtimes. And due to the fact that Hermes uses `mmap` to load the bytecode and does everything lazily, it comes at next to no cost.

Instructions on how to enable Bundle Mode can be found in the react-native-worklets docs. We also created a comprehensive AI skill in our skills repository (`software-mansion-labs/skills`) that will enable it in your app and verify that it works.

*Apply this fix if you want to also keep up with latest Worklets’ features.*

### 2. Bytecode for Eval Mode
We're aware that not all of our users can just turn on Bundle Mode without hesitation. It still requires some patches to Metro and additional setup, so we came up with a simpler workaround for Legacy Eval Mode. What if, instead of passing code strings to the other JS runtime and evaluating them, we sent Bytecode prepared ahead of time? That's exactly the experimental Hermes Bytecode option for the Worklets Babel plugin (`hermesBytecode`). This feature works almost like a drop-in replacement for our backend and is in fact quite tiny, but due to the limited time window for testing, we decided to mark it as experimental.

*Apply this fix if patching, version pinning or upgrading React Native isn’t feasible.*

### 3. Pin Hermes version
If you don’t want to change how Worklets work internally in your app, the Hermes team has backported the fix to version **0.15** (`250829098.0.15`). You can pin that Hermes version in your app – it worked for us across different React Native versions. AI agents handle this task well.

*Apply this fix if you want to keep current Worklets’ behavior.*

### 4. Wait for React Native 0.87
You can also do nothing – Hermes with the fix will be available in React Native 0.87, which is scheduled to be released on 8th of August.

## Final words
**We still recommend enabling Bundle Mode in your app.**

Even if you don't really need the features it provides right now, it comes with performance improvements compared to Legacy Eval Mode.
