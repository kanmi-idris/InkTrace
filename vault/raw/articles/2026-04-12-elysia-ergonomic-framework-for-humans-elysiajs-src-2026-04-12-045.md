# Elysia - Ergonomic Framework for Humans | ElysiaJS

Source ID: src-2026-04-12-045
Canonical URL: https://elysiajs.com/
Resource Type: article
Host: elysiajs.com
Mention Count: 1
Original URLs: https://elysiajs.com/

## Mention Context
- 12/11/25, 8:28 PM: https://elysiajs.com/ bun framework

## Page Description
Elysia is an ergonomic framework for Humans. With end-to-end type safety and great developer experience. Elysia is familiar, fast, and has first-class TypeScript support with well-thought integration between services whether it

## Captured Text Excerpt
Elysia - Ergonomic Framework for Humans | ElysiaJS
Skip to content ElysiaJS
Search
Main Navigation Docs Blog Illust
Appearance
Return to top
Are you an LLM? View /llms.txt for optimized Markdown documentation, or /llms-full.txt for full documentation bundle
Ergonomic Framework for Humans
Backend TypeScript framework with End-to-End Type Safety , formidable speed, and exceptional DX across runtime.
Supercharged by Bun
Get Started bun create elysia app
See why developers love Elysia
The first production ready, and most loved Bun framework
Trusted by team at
Our Principle
Design for Humans
Our goal is to design an ergonomic, sensible, and productive framework that even beginners can use easily
Designed to avoid unnecessary complexity and type complexity for you to focus on building
A framework that feels just like JavaScript
typescript import { Elysia, file } from 'elysia'
new Elysia ()
. get ( '/' , 'Hello World' )
. get ( '/image' , file ( 'mika.webp' ))
. get ( '/stream' , function* () {
yield 'Hello'
yield 'World'
})
. ws ( '/realtime' , {
message ( ws , message ) {
ws. send ( 'got:' + message)
})
. listen ( 3000 )
Just return
A string, number, or complex JSON
All we need to do is return
File support built-in
To send a file or image, just return
Nothing more or less
Stream response
Use yield to stream a response
All we need to do is return
Data in real-time
With µWebSocket built-in
Send live data in just 3 lines
21x
faster than Express
6x
faster than Fastify
Elysia Bun
2,454,631 reqs/s
Gin Go
676,019
Spring Java
506,087
Fastify Node
415,600
Express Node
113,117
Nest Node
105,064
Measured in requests/second. Result from TechEmpower Benchmark Round 22 (2023-10-17) in PlainText
It's all about
Single Source of Truth
Schema is the only source of truth for your entire server. From request validation, type inference, OpenAPI documentation, client-server communication . Every part of Elysia is design for complete type integrity.
Request Validation
Elysia validates, and normalize requests against your schema, ensuring that only valid data reaches your handlers.
Elysia also infers types directly from your schema , ensuring that your handlers always receive the correct types in both runtime, and type-level.
typescript import { Elysia
, t
} from 'elysia'
new Elysia
()
. put
( '/' , ({ body
: { file
} }) => file
, {
body
: t
. Object
({
file
: t
. File
({ type
: 'image' })
})
Advance Type Inference
Every part of Elysia is designed to be completely type-safe far more advance type inference than any other frameworks.
Elysia also infers type from your schema, provide an auto-completion for models or extends Elysia with your own custom property all while ensuring complete type integrity.
index.ts auth.ts
typescript import { Elysia
} from 'elysia'
import { auth
} from './auth'
new Elysia
()
. use
( auth
. get
( '/profile' , ({ user
}) => user
, {
auth
: true
})
typescript import { Elysia
, t
} from 'elysia'
export const auth
= new Elysia
()
. macro
( 'auth' , {
cookie
: t
. Object
({
ssid
: t
. String
()
}),
resolve
({ cookie
, status
}) {
if ( ! cookie
. ssid
. value
) return status
( 401 )
return {
user
: cookie
. ssid
. value
})
Client-Server Communication
Elysia can share types between client and server similar to tRPC, ensuring that both sides are always in sync.
Taking a step further, Elysia also handle multiple HTTP status and arrange them using discriminated union, allowing you to handle all possible error cases with ease.
typescript import { treaty
} from '@elysiajs/eden'
import type { App
} from 'server'
const api
= treaty
< App
>( 'api.elysiajs.com' )
const { data
} = await api
. profile
. patch
({
age
: 21
})
OpenAPI Documentation
Elysia generates OpenAPI documentation from your schema in 1 line . Ensuring your API documentation are always accurate and up-to-date.
typescript import { Elysia
} from 'elysia'
import { openapi
} from '@elysiajs/openapi'
new Elysia
()
. use
( openapi
())
Introducing our most powerful feature yet
TypeScript to OpenAPI
Elysia can generate OpenAPI specifications directly from your TypeScript code without any annotations , without any configuration and CLI running.
Allowing you to turn your actual code from any library like Prisma, Drizzle and every TypeScript library into your own API documentation.
typescript import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysiajs/openapi'
export const app = new Elysia ()
. use (
openapi ({
// ↓ Where magic happens
references: fromTypes ()
})
Bring your own Validator
With support for Standard Schema
Elysia offers a robust built-in validation, but you can also bring your favorite validator, like Zod, Valibot, ArkType, Effect and more
With seamless support for type inference, and OpenAPI. You will feel right at home .
TypeBox Zod Valibot ArkType Effect
ts import { Elysia
, t
} from 'elysia'
new Elysia
()
// Try hover body ↓
. post
( '/user' , ({ body
}) => body
, {
body
: t
. Object
({
name
: t
. Literal
( 'SaltyAom' ),
age
: t
. Nu
