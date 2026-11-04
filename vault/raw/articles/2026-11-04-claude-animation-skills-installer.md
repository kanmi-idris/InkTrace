# claude-animation-skills installer and setup script review

Captured: 2026-11-04
Installer: https://github.com/artemnovitckii/claude-animation-skills/blob/main/install.sh
Setup: https://github.com/artemnovitckii/claude-animation-skills/blob/main/kit/setup.sh

The installer script links every directory under `skills/` into `~/.claude/skills/` (or `$CLAUDE_SKILLS_DIR`) and runs `kit/setup.sh`. It skips a destination path that already exists as a non-symlink. It uses `ln -sfn` for the skill links.

The default setup checks for FFmpeg, Node.js/npm, and Python 3.9+. It runs `npm install` in `kit/`, downloads Playwright's Chromium, fetches GSAP from a CDN if the vendored file is absent, and invokes HyperFrames version 0.8.34. These actions download dependencies and modify the cloned repository and Claude skill directory.

With `--voice` or `--stick`, setup creates `kit/.venv`, installs Python packages, and downloads Kokoro and Parakeet model files. The script estimates about 1 GB for those models.

The scripts were inspected but not run. No files were installed or changed outside the InkTrace capture.
