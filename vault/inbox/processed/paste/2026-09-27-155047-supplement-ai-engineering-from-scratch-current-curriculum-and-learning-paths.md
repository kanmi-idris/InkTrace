---
title: "Supplement: AI Engineering from Scratch Current Curriculum and Learning Paths"
kind: "paste"
captured_at: "2026-09-27 15:50"
tags: ["ai-engineering", "education", "curriculum", "machine-learning", "llm", "agents", "mcp", "agent-skills", "open-source", "python", "typescript", "rust", "julia", "supplemental-capture"]
source_url: "https://aiengineeringfromscratch.com/"
status: "inbox"
---

# Supplement: AI Engineering from Scratch Current Curriculum and Learning Paths

## Relation to existing coverage
InkTrace already has src-2026-05-11-001, which captured the earlier homepage state with 416 lessons and 20 phases. The current site and repository have expanded substantially. This supplemental record preserves the earlier evidence and records the current structure without overwriting it.

## Current project identity
AI Engineering from Scratch is a free, MIT-licensed, open-source curriculum maintained by Rohit Ghumare and contributors. The site and the GitHub repository present the same lesson code and learning structure. The current public landing page and repository README report 523 lessons across 20 phases, approximately 342 hours of learning, and four implementation languages: Python, TypeScript, Rust, and Julia. Counts can change as lessons are published or revised.

The curriculum keeps its original first-principles thesis: derive the mathematics, implement the algorithm, run the test, and retain a reusable artifact before relying on a production framework. The project describes reusable outputs such as prompts, skills, agents, and MCP servers.

## Four connected domains
The homepage now organizes the curriculum into four connected domains:

- **Building and Deploying AI Applications**: prompts, structured outputs, embeddings, retrieval, evaluation, serving, observability, and safe release.
- **Software Engineering Fundamentals**: environments, repositories, interfaces, debugging, verification, security, release, and operational foundations.
- **Agent-Assisted Engineering**: repository-grounded task framing, planning, agent loops, harnesses, delegation boundaries, verification, and feedback preservation.
- **Product Judgment and Delivery**: outcomes, assumptions, executable specifications, measurement plans, staged releases, and owned feedback.

These domains overlay the 20-phase curriculum. They are learning paths, not separate products.

## Core technical range
The repository and site place the curriculum on a progression from setup and mathematics to production AI systems. The inspected material includes:

- Development environment, Git, GPU setup, APIs, notebooks, Python environments, Docker, data management, debugging, and profiling.
- Linear algebra, calculus, automatic differentiation, probability, optimization, information theory, dimensionality reduction, tensor operations, numerical stability, and statistics.
- Machine-learning fundamentals and feature engineering.
- Deep learning, computer vision, NLP, speech and audio, reinforcement learning, and transformers.
- Generative AI, LLM internals, LLM engineering, retrieval, evaluation, serving, and observability.
- Tools and protocols, including MCP fundamentals and related security or operating concerns.
- Agent engineering, coding-agent workflows, product judgment, safety, ethics, and capstone projects.

The exact lesson catalog is generated from repository lesson data. The current catalog includes Build, Learn, and Capstone lesson types and exposes the implementation language for each lesson.

## Focused learning paths
The site provides focused paths in addition to the complete sequence:

- Model Context Protocol: build, secure, verify, and operate stateless MCP systems from wire envelopes through release gates.
- Agent Skills: build, invoke, route, secure, evaluate, package, and verify portable skills in real agent hosts.
- Agent-Assisted Engineering: use coding agents against real repositories while keeping evidence and verification visible.
- Building and Deploying AI Applications: move from prompts and retrieval to production operations.

Each path links to the website lesson reader and the matching GitHub source or JSON learning-path file.

## Lesson and evidence method
The stated lesson loop is consistent across the project: read the problem, derive the math, write the code, run the test, and keep the artifact. The project says lessons are authored with AI assistance but reviewed by a human against primary sources. Factual claims are intended to cite original RFCs, specifications, or research papers rather than secondary summaries. Corrections are tracked through GitHub issues.

This method makes the curriculum closer to a repository of runnable learning artifacts than a video course. The site explicitly says it has no paywall, signup requirement, or course upsell.

## Website implementation
The About page describes the site as hand-written HTML, CSS, and vanilla JavaScript. A repository build script reads lesson Markdown and generates the catalog, search index, sitemap, and `llms.txt` on each deployment. Public counts are read from that generated data. The site is hosted on Vercel.

The website is therefore a rendered reader and navigation layer over the GitHub lesson source. The repository remains the primary location for lesson code, history, issues, and contributions.

## Book edition
The project now publishes a six-volume book edition. EPUB and PDF files are built from the same lessons and attached to GitHub releases. The website remains the living edition, with lesson pages linking back to interactive figures, quizzes, and code.

This creates two delivery forms with different uses:

- Website and repository: current lessons, search, interactive reading, quizzes, code, and issue-based corrections.
- Release book files: compiled offline reading in six volumes.

## Certification preparation
The homepage adds certification-preparation material for Claude and Model Context Protocol Associate routes. It reports five tracks, 67 certification lessons, and 505 original practice questions. The linked guide states that the material teaches a public blueprint and practical skills. It does not reproduce protected exam questions, issue a credential, determine eligibility, or act as an official certification provider.

The certification paths use the same practical style as the main curriculum: interactive labs, learner-owned artifacts, and an AI tutor grounded in the GitHub repository.

## Current engagement claims
The repository and site report 523 lessons and 20 phases. The repository README also reports approximately 342 hours. The homepage displays 114,584 readers and 181,995 page views in the preceding 30 days as of August 29, 2026. These are project-published counters, not independently audited usage metrics.

## Reusable value
The durable idea is the connection between first-principles understanding and production AI delivery. A learner can move from math and model internals to prompts, retrieval, agents, MCP, skills, testing, observability, safety, and release practices without switching to unrelated course formats.

The four-language approach also assigns different implementation contexts: Python for much of the ML and AI work, TypeScript for application and agent interfaces, Rust for selected performance-oriented systems, and Julia for mathematical or numerical work. The project chooses the language per lesson rather than requiring one language for every phase.

## Evidence boundary
The current homepage, About page, lesson catalog, GitHub repository README, and certification references were inspected. The current counts, reader counters, book-release description, build pipeline, learning paths, and certification totals are project-published claims.

I did not clone the repository, run lesson code, inspect every lesson citation, verify the reader analytics, download the book files, or validate the certification material against an official exam blueprint.

## Sources
- https://aiengineeringfromscratch.com/
- https://aiengineeringfromscratch.com/about.html
- https://aiengineeringfromscratch.com/catalog.html
- https://github.com/rohitg00/ai-engineering-from-scratch
- https://github.com/rohitg00/ai-engineering-from-scratch/blob/main/certifications/README.md
- Existing source: src-2026-05-11-001
