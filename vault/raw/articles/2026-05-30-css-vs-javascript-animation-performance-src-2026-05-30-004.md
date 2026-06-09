# CSS vs. JavaScript

Captured from the user-supplied pasted article text on 2026-05-30.

Canonical URL:
https://www.joshwcomeau.com/animation/css-vs-javascript/

Article metadata visible in the supplied text:

- title:
  - `CSS vs. JavaScript`
- subtitle:
  - `Exploring the performance implications of different animation strategies`
- author:
  - Josh W. Comeau
- published date:
  - 2026-05-26
- last updated:
  - 2026-05-26
- category:
  - Animation

Core question captured from the article:

- The article examines whether CSS animations are inherently faster than JavaScript animations.
- It argues that the answer is more nuanced than the common rule of thumb that CSS is always faster.

CSS keyframes versus JavaScript loop comparison captured from the article:

- The example compares a CSS keyframe animation with a JavaScript `requestAnimationFrame` loop.
- The JavaScript implementation updates `transform` on each frame.
- The article argues that the per-frame calculation and DOM write are usually not the main problem in modern browsers.
- The important difference is thread ownership:
  - CSS transitions and keyframe animations can run on a separate animation/compositor thread.
  - JavaScript animation loops run on the main thread and compete with framework updates, fetch parsing, and other application work.

Main-thread blocking point captured from the article:

- When the main thread is blocked, JavaScript-loop animations freeze.
- CSS keyframe animations can keep moving because they are not dependent on the JavaScript main thread in the same way.
- The article uses this to explain why spinners can freeze while the UI is preparing an update.

Animation library comparison captured from the article:

- The article compares:
  - CSS keyframes
  - Motion
  - GSAP
- It explains that Motion can keep running smoothly during main-thread pressure because it uses the Web Animations API under the hood.
- The Web Animations API is described as a JavaScript interface into the same lower-level animation engine used by CSS keyframes.
- GSAP is described as powerful but making different tradeoffs, including features that may not map cleanly to WAAPI.

Synchronization behavior captured from the article:

- The article distinguishes dropped-frame behavior from animation-duration behavior.
- The `requestAnimationFrame` implementation can snap to the correct position after a main-thread block because it calculates position from elapsed time.
- The article says the GSAP example can drift out of sync because it continues from its current location after delayed frames rather than preserving global elapsed-time alignment.
- The author notes this is not always bad, because avoiding a snap can sometimes feel better, but it matters when animations must orchestrate against fixed durations.

Download-cost guidance captured from the article:

- JavaScript animation libraries add bundle download and parse cost.
- The article treats this as most relevant when animation is needed immediately after page load.
- It says many interaction-triggered animations are less sensitive to this cost because users usually do not interact within the first couple of seconds.
- Scroll-driven animation is called out as an exception because users can start scrolling quickly.
- The article points to Animation Timeline as a native option for scroll-driven animation.

Tool-selection guidance captured from the article:

- Prefer native CSS transitions and animations when they can solve the problem.
- Use Motion or similar tools when CSS alone cannot handle the desired animation while still avoiding many main-thread drawbacks.
- Modern CSS APIs such as View Transitions, `linear()`, and Animation Timeline reduce the need for JavaScript animation libraries.

Animation-library evaluation rule captured from the article:

- The article distinguishes two library categories:
  - libraries that extend what animations can be created
  - libraries that merely wrap CSS transitions or keyframes in a JavaScript API
- The author argues that the second category is usually not worth using because it adds main-thread baggage and bundle weight without enabling new animation capabilities.
- The practical evaluation question is whether a library enables genuinely novel animation capabilities.

Interpretive note:

- This source is strongest as frontend animation performance guidance. Its durable value is the thread-level mental model: CSS, WAAPI, and JavaScript loops may all modify similar properties, but they differ sharply in how they behave under main-thread pressure, how they synchronize elapsed time, and whether the library cost is justified by new animation capability.
