# Clyde Code Challenge

## Intro

| Method | Path        | Description                                |
| ------ | ----------- | ------------------------------------------ |
| GET    | /rhinoceros | Returns all Rhinos that have been created  |
| POST   | /rhinoceros | Adds a new Rhino to the collection         |

I found the POST was broken bc of body non-existing so i used HEADER variables throughout exercise. 

### 1. Add a new route to the API
Complete. I made a new GET route

### 2. Add validation to the Create Rhino route
Complete. Checking length of name and species check, mentioned where checking header for variables could goof up testing the assignment if curl is used to check so all fields were left in header for this exercise.

### 3. Add filters to the Get All Rhinos route
Complete. used '/rhinosearch' to use a POST with variables in head:
"name" => "Clyde" OR "species" => "white_rhinoceros"

### 4. Add a route that returns Endangered Rhinos
This one gave me grief.

