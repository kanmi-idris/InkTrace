# Sand3D dataset and Explorer audit

## Sources inspected

- Collection: https://huggingface.co/collections/Sandflow/sand3d
- Explorer: https://huggingface.co/spaces/Sandflow/sand3d-explorer
- Hugging Face dataset-server `/size` API for each listed dataset.

## Published counts

The dataset-server returned these exact row counts. Each count includes the listed train and validation splits.

| Dataset | Total rows | Train | Validation | Notes |
| --- | ---: | ---: | ---: | --- |
| Objaverse | 66,887 | 64,642 | 2,245 | One `default` config |
| CAD | 24,495 | 23,363 | 1,132 | One `default` config |
| Articraft | 9,209 | 8,737 | 472 | One `default` config |
| SimReady | 2,334 | 2,194 | 140 | One `default` config |
| AutoMate | 3,169 | 2,827 | 342 | `default`: 872 rows; `parts`: 2,297 rows |
| **All configurations** | **106,094** | **101,763** | **4,331** | Includes AutoMate `parts` rows |

The Explorer reports **103,797 objects**. Its dataset section lists 66,887 Objaverse, 24,495 CAD, 9,209 Articraft, 2,334 SimReady, and 872 AutoMate objects. It lists AutoMate's 2,297 parts separately. Thus, 103,797 is the sum of the Explorer's object counts. The 106,094 row total also includes those separate AutoMate part rows.

These published counts support the post's 100,000+ cataloged-object headline. I did not test whether source assets overlap across datasets or count unique original objects. Do not describe 106,094 as a deduplicated unique-object count.

## Rebuild claim

The Explorer says each program was run again under sand3d in a fresh process, and kept only when it rebuilt the stored object. This is a project-reported pipeline description. I did not reproduce it.

## License notes

The Hugging Face dataset pages show `CC-BY-4.0` as the dataset-card license. Their rows expose `source_license`, `attribution`, and `license_status` fields. Visible row examples include `CC-BY-4.0` for a SimReady asset and `CC0-1.0` for an AutoMate asset; other source rows include licenses such as Apache-2.0. The collection-level label does not replace row-level source-license and attribution review.

## Row-count API URLs

- https://datasets-server.huggingface.co/size?dataset=Sandflow%2Fsand3d-objaverse
- https://datasets-server.huggingface.co/size?dataset=Sandflow%2Fsand3d-cad
- https://datasets-server.huggingface.co/size?dataset=Sandflow%2Fsand3d-articraft
- https://datasets-server.huggingface.co/size?dataset=Sandflow%2Fsand3d-simready
- https://datasets-server.huggingface.co/size?dataset=Sandflow%2Fsand3d-automate
