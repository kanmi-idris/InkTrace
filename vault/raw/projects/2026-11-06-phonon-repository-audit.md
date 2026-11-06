# Phonon repository audit

## Sources

- Repository README: https://github.com/Infatoshi/phonon
- Third-party notices: https://github.com/Infatoshi/phonon/blob/main/THIRD_PARTY.md
- Related model card: https://huggingface.co/Infatoshi/phonon-refiner-1.7b
- User post: https://x.com/elliotarledge/status/2118386115170496855

## What the repository documents

The README describes Phonon as local voice typing. The documented macOS release is for Apple silicon on macOS 14 or later. Windows is marked beta. The pipeline is microphone audio, Parakeet speech recognition, dictionary lookup, a correction model, and text insertion.

The refiner is described as fine-tuned from LiquidAI LFM3-1.7B. The app uses a native Metal engine with a speculative drafter. The README says the models stream during speech. The post separately says the drafter was trained on a local server with four RTX Pro 6000 GPUs; that hardware claim is author-reported.

## Latency claims use different measures

- The X post reports 65 ms from key-up to pasted text on an M4 Max and about 520 ms for Wispr Flow on the same clips. It also reports about a quarter second after six minutes of speech. These are author claims; this capture did not test them.
- The README separately reports that streaming reduced the median from about 215 ms to about 30 ms, measured from key release to corrected text inside the engine over 40 real dictations. It says pasting adds a few milliseconds.
- The README's 215-to-30 ms engine measurement is not the same measure as the post's 65 ms key-up-to-pasted-text claim. It does not independently verify the Wispr Flow comparison.

## Startup, locality, and privacy

The README says first launch downloads about 4.9 GB of model weights, plus Python packages. After setup, dictation runs locally and offline, apart from a daily GitHub release check that can be disabled. The website also says model weights download on first launch and dictation data stays on the Mac. These are project statements; this capture did not audit network traffic.

The README says local history is off by default and asks whether to keep history and read screen context. If screen context is enabled, the app reads visible window text for context. The README says screenshots are not saved and private apps and sites are excluded. The app needs microphone, accessibility, input-monitoring, and, for screen context, screen-recording permissions.

## Training-data and license notes

The README rounds the training set to 77,000 transcripts and says they use four writing modes. The model card gives the more specific breakdown; see [src-2026-11-06-004].

The repository lists GPL-3.0 for Phonon source. It lists CC-BY-4.0 for Parakeet TDT 0.6B v2 and LFM Open License v1.0 for the refiner weights. The LFM license is separate from the app's source license. See [src-2026-11-05-013] for the existing license capture. This is not legal advice.

## Scope

This audit records project documentation. I did not install, run, build, or test Phonon. No source-code security review or network audit was performed.
