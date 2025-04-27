---
layout: default
title: "NYISO Load Forecasting: ANN-Based Hourly Predictions"
date: 2024-08-19
icon: chart-line
---
Accurate real-time load forecasts are critical for grid stability and market efficiency. In this project, I:

1. **Data Preparation**  
   - Aggregated 5 years of NYISO load & weather data into 15-minute intervals  
   - Engineered calendar features: holidays, weekday/weekend flags, and hour-of-day

2. **Model Architecture**  
   - Two hidden-layer feed-forward ANN (64 & 32 units) with dropout & L2  
   - Early stopping on validation MAPE

3. **Results**  
   - **2.3% test MAPE**, outperforming ARIMA (3.1%)  
   - 15% reduction in peak-hour errors

4. **Next Steps**  
   - Integrate anomaly detection for outages  
   - Explore transformer-based forecasting models

🔗 [Code & Methodology →](https://github.com/tyler-sims/energy-load-forecasting)  
📄 [Full Paper →](https://github.com/tyler-sims/energy-load-forecasting/blob/main/docs/forecasting-paper.pdf)
