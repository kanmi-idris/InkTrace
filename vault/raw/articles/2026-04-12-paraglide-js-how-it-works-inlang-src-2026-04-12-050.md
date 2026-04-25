# Paraglide JS - How It Works | inlang

Source ID: src-2026-04-12-050
Canonical URL: https://inlang.com/m/gerre34r/library-inlang-paraglideJs/architecture
Resource Type: article
Host: inlang.com
Mention Count: 1
Original URLs: https://inlang.com/m/gerre34r/library-inlang-paraglideJs/architecture/

## Mention Context
- 1/23/26, 6:51 AM: https://inlang.com/m/gerre34r/library-inlang-paraglideJs/architecture/

## Page Description
How Paraglide JS works - a compiler that generates tree-shakable translation functions for any JavaScript framework.

## Captured Text Excerpt
Paraglide JS - How It Works | inlang inlang Documentation Blog
GitHub 1.9k
Ecosystem Tools Plugins Aa Validation Rules
Paraglide JS
Tool
Menu On this page
Overview
Introduction Comparison Benchmark Changelog
Getting Started
SvelteKit Tanstack Router Tanstack Start React Router Next.js Astro Vite Vanilla Js Ts Standalone Servers
Usage
Basics Compiling Messages Message Keys Markup Strategy I18n Routing Middleware Variants Formatting Objects And Arrays File Formats Monorepo Multi Tenancy Server Side Rendering Static Site Generation Incremental Migration
Reference
Architecture Compiler Options Runtime Server Errors
Ecosystem
Sherlock vscode extension Cli for automation Fink web editor
Architecture
Copy markdown
Paraglide is a compiler-based i18n library. It compiles your translation files into JavaScript functions that you import and call like any other code.
import { m } from "./paraglide/messages.js" ;
m. greeting ({ name : "World" }); // "Hello World!"
Because messages are plain functions:
They work in any frameworkâReact, Vue, Svelte, Node.js, or vanilla JS
Your bundler handles tree-shaking and code-splitting automatically
No runtime parsing or framework-specific bindings needed
[!TIP] Using Vite? You're in the best position to benefit from Paraglide. Vite's Rollup-based tree-shaking eliminates unused messages automatically, and HMR updates translations instantly. Setup is just one plugin .
How It Works
Paraglide opens an inlang project â messages in JSON or any format via plugins
Compiler generates functions â one per message, fully typed
You import and call them â like any other function
Bundler optimizes automatically â tree-shaking, code-splitting, minification
That's it. No runtime overhead. No framework lock-in.
flowchart TD
INLANG_PROJECT[INLANG PROJECT]
COMPILER[COMPILER]
subgraph RUNTIME[runtime.js]
GET_LOCALE["getLocale()"]
SET_LOCALE["setLocale()"]
STRATEGY
end
subgraph MESSAGES[messages.js]
M["m.hello_world()"]
end
COMPILER -->|Opens| INLANG_PROJECT
M --> GET_LOCALE
MESSAGES --> COMPILER
RUNTIME --> COMPILER
APP[Your App] --> M
MESSAGE["'Hello World!'"] -->|renders| APP[Your App]
APP --> SET_LOCALE
GET_LOCALE --> STRATEGY
SET_LOCALE --> STRATEGY
classDef plainText stroke-width:0,fill-opacity:0,color:black;
class X plainText
Paraglide consists of four main parts:
Part File Key Exports
Compiler CLI / Plugin compile() , bundler plugins
Messages messages.js m.hello_world() , m.greeting() , etc.
Runtime runtime.js getLocale() , setLocale() , locales
Strategy runtime.js strategy , localizeHref() , urlPatterns
Edit this page on GitHub
Previous Incremental Migration
Next Compiler Options
On this page
Architecture How It Works
Repository
opral/paraglide-js 322 stars 548 closed / 31 open issues 52 contributors
Author
inlang
License
MIT
Pricing
free
Keywords paraglide js libraries apps website developer paraglide i18n library localization sdk sdk-js svelte react nextjs remix vue astro javascript solid typescript react router inlang
inlang The open file format for localization (i18n).
X GitHub Discord
Resources
Documentation
Blog
Ecosystem
Tools
Plugins
Validation Rules
Let's talk
Get in Touch
Copyright 2025 Opral
