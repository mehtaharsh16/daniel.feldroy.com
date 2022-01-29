---
date: '2008-04-27T11:49:00.005-07:00'
description: ''
published: true
slug: 2008-04-feedparser-does-not-work-with-google
tags:
- feedparser
- python
- GAPE
- legacy
time_to_read: 5
title: Feedparser does not work with Google App Engine
---

After my laughable mistake of trying to do a <span style="font-weight: bold;">import feedparser.py</span>, I sat down yesterday and spent half an hour writing my rss aggregator for Google App Enginer.  Critical, of course, was use of the excellent <span style="font-weight: bold;">feedparser</span> project.  It was easy to get everything working, and while not styled it looked good.  Everything except for using Feedparser to parse the incoming rss and atom feeds.<br /><br />Alas, Feedparser tries to use a few modules that the enterprising folks at Google restricted.  I haven't done any research yet, but I wonder if it is in the arena of fetching data from URLs, since app engine has its own library.  I'll poke at it tomorrow.<span style="font-weight: bold;"></span><br /><br />In any case, I was very pleased with Google App Engine.  Lets go over why:<br /><ul><li>Database is not a RDBMS.  Some people might scream at this issue, but the benefits we get are wonderful.  Expando seems really fun to use.  </li><li>Built-in ORM.  Sure, its not SQLAlchemy or the Django system, but its not that far different in approach and implementation.</li><li>Django Templates!  If I'm not doing TAL and I'm doing XHTML/XML, then my choice is Django. Templates.  </li><li>Cleanly documented.  Clear and simple sentences with good examples that are working code, not doc or CLI tests.  </li><li>Easy and intuitive.  This part is critical. The framework is not in the way.</li></ul><span style="font-weight: bold;">Update: </span>Apparently Feedparser works with GAPE.  Either something changed about GAPE (feedparser hasn't been updated in a while) or maybe I had a bug.  Thanks to <a href="http://www.blogger.com/profile/01444733525137234264">Alex UK</a> and crchemist for pointing this out.