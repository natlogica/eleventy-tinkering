---
title: My First Eleventy Page!
layout: page.njk
date: 2022-03-05
modified: 2022-03-20
---

Starting from scratch, this is my first page in the site.
I am starting with the tutorial at eleventy rocks.

### Featured Kitty

<img src="{{ catpic }}" />

<aside>
  {% for fact in facts | randomItem %}
	{{ fact }}
  {% endfor %}
</aside>
