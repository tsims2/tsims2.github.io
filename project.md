---
layout: default
title: Projects
permalink: /projects/
---

<section class="page-header projects-header">
  <h1>Featured Projects</h1>
  <p>Portfolio highlights: automation, forecasting, and data integration.</p>
</section>

<section class="projects">
  <div class="container project-grid">
    {% for p in site.projects %}
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
</section>