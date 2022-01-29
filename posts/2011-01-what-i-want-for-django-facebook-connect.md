---
date: '2011-01-31T15:11:00.000-08:00'
description: ''
published: true
slug: 2011-01-what-i-want-for-django-facebook-connect
tags:
- django
- legacy
time_to_read: 5
title: What I want for Django Facebook connect
---

For a customer I need to do Facebook authentication on a new Django project. I went to the <a href="http://www.djangopackages.com/grids/g/facebook-authentication/">Django Packages Facebook Authentication Grid</a> and figured I would plug it in, set some keys, and go! Facebook authentication is a common client requirement, and this must have been solved many times over, right?<br /><br />Unfortunately, most (I'm still going through them) of the listed packages worry me. Security is <b>HARD</b>. Security is <b>DANGEROUS</b>. Since Facebook auth is a common requirement I shouldn't be forced to roll my own authentication or hack through someone else's implementation to get things working.<br /><br />Yet many of the packages listed in the grid above lack documentation or what exists is outdated. Some of them simply drop errors or seem to intentionally obfuscate them (I won't name anyone <b>YET</b> because I want to give people a chance to correct these issues). Finally, I've yet to find any with any sort of logging to help diagnose possible intrusions or just as a way to see what is happening when you have trouble hooking up things.<br /><br />I understand that Facebook is a moving target. But on the other hand, shouldn't updates to these things be in place?<br /><br />So what do I want in a Django app that does Facebook authentication?<br /><ul><li>Documentation that will build on <a href="http://readthedocs.org/">readthedocs.org</a>.</li><li>Use of the logging module for diagnosis.</li><li>Sample project with a working example of hitting a dummy app (call it <i>stupid-test-for-pydanny</i> if you like) on Facebook provided by the project manager.</li><li>Proper packaging on PyPI</li></ul><div>In the spirit of things if your project does this I'm willing to try it out and blog about it. I'm also going to sprint on this issue during <a href="http://cartwheelhackathon.eventbrite.com/">Saturday's Hackathon at Cartwheel HQ</a>.</div>