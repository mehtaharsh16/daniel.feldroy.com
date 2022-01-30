---
date: '2007-05-25T09:00:00.000-07:00'
description: ''
published: true
slug: 2007-05-image-of-day-extension-of-feedfeeder
tags:
- feedfeeder
- plone
- interfaces
- zope
- five
- atom
- rss
- legacy-blogger
time_to_read: 5
title: Image of the Day 'extension' of FeedFeeder experience
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/05/image-of-day-extension-of-feedfeeder.html)*.<font size="5">Introduction</font><br /><br />For a huge work project I was asked to extend <a href="http://plone.org/products/feedfeeder">FeedFeeder</a> so we could have an image of the day type.  I like FeedFeeder and this would give me the chance to speed up on Five and Zope 3.  I was so excited!  Five turned out to be lots of fun and not that hard to learn.  Zope 3 Products looked like tons of fun, sort of like Plone products on steroids or J2EE done right.<br /><br />And yet the effort turned into an exercise of frustration.  Why?<br /><br />The thing I like about Plone (and now Five / Zope 3 (Z3)) is that once you grok something, it is really easy to make new content types or extend new ones.  You can do that via UML using ArchGenXML, or simply code it out yourself.  I really enjoy this part of plone, being able to handle new content types so easily.<br /><br /><font size="5">Things go downhill</font><br /><br />Alas, FeedFeeder is a weird amalgam of ArchGenXML output and Five technology.  ArchGenXML generated a lot of the boilerplate, but then the authors went and did things in all sorts of weird places that violate what you are supposed to do with ArchGenXML output.  It is very obvious that FeedFeeder is the designer's method of learning and Five and component based design.  Which is nice, but what you get is something that is very hard to extend and control.  By combining ArchGenXML and Zope 3 and Five the way they did, it is actually more work to make it do what we want.<br /><br /><br />Normally adding a new content type in Plone / Five / Zope 3 / ArchGenXML, you just extend/implement an existing content type  and modify either a ZCML (Z3, Five) or Install.py (Plone) or AppInstall (ArchGenXML) and maybe stick in an adapter (Z3, Five).  Well, not so much in FeedFeeder, where to add an extended/new content type you have to modify the following: configure.zcml, install.py, and pretty much rebuild the content type from scratch.  Then add in views and skins.  Then pray it works.  Just getting a simple extension without any modification to work was looking to be way, way to much work.<br /><br />After working on it for hours yesterday at CC, and an hour last night, and during the wee hours between 3 and 5 am when I thought I had an epiphany, I was getting really frustrated.  This wasn't like association classes where I knew that if I could just find the right bits in the lackluster docs it would work, I really felt like I was walking through someone's spaghetti code.<br /><br /><font size="5">The Recovery</font><br /><br />So I start thinking about building my own product from scratch to do the work.  This annoyed me.  <font style="font-weight: bold;">I hate reinventing the wheel. </font> Oh well, time to take notes on what it was doing.  And I discovered right away that Feedfeeder curiously had something called enclosures.  I researched it out, and you know what?  Enclosures where a way to include content in Atom and RSS feeds.<br /><br />I tested it out.  I created a set of sample Atom and RSS feeds with enclosures with images.  Then I created a FeedFeeder folder called 'iotd feed' to grab them.  Then I check, and FeedFeeder grabbed the images and stored them as enclosure objects!<br /><br />POW!!! Done!!! Feedfeeder does it already!  All we need to do now is create a smart folder or view that looks for the 'iotd feed' folder to supply image of the day views!<br /><br /><font size="5">Notes & Lessons learned</font><br /><br /><ul><li>    I'm still not happy with FeedFeeder's internal architecture.  But since out of the box it does everything we need and probably more, do we need to care?</li><li>    When I hit a brick wall like this I need to do more research.  Especially when it comes to something that is using a standard.  For example, I need to get a 100% understanding of something before I start trying to invent something new.</li><li>    Time Summary:</li><ul><li>          Time spent learning Five: 1 hour</li></ul><ul><li>          Time spent playing with Zope 3: 2 hours</li></ul><ul><li>          Time spent trying to extend FeedFeeder gracefully: 4 hours</li></ul><ul><li>          Time spent extending FeedFeeder via gruesome hacking: 2 Hours</li></ul><ul><li>          Time spent examining FeedFeeder for things needed in a new product: 15 minutes</li></ul><ul><li>          Time spent researching Atom/RSS for how they handle enclosures: 5 minutes</li></ul><ul><li>          Time spent testing out how FeedFeeder handled enclosures: 15 minutes</li></ul><ul><li>          Total Time: 9 hours and 35 minutes</li></ul><li style="font-weight: bold;">    Lesson Learned: Do your @#$%ing research before you commence work!</li></ul>

---

## 3 comments captured from [original post](https://pydanny.blogspot.com/2007/05/image-of-day-extension-of-feedfeeder.html) on Blogger

**Reinout van Rees said on 2007-05-25**

Glad that you managed to get it working :-) Feedfeeder is designed to make it possible to extend it, even by reacting to some microformats in there.<br /><br />I was the one that made a quick initial version with archgenxml and then turned it over to Rocky for the zope3 stuff. I should really really have taken more time cleaning out unneeded archgenxml bits :-)<br /><br />Figuring out the various ways in which you can extend feedfeeder can be a challenge, especially since the customer didn't pay for much documentation. We were paid by Philips, however, to turn it into a real open source product. <br /><br />Thanks a lot for sharing your experience with the rest of us, I'm sure certain individuals (me included) will keep your comments in mind the next time we look at the code!

**pydanny said on 2007-05-31**

Thanks much for the commentary.  I think the product is well done and as I said, I wish I had looked at it more carefully before trying to extend it.  :-)<br /><br />When you start working on the code, please let me know somehow.  I would love to get involved.  FeedFeeder is the best aggregator for Plone and I would love to work on it.

**Christoph said on 2008-09-10**

Thanks for writing on your experience with FeedFeeder. I kind of fell in love with it, but I got my difficulties in ruling it. <br />I have a quite similar situation and want to display the images that FeedFeeder saves to the plone site. How did you mange to actually display the files inside the collection and inline the browser? Since Feedfeeder stores the enclosures as "files" I got my difficulties in actually displaying them inside a collection as images.<br />I hope I made my problem clear and it seems not stupdi to ask you down here. <br /><br />Thanks in advance<br /><br />Christoph

