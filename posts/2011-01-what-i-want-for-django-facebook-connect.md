---
date: '2011-01-31T15:11:00.000-08:00'
description: ''
published: true
slug: 2011-01-what-i-want-for-django-facebook-connect
tags:
- django
- legacy-blogger
time_to_read: 5
title: What I want for Django Facebook connect
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/01/what-i-want-for-django-facebook-connect.html)*.For a customer I need to do Facebook authentication on a new Django project. I went to the <a href="http://www.djangopackages.com/grids/g/facebook-authentication/">Django Packages Facebook Authentication Grid</a> and figured I would plug it in, set some keys, and go! Facebook authentication is a common client requirement, and this must have been solved many times over, right?<br /><br />Unfortunately, most (I'm still going through them) of the listed packages worry me. Security is <b>HARD</b>. Security is <b>DANGEROUS</b>. Since Facebook auth is a common requirement I shouldn't be forced to roll my own authentication or hack through someone else's implementation to get things working.<br /><br />Yet many of the packages listed in the grid above lack documentation or what exists is outdated. Some of them simply drop errors or seem to intentionally obfuscate them (I won't name anyone <b>YET</b> because I want to give people a chance to correct these issues). Finally, I've yet to find any with any sort of logging to help diagnose possible intrusions or just as a way to see what is happening when you have trouble hooking up things.<br /><br />I understand that Facebook is a moving target. But on the other hand, shouldn't updates to these things be in place?<br /><br />So what do I want in a Django app that does Facebook authentication?<br /><ul><li>Documentation that will build on <a href="http://readthedocs.org/">readthedocs.org</a>.</li><li>Use of the logging module for diagnosis.</li><li>Sample project with a working example of hitting a dummy app (call it <i>stupid-test-for-pydanny</i> if you like) on Facebook provided by the project manager.</li><li>Proper packaging on PyPI</li></ul><div>In the spirit of things if your project does this I'm willing to try it out and blog about it. I'm also going to sprint on this issue during <a href="http://cartwheelhackathon.eventbrite.com/">Saturday's Hackathon at Cartwheel HQ</a>.</div>

---

## 8 comments captured from [original post](https://pydanny.blogspot.com/2011/01/what-i-want-for-django-facebook-connect.html) on Blogger

**Reinhardt Quelle said on 2011-02-01**

A slightly orthogonal comment: Be careful about how your app's pages behave when they can't reach Facebook.<br />We had a bad experience with this, as it turns out that a very large number of networks block access to Facebook. <br />Our problem was with teachers at K-12 schools, but  Facebook is commonly blocked from corporate networks, too.<br />You will want to block Facebook from your test network and ensure that you fail gracefully when you can't reach the login API URLs.  In particular, your users are likely to have a laptop that moves from a network where it is acceptable to access Facebook to one where it is not.<br /><br />-RQ

**David Cramer said on 2011-02-02**

I feel bad for any of the developers having to maintain these API integrations. In the last 2 months we've had critical deadlines come up because Facebook decided to deprecate functions with a week's notice.

**pydanny said on 2011-02-02**

@Reinhardt and @David,<br /><br />Yes, it is incredibly frustrating and dangerous from a business point of view. Which is why the thought of a well supported reusable package for use in Django is what I want to do. I hope to get a chance to work on it at the hackathon I'm co-hosting this weekend.<br /><br />Right now I'm using django-oauth-access because I got it working. It *seems* pretty good so I plan to finish up the docs and add in a TON OF WORKING EXAMPLE CODE. Plus tests running off that code so we can quickly diagnose this issue.<br /><br />Too many of these projects are poorly supported or when they do have lots of contributors, they are more concerned about code/architecture then the tests and documentation that makes the application actually usable.<br /><br />We'll see how it goes. I've got a client willing to see this done right so I'll be able to work on it or even get others to work on it. Hopefully we won't be alone...

**Andrew Ash said on 2011-02-02**

It will be interesting to see what you end up doing.  I recently had this issue too, and found Aidan Lister's <a href="http://aidanlister.com/2010/11/better-integration-with-facebook-for-django/" rel="nofollow">post on Facebook with Django</a>.<br /><br />I've added a bit to it, and though it doesn't yet meet your specs for the ideal django-facebook integration project, it's young enough that it could.<br /><br /><a href="https://github.com/aidanlister/django-facebook" rel="nofollow">https://github.com/aidanlister/django-facebook</a>

**Vivek Narayanan said on 2011-02-19**

Django is a great tool but it would be much better if it had a proper generic oauth framework that connects across FB, Twitter, Linkedin etc

**pydanny said on 2011-02-19**

@Vivek,<br /><br />The problem with a 'generic' tool is that Facebook, Twitter, LinkedIn, and others have a tendency to implement OAUTH their own way. And to deliver changes periodically with little to no warning (especially Facebook). Which means that Django would require a lot of extra point releases to  to support multiple OAUTH vendors. Which would take time from other work in the Django framework.<br /><br />I think OAUTH has failed at some level, in that vendors can interpret how it works in different ways. I would rather not have to write django-la-facebook (http://djangopackages.com/packages/p/django-la-facebook), but the need for a facebook OAUTH client seems too great.

**Fashiolista said on 2011-04-04**

Few days ago I updated Django Facebook to 2.0. Its working very well at the moment. Very open to people forking and adding code to it.<br /><br />https://github.com/tschellenbach/Django-facebook<br /><br />you can authenticate via oauth and js (using the facebook js sdk), signed_data (for facebook apps) or just a access_token (for mobile authentication.)<br /><br />installable using pypi, instructions on github.

**pydanny said on 2011-04-04**

@Fashiolista,<br /><br />It is obvious you've put in a lot of hard work. From what I understand about your project you support both Django/Python handling the OAUTH, as well as templatetags for using Facebook's JS library.<br /><br />However, I have grave concerns about using a third-party hosted library for authentication into sites. Real security experts argue that  JavaScript, AJAX, and Authentication are a horrible mix.<br /><br />--pydanny

