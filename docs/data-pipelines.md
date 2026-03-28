# Data Pipelines & ESP Schema

## Source Systems

- ISO-NE, NYISO, CAISO, PJM, ERCOT
- Utility and third-party meter data providers
- Dynamics 365 for customer and program metadata

## Ingestion Patterns

- Scheduled ETL / ELT jobs
- Event-based or on-demand loads for specific datasets

## ESP Schema Highlights

- Enrollment tables organized by ISO and program
- Settlement and settlement-interval tables with validation triggers
- Clean Peak and other peak tables for certificate and performance calculations
