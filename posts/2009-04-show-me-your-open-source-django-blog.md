---
date: '2009-04-09T11:33:00.010-07:00'
description: ''
published: true
slug: 2009-04-show-me-your-open-source-django-blog
tags:
- django
- foss
- javascript
- python
- pinax
- atom
- rss
- spacebook
- legacy
time_to_read: 5
title: Show me your open source Django blog application
---

Want your blog engine to be used by <a href="http://www.nasa.gov/">NASA</a>?<br /><br />Unlike everyone else in the <a href="http://djangoproject.com/">Django</a> world, I have not written a blog application.<br /><br />Instead I want to use your blog application. Definitely for my upcoming blog transfer to my own personal site (Blogger's limitations annoy me), and possibly for use in <a href="http://nasascience.nasa.gov/">NASA Science Mission Directorate</a> <a href="http://pydanny.blogspot.com/search/label/spacebook">Spacebook</a> project. So what am I looking for in your blog?<br /><br />In no particular order these are the must-haves:<br /><ul><li>Elegant user interface.<br /></li><li>Follows Django/Python best practices.</li><li>Easy to integrate into another application (which should be the case if you followed the above point).<br /></li><li>Code highlighting via pygments.</li><li>Relies on JQuery for JavaScript, and degrades properly.</li><li>Publishes legal RSS feeds.</li><li>Allows for use of several input formats (Restructured Text, Markdown, etc)<br /></li><li>Hooks for integrating WYSIWYG editor</li><li>Allows for multiple users each with their own blog.</li><li>Renders humanely in FF, Safari, and IE 6, 7, and 8.</li><li>Any sort of decent documentation. </li></ul>In no particular order these are the nice-to-haves:<br /><ul><li>Publishes ATOM feeds.</li><li>Allows for multiple users on a particular blog.</li><li>Already has a WYSIWYG editor.</li><li>Handy import/export functions that follow whatever standards Blogger might have.</li></ul>Candidate killers:<br /><ul><li>I have my own server space. Plus, NASA has its own servers. So Google App Engine compliant blog systems need to also support the standard Django ORM.</li><li>I am doing this in Django/Pinax/Python/PostGreSql on Linux. Systems that do not play well there need not apply.<br /></li></ul>What do you get out of this if I pick your blog engine?<br /><br />Well, as much as I am a fan of <a href="http://pinaxproject.com/">Pinax</a>, the default blog application doesn't do everything we want it to do for Spacebook. So your application might become the blog engine used by us. And when we launch, we'll be sharing credit with anyone who contributed from the open source community to our efforts.<br /><br /><b>Edit on August 26th, 2010</b>: I solved how to do this research by co-authoring <a href="http://djangopackages.com/">Django Packages</a> which gives us this <a href="http://www.djangopackages.com/grids/g/blogs/">handy referenc</a>e. Also, at this point in time, as part of larger systems, I've written several blog systems for clients.