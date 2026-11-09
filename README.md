# 🌍 Overseas Recruitment & Workforce Management SaaS

> A modern, multi-tenant cloud platform engineered to streamline international recruitment logistics—from employer job orders and cross-border branch sourcing to visa clearance and candidate arrival.

---

## 🛠️ Tech Stack & Architecture

* **Monorepo Engine:** [Turborepo](https://turbo.build/)
* **Frontend:** (React), Tailwind CSS, TypeScript
* **Backend:** Node.js (Modular Monolith), TypeORM, TypeScript
* **Database:** PostgreSQL (Schema-per-Tenant Multi-Tenancy)
* **Object Storage:** Cloudflare R2 (Passports, Visas, Compliance Docs)
* **Containerization:** Docker & Docker Compose

## 📊 Conceptual Architecture Model

![Conceptual Data Model](./docs/diagrams/conceptual-model.svg)