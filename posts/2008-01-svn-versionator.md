---
date: '2008-01-24T05:36:00.000-08:00'
description: ''
published: true
slug: 2008-01-svn-versionator
tags:
- python
- legacy
time_to_read: 5
title: SVN versionator!
---

I'm the one who has been cutting tags for our big project at work.  The problem is that its kind of a pain with a number of steps, and while I've yet to make a mistake, the chances are there.  So last night I decided I ought to build a tag creator in Python.<br /><br />This won't be some generic tool to release on the world.  We've got some application and environment specific things going on that I can't share.<br /><br />That said, I could probably do it in a way to make it generic.  Basically you would create a config file for your location, a SVN externals file, and then when you would run Versionator it would create the tag with just the system version as your only parameter.  And I could probably do it in a way so it would support SVN or Bizare.  Maybe Mercury or Git in the distant future.<br /><br /><br />Hmmmm....