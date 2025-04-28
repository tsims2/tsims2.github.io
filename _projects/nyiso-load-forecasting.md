---
layout: default
title: "NYISO Load Forecasting: ANN-Based Hourly Predictions"
date: 2024-08-19
icon: chart-line
image: "/images/projects/nyiso-forecast.jpg"
tags: ["forecasting", "machine-learning", "neural-networks", "NYISO"]
description: "Developed a neural network model for real-time load forecasting achieving 2.3% MAPE, outperforming traditional ARIMA models by 0.8%."
---

<section class="page-header">
  <h1>NYISO Load Forecasting</h1>
  <p>Neural network model for real-time grid load predictions</p>
</section>

<div class="container" style="max-width: 900px; margin: 4rem auto;">
  <div class="project-overview" style="background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.1); margin-bottom: 3rem;">
    <h2 style="color: var(--secondary-color); margin-bottom: 1.5rem;">Project Overview</h2>
    <p style="font-size: 1.125rem; margin-bottom: 1.5rem;">Developed an artificial neural network (ANN) for accurate hourly load forecasting in the NYISO market. This solution outperformed traditional ARIMA models and reduced peak-hour errors by 15%, enabling better grid stability and market efficiency.</p>
    
    <div class="impact-metrics" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2rem; text-align: center;">
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">2.3%</div>
        <div style="color: #4b5563;">Test MAPE</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">15%</div>
        <div style="color: #4b5563;">Peak Error Reduction</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">5 Years</div>
        <div style="color: #4b5563;">Data Analyzed</div>
      </div>
    </div>
  </div>

  <h2 style="color: var(--secondary-color); margin: 3rem 0 1.5rem;">Technical Implementation</h2>
  
  <div class="implementation-section">
    <h3>1. Data Preparation</h3>
    <ul class="skills-list">
      <li>Aggregated 5 years of NYISO load & weather data into 15-minute intervals</li>
      <li>Engineered calendar features: holidays, weekday/weekend flags, and hour-of-day</li>
      <li>Implemented data cleaning and outlier detection algorithms</li>
      <li>Created robust validation strategy with rolling window cross-validation</li>
    </ul>

    <h3>2. Model Architecture</h3>
    <ul class="skills-list">
      <li>Two hidden-layer feed-forward ANN (64 & 32 units) with dropout & L2 regularization</li>
      <li>Early stopping on validation MAPE to prevent overfitting</li>
      <li>Optimized hyperparameters using grid search and Bayesian optimization</li>
      <li>Implemented ensemble averaging for improved stability</li>
    </ul>

    <h3>3. Results & Performance</h3>
    <ul class="skills-list">
      <li>Achieved 2.3% test MAPE, outperforming ARIMA (3.1%)</li>
      <li>15% reduction in peak-hour prediction errors</li>
      <li>Consistent performance across different seasons and weather conditions</li>
      <li>Real-time predictions with sub-second inference time</li>
    </ul>
  </div>

  <h2 style="color: var(--secondary-color); margin: 3rem 0 1.5rem;">Key Outcomes</h2>
  <div class="outcomes-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Improved Accuracy</h4>
      <p>Surpassed traditional time series models with advanced neural network architecture.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Operational Efficiency</h4>
      <p>Enabled better resource allocation and reduced operating reserves requirements.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Scalability</h4>
      <p>Architecture adaptable to other ISO markets with minimal modifications.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Research Contribution</h4>
      <p>Published methodology advances the field of short-term load forecasting.</p>
    </div>
  </div>

  <h2 style="color: var(--secondary-color); margin: 3rem 0 1.5rem;">Next Steps</h2>
  <ul class="skills-list">
    <li>Integrate anomaly detection for handling grid outages</li>
    <li>Explore transformer-based architectures for sequence modeling</li>
    <li>Implement adaptive learning for changing market conditions</li>
    <li>Develop explainable AI components for regulatory compliance</li>
  </ul>

  <div style="text-align: center; margin-top: 4rem;">
    <a href="https://github.com/tyler-sims/energy-load-forecasting" class="btn btn-primary" style="margin-right: 1rem;">View on GitHub</a>
    <a href="https://github.com/tyler-sims/energy-load-forecasting/blob/main/docs/forecasting-paper.pdf" class="btn btn-secondary" style="margin-right: 1rem;">Read Paper</a>
    <a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">Back to Projects</a>
  </div>
</div>