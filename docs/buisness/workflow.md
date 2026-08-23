# Business Workflows

## Overview

This document describes the primary business workflows supported by the Recruitment & Overseas Workforce Management SaaS.

The workflows define how different actors interact with the system to complete the recruitment lifecycle.

---

# Workflow 1: Recruitment Process

This is the main workflow of the system.

```text
Employer
    ↓
Company Owner
    ↓
Create Job Order
    ↓
Assign Branch
    ↓
Branch Recruits Candidates
    ↓
Candidate Selection
    ↓
Documents Collection
    ↓
Medical Examination
    ↓
Visa Processing
    ↓
Travel Arrangement
    ↓
Candidate Travels
```

### Description

1. An employer requests a specific number of workers.
2. The Company Owner creates a Job Order.
3. The Job Order is assigned to a branch.
4. The Branch Manager recruits suitable candidates.
5. Candidate documents are collected and verified.
6. Medical examinations are completed.
7. Visa procedures are completed.
8. Travel arrangements are finalized.
9. Candidates travel to the employer.

---

# Workflow 2: Job Order Management

```text
Employer Request
        ↓
Create Job Order
        ↓
Assign Branch
        ↓
Branch Starts Recruitment
        ↓
Monitor Progress
        ↓
Job Order Completed
```

### Description

* Every Job Order is created by the Company Owner.
* Every Job Order is assigned to one branch.
* The assigned branch is responsible for completing the recruitment process.
* Headquarters monitors the progress until completion.

---

# Workflow 3: Candidate Lifecycle

```text
Candidate Registered
        ↓
Interview
        ↓
Selected
        ↓
Documents Submitted
        ↓
Medical Approved
        ↓
Visa Approved
        ↓
Flight Scheduled
        ↓
Travelled
        ↓
Completed
```

### Description

Every candidate progresses through predefined recruitment stages until successfully placed with the employer.

---

# Workflow 4: Branch Management

```text
Create Branch
        ↓
Assign Branch Manager
        ↓
Branch Receives Job Orders
        ↓
Branch Recruits Candidates
```

### Description

* A Company Owner creates a new branch.
* A Branch Manager is assigned to manage the branch.
* The branch receives job orders from Headquarters.
* The branch executes the recruitment process.

---

# Workflow 5: Company Management

```text
Super Admin
        ↓
Create Recruitment Company
        ↓
Company Activated
        ↓
Company Owner Starts Using the Platform
```

### Description

* The Super Admin creates a new recruitment company.
* The company is activated.
* The Company Owner manages the company's operations through the platform.

---

# Business Rules

* Every company has one Headquarters.
* Every branch belongs to one company.
* Every branch operates in one country.
* Every Job Order is created by the Company Owner.
* Every Job Order is assigned to one branch.
* A Branch Manager can access only their assigned branch.
* Candidates belong to the branch responsible for recruiting them.
* Headquarters can monitor all recruitment activities across its branches.

---

# Future Workflows (Out of Scope for MVP)

The following workflows may be added in future versions:

* Subscription Management
* Billing and Payments
* Recruiter Assignment
* Candidate Self-Service Portal
* Employer Portal
* Mobile Application Workflow
* Multi-language Support
