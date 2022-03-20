---
title: Garden
description: "Digital Garden"
---

Welcome to my garden of notes!

<ul>
{% for post in collections.posts %}
	<li><a href="{{ post.url }}">{{ post.data.title }}</a></li>
{% endfor %}
</ul>
