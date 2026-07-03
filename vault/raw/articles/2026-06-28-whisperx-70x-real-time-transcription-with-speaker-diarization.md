---
title: WhisperX — 70x Real-Time Transcription with Speaker Diarization
kind: paste
captured_at: 2026-06-28 06:34
tags: [whisper, transcription, audio, speaker-diarization, open-source, ml]
source_url: https://www.opensourceprojects.dev/post/whisperx
status: inbox
---

# WhisperX — 70x Real-Time Transcription with Speaker Diarization

WhisperX by m-bain — open-source tool that extends OpenAI's Whisper with word-level timestamps and speaker diarization. 70x real-time transcription on GPU.

Key features:
- Word-level timestamps (every word gets start/end time)
- Speaker diarization ([SPEAKER_00], [SPEAKER_01] labels)
- 70x real-time speed on decent GPU (10-min recording transcribed in < 10 seconds)
- Multiple languages via Whisper model family
- Batch processing

Pipeline: Whisper for initial transcription → wav2vec2 alignment for word boundaries → pyannote-audio speaker segmentation + clustering for diarization.

Supports Whisper model sizes: tiny, base, small, medium, large-v2, large-v3. Smaller models run on CPU.

Quick start:
pip install whisperx
whisperx meeting.wav --model small --diarize

Or programmatic API with load_model, transcribe, align, and assign_word_speakers.

GitHub: https://github.com/m-bain/whisperX (with Colab notebook).
