# LFM3-Omni-2B WebGPU Space audit

## Sources inspected

- Space: https://huggingface.co/spaces/LiquidAI/LFM3-Omni-2B-WebGPU
- Space README and file list, read without opening the app.
- `index.html`: https://huggingface.co/spaces/LiquidAI/LFM3-Omni-2B-WebGPU/blob/main/index.html
- `Lfm3OmniForConditionalGeneration.js`: https://huggingface.co/spaces/LiquidAI/LFM3-Omni-2B-WebGPU/blob/main/Lfm3OmniForConditionalGeneration.js

## Findings

- The Space metadata says `sdk: static`, and describes running LFM3-Omni-2B locally in a browser on WebGPU.
- The Space lists the BF16 model and the `LiquidAI/LFM3-Omni-2B-GGUF` model. The static page defaults to the GGUF model.
- The HTML checks `navigator.gpu` and requests a WebGPU adapter. The bundled JavaScript contains WebGPU and WGSL shader code. This supports that the browser demo uses WebGPU code.
- The Space repository lists `index.html` and `Lfm3OmniForConditionalGeneration.js`. The source files were inspected as text only. They were not executed.
- A prior browser-history capture showed the app loading 1.60 GB of model data. It reached 2%. The load was not completed. No inference, speed, latency, or offline test was performed.

## Scope limits

This Space is the browser demo. The Nov 4 iPhone claim concerns a separate React Native app. The post does not link that app's source. The 80 tok/s, 280 tok/s, 90 ms, and 140 ms figures remain author-reported claims.

The initial model load uses remote Hugging Face assets. This does not prove or disprove offline inference after a complete download. Offline behavior was not tested.
