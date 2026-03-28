# Automations & Schedules

## Azure Functions

The platform uses Azure Functions as timer-triggered microservices to execute:

- Settlement calculations
- Data quality checks
- Report generation workflows

## Scheduling

Typical patterns include:

- **Daily**: Data quality checks and model refreshes
- **Business-day-based**: Settlement runs after meter data cutoffs
- **Ad hoc**: On-demand report generation and backfills
