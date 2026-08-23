# Roles & Permissions

## Overview

The system defines three primary roles. Each role has a different level of access based on its business responsibilities.

---

# 1. Super Admin

## Description

The Super Admin is the owner of the SaaS platform and is responsible for managing the platform itself rather than the daily operations of recruitment companies.

### Responsibilities

* Manage recruitment companies (tenants)
* Activate or deactivate companies
* Manage subscriptions (future)
* View platform-wide statistics
* Configure platform settings
* Handle support requests

### Permissions

* Full access to the SaaS platform
* Cannot participate in a company's recruitment operations

---

# 2. Company Owner

## Description

The Company Owner represents the headquarters of a recruitment company and manages all branches and recruitment operations within that company.

### Responsibilities

* Manage company information
* Create and manage branches
* Create and manage branch managers
* Manage employers (clients)
* Create job orders
* Assign job orders to branches
* Monitor recruitment progress
* View company reports

### Permissions

* Access all branches within the company
* Access all job orders
* Access all candidates
* Manage company users
* Configure company settings

---

# 3. Branch Manager

## Description

The Branch Manager manages a single branch located in one country and is responsible for executing the recruitment process for assigned job orders.

### Responsibilities

* View assigned job orders
* Recruit candidates
* Manage candidate profiles
* Upload and manage candidate documents
* Update recruitment progress
* Schedule interviews
* Track medical, visa, and travel status

### Permissions

* Access only the assigned branch
* Access only candidates belonging to the branch
* Access only job orders assigned to the branch
* View branch reports
* Cannot create branches
* Cannot create job orders
* Cannot access other branches

---

# Permission Summary

| Feature                  | Super Admin | Company Owner |  Branch Manager |
| ------------------------ | :---------: | :-----------: | :-------------: |
| Manage Companies         |      ✅      |       ❌       |        ❌        |
| Manage Branches          |      ❌      |       ✅       |        ❌        |
| Manage Branch Managers   |      ❌      |       ✅       |        ❌        |
| Manage Employers         |      ❌      |       ✅       |        ❌        |
| Create Job Orders        |      ❌      |       ✅       |        ❌        |
| Assign Job Orders        |      ❌      |       ✅       |        ❌        |
| View All Job Orders      |      ❌      |       ✅       |        ❌        |
| View Assigned Job Orders |      ❌      |       ✅       |        ✅        |
| Manage Candidates        |      ❌      |       ✅       | ✅ (Branch Only) |
| Manage Documents         |      ❌      |       ✅       | ✅ (Branch Only) |
| View Reports             |   Platform  |    Company    |      Branch     |
| Configure Settings       |   Platform  |    Company    |   Branch Only   |

---

# Access Scope

The system enforces role-based access control (RBAC).

* **Super Admin** has access to platform-level resources only.
* **Company Owner** has access to all resources within their company.
* **Branch Manager** has access only to resources belonging to their assigned branch.

This ensures that each user can perform only the actions required for their role while maintaining data isolation and security.
