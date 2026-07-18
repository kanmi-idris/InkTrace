---
title: Voicebox — open-source local-first AI voice studio (Jamie Pine)
kind: paste
captured_at: 2026-07-18 01:15
tags: [voice-ai, tts, voice-clone, mcp, local-first, tauri, whisper, elevenlabs-alternative, jamie-pine]
source_url: https://github.com/jamiepine/voicebox
status: inbox
---

# Voicebox — open-source local-first AI voice studio (Jamie Pine)

# Voicebox (jamiepine/voicebox) — open-source local-first AI voice studio

The open-source AI voice studio. Clone any voice, generate speech, dictate into any app, talk to agents in voices you own. The full voice I/O stack, running locally. By Jamie Pine. 42.1k★, 5.1k forks, 605 commits, MIT, latest v0.5.0 (Apr 25 2026). Self-described free OSS alternative to **ElevenLabs** (output) + **WisprFlow** (input) in one app.

## What it does
- **Local-first / private**: models, voice data, captures never leave your machine.
- **7 TTS engines**: Qwen3-TTS (10 langs), Qwen CustomVoice (10 langs, NL delivery control), LuxTTS (EN, ~1GB VRAM, 150x RT on CPU), Chatterbox Multilingual (23 langs), Chatterbox Turbo (EN, paralinguistic tags), HumeAI TADA (10 langs, 700s+ coherent audio), Kokoro (8 langs, 82M model, 50 presets).
- **Voice cloning**: zero-shot from a few seconds of reference audio; 50+ curated preset voices.
- **23 languages**, expressive tags (`[laugh]`, `[sigh]`, `[gasp]` via Chatterbox Turbo).
- **Post-processing**: 8 pedalboard (Spotify) effects — pitch, reverb, delay, chorus/flanger, compressor, gain, HPF, LPF.
- **Unlimited length**: auto-chunk + crossfade (max 50k chars).
- **Stories editor**: multi-track timeline for podcasts/narratives.
- **Voice input**: global dictation hotkey (push-to-talk / toggle), macOS accessibility-verified auto-paste, Whisper STT (Base/Small/Medium/Large/Turbo).
- **Agent voice output**: one MCP tool call `voicebox.speak({ text, profile })` → any MCP-aware agent (Claude Code, Cursor, Cline, Windsurf, VS Code) speaks in a cloned voice. Per-client voice bindings (pin Claude Code→Morgan, Cursor→Scarlett). Same "pill" overlay for dictation + agent speech.
- **Voice personalities**: attach persona to a profile, Compose/Rewrite via bundled local Qwen3 LLM (0.6B/1.7B/4B).
- **API-first**: REST (`POST /generate`, `/speak`, `/transcribe`, `/profiles`) + built-in MCP server (FastMCP, Streamable HTTP at `/mcp` + bundled stdio shim). 4 MCP tools: `voicebox.speak`, `voicebox.transcribe`, `voicebox.list_captures`, `voicebox.list_profiles`.
- **Native**: Tauri (Rust), not Electron.

## Tech stack
Tauri/Rust desktop · React + TS + Tailwind frontend · Zustand + React Query · FastAPI (Python) backend · TTS (Qwen3-TTS, Qwen CustomVoice, LuxTTS, Chatterbox×2, TADA, Kokoro) · Whisper STT · Qwen3 local LLM · Pedalboard effects · MLX (macOS) / PyTorch (CUDA/ROCm/XPU/CPU) · SQLite · WaveSurfer.js + librosa.

## Agent wiring (MCP)
```
claude mcp add voicebox --transport http --url http://127.0.0.1:17493/mcp --header "X-Voicebox-Client-Id: claude-code"
```
Stdio fallback points at `/Applications/Voicebox.app/Contents/MacOS/voicebox-mcp`. Per-client bindings in Settings → MCP.

## Roadmap
Windows/Linux auto-paste, Parakeet v3 + Qwen3-ASR STT, pipeline routing (webhook/MCP sinks), streaming transcription, end-to-end speech LLMs (Moshi, GLM-4-Voice, Qwen2.5 Omni), Voice Design from text, long-form capture, platform sinks (Apple Notes/Obsidian), plugin architecture, mobile companion.

## Positioning
Fits the MCP + local-AI + voice cluster: codex-tldraw-mcp (`src-2026-07-17-015`), LoginWithChatGPT (`src-2026-07-08-003/004/005`), agent-reach (`src-2026-06-28-024`), WhisperX (`src-2026-06-28-022`), React Native audio-api skill, Cuelume (`src-2026-07-17-013`, auditory UI feedback). Notably MCP-native voice I/O for agents — a reusable pattern for giving any coding agent a spoken voice. Also relevant to InkTrace's own agent-harness work (stdio/HTTP MCP, per-client bindings).
