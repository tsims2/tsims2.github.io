---
layout: default
title: Projects
permalink: /projects/
---
<section class="page-header">
  <h1>Featured Projects</h1>
</section>

<section class="projects">
  <div class="container">
    <div class="project-grid">
      {% for p in site.projects %}
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
  </div>
</section>
