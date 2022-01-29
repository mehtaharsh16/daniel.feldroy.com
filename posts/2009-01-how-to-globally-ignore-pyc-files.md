---
date: '2009-01-05T08:52:00.004-08:00'
description: ''
published: true
slug: 2009-01-how-to-globally-ignore-pyc-files
tags:
- python
- legacy
time_to_read: 5
title: How to globally ignore .pyc files
---

This has been driving me nuts. Sure, I run svn propset on directories and do so recursively, but I've hated having to remember to do it. Well, I just did it globally!  How? I found my subversion config file!<br /><blockquote>emacs ~/.subversion/config<br />global-ignores = *.pyc<br />ctrl-x-s<br />ctrl-x-z</blockquote>Yeah! No more annoying .pyc!