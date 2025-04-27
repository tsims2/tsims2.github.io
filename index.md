---
layout: default
title: Home
permalink: /
---

<section class="hero" id="home">
  <div class="container">
    <h1>Tyler Sims</h1>
    <p>Operations Analyst & Data Science Leader • Energy Markets Expert • Automation Architect</p>
    <div class="hero-buttons">
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">View Projects</a>
      <a href="{{ '/blog/'     | relative_url }}" class="btn btn-secondary">Read Blog</a>
    </div>
  </div>
</section>

<section class="about" id="about">
  <div class="container about-content">
    <h2>About Me</h2>
    <p>An accomplished Operations Analyst and emerging Data Science leader with a proven track record of designing and implementing large-scale data infrastructure, automation pipelines, and analytical tools in the energy sector.</p>
    
    <div class="stats-grid">
      <div class="stat-item">
        <div class="stat-number">5M+</div>
        <div class="stat-label">Rows Processed Monthly</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">90%</div>
        <div class="stat-label">Manual Work Reduction</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">6</div>
        <div class="stat-label">Regional Markets Automated</div>
      </div>
    </div>

    <h3 style="text-align: center; margin: 3rem 0 1.5rem;">Core Competencies</h3>
    <ul class="skills-list">
      <li><strong>Programming & Data Engineering:</strong> Python (pandas, NumPy, SQLAlchemy), Azure SQL, PostgreSQL, Oracle, automation frameworks</li>
      <li><strong>Analytics & Visualization:</strong> Power BI dashboards, DAX calculations, custom GUIs for non-technical users</li>
      <li><strong>Cloud & Infrastructure:</strong> Microsoft Azure, multi-database architectures, private endpoint integration</li>
      <li><strong>Energy Markets & Domain Expertise:</strong> ISO-NE, NYISO, CAISO, PJM, real-time load forecasting, emissions indexing</li>
      <li><strong>Machine Learning & AI:</strong> Neural networks for load forecasting, real-time CO₂ emissions prediction, anomaly detection</li>
      <li><strong>Automation & DevOps:</strong> CI/CD pipelines, Docker containers, MLOps best practices, automated compliance systems</li>
    </ul>

    <h3 style="text-align: center; margin: 3rem 0 1.5rem;">Education</h3>
    <div style="text-align: center;">
      <p><strong>M.S. in Applied Data Science</strong>, University of Michigan, 2024</p>
      <p><strong>B.A. in Economics</strong>, University of Notre Dame, 2020</p>
    </div>
  </div>
</section>

<section class="projects" id="projects">
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 2rem;">Featured Projects</h2>
    <div class="project-grid">
      {% for p in site.projects limit:3 %}
      <div class="project-card">
        <div class="project-image">
          <i class="fas fa-{{ p.icon }}"></i>
        </div>
        <div class="project-content">
          <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
          <p>{{ p.excerpt | strip_html | truncate: 100 }}</p>
          <a href="{{ p.url | relative_url }}" class="btn btn-primary">View Project</a>
        </div>
      </div>
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">View All Projects</a>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <div class="container contact-content">
    <h2>Let's Connect</h2>
    <p>Interested in discussing data science initiatives, energy markets, or automation solutions? I'm always open to new opportunities and collaborations.</p>
    <div class="social-links">
      <a href="https://github.com/tyler-sims" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/tylersims" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:tyler.sims@example.com" title="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</section>