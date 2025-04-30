---
layout: default
title: "Emissions Car Project: Real-Time CO₂ Emissions Index"
date: 2023-09-26 11:00:00 -0400
image: "/_images/posts/emissions-index.jpg"
categories: [emissions, environment, data]
excerpt: "Built a real-time CO₂ emissions index for optimal EV charging, achieving 12% emissions reduction in pilot trials."
---

<section class="page-header">
  <h1>Real-Time CO₂ Emissions Index for EV Charging</h1>
  <p>Optimizing EV charging times to reduce carbon footprint</p>
</section>

<article class="container" style="max-width: 800px; margin: 4rem auto;">
  <div class="blog-post">
    <div class="post-meta" style="margin-bottom: 2rem; color: var(--primary-color); font-weight: 500;">
      {{ page.date | date: "%B %-d, %Y" }} • {{ page.categories | join: ", " }}
    </div>

    <p style="font-size: 1.125rem; margin-bottom: 2rem;">
      Reducing transportation emissions starts with knowing when the grid is cleanest. I developed a real-time emissions tracking system that helps EV drivers optimize their charging schedules based on grid carbon intensity.
    </p>

    <h2 style="color: var(--secondary-color); margin: 2rem 0 1rem;">Key Components</h2>

    <h3>1. Data Integration</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>ISO-NE LMPs as generation-mix proxy</li>
      <li>EPA CO₂ factors by fuel type</li>
      <li>Weather adjustments for plant efficiency</li>
    </ul>

    <h3>2. Index Computation</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>Weighted average CO₂ intensity per hour</li>
      <li>Rolling 24-hour visualization for EV charging guidance</li>
    </ul>

    <h3>3. Dashboard Development</h3>
    <ul class="skills-list" style="margin-bottom: 2rem;">
      <li>Power BI with embedded iframe</li>
      <li>Color-coded timeline for intuitive use</li>
    </ul>

    <h3>4. Outcomes</h3>
    <div class="outcomes-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem; margin-bottom: 2rem;">
      <div style="background: var(--light-purple); padding: 1rem; border-radius: 0.5rem;">
        <strong>12% CO₂ reduction</strong> in pilot trials
      </div>
      <div style="background: var(--light-purple); padding: 1rem; border-radius: 0.5rem;">
        <strong>24/7 real-time</strong> emission tracking
      </div>
    </div>

    <div style="text-align: center; margin-top: 3rem;">
      <a href="https://github.com/tyler-sims/iso-ne-emissions-index" class="btn btn-primary" style="margin-right: 1rem;">View Code</a>
      <a href="{{ '/projects/emissions-car-project/' | relative_url }}" class="btn btn-secondary">Project Details</a>
    </div>
  </div>
</article>