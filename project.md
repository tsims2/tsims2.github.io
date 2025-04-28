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
    {% for item in site.projects %}
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
</section>