# IIFE JavaScript Tip

Captured from user-supplied notes and examples on 2026-05-04.

Source type:

- User-supplied JavaScript concept note.

---

Core explanation captured from the supplied text:

- IIFE stands for Immediately Invoked Function Expression.
- It is described as a function wrapped as an expression and executed immediately.
- It is also described as a self-executing anonymous function and an idiom where a function runs as soon as it is defined.

Use cases captured from the supplied text:

- private scope
- avoiding global pollution
- one-time initialization

Examples captured from the supplied image:

```js
(function() {
  console.log("Yay!");
}())
```

```js
(() => {
  console.log("Yay!");
}())
```

Additional examples captured from the supplied follow-up note:

```js
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();
```

Structure explanation captured from the supplied follow-up note:

- An IIFE contains two major parts:
  - a function expression, often wrapped in parentheses so it parses correctly
  - an immediate invocation of that expression

Additional use cases captured from the supplied follow-up note:

- creating a new async context so `await` can be used where top-level async is unavailable
- computing values with complex multi-statement logic in a place that expects a single expression

Comparison note captured from the supplied follow-up note:

- The note contrasts IIFEs with the comma operator by arguing that IIFEs can encapsulate local variables, control flow, and arbitrarily many statements inside expression context.

Interpretive note:

- This is a small JavaScript language-pattern reminder rather than a framework or product source.
- It fits the catalog as a classic scoping and initialization idiom that still appears in legacy code and some modern bundler outputs.
