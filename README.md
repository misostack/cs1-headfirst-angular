# Cs1HeadfirstAngular

## Angular App Architecture

> Version : 0.1
> Release Date: 2020-03-13

![Angular App Architecture](./assets/angular-app-architecture.png)

## Workflow

1. A module structure

```json
{
  "example": [
    "example.module.ts", // declare all elements in module
    "example-routing.module.ts", // declare entry components with routes
    "example-components.module.ts", // components placed here to allow sharing
    "components", // all presentation components in this module, can group by functionals
    "containers", // all container components in this module
    "services", // the service in this module
    "entities", // the defined entities in module - not required
    "repositories", // the repositories - not required
  ]
}
```

```bash
# generate new module with route
ng g module {modulename} --routing=true
# Add new route to this module in base route
# Import Shared Module into this new module

## Create
 ng g component example/components/example-item --module=example/example-components.module --skipTests=true
```

## Angular Fundamentals

### Components

> To contrast the two types of components, there are components which are included in the template, which are declarative. Additionally, there are components which you load imperatively; that is, entry components.

**There are two main kinds of entry components:**

- The bootstrapped root component.
- A component you specify in a route definition.

> Angular router --> entry_components[]

![Entry components][entry_component]

### NgModules

> NgModules configure the injector and the compiler and help organize related things together.

#### Design Rules

> Component Independence : 
> - High cohesion
> - Low Coupling

> **Cohesion : **
> - The measure of the strength of functional relatedness of elements within a module
> - Elements: instructions, groups of instructions, data definition, call of another module
> - We aim for strongly cohesive modules
> - Everything in module should be related to one another - focus on the task
> - Strong cohesion will reduce relations between modules - minimise coupling

**Types of Cohesion : **

- **Functional cohesion (Most Required)**
- Sequential cohesion
- Communicational cohesion
- Procedural cohesion
- Temporal cohesion
- Logical cohesion
- **Coincidental cohesion (Least Required)**

> **Functional cohesion**:
> 
> - All elements contribute to the execution of one and only one problem-related task
> - Focussed - strong, single-minded purpose
> - No elements doing unrelated activities

**Examples of functional cohesive modules:**
> 
> - Compute cosine of angle
> - Read transaction record
> - Assign seat to airline passenger

**Some of bad design**

- Unrelated method to class
- Utility Class
- Hidden objects and subclasses

**Loose Coupling**



2. Service

- https://angular.io/guide/dependency-injection
- https://angular.io/guide/hierarchical-dependency-injection
- https://angular.io/guide/dependency-injection-providers
- https://angular.io/guide/dependency-injection-in-action
- https://angular.io/guide/singleton-services
- https://stackblitz.com/angular/omylrbvppab?file=src%2Fapp%2Fgreeting%2Fgreeting.module.ts
- https://angular.io/guide/ngmodule-faq#q-why-bad
- https://angular.io/guide/lazy-loading-ngmodules
- https://angular.io/guide/sharing-ngmodules


## Refs

- https://www.avatto.com/study-material/software-engineering-cohesion
- https://thebojan.ninja/2015/04/08/high-cohesion-loose-coupling/
- https://nehalist.io/working-with-models-in-angular/
- https://khalilstemmler.com/articles/typescript-domain-driven-design/ddd-frontend/

[entry_components]: ./assets/entry-components.png
