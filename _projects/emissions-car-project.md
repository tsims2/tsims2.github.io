---
layout: default
title: "Real-Time CO₂ Emissions Index for EV Charging"
date: 2023-09-26
icon: leaf
tags: ["emissions", "sustainability", "real-time", "ISO-NE"]
---

<section class="page-header">
  <h1>Real-Time CO₂ Emissions Index</h1>
  <p>Helping drivers charge EVs during periods of lowest grid carbon intensity</p>
</section>

<div class="container" style="max-width: 900px; margin: 4rem auto;">
  <div class="project-overview" style="background: white; padding: 3rem; border-radius: 1rem; box-shadow: 0 4px 6px rgba(124, 58, 237, 0.1); margin-bottom: 3rem;">
    <h2 style="color: var(--secondary-color); margin-bottom: 1.5rem;">Project Overview</h2>
    <p style="font-size: 1.125rem; margin-bottom: 1.5rem;">Developed a real-time emissions tracking index that optimizes EV charging schedules by identifying periods of lowest grid carbon intensity. This innovative solution achieved a 12% CO₂ reduction in pilot trials.</p>
    
    <div class="impact-metrics" style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2rem; text-align: center;">
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">12%</div>
        <div style="color: #4b5563;">CO₂ Reduction</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">24/7</div>
        <div style="color: #4b5563;">Live Updates</div>
      </div>
      <div>
        <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">100%</div>
        <div style="color: #4b5563;">Automated</div>
      </div>
    </div>
  </div>

  <h2 style="color: var(--secondary-color); margin: 3rem 0 1.5rem;">Technical Implementation</h2>
  
  <div class="implementation-section">
    <h3>1. Data Integration</h3>
    <ul class="skills-list">
      <li>Integrated ISO-NE LMPs as generation-mix proxy</li>
      <li>Applied EPA CO₂ factors by fuel type</li>
      <li>Implemented weather adjustments for plant efficiency</li>
      <li>Developed real-time API data pipeline</li>
    </ul>

    <h3>2. Index Computation</h3>
    <ul class="skills-list">
      <li>Calculated weighted average CO₂ intensity per hour</li>
      <li>Created rolling 24-hour visualization for EV charging guidance</li>
      <li>Implemented predictive analytics for future grid conditions</li>
      <li>Developed optimization algorithms for charging schedules</li>
    </ul>

    <h3>3. Dashboard Development</h3>
    <ul class="skills-list">
      <li>Built interactive Power BI dashboard with embedded iframes</li>
      <li>Designed color-coded timeline for intuitive understanding</li>
      <li>Implemented mobile-responsive design for on-the-go access</li>
      <li>Created automated email notifications for optimal charging windows</li>
    </ul>
  </div>

  <h2 style="color: var(--secondary-color); margin: 3rem 0 1.5rem;">Key Outcomes</h2>
  <div class="outcomes-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Environmental Impact</h4>
      <p>Enabled drivers to reduce their carbon footprint by scheduling EV charging during periods of lowest grid emissions.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">User Adoption</h4>
      <p>Achieved high engagement rates with intuitive interface design and actionable insights.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Scalability</h4>
      <p>Architecture designed for easy expansion to additional ISOs and regions beyond New England.</p>
    </div>
    <div class="outcome-card" style="background: var(--light-purple); padding: 1.5rem; border-radius: 0.75rem;">
      <h4 style="color: var(--primary-color); margin-bottom: 0.75rem;">Cost Savings</h4>
      <p>Helped participants leverage off-peak rates while minimizing environmental impact.</p>
    </div>
  </div>

  <div style="text-align: center; margin-top: 4rem;">
    <a href="https://github.com/tyler-sims/iso-ne-emissions-index" class="btn btn-primary" style="margin-right: 1rem;">View on GitHub</a>
    <a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">Back to Projects</a>
  </div>
</div>