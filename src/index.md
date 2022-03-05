---
layout: base.njk
title: Hello World
---

## My First Eleventy Page!

Starting from scratch, this is my first page in the site.
I am starting with the tutorial at https://www.youtube.com/watch?v=2By887u7b0A

{% for note in collections.notes %}
{{ note.data.title }}
{% endfor %}
