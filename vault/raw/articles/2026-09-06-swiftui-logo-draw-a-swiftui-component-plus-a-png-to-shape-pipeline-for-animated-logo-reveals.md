---
title: "swiftui-logo-draw: A SwiftUI Component Plus a PNG-to-Shape Pipeline for Animated Logo Reveals"
kind: "paste"
captured_at: "2026-09-06 06:26"
tags: ["swiftui", "logo-draw", "swift-package", "ios", "macos", "claude-code-skill", "png-to-vector", "python", "mit"]
source_url: "https://github.com/RhuanCruz/swiftui-logo-draw"
status: "inbox"
---

# swiftui-logo-draw: A SwiftUI Component Plus a PNG-to-Shape Pipeline for Animated Logo Reveals

## Source overview
swiftui-logo-draw (LogoDraw) is an open-source SwiftUI component by Rhuan Cruz that animates a logo by first tracing its outline like a pen stroke, then revealing its fill. Alongside the SwiftUI component itself, the project ships a separate, documented pipeline (Python scripts plus a macOS render-check step) for converting a logo that only exists as a flat PNG image into a clean vector `Shape` suitable for that stroke-then-fill animation. The repository's own README is written in Brazilian Portuguese; this record summarizes its content in English rather than translating it verbatim.

GitHub API metadata checked at capture time reports 62 stars, 3 forks, MIT license, and Python as the primary detected language (reflecting the included conversion-pipeline scripts alongside the Swift component itself). The repository was created 2026-09-05, one day before this capture.

## The SwiftUI component
LogoDraw can be added as a Swift Package pointing at the repository URL, or used by copying its single source file directly into a project. Basic usage wraps a caller-supplied SwiftUI `Shape` in a `LogoDraw(...)` view. Documented configuration parameters include: `drawDuration` (outline trace duration, default 1.2 seconds, valid range roughly 0.3 to 4 seconds), `drawEasing` (a choice of easing curves: snappy, smooth, ease-in-out, or linear), `fillsLogo` (toggle whether the fill reveal happens at all, versus outline-only), `fillStartPercent` (what percentage of the outline trace has completed before the fill begins, default 70%), `fillDuration` (fade-in duration for the fill, default 0.35 seconds), `size`, `strokeWidth`, a `replayTrigger` value that can be changed to re-trigger the animation, a `freezeAt` value to pin the animation at a fixed progress point instead of animating (useful for taking a screenshot), and an `onComplete` callback fired when the fill animation finishes.

The component is documented as respecting the system's Reduce Motion accessibility setting: when enabled, the logo is shown complete immediately and the completion callback fires right away rather than playing the animation. The README notes that any `Shape` passed into the component needs its subpaths ordered in the sequence they should visually be drawn, and needs an outline without self-intersections for the stroke animation to render correctly; the bundled example logo (`RunnerLogoShape`, a running-figure logo) is described as reconstructed from a source PNG with a stated 96% fidelity match.

## PNG-to-Shape conversion pipeline
The README frames the SwiftUI component itself as the easy part of the project, with the harder problem being how to actually obtain a logo as a clean vector `Path` in the first place when the source only exists as a raster PNG. This conversion workflow is documented in two places: a written case-study document walking through how the bundled example logo was specifically converted (with the underlying measurements), and a packaged skill directory intended for use with Claude Code (or manually, by any developer), containing the step-by-step workflow plus its supporting scripts.

The documented supporting scripts are: a measurement script that extracts connected components, bounding boxes, and per-row/per-column pixel runs from the source PNG; a geometry-primitives script implementing shapes (fillets, arcs, circles) matching what SwiftUI's own `Path` API can express; a parametric model file specific to the bundled example logo; a tuning script that compares the current shape's fit against the source image using Intersection-over-Union (IoU) scoring, produces a visual overlay, and can automatically adjust parameters to improve the fit; a shell script that renders a given Swift `Shape` directly to a PNG on macOS without needing to launch the iOS Simulator, for fast iteration; and a comparison script that scores the rendered Swift shape's IoU against the original source image, giving a quantitative measure of conversion fidelity.

To use the bundled workflow as a Claude Code skill, the README documents copying (or symlinking) the skill directory into the standard Claude Code skills folder (`~/.claude/skills/`).

## Requirements
The SwiftUI component itself requires Swift 5.9 or newer, targeting iOS 17 or macOS 14 (attributed in the README to its use of the newer `Task.sleep(for:)` and `.task(id:)` APIs). The Python-based conversion pipeline requires Python 3 with numpy, Pillow, and scipy, and the macOS render-check script specifically requires Xcode to be installed.

## License
MIT. The README explicitly notes that the bundled runner-figure logo used as the example throughout the project is included specifically to demonstrate the conversion process, not as a general-purpose asset.

## Evidence boundary
The GitHub README (in its original Brazilian Portuguese) was fetched and read directly, and summarized here in English rather than translated verbatim; GitHub API repository metadata was checked separately. No Swift package was added to a project, no Python conversion script was run, and no logo PNG was converted during this capture; the stated 96% fidelity figure for the bundled example is the author's own reported measurement.

## Sources
- https://github.com/RhuanCruz/swiftui-logo-draw
- https://github.com/RhuanCruz/swiftui-logo-draw/blob/main/docs/COMO-FOI-FEITO.md (case-study document, in Portuguese)
- https://github.com/RhuanCruz/swiftui-logo-draw/blob/main/skill/logo-to-swiftui-draw (Claude Code skill and conversion scripts)
