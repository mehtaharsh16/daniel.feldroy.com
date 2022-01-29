---
date: '2007-11-29T08:58:00.000-08:00'
description: ''
published: true
slug: 2007-11-capturing-shell-output-in-python
tags:
- python
- legacy-blogger
time_to_read: 5
title: Capturing shell output in Python
---

I need to capture the terminal text returned after I run some shell commands to create SVN repos.  Unfortunately, os.system() doesn't capture the text, just the numeric value.  Fortunately, Python has the command library.  So now I can do this:<br /><br /><pre class="prettyprint-py">>>> import commands<br />>>> print(commands.getstatusoutput('ls -l'))<br />(0, 'total 0\ndrwxr-xr-x    9 dgreenfe  dgreenfe  306 Nov 28 19:02 bar\ndrwxr-xr-x   11 dgreenfe  dgreenfe  374 Nov 28 19:02 baz\ndrwxr-xr-x    9 dgreenfe  dgreenfe  306 Nov 28 19:00 foo\ndrwxr-xr-x   25 dgreenfe  dgreenfe  850 Nov 27 12:33 svn_bo11282007\ndrwxr-xr-x    9 dgreenfe  dgreenfe  306 Nov 29 10:37 tsvn1\ndrwxr-xr-x    9 dgreenfe  dgreenfe  306 Nov 29 10:46 tsvn2')</pre>