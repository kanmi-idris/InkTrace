# Reducing Eye Movement While Reading Code

Source ID: src-2026-04-14-005
Canonical URL: 
Resource Type: article
Host: 
Mention Count: 1
Original URLs: 

## Captured Text Excerpt
This source frames readability in terms of eye movement: when a reader has to jump between different parts of the same file or across multiple functions, variables, or files to understand a behavior, comprehension slows down and context becomes harder to maintain.

The core recommendation is to write code that can be read from top to bottom within a single function or file whenever practical. The examples focus on three tactics:

1. Reduce context shifts by exposing conditions more directly when the logic is simple.
2. Simplify nested ternary expressions into if-based control flow when the branching logic becomes hard to parse.
3. Order comparisons so they read naturally from left to right, especially for range checks.

The source also notes that abstractions like a role-policy map can be useful for complex permission systems, but can introduce unnecessary eye movement and indirection when the logic is simple enough to express directly in the component.
