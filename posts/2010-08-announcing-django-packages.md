---
date: '2010-08-17T07:30:00.000-07:00'
description: ''
published: true
slug: 2010-08-announcing-django-packages
tags:
- django
- djangodash
- django packages
- sprint
- legacy-blogger
time_to_read: 5
title: Announcing Django Packages!
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/08/announcing-django-packages.html)*.

I'm part of a <a href="http://djangodash.com/teams/scared-of-rabbits/">two person team</a> that just launched that BETA site for <a href="http://djangopackages.com/">http://djangopackages.com</a>, a site that is designed to list all the <a href="http://djangoproject.com/">Django</a> Applications, Frameworks, and Packages created by the Django community. While there are already a few places to look for these things, it is quite easy to argue that they are challenging to navigate, don't give any hard metrics, or are woefully incomplete/unstable/closed. Our goal was to provide an attractive, easy-to-navigate, easy-to-add-data, stable site and share it with the world.<br /><br />Also, this was our entry into <a href="http://djangodash.com/">Django Dash 2010</a>, and was the culmination of a few days of brainstorming over paper, a lot of research, and two days of feverish coding/designing. The project was feature complete to our specifications at 5pm the second day, and the rest of the time was spent adding in UI tweaks, usability enhancements, and trying to deploy our creation.<br /><br />Since then, we've cleaned up a the UI, improved the design, and got the site stable. The <a href="http://github.com/opencomparison/opencomparison">code is open source and on github,</a> so fork and contribute!<br /><br /><b>Design Consideration: No 'Like' button or 'Rate my app' rating systems</b><br /><br />We wanted hard metrics. So the package numbers are pulled from the repo sites such as <a href="http://github.com/">Github</a>, <a href="http://bitbucket.com/">Bitbucket</a>, and <a href="http://code.google.com/hosting/">Google Code</a>. Otherwise things get weighted funny. Sure, this system can be monkeyed with, but its a good metric for now. We've had suggestions from Django core developers of coming up with a quality check system, things like <a href="http://pypants.org/">pypants</a>&nbsp;and/or a formalized approval system.<br /><br /><b>Design Consideration: Grids</b><br /><br />Early on we wanted to duplicate and improve upon the <a href="http://code.djangoproject.com/wiki/CMSAppsComparison">Django CMS Comparison</a>&nbsp;page. There is also a version for <a href="http://code.djangoproject.com/wiki/ForumAppsComparison">Forums</a>, but it would be nice to have a <a href="http://pydanny.blogspot.com/2009/04/show-me-your-open-source-django-blog.html">current one for blogs</a>! In addition,&nbsp;recently I heard that 't<i>ag clouds are the mullets of web 2.0</i>'. This really struck a chord in my soul. Since we had metrics on packages, why not compare those metrics, and use those comparisons, which we call 'grids', instead of tags? In fact, we extended our idea and instead of traditional tabs we use grids in the top navigation area as seen below:<br /><br /><div class="separator" style="clear: both; text-align: center;"><a href="http://1.bp.blogspot.com/_KEFU5_uGRyw/TGok9P6U5BI/AAAAAAAAAw4/KOlaapAL6ZE/s1600/Screen+shot+2010-08-17+at+12.57.44+AM.png" style="margin-left: 1em; margin-right: 1em;"><img border="0" height="92" src="http://1.bp.blogspot.com/_KEFU5_uGRyw/TGok9P6U5BI/AAAAAAAAAw4/KOlaapAL6ZE/s320/Screen+shot+2010-08-17+at+12.57.44+AM.png" width="320" /></a></div><br /><b>Design Consideration: Categories</b><br /><br />The site groups packages into three categories, '<b>Apps</b>' which are individual django applications. '<b>Frameworks</b>' which are aggregates of apps and python modules. And '<b>Projects</b>' which are implementations of Apps and Frameworks. We've thought about adding '<b>Tools</b>' but weren't sure if there was anything that fit that concept, and we are leery about allowing regular <a href="http://python.org/">Python</a> efforts into the fold.<br /><br /><b>Design Consideration: Regex vs XML</b><br /><br />Slurping data out of Github was easy, especially since I used <a href="http://github.com/pydanny/python-github2">python-github2</a>. Bitbucket has a RESTful API as well that serves out JSON. I think Google Code does as well. <a href="http://pypi.python.org/">PyPI</a> does not and DOAP on PyPI seems to give little that is useful, so I was forced to do screen scrapes of version numbers and downloads. I'm much faster with Regex and string methods than XML juggling, and speed was of the issue this weekend. I'm not sure what benefit there is to redoing it in HTML5lib or lxml, since what I have works and appears to be stable.<br /><br /><b>Design Consideration: Leave caching and optimization for later</b><br /><br />Besides a tiny bit of memory based template caching on the home page, there is/was no optimization. In time I plan to cache many things using a proper key/value store like <a href="http://code.google.com/p/redis/">redis</a> or <a href="http://memcached.org/">memcached</a>. Perhaps not before more design and usability work is done.<br /><br /><b>Why scared of rabbits?</b><br /><br />You wouldn't understand unless you live on the Kansas prairie.<br /><br /><b>Note</b>: if you have any suggestions, issues, problems with Django Packages please use our <a href="http://github.com/opencomparison/opencomparison/issues">issue tracker</a>!

---

## 14 comments captured from [original post](https://pydanny.blogspot.com/2010/08/announcing-django-packages.html) on Blogger

**Mathieu Leduc-Hamel said on 2010-08-17**

Very cool initiative !<br /><br />Do you think you'll implement a way to use your site with a kind of &quot;find-link&quot; mechanism ?<br /><br />I would love to be able to use your website in my buildout confs ! ;0

**pydanny said on 2010-08-17**

@arrakis - Open up a ticket and we'll consider it! github.com/pydanny/scaredofrabbits/issues

**peterbe said on 2010-08-17**

I've got some django packages that I'd like to see included. <br /><br />Perhaps that should be a top-priority design consideration: How to add more packages.

**pydanny said on 2010-08-17**

@peterbe - Just go to http://djangopackages.com/packages/add/ and do it yourself.<br /><br />We are trying to figure out how to make the links to that page more obvious. :P

**akaihola said on 2010-08-17**

You've created the missing piece! With all the great reusable apps and tools, the problem – especially for new Django developers – has been how to find and evaluate them.<br /><br />My thought with the CMS and forum app wiki pages always was that they really should evolve into a central app database, and it should be super easy  for app developers and the whole community to contribute data. Such existing sites just weren't good enough. Django Packages already seems to be.<br /><br />It's great that the code for your site is open as well. But let's not stop there: public dumps of the database and a comprehensive public API could inspire cool tools from the community.<br /><br />Thanks, Daniel and Audrey!

**peterbe said on 2010-08-18**

@pyDanny<br /><br />You know how the &quot;Add package&quot; and &quot;Add grid&quot; appears only once you're logged in, I would make it always appear and then if you're not logged in it diverts you to sign up/log in. <br /><br />Major feature request: Maturity and last update date on the packages is often key to decide sometimes which one to choose.

**michuk said on 2010-08-18**

Great initiative. I can see it grow big.<br /><br />In projects tab (http://djangopackages.com/categories/projects/) you can add Filmaster, the open source film recommendation engine &amp; community website powered by django. <br />Bitbucket: http://bitbucket.org/filmaster/filmaster-test/<br />Developer's website: http://filmaster.org<br />The actual website: http://filmaster.com

**Bill Mill said on 2010-08-18**

You should add an option &quot;mercurial&quot; in the &quot;Repo&quot; field of the &quot;add an app&quot; form.<br /><br />Byteflow has their own hg repo at http://hg.piranha.org.ua/byteflow/ , but I can't add the package without lying about where the code is hosted.<br /><br />Plus it should be relatively easy to drag some information out of any hg repository? I'm guessing because hg is in python, not because I've ever actually done so.

**Bill Mill said on 2010-08-18**

Also, for some reason I can't submit http://github.com/f4nt/django-yaba/ , I get a server error when I try. I'm trying to make a grid of all reasonable blog engines, since I've been making a list. Strangely enough, I've been doing it for NASA as well as you have :)

**pydanny said on 2010-08-18**

@michuk - Filmaster looks awesome! As for adding it to the projects, we are relying on the community such as yourself. Go ahead and create an account (http://djangopackages.com/signup) and add Filmaster as a Package under the category of 'Project'.

**pydanny said on 2010-08-18**

@akaihola - We're so honored you like our efforts, since your work inspired a lot of the details of the grid. We had in mind public dumps of data and a good API down the road.

**pydanny said on 2010-08-18**

@bill mill - Yeah, we've seen people adding in custom URLs for packages. Its an existing issue. :P

**ptone said on 2010-08-21**

Would be neat to see a link between this and another dash project : readthedocs

**pydanny said on 2010-08-22**

@ptone - Check out <a href="http://github.com/pydanny/scaredofrabbits/issues#issue/29" rel="nofollow">add Read the Docs link</a>!

