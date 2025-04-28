---
layout: default
title: Home
permalink: /
---

<section class="hero" id="home">
  <div class="container">
    <div class="hero-content">
      <h1>Tyler Joe Sims</h1>
      <p>Operations Analyst & Data Science Leader • Energy Markets Expert • Automation Architect</p>
      <div class="hero-social-links">
        <a href="https://github.com/tsims2" title="GitHub" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/tsims2" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
      </div>
      <div class="hero-buttons">
        <a href="{{ '/projects/' | relative_url }}" class="btn btn-primary">View Projects</a>
        <a href="{{ '/blog/' | relative_url }}" class="btn btn-secondary">Read Blog</a>
      </div>
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
      {% for item in site.projects limit:3 %}
      <div class="card">
        <div class="card-image">
          {% if item.image %}
            <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          {% else %}
            <i class="fas fa-{% if item.icon %}{{ item.icon }}{% else %}code{% endif %}"></i>
          {% endif %}
        </div>
        <div class="card-content">
          <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
          <p class="card-description">{{ item.description | strip_html | truncate: 150 }}</p>
          <div class="card-action">
            <a href="{{ item.url | relative_url }}" class="btn btn-primary">View Project</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-secondary">View All Projects</a>
    </div>
  </div>
</section>

<section class="featured-posts" id="featured-posts">
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 2rem;">Featured Posts</h2>
    <div class="blog-grid">
      {% for item in site.posts limit:2 %}
      <div class="card">
        <div class="card-image">
          {% if item.image %}
            <img src="{{ item.image | relative_url }}" alt="{{ item.title }}">
          {% else %}
            <i class="fas fa-{% if item.icon %}{{ item.icon }}{% else %}newspaper{% endif %}"></i>
          {% endif %}
        </div>
        <div class="card-content">
          <div class="card-meta">{{ item.date | date: "%B %-d, %Y" }}</div>
          <h3 class="card-title"><a href="{{ item.url | relative_url }}">{{ item.title }}</a></h3>
          <p class="card-description">{{ item.excerpt | strip_html | truncate: 150 }}</p>
          <div class="card-action">
            <a href="{{ item.url | relative_url }}" class="btn btn-primary">Read More</a>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div style="text-align: center; margin-top: 3rem;">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-secondary">View All Posts</a>
    </div>
  </div>
</section>

<section class="contact" id="contact">
  <div class="container contact-content">
    <h2>Let's Connect</h2>
    <p>Interested in discussing data science initiatives, energy markets, or automation solutions? I'm always open to new opportunities and collaborations.</p>
    <div class="social-links">
      <a href="https://github.com/tsims2" title="GitHub"><i class="fab fa-github"></i></a>
      <a href="https://linkedin.com/in/tsims2" title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
      <a href="mailto:tyler.jsims97@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
    </div>
  </div>
</section>