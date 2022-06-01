---
layout: base
---

# Hello from Eleventy

This is a simple Eleventy demo

{% for post in collections.posts %}

- [{{ post.data.title }}]({{ post.url }})
  {% endfor %}
