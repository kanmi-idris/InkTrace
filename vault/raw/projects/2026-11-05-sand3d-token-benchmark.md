# Sand3D token benchmark audit

## Sources

- Published comparison page: https://sand3d.sandflow.ai/tokens.html
- Source Markdown: https://github.com/Sandflow-ai/sand3d/blob/main/docs/readme/tokens.md

## Published method and scope

The comparison page says it counts `o200k_base` tokens for code only, excluding docstrings and comments. It defines a ratio as the other program's token count divided by the Sand3D token count.

For Blender Python, the page compares 30 CAD parts. It says an LLM wrote the Blender Python program from each part's source. The page reports a 4.0× median ratio, and says 9 of 30 Blender Python programs build the right part.

The page also reports median ratios of 2.3× versus CadQuery on 17 CAD parts, 6.0× versus FeatureScript on 13 CAD parts, and 2.0× versus Articraft's Python SDK on 12 articulated objects. It says mesh-only assets were not compared because they have no program to compare with.

## Arithmetic check for the post's 3.8× claim

The 30 published Blender Python rows sum to 29,191 tokens. The matching Sand3D rows sum to 7,696 tokens. Their ratio of totals is 29,191 / 7,696 = 3.793, which rounds to 3.8×.

This is an aggregate ratio of token totals. It is not the unweighted mean of the 30 per-part ratios. Calculated from the published token counts, the unweighted mean per-part ratio is about 4.516 and the median is about 4.035, which rounds to the page's 4.0× median.

The post's 3.8× wording is therefore consistent with the aggregate totals, but its word “average” can be read as an unweighted mean. The comparison is limited to 30 CAD parts, and only 9 Blender Python outputs are marked as building the right part. The benchmark does not establish the same ratio for every dataset or every 3D object.
