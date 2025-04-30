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

<!-- Refreshed About Me Section -->
<section class="about" id="about">
  <div class="container">
    <!-- About Header -->
    <div class="section-header">
      <h2>About Me</h2>
      <div class="section-line"></div>
    </div>
    
    <!-- Two-column layout for intro and photo -->
    <div class="about-intro-container">
      <div class="about-intro-content">
        <h3>Operations Analyst & Data Science Leader</h3>
        <p>An accomplished professional with extensive experience designing and implementing large-scale data infrastructure, automation pipelines, and analytical tools that transform operations in the energy sector.</p>
        <div class="about-highlights">
          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-database"></i>
            </div>
            <div class="highlight-text">
              <span>5M+</span> rows processed monthly
            </div>
          </div>
          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-chart-line"></i>
            </div>
            <div class="highlight-text">
              <span>90%</span> manual work reduction
            </div>
          </div>
          <div class="highlight-item">
            <div class="highlight-icon">
              <i class="fas fa-bolt"></i>
            </div>
            <div class="highlight-text">
              <span>6</span> energy markets automated
            </div>
          </div>
        </div>
      </div>
      <div class="about-profile-image">
        <div class="profile-image-container">
          <!-- Optional: Add your profile image here -->
          <i class="fas fa-user-circle"></i>
          <!-- <img src="{{ '/images/profile.jpg' | relative_url }}" alt="Tyler Joe Sims"> -->
        </div>
      </div>
    </div>
    
    <!-- Expertise Section -->
    <div class="expertise-section">
      <h3>Areas of Expertise</h3>
      
      <div class="expertise-grid">
        <!-- Expertise Card 1 -->
        <div class="expertise-card">
          <div class="expertise-icon">
            <i class="fas fa-code"></i>
          </div>
          <h4>Data Engineering</h4>
          <p>Building scalable pipelines processing millions of rows monthly using Python, pandas, and cloud technologies.</p>
          <div class="expertise-tags">
            <span>Python</span>
            <span>pandas</span>
            <span>SQL</span>
          </div>
        </div>
        
        <!-- Expertise Card 2 -->
        <div class="expertise-card">
          <div class="expertise-icon">
            <i class="fas fa-brain"></i>
          </div>
          <h4>Machine Learning</h4>
          <p>Developing neural network models for load forecasting with 2.3% MAPE, outperforming traditional methods.</p>
          <div class="expertise-tags">
            <span>Neural Networks</span>
            <span>Forecasting</span>
            <span>TensorFlow</span>
          </div>
        </div>
        
        <!-- Expertise Card 3 -->
        <div class="expertise-card">
          <div class="expertise-icon">
            <i class="fas fa-chart-bar"></i>
          </div>
          <h4>Data Visualization</h4>
          <p>Creating interactive dashboards and custom GUIs that translate complex energy data into actionable insights.</p>
          <div class="expertise-tags">
            <span>Power BI</span>
            <span>DAX</span>
            <span>D3.js</span>
          </div>
        </div>
        
        <!-- Expertise Card 4 -->
        <div class="expertise-card">
          <div class="expertise-icon">
            <i class="fas fa-bolt"></i>
          </div>
          <h4>Energy Markets</h4>
          <p>Deep expertise in ISO operations, real-time load forecasting, and emissions optimization across multiple regions.</p>
          <div class="expertise-tags">
            <span>ISO-NE</span>
            <span>NYISO</span>
            <span>PJM</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Education & Background -->
    <div class="education-section">
      <div class="education-grid">
        <div class="education-content">
          <h3>Education</h3>
          <ul class="timeline">
            <li class="timeline-item">
              <div class="timeline-marker">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="timeline-content">
                <h4>M.S. in Applied Data Science</h4>
                <p>University of Michigan, 2024</p>
              </div>
            </li>
            <li class="timeline-item">
              <div class="timeline-marker">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="timeline-content">
                <h4>B.A. in Economics</h4>
                <p>University of Notre Dame, 2020</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div class="background-content">
          <h3>Technical Toolkit</h3>
          <div class="skills-container">
            <div class="skill-category">
              <h4>Languages & Frameworks</h4>
              <div class="skill-tags">
                <span>Python</span>
                <span>SQL</span>
                <span>pandas</span>
                <span>NumPy</span>
                <span>TensorFlow</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Tools & Platforms</h4>
              <div class="skill-tags">
                <span>Azure</span>
                <span>Power BI</span>
                <span>Docker</span>
                <span>PostgreSQL</span>
                <span>Git</span>
              </div>
            </div>
            <div class="skill-category">
              <h4>Methodologies</h4>
              <div class="skill-tags">
                <span>ML/AI</span>
                <span>CI/CD</span>
                <span>Data Pipelines</span>
                <span>Automation</span>
                <span>DevOps</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="projects" id="projects">
  <div class="container">
    <h2>Featured Projects</h2>
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
    <h2>Featured Posts</h2>
    <div class="blog-grid">
      {% for post in site.posts limit:2 %}
      <div class="blog-card">
        <div class="blog-image">
          {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="blog-featured-image">
          {% else %}
            <i class="fas fa-{% if post.icon %}{{ post.icon }}{% else %}newspaper{% endif %}"></i>
          {% endif %}
        </div>
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