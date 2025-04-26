layout: post
title: "NYISO Load Forecasting: ANN-Based Hourly Predictions"
date: 2025-04-26 10:00:00 -0400
categories: [forecasting, NYISO, energy]
---

Accurate real-time load forecasts are critical for grid stability and market efficiency. In this paper I:

1. **Data Preparation**  
   - Aggregated 5 years of NYISO load and weather data into 15-minute intervals  
   - Engineered calendar features: weekday/weekend flags, holidays, and time-of-day indicators  

2. **Model Architecture**  
   - Developed a feed-forward ANN with two hidden layers (64 & 32 units)  
   - Employed dropout and L2 regularization to mitigate overfitting  
   - Trained with early stopping on validation MAPE  

3. **Results**  
   - Achieved a test MAPE of **2.3%**, outperforming an ARIMA baseline (3.1%)  
   - Reduced peak-hour errors by 15%—improving dispatch margin recommendations  

4. **Next Steps**  
   - Integrate anomaly detection for outage events  
   - Explore transformer-based time-series models  

👉 Read the full code and methodology: [energy-load-forecasting repo]()
👉 Read the full paper: [Forecasting Energy Load in New York State with Artificial Neural Networks and Random Forests]([https://github.com/your-username/energy-load-forecasting](https://www.linkedin.com/pulse/forecasting-energy-load-new-york-state-artificial-neural-tyler-sims-i9oke/?trackingId=JOkd7N%2FDOzHTDKpAmGiPhA%3D%3D))
