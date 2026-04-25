# [Hands-on] Build an AI Agent With Human-like Memory

Source ID: src-2026-04-12-053
Canonical URL: https://www.dailydoseofds.com/p/hands-on-build-an-ai-agent-with-human-like-memory
Resource Type: article
Host: www.dailydoseofds.com
Mention Count: 1
Original URLs: https://www.dailydoseofds.com/p/hands-on-build-an-ai-agent-with-human-like-memory/

## Mention Context
- 1/27/26, 12:39 PM: https://www.dailydoseofds.com/p/hands-on-build-an-ai-agent-with-human-like-memory/

## Page Description
100% local, using open-source Graphiti.

## Captured Text Excerpt
[Hands-on] Build an AI Agent With Human-like Memory
Skip to main content
Newsletter
Guidebooks
MCP Guidebook
Agents Guidebook [Coming soon]
AI Engineering Guidebook [Coming soon]
DS Guidebook [Coming soon]
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Graph ML
Classical ML and Deep Learning
Engineering Best Practices
Newsletter
Guidebooks
MCP Guidebook
Agents Guidebook [Coming soon]
AI Engineering Guidebook [Coming soon]
DS Guidebook [Coming soon]
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Graph ML
Classical ML and Deep Learning
Engineering Best Practices
Sign In
Get Started
&]:animation-state-running opacity-0 [:hover>&]:opacity-100 transition-opacity duration-500">
&]:opacity-40">
&]:hidden [.has-breadcrumbs>&]:flex items-center w-full h-10 text-2xs border-y border-gray-950/5 dark:border-gray-50/5">
&]:block absolute inset-0 -z-50 backdrop-blur-sm">
&]:block outer xl:outer-xl absolute -bottom-px start-0 w-full h-px pointer-events-none">
&]:translate-x-0 ">
Newsletter
Guidebooks
MCP Guidebook
Agents Guidebook [Coming soon]
AI Engineering Guidebook [Coming soon]
DS Guidebook [Coming soon]
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Courses
MLOps/LLMOps Course
AI Agents Course
MCP Course
RAG Systems Course
LLM and Fine-tuning
Graph ML
Classical ML and Deep Learning
Engineering Best Practices
Sign In
May 8, 2025
LLMs
[Hands-on] Build an AI Agent With Human-like Memory
100% local, using open-source Graphiti.
Avi Chawla
TODAY'S ISSUE
TODAY’S DAILY DOSE OF DATA SCIENCE
[Hands-on] Build an AI Agent With Human-like Memory
If a memory-less AI Agent is deployed in production, every interaction with that Agent will be a blank slate.
It doesn’t matter if the user mentioned their name 5s ago…it’s forgotten.
If the Agent solved an issue in the last session, it won’t remember it now.
With Memory, your Agent becomes context-aware and practically applicable.
Today, let us build an AI Agent with human-like memory. We have added a video above if you prefer that.
Here’s our tech stack:
​ Open-source Graphiti ​ (by Zep) as the memory layer for our AI agent.
AutoGen for agent orchestration
Ollama to locally serve Qwen 3.
Here’s the system overview:
User submits a query.
Agent saves the conversation and extracts facts into memory.
Agent retrieves facts and summarizes.
Uses facts and history for informed responses.
If you prefer a video, here's a detailed walkthrough:
0:00
/ 11:49
1×
Implementation
Integrating Memory with Agent
Let’s dive into the code!
Setup LLM
We'll use a locally served Qwen 3 via Ollama.
Initialise Zep Client
We're leveraging Zep’s Foundational Memory Layer to equip our Autogen agent with genuine task-completion capabilities.
Create User Session
Create a Zep client session for the user, which the agent will use to manage memory. A user can have multiple sessions!
Define Zep Conversable Agent
Our Zep Memory Agent builds on Autogen's Conversable Agent, drawing live memory context from Zep Cloud with each user query.
It remains efficient by utilizing the session we just established.
Setting up Agents
We initialize the Conversable Agent and a Stand-in Human Agent to manage chat interactions.
Handle Agentic Chat
The Zep Conversable Agent steps in to create a coherent, personalized response.
It seamlessly integrates memory and conversation.
Streamlit UI
We created a streamlined Streamlit UI to ensure smooth and simple interactions with the Agent.
Visualize Knowledge Graph
We can interactively map users’ conversations across multiple sessions with Zep Cloud's UI. This powerful tool allows us to visualize how knowledge evolves through a graph.
Done!
We have equipped our AI Agent with a SOTA memory layer.
​ Find the complete code in the GitHub repository → ​
We recommend watching the video attached at the top for better understanding!
That said, Agents forget everything after each task. Open-source memory toolkit ​ Graphiti by Zep ​ lets Agents build and query temporally-aware knowledge graphs!
​ Check the GitHub repo here → ​ (don’t forget to star)
Thanks for reading!
ROADMAP
From local ML to production ML
Once a model has been trained, we move to productionizing and deploying it.
If ideas related to production and deployment intimidate you, here’s a quick roadmap for you to upskill (assuming you know how to train a model):
First, you would have to compress the model and productionize it. Read these guides: Reduce their size with ​ Model Compression techniques ​ .
​ Supercharge ​ ​ PyTorch Models ​ ​ With TorchScript .​
If you use sklearn, learn how to ​ optimize them with tensor operations ​ .
Next, you move to deployment. ​ Here’s a beginner-friendly hands-on guide ​ that teaches
