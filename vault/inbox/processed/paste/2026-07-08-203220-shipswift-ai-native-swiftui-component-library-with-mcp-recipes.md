---
title: ShipSwift — AI-Native SwiftUI Component Library with MCP Recipes
kind: paste
captured_at: 2026-07-08 20:32
tags: [swiftui, ios, component-library, mcp, ai, open-source, mit, animation, chart, swift]
source_url: 
status: inbox
---

# ShipSwift — AI-Native SwiftUI Component Library with MCP Recipes

## ShipSwift

Source: https://github.com/signerlabs/ShipSwift (2.5k ★, 154 forks, MIT)
Author: SignerLabs (wei@signerlabs.com)
Links: https://www.shipswift.app/ | App Store: ShipSwift MCP Codebase

### What it is
AI-native SwiftUI component library — production-ready code that LLMs can use to build real apps. Components available via MCP server, local skills, or direct file copy. Also offers paid custom app dev: $5K, 4 weeks to production.

### Installation (3 options)
1. **Skills + MCP (recommended):** `npx skills add signerlabs/shipswift-skills` + connect MCP server at https://api.shipswift.app/mcp
2. **Local skills (offline):** `npx skills add signerlabs/ShipSwift`
3. **File copy:** Clone repo, copy files from ShipSwift/SWPackage/

### Components

**SWAnimation (30 total):**
- SwiftUI: Shimmer, TypewriterText, ShakingIcon, GlowSweep, LightSweep, ScanningOverlay, AnimatedMeshGradient, BeforeAfterSlider, OrbitingLogos, FullScreenButton
- Canvas 3D: DotSphere, CharSphere
- Metal shader procedural: Dots, Starfield, FractalClouds, InkSmoke, LiquidChrome, Plasma, AnimatedLoop
- Metal shader backgrounds: Metaballs, Halftone, Water, LiquidMetal, NeuroNoise, DotOrbit, Voronoi, SimplexNoise, ColorPanels, SmokeRing, Swirl

**SWChart:** LineChart, BarChart, AreaChart, DonutChart, RingChart, RadarChart, ScatterChart, ActivityHeatmap

**SWComponent — Display:** FloatingLabels, ScrollingFAQ, RotatingQuote, BulletPointText, GradientDivider, Label, MarkdownText, OnboardingView, OrderView, RootTabView, VideoPlayer
**SWComponent — Feedback:** Alert, Loading, ThinkingIndicator
**SWComponent — Input:** TabButton, Stepper, AddSheet, SearchBar

**SWModule (multi-file frameworks):**
- SWAuth — Cognito/Amplify, social, email/password, phone (country picker)
- SWCamera — Viewfinder, zoom, photo picker, face detection (Vision)
- SWPaywall — StoreKit 2 subscriptions (client free, full-stack Pro)
- SWChat — Message list, text input, optional voice (VolcEngine ASR)
- SWSetting — Settings page, language switch, share, legal links
- SWSubjectLifting — Background removal via VisionKit ImageAnalysis
- SWTikTokTracking — TikTok Events API (client free, full-stack Pro)

**SWUtil:** DebugLog, String/Date/View extensions, LocationManager

### Architecture
- Naming: SW prefix for types, .sw lowercase for view modifiers
- Dependency: SWUtil ← SWAnimation/SWChart/SWComponent ← SWModule (may depend on SWUtil + SWComponent)
- All SWAnimation/Chart/Component files are self-contained
- Tech: Swift, SwiftUI, StoreKit 2, Amplify, AVFoundation, Vision, SpriteKit, VolcEngine ASR, Metal

### MCP Tools
- `listRecipes` — browse catalog
- `getRecipe` — fetch specific recipe
- `searchRecipes` — search across catalog
Pro recipes add: backend (Hono, DB, webhooks), compliance templates, App Store labels, pitfalls

### Free vs Pro
- Free (MIT): all iOS client source code
- Pro: enhanced versions + backend + integration guides + compliance + pitfalls
- Coming: Push Notifications, Analytics Dashboard
