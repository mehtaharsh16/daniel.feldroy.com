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

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/09/history-of-my-most-used-shell-commands.html)*.<a href="http://pydanny.blogspot.com/2008/04/history-of-my-most-used-shell-commands.html">I ran this a few years back</a>&nbsp;and I'm running it again today.<br /><br />What is interesting is that compared to the older history, <a href="http://git-scm.org/">git</a> has replaced svn, <a href="http://pypi.python.org/pypi/pip">pip</a> has replaced easy_install, and <a href="http://pypi.python.org/pypi/virtualenv">virtualenv</a> has now completely subsumed buildout. Oh, how the mighty have fallen!<br /><pre class="prettyprint">$ history | awk '{a[$2]++ } END{for(i in a){print a[i] " " i}}'|sort -rn |head -n 20<br /><br />209 git<br />123 python<br />34 ls<br />31 mate<br />18 cd<br />14 pwd<br />9 hg<br />8 touch<br />7 rm<br />6 cp<br />5 pip<br />5 mv<br />5 django-admin.py<br />4 mkvirtualenv<br />3 mysql<br />3 mkdir<br />3 bash<br />2 deactivate<br />2 add2virtualenv<br />1 workon</pre>

---

## 4 comments captured from [original post](https://pydanny.blogspot.com/2011/09/history-of-my-most-used-shell-commands.html) on Blogger

**Brent O'Connor said on 2011-09-14**

Here is mine currently... :)<br /><br />78 ls<br />73 git<br />72 cd<br />35 vagrant<br />25 deactivate<br />21 workon<br />20 sudo<br />17 e<br />15 mkvirtualenv<br />14 fab<br />13 django-admin.py<br />13 cat<br />11 runserver<br />11 ex<br />9 rm<br />9 pip<br />6 ./bin/craigslist_import.py<br />5 grep<br />5 cdvirtualenv<br />4 ssh

**Dougal said on 2011-09-15**

If you add this to your .profile/bash_rc you can make the results more interesting.<br /><br />export HISTSIZE=50000<br /><br />My bash history then goes back until at least the start of this year. Very handy if you want to search for something and I've not noticed a slowdown (even of running the history command).

**Reinout van Rees said on 2011-09-15**

So you got rid of buildout, he? :-) How do you deal with the recipes that you're now missing? Or didn't you use them? I use buildout to generate my apache config, just to name an example, and to set up my django project.<br /><br />I <i>assume</i> you also used some of those recipes. How do you handle such tasks now?

**pydanny said on 2011-09-15**

@Reinout - The final buildout project I was on got converted to pip/virtualenv + either apt or homebrew depending on who was developing it. The consensus has been to use native tools to build environments and that designers and developers find buildout cumbersome, kind of undocumented, and hard to debug. <br /><br />And I stand by that statement. I think buildout grew from a straightforward Python package management system and into something else that tried to be kind of like Chef or Puppet but purely focused on Python. <br /><br />I need to blog my thoughts about it. :P

