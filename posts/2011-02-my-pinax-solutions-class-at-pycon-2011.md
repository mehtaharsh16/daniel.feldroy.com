---
date: '2011-02-14T09:38:00.000-08:00'
description: ''
published: true
slug: 2011-02-my-pinax-solutions-class-at-pycon-2011
tags:
- pycon
- django
- python
- pinax
- legacy-blogger
time_to_read: 5
title: My Pinax Solutions class at Pycon 2011
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/02/my-pinax-solutions-class-at-pycon-2011.html)*.

Heavily inspired by <a href="http://sheddingbikes.com/posts/1295120282.html">Zed Shaw's Learn Python the Hard Way</a> class I'm changing the lecture style format of the <a href="http://us.pycon.org/2011/schedule/presentations/111/">Pinax Solutions class</a> at&nbsp;<a href="http://us.pycon.org/2011">PyCon 2011</a> to a more workshop-oriented format.<br /><br />Which means that the first half of the class we (myself and the <a href="http://us.pycon.org/2011/speaker/profile/143/">peerless</a> <a href="http://brianrosner.com/">Brian</a> <a href="https://github.com/brosner">Rosner</a>) will spend on material critical for people new to <a href="http://pinaxproject.com/">Pinax</a>&nbsp;or old hands who want to see what 0.9 offers. That means setting things up via virtualenv and pip, Pinax specific settings, media handling, template layout, extending core Pinax apps, use of <a href="https://github.com/eldarion/idios">idios to change profiles</a>, openid/openauth, <a href="http://djangopackages.com/">Django Packages</a> to find Pinax approved stuff and more. That will be the foundation and our slides/handouts will be useful as cheat sheets for these critical parts in any <a href="http://djangoproject.com/">Django</a> application.<br /><br />The second half of the&nbsp;class&nbsp;will be a workshop. We'll spend the next half helping people with their personal projects, and will even have a few stock projects we can toss at people that either already are open source or could be released as open source.&nbsp;We won't write your project for you, but we will provide advice, guidance, and some elbow grease in getting things to work.&nbsp;If someone asks for something that we think the rest of the class could benefit from, we'll show them how to do it on the projector and then everyone benefits.<br /><br />After the class, I'm free the rest of the day so I'll continue helping people even after the tutorial is officially over. Thursday (March 10th, 2011) after lunch I'll be also available to provide aid and support. &nbsp;Anyone else can join but those who attended the Pinax Solutions tutorial will get precedence.<br /><br />During the <a href="http://us.pycon.org/2011/schedule/lists/talks/">main body of the conference</a> I'll be attending talks and giving a <a href="http://us.pycon.org/2011/schedule/presentations/56/">couple</a> <a href="http://us.pycon.org/2011/schedule/presentations/72/">myself</a>&nbsp;so my time to provide aid will likely be completely curtailed.<br /><br />I will be there at the <a href="http://us.pycon.org/2011/sprints/">sprints</a> working on various <a href="http://github.com/djangopackages/djangopackages">Pinax</a> <a href="http://github.com/pydanny/django-uni-form">and</a> <a href="http://github.com/pydanny/django-la-facebook">Django</a> <a href="http://github.com/pydanny/django-tagging-ext">projects</a>.<br /><br />If time permits we'll go over deployment, but I recommend <a href="http://us.pycon.org/2011/schedule/presentations/173/">Jacob Kaplan-Moss' Python/Django Deployment Workshop</a> if you want a full treatment of the subject.<br /><br />Note I: If you've already signed up for the Pinax Solutions tutorial, you should be getting an email from the PyCon tutorial staff shortly.<br /><br />Note II: If you are new to <a href="http://python.org/">Python</a>, I recommend that you take any of the <a href="http://us.pycon.org/2011/schedule/presentations/108/">basic</a> <a href="http://us.pycon.org/2011/schedule/presentations/99/">Python</a> <a href="http://us.pycon.org/2011/schedule/presentations/117/">tutorials</a> at PyCon instead of this class.

---

## 6 comments captured from [original post](https://pydanny.blogspot.com/2011/02/my-pinax-solutions-class-at-pycon-2011.html) on Blogger

**Aza said on 2011-02-15**

Thanks very much guys for providing us with something like Pinax. <br />On the UI side Pinax seems to focus more on jQuery than Dojo (even though we have dojango - which is a great start). <br /><br />Is there a particular reason for this? <br />I prefer Dojo, mainly because of it's syntax and structure.<br /><br />Thanks

**pydanny said on 2011-02-15**

@Aza,<br /><br />We choose JQuery in the heady days of Pinax 0.5a because it was a requirement for Django Uni-Form - which was necessary for the 508ification of Pinax. Also, JQuery is more ubiquitous than Dojo so we could count on easier adoption. In fact, in the 2 years since we choose JQuery you are only the second person I'm aware to wonder why we choose JQuery in particular. ;)

**Aza said on 2011-02-16**

Wow :-) I'm really suprised by that stat. Guess jQuery is doing much better than I thought. <br /><br />I'll just swallow the bitter pill and roll with jQuery then. <br />But for me (w.r.t. syntax and structure):<br />web2py &lt;--&gt; jQuery<br />Django &lt;--&gt; Dojo<br />So I thought, for the same reason we prefer Django over web2py, we would prefer Dojo over jQuery.<br />Do you at least see my line of thinking though?

**pydanny said on 2011-02-16**

@aza - what a unique statement about JQuery vs Dojo. Can you clarify your position?

**PD said on 2011-02-18**

Hi Danny,<br /><br />I've signed up for this tutorial, but I am new to Python and Django. I've signed up for the &quot;Learn Python the hard way' tutorial as well... but I believe this tutorial will be before that one! <br />We're using Pinax on our website, and that is why I signed up for  this. I'm planning to try and get as much as I can out of the online tutorials... but I'm slightly worried now- do you think I will be able to cope with this tutorial?<br /><br />Thanks,<br />Pradnya

**pydanny said on 2011-02-18**

Hi Pradnya,<br /><br />If you go through the entire Django tutorial then you should be good for taking the Pinax Solutions class. <br /><br />Take lots of notes on the things you don't understand. After you take Zed's class a lot of things will make more sense.<br /><br />See you in a few weeks!

