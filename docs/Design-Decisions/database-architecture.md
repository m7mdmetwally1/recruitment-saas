# 003 - Database Architecture

## Status

Accepted

## Decision

The database will use a **Schema per Tenant** multi-tenancy strategy.

Each tenant (recruitment company) will have its own database schema within the same PostgreSQL database instance.

## Rationale

This architecture was chosen because it:

* **Strong Data Isolation**: Each tenant's data is completely isolated at the schema level, preventing any possibility of data leakage between companies.
* **Performance**: Queries are faster since each schema contains only its tenant's data, avoiding large shared tables.
* **Security**: Easier to implement tenant-specific security policies and row-level security.
* **Backup and Recovery**: Individual tenant schemas can be backed up or restored independently.
* **Compliance**: Better for data privacy regulations as tenant data is naturally separated.
* **Scalability**: Can handle a large number of tenants without performance degradation that comes with shared tables.
* **Cost-Effective**: More economical than separate databases per tenant while still providing strong isolation.

## Implementation Details

* PostgreSQL will be used as the database engine.
* Each tenant will have a dedicated schema (e.g., `tenant_1`, `tenant_2`).
* TypeORM will handle schema management and migrations.
* Connection pooling will be configured to handle multiple schema connections efficiently.
* Migrations will be applied to all tenant schemas automatically.

