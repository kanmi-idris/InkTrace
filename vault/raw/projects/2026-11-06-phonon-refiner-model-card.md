# Phonon refiner 1.7B model card audit

## Source

- https://huggingface.co/Infatoshi/phonon-refiner-1.7b
- Related repository: https://github.com/Infatoshi/phonon

## Training disclosure

The model card reports 76,960 training rows. It divides them into 38,480 writing-mode rows labeled by DeepSeek V4.1 Flash 1017 and 38,480 rows from the 0.2.3 refiner corpus. The latter have no writing-mode line. The card describes the writing modes as casual, formal, prompt, and minimal.

The X post says 77,000 transcripts were each rewritten by DeepSeek in four modes. The model-card breakdown is more specific: it does not say all 76,960 rows were newly rewritten by DeepSeek in all four modes. It also says no personal dictations were used. These are disclosures from the project, not an independent training-data audit.

## Evaluation disclosures

The card describes two different evaluations:

1. Real dictations from one speaker, mostly technical. The card reports 580 and 606 rows in two sets and says the outputs could not be distinguished from the Wispr Flow reference on that speaker. This is not evidence across speakers, accents, or general topics.
2. A model-judged comparison using 120 thirty-second lecture segments. The card reports 119 scored segments: Phonon preferred 90 times, Wispr 23, and 6 ties. It names Claude Opus 5.5 as the judge. This is a model judge, not a human panel or a standard word-error-rate test. The card says the comparison used f16 weights. Do not transfer this result directly to a different quantized deployment.

The evaluation results are project-reported. I did not reproduce them.

## Licensing

The model card lists LFM Open License v1.0 for the fine-tuned weights. See [src-2026-11-05-013] for the existing capture of the license terms. The app's GPL-3.0 source license and Parakeet's CC-BY-4.0 license are separate; see [src-2026-11-06-002]. This is not legal advice.
