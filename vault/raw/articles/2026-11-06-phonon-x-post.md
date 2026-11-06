# Elliot Arledge's Phonon post

## Capture details

- Author shown: Elliot Arledge, verified account `@elliotarledge`.
- Post: https://x.com/elliotarledge/status/2118386115170496855
- X displayed Nov 5, 2026, 5:53 PM. The displayed page did not show a timezone.
- The post contains the install command below. It was recorded but not run.
- The post links to Phonon in a reply. That reply also links to the refiner model card and product site.
- The user-supplied `https://t.co/Vpd33iZ8dw` link is in a separate reply by `@tom_sloan_3`. It resolves to Hex, not Phonon. Keep it as a separate project.

## Post text

> i reverse engineered wispr flow, then used deepseek to fine-tune LFM3-1.7B. the result is on par with the wispr flow models you pay for, and it's free, open source and runs entirely on your mac.
>
> key-up latency is 65 ms on my m4 max vs ~520 ms for wispr flow on the same clips. a 6 minute yap session pacing around my office still lands in about a quarter second.
>
> rust backend with a native metal engine: each decode step runs as one fused megakernel
>
> a dflash2 speculative drafter is built into the engine, trained on my local 4 x rtx pro 6000 server
>
> parakeet transcribes, LFM3-1.7B refines. both stream while you talk, so key-up only waits on the last chunk
>
> never leaves your macbook, so slow internet or bad ping is no longer an issue
>
> import your own dictionary of terms for your workflow
>
> i picked every default myself. it feels amazing out of the box
>
> adapts to the app you're in: discord is lowercase casual, slack and email are formal, claude code gets clear prompts
>
> training data: 77k transcripts of public audio and synthetic dictations, each rewritten by deepseek v4.1 flash 1017 following a written spec of what "what you meant" means, in 4 writing modes. none of my own dictations went into it
>
> blind judge (claude opus) on an hour of lectures: phonon's text preferred 90 times, wispr's 23
>
> built with claude opus 5.5 [xhigh]

The post shows this command:

```sh
brew install --cask infatoshi/tap/phonon
```

## Links and thread context

- `https://t.co/ctxLGStpVG` resolves to https://github.com/Infatoshi/phonon.
- `https://t.co/XpYMXYydZB` resolves to https://phonon.sh/.
- Elliot's Phonon reply also links to https://huggingface.co/Infatoshi/phonon-refiner-1.7b.
- `https://t.co/Vpd33iZ8dw` resolves to https://github.com/anomalyco/hex. In the X conversation, it appears with a separate reply by `@tom_sloan_3`: “The makers of opencode made a very good TTS, for Mac Linux and windows. Pretty interface too”. Hex's README describes local voice dictation, not text-to-speech. Treat the reply's “TTS” wording as the reply author's description, not a verified product category.

## Evidence limits

The performance, model quality, training setup, and privacy statements above are the post author's claims. This capture does not reproduce them. The link to an open repository does not by itself prove the claim that Phonon reverse-engineered Wispr Flow.
