# Four Principles of Writing Good Code

Source ID: src-2026-04-14-003
Canonical URL: https://frontend-fundamentals.com/code-quality/en/code/start.html
Resource Type: article
Host: frontend-fundamentals.com
Mention Count: 1
Original URLs: https://frontend-fundamentals.com/code-quality/en/code/start.html, https://frontend-fundamentals.com/code-quality/en/code/, https://www.youtube.com/watch?v=O_IMsEg91g8&t=30582s

## Captured Text Excerpt
This source defines good frontend code as code that is easy to modify and deploy when new requirements arrive. It frames that modifiability through four criteria:

1. Readability
2. Predictability
3. Cohesion
4. Coupling

The source describes readability as reducing the amount of context a reader must hold at once and making code flow naturally from top to bottom. Its strategies include separating code that does not execute together, abstracting implementation details, naming conditions and magic numbers, reducing context switching, and simplifying ternary operators.

Predictability is described as the degree to which colleagues can infer behavior from a function or component’s name, parameters, and return values. Suggested strategies include avoiding duplicated naming, unifying return types for similar functions, and exposing hidden logic.

Cohesion is described as whether code that needs to be modified together is always modified together. The source explicitly notes that readability and cohesion can conflict: abstraction may improve cohesion while making code harder to read. Example cohesion strategies include putting files modified together in the same directory, eliminating magic numbers, and considering form cohesion.

Coupling is described as the size of the impact area when code changes. The source argues that lower coupling makes modification easier because the scope of change is easier to predict. Suggested strategies include narrowing responsibilities, permitting some duplication, and eliminating props drilling.

The article also includes concrete examples for:
- Splitting components so mutually exclusive execution paths are separated.
- Abstracting authentication or confirmation logic into wrapper components or helper components.
- Breaking apart an overgrown page-state hook into smaller query-parameter hooks so responsibility, performance, and scope of change all improve.
