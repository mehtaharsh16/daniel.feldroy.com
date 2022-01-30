---
date: '2009-11-08T08:54:00.006-08:00'
description: ''
published: true
slug: 2009-11-eating-your-own-dogfood
tags:
- november
- django
- blog
- legacy-blogger
time_to_read: 5
title: Eating your own dogfood
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2009/11/eating-your-own-dogfood.html)*.Since way back in 2007 when I blogged about <a href="http://pydanny.blogspot.com/2007/05/json-and-python.html">JSON and Python</a> I've used blogspot as my blog engine. I've never been completely happy with it because it didn't easily support code coloration. Still, it worked, had great up time, and I got used to it.<br /><br />Recently though on <a href="http://twitter.com/pydanny">twitter</a> I've been getting a few dings about using python to host my blog. And since I've now captured <a href="http://pydanny.com/">pydanny.com</a> and <a href="http://pydanny.net/">pydanny.net</a> it makes even more sense. I toyed a few times with writing my own blog engine but while I've done it for my job, I never wanted to do it for myself.<br /><br />So I've been shopping around for what I consider the best blog engine for me. I had a lot of great options thanks to a <a href="http://pydanny.blogspot.com/2009/04/show-me-your-open-source-django-blog.html">blog engine query asked in April</a>. In the end we just extended the <a href="http://pinaxproject.com">Pinax</a> blog engine with a few widgets and that was good enough. Anyway, recently I started to look at those again as viable options.<br /><br />However, one more option presented itself. <a href="http://blog.montylounge.com/">Kevin Fricovsky</a>'s <a href="http://github.com/montylounge/django-mingus/tree">Mingus</a>. It has everything I want in a blog, and also seems to closely follow what I would like to think I would have done in my blog. That is, to say, he fetched bits and pieces from all over the <a href="http://djangoproject.com/">Django</a> ecosphere and assembled them into one universal whole. Yup, I like it a lot.<br /><br />So my plan is over the next week or so is to set it up on a <a href="http://www.webfaction.com/">Webfaction</a> account and start blogging from there.<br /><br />24 more posts to go! (I'm behind on days but plan to make it up with posts)

---

## 4 comments captured from [original post](https://pydanny.blogspot.com/2009/11/eating-your-own-dogfood.html) on Blogger

**Unknown said on 2009-11-09**

Are you planning on documenting the steps you followed to set up django-mingus on webfaction?  I tried a while back, and ran into some issues, so I'd be interested in seeing some better step by step instructions..

**pydanny said on 2009-11-09**

@Mikkel, I'll check out your work since I like Atom a lot.<br /><br />@mwarkentin, I'll definitely blog about my efforts! :)

**Unknown said on 2009-11-09**

I am using App Engine (so... free hosting!) and using Micolog: http://code.google.com/p/micolog/<br /><br />My Blog is at:  http://www.livingubuntu.com<br /><br />It is easy, free, and works with your new domain!

**kevin said on 2009-11-09**

Great to hear! I have a few requests to pull additions into Mingus core, but I've been swamped with moving my home. I should be able to get some in this week. But the 0.8.3 version is well and good enough as is without these pull requests being merged.<br /><br />@Mikkel - I'll ping you about your customizations. Maybe if I give you the commit access to Mingus you can work on getting these features in?

