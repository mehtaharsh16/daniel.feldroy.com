---
date: '2007-05-23T11:20:00.000-07:00'
description: ''
published: true
slug: 2007-05-interfaces-in-zope-3-and-five
tags:
- feedfeeder
- plone
- python
- interfaces
- zope
- five
- atom
- rss
- legacy-blogger
time_to_read: 5
title: Interfaces in Zope 3 and Five
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/05/interfaces-in-zope-3-and-five.html)*.We use Plone a lot on the job.  And Plone is leaning towards Zope 3 these days, which means Interfaces (thanks to Zope 2's inclusion of Five)!  Until now I've not had a reason to really poke at Interfaces, because Python, unlike Java, doesn't really need them.  Also, the Plone work I've done so far has been via UML, external methods, views (ZPT), and fancy install scripts.<br /><br />However, now I'm working with <a href="http://plone.org/products/feedfeeder">feedfeeder</a>, a Plone ATOM/RSS handler and we need to extend it to include an image-of-the-day content type.  And feedfeeder is built with a lot of Interfaces and Five technology.<br /><br />Alas, I don't have a Zope 3 book handy here at work.<br /><br />Until my copy comes in, I'm using the <a href="http://worldcookery.com/files/ploneconf05-five/">Zope 3 tutorial</a> created by the Zope 3 book author.  Good stuff indeed.  I'll post my thoughts when I'm done.