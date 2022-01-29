---
date: '2007-07-13T09:04:00.000-07:00'
description: ''
published: true
slug: 2007-07-playing-with-catalog-brains
tags:
- legacy
time_to_read: 5
title: Playing with Catalog brains
---

So after a month of doing a lot of work with Plone content type modules, references, relations, catalog searches and teaching graphic designers basic TAL concepts, I've picked up some interesting habits. <br /><br />First off, brains are better than tuples.  And unlike in my <a href="http://pydanny.blogspot.com/2007/06/thought-on-methods-in-plone.html">previous post</a><br />, I now now that to get a full object off a brain you can just do something like this: <span style="font-weight: bold;">[div repeat="item itemBrain/getObject"][/div]</span>.<br /><br />I also ran into problems with objects that are related to objects with are related to objects which are related to objects.  How do you find them and make sure you don't have duplicates and all of them are published?  Well, I wrote a method to handle that.  You run it on the context and give a list of the necessary default accessors. Maybe the Relation product has something for it already, and people will make fun of me.  Or maybe not...<br /><br />Anyway, Plone isn't just fun, its productive.  I can't wait for our project to hit the real world.