---
date: '2008-04-10T11:39:00.002-07:00'
description: ''
published: true
slug: 2008-04-history-of-my-most-used-shell-commands
tags:
- mac os
- legacy
time_to_read: 5
title: History of my most used shell commands
---

Courtesy of <a href="http://bruynooghe.blogspot.com/2008/04/shell-history.html">me -&gt; flub</a>:<br /><br />history | awk '{a[$2]++ } END{for(i in a){print a[i] " " i}}'|sort -rn |head -n 20<br />107 svn<br />101 cd<br />101 ./bin/instance<br />58 ls<br />37 python<br />26 mate<br />16 grep<br />11 rm<br />8 ssh<br />4 ipython<br />4 easy_install<br />3 sqlite3<br />2 sudo<br />2 pwd<br />2 mkdir<br />2 history<br />2 django-admin.py<br />2 django-admin<br />2 ./bin/instance1<br />1 wget