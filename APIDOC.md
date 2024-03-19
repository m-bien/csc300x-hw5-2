# Jokebook API Documentation

## Endpoint 1 - GET: Jokebook Categories

- **Request Format:** `/jokebook/categories`
- **Request Type:** GET
- **Returned Data Format:** JSON
- **Description:** Get a list of joke categories in the jokebook.<br>
- **Example Request:** `GET /jokebook/categories`
- **Example Response:** 
```json
["funnyJoke", "lameJoke"]
```
**Error Handling:** N/A


## Endpoint 2 - GET: Jokes by Specific Category

- **Request Format:** `/jokebook/joke/:category`
- **Request Type:** GET
- **Returned Data Format:** JSON
- **Description:** Get all jokes from specified category (with optional limit parameter).
- **Example Request:** `GET /jokebook/joke/funnyJoke?limit=1`
- **Example Response:** 
```json
{
    "joke": "Which bear is the most condescending?",
    "response": "Pan-DUH"
}
```
- **Error Handling:** 
`{'error': 'no category listed for [category]'}`


## Endpoint 3 - POST: Add Joke

- **Request Format:** `/jokebook/joke/new`
- **Request Type:** POST
- **Returned Data Format:** JSON
- **Description:** Adds new joke to specified category.
- **Example Request:** `POST /jokebook/joke/new`
```json
{
    "category": "funnyJoke",
    "joke": "What do cats call a nice dinner?",
    "response": "A fancy feast"
}
```
- **Example Response:** 
```json
{
    "message": "Success!",
    "addedJokes": [
        {"joke": "What's a cat's favorite button on the TV remote?'", "response": "Paws"},
        {"joke": "What is a cat's favorite kitchen tool?", "response": "A whisker"},
        {"joke": "What do cats call a nice dinner?", "response": "A fancy feast"}
    ]
}
```
- **Error Handling:** 
`{'error': 'invalid or insufficient user input'}`