# Tinycharts free skill download and static review

Captured: 2026-11-05
Product page: https://april-zhu.com/tinycharts
Download: official `tinycharts.skill` file, obtained after the user approved submission of the primary email address to the site's unlock form.

## File identity

The browser downloaded `tinycharts.skill` and `tinycharts.zip`. Both files have the same SHA-256: `0e76d5151a58b1ea27bc1a2dc724d2eaaa8fc042d9a5c8d8fdeb870c28dc0345`. Each archive contains 38 files. The `.skill` artifact is preserved at `artifacts/tinycharts.skill` for the user.

## Static review

The archive was read without installing or running it. Its `SKILL.md` defines nine chart types: flowchart, flow machine, comic strip, timeline, clock, exploded view, annotated scene, game board, and catalogue. These match the free-tier list on the product page.

The skill says to write a Mermaid statechart and a small breadth-first search over reachable states. It says to remove guards and confirm the search finds a shortest rule-breaking path. It explicitly describes this as a plain search over a small model, not a model checker. The README and NOTICE also say some project models were checked with the pstack statechart skill; this is distinct from the skill's own plain BFS check.

The skill asks for warm, everyday subjects. It says not to use technical systems, crypto, or finance. It asks the user to cite sources for facts and mark unsourced facts as illustrative. It builds one HTML file with Python. An optional `--logic` panel can draw the statechart as a flowchart; that panel needs `pele` from npm.

## License and limits

The included LICENSE says April Zhu holds copyright, with personal-use and fun-use permission. It prohibits resale or redistribution of the skill or generated sheets, and it prohibits commercial use. Commercial work requires Tinycharts Pro. The LICENSE and NOTICE keep the cited statechart-art and pstack parts under MIT.

## Actions not taken

The user approved the email submission. The site said it would send updates about new skills. The `.skill` file was downloaded and copied to the session artifact folder. It was not installed, extracted into `~/.claude/skills`, or run. No files in the project were changed by the skill.
