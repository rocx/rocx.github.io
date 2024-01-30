---
layout: "default"
---

This is where `rocx` would come and write about whatever BS was
floating around in his head.

# Posts

{% for post in site.posts %}
  * [{{ post.title | xml_escape }}]({{ post.url }})
{%- endfor %}
