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
    {% for post in site.posts %}
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
</section>