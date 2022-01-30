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
- legacy-blogger
time_to_read: 5
title: Show me your open source Django blog application
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2009/04/show-me-your-open-source-django-blog.html)*.

Want your blog engine to be used by <a href="http://www.nasa.gov/">NASA</a>?<br /><br />Unlike everyone else in the <a href="http://djangoproject.com/">Django</a> world, I have not written a blog application.<br /><br />Instead I want to use your blog application. Definitely for my upcoming blog transfer to my own personal site (Blogger's limitations annoy me), and possibly for use in <a href="http://nasascience.nasa.gov/">NASA Science Mission Directorate</a> <a href="http://pydanny.blogspot.com/search/label/spacebook">Spacebook</a> project. So what am I looking for in your blog?<br /><br />In no particular order these are the must-haves:<br /><ul><li>Elegant user interface.<br /></li><li>Follows Django/Python best practices.</li><li>Easy to integrate into another application (which should be the case if you followed the above point).<br /></li><li>Code highlighting via pygments.</li><li>Relies on JQuery for JavaScript, and degrades properly.</li><li>Publishes legal RSS feeds.</li><li>Allows for use of several input formats (Restructured Text, Markdown, etc)<br /></li><li>Hooks for integrating WYSIWYG editor</li><li>Allows for multiple users each with their own blog.</li><li>Renders humanely in FF, Safari, and IE 6, 7, and 8.</li><li>Any sort of decent documentation. </li></ul>In no particular order these are the nice-to-haves:<br /><ul><li>Publishes ATOM feeds.</li><li>Allows for multiple users on a particular blog.</li><li>Already has a WYSIWYG editor.</li><li>Handy import/export functions that follow whatever standards Blogger might have.</li></ul>Candidate killers:<br /><ul><li>I have my own server space. Plus, NASA has its own servers. So Google App Engine compliant blog systems need to also support the standard Django ORM.</li><li>I am doing this in Django/Pinax/Python/PostGreSql on Linux. Systems that do not play well there need not apply.<br /></li></ul>What do you get out of this if I pick your blog engine?<br /><br />Well, as much as I am a fan of <a href="http://pinaxproject.com/">Pinax</a>, the default blog application doesn't do everything we want it to do for Spacebook. So your application might become the blog engine used by us. And when we launch, we'll be sharing credit with anyone who contributed from the open source community to our efforts.<br /><br /><b>Edit on August 26th, 2010</b>: I solved how to do this research by co-authoring <a href="http://djangopackages.com/">Django Packages</a> which gives us this <a href="http://www.djangopackages.com/grids/g/blogs/">handy referenc</a>e. Also, at this point in time, as part of larger systems, I've written several blog systems for clients.

---

## 21 comments captured from [original post](https://pydanny.blogspot.com/2009/04/show-me-your-open-source-django-blog.html) on Blogger

**Kurt Schwehr said on 2009-04-09**

NASA Ames is looking at django and I'm working with some people at JPL who might be interested in django.<br /><br />I'll be curious to hear how it goes for your projects.<br /><br />-kurt<br />http://schwehr.org

**Dyadya Zed said on 2009-04-09**

You should definetely check Byteflow http://byteflow.su/ . It has impressive number of features and very clean codebase. Actually I am going to use it for my personal blog.

**Marco said on 2009-04-09**

hostable on GAE would be a + ? :)

**pydanny said on 2009-04-09**

@kurt: I would love to talk with you guys! I wonder if there is a NASA Django mailing list. On Spacebook we will be able to create that easily enough, and within the NASA domain. <br /><br />If you have VPN access to the NASA network you could try out the Spacebook proof of concept! We are working on the real version now, but when it goes beta we'll invite you.

**pydanny said on 2009-04-09**

@Dyadya: Thanks for the recommendation! We'll take a look at it!<br /><br />@1st Apple Hater: Hostable on GAE means nothing. I have my own server space. Working for a US Government agency means I can't host on GAE. I'll change the blog post to reflect the lack of need for GAE.

**pydanny said on 2009-04-09**

@Malcom: NASA as an agency uses RSS as a standard. Yes, RSS has something like 9 variations, but I do not call the shots and hence RSS is a requirement. ATOM support is therefore something that I wouldn't mind doing but is not a requirement.

**pydanny said on 2009-04-09**

@Barbara: Thanks for the recommendation!

**Alexander Solovyov said on 2009-04-10**

Actually Byteflow meets your requirements, except ability to integrate easily - it's not a application, it's a project. Though of course you can get only parts you need, I believe that code is pretty good. ;-)

**Doug Hellmann said on 2009-04-10**

Have you looked at Zine (http://zine.pocoo.org/)?

**pydanny said on 2009-04-10**

@Anonymous: Lets just say that I would really, really prefer to publish everything in Atom, but the formal requirement is for RSS.

**pydanny said on 2009-04-10**

@Doug Hellmann: I looked at Zine before I got into Django and Pinax. Looks spiffy! However, since I need a Django app that I can plug into Pinax, Zine just won't do. :(

**Bruce said on 2009-04-12**

@anon: I'm not sure you could say that RSS 1.0 is an "American standard" particularly since it's RDF (and so is extensible).

**Will McGugan said on 2009-04-12**

Hi,<br /><br />You might want to consider my own offering, <a href="http://www.willmcgugan.com/tag/techblog/" rel="nofollow">Django Tech Blog</a>.  It's pretty close to what you are looking for -- and I could help you get it there!<br /><br />Will McGugan

**Gert Van Gool said on 2009-04-13**

Would <a href="http://github.com/mightylemon/mightylemon" rel="nofollow">mightylemon</a> do? It's the code from http://oebfare.com/

**pydanny said on 2009-04-13**

@Gert: Since it was created by one of the core-devs of Pinax, I have looked at Oebfare and I like it a lot. I may slurp out pieces of it.

**Jeff said on 2009-04-14**

Can Pinax's default blog tool be enhanced to provide what you are missing?

**pydanny said on 2009-04-14**

@jocknerd, Normally I would say yes. And it might come to that. The issue though is fitting that into my schedule by formal due dates.

**pydanny said on 2009-04-18**

@Will McGugan,<br /><br />You wrote the Pygame book my son and I have! Awesome!

**Tobias McNulty said on 2010-01-12**

What did you end up using?  We're looking for something similar and the &quot;Easy to integrate into another application&quot; part is killing my search...

**Ivan said on 2010-01-25**

Dear Danny<br /><br />Did you get very far with this?  <br /><br />I am picking a choosing bits to go into a Django-base site.  I noticed your CMS call (and I'm now weighing up Django-CMS and FeinCMS).<br /><br />Did you come to a shortlist for a blog app?<br /><br />Best wishes<br /><br />Ivan

**pydanny said on 2010-01-25**

Ivan, <br /><br />If I were to make a stand-alone blog for Django I would go with django-mingus. For something that goes into Pinax, I would choose http://github.com/eldarion/biblion once its ready.

