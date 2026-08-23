---
title: "edulab: Exact Interactive Lessons for Geometry and Chemistry"
kind: "paste"
captured_at: "2026-08-23 20:35"
tags: ["github", "edulab", "education", "interactive-lessons", "sympy", "threejs", "canvas", "katex", "claude-plugin", "apache-2"]
source_url: "https://github.com/wy51ai/edulab"
status: "inbox"
---

# edulab: Exact Interactive Lessons for Geometry and Chemistry

## Source overview
edulab is a collection of education skills that turn academic problems into interactive lesson web pages. The repository is Apache-2.0 licensed.

It provides three skills:
- edu-solid-geometry.
- edu-analytic-geometry.
- edu-chem-reaction.

The skills accept text problems, image uploads, or random problem generation. They create self-contained HTML lesson pages with visualizations, formulas, explanations, and interactive controls.

## Solid geometry skill
edu-solid-geometry solves solid-geometry problems with Three.js and MathJax. It covers line-plane angles, dihedral angles, angles between skew lines, point-to-plane distance, volume, and related problems on cubes, cuboids, pyramids, prisms, cylinders, and cones.

The geometry kernel uses SymPy for exact coordinates, vectors, normals, intermediate values, and answers. The generated lesson shares the same coordinates with the 3D model. The documented design uses a data-driven lesson template and a self-check that compares the kernel answer, answer card, and final displayed value.

## Analytic geometry skill
edu-analytic-geometry solves conic-section problems with a 2D Canvas board and KaTeX. It covers standard equations, chord lengths, dot-product ranges, triangle-area extrema, fixed points, fixed values, loci, tangents, and eccentricity for ellipses, hyperbolas, parabolas, and circles.

The skill uses a parameterized line, system solving, Vieta's formulas, and substitution. It includes correctness handling for open and closed interval endpoints and connects the computed result to the interactive parameter control.

## Chemistry reaction skill
edu-chem-reaction creates microscopic 3D reaction demonstrations with Three.js and KaTeX. A slider shows bonds breaking and forming, atoms recombining, step narration, atom conservation, and an optional energy-reaction-coordinate curve.

It has two engines:
- morph for combustion, combination, decomposition, displacement, and redox.
- mechanism for organic mechanisms such as esterification with catalysts, transition states, and leaving groups.

SymPy balances equations, validates atom maps, checks conservation, and derives bond changes. A VSEPR molecule library provides default geometry. RDKit is optional and is not installed automatically.

## Generation and delivery flow
The repository normalizes text, image, and random inputs into a structured problem specification. A SymPy kernel computes exact results and intermediate LaTeX values. A data-driven HTML template receives lesson, steps, and model data. A local preview checks console errors and formula or highlight rendering. The final page is written as a solution HTML file.

The repository supports Claude Code plugin installation and skills-based installation. Those commands were inspected but not executed during this capture.

## Project structure
The repository includes plugin metadata, a sample index page, one folder per education skill, skill instructions, templates, exact-computation libraries, generation scripts, output folders, and problem-schema and convention references.

## User-provided post
Denzii
@denziideng

Translated from Chinese

Oh my gosh! With this open-source teaching artifact, math problems instantly turn into interactive web lessons—getting into Tsinghua or Peking University is no longer a dream!

Tired of dull geometry and chemistry problems? Still have to hand-draw diagrams for explanations?

The core of the edulab project, which transforms subject problems into interactive teaching web pages, is ruthless in this regard:
- One-click interactive lessons: input text or images and automatically generate HTML with 3D or Canvas visualizations.
- Precise symbolic computation: the SymPy kernel keeps formula steps and answers consistent.
- Multi-subject coverage: solid geometry, analytic geometry, and chemical reaction animations.
- AI skill-building: use the Claude plugin directly, including random question generation.

GitHub: https://github.com/wy51ai/edulab

The claims about exam outcomes and learning impact are promotional user-provided claims and were not independently verified.
