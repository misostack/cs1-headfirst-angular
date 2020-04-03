# Angular BoilerPlate

> Version : 1.0

![Angular App Model][angular_app_model]

[angular_app_model]: ./assets/models.jpg

## Main Modules

### Base Module

1. [ ] HTTP Service
2. [ ] Log Service
3. [ ] API Interface, Base Entity

### Core Module:

1. [ ] Routing
2. [ ] API Service
3. [ ] AppState Service
4. [ ] Entities, Helpers
5. [ ] Guards, Pipes
6. [ ] I18n

### Auth Module:

1. [ ] Routing
2. [ ] Auth Service
3. [ ] Containers
4. [ ] Components
5. [ ] DTOs

### Feature Module:

1. [ ] Routing
2. [ ] Services
3. [ ] Containers
4. [ ] Components
5. [ ] DTOs

## Definitions

> **DTOs** : data transfer object --> Eg: auth login required email + password

> **Containers** : a component which express the user domain. Eg: a login page

> **Components** : a presentation component which only accept inputs, outputs. Eg: **a login form** in **login page**

> **Entity** : An object that is not defined by its attributes, but rather by a thread of continuity and its identity. Eg : a user entity, or an example entity

> **Service** : When an operation does not conceptually belong to any object. Following the natural contours of the problem, you can implement these operations in services

> **Repository** : Methods for retrieving domain objects should delegate to a specialized Repository object such that alternative storage implementations may be easily interchanged.

> **Factory** : Methods for creating domain objects should delegate to a specialized Factory object such that alternative implementations may be easily interchanged.
