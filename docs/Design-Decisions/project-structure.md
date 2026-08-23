# 001 - Project Structure

---

# Context

Before starting implementation, a consistent project structure is required to keep the codebase organized, maintainable, and scalable.

The project will be developed as a production-ready SaaS application. Therefore, the structure should support future growth without requiring major refactoring.

---

# Decision

The project will be organized using a monorepo.

The repository will contain all applications, shared packages, documentation, and development configuration.

The initial structure will be:

```text
recruitment-saas/
│
├── apps/
│   ├── frontend/
│   └── backend/
│
├── packages/
│
├── docs/
│   ├── business/
│   ├── decisions/
│   └── diagrams/
│
├── .github/
├── .husky/
├── .devcontainer/
│
├── package.json
├── tsconfig.base.json
├── turbo.json (or nx.json)
└── README.md
```

---

# Goals

The project structure should:

* Keep frontend and backend in a single repository.
* Allow shared packages between applications.
* Support future expansion.
* Be easy to navigate.
* Keep documentation alongside the source code.
* Support automated CI/CD pipelines.

---

# Why This Decision

A monorepo simplifies development for a single engineering team working on a tightly coupled SaaS product.

It enables shared code, centralized tooling, consistent dependency management, and easier collaboration between frontend and backend development.
