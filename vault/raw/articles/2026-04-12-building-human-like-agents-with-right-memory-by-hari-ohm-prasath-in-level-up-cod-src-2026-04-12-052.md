# Building Human-Like Agents with Right Memory | by Hari Ohm Prasath | in Level Up Coding - Freedium

Source ID: src-2026-04-12-052
Canonical URL: https://freedium-mirror.cfd/levelup.gitconnected.com/building-human-like-agents-with-right-memory-3436b75815ba
Resource Type: article
Host: freedium-mirror.cfd
Mention Count: 1
Original URLs: https://freedium-mirror.cfd/levelup.gitconnected.com/building-human-like-agents-with-right-memory-3436b75815ba?gi=47187a69dd6b

## Mention Context
- 1/27/26, 12:39 PM: https://freedium-mirror.cfd/levelup.gitconnected.com/building-human-like-agents-with-right-memory-3436b75815ba?gi=47187a69dd6b

## Page Description
No meta description captured.

## Captured Text Excerpt
Building Human-Like Agents with Right Memory | by Hari Ohm Prasath | in Level Up Coding - Freedium
Milestone: 20GB Reached
We’ve reached 20GB of stored data — thank you for helping us grow!
Patreon
Ko-fi
Liberapay
Close
Freedium
ko-fi
source code
status page
-->
librepay
patreon
< Go to the original
Building Human-Like Agents with Right Memory
Designing short-term and long-term memory for better agent experiences
Hari Ohm Prasath
Follow
Level Up Coding
~7 min read
January 21, 2026 (Updated: January 21, 2026)
Free: No
1. Introduction
Most agents do not have a memory problem so much as a strategy problem. They either remember nothing between turns, or they try to remember everything and then shove it all back into the prompt, hoping the model will sort it out. This results in interactions that feels generic, hallucinations from noisy context, and increasing the latency and cost. Humans clearly work differently. In the moment, we carry rich context such as who said what, the mood in the room, and how we felt. Over time, those details fade, and what remains is a rough summary of what happened, what the other person liked or disliked, and a few facts that matter the next time we meet. This story is for developers and practitioners building LLM‑powered agents who want their systems to feel more like real companions and less like stateless chatbots. You will walk through a concrete real‑world interaction, translate it into a mental model of short‑term and long‑term memory for agents, and then implement three MVPs, from no memory to human‑like memory , using AWS Strands and real code. By the end, you will know how to design and ship a companion agent that remembers who your users are, what they care about, and what you discussed across sessions. 2. Real world scenario
Imagine you are boarding a flight from SFO to NYC. After reaching your seat, you notice someone else is sitting there. You ask them to move to their assigned seat, and they agree. This small conversation serves as a ice breaker and you start a conversation.
Meet and greet You learn that the person is from NYC and was visiting SFO for a week. You ask how they liked the city, and they share their experience. Below is a snippet of the conversation:
Snippet of the conversation As you can see, the conversation is fairly simple and straightforward. If someone asked you a few hours later what you talked about, you would be able to recall almost every detail, including the flow of the conversation, the context, and even how it felt. But a few days later, most of that detail would fade. What you would still remember are the important highlights: what James liked about SFO, his shellfish allergy, and his recommendation for pizza in NYC. We can use this example to break down how a single interaction maps naturally to different types of memory in agents. 3. Memory types
There are two main types of memory you can implement in an agent
Memory types (short-term & long-term) 3.1. Short-term memory
This memory is relevant to the current conversation or task. It captures everything the agent needs to stay focused and responsive right now. In our real-world example, this corresponds to the memory you had while talking with James on the flight. 3.2. Long-term memory
This memory represents past experiences broken down into key details, high-value information. Since neither humans nor agents can retain every detail forever, long-term memory stores only what matters most. In our example, that would include: Summary of the conversation: What the conversation was about, how long it lasted, and the most important points discussed. Preferences: What James liked about SFO, his allergy to shellfish, and the recommendations he gave you. Semantic memory: General knowledge and meaning of concepts mentioned in the conversation, such as pizza, burritos, or clam chowder. 4. Companion Agent
Now that we have a mental model of the use case and the different memory types, lets put it to the test by building a companion agent. To keep things simple, we will replace James with an agent that can actively participate in the conversation and remember the details that are shared. We will use AWS Strands to build this companion agent. Note: All the code samples used in this blog is available here 4.1. [MVP-1]: No memory
In this MVP, we will build a companion agent that can help you with the conversation. We are deliberately not storing or using the historical conversations to build this agent and the code looks like below:
No-memory — code As you can see, even though I introduced myself as Hari, the agent isn't able to remember it. When I ask the agent who I am, it responds that it's not sure. Compared to a human interaction, this is like meeting someone who introduces themselves and then immediately forgetting their name in the very next meeting. Its awkward, frustrating, and breaks the flow of the conversation. This is exactly what the agentic experience feels like when there is no memory at al
