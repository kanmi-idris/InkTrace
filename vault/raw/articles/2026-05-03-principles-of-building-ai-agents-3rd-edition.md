Principles
of Building
Rapid advances in large language models (LLMs) have
enabled new kinds of AI applications, known as agents.
Written by a veteran of web development, this book walks
through:
AI Agents
• The key building blocks of agents: providers,
models, prompts, tools, memory, sandboxes
• How to break down complex tasks with
agentic workflows 3rd Edition
• Agent observability with tracing and evals
Understanding frontier tech is essential for building the
future. Sam has done it once with Gatsby, and now again
with Mastra — Paul Klein, CEO of Browserbase
If you’re trying to build agents or assistants into your
product, you need to read “Principles” ASAP — Peter
Kazanjy, Author of Founding Sales and CEO of Atrium
Sam Bhagwat is the founder of Mastra,
an open-source JavaScript agent
framework, and previously the
co-founder of Gatsby, the popular
React framework.
Sam Bhagwat
Cofounder & CEO Mastra.ai
Principles
of
Building
AI
Agents
Sam
Bhagwat
Mastra agent series: Book 1
Followed by: Patterns for Building AI Agents
Request more
free copies

PRINCIPLES OF BUILDING
AI AGENTS
SAM BHAGWAT

CONTENTS
Foreword ix
Sam Bhagwat
Introduction xiii
PART I
PROMPTING A LARGE
LANGUAGE MODEL(LLM)
1.A BRIEF HISTORY OF LLMS 3
2.CHOOSING A PROVIDER AND MODEL 5
Hosted vs open-source 5
Model size: Accuracy vs cost/latency 6
Context window size 6
Reasoning models 7
Providers and models (March 2026) 7
3.WRITING GREAT PROMPTS 8
Use the system prompt 8
Give the LLM more examples 9
A “seed crystal” approach 9
Weird formatting tricks 9
Example: A great prompt 10
PART II
BUILDING AN AGENT
4.AGENTS 101 15
Levels of Autonomy 15
Creating a basic agent 16
5.MODEL ROUTING AND STRUCTURED
OUTPUT 18
Structured output 19

6.TOOL CALLING 20
Designing your tools: The most important
step 22
Real-world example: Alana’s book
recommendation agent 22
Better approach: 22
Result: 23
Takeaway: 23
7.AGENT MEMORY 24
Observational memory 25
Memory processors 26
Prompt caching 28
8.DYNAMIC AGENTS 29
What are Dynamic Agents? 29
Example: Creating a Dynamic Agent 30
9.AGENT MIDDLEWARE 31
Guardrails 31
Agent authentication and authorization 33
PART III
TOOLS&MCP
10.MODEL CONTEXT PROTOCOL (MCP):
CONNECTING AGENTS AND TOOLS 37
What is MCP? 37
MCP Primitives 38
The MCP Ecosystem 38
When to use MCP 39
Building an MCP Server and Client 39
11.POPULAR THIRD-PARTY TOOLS FOR
AGENTS 42
Web scraping & computer use 42
Third-party integrations 43

PART IV
GRAPH-BASED WORKFLOWS
12.WORKFLOWS 101 47
13.BRANCHING, CHAINING, MERGING,
CONDITIONS 48
Branching 48
Chaining 49
Merging 50
Conditions 50
Best practices 51
14.SUSPEND AND RESUME 52
15.STREAMING UPDATES 56
Streaming step completion 57
Streaming within steps 57
Streaming tool calls 58
Speed matters 58
PART V
RETRIEVAL-AUGMENTED
GENERATION (RAG)
16.RAG 101 61
17.CHOOSING A VECTOR DATABASE 63
18.SETTING UP YOUR RAG PIPELINE 65
Chunking 65
Embedding 66
Upsert 66
Indexing 66
Querying 66
Reranking 67
Code Example 67
19.ALTERNATIVES TO RAG 70
Give your agent search tools 70
Let your agent run code 71
Feed the model full context 71
Extract entities and relationships 71
Conclusion 71

PART VI
MULTI-AGENT SYSTEMS
20.MULTI-AGENT 101 75
21.AGENT SUPERVISOR & SUBAGENTS 77
22.CONTROL FLOW 78
23.WORKFLOWS AS TOOLS 79
24.PARALLELIZED TOOL CALLS 80
25.COMBINING THE PATTERNS 81
A note on A2A 81
PART VII
OBSERVABILITY & EVALS
26.TRACING 85
Why accuracy and token cost matter 85
Observability 86
Visualizing traces 86
Setting this up on a project 87
27.EVALS 89
Seeing evals over time 90
Building your eval dataset 91
LLM-as-judge for textual evals 92
Classification or labeling evals 93
Tool calling evals 93
Multi-turn evals 93
Task completion 93
Prompt engineering evals 94
A/B testing 94
Human data review 94
Observability & evals are even more
important than you think 95
PART VIII
DEVELOPMENT & DEPLOYMENT
28.LOCAL DEVELOPMENT 99
Building an agentic web frontend 99
Building an agent backend 100

29.DEPLOYMENT 102
The core agent loop 102
Agentic workflows 102
Using a managed platform 103
PART IX
CODING AGENTS
30.AGENTS BUILDING AGENTS 107
On web-based platforms 107
31.SANDBOXES & FILESYSTEMS 109
Ephemeral vs. stateful sandboxes 109
Filesystems 110
Managing latency 110
PART X
EVERYTHING ELSE
32.MULTIMODAL 113
Image Generation 114
Use Cases 115
Voice 115
Video 117
33.WHAT’S NEXT 118

FOREWORD
SAM BHAGWAT
3rd edition
Three editions of one book in one year? One thing we’ve
learned at Mastra: time moves faster in the AI world.
This new edition includes new material on coding
agents. There are also text, image, and code sample updates
throughout the text to reflect what the AI agent space looks
like in March 2026.
In November we also released a companion book,
Patterns for Building AI Agents. In the last six months we’ve
seen a lot of folks putting their agents into production with
Mastra, and so Patterns is a collection of strategies and
lessons learned from advanced practitioners, with deep-
dives on context engineering, evals, and security.
I also realized in the rush to get the first couple editions
out the door we forgot the thank yous and dedications. This
book would not have been possible without my cofounders,
Shane and Abhi, and my partner, Jenn.
It’s dedicated to my children, Oliver (8), and Hazel (6),

x SAM BHAGWAT
who are growing up in a world where their conversations
are not just with people, but with models and agents.
Sam Bhagwat
San Francisco, CA
March 2026
2nd edition
Two months is a short time to write a new edition of a book,
but life moves fast in AI.
This edition has new content on MCP, image gen, voice,
A2A, web browsing and computer use, workflow streaming,
code generation, agentic RAG, and deployment.
AI engineering continues to get hotter and hotter.
Mastra’s weekly downloads have doubled each of the last
two months. At a typical SF AI evening meetup, I give away
a hundred copies of this book.
Then two days ago, a popular developer newsletter
tweeted about this book and 3,500 people (!) downloaded a
digital copy (available for free at mastra.ai/book if you are
reading a paper copy).
So yes, 2025 is truly the year of agents. Thanks for read-
ing, and happy building!
Sam Bhagwat
San Francisco, CA
May 2025

Foreword xi
1st edition
For the last three months, I’ve been holed up in an apart-
ment in San Francisco’s Dogpatch district with my
cofounders, Shane Thomas and Abhi Aiyer.
We’re building an open-source JavaScript framework
called Mastra to help people build their own AI agents and
assistants.
We’ve come to the right spot.
We’re in the Winter 2025 batch of YCombinator, the
most popular startup incubator in the world (colloquially,
YC W25).
Over half of the batch is building some sort of “vertical
agent” — AI application generating CAD diagrams for aero-
space engineers, Excel financials for private equity, a
customer support agent for iOS apps.
These three months have come at some personal
sacrifice.
Shane has traveled from South Dakota with his girl-
friend Elizabeth, their three-year-old daughter and
newborn son. I usually have 50-50 custody of my seven-year-
old son and five-year-old daughter, but for these three
months I’m down to every-other-weekend. Abhi’s up from
LA, where he bleeds Lakers purple and gold.
Our backstory is that Shane, Abhi and I met while
building a popular open-source JavaScript website frame-
work called Gatsby. I was the co-founder, and Shane and
Abhi were key engineers.
While OpenAI and Anthropic’s models are widely avail-
able, the secrets of building effective AI applications are
hidden in niche Twitter/X accounts, in-person SF meetups,
and founder groupchats.
But AI engineering is just a new domain, like data engi-

xii SAM BHAGWAT
neering a few years ago, or DevOps before that. It’s not
impossibly complex. An engineer with a framework like
Mastra should be able to get up to speed in a day or two.
With the right tools, it’s easy to build an agent as it is to
build a website.
This book is intentionally a short read, even with the
code examples and diagrams we’ve included. It should fit in
your back pocket, or slide into your purse. You should be
able to use the code examples and get something simple
working in a day or two.
Sam Bhagwat
San Francisco, CA
March 2025

INTRODUCTION
We’ve structured this book into a few different sections.
Prompting a Large Language Model (LLM) provides
some background on what LLMs are, how to choose one,
and how to talk to them.
Building an Agent introduces a key building block of AI
development. Agents are a layer on top of LLMs: they can
execute code, store and access memory, and communicate
with other agents. Chatbots are typically powered by agents.
Graph-based Workflows have emerged as a useful tech-
nique for building with LLMs when agents don’t deliver
predictable enough output.
Retrieval-Augmented Generation (RAG), covers a
common pattern of LLM-driven search. RAG helps you
search through large corpuses of (typically proprietary)
information in order to send the relevant bits to any partic-
ular LLM call.
Multi-Agent Systems cover the coordination aspects of
bringing agents into production. The problems often
involve a significant amount of organizational design!

| xiv |     | Introduction |     |
| --- | --- | ------------ | --- |
Testing with Evals is important in checking whether
your application is delivering users sufficient quality.
| Local  Development  |     | and  Deployment  | are  the  two |
| ------------------- | --- | ---------------- | ------------- |
places where your code needs to work. You need to be able
to iterate quickly on your machine, then get code live on the
Internet.
| Agents  Building  |     | Agents  is  about  | the  ways  building |
| ----------------- | --- | ------------------ | ------------------- |
agents changes in an era where we’re increasingly writing
code via tools like Claude Code rather than by hand.
Note that we don’t talk about traditional machine learning
(ML) topics like reinforcement learning, training models,
and fine-tuning.
| Today  most  | AI  applications  | only  | need  to  use  LLMs, |
| ------------ | ----------------- | ----- | -------------------- |
rather than build them.

PART I
PROMPTING A LARGE
LANGUAGE MODEL (LLM)

1
A BRIEF HISTORY OF LLMS
F
or over 40 years, AI was a perennial on-the-horizon
technology.
There have been some notable advances along
the way, like chess engines, speech recognition, self-driving
cars.
But the true turning point for progress on “generative
AI” was 2017, when eight researchers from Google wrote a
paper called “Attention is All You Need”.
It described an architecture for generating text where a
“large language model” (known as an “LLM” or “model”)
could be given a set of “tokens” (words and punctuation)
and focused on predicting the next “token”.
Then a great leap forward happened in November 2022.
A chat interface called ChatGPT, produced by a well-funded
startup called OpenAI, went viral literally overnight by
making generative AI accessible to everyday users.
Today, LLMs are proliferating at an unbelievable rate.
Major providers, which provide both consumer chat inter-
faces and developer APIs, include:

4 SAM BHAGWAT
OpenAI. Founded in 2015 by eight people
including AI researcher Ilya Sutskever, software
engineer Greg Brockman, Sam Altman (the head
of YC), and Elon Musk.
Anthropic (Claude). Founded in 2020 by Dario
Amodei and a group of former OpenAI
researchers. Produces models popular for code
writing, as well as API-driven tasks.
Google (Gemini). The core LLM is being
produced by the DeepMind team acquired by
Google in 2014.
Meta (Llama). The Facebook parent company
produces the Llama class of open-source models.
Once considered the leading US open-source AI
group.
Others include Mistral (an open-source French
company), DeepSeek (an open-source Chinese
company) and Qwen (open-source, from Alibaba
Cloud in China).

2
CHOOSING A PROVIDER AND
MODEL
O
ne of the first choices you’ll need to make
building an AI application is which model to
build on.
Here are some considerations:
Hosted vs open-source
The first piece of advice we usually give people when
building AI applications is to start with a hosted provider.
For text modality use cases — including text, code,
structured output, tool calls (but not images, voice, or video),
the state-of-the-art hosted model providers in March 2026
are OpenAI, Anthropic, or Google Gemini. We recommend
you start there.
Perhaps you eventually move some of your workload to
SoTA open-source providers like Qwen, Kimi, Deepseek,
Minimax. But make it work, make it right, make it fast/cheap —
in that order. Don’t make yourself debug infra issues right
off the bat.

6 SAM BHAGWAT
To give yourself flexibility later, use a model routing
library (more on that later).
Model size: Accuracy vs cost/latency
Every provider has larger, medium, and small models
(Anthropic’s Claude 4.6 Opus vs Sonnet vs Haiku, OpenAI’s
GPT-5, GPT-5 mini, GPT-5 nano).
The larger a model is, the more mathematical opera-
tions (matrix multiplication) it has to perform to generate
your answer. That makes it higher quality, but also more
expensive and slower.
Again, make it work, make it right, make it fast/cheap — in
that order.
Start with the larger models, when you need to worry
about cost saving during scaling, then figure out how to
move workloads to cheaper models.
Context windowsize
One variable you may want to think about is the “context
window” of your model. How many tokens can it take?
As of March 2026, the longest context window is offered
by Google. Gemini 3.1 supports a one million token context
window (roughly 2,000 pages of text), with Anthropic
offering the same for Sonnet 4.6 (but only in the API, in
beta)
This allows some interesting applications; we know a
developer who built a support assistant for an iOS app and
simply dumped the entire 800,000-token codebase in its
context window.

Principles of Building AI Agents 7
Reasoning models
Another type of model is what’s called a “reasoning model.”
Starting in late 2024, models began to do a lot of logic inter-
nally before returning a response.
It might take seconds, or minutes, to give a response, and
it will return a response all at once (while streaming some
“thinking steps” along the way).
Today most state-of-the-art models like GPT 5.4 are
reasoning models — though most let you can turn down
effort to low when using them in an API to reduce
latency. For lower-complexity tasks, you could also use pre-
reasoning models like GPT-4o.
Providers and models (March 2026)

3
WRITING GREAT PROMPTS
O
ne of the foundational skills in AI engineering is
writing good prompts. LLMs will follow instruc-
tions, if you know how to specify them well.
Here’s a few tips and techniques that will help:
Use the system prompt
When accessing models via API, they usually have the
ability to set a system prompt, eg, give the model character-
istics that you want it to have. This will be in addition to the
specific “user prompt” that gets passed in.
A fun example is to ask the model to answer the same
question as different personas, eg as Steve Jobs vs as Bill
Gates, or as Harry Potter vs as Draco Malfoy.
Beyond tone, you can also use the system prompt to
improve accuracy.
Giving the model a clear role ("You are an expert tax
attorney"), specific constraints ("Always cite your
sources"), or explicit instructions about what to avoid
("Do not make up information you are not certain

Principles of Building AI Agents 9
about") can meaningfully reduce errors and halluci-
nations.
Give the LLM more examples
There are three basic techniques to prompting.
Zero-shot: The “YOLO” approach. Ask the
question and hope for the best.
Single-shot: Ask a question, then provide one
example (w/ input + output) to guide the model
Few-shot: Give multiple examples for more
precise control over the output.
More examples = more guidance, but this also takes
more time.
One consideration is prompt caching, a feature intro-
duced across most providers in 2025. Putting examples in a
cached system prompt rather than the user turn is now stan-
dard practice for both cost and latency reasons.
A “seed crystal” approach
If you’re not sure where to start, you can ask the model to
generate a prompt for you. E.g. “Generate a prompt for
requesting a picture of a dog playing with a whale.”
We actually built a prompt CMS into Mastra’s local
development environment for this reason.
Weird formatting tricks
AI models can be sensitive to formatting—use it to your
advantage. While ALL CAPS for emphasis is a relic of

10 SAM BHAGWAT
models like GPT-3.5, XML-like structure or markdown can
help models follow instructions more precisely.
Different models respond differently. Claude tends to
follow formatting when given structural scaffolding like
XML-style tags. GPT responds better to markdown-style
syntax and delimiter cues.
Example: A great prompt
If you think your prompts are detailed, go through and read
some production prompts. Here’s about one-third of a live
production code-generation prompt (used in a tool called
bolt.new).

Principles of Building AI Agents 11

PART II
BUILDING AN AGENT

4
AGENTS 101
Y
ou can use direct model calls for one-shot
transformations: “Given a video transcript, write a
draft description.”
But for ongoing, complex interactions with models, you
typically need to build an agent on top.
Think of agents as AI employees rather than contractors:
they maintain context, have specific roles, and can use tools
to accomplish tasks.
Levels of Autonomy
In September 2025 Simon Willison distilled a fundamental
definition of agents that we think is pretty solid: An agent
calls tools in a loop to achieve a goal.
Agency is a spectrum. Like self-driving cars, there are
different levels of agent autonomy.
At a low level, agents make binary choices in a
decision tree

| 16  |     | SAM BHAGWAT |     |     |     |
| --- | --- | ----------- | --- | --- | --- |
At a medium level, agents have memory, call
tools, and retry failed tasks
At a high level, agents do planning, divide tasks
into subtasks, manage their task queue, manage
multiple parallel sub-agents, and self-correct
across long task horizons.
Creating a basic agent
In Mastra, agents have persistent memory, consistent model
| configurations,  |     | and  can  | access  a  suite  | of  tools  | and |
| ---------------- | --- | --------- | ----------------- | ---------- | --- |
workflows.
| The     | agent        | class  is     | the  foundation  | for  creating   | AI  |
| ------- | ------------ | ------------- | ---------------- | --------------- | --- |
| agents  | in  Mastra.  | It  provides  | methods          | for  generating |     |
responses, streaming interactions, and handling voice capa-
bilities.
Here’s how to create a basic agent:
| Running  | this  | code  creates  | a  configured  | AI  | agent |
| -------- | ----- | -------------- | -------------- | --- | ----- |
that can:
Accept user inputs/conversations
Respond according to the "helpful assistant"
instructions
Use GPT-5.1 as the underlying language model
Be integrated into larger applications or
workflows

Principles of Building AI Agents 17
It’s worth noting that unlike a single model call, agents
| accumulate  | tokens  quickly.  | Tool  results,  | memory,  and |
| ----------- | ----------------- | --------------- | ------------ |
conversation history all add up.
| This  | make  context  management  | and  | cost  key  things |
| ----- | -------------------------- | ---- | ----------------- |
you’ll need to figure out — not necessarily when you’re
initially building, but certainly as you begin rolling out your
agent to users.

5
MODEL ROUTING AND
STRUCTURED OUTPUT
I
t’s useful to be able to quickly test and experiment
with different models. Various libraries provide an
abstraction known as model routing.
Let’s pull up that example again from last chapter, which
uses Mastra’s built-in model routing.
The nice thing about structuring the code this way,
whether you’re using Mastra or something else, is that it’s a
one-line fix to swap in a different model and provider —
instead of needing to rip out a provider SDK.

Principles of Building AI Agents 19
Structured output
When you use models as part of an application, you often
want them to return data in JSON format instead of
unstructured text. Most models support “structured output”
to enable this.
Here’s an example of requesting a structured response
by providing a schema:
Models are very powerful for processing unstructured or
semi-structured text. Consider passing in the text of a
resume and extracting a list of jobs, employers, and date
ranges, or passing in a medical record and extracting a list of
symptoms.
Structured output and model routing actually compose
nicely together. You can usually route to a cheaper/faster
model specifically for structured extraction tasks, since they
tend to require less reasoning than open-ended generation.

6
TOOL CALLING
T
ools are functions that agents can call to
perform specific tasks — whether that's fetching
weather data, querying a database, or processing
calculations.
The key to effective tool use is clear communication with
the model about what each tool does and when to use it.
Here's an example of creating and using a tool:

Principles of Building AI Agents 21
Best practices:
Provide detailed descriptions in the tool
definition and system prompt
Use specific input/output schemas
Use semantic naming that matches the tool's
function (eg multiplyNumbers instead of
doStuff)

22 SAM BHAGWAT
Remember: The more clearly you communicate a tool's
purpose and usage to the model, the more likely it is to use
it correctly. You should describe both what it does and
when to call it.
Designingyour tools: Themost important step
When you’re creating an AI application, the most impor-
tant thing you should do is think carefully about your
tool design:
(cid:127)What the tools will you need?
(cid:127)What will each of them do?
It is genuinely important that you write this list out
clearly before you start coding, even if it’s just jotted down on a
napkin left over from lunch at your desk.
Real-world example: Alana’s book recommendation
agent
Alana Goyal, a Mastra investor, wanted to build an agent
that could analyze, and give intelligent recommenda-
tions about, her library of investor books.
First attempt:
She tried dropping all the books into the agent’s knowl-
edge window. This didn’t work well — the
agent couldn’t reason about the data in a structured way.
Better approach:
She broke the problem down into a set of specific tools, each
handling a different aspect of the data:
A tool for accessing the corpus of investors

Principles of Building AI Agents 23
A tool for book recommendations
A tool for books tagged by genre
Then, she added more tools for common operations:
Get all books by genre
Get book recommendations by investor
Sort people writing recommendations by
type (founders, investors, etc.)
If a human analyst were doing this project, they’d follow
a specific set of operations or queries.
The trick is to take those operations and write them
as tools or queries that your agent can use.
Result:
With these tools in place, the agent could now intelligently
analyze the corpus of books, answer nuanced questions, and
provide useful recommendations — just like a skilled
human analyst.
Takeaway:
Think like an analyst. Break your problem into clear,
reusable operations. Write each as a tool.
If you do this, your agent will be much more capable,
reliable, and useful.

7
AGENT MEMORY
M
emory is crucial for creating agents that
maintain meaningful, contextual conversa-
tions over time. While LLMs can process effec-
tively individual messages, they need help managing longer-
term context and historical interactions.
There are three established types of agent memory:
“working memory” (relevant long-term
characteristics of users, eg how ChatGPT store
what it knows about you)
“semantic recall” (embedding text as vectors and
using semantic search, or RAG, to find similar
results to the query string).
“observational memory” — a more agentic
approach that compresses sessions into
structured observations."

Principles of Building AI Agents 25
Observational memory
If you step outside on a busy street, your brain processes
millions of pixels, but distills down to one or two observa-
tions. That blue SUV just ran a red light. Your neighbor's pit
bull is off their leash.
In the context of a coding agent, observational memory
might compress a user session down to something like this:
Date: 2026-01-15
| -          |  12:10 User is building a Next.js |     |             |             |
| ---------- | --------------------------------- | --- | ----------- | ----------- |
| app  with  | Supabase                          |     | auth,  due  | in  1  week |
(meaning January 22nd 2026)
| -   |   12:10  | App  | uses  server  | components |
| --- | -------- | ---- | ------------- | ---------- |
with client-side hydration
| -   |  12:12 User asked about middleware |     |     |     |
| --- | ---------------------------------- | --- | --- | --- |
configuration for protected routes
| -   |  12:15 User stated the app name is |     |     |     |
| --- | ---------------------------------- | --- | --- | --- |
"Acme Dashboard"
| The  core  | message  | format  | uses  formatted  | text,  not |
| ---------- | -------- | ------- | ---------------- | ---------- |
structured objects. (text is the universal interface and it's
optimized for LLMs), a three-date model (observation date,
referenced date, and relative date) and emoji based log
levels.
In observational memory, the context window is broken
into two blocks. The first block is the list of observations
(like above). The second block is raw messages that haven't
yet been compressed. Typically 30k tokens are reserved for
the first block and 40k for the second block.
When new messages come in, they are appended to the

| 26  |     | SAM BHAGWAT |     |     |
| --- | --- | ----------- | --- | --- |
end of the second block. When raw messages overflow, a
| separate  "observer  | agent"  | compresses    | messages  | into  new   |
| -------------------- | ------- | ------------- | --------- | ----------- |
| observations;        | when    | observations  | overflow  | a  separate |
"reflector agent" garbage collects.
Memory processors
Sometimes increasing your context window is not the right
solution. It may seem counterintuitive, but sometimes you
want to deliberately prune your context window (or just
have more control over it).
| Memory  | processors  | allow  you  | to  modify  | the  list  of |
| ------- | ----------- | ----------- | ----------- | ------------- |
messages retrieved from memory before they are added to
the agent’s context window and sent to the LLM. This is
useful for managing context size, filtering content, and opti-
mizing performance (not mention saving tokens).
Mastra provides some built-in memory processors:

Principles of Building AI Agents 27
|     | •   |  •  • |     |
| --- | --- | ----- | --- |
`TokenLimiter`
| This  processor  | is  used  | to  prevent  errors  | caused  by |
| ---------------- | --------- | -------------------- | ---------- |
exceeding the LLM’s context window limit. It counts the
tokens in the retrieved memory messages and removes the
oldest messages until the total count is below the speci-
fied limit.
`ToolCallFilter`
| This  processor  | removes  | tool  calls  from  | the  memory |
| ---------------- | -------- | ------------------ | ----------- |
messages sent to the LLM. It saves tokens by excluding
potentially  verbose  tool  interactions  from  the  context,
which is useful if the details aren’t needed for future inter-
actions. It’s also useful if you always want your agent to call

| 28  | SAM BHAGWAT |     |     |
| --- | ----------- | --- | --- |
a specific tool again and not rely on previous tool results in
memory.
| You  can  also  | create  more  | custom  | memory  logic  by |
| --------------- | ------------- | ------- | ----------------- |
extending the base MemoryProcessorclass.
Prompt caching
Most major APIs now let you cache a static prefix, like a
long system prompt, a knowledge base, or a set of examples.
| This  reduces  | token  cost  | significantly  | while  keeping |
| -------------- | ------------ | -------------- | -------------- |
frequently  used  context  available,  and  plays  nicely  with
observational memory.

8
DYNAMIC AGENTS
T
he simplest way to configure an agent is to pass a
string for its system prompt, a string for the LLM
provider and model name, and an object/dictio-
nary for a list of tools that they are provided.
But what if you want to change these things at runtime?
What are Dynamic Agents?
A dynamic agent is an agent whose properties—like instruc-
tions, model, and available tools—can be determined at
runtime, not just when the agent is created.
This means your agent can change how it acts based on
user input, environment, or any other runtime context you
provide.
Choosing between dynamic and static agents is ulti-
mately a tradeoff between predictability and power.

30 SAM BHAGWAT
Example: Creating a Dynamic Agent
Here’s an example of a dynamic support agent that adjusts
its behavior based on the user’s subscription tier and
language preferences:

9
AGENT MIDDLEWARE
O
nce we see that it’s useful to specify the system
prompt, model, and tool options at runtime, we
start to think about the other things we might
want to do at runtime as well.
Guardrails
Guardrails are a general term for sanitizing the input coming
into your agent and/or the output it’s returning before the
user can see it. Input sanitization tries broadly to guard
against prompt injection attacks.
These include model “jailbreaking” (“IGNORE
PREVIOUS INSTRUCTIONS AND…”), requests for PII, and
off-topic chats that could run up your bills.

32 SAM BHAGWAT
Models have gotten better at resisting direct jailbreaks,
but prompt injection has gotten more sophisticated as
agents have gained more autonomy.
An agent that browses the web or reads uploaded docu-
ments can encounter malicious instructions embedded in
that content.
For example, a February 2026 prompt injection attack
against the open-source coding IDE Cline began with an
attacker opening a Github issue in a Cline repo using a title
containing malicious instructions.
Chris Bakke prompt injection attack, December 2023

Principles of Building AI Agents 33
Agent authentication and authorization
One thing to think about when building agents is that
because they are more powerful than pre-LLM data access
patterns, you may need to spend more time ensuring they
are permissioned accurately.
Security through obscurity becomes less of a viable
option when users can ask an agent to retrieve knowledge
hidden in nooks and crannies!
There are two layers of permissions to consider for
agents:
The resources the agent itself can have access to
Which users are allowed to access the agent
As with guardrails, middleware is the typical place to
put any agent authorization because it’s in the perimeter
around the agent rather than within the agent’s inner loop.
For high-stakes or irreversible actions, consider adding
human-in-the-loop checkpoints — pausing execution to get
explicit user confirmation before the agent proceeds

PART III
TOOLS & MCP

10
MODEL CONTEXT PROTOCOL (MCP):
CONNECTING AGENTS AND TOOLS
L
LMs, like humans, become much more powerful
when given tools. MCP works like a USB-C port
for AI applications, providing a standard way for
models and tools to interact.
What isMCP?
In November 2024, a small team at Anthropic proposed
MCP as a solution to a real and growing problem: every AI
provider and tool author had their own way of defining and
calling tools.
It’s an open protocol for connecting AI agents to tools,
models, and each other. Think of it as a universal adapter: if
your tool or agent “speaks” MCP, it can plug into any
other MCP-compatible system— no matter who built it or
what language it’s written in.
But, as any experienced engineer knows, the power of
any protocol is in the network of people following it.
While initially well-received, it took until March for

38 SAM BHAGWAT
MCP to hit critical mass after gaining popularity among
prominent, vocal supporters like Shopify’s CEO Tobi Lutke.
Then, in April 2025, OpenAI and Google Gemini
announced they would support MCP, making it the func-
tional default for connecting AI agents. At this point (March
2026) MCP is the established standard for connecting AI
agents to third-party tools.
MCP Primitives
MCP has two basic primitives: servers and clients.
Servers wrap sets of MCP tools. They (and their under-
lying tools) can be written in any language and communi-
cate with clients over stdio (locally) and Streamable HTTP
(for remote servers).
Clients such as models or agents can query servers to get
the set of tools provided, then request that the server
execute a tool and return a response.
As such, MCP is as a standard for remote code execu-
tion, like OpenAPI or RPC.
The MCP Ecosystem
As MCP was gaining traction, a bunch of folks joined the
fray.
Vendors like Stripe began shipping MCP servers
for their API functionality.
Independent developers started making MCP
servers for functionality they needed, like
browser use or error tracking, and publishing
them on Github

Principles of Building AI Agents 39
Frameworks like Mastra started shipping MCP
server and client abstractions so that individual
developers didn’t have to reimplement specs
themselves.
When to useMCP
Agents, like SaaS, often need a number of basic integrations
with third-party services (calendar, chat, email, web). If your
project roadmap has a lot of this type of features, it’s worth
looking at building an MCP client that could access third-
party tools and services.
Conversely, if you’re building a tool that you want other
agents to use, you should consider shipping an MCP server.
When consuming third-party MCP servers, treat them
with the same trust level as any third-party API — vet them
carefully, especially for agents with access to sensitive data
or the ability to take real-world actions.
Building an MCP Server and Client
If you want to create MCP servers and give an agent access
to them, here’s how you can do that in Typescript with
Mastra:

40 SAM BHAGWAT
Conversely, if you want to create a client with access to
other MCP servers, here’s how you would do that:

Principles of Building AI Agents 41

11
POPULAR THIRD-PARTY TOOLS FOR
AGENTS
A
gents are only as powerful as the tools you give
them. As a result, an ecosystem has sprung up
around popular types of tools.
Web scraping & computer use
One of the core tool use cases for agents is browser search.
This includes web scraping, automating browser tasks,
and extracting information. You can use built-in tools,
connect to MCP servers, or integrate with higher-level
automation platforms.
There are a few different tools you could take to add
search to your agents:
Cloud-based web search APIs. There are a few
web search APIs that have become popular for
LLMs to use, including Exa, Browserbase, and
Tavily.
Agentic web search. Tools like Stagehand (in
JavaScript) and Browser Use (in Python, with

Principles of Building AI Agents 43
MCP servers for JS users) have plain English
language APIs that you can use to describe web
scraping tasks.
Low-level open-source search tools. Microsoft’s
Playwright project remains widely used as the
underlying engine that many agentic browser
tools are built on.
When you provide browser tools to agents, you often
encounter similar challenges to traditional browser
automation.
Anti-bot detection. From browser fingerprinting
to WAFs to captchas, many websites protect
against automated traffic.
Fragile setups. Browser use setups sometimes
break if target websites change their layout or
modify some CSS.
These challenges are solvable — just budget a bit of
time for some munging and glue work!
Third-party integrations
Agents need to connect with the systems where user data
lives — and they need the ability to both read and write
from those systems.
Most agents (like most SaaS apps) need access to a core
set of general integrations like email, calendar, or
documents.
Your personal assistant agent will need access to Gmail,
Google Calendar, or Microsoft Outlook.
Your sales agent will need to integrate with Salesforce or

44 SAM BHAGWAT
Hubspot. Your HR agent will need to integrate with Rippling
or Workday.
It’s possible the services you need already ship in an
MCP server before you reach for an iPaaS. The ecosystem
has grown significantly and many popular tools now offer
native MCP support.
Most people building agents want to avoid spending
months building bog-standard integrations and choose an
“agentic iPaas” (integration-platform-as-a-service). We’ve
seen folks be happy with Arcade and Composio, which are
general services, but there are specialized services in various
domains as well.

PART IV
GRAPH-BASED
WORKFLOWS

12
WORKFLOWS 101
W
e've seen how individual agents can work:
Agents have the flexibility to call any tool
(function) at every step.
Sometimes, this is too much flexibility.
Graph-based workflows have emerged as a more deter-
ministic technique for building with models.
Workflow graphs outline the sequence of actions,
branching logic, and conditions that an agent might follow
to achieve a specific goal — the flow of execution and deci-
sion-making.
In practice, workflows and agents aren't mutually exclu-
sive. You'll often use both, with agents handling open-ended
reasoning steps and workflows providing the deterministic
scaffolding around them.
Why use a specific workflow abstraction rather than
simply write this in code? Workflow primitives are helpful
for defining branching logic, parallel execution, creating
checkpoints, and adding tracing. Along with a graph for
visualization.
Let’s dive in.

13
BRANCHING, CHAINING, MERGING,
CONDITIONS
S
o, what’s the best way to build workflow graphs?
Several frameworks support workflow graph
abstractions. We'll use Mastra here, but the primi-
tives are similar across tools.
Let’s walk through the basic operations, and then we can
get to best practices.
Branching
One use case for branching is to trigger multiple LLM calls
on the same input.
Let’s say you have a long medical record, and need to
check for the presence of 12 different symptoms (drowsiness,
nausea, etc).
You could have one LLM call checks for 12 symptoms.
Or, it might be more accurate to have 12 parallel LLM calls,
each checking for one symptom.
In Mastra, you create branches with the .step()
command. Here's a simple example:

Principles of Building AI Agents 49
Chaining
This is the simplest operation. Sometimes, you’ll want to
fetch data from a remote source before you feed it into an
LLM, or feed the results of one LLM call into another.
In Mastra, you chain with the .then() command. Each
step waits for the previous step, and has access to previous
step results:

50 SAM BHAGWAT
Merging
After branching paths diverge to handle different aspects of
a task, they often need to converge again to combine
their results:
Conditions
Sometimes your workflow needs to make decisions based
on intermediate results.
In workflow graphs, because multiple paths can execute
in parallel, in Mastra we define the conditional path execu-
tion on the child step rather than the parent step.
In this example, a processData step is executing,
conditional on the fetchData step succeeding.

Principles of Building AI Agents 51
Best practices
Compose steps so that the input/output at each
step is meaningful, since you’ll be able to see it in
your tracing. (More on this in the Tracing section
a bit further ahead).
Decompose steps so that the model only has to
do one thing at one time. This usually means no
more than one model call in any step.
Many different special cases of workflow graphs, like loops,
retries, etc., can be made by combining these primitives.

14
SUSPEND AND RESUME
S
ometimes workflows need to pause execution while
waiting for something outside the agent's control —
a human approval, a slow external API, or a long-
running async process.
Because the third party can take arbitrarily long to
respond, you don’t want to keep a running process.
Instead, you want to persist the state of the workflow,
and have some function that you can call to pick up where
you left off.
Let’s diagram out a simple example with Mastra’s
.suspend()and .resume()functions:

|             | Principles of Building AI Agents |             |                  | 53  |
| ----------- | -------------------------------- | ----------- | ---------------- | --- |
| To  handle  | suspended                        | workflows,  | you  can  watch  | for |
status changes and resume execution when ready:
Here’s an example of what creating a workflow with
suspend and resume looks like in Mastra.
We start with steps, which are the building blocks of
workflows. Create a step using createStep:

54 SAM BHAGWAT
Then create a workflow using createWorkflow:

| Principles of Building AI Agents |     |     | 55  |
| -------------------------------- | --- | --- | --- |
Once you’ve defined a workflow, run it like so:
And that’s it. We’ve just built an AI agent workflow in
Mastra that branches, pauses execution, and then resumes,
all in a couple dozen lines of code.
| In  production,  | make  sure  | your  workflow  | state  is |
| ---------------- | ----------- | --------------- | --------- |
persisted to a durable store — a suspended workflow that
lives only in memory won't survive a server restart.

15
STREAMING UPDATES
O
ne of the keys to making LLM applications feel
fast and responsive is showing users what’s
happening, in incremental stages if necessary,
while the model is working.
Back in 2024, I was trying to plan a trip to Hawaii for
myself and my partner. I tried two early reasoning models
side by side: OpenAI’s o1 pro (left tab) and Deep Research
(right tab).
The o1 pro just showed a spinning “reasoning” box for
three minutes-no feedback, just waiting. Deep Research, on
the other hand, immediately asked me for details (number
of people, budget, dietary needs), then streamed back
updates as it found restaurants and attractions.
The contrast was clear: the model that streamed better
felt way snappier and kept me in the loop the whole time.

Principles of Building AI Agents 57
Left: o1 pro (less good). Right: Deep Research (more good)
Streaming step completion
The most common thing to stream is the model’s output,
showing tokens as they’re generated. But you can also
stream updates from each step in a multi-step workflow or
agent pipeline, like when an agent is searching, planning,
and summarizing in sequence.
Streaming within steps
Even when you’re inside a function with a defined return
type (eg a workflow step), you should be writing to a stream
as new results come in. Here’s how would with Mastra:

58 SAM BHAGWAT
Streaming tool calls
One thing that's improved: in March 2026, most major APIs
now support streaming tool call results natively.
Speed matters
Like in web apps and mobile games, perceived response
time is crucial in user engagement. There are no commer-
cially successful agents that feel slow.
And on a personal note: after having to reschedule my
vacation a couple times, my partner and I finally did go in
June 2025.
While hiking in Volcanoes National Park, we turned a
corner and saw Mount Kīlauea shooting lava hundreds of
feet in the air.
Nature sometimes delivers a different kind of streaming
update….

PART V
RETRIEVAL-AUGMENTED
GENERATION (RAG)

16
RAG 101
R
AG lets agents ingest user data and synthesize it
with their global knowledge base to give users
high quality responses.
Here’s how it works.
Chunking: You start by taking a document (although we
can use other kinds of sources as well) and chunking it. We
want to split the document into bite-sized pieces for search.
Embedding: After chunking, you’ll want to embed your
data – transform it into a vector, or an array of 1536 values
between 0 and 1, representing the meaning of the text.
We do this with LLMs, because they make the embed-
dings much more accurate; OpenAI has an API for this,
there are other providers like Voyage or Cohere.
You need to use a vector DB which can store these
vectors and do the math to search on them. You can use
pgvector, which comes out of the box with Postgres.
Indexing: Once you pick a vector DB, you need to set up
an index to store your document chunks, represented as
vector embeddings.

62 SAM BHAGWAT
Querying: Okay, after all that setup, you can now query
the database!
Under the hood, you’ll be running an algorithm that
compares your query string to all the chunks in the data-
base and returning the most similar ones. The most popular
algorithm is called “cosine similarity”.
The implementation is similar to a geospatial query
searching latitude/longitude, except the search goes over
1536 dimensions instead of two.
You can use other algorithms as well.
Reranking: Optionally, after querying, you can use a
reranker. Reranking is a more computationally expensive
way of searching the dataset. You can run it over your results
to improve the ordering (but it would take too long to run it
over the entire database).
Synthesis: Finally, you pass your results as context into
an LLM, along with any other context you want to include,
and it can synthesize an answer to the user.

17
CHOOSING A VECTOR DATABASE
O
ne of the biggest questions people having
around RAG is how they should think of a
vector DB.
There are multiple form factors of vector databases:
1. A feature on top of open-source databases
(pgvector on top of Postgres)
2. Standalone open-source (Chroma)
3. Standalone hosted cloud service (Turbopuffer).
4. Hosted by an existing cloud provider (Cloudflare
Vectorize).
Our take is that unless your use-case is exceptionally
specialized, the vector DB feature set is mostly
commoditized.
Back in 2023, VC funding drove a huge explosion in
vector DB companies.
In 2026, many of these companies are doing layoffs (hint:
any vector DB company that’s done layoffs is also struggling
with adoption).

64 SAM BHAGWAT
Today, teams report wanting to prevent infra sprawl (yet
another service to maintain). Our recommendation:
If you’re already using Postgres for your app
backend, pgvector is a fine choice.
If you’re spinning up a new project, Chroma or
Turbopuffer are great defaults.
If your cloud provider has a managed vector DB
service, start with that.

18
SETTING UP YOUR RAG PIPELINE
R
AG combines the strengths of pre-trained LLMs
|     | with  the  ability  | to  | retrieve  and  | incorporate |
| --- | ------------------- | --- | -------------- | ----------- |
specific and relevant information from your own
curated datasets in order to generate more accurate and
| detailed  | (and  sometimes  | more  | up-to-date)  | responses. |
| --------- | ---------------- | ----- | ------------ | ---------- |
Setting up a RAG pipeline involves loading data, creating
| embeddings,  | indexing,  | retrieving  | relevant  | information |
| ------------ | ---------- | ----------- | --------- | ----------- |
based on a query, and then generating a response using the
LLM with the retrieved context.
Chunking
| Chunking  | is  the  process  | of  breaking  | down  | large  docu- |
| --------- | ----------------- | ------------- | ----- | ------------ |
ments into smaller, manageable pieces for processing.
The key thing you’ll need to choose here is a strategy
and an overlap window. Good chunking balances context
preservation with retrieval granularity.
Strategies for doing the actual chunking itself include
recursive, character-based, token-aware, and format-specific

66 SAM BHAGWAT
corpus splitting like Markdown, HTML, JSON, or LaTeX.
Mastra supports all of these.
Embedding
Embeddings are numerical representations of text that
capture semantic meaning. These vectors allow us to
perform similarity searches. Mastra supports multiple
embedding providers like OpenAI and Cohere, with the
ability to generate embeddings for both individual chunks
and arrays of text.
Upsert
Upsert operations allow you to insert or update vectors and
their associated metadata in your vector store. This opera-
tion is essential for maintaining your knowledge base,
combining both the embedding vectors and any additional
metadata that might be useful for retrieval.
Indexing
An index is a data structure that optimizes vector similarity
search. When creating an index, you specify parameters like
dimension size (matching your embedding model) and
similarity metric (cosine, euclidean, dot product). This is a
one-time setup step for each collection of vectors.
Querying
Querying involves converting user input into an embedding
and finding similar vectors in your vector store. The basic
query returns the most semantically similar chunks to your

Principles of Building AI Agents 67
input, typically with a similarity score. Under the hood, this
is a bunch of matrix multiplication to find the closest point
in *n-*dimensional space (think about a geo search with
lat/lng, except in 1536 dimensions instead).
The most common algorithm that does this is called
cosine similarity (although you can use others instead).
Hybrid Queries with Metadata. Hybrid queries
combine vector similarity search with traditional
metadata filtering. This allows you to narrow down
results based on both semantic similarity and struc-
tured metadata fields like dates, categories, or
custom attributes.
Reranking
Reranking is a post-processing step that improves result
relevance by applying more sophisticated scoring methods.
It considers factors like semantic relevance, vector similarity,
and position bias to reorder results for better accuracy.
It’s a more computationally intense process, so you typi-
cally don’t want to run it over your entire corpus for latency
reasons — you’ll typically just run it on a code example.
Code Example
Here’s some code using Mastra to set up a RAG pipeline.
Mastra includes a consistent interface for creating indexes,
upserting embeddings, and querying, while offering their
own unique features and optimizations, so while this
example uses PgVector, you could easily use another DB
instead. This illustrates a common pattern for building
context-aware AI responses with proper fallback handling.

68 SAM BHAGWAT

Principles of Building AI Agents 69
This code:
1. Uses OpenAI's GPT-4o-mini model to generate a
response
2. Constructs a prompt that includes a user query and
relevant context
3.Instructs the model to explicitly state if there's insuffi-
cient information
4. Logs the generated text response
Note: There are advanced ways of doing RAG: using
LLMs to generate metadata, using LLMs to refine
search queries; using graph databases to model
complex relationships. These may be useful for you,
but start by setting up a working pipeline and
tweaking the normal parameters — embedding
models, rerankers, chunking algorithms — first.

19
ALTERNATIVES TO RAG
G
reat, now you know how RAG works. But does it
matter? Or, put like a Twitter edgelord, is RAG
dead?
Not yet, we think. But there are some simpler
approaches you should reach for first.
Give your agent search tools
Instead of pre-parsing all your documents, start by giving
your agent a relevant set of search tools to search through its
corpus of data.
One of our investors built a variety of tools to query her
website, and then bundled them into a MCP server she
could give to an agent.
She then asked the agent about her favorite restaurants
(it recommended Flour + Water in San Francisco) and her
favorite portfolio companies (it said she likes all of her
companies equally).

Principles of Building AI Agents 71
Let your agent runcode
Opus 4.6 and GPT 5.4 are really good at writing code.
Consider solving your search problem by giving your model
a code writing tool and running it in a loop. (What would
Claude Code do?)
Feed the model full context
Gemini has 1m tokens now. Maybe you should just load all
the relevant content directly into the context.
The downsides: cost and “context rot” (recall can drop
far before hitting context window limits.)
Extract entities and relationships
Use a model to extract rich semantic information (section
references, entity names, etc), and then throw those into the
context window as well.
Conclusion
We’re engineers. We can over-engineer things.
Unless you’re sure this is a pure document processing
problem, build an agent first. Use RAG as a fallback.

PART VI
MULTI-AGENT SYSTEMS

20
|     | MULTI-AGENT |     | 101 |     |     |
| --- | ----------- | --- | --- | --- | --- |
T
| hink  | about  | a  multi-agent  | systems  | like  | a   |
| ----- | ------ | --------------- | -------- | ----- | --- |
specialized team, like marketing or engineering.
| Different  | agents  | work  | together  with  | their  | own |
| ---------- | ------- | ----- | --------------- | ------ | --- |
specialized role to accomplish more complex tasks.
| If  you’ve  used  | agentic  | coding  | tools  Claude  | Code  | or  |
| ----------------- | -------- | ------- | -------------- | ----- | --- |
Replit Agent, you’ve actually already been using a multi-
agent system.
One agent works with you to plan / architect your code.
After you’ve mapped it all out, you next work with a “code
manager” agent that passes instructions to a code writer,
executes the resulting code in a sandbox, and passes any
errors back to the code writer.
Each of these agents has different memories, different
system prompts, and access to different tools.
| We  often  joke  | that  | designing  | a  multi-agent  | system |     |
| ---------------- | ----- | ---------- | --------------- | ------ | --- |
involves a lot of skills used in designing an organization. You
group related tasks into a job description. You might give
creative tasks to one person and analytical tasks to another.
You want to think about network dynamics. Is it better
for three specialized agents to gossip among themselves? Or

76 SAM BHAGWAT
feed their output back to a manager agent who can make a
decision?
Multi-agent systems with subagents let you break down
complex tasks into manageable pieces. And designs are frac-
tal. A hierarchy is just a supervisor of supervisors.
But when you’re building, start with the simplest version
first.
Let’s break down some of the patterns.

21
AGENT SUPERVISOR & SUBAGENTS
A
gent supervisors are specialized agents that
coordinate and manage other “subagents”.
The most straightforward way to do this is to
pass in the other agents wrapped as tools.
For example, in a content creation system, a publisher
agent might supervise both a copywriter and an editor:

22
CONTROL FLOW
W
hen building complex AI applications,
you need a structured way to manage
how agents think and work through tasks.
Just as a project manager wouldn't start coding without a
plan, agents should establish an approach before diving into
execution.
Just like how it’s common practice for PMs to spec out
features, get stakeholder approval, and only then commis-
sion engineering work, you shouldn’t expect to work with
agents without first aligning on what the desired work is.
We recommend engaging with your agents on architec-
tural details first — and perhaps adding a few checkpoints
for human feedback in their workflows.

23
WORKFLOWS AS TOOLS
H
opefully, by now, you’re starting to see that all
multi-agent architecture comes down to which
primitives you’re using and how you’re arranging
them.
It’s particularly important to remember this framing
when trying to build more complex tasks into agents.
Let’s say you want your agent(s) to always run 3 separate
tasks sequentially. You may want to turn each of those tasks
into individual workflows, so you can stipulate a workflow’s
order of steps and provide more structure.
Each of these workflows can then be passed along as
tools to the agent(s).

24
PARALLELIZED TOOL CALLS
I
n most of the workflows we've covered, tool calls are
sequential by default.
Parallel tool calling lets the model batch those
calls into a single step. If the results don't depend on each
other, they can run simultaneously. You can imagine
opening several URLs in parallel to complete research
faster, or running several coding subagents in parallel to test
different approaches.
Over the last several months, all three major providers
have added support. OpenAI added it earliest; Anthropic
has extended the idea the furthest.
Today, Claude models enable parallel tool calls by
default. You can disable this if your workflow requires strict
sequential execution — for instance, when earlier tool
results need to gate what gets called next.

25
COMBINING THE PATTERNS
B
y this point, you’ll notice there are different
architectures. If your agentic coding tool has a plan
mode and a build mode, the agents embody
different steps in a workflow.
If your customer support agent is delegating to a billing
workflow, a product docs subagent, or escalating to a
human, you can see the value of subagents and
subworkflows.
The lesson: each agent primitive can be arranged to suit
your project’s desired control flow.
A note onA2A
Some people still associate multi-agent with A2A. In reality,
A2A is a niche protocol (Google Trends data shows 20
searches for MCP for every A2A search). Multi-agent has
moved beyond A2A.

PART VII
OBSERVABILITY & EVALS

26
TRACING
T
here are two uniquely hard parts of building AI
applications, that are typically the barrier for
teams shipping agents into production: accuracy
and token cost.
The answer for both: observability.
Let’s dive in.
Why accuracy and token cost matter
Accuracy. AI applications are built on top of non-determin-
istic models. Teams that have shipped agents into produc-
tion typically building systems to detect regressions and
look at production data every day. Agents can regress while
still returning 200 OK.
Token cost. Agents burn tokens. Opus 4.6 and GPT 5.4
can run in the background, in loops, generating multiple
potential responses. But this can be costly.
We know several startups that raised $5m seed rounds,
went viral, and ended up with a $500k token bill the next

86 SAM BHAGWAT
month. You can make something people want, but if your
tokens cost 10x your revenue, you still have a big problem.
Observability
Observability is a word that gets a lot of airplay, but since its
meaning has been largely diluted and generalized by self-
interested vendors let’s go to the root.
The initial term was popularized by Honeycomb’s
Charity Majors in the late 2010s to describe the quality of
being able to visualize application traces.
To debug a function, it would be really nice to be able to
see the input and output of every function it called. And the
input and output of every function those functions called.
(And so on, and so on, turtles all the way down.)
This kind of telemetry is called a trace, which is made up
of a tree of spans. (Think about a nested HTML document,
or a flame chart.)
The standard format for traces is known as Open-
Telemetry, or OTel for short.
When monitoring vendors began supporting tracing,
each had a different spec — there was no portability. Light-
step’s Ben Sigelman helped create the common Otel stan-
dard, and larger vendors like Datadog (under duress) began
to support Otel.
Visualizing traces
There’s a large number of observability vendors, both older
backend and AI-specific ones, but the UI patterns converge:

Principles of Building AI Agents 87
A sample tracing screen
What this sort of UI screen gives you is:
A trace view. This shows how long each step in
the pipeline took (e.g., parse_input,
process_request, api_call, etc.)
Input/output inspection. Seeing the exact
“Input” and “Output” in JSON is helpful for
debugging data flowing into and out of LLMs
Call metadata. Showing status, start/end times,
latency, etc.) provides key context around each
run, helping humans scanning for anomalies.
Setting this up on a project
Typically you’ll want a cloud observability provider so you
can point your production traces at it, though some teams
prefer to self-host within their environment.
It’s also nice to be able to look at this data locally when

88 SAM BHAGWAT
you’re developing. Here’s a screenshot of how this looks in
Mastra Studio:

27
EVALS
W
hile traditional software tests have clear
pass/fail conditions, AI outputs are non-deter-
ministic — that is, an LLM can take the same
input and produce different outputs. (You’ve seen how
ChatGPT and Claude offer the option to regenerate the
results of your query as soon as they finish spitting it out,
right?)
Evals help bridge this gap by providing quantifiable
metrics for measuring agent quality.
Think about evals sort of like including, say, perfor-
mance testing in your CI pipeline. There’s going to be some
randomness in each result, but on the whole and over time
there should be a correlation between application perfor-
mance and test results.
When writing evals, it’s important to think about what
exactly you want to test.
There are different kinds of evals just like there are
different kinds of tests.
Unit tests are easy to write and run but might not
capture the behavior that matters; end-to-end tests might

90 SAM BHAGWAT
capture the right behavior but they might also be more
flaky.
Similarly, if you’re building a RAG pipeline or a struc-
tured workflow, you may want to test each step along the
way — and then after that test the behavior of the system as
a whole.
Seeing evals overtime
It’s also nice to be able to see your evals (more on evals later)
in a cloud environment with your team.
For each of their evals, people want to see a side-by-side
comparison of how the agent responded versus what was
expected.
They want to see the overall score on each PR (to ensure
there aren’t regressions), and the score over time, and to
filter by tags, run date, and so on.
Eval UIs tends to look like this:
A sample evaluation screen

Principles of Building AI Agents 91
• • •
Offline vs. online evals
There are two modes teams run evals in.
Offline evals run against a fixed dataset before deploys.
These tend to catch regressions.
Online evals run against live production traffic. You
sample real requests, score them, and watch metrics over
time. These can be noisy (your inputs vary over time). But
real users break your agents in new and exciting ways.
Most teams start offline. Then teams add online evals
once their agent is in production.
Building your eval dataset
There are three ways to get a dataset of test cases.
Hand-curate. This is a good place to start because it
forces you to think clearly about what good looks like. You
may want to work with a subject-matter expert if you’re
working in an unfamiliar domain.
Generate them synthetically. This is fast, but you
should check the output; models tend to generate easy
cases.
Mine production logs. This only works when you’re in
production, but it’s the highest-signal source.
A mature eval dataset is a mix of all three. Like normal
code, as you find bugs, fix them and then add test cases to
prevent future regressions.

92 SAM BHAGWAT
Datasets in Mastra Studio
LLM-as-judge for textual evals
For textual evals, the most common pattern is using a
second model as the scorer.
You pass the output — and optionally the original input
and retrieved context — to a judge model with a rubric. It
returns a score and sometimes an explanation.
It works well. It scales. It handles cases where there's no
single right answer. It also does well judging metrics like
hallucination and faithfulness (whether responses accu-
rately represent provided context).
It’s not perfect: judges tend to prefer longer answers even
when they're not better. Consider picking a judge from a
different model family as your agent; a judge can favor
outputs that sound like itself.
Adding a LLM-as-judge for faithfulness in Mastra

Principles of Building AI Agents 93
Classification or labeling evals
Classification or labeling evals help determine how accu-
rately a model tags or categorizes data based on predefined
categories (e.g., sentiment, topics, spam vs. not spam).
This can include broad labeling tasks (like recognizing
document intent) or fine-grained tasks (like identifying
specific entities aka entity extraction).
Tool calling evals
Tool usage evals for agents measure how effectively a model
or agent calls external tools or APIs to solve problems.
For example, just like you would write
expect(Fn).toBeCalled in the JavaScript testing
framework Jest, you would want to see similar functions for
agent tool use.
Multi-turn evals
Most textual evals are built around single-turn interactions.
But agents are multi-turn by nature.
A multi-turn eval runs the agent through a full conversa-
tion or task sequence and grades the whole thing. Did it
maintain context across turns? Did it recover when a tool
failed? Did it stay on task after a tangent?
Task completion
For agents doing things in the world, the most important
eval is the simplest one: did it finish the job?
Did the support agent resolve the ticket? Did the coding

94 SAM BHAGWAT
agent pass the tests? Did the research agent return a usable
answer?
Prompt engineering evals
Prompt engineering evals explore how different instruc-
tions, formats, or phrasings of user queries impact an
agent’s (non-deterministic) results performance.
They look at both the sensitivity of the agent to prompt
variations (whether small changes produce large differences
in results) and the robustness to adversarial or ambiguous
inputs.
All things “prompt injection” fall in this category.
A/B testing
Leaders of larger consumer and developer tools AI compa-
nies like Perplexity and Replit joke that they rely more on
A/B testing of user metrics than evals per se. This works if
you have enough traffic that degradation in agent quality is
quickly visible!
Human data review
In addition to automated tests, high-performing AI teams
regularly review production data. Typically, the easiest way
to do this is to view traces which capture the input and
output of each step in the pipeline.
Many correctness aspects (e.g., subtle domain knowl-
edge, or an unusual user request) can’t be fully captured by
rigid assertions, but human eyes catch these nuances.

Principles of Building AI Agents 95
Observability & evals are even more important than you
think
This might be relatively long chapters, but observability is
one of the most important pieces when shipping agents into
production.
Teams can spend months staring closely at their observ-
ability tools as they move from prototype to production.
We’ve written a follow-up book covering much more on
these topics: Patterns For Building AI Agents. We
encourage you to read it, especially as you’re pushing your
agent into production.

PART VIII
DEVELOPMENT &
DEPLOYMENT

28
LOCAL DEVELOPMENT
A
gent development typically falls into two different
categories: building the frontend vs. backend.
Building an agentic web frontend
Web-based agent frontends tend to share a few characteris-
tics: they’re built around a chat interface, stream to a back-
end, autoscroll, and display tool calls.
We discussed the importance of streaming in an earlier
chapter. Agentic interfaces tend to use a variety of different
transport options like request/response, server-sent events,
webhooks and web sockets, all to feed the sense of real-time
interactivity.
There are a few frameworks we see speeding up devel-
opment here, especially during the prototype phase:
Assistant UI, Copilot Kit, and Vercel’s AI SDK UI.
(And many agents are based on other platforms like
WhatsApp, Slack, mobile apps, email, or voice and don’t
have a web frontend.)
It’s important to note that while agentic frontends can be

100 SAM BHAGWAT
powerful, the full agent logic generally can’t live client-side
in the browser for security reasons — it would leak your
API keys to LLM providers.
Building an agent backend
So it’s the backend where we typically see most of the
complexity.
When developing AI applications, it’s important to see
what your agents are doing, make sure your tools work, and
be able to quickly iterate on your prompts.
Some things that we’ve seen be helpful for local agent
development:
Agent chat interface: Test conversations with
your agents in the browser, seeing how they
respond to different inputs and use their
configured tools.
Workflow visualizer: Seeing step-by-step
workflow execution and being able to
suspend/resume/replay
Agent/workflow endpoints: Being able to curl
agents and workflows on localhost (this also
enables using eg Postman)
Tool playground: Testing any tools and being
able to verify inputs / outputs without needing to
invoke them through an agent.
Tracing & evals: See inputs and outputs of each
step of agent and workflow execution, as well as
eval metrics as you iterate on code.
Mastra’s local dev environment, which we call Mastra
Studio, lives at localhost:4111:

Principles of Building AI Agents 101
In Mastra Studio, you can interact with your agents in
real-time, observe their decision-making process, review
prompts and responses, and debug function calls so you can
iterate quickly on prompts, workflows, and integration
logic.

29
DEPLOYMENT
M
ost teams are wrapping their agents in a
server, wrapping the server in a Docker
container, and scaling that.
The core agentloop
The core agent loop is long-running and stateful. Sure, you
can model each “turn” as a separate request/response cycle.
But you still have to think about streaming a response
back to the user, rather than simply sending a single JSON
blob.
Agentic workflows
Relatively speaking, similar to the workloads on durable
execution engines like Temporal and Inngest. But they are
still tied to a specific user request.
Agents can run on serverless platforms, but teams need
to work through dealing with timeouts from long-running
processes, bundle size issues, etc.

Principles of Building AI Agents 103
Using a managed platform
The agent teams sleeping the soundest at night are the ones
we see who figure out how to run their agents using auto-
scaling managed services.
Teams using container services like AWS EC2, Digital
Ocean, or equivalent seem to be all right as long as they
have a B2B use case that won’t have sudden usage spikes.

PART IX
CODING AGENTS

30
AGENTS BUILDING AGENTS
I
n early 2026, as the agentic coding experience has
gotten better, developers have become increasingly
addicted to Claude Code.
Venture capitalist Nikunj Kothari joked about “token
anxiety” — people leaving Silicon Valley parties early so
they could get back to running their agents.
Earlier, in 2025, coding IDEs like Cursor allowed users to
install MCP servers to provide agents with more tools and
knowledge. (We ourselves shipped an open-source MCP
server with access to our docs).
On web-based platforms
Meanwhile, vibe coding platforms like Replit, Lovable, and
Emergent have crossed $100M and $200M in revenue and
shipped products letting their users build agents.
One example: in September 2025, Replit’s Agent 3
shipped support for vibe coding agents with natural
language. Unlike drag-and-drop builders, the agents gener-

108 SAM BHAGWAT
ated by Replit’s agent are fully code-based, and can be
exported and run on other platforms.
Replit chose to use Mastra for the framework of the
generated agents, and exposed a simple UI for the agents
that helps users visualize the work that’s written.
Using coding agents to build agents opens the door for
non-technical users that could only previously build using
no-code tools with inherent platform lock-in. It also lets
developers build agents even more quickly.

31
SANDBOXES & FILESYSTEMS
A
ny agent that writes and executes code needs
somewhere safe to run it.
You probably don’t want to run agent-gener-
ated code directly on your servers — this creates both
resource contention and security risks.
Sandboxes provide an isolated environment where code
runs separately from your application via containers, micro-
VMs, or intercepted system calls.
In 2026, there's a category of dedicated platforms like
E2B, Daytona, and Modal. Cloud providers like Cloudflare
and Vercel also offer sandbox primitives.
Ephemeral vs. stateful sandboxes
For one-off tasks, you want an ephemeral sandbox — it can
spin up, runs some code, and disappear.
For longer-horizon tasks, you may want a stateful
sandbox that persists between calls — your agent can install
dependencies, write files, and return to the same environ-
ment later.

110 SAM BHAGWAT
Filesystems
Most sandbox platforms expose a filesystem API so your
agent can read and write files just like it would on a local
machine. Whether that filesystem survives between sessions
depends on the platform — ephemeral sandboxes wipe it
on teardown, stateful ones persist it.
Some platforms also let you snapshot the filesystem and
restore to it later. This is particularly useful for evals: run
your agent against a known starting state, check what
changed, roll back, and run again.
Managing latency
Sandboxes add latency. A 150ms startup is fine for a coding
agent that runs for minutes, but noticeable if you're spin-
ning up a new sandbox on every tool call.
Some teams strike a balance: create one sandbox per
agent session, reuse it across all tool calls, then tear it down
when the session ends.

PART X
EVERYTHING ELSE

32
MULTIMODAL
O
ne way to think about multimodality (images,
video, voice) in AI is to map their dates of origin
on various platforms.
Consider the Internet: it supported text from its origin in
the 1970s, but images and video weren’t supported until the
web browser (1992), and voice not until 1995.
Voice and video didn’t become popular until Skype
(2003) and YouTube (2005), with greater bandwidth and
connection speeds.
Or think about social networks: all the early ones, like
MySpace (2002), Facebook (2004), and Twitter (2008), were
primarily text-based.
Image-based social media didn’t become popular until
Instagram (2010) and Snapchat (2013), and video-based
social media until TikTok (2017).
In AI, then, it’s little wonder that multi-modal use-cases
are a bit younger and less mature. Like on earlier platforms,
they’re trickier to get right, and more computationally
complex.

114 SAM BHAGWAT
Image Generation
March 2025 brought the invention of Ghibli-core —think
soft colors, dreamy backgrounds, and those iconic wide-
eyed characters.
People had been playing with Midjourney, Stable Diffu-
sion, and others for a while. Transposing photos into
specific styles with a single prompt, though, was a signifi-
cant leap forward in consumer-grade image-generation.
People uploaded selfies or old photos, added a prompt,
and instantly got back an anime version that looked straight
out of “Spirited Away.”
The Mastra cofounders (Shane, Abhi and Sam) at a basketball game
This wasn’t just a niche thing; the Ghibli trend took over
social feeds everywhere. The official (Trump) White House
account joined the fray by (controversially) tweeting out a
Ghibli-fied picture of a detained immigrant.
More broadly, the Ghibli moment showed vitality for the
digital art use case — image gen for what was something

Principles of Building AI Agents 115
that is a confluence between storyboard, a character sketch,
and environment concepts.
Use Cases
In terms of people using image gen for products, there are a
few use-cases.
In marketing and e-commerce, product mockups on
varied backgrounds and rapid ad creative generation
without photoshoots and in various form factors. “Try-on”
image models allow people to swap out the human model
but keep the featured clothing item.
The third use-case for image gen has been in video
game and film production. Image gen has allowed for asset
prototyping, including portraits, textures, and props, as
well as scene layout planning via rough “sketch to render”
flows.
Put in web development terms, this gives the fidelity of a
full design with the effort/skill of a wireframe.
Last, there are more NSFW use-cases. These don’t tend
to be venture-fundable, but at least according to the Silicon
Valley gossip mills, quite a few of the more risqué use-cases
print money — if you can find a payment processor that will
take your business.
Voice
The key modalities in voice are speech-to-text (STT), text-to-
speech (TTS), and speech-to-speech, also known as realtime
voice.
Most voice agents built in 2024 and early-to-mid 2025
used a speech-to-text (STT) and text-to-speech (TTS) pipe-
line. They use one model to translate input voice to text,

116 SAM BHAGWAT
another model to generate response text, and then translate
the response text into an audio response.
Mastra offers some voice capabilities for agents. Here’s
an example of listening; you could follow this up with
agent.speak() to reply.
But capabilities are evolving quickly; end-to-end speech-
to-speech models like OpenAI's gpt-realtime are
increasingly deployed in production voice agents.
In order to do that, you could train a model that specifi-
cally takes voice tokens as input, and responds with voice
tokens as output. That’s known as “realtime voice”, but it’s
proved challenging.
For one thing, it’s difficult to train such models; the
information density of audio is only 1/1000 of text, so these
models take significantly more input data to train and cost
more to serve.

Principles of Building AI Agents 117
Second, these models still struggle with turn-taking,
known in the industry as “voice activity detection”. When
talking, humans interrupt each other constantly using both
visual and emotional cues.
But voice models don’t have these cues, and have to deal
with both computational and network latency. When they
interrupt too early, they cut people off; when they interrupt
too late, they sound robotic.
While these products make great demos, there are not
too many companies using realtime voice in production.
Video
For most of 2025, we were waiting for video to have their
Studio Ghibli moment where they can accurately represent
characters in input and replay them in alternate settings.
Now in early 2026, tools like Sora 2, Veo 3.1 (Google),
Runway Gen-4.5, and Kling 3.0 are in active production use.
Veo 3.1 and Seedance 2.0 have achieved character
consistency.
We’re starting to see them show up in social media ads,
corporate training, film concept visualization, YouTube
automation, and multilingual content.

33
WHAT’S NEXT
T
his book was intentionally written as a getting-
started guide. We have a sequel, Patterns for
Building AI Agents, that dives more into produc-
tionizing them.
Patterns includes more on context engineering, creating
high-quality eval suites by working with domain experts
and analyzing failure modes, plus more on agent security.
The agent space is moving incredibly quickly.
We don’t have a crystal ball, but from our vantage point
as a prominent agent framework, here’s what we see:
Reasoning models will continue to get better.
Claude Opus 4.6 introduced "adaptive thinking,"
where the model dynamically allocates
reasoning effort based on problem complexity.
GPT-5.4 offers explicit reasoning effort controls
(low through xhigh) so you can tune
latency/depth per request. As the model does
more planning, our job may shift from
choreographer to architect.

Principles of Building AI Agents 119
We’ll make progress on agent learning. Agents
emit traces, but right now the feedback loop to
improve their performance runs through their
human programmers.
Synthetic evals are becoming standard
practice. Generating evals automatically from
production traces, with human approval, has
moved from experimental to mainstream. People
aren’t going to hand code evals in the era of
Claude Code.
Agent & MCP security will continue to be a
challenge. As agents ingest more data and take
more actions, prompt injection attacks will
multiply. And MCP's rapid adoption has created
a large and fast-growing attack surface.
The eternal September of AI will continue.
Every month brings new developers who haven't
learned how to write good prompts or how to do
context engineering. Meanwhile, the rapid pace
of model updates means even established teams
are constantly adapting their implementations.
In a field where the ground shifts constantly, we're all
perpetual beginners. To build something enduring, you
have to stay humble.