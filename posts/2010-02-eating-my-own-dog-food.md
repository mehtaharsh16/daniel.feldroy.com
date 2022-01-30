---
date: '2010-02-10T07:43:00.007-08:00'
description: ''
published: true
slug: 2010-02-eating-my-own-dog-food
tags:
- django
- python
- pinax
- blog
- legacy-blogger
time_to_read: 5
title: Eating my own Dog Food
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/02/eating-my-own-dog-food.html)*.

For several years now I've hosted this <a href="http://pydanny.com/">blog</a> here on <a href="http://blogger.com/">blogspot/blogger</a>. Its been both a good and bad experience. For writing out simple posts it has made things pretty easy. However, if I try to post code examples I've got to deal with the various quirks of the blog engine. How it escapes special characters and that you can't easily do color colorization has been really annoying. Yes, I know you can do some hoop jumping to make this work, but I decided a long time ago that if I had to do that then I would host my own blog.<div><br /></div><div>Speaking of which, a few months back I got called out for not <a href="http://en.wikipedia.org/wiki/Eating_one's_own_dog_food">eating my own dog food</a>. Yup, as a <a href="http://python.org/">Python</a> developer shouldn't I use something Python powered? I currently do <a href="http://djangoproject.com/">Django</a> professionally so those are in my tool chest so this should be trivial. Heck I also do some serious <a href="http://pinaxproject.com/">Pinax</a> work so why not that?</div><div><br /></div><div>Whatever I put it under, it would be a nice move. I would be able to format and control my blog to a much better degree. I could easily supply code examples. I could use the hosting to demonstrate pet projects or launch some of the things I've wanted to try for some time.</div><div><br /></div><div>So which blog to use? Roll my own?</div><div><br /></div><div>Heck no.</div><div><br /></div><div>I've got a <a href="http://nasascience.nasa.gov/">full-time job</a>, I teach 10+ hours a week, and my <a href="http://holdenweb.com/">consulting</a> <a href="http://eldarion.com/">efforts</a> eat up a chunk of my free time. So rather than use my energy to reinvent the wheel, I would rather rely on the hard work and labor of others.</div><div><br /></div><div>With that in mind, I really, really like <a href="http://github.com/montylounge/django-mingus">Django-Mingus</a>. Out of the box it does everything that I want and is a breeze to get up and running. It has a large, active community and it even uses a project that has my name attached, <a href="http://github.com/pydanny/django-wysiwyg">django-wysiwyg</a> (although <a href="http://chris.improbable.org/">Chris Adams</a> did most of the work).</div><div><br /></div><div>Some might ask the good questions as to why I'm not using Pinax for my new blog. In essence, I wanted to do something in the wild that wasn't Pinax powered and my concept projects all use Pinax. So don't worry, I'll be doing Pinax work for as long as I can foresee.</div><div><br /></div><div>So I've begun working on it during the <a href="http://www.flickr.com/photos/pydanny/sets/72157623364245346/">Blizzard of 2010</a>. I'll have it up today unless we lose power or Internet.</div>

---

## 7 comments captured from [original post](https://pydanny.blogspot.com/2010/02/eating-my-own-dog-food.html) on Blogger

**dartdog said on 2010-02-10**

Can't wait to see what you do with Mingus, I may be able to help with some questions? Where are you going to host? I'm on Webfaction FWIW, they seem ed to have the lowest pain threshold for a newbie like me, and support SSH and GIT.

**pydanny said on 2010-02-10**

@dartdog, for now I'm on WebFaction. I too like the SSH and GIT support. Also, I would rather be coding than doing Sys Admin and what they give out of the box suits my needs grandly. So I look forward to your help!<br /><br />I'm no artist though so until I find a design I like I'll just stick with their Django design.

**kevin said on 2010-02-10**

Terrific! Let me know how the Mingus launch goes.

**Chris Adams said on 2010-02-10**

Good idea - I have some <a href="http://gist.github.com/240809" rel="nofollow">rough install notes</a> from when I brought my site up in November which might be useful.

**pydanny said on 2010-02-10**

Chris, my current issue is with getting the media to display. Right now I just have a dull and bland site without CSS or JS. :P

**pydanny said on 2010-02-10**

Anonymous, messagecms has a really pretty website. But since I posted my CMS request and review nothing about the site has changed, including release of their code as open source.<br /><br />So I'm going to throw down the gauntlet. I declare the open sourcing of messagecms to be Vaporware.

**pydanny said on 2010-02-15**

@stevenhaddox,<br /><br />I have the new site up, but haven't migrated over all the blog entires. I probably won't do that now - will likely just link to the previous entries for now.<br /><br />The hold up now is that I want to change the style a bit and haven't had time to do that yet.

