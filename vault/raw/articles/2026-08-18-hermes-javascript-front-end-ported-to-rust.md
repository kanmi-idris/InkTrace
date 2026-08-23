I ported the Hermes JS front end to Rust, deliberately minimizing unsafe code and keeping it behind safe APIs. Why? Well, why not.

- hermes-parser: lexer + parser, with Flow, TypeScript and JSX.
- hermes-sema: scope resolution.
- hermes-gen-js: AST back to source.
- hermes-command-line: a command line parser that I find easier to use.

The AST is ESTree compatible and matches hermesc -dump-ast byte for byte. It is tested against the C++ binary.

The AST design is innovative: arena allocated and garbage collected, with a mark and sweep. Child nodes are plain references, not Box, so you can match straight through the tree. You can't do that when the children are boxed.

Source:
https://github.com/tmikov/hermes/tree/rust/rust

One of the crates:
https://crates.io/crates/hermes-parser

Tzvetan Mikov
@tmikov
· Aug 17

FWIW, this wasn't done by a swarm of agents running non-stop for days. It was incremental and I was involved in the design decisions.
