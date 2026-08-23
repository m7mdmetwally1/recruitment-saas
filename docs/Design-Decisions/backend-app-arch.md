# 002 - Backend Architecture

## Status

Accepted

## Decision

The backend will be implemented as a **Modular Monolith**.

The application will be divided into independent business modules, where each module represents a single business capability (e.g., Authentication, Companies, Branches, Job Orders, Candidates).

Each module will follow a **Layered Architecture**, organizing its code into presentation, business logic, and data access layers.

## Rationale

This architecture was chosen because it:

* Organizes the application around business features.
* Keeps related code together, making it easier to maintain.
* Supports future growth without introducing the operational complexity of microservices.
* Fits a production SaaS application developed by a small engineering team.

