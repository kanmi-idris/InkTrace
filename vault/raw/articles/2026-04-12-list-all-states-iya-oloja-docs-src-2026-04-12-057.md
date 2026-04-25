# List all states | Iya Oloja Docs

Source ID: src-2026-04-12-057
Canonical URL: https://nigerian-markets-api-docs.vercel.app/docs/openapi/listStates
Resource Type: documentation
Host: nigerian-markets-api-docs.vercel.app
Mention Count: 1
Original URLs: https://nigerian-markets-api-docs.vercel.app/docs/openapi/listStates

## Mention Context
- 4/3/26, 6:09 AM: https://nigerian-markets-api-docs.vercel.app/docs/openapi/listStates

## Page Description
Returns all 36 states and the FCT. This endpoint is intentionally lightweight and useful for populating dropdowns, filters, and lookup tables in clients.

## Captured Text Excerpt
List all states | Iya Oloja Docs
Iya Oloja API
Live API GitHub Overview API Reference
Submit a market for review POST Get the API index GET Get coverage summary data GET Get an LGA by slug GET Get a state by slug GET List LGAs GET List, search, and filter markets GET List all states GET
List all states
Returns all 36 states and the FCT. This endpoint is intentionally lightweight and useful for populating
dropdowns, filters, and lookup tables in clients.
Server URL loading... GET / api / states
Send
Returns all 36 states and the FCT. This endpoint is intentionally lightweight and useful for populating
dropdowns, filters, and lookup tables in clients.
Response Body
200 application/json
cURL
JavaScript
Go
Python
Java
C#
curl -X GET "https://iya-oloja.pages.dev/api/states"
200
"success" : true ,
"data" : [
"id" : 1 ,
"name" : "Abia" ,
"slug" : "abia"
},
"id" : 25 ,
"name" : "Lagos" ,
"slug" : "lagos"
List, search, and filter markets GET
This is the main collection endpoint for market discovery.
Use it to paginate the full market directory, run free-text search with `q`,
or filter by `state` and `lga`.
