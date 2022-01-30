---
date: '2008-06-30T13:52:00.003-07:00'
description: ''
published: true
slug: 2008-06-me-grok-smash
tags:
- grok
- review
- graphviz
- zope
- legacy-blogger
time_to_read: 5
title: Me Grok Smash!
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2008/06/me-grok-smash.html)*.So as I started on yet another graphviz application for the web, I decided to go with a new framework.  I would use <a href="http://grok.zope.org/">Grok</a>!<br /><br />Grok comes out of the Zope community, and has its foundation in the rather mature components of that application server.  The difference is that tying bits of Grok together does not rely on seemingly arcane xml files.  You just code in Python and a bit of <a href="http://wiki.zope.org/ZPT/TALSpecification14">TAL</a> for the views.  If you want you can leverage in more bits from the Zope world, such as zope.formlib and other interesting bits.<br /><a href="http://pydanny.blogspot.com/2008/04/issues-with-zopeformlib.html"><br />It is a matter of public record that I have a like/hate relationship with zope.formlib.</a><br /><br />There are some really nice things I discovered about Grok:<br /><ul><li>Intuitive.</li><li>Only one magic bit, in that class defined as views look for their lowercase template automatically, and you can override this if you like.</li><li>The framework is out of the way.</li><li>Inheriting models is a cinch.</li><li>Lets you play with either the ZODB or SQL ORMs.</li><li>Easy use of TAL.</li></ul>Some negatives:<br /><ul><li>A possible gotcha when you instantiate an object inside another object requires you to do a super(MyObject, self).__init__() inside the object's __init__.  Not sure why I should have to write this out and it might be I did something wrong.</li><li>Um... still trying to find faults.</li></ul>I'm rather pleased.  Grok has grown up lots since I really looked at it in late autumn of 2007.  I look forward to working with it more.