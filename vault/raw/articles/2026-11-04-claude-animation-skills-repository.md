# artemnovitckii/claude-animation-skills repository snapshot

Captured: 2026-11-04
Repository: https://github.com/artemnovitckii/claude-animation-skills
README: https://github.com/artemnovitckii/claude-animation-skills/blob/main/README.md

## Six skills and output formats

The README lists six Claude Code skills:
- `/zach-d-films`: three.js cartoon “what if” explainer, with captions timed to a voiceover and a sample armour video.
- `/stick-figure`: illustrated explainer with short captions, music, and sound effects made in code.
- `/minimalistic-graphics`: monochrome line-art animation.
- `/map-route`: animated 3D map route with camera motion, pin, and ETA.
- `/breakdown`: 3D exploded view with labels and leader lines.
- `/graph`: animated line graph and count-up number.

The project describes these as reel formats. The repository does not provide evidence that the formats reliably go viral or receive millions of views.

## Workflow and limitations

The four quick skills (`graph`, `minimalistic-graphics`, `map-route`, `breakdown`) use a small JSON spec and produce 1080x1920, 30 fps MP4s plus a contact sheet with Instagram safe-area markings. The README reports about 10 seconds for 2D and 1.5 minutes for 3D quick renders; these are project estimates and may depend on local hardware.

The two explainer engines (`stick-figure`, `zach-d-films`) need a longer working session. The README says Claude writes a script, generates or uses voiceover, times captions, writes shots, checks stills, and renders. It provides example projects, not proof of fully automatic professional results.

The README says the `/zach-d-films` name is not affiliated with Zack D. Films.

## Local requirements and voice setup

The README requires macOS or Linux, FFmpeg, Node.js 18+, and Python 3.9+. The default `./install.sh` installs three.js and Playwright, downloads Playwright Chromium, fetches GSAP, and warms up HyperFrames.

`/stick-figure` and `/zach-d-films` use local Kokoro voice synthesis and NVIDIA Parakeet word timings through sherpa-onnx. Voice and timing models are not included in the repository. The README says they require about 1 GB of downloads and are installed with `./install.sh --voice`. The user's pasted command omits this flag, so it does not install the local voice models by default.

The code repository states an MIT license. Its third-party dependencies and downloaded model weights have separate terms. The README says no API key is needed for the local voice workflow.
