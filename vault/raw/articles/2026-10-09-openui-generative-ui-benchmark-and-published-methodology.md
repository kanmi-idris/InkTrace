---
title: OpenUI generative UI benchmark and published methodology
kind: article
captured_at: 2026-10-09 19:15
tags: [OpenUI, generative-UI, benchmark, methodology, raw-data, structural-validity]
source_url: https://www.openui.com/benchmarks
status: raw
---

# OpenUI generative UI benchmark and published methodology

## Source scope
This capture covers OpenUI's benchmark page, its methodology page, and the linked public repository `https://github.com/thesysdev/generative-ui-bench`. OpenUI created the benchmark. The headline numbers and comparative claims are vendor-produced. The repository publishes raw model outputs and scored verdicts for inspection and offline rescoring.

## Benchmark setup reported by OpenUI
- The method uses 46 interface briefs across five complexity bands, 70 equivalent components, four generations per brief, a 16,384-token output limit, and temperature 0.7 where supported. Reasoning is minimal or off.
- The format comparison uses six models and three formats: OpenUI, Google A2UI, and Vercel json-render. OpenUI reports 1,104 generations per format.
- Each format uses its own SDK-generated prompt and shipped parser. The comparison adds shared completeness checks. A run must parse, produce a root, resolve all references, avoid orphaned or invented components, pass required and enum-prop checks, avoid truncation, and meet a component-count floor.
- Render success is separate from structural validity. A page can render and still fail validity.

## Headline results shown on the benchmark page
- OpenUI reports 99.9% render success, with 1 blank screen in 1,104 runs.
- OpenUI reports 96.9% structural validity.
- OpenUI says it costs 1.8 to 2.6 times less across priced models and uses fewer tokens than A2UI and json-render.
- OpenUI reports that its sanitizer repaired 88% of failed validations through incremental editing. The page says this result comes from OpenUI Cloud production traffic, not benchmark runs.

## Evidence limits stated by the methodology
- The benchmark measures structural validity and render success. It does not measure visual quality.
- The component-count floor does not prove that each brief requirement was addressed. The method does not measure requirement coverage.
- The benchmark uses one build of OpenUI's shipped parser, `lang-core 0.2.16`, for every row.
- Cost uses measured tokens and provider list prices. Hidden reasoning tokens may increase actual bills. Self-hosted model costs are marked not comparable, not free.
- OpenUI built the benchmark. It published the method and outputs so others can inspect and challenge them.

## Published repository and raw-data spot check
- The repository README says it contains all 46 briefs, the shared 70-component catalog, raw outputs, and scored verdicts. It says the scorer can rescore the committed data offline without model API keys.
- The repository describes one shared completeness layer and explains its re-scoring workflow. The raw model outputs are text files under `raw/<label>/`; per-run scored verdicts are in `results/`.
- Spot check: `raw/deepseekflash/openui__b1-invoice__r1.txt` contains an OpenUI Lang invoice component tree. The matching first result in `results/results-deepseekflash.json` is renderable but incomplete, with an `enum-mismatch` on `Card/align`. This illustrates that render success does not imply structural validity.
- I inspected one raw output and its scored verdict. I did not download the full repository, install dependencies, or run the scorer.

## Relation to the earlier OpenUI source
This benchmark covers different pages and evidence than `src-2026-07-01-004`, which covers `/docs/openui-lang`. Keep the sources separate and linked.
