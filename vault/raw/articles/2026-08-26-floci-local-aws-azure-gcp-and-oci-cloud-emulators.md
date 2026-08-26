---
title: "Floci: Local AWS, Azure, GCP, and OCI Cloud Emulators"
kind: "paste"
captured_at: "2026-08-26 04:24"
tags: ["floci", "cloud-emulator", "aws", "azure", "gcp", "oci", "local-development", "ci", "docker", "ai-agents", "terraform", "mit"]
source_url: "https://floci.io/"
status: "inbox"
---

# Floci: Local AWS, Azure, GCP, and OCI Cloud Emulators

## Source overview
Floci is a family of local cloud emulators for development, testing, CI, infrastructure-as-code dry runs, classrooms, and AI-assisted coding. The site presents standalone MIT-licensed binaries with no cloud account, auth token, feature gates, or paid tier required.

The family includes:
- floci for AWS.
- floci-az for Azure.
- floci-gcp for Google Cloud Platform.
- floci-oci for Oracle Cloud Infrastructure.

The site describes the emulators as compatible with existing SDKs, CLIs, Terraform or OpenTofu modules, and test runners. No project installation or startup command was executed during this capture.

## Cloud family and ports
The site lists these documented service counts and ports:
- AWS floci: 75 services on port 4566.
- Azure floci-az: 24 services on port 4577.
- GCP floci-gcp: 25 services on port 4588.
- OCI floci-oci: 8 services on port 4599.

The service counts are published site claims and can change as the projects evolve.

## AWS emulator
The AWS emulator is presented as a drop-in replacement for LocalStack. It uses port 4566 and exposes AWS-shaped endpoints. The site lists S3, SQS, Lambda, DynamoDB, RDS, EKS, and more.

The GitHub README says standard AWS SDKs, the AWS CLI, Terraform, CDK, OpenTofu, and test suites can target http://localhost:4566. Credentials can be non-empty local values unless stricter service-specific auth checks are enabled.

The README describes real Docker-backed execution for Lambda, RDS, Neptune, ElastiCache, MSK, ECS, EC2, EKS, OpenSearch, CodeBuild, and Managed Service for Apache Flink. Storage modes include in-memory, persistent, hybrid, and write-ahead log options.

## Azure emulator
floci-az uses port 4577. The site lists Blob Storage, Queue Storage, Table Storage, Azure Functions, App Configuration, Key Vault, Event Hubs, Service Bus, and other services.

Its README documents Azure SDK, CLI, and Terraform compatibility. Azure Functions can use Docker-backed runtime containers and therefore require the Docker socket. Cosmos DB Java gateway mode and the azurerm Terraform provider may require the documented local TLS proxy.

## GCP emulator
floci-gcp uses port 4588 and exposes gRPC and REST through one port. The site lists GCS, Pub/Sub, Firestore, Datastore, Secret Manager, IAM, Cloud Run, Cloud SQL, GKE, Cloud Functions, Cloud Tasks, Cloud Scheduler, Cloud Monitoring, Firebase Auth, BigQuery, Eventarc, Managed Kafka, and other services.

The README documents existing GCP environment variables such as PUBSUB_EMULATOR_HOST, FIRESTORE_EMULATOR_HOST, DATASTORE_EMULATOR_HOST, STORAGE_EMULATOR_HOST, SECRET_MANAGER_EMULATOR_HOST, and FIREBASE_AUTH_EMULATOR_HOST.

Docker-backed services include Managed Kafka through Redpanda, Cloud SQL for PostgreSQL, Cloud Run, and GKE through k3s. The emulator supports memory, persistent, hybrid, and WAL storage modes. Project IDs provide the documented multi-project isolation boundary.

The GCP README says compatibility tests cover Java, Node.js, Python, Go, gcloud, Terraform, and OpenTofu.

## OCI emulator
floci-oci uses port 4599. It provides OCI-shaped endpoints for Object Storage, Identity, Queue, Streaming, KMS, Vault, and Functions according to the site.

The README documents OCI SDK, OCI CLI, Terraform, and OpenTofu compatibility. It describes OCI-shaped request and response details such as opc-request-id, pagination headers, ETags, conditional requests, OCIDs, work requests, and OCI error bodies.

The site says OCI has no official local all-in-one emulator and presents floci-oci as a local alternative. The repository uses Quarkus and supports a GraalVM native-image build path.

## AI-assisted development
Floci is explicitly positioned as a safe cloud target for coding agents. Agents can run cloud-shaped code against localhost without real credentials, account access, cloud bills, or staging-environment changes.

The site highlights:
- No real cloud secrets in the agent context.
- Throwaway local credentials.
- Fast local startup for inner-loop testing.
- Real or Docker-backed service engines instead of mock-shaped responses.
- A local reset instead of a production or staging blast radius.

The AWS example uses AWS_ENDPOINT_URL=http://localhost:4566. The site states that the same approach works with SDKs, CLIs, Terraform, OpenTofu, and test runners.

## CLI and dashboard
The floci-cli is a unified command-line interface to start, stop, and inspect all Floci emulators. The site documents floci start and floci doctor.

The floci-ui dashboard provides a visual interface for browsing resources, inspecting data, and managing services across the cloud emulators. The listed UI areas include S3, DynamoDB, SQS, Blob Storage, Azure Queue, and other services.

## Performance and licensing claims
The site reports a native startup time of about 24 milliseconds for the AWS emulator and about 13 MiB idle memory for the Azure emulator. It describes the binaries as compiled with GraalVM Mandrel and positions them for CI and inner-loop work.

These performance numbers are published claims. They are not independent benchmarks from this capture.

The site states that each emulator is MIT licensed and free to use. The individual repositories also publish MIT license information. Check each repository's license files for the legally authoritative terms.

## Security and operational boundaries
Local emulation avoids sending test traffic to real cloud accounts, but Docker-backed features may require access to the host Docker socket. Operators should treat socket access as privileged and limit it to trusted local environments.

No account, token, credential, Docker container, install script, or emulator command was used during this capture.

## Sources
- https://floci.io/
- https://github.com/floci-io/floci
- https://github.com/floci-io/floci-az
- https://github.com/floci-io/floci-gcp
- https://github.com/floci-io/floci-oci
