---
date: '2009-01-12T09:58:00.004-08:00'
description: ''
published: true
slug: 2009-01-django-uni-form-lives
tags:
- django
- pinax
- legacy
time_to_read: 5
title: django-uni-form lives!
---

<a href="http://github.com/pydanny/django-uni-form/">Django Uni-Form</a> is my answer to a problem with the Django forms API in that they do not play so well in the arena of the disability access. The default view uses tables which is not disabled friendly. Other views build forms as paragraphs or lists, neither which is optimal for attractive display of HTML forms.<br /><br />My answer was to create the application above. It incorporates the wonderful <a href="http://sprawsm.com/uni-form/">uni-form</a> css and javascript combination to create disability-friendly yet attractive forms. Turn off JavaScript, CSS styles, or access it from a mobile phone and these forms should still work. Which is critical in my job. Best of all, you don't have to touch much HTML at all.<br /><br />I tried to make it as Django generic as I could, but as a Django newbie it is probably a bit rough around the edges. The code, if you examine it, is really clean. I like that about Django efforts - there is no boilerplate!<br /><br />Anyway, after a bit of setup, you do an easy modification of the form templates that are presenting your Django forms. You should also style it a bit to match your preferences.<br /><br />Some final notes and comparisons:<br /><ol><li>Time to get a basic version running was about 45 minutes.</li><li>Time to get the styling working was about 1 hour (mostly a stupid mistake on my part).</li><li>I'm hoping the Pinax project will incorporate my efforts!  ;)</li><li>The Django docs were very clear on everything I needed to do. I did not have to leave <a href="http://docs.djangoproject.com/">http://docs.djangoproject.com</a> to accomplish my chosen task. I cannot stress enough that this is something I really enjoy about Django.<br /></li><li>This was fun and easy.<br /></li></ol><br /><b>Edit on 7/15/2010</b>: Changed the link to django-uni-form on github.