---
title: My First Eleventy Page!
layout: page.njk
date: Last Modified
---

Starting from scratch, this is my first page in the site.
I am starting with the tutorial at eleventy rocks.

### Featured Kitty

for {{ page.date | asPostDate }}

<img src="{{ catpic }}" />

<aside>
  {% for fact in facts | randomItem %}
	{{ fact }}
  {% endfor %}
</aside>
