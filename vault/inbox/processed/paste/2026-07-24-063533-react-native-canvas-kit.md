---
title: react-native-canvas-kit
kind: paste
captured_at: 2026-07-24 06:35
tags: []
source_url: 
status: inbox
---

# react-native-canvas-kit

GitHub - adithyavis/react-native-canvas-kit: Skia based 2D canvas framework for react-native

A batteries-included 2D canvas kit for React Native, built on top of React Native Skia. Canvas Kit layers a scene graph over Skia and ships with pre-built shapes, gestures and interactivity, a transformer, and brushes, so you don't have to compose a canvas experience from scratch.

Heavily inspired by Konva.

What you get:
- Shapes: Rect, Circle, Ellipse, Line, RegularPolygon, Star, Text, and Image, sharing a common set of transform and styling props.
- Interactivity: tap and press events with hierarchy-aware hit testing and ancestor bubbling, plus draggable nodes.
- Multi-touch gestures: pinch-to-scale and rotate handled on the UI thread.
- Transformer: an interactive selection box with resize and rotate handles, attachable to any node.
- Brushes: a BrushLayer with UI-thread stroke capture and a set of ready-made brushes (pen, pencil, marker, highlighter, tape, eraser).

Peer dependencies: @shopify/react-native-skia >=1.0.0, react-native-gesture-handler >=2.0.0, react-native-reanimated ^4.0.0, react-native-worklets >=0.5.0

Canvas Kit ships no native code of its own. Reanimated 4 requires New Architecture. 1.x targets Reanimated 4 (New Architecture). 0.x targets Reanimated 3 (legacy architecture).

Tree hierarchy: Stage (Skia canvas surface) -> Layer (logical grouping with its own transform) -> Group (transformable container of shapes) -> Shape (Rect, Circle, Line, Text, Image etc.)

Documentation: https://adithyavis.github.io/react-native-canvas-kit/intro
NPM: https://www.npmjs.com/package/react-native-canvas-kit
License: MIT
Stars: 45
