---
date: '2011-09-14T09:39:00.000-07:00'
description: ''
published: true
slug: 2011-09-history-of-my-most-used-shell-commands
tags:
- pip
- virtualenv
- git
- mac os
- buildout
- legacy-blogger
time_to_read: 5
title: History of my most used shell commands
---

<a href="http://pydanny.blogspot.com/2008/04/history-of-my-most-used-shell-commands.html">I ran this a few years back</a>&nbsp;and I'm running it again today.<br /><br />What is interesting is that compared to the older history, <a href="http://git-scm.org/">git</a> has replaced svn, <a href="http://pypi.python.org/pypi/pip">pip</a> has replaced easy_install, and <a href="http://pypi.python.org/pypi/virtualenv">virtualenv</a> has now completely subsumed buildout. Oh, how the mighty have fallen!<br /><pre class="prettyprint">$ history | awk '{a[$2]++ } END{for(i in a){print a[i] " " i}}'|sort -rn |head -n 20<br /><br />209 git<br />123 python<br />34 ls<br />31 mate<br />18 cd<br />14 pwd<br />9 hg<br />8 touch<br />7 rm<br />6 cp<br />5 pip<br />5 mv<br />5 django-admin.py<br />4 mkvirtualenv<br />3 mysql<br />3 mkdir<br />3 bash<br />2 deactivate<br />2 add2virtualenv<br />1 workon</pre>