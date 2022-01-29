---
date: '2008-04-24T09:07:00.004-07:00'
description: ''
published: true
slug: 2008-04-what-i-want-in-feed-aggregator
tags:
- django
- beautiful soup
- feedparser
- grok
- GAPE
- rss
- wxpython
- legacy-blogger
time_to_read: 5
title: What I want in a feed aggregator
---

The list is simple:<br /><ol><li>One page that displays all the content.  Maybe do some pagination, or hide descriptions and just show titles.  Otherwise have tags, author, description, and link to original post.<br /></li><li>One page with a text area that accepts one feed per line.</li><li>Include some sort of authentication.</li></ol><span style="font-weight: bold;">Ways to get this done</span><br />Google App Engine handles #3 for me nicely and gives me free hosting.  But feedparser doesn't play well with it and I'm not about to do that kind of debugging.  Maybe I ought to try BeautifulSoup?<br /><br />I'm tempted to try a pure Django system, since that could handle all three, but then I would have to pay for hosting.  The same would go for Grok as well.  I don't want to pay for hosting yet.  Or maybe I ought to just pony up a few bucks a month anyhow...<br /><br />Of course, I can always write my own simple wxPython client.<br /><br />What to do... what to do...<br /><br /><span style="font-weight: bold;">Update:</span> Never code on two hours sleep.  I'm going with Google app Engine because I realized that when you import of feedparser you can't do this:<br /><blockquote>import feedparser.py<br /></blockquote>