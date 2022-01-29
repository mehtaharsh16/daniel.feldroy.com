---
date: '2008-11-14T09:52:00.003-08:00'
description: ''
published: true
slug: 2008-11-subscribers-zope-3-style
tags:
- zope
- legacy-blogger
time_to_read: 5
title: Subscribers Zope 3 style
---

Vernon Chapman shared this with me.  Very elegant.<br /><br />configure.zcml (brackets replacing XML open/close because Blogspot sucks!)<br /><blockquote>[subscriber for="<span style="color: rgb(0, 102, 0);">Products.CMFCore.interfaces.IActionSucceededEvent</span>"<br />    handler="<span style="color: rgb(0, 102, 0);">.handlers.</span><span style="color: rgb(0, 102, 0);">vernstuff_content_thing</span>" /]</blockquote>handlers module<br /><blockquote><span style="color: rgb(0, 0, 153);">def</span> <span style="color: rgb(0, 0, 102);">vernstuff_content_thing</span>(event):<br /><span style="color: rgb(0, 102, 0);">"""This will do all the work"""</span><br />action_as_string = event.action<br />content = event.object<br /><span style="color: rgb(0, 102, 0);"># Do whatever you like here</span></blockquote>