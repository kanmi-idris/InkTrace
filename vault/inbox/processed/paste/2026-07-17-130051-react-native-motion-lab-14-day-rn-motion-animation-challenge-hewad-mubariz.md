---
title: react-native-motion-lab — 14-day RN motion/animation challenge (hewad-mubariz)
kind: paste
captured_at: 2026-07-17 13:00
tags: [react-native, reanimated, gesture-handler, webgpu, animation, motion, expo, shaders]
source_url: https://github.com/hewad-mubariz/react-native-motion-lab
status: inbox
---

# react-native-motion-lab — 14-day RN motion/animation challenge (hewad-mubariz)

# react-native-motion-lab (hewad-mubariz)

A 14-day React Native "motion challenge" — a repo of animation-first UI experiments focused on expressive interactions, advanced transitions, and depth-heavy animation systems. By Hewad Mubariz. 42★, 4 forks, 9 commits. Repo: github.com/hewad-mubariz/react-native-motion-lab.

## About
Animation-first UI experiments built with Expo, React Native Reanimated, Gesture Handler, and WebGPU-backed visual effects. Each prototype is: technically challenging, visually polished, reusable as a building block for future apps. Goal: ship one meaningful motion experiment per day, level up animation engineering through deliberate practice.

## Current demo
- GPU-powered flock simulation (boids-style)
- Interactive disturbances via tap gestures
- Shape formations: heart, star, moon, text
- Glass-style animated toolbar controls

## Stack
- Expo
- React Native
- React Native Reanimated
- React Native Gesture Handler
- react-native-wgpu (WebGPU)
- TypeScript

Run: `yarn install && yarn ios` (or `yarn start`).

## Positioning
Fits the RN animation/graphics cluster in the vault: Reanimated 4 (src-2026-07-17-007 Calazans benchmark), React Native Skia / WebGPU / Redraw (src-2026-07-17-011), TypeGPU (src-2026-07-16-001), AVAL (src-2026-07-16-002), Margelo Skia profiling (src-2026-06-28-006). Demonstrates the WebGPU + Reanimated + Gesture Handler combination applied to a real interactive GPU simulation — a practical companion to the Redraw primitives and the liquid-metal/glass shader examples. Also relevant to our agent-skill/animation-design resources (Transitions.dev src-2026-07-17-009, Emil Kowalski, Taste Skill).
