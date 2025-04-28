---
layout: default
title: Blog
permalink: /blog/
---

<section class="page-header blog-header">
  <h1>Latest Posts</h1>
  <p>Deep dives into forecasting, emissions, and energy analytics.</p>
</section>

<section class="blog">
  <div class="container blog-grid">
    {% for item in site.posts %}
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
</section>