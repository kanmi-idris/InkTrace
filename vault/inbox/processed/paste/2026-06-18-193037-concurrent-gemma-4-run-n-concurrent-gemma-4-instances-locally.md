---
title: Concurrent Gemma 4 - Run N Concurrent Gemma 4 Instances Locally
kind: paste
captured_at: 2026-06-18 19:30
tags: [gemma, ai, llm, llamacpp, concurrent, macos, google-deepmind]
source_url: 
status: inbox
---

# Concurrent Gemma 4 - Run N Concurrent Gemma 4 Instances Locally

Concurrent Gemma 4 - Run N Concurrent Gemma 4 Instances Locally

## Overview
Run N concurrent Gemma 4 instances on a local llama-server and visualize them working in real time. Part of the google-gemma/cookbook repository. Supports scenarios like generating SVGs, translating text, generating code, and generating ASCII art.

## Repository
- https://github.com/google-gemma/cookbook/tree/main/apps/concurrent
- Part of Google DeepMind's official Gemma cookbook

## Prerequisites
- macOS (uses AppleScript for Terminal window management)
- uv for package management
- llama-server from llama.cpp running on localhost:8080
- Gemma 4 GGUF model (e.g. from unsloth/gemma-4-26B-A4B-it-GGUF)

## Quick Start
1. uv sync
2. llama-server -m gemma-4-26B-A4B-it-UD-Q4_K_M.gguf -c 70000 -np 10 --metrics --reasoning off
   (set -np to concurrent instances + 1 for orchestrator)
3. bash run.sh --scenario svg --topic "Technology and AI" --tasks 10

## Available Demos
- svg: Generate SVGs on a topic
- translate: Translate text
- code: Generate code (e.g. FizzBuzz)
- ascii: Generate ASCII art (e.g. animals)

## Visualization
Opens macOS Terminal windows in a grid: dashboard on top, orchestrator, and N Gemma 4 instances below.

## Adding Custom Scenarios
Edit demo/scenarios.py with make_agents function, plan template, and HTML template. Register in SCENARIOS dict.

## Key Details
- Uses llama.cpp's llama-server with multiple parallel slots (-np flag)
- Each instance gets its own slot, context per slot = total context / instances
- Orchestrator distributes tasks to agents and collects results
- Real-time visualization of all agents working
