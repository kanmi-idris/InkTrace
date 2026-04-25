# Natural Language Search | Typesense

Source ID: src-2026-04-12-030
Canonical URL: https://typesense.org/docs/29.0/api/natural-language-search.html
Resource Type: documentation
Host: typesense.org
Mention Count: 1
Original URLs: https://typesense.org/docs/29.0/api/natural-language-search.html#debug-mode

## Mention Context
- 7/5/25, 4:17 AM: https://typesense.org/docs/29.0/api/natural-language-search.html#debug-mode for natural language searches

## Page Description
Documentation for Typesense Search

## Captured Text Excerpt
Natural Language Search | Typesense
v30.1
v30.0
v29.0
v28.0
v27.1
v27.0
v26.0
v0.25.2
v0.25.1
v0.25.0
v0.24.1
v0.24.0
v0.23.1
v0.23.0
v0.22.2
v0.22.1
v0.22.0
v0.21.0
v0.20.0
v0.19.0
v0.18.0
v0.17.0
v0.16.1
v0.16.0
v0.15.0
v0.14.0
v0.13.0
v0.12.0
v0.11.2
You are viewing docs for an old version. Switch to latest
v30.1 .
Docs Home
Overview
Guide
API Reference
Help
Roadmap
(opens new window)
GitHub
(opens new window)
v30.1
v30.0
v29.0
v28.0
v27.1
v27.0
v26.0
v0.25.2
v0.25.1
v0.25.0
v0.24.1
v0.24.0
v0.23.1
v0.23.0
v0.22.2
v0.22.1
v0.22.0
v0.21.0
v0.20.0
v0.19.0
v0.18.0
v0.17.0
v0.16.1
v0.16.0
v0.15.0
v0.14.0
v0.13.0
v0.12.0
v0.11.2
You are viewing docs for an old version. Switch to latest
v30.1 .
â K
v30.1
v30.0
v29.0
v28.0
v27.1
v27.0
v26.0
v0.25.2
v0.25.1
v0.25.0
v0.24.1
v0.24.0
v0.23.1
v0.23.0
v0.22.2
v0.22.1
v0.22.0
v0.21.0
v0.20.0
v0.19.0
v0.18.0
v0.17.0
v0.16.1
v0.16.0
v0.15.0
v0.14.0
v0.13.0
v0.12.0
v0.11.2
You are viewing docs for an old version. Switch to latest
v30.1 .
Docs Home
Overview
Guide
API Reference
Help
Roadmap
(opens new window)
GitHub
(opens new window) Introduction
Server Configuration
API Clients
Authentication
API Resources
Collections
Documents
Search
GeoSearch
Vector Search
Federated / Multi Search
Voice Query
Image Search
Conversational Search (RAG)
Natural Language Search Use-case
Create a Natural Language Search Model Supported Model Types
Perform a Natural Language Search Query Single-Search
Multi-Search
Response Structure Response Fields
Example Use Cases with Sample Dataset
Managing Natural Language Search Models List All Models
Get Model Details
Update Model
Delete Model
Troubleshooting Debug Mode
Schema Prompt Cache
JOINs
Analytics & Query Suggestions
API Keys
Curation
Collection Alias
Synonyms
Stemming
Stopwords
Cluster Operations
API Errors
# Natural Language Search
Copy Markdown
Natural Language Search in Typesense allows you to transform any free-form sentences a user might type into your search bar, into a structured set of search parameters.
This feature leverages the magic of Large Language Models (LLMs) to interpret user intent and generate appropriate search parameters like filter conditions, sort orders, and query terms that work with Typesense's search syntax.
# Use-case
Let's take an example of a cars dataset indexed in Typesense.
Here's a sample record from this dataset for context:
"city_mpg" : 13 ,
"driven_wheels" : "rear wheel drive" ,
"engine_cylinders" : 8 ,
"engine_fuel_type" : "premium unleaded (recommended)" ,
"engine_hp" : 707 ,
"highway_mpg" : 22 ,
"id" : "1480" ,
"make" : "Dodge" ,
"market_category" : [ "Factory Tuner" , "High-Performance" ] ,
"model" : "Charger" ,
"msrp" : 65945 ,
"number_of_doors" : 4 ,
"popularity" : 1851 ,
"transmission_type" : "AUTOMATIC" ,
"vehicle_size" : "Large" ,
"vehicle_style" : "Sedan" ,
"year" : 2017
Using Typesense's built-in Natural Language Search feature, your users can now query this dataset using natural language queries like this:
- A honda or BMW with at least 200hp, rear-wheel drive, from 20K to 50K
- Show me the most powerful car you have
- High performance Italian cars, above 700hp
- I don't know how to drive a manual
Notice how in some queries there might be multiple criteria mentioned, and in some cases the keyword itself might not be present in the dataset.
Typesense will automatically use an LLM to parse the natural language queries into filters, sorts and/or text-based queries, and execute the search for you using those parameters.
Under the hood
Read more about how this works under the hood in this guide article .
Let's see how we can set this up.
# Create a Natural Language Search Model
First, let's configure a model that will process natural language queries:
curl -X POST http://localhost:8108/nl_search_models \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY} " \
-H "Content-Type: application/json" \
-d '{
"id": "gemini-model",
"model_name": "google/gemini-2.5-flash",
"api_key": "YOUR_GOOGLE_AI_STUDIO_API_KEY",
"max_bytes": 16000,
"temperature": 0.0
}'
id can be any string you choose. You'll be using this same id to reference this model later in a search request.
# Supported Model Types
OpenAI Models :
"id" : "You-can-use-any-string-here-to-reference-this-model-later-in-a-search-request" ,
"model_name" : "openai/gpt-4.1" ,
"api_key" : "YOUR_OPENAI_API_KEY" ,
"max_bytes" : 16000 ,
"temperature" : 0.0 ,
"system_prompt" : "Optional custom system prompt to append to the one that Typesense generates based on your dataset"
Cloudflare Workers AI :
"id" : "You-can-either-specify-a-custom-id-or-have-one-auto-generated-for-you-by-leaving-out-the-id-field" ,
"model_name" : "cloudflare/@cf/meta/llama-2-7b-chat-int8" ,
"api_key" : "YOUR_CLOUDFLARE_API_KEY" ,
"account_id" : "YOUR_CLOUDFLARE_ACCOUNT_ID" ,
"max_bytes" : 16000 ,
"system_prompt" : "Optional custom system prompt to append to the one that Typesense generates based on your dataset"
vLLM Self-hosted Models :
"model_name" : "vllm/mistral-7b-instruct" ,
"api_url"
