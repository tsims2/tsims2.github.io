---
layout: default
title: "NYISO Load Forecasting: ANN-Based Hourly Predictions"
date: 2024-08-19 10:00:00 -0400
categories: [forecasting, NYISO, energy]
excerpt: "Implemented neural network model for NYISO load forecasting, achieving 2.3% MAPE and outperforming traditional ARIMA by 0.8%."
---

<section class="page-header">
  <h1>NYISO Load Forecasting with Neural Networks</h1>
  <p>Improving grid reliability through accurate load predictions</p>
</section>

<article class="container" style="max-width: 800px; margin: 4rem auto;">
  <div class="blog-post">
    <div class="post-meta" style="margin-bottom: 2rem; color: var(--primary-color); font-weight: 500;">
      {{ page.date | date: "%B %-d, %Y" }} • {{ page.categories | join: ", " }}
    </div>

    <p style="font-size: 1.125rem; margin-bottom: 2rem;">
      Accurate real-time load forecasts are critical for grid stability and market efficiency. In this study, I developed a neural network approach that significantly outperforms traditional time series methods.
    </p>

    <h2 style="color: var(--secondary-color); margin: 2rem 0 1rem;">Technical Approach</h2>

    <h3>1. Data Preparation</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>Aggregated 5 years of NYISO load & weather data into 15‑minute intervals</li>
      <li>Engineered calendar features: holidays, weekday/weekend flags, and hour-of-day</li>
    </ul>

    <h3>2. Model Architecture</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>Two hidden-layer feed-forward ANN (64 & 32 units) with dropout & L2</li>
      <li>Early stopping on validation MAPE</li>
    </ul>

    <h3>3. Results</h3>
    <div class="outcomes-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
      <div style="background: var(--light-purple); padding: 1rem; border-radius: 0.5rem;">
        <strong>2.3% test MAPE</strong>, outperforming ARIMA (3.1%)
      </div>
      <div style="background: var(--light-purple); padding: 1rem; border-radius: 0.5rem;">
        <strong>15% reduction</strong> in peak-hour errors
      </div>
    </div>

    <h3>4. Next Steps</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>Integrate anomaly detection for outages</li>
      <li>Explore transformer-based forecasting models</li>
    </ul>

    <div style="text-align: center; margin-top: 3rem;">
      <a href="https://github.com/tyler-sims/energy-load-forecasting" class="btn btn-primary" style="margin-right: 1rem;">View Code</a>
      <a href="https://github.com/tyler-sims/energy-load-forecasting/blob/main/docs/forecasting-paper.pdf" class="btn btn-secondary" style="margin-right: 1rem;">Read Paper</a>
      <a href="{{ '/projects/nyiso-load-forecasting/' | relative_url }}" class="btn btn-secondary">Project Details</a>
    </div>
  </div>
</article>