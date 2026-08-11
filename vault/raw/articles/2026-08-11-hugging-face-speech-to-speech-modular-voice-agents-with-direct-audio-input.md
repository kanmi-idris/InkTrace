---
title: "Hugging Face Speech-to-Speech: Modular Voice Agents with Direct Audio Input"
kind: "paste"
captured_at: "2026-08-11 17:36"
tags: ["hugging-face", "speech-to-speech", "voice-agents", "multimodal-llm", "vad", "stt", "tts", "realtime-api", "websocket", "webrtc"]
source_url: "https://github.com/huggingface/speech-to-speech"
status: "inbox"
---

# Hugging Face Speech-to-Speech: Modular Voice Agents with Direct Audio Input

## Source overview
Hugging Face's speech-to-speech repository provides a modular, low-latency voice-agent pipeline. The standard cascade is VAD -> STT -> LLM -> TTS. Components run in separate threads and communicate through queues.

The project exposes an OpenAI Realtime-compatible WebSocket and WebRTC API. The README says the pipeline runs in production as the conversation backend for thousands of Reachy Mini robots.

## Standard components
- VAD: Silero VAD v5 for speech boundaries and turn-taking.
- STT: Parakeet TDT by default, with Whisper, Faster Whisper, Lightning Whisper MLX, MLX Audio Whisper, and Paraformer alternatives.
- LLM: OpenAI-compatible Responses API or Chat Completions, Transformers, mlx-lm, or a self-hosted vLLM or llama.cpp server.
- TTS: Qwen3-TTS by default, with Kokoro-82M, Pocket TTS, ChatTTS, and MMS TTS alternatives.

The package can run with local models and local servers. It supports hosted providers through OpenAI-compatible protocols and HF Inference Providers.

## Direct audio input without STT
The repository now documents a direct-audio path using --stt none with --llm_backend chat-completions. This sends completed VAD audio segments directly to an audio-capable multimodal model.

The direct-audio path has constraints:
- The selected model must accept audio.
- The chat-completions backend is required.
- The Responses API backend does not support this path in the documented implementation.
- The default gpt-5.4-mini model accepts text and image input but not audio, so the model must be changed explicitly.
- Audio can be represented as embedded WAV base64 or as a base64 data URL, depending on the provider.

Therefore, the user-provided statement describes an available optional path. It does not replace the default VAD -> STT -> LLM -> TTS pipeline for every model or provider.

## Quick start
Install with pip install speech-to-speech. The default server uses Parakeet TDT for local STT, an OpenAI-compatible LLM, and Qwen3-TTS for local speech output.

Commands:
- speech-to-speech serve: start the Realtime server.
- speech-to-speech talk --url <full-realtime-url>: connect the packaged microphone and speaker client.
- speech-to-speech local: run the server and packaged client together over loopback.

The default server listens on 127.0.0.1:8765/v1/realtime. The README warns that network exposure requires an explicit host setting.

## Local and offline use
The project supports local inference through Transformers or mlx-lm, and self-hosted LLMs through vLLM or llama.cpp. It can operate offline after selected model assets and dependencies are cached. HF_HUB_OFFLINE=1 prevents Hub requests when all needed assets are local.

A macOS preset is available with --mac-optimal-settings. Docker support starts a llama.cpp Gemma 4 server and the Realtime server.

## Realtime and tool use
The API supports low-latency turn-taking, live transcription, interruption, audio streaming, tool calls, and response cancellation. The packaged client can load local Python tools through --tool-module.

An optional LLM proxy exposes chat completions or responses endpoints for side tasks such as summaries, titles, background agents, tools, and streaming. The README warns that the proxy has no authentication or throttling of its own and should only be exposed behind a trusted gateway.

## Languages and turn handling
Language support depends on the selected STT and TTS components. The project supports single-language mode and automatic language switching. Smart Turn v3.2 can validate end-of-speech decisions using speech content and prosody. The default server enables Smart Turn and supports speculative turn reopening when speech resumes.

## User-provided announcement
https://github.com/huggingface/speech-to-speech
Speech-to-speech no longer needs speech-to-text!

Until now, our stack was VAD -> STT -> LLM -> TTS. Now it can send audio directly to multimodal LLMs:

VAD → MLLM → TTS

No STT. The model understands your voice.

Now go build better voice agents!
