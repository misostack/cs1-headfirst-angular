# ApiService
@tag
Feature: ApiService Library

   Provide an Api Service Library to interact with Api Server

   Scenario: Create new instance
   Given An instance of ApiService
   When Create new instance
   Then Get an instance

   Scenario: Send GET request
   Given An API's URI
   When Send a GET request to an existed and avaiable URI
   Then Get the full response with status code, body
