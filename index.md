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
      {% for p in site.projects limit:3 %}
      <div class="project-card">
        <div class="project-image">
          {% if p.image %}
            <img src="{{ p.image | relative_url }}" alt="{{ p.title }}" class="project-featured-image">
          {% else %}
            <i class="fas fa-{{ p.icon }}"></i>
          {% endif %}
        </div>
        <div class="project-content">
          <h3><a href="{{ p.url | relative_url }}">{{ p.title }}</a></h3>
          <p>{{ p.description | strip_html | truncate: 150 }}</p>
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

<section class="featured-posts" id="featured-posts">
  <div class="container">
    <h2 style="text-align: center; margin-bottom: 2rem;">Featured Posts</h2>
    <div class="blog-grid">
      {% for post in site.posts limit:2 %}
      <div class="blog-card">
        {% if post.image %}
          <div class="blog-image">
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="blog-featured-image">
          </div>
        {% endif %}
        <div class="blog-content">
          <div class="blog-date">{{ post.date | date: "%B %-d, %Y" }}</div>
          <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
          <p>{{ post.excerpt | strip_html | truncate: 120 }}</p>
          <a href="{{ post.url | relative_url }}" class="btn btn-primary">Read More</a>
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