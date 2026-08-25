# 004 - Object Storage

## Status

Accepted

## Decision

Cloudflare R2 will be used as the object storage solution for storing candidate/worker images and documents.

## Rationale

Cloudflare R2 was chosen because it:

* **Cost-Effective**: No egress fees, making it significantly cheaper than AWS S3 for serving images and documents
* **Global CDN**: Integrated with Cloudflare's global network for fast content delivery worldwide
* **S3 Compatible API**: Easy integration with existing S3-compatible libraries and tools
* **Security**: Built-in DDoS protection and security features
* **Scalability**: Handles unlimited storage without performance degradation
* **Privacy**: Data residency options and compliance features
* **Simplicity**: Easy to set up and manage without complex configuration

## Implementation Details

* Cloudflare R2 buckets will store candidate photos, documents, and other file uploads
* Each tenant's files will be organized in separate prefixes (e.g., `tenant_1/candidates/`, `tenant_2/candidates/`)
* Files will be accessed via signed URLs with expiration for security
* The backend will use an S3-compatible SDK (e.g., AWS SDK v3) to interact with R2
* File metadata will be stored in the database for tracking and searchability
* Image optimization may be implemented using Cloudflare Images if needed

## Use Cases

* Candidate profile photos
* Scanned documents (passports, medical certificates, visas)
* Medical examination reports
* Visa documents
* Travel documents
* Employer logos and assets
