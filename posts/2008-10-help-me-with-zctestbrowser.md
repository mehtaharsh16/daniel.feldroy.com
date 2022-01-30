---
date: '2008-10-12T12:01:00.005-07:00'
description: ''
published: true
slug: 2008-10-help-me-with-zctestbrowser
tags:
- plone conference
- beautiful soup
- legacy-blogger
time_to_read: 5
title: Help me with zc.testbrowser
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2008/10/help-me-with-zctestbrowser.html)*.

I like <a href="http://pypi.python.org/pypi/zc.testbrowser/">zc.testbrowser</a>.  Toss in some BeautifulSoup to increase the accuracy of some tests and its a monstrously useful way to run tests.  However...<br /><br />For the life of me I can't get it to properly handle select fields (select or multi-select).  Once I get the control, I can't seem to set select fields as selected.<br /><br />Any help would be appreciated.  This ate way too much of my time.  What should have been a trivial test has caused me no end of frustration.  The <a href="http://pypi.python.org/pypi/zc.testbrowser/">documentation</a> is pretty good, and yet they don't seem to provide how to do this sort of thing.<br /><br />In any case, once answered I plan to put the response in the zc.testbrowser reference card I am cooking up.<br /><br /><span style="font-weight: bold;">Update</span>: Fixed the problem with some help from Aaron Van Derlip.  Basically, since zc.testbrowser doesn't do JavaScript, sometimes you have to submit forms and links the hard way.  I'll be putting that into my upcoming reference card.<em></em>