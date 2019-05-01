---
layout: article
section: about
permalink: /about/meet/
title: Meet Us
---

The Lab Team is composed of a group of design professionals with expertise across many disciplines including design, digital design and development, creative and art direction, business, education, architecture, journalism, content strategy, community organizing, urban design and public policy. Our team brings formidable skills, deep curiosity and a commitment to service to our work.

<h2>Who We Are</h2>

<section class="site-c-section">
  <div class="site-c-section__body">
    <div class="site-c-cards margin-x-neg-2 grid-row">
      {% for person in site.people %}
      <div class="tablet:grid-col-6 desktop:grid-col-4 padding-x-2 margin-bottom-4">
        <a class="site-c-card site-c-card--linked" href="{{ site.baseurl }}/{{ person.permalink }}">
          <div class="site-c-card__image-mask">
            <img src="{{ site.baseurl }}/images/{{ person.image_name }}" alt="Photo of {{ person.name }}" />
          </div>
          <div class="site-c-card__body">
          <span class="site-c-flag">{{ person.title }}</span>
          <span class="site-c-card__title">{{ person.name }}</span>
          {% if person.desc %}
          <div class="usa-prose margin-top-3">
            <p>“{{ person.desc }}”</p>
          </div>
          {% endif %}
          <p class="site-c-card__affordance" aria-hidden="true">Read more</p>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
