# rossark-motion-skill `SKILL.md` snapshot

Captured: 2026-10-22
Source URL: https://github.com/rossark0/rossark-motion-skill/blob/main/SKILL.md
Repository: https://github.com/rossark0/rossark-motion-skill
Branch shown: `main`
File metadata shown: 410 lines, 34.7 KB

## Intended use

The skill says to use it when an agent is asked to animate an illustration, icon, mascot, or scene; add idle motion; make an image feel alive; or recreate motion from a reference video. It includes methods for characters, full-body acting, plants, fabric, fire, smoke, water, weather, lights, machines, vehicles, icons, logos, charts, and scenes.

## Project-first workflow

Before changing a project, the skill says to inspect its `MOTION.md`, `CLAUDE.md`, and saved animation memory. Project rules take priority. If no motion notes exist, it says to copy the included `MOTION.md` beside the art, fill in project-specific notes, and keep them current.

## Motion principles

The skill recommends interpolation rather than snapping, calm timed motion, small amplitudes, rotation around pivots, overlapping motion with follow-through, varied deterministic phases, one main action per scene plus two or three idle loops, and keeping layout fixed while artwork moves internally. It says reduced-motion behavior should show a still frame, and clocks should pause when content is hidden or off screen.

The skill provides starting values for common motion: for example, breathing of 1–2 drawing units over 3–5 seconds, head tilt of 3–6 degrees, and plant sway of 1.5–4 degrees over 3–6 seconds. It labels these values as starting points, not laws.

## Engines and templates

The skill points to a React Native engine at `templates/react-native/motion.ts` and a SwiftUI engine at `templates/swiftui/Motion.swift`. It describes loop and one-shot clocks, keyframe tracks, continuous pose flow, and helpers including `wave`, `loop`, `bell`, `seg`, and `seeded`. It says to use one clock per character, object group, or scene rather than one clock per small part.

For live faces, it describes animated pupil movement, blinking, cheeks, mouths, and head tilt. It gives example timing guidance, including a blink every 3–4 seconds and a typical loop duration of 6–9 seconds.

## Evidence limits

This is a summary of the repository's skill instructions. I did not execute its workflow, use its templates, run any scripts, or validate its animation timing. The repository README is captured separately as [src-2026-10-22-001].
