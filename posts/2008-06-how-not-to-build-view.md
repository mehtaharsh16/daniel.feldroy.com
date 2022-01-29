---
date: '2008-06-02T08:28:00.004-07:00'
description: ''
published: true
slug: 2008-06-how-not-to-build-view
tags:
- plone
- python
- zope
- five
- legacy-blogger
time_to_read: 5
title: How not to build a view
---

I like simple, sweet, and easy to use.  Which means sometimes Zope 3 style things are awesome, and other times it sucks.  What's worse is implementations you have to maintain where someone took something very simple and made it very complex.<br /><br />In our case study, lets see what a predecessor to me did using Plone and a lot of Five:<br /><ol><li>Extended the ATEvent type.</li><li>Created a <span style="font-weight: bold;">view</span> using portal_catalog.  This creates an <span style="font-weight: bold;">object</span> which calls another <span style="font-weight: bold;">object</span> which calls a specific <span style="font-weight: bold;">function</span> to grab relevant data from each brain object and place that data in a dictionary.</li><li>Made the view, 2 objects and functions <span style="font-weight: bold;">bolded</span> above not as extensions as other bits that existed elsewhere but coded them individually.</li><li>Tied it together with zcml.<br /></li></ol>The end result was a results object containing brains and a counter.  Um... okay.  I understand this was done so that the Plone template serving this would have the batch features and all, but this is over engineering. <br /><br />I think a better solution would have been this:<br /><ol><li>Extend the ATEvent type.</li><li>Create a utility package with code to be reused in creating batches later.</li><li>Make the view call the utility package so you don't have to code much.</li><li>Tie it together with zcml.</li></ol>I like this method.  The better developers I work with and the gurus I admire will tell you any time you write the same section of code more than once you should look at code reuse techniques.  Either wrap your code in functions, use inheritence, or play with polymorphism.  All that good stuff.<br /><br />Sigh. <br /><br />At least I get paid to maintain this code.  Finally it isn't in the NASA effort.