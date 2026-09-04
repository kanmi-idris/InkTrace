---
title: "ML Kit GenAI APIs: On-Device Gemini Nano Features via AICore"
kind: "paste"
captured_at: "2026-09-03 00:01"
tags: ["android", "ml-kit", "gemini-nano", "aicore", "on-device-ai", "genai", "privacy", "summarization", "speech-recognition"]
source_url: "https://developer.android.com/ai/genai/overview"
status: "inbox"
---

# ML Kit GenAI APIs: On-Device Gemini Nano Features via AICore

## Source overview
This captures the official Android Developers documentation page for ML Kit's GenAI APIs, reached via a shared goo.gle short link. These APIs expose Gemini Nano, Google's on-device foundation model, through a high-level ML Kit interface, built on top of AICore (an Android system service for on-device execution of GenAI foundation models). Use of the GenAI APIs is governed by a separate ML Kit GenAI API Additional Terms of Service, and the documentation states developers are solely responsible for the safety of their API client and their app's user experience.

## Key features
Six documented capabilities:
- Summarization: condenses articles or chat conversations into a bulleted list.
- Proofreading: refines grammar and fixes spelling in short content.
- Rewriting: rewrites short messages in different tones or styles.
- Image description: generates a short description of a given image.
- Speech recognition: transcribes audio content to text.
- Prompt: generates text content from a custom text-only or multimodal prompt (the most general-purpose of the six).

## On-device benefits and architecture
Because these APIs run entirely on-device (consistent with other ML Kit features), the documentation states: input, inference, and output data are processed locally; functionality is unaffected by an unreliable internet connection; and no per-call server cost is incurred by the developer. Because the APIs sit on top of AICore and share the on-device Gemini Nano model across all apps on a device, an app does not need to trigger its own separate model download if the shared model is already present, which also conserves device storage. The docs link out to a separate Android Developers Blog post specifically about how AICore isolates requests between apps to protect privacy, though the isolation mechanism's internals were not independently verified in this capture.

## Streaming vs non-streaming
Each API can be called in a streaming mode (results delivered incrementally as they are generated, useful for lengthy responses where faster initial feedback matters) or a non-streaming mode (waits for the full response before returning it as one block, suited to short responses or batch processing).

## Device support (summarized)
Device support differs between the four feature-specific APIs (Summarization, Proofreading, Rewriting, Image Description) and the separate Prompt API and Speech Recognition API.

- The four feature-specific APIs are documented as supported on a broad, still-expanding list of devices spanning Google Pixel 9/10/11 series (including Pro, Pro XL, and Pro Fold variants), and current flagship or upper-mid-range devices from Honor, iQOO, Lenovo, Motorola, OnePlus, OPPO, POCO, realme, Samsung (Galaxy S25/S26 and Z Flip/Fold/TriFold lines), Sharp, Sony, vivo, and Xiaomi. Exact language-support availability is noted to vary by device configuration and which models have actually been downloaded to that device.
- The Prompt API has a narrower, model-version-specific support list, split across three underlying Gemini Nano model versions the docs label nano-v2, nano-v3, and nano-v4, each mapped to a different subset of the devices above (for example, nano-v4 is documented as currently limited to Pixel 11-series and Galaxy Z Flip8/Fold8/Fold8 Ultra devices, while nano-v2 covers a set of mid-2025-era flagship devices from Honor, iQOO, Motorola, OnePlus, OPPO, POCO, realme, Samsung, vivo, and Xiaomi).
- The Speech Recognition API has two modes: a Basic Mode using the traditional on-device speech recognizer available on most Android devices running API level 31 or higher, and an Advanced Mode that uses the GenAI model for higher quality and broader language coverage, currently documented as supported on Pixel 10 and Pixel 11 devices with more devices planned.

The Gemini Nano version actually present on a given device can be queried in code via a documented getBaseModelName() call, since different devices run different model versions.

## Quota and background-usage constraints
AICore enforces a per-app inference quota. Exceeding a short-period request rate returns an ErrorCode.BUSY response, for which the docs recommend exponential-backoff retry; exceeding a longer-duration quota (such as a daily cap) returns a separate ErrorCode.PER_APP_BATTERY_USE_QUOTA_EXCEEDED error.

GenAI API inference is documented as permitted only while the calling app is the top foreground application. Attempting to use the API while the app is backgrounded, including from a foreground service, returns an ErrorCode.BACKGROUND_USE_BLOCKED response. This is a meaningful architectural constraint: these APIs cannot be used for silent background processing.

## Sample code
The docs point to two official sample repositories: googlesamples/mlkit (the android/genai subdirectory specifically) and android/ai-samples (the Android AI Catalog sample).

## Evidence boundary
The official Android Developers documentation page was fetched and read for this capture. No Android app was built, no ML Kit GenAI dependency was added to a project, and no on-device inference was run during this capture. Device-support lists reflect the documentation's stated coverage at the time of this capture and are explicitly described by Google as still expanding.

## Sources
- https://developer.android.com/ai/genai/overview (reached via https://goo.gle/4xJQswv)
- https://developer.android.com/ai/gemini-nano/
- https://android-developers.googleblog.com/2023/12/a-new-foundation-for-ai-on-android.html
- https://android-developers.googleblog.com/2024/10/introduction-to-privacy-and-safety-gemini-nano.html
- https://github.com/googlesamples/mlkit/tree/master/android/genai
- https://github.com/android/ai-samples
