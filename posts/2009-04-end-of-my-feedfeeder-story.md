---
date: '2009-04-07T23:00:00.002-07:00'
description: ''
published: true
slug: 2009-04-end-of-my-feedfeeder-story
tags:
- beautiful soup
- feedfeeder
- feedparser
- plone
- apology
- xml
- legacy-blogger
time_to_read: 5
title: The end of my Feedfeeder story
---

Another post about <a href="http://plone.org/">Plone</a>... but this time about me and not about Plone.<br /><br />For about 18 months I have wrestled with consuming broken RSS feeds to pick up image of the day fields stipulated by customers. These are feeds so broken that no RSS parser, including the masterful <a href="http://feedparser.org/">Feedparser</a>, can handle them (for example, one image of the day feed usually puts the image in the RSS header and changes that each day - no history is maintained). They aren't actually RSS, they just possess a file name that ends with '.rss'. Plus, periodically the way they are written changes so custom logic fails.<br /><br />I have forked R<a href="http://reinout.vanrees.org/">einout van Rees</a> <a href="http://plone.org/products/feedfeeder">FeedFeeder</a> project, and even proposed complicated logical revisions to handle broken these broken feeds and their shifting implementation. I called it Feedfeeder v2. Reinout always seemed hesitant, and I watched as other people extended on his work and despaired. I knew something was wrong but couldn't put my finger on it. I hesitated to work on it, even though funding for it was readily available.<br /><br />Then between <a href="http://pydanny.blogspot.com/search/label/spacebook">Spacebook</a>, <a href="http://pydanny.blogspot.com/search/label/pinax">Pinax</a>, and other efforts I shelved this effort for months, hiding my head in the virtual sand. And yet I knew it needs to be addressed. How could I handle something that broke the otherwise wonderful Feedparser?<br /><br />During <a href="http://us.pycon.org/">Pycon 2009</a> I came up with the answer. I took an excellent tutorial on html scraping and learned lots of little tricks to reinforce my skills with <a href="http://www.crummy.com/software/BeautifulSoup">BeautifulSoup</a>. You see, screen scraping is a secret pleasure I have. Scraping out a bit of data from a page is like a little puzzle. When I talked about this to someone, in the middle of my discussion with them the answer became clear as day.<br /><br />The answer was to turn the problem from a RSS interpretation problem to a simple web page scraping puzzle.<br /><ol><li>Fetch via urllib the XML file that pretends to be RSS.</li><li>Parse it using BeautifulSoup or <a href="http://code.google.com/p/html5lib/">html5lib</a>.</li><li>Get all the images listed.</li><li>Discard all but the largest image.</li><li>Guess out the meta-data from the XML file and store that for the image.</li></ol><span style="font-weight: bold;">Problem solved.</span><br /><br />Now I just need to make a Plone 3 package to do this for me and my angst is finished.<br /><br />My apologies Reinout for the time spent on trying to cook a solution via Feedfeeder. Thank you for your insights and your extreme patience. I think you tried to tell me to take a different path.