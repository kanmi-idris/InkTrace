---
title: ManimGX differences from Manim Community Edition
kind: article
captured_at: 2026-10-11 14:48
tags: [ManimGX, ManimCE, compatibility, Python-API, migration]
source_url: https://manimgx.academa.ai/user-guide/coming-from-manim-ce/
status: raw
---

# ManimGX differences from Manim Community Edition

## Source scope
This is the ManimGX documentation page for users migrating from Manim Community Edition (Manim CE). It qualifies the project's API-compatibility claim. The page is authored by the project; I did not test migration behavior.

## Compatibility statement
The page says ManimGX uses Manim CE's scene, mobject, animation, and constant names and parameters. It says most Manim CE code runs after changing the import from `manim` to `manimgx`. It also says ManimGX chooses runtime behavior, and the two engines differ.

## Documented differences
- Manim CE's internal module imports are not available. The guide says to import names from the `manimgx` package.
- LaTeX is converted through Typst. LaTeX packages and `\\def` do not convert.
- Tall-video framing differs. ManimGX keeps the frame's short side at 8 units unless configured; Manim CE uses a 4.5-unit width for 9:16 video.
- Every scene's camera can move in ManimGX. It also documents differences in exact-time animation evaluation, updater clocks, rigid rotations, combined simultaneous animations, and `.animate` behavior.
- ManimGX keeps some older aliases as deprecated names and recommends replacements. It says static typing can catch unknown names, keyword names, and wrong argument types. It warns that most mobjects and animations ignore unknown keywords at runtime, so the `ty` type checker is needed to catch misspellings.
- ManimGX provides different voiceover and slide APIs. Existing plugins and behaviors may need changes.

## Limits
The phrase “compatible with Manim CE's API” does not mean identical behavior or guaranteed drop-in compatibility. Review the migration guide and test each scene. I did not migrate or render a scene.
