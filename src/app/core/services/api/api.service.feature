# ApiService
@tag
Feature: ApiService Library

   Provide an Api Service Library to interact with Api Server

   Scenario: Create new instance
   Given An instance of ApiService
   When Create new instance
   Then Return an instance

   Scenario: Send GET/POST/PUT/PATCH/DELETE/HEAD/OPTIONS request
   Given An API's URI
   When Send a GET request to an existed and avaiable URI
   Then Return the full response with status code, body
