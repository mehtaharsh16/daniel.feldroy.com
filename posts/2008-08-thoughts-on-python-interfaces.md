---
date: '2008-08-27T10:21:00.003-07:00'
description: ''
published: true
slug: 2008-08-thoughts-on-python-interfaces
tags:
- grok
- python
- interfaces
- zope
- legacy
time_to_read: 5
title: Thoughts on Python interfaces
---

Python does not have interfaces.  Yet people have implemented interfaces in Python via some really innovative code (<a href="http://peak.telecommunity.com/">PEAK</a> and <a href="http://wiki.zope.org/zope3/Zope3Wiki">Zope 3</a> comes to mind, but <a href="http://trac.edgewall.org/">Trac</a> also has them).  Those people have great arguments for interfaces, claiming documentation and enhancement of system structure.  From what I gather the theory is that if you use interfaces its easy to create truly componentized architectures because you know what to expect from a component.<br /><br />Now that said, I find it really amusing how often interfaces end up being just so much boilerplate.  By this, I mean an empty, (or marker), interface.  We are given to understand that one can do so much more, but sometimes a framework demands an interface in a particular place, and often that interface is just plain empty.<br /><br />I've never played with PEAK elements beyond easy_install.  I've toyed with the innards of Trac and been shocked by what makes up the core of that so important software tool.  Zope 3 is weel organized and I've done some shockingly fun stuff there after I got over the Zope 3 ZCML hump.  And in all of that, I barely saw the need for interfaces.  So often I wonder if interfaces are needed.<br /><br />Well, upon reflection for those systems interfaces work surprising well.  The underlying code for Trac might be questionable but anyone can make a plugin by following rules obviously managed by the interface system.  Zope 3 is really nice once you get past the curve because you can make components and tie them easily in knots with ZCML (or with python in the case of <a href="http://grok.zope.org/">Grok</a>).<br /><br />The point of these thoughts?  Nothing really.  I can live with or without interfaces, and use them in the frameworks that need them.