# cinematic-shot GitHub repository and skill

Captured: 2026-10-15
Source URL: https://github.com/1weiho/cinematic-shot
Inspected branch: `main`
Latest commit shown: `683f818`, 2026-10-14
Repository state shown: 73 stars, 2 forks, 10 commits, no tags, no published releases, and no published packages.

## README claims

The README presents `cinematic-shot` as an agent skill for directing cinematic product-launch films. It describes a sequence of hero shots: real product UI in a black void, close oblique camera angles, shallow focus, slow motivated camera drift, UI actions, hard cuts, one line of copy, and a still logo.

The README says the skill covers story, shot lists, shot scale, camera drift, lighting and grade, motion, ending, and sound direction. It says the skill works with any product and leaves the rendering stack to the agent.

The README gives this install command:

```sh
npx skills add 1weiho/cinematic-shot
```

The repository lists these files:

- `skills/cinematic-shot/SKILL.md`: the method and what to avoid.
- `skills/cinematic-shot/references/look.md`: camera, depth of field, light, reveal, type, and render recipes.
- `skills/cinematic-shot/references/shot-list-example.md`: an abstract 52-second shot-list example.

## Skill instructions inspected

`SKILL.md` asks the agent to define the story flow, payoff, believable UI content, and a short product tagline before planning shots. It recommends a 45–55 second film with 8–10 UI shots, followed by copy and a logo. It distinguishes longer process shots from short punctuation shots. It asks for motivated, continuous camera movement, no continuity cursor, and a wide shot only for the payoff. It says each frame should be a pure function of time for deterministic rendering.

`look.md` gives CSS-style recipes for a black stage, oblique camera angles, magnification, drift, optical depth of field, subject-responsive light, a stipple text reveal, and a restrained grade.

`shot-list-example.md` gives nine timed UI shots in a 52-second film. It includes shot scale, camera angles, drift, and UI actions. The sequence ends with product copy and a still logo.

## Evidence limits

These notes record the repository README and the three named skill files as shown on GitHub on 2026-10-15. I did not install or run the skill. I did not inspect the linked demonstration video or test any rendering stack.
