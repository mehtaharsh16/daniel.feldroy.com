---
date: '2007-05-16T10:37:00.000-07:00'
description: ''
published: true
slug: 2007-05-beautiful-soup-is-beautiful
tags:
- beautiful soup
- python
- legacy
time_to_read: 5
title: Beautiful Soup is Beautiful
---

I have a bunch of content stored on an old instance of <a href="http://www.pmwiki.org/">pmwiki.</a>  I've never liked pmwiki, since it seems to only have a half-hacked state method, and just in general feels insecure.  Also, I've found that wikis can be useful, but if you have short content on each page, often a FAQ style treatment will do better than a regular wiki.<br /><br />So I decided to convert the pmwiki pages into a <a href="http://www.pbwiki.com">pbwiki</a> toc construct.  It would put all the content onto one page, and use the  tag to provide a top level table of contents.  That meant I would have to:<br /><ol><li>Scrape the pmwiki content index for all the meaningful links.</li><li>Scrape out the title and urls of each link.</li><li>Grab the content from each link.</li><li>Reformat it all to work in the pbwiki format.</li></ol>I've done screen scraping before, but not in Python, and not in this scope of effort.  Well, Python seems to do everything well so I opened up htmllib and started to play, thinking I would be done by brunch-time.<br /><br />Immediately I'm unhappy with htmllib.  The docs suck.  And it just seems awkward to use once I figure it out.  Doesn't feel Pythonic, although I'm sure I'm wrong in that respect somehow.  Its just for me, my Python pseudo code often ends up being close to the end effort.  And this was not the case.<br /><br />Then a work buddy told me about <a href="http://www.crummy.com/software/BeautifulSoup/">Beautiful Soup</a>.  Its an HTML/XML parser that is real easy to use and can work with badly formed HTML, like the sort that pmwiki sometimes generates.  Its not optimized for speed, but for usability.  Thats fine with me, because this is a one-time operation on maybe 150-200 entries.<br /><br />The final effort worked real nice.  Not super fast, but real easy to code.  Beautiful Soup meant what I thought would be a quick and simple task remained so.