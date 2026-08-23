# Business Overview

## Project

**Recruitment & Overseas Workforce Management SaaS**

A multi-tenant SaaS platform that helps international recruitment companies manage their branches, employers, job orders, candidates, and the recruitment process from initial hiring until the candidate travels to the destination country.

---

# Problem Statement

Recruitment companies that operate across multiple countries often manage candidates using spreadsheets, emails, and messaging applications. This makes it difficult to track recruitment progress, monitor branch performance, and coordinate between headquarters and branches.

The goal of this platform is to centralize the recruitment process into a single system that provides visibility, organization, and control over the entire recruitment lifecycle.

---

# Target Customers

The system targets small to medium-sized recruitment companies that recruit workers from multiple countries for employers located in another country.

Example:

* Headquarters in Saudi Arabia
* Branches in Egypt, India, Pakistan, etc.

---

# Business Structure

Each company using the platform is considered a **Tenant**.

Each tenant has:

* One Headquarters
* Multiple Branches

Each branch operates in a single country and is responsible for recruiting workers within that country.

Example:

```
Recruitment Company

├── Headquarters
│
├── Egypt Branch
├── India Branch
└── Pakistan Branch
```

---

# Main Actors

## Employer

A company that requests workers.

Example:

* Construction company
* Hotel
* Hospital

The employer submits requests for workers with specific professions and quantities.

---

## Headquarters

The headquarters manages the recruitment company.

Responsibilities include:

* Managing branches
* Creating job orders
* Assigning job orders to branches
* Monitoring recruitment progress
* Viewing reports

---

## Branch

A branch operates within one country.

Responsibilities include:

* Recruiting candidates
* Managing candidate information
* Uploading required documents
* Updating recruitment progress
* Completing assigned job orders

---

## Candidate

A worker applying for a job opportunity.

Candidates move through the recruitment pipeline until they successfully travel to the employer.

---

# Business Flow

The recruitment process follows these steps:

1. An employer requests workers.
2. Headquarters creates a Job Order.
3. Headquarters assigns the Job Order to a branch.
4. The branch recruits suitable candidates.
5. Candidate documents are collected and verified.
6. Medical examinations and visa procedures are completed.
7. Travel arrangements are finalized.
8. Candidates arrive at the employer.

---

# Core Business Modules

The platform consists of the following business modules:

* Authentication
* Company Management
* Branch Management
* Employer Management
* Job Orders
* Candidate Management
* Document Management
* Recruitment Pipeline
* Reports
* Notifications

---

# Business Rules

* Every company is isolated from other companies (multi-tenancy).
* Every company has exactly one Headquarters.
* Every branch belongs to one company.
* Every branch operates in one country.
* Every Job Order is created by Headquarters.
* Every Job Order is assigned to a branch.
* A branch can manage only its own candidates.
* Headquarters can monitor all branches within its company.

---

# Out of Scope (MVP)

The following features are intentionally excluded from the first version of the system:

* Billing and subscription management
* Financial accounting
* Payroll
* AI-based candidate matching
* Mobile application
* Public job portal
* Multi-language support
