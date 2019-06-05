---
layout: article
section: take-a-class
permalink: /take-a-class/classes/
title: Our classes
---

The Lab’s educational offerings in human-centered design provide individuals, teams, and agencies several options for growth and development. You can choose from a range of formats from a week-long total immersion Design School to shorter-form options. Classes typically occur at the Lab but we can customize them to meet the needs of your organization.

<h2>Custom Classes</h2>

Our classes are attended by a diverse group of students from across the government. If you have a group that is interested in one of our classes and you are interested using your work as a vehicle for learning design, a custom class may be right for you. Custom programming can simply be a class in our catalogue delivered at your organization or it can draw from the material in our existing classes, newly developed content and external contributors and disciplines. We use your challenges to contextualize the learning experience which can result in project output for your team. If you are interested in a custom offering, contact us directly.

Fulfilling our mission to bring human-centered design to government at scale, our curriculum expanded in 2018 with eight new single-day topic-specific classes. These new classes bring key aspects of design practice, process, methods and theory to broad audiences. They cover a range of topics associated with problem-solving, creative thinking, and communication.

<iframe width="560" height="315" src="https://www.youtube.com/embed/DGDCd2ELpok" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p class="lab-caption">New programs at the Lab at OPM</p>

<h2>Class Details and Schedule</h2>
<h4>Multi-Day Sessions</h4>

{% for klass in site.classes %}
<h3>{{ klass.title }}</h3>
{{ klass.content | markdownify }}
<dl class="lab-dl">
  <dt>Locations</dt>
  <dd>{{ klass.locations }} </dd>
  <dt>Offered</dt>
  <dd>{{ klass.offered }} </dd>
  <dt>Length</dt>
  <dd>{{ klass.length }} </dd>
</dl>
{% endfor %}
