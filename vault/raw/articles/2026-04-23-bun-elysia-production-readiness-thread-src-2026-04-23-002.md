# Bun + Elysia production-readiness thread

Captured from user-supplied pasted text on 2026-04-23. No canonical thread URL was provided with the paste.

---

Considering Bun + Elysia for a high-stakes government project. Is it production-ready?

I'm currently working on a high-availability project for a foreign government that requires military-grade security. It's a critical infrastructure project, and I'm evaluating if Bun is ready to be used in a production environment with zero tolerance for instability.

My main concerns are memory leaks and severe bugs that may not be apparent in smaller applications. The current stack includes: Legacy performance-critical modules written in C++. New performance-critical modules using Rust. Smaller, non-critical services written in Go.

I'm designing a new API gateway, and Bun + Elysia have caught my attention. The benchmarks show that Bun outperforms Go in some cases, which is impressive. However, the real selling point for me is the developer experience. Bun's built-in SQL support, combined with Elysia's intuitive API, makes it a compelling choice.

The question is: is it worth the risk of using Bun (specifically in combination with Elysia) in a high-stakes and high-load production environment? Have any of you deployed it in such a scenario? Have you encountered any hidden memory leaks, edge cases, or operational issues that might make you think twice about using it for projects of this scale? I would love to hear your experiences.

Comments included in the supplied text:

- Several commenters argued that Node, Fastify, Go, Rust, Java, C#, or Elixir are safer choices for high-assurance or government systems.
- Multiple commenters described Bun as attractive on developer experience but too young or risky for critical infrastructure.
- Some commenters specifically reported segmentation faults, memory leaks, worker instability, compatibility issues, or concerns about Bun's JavaScriptCore fork and memory safety.
- Other commenters said they had used Bun and Elysia successfully in production or would still choose them for API gateways or backend-for-frontend layers.
- One commenter noted that Elysia supports multiple JavaScript runtimes, while another argued that portability and an escape path back to Node are important operational advantages.
- Some comments discussed approval, paperwork, SBOM visibility, and organizational comfort for government or enterprise environments.
