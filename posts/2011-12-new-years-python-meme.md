---
date: '2011-12-22T16:46:00.000-08:00'
description: ''
published: true
slug: 2011-12-new-years-python-meme
tags:
- opencomparison
- courses
- pyramid
- django
- plone
- python
- classes
- django packages
- legacy-blogger
time_to_read: 5
title: "New Year\u2019s Python Meme"
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/12/new-years-python-meme.html)*.I love these blog memes, so I give you my version of <a href="http://tarekziade.wordpress.com/2011/12/20/new-years-python-meme-2/">Tarek Ziade's New Year's Python Meme</a>.<br /><br /><h3>1. What’s the coolest Python application, framework or library you have discovered in 2011?</h3><br />For <a href="http://python.org">python</a> libraries, that would have to be <a href="http://twitter.com/kennethreitz">Kenneth Reitz</a>' <a href="http://docs.python-requests.org/">python-requests</a> library. I've used it for an amazing amount of stuff and <a href="http://pydanny.blogspot.com/2011/05/python-http-requests-for-humans.html">blogged</a> about it. It took the grunge out of doing HTTP actions with Python. The API is clean and elegant, getting out of your way. It embodies the State of the art for API design, which closely matches the Zen of Python.<br /><br />For applications, <a href="http://djangolint.com">djangolint.com</a> is awesome. It has helped me out so much on several projects. I would love to see something like this implemented and maintained for modern Python.<br /><br />All the Python friendly PaaS efforts that have emerged are changing the landscape for those of us who want to launch projects but don't want to become full time system administrators in the process. <a href="http://heroku.com">Heroku</a>, <a href="http://djangozoom.com">DjangoZoom</a>, <a href="https://www.dotcloud.com/">DotCloud</a>, <a href="http://ep.io">ep.io</a>, <a href="http://gondor.io">gondor.io</a>, and others are making it possible for developers to focus on development not server tooling. Google App Engine paved the way and it is wonderful to see the rest of the universe catch up with material that more closely follow core.<br /><br /><h3>2. What new programming technique did you learn in 2011?</h3><br />Event based programming! I've touched on it for years, but this year I really got a lot more more into it thanks to <a href="https://twitter.com/aurynn">Aurynn Shaw</a> kickstarting me and <a href="http://twitter.com/audreyr">Audrey Roy</a> expanding my knowledge ever since.<br /><br /><h3>3. What’s the name of the open source project you contributed the most in 2011? What did you do?</h3><br />I participated mostly as co-lead in the <a href="http://opencomparison.org">Open Comparison</a> project, which amongst other things involved running the largest sprint at PyCon 2011. We maintained <a href="http://djangopackages.com">Django Packages</a> and launched <a href="http://pyramid.opencomparison.org">Pyramid</a> and <a href="http://plone.opencomparison.org">Plone</a> versions of the project. We hope to launch a Python implementation in 2012.<br /><br />I took a lot of notes this year at <a href="http://pydanny-event-notes.rtfd.org">pydanny-event-notes</a> - enough to make a book.<br /><br /><h3>4. What was the Python blog or website you read the most in 2011?</h3><br />Like <a href="http://www.boredomandlaziness.org/2011/12/new-year-python-meme-december-2011.html">Nick Coghlan</a>, that would be <a href="http://planet.python.org">http://planet.python.org</a>.<br /><br /><h3>5. What are the three top things you want to learn in 2012?</h3><br /><ol><li>How to use whatever consistently maintained project that replaces PIL that works in Python 2.7.x and Python 3.x.</li><li>Really advanced Python as taught by Raymond Hettiger.</li><li><a href="http://documentcloud.github.com/backbone/">backbone.js</a></li></ol><br /><h3>6. What are the top software, app or lib you wish someone would write in 2012?</h3><br />A tool python-requests, but for shell access. Something like <a href="http://pypi.python.org/pypi/Unipath">Unipath</a>, but kept up-to-date and with nicely written documentation on <a href="http://rtfd.org">Read the Docs</a>.<br /><br />A PIL replacement that is maintained, works for all modern Pythons, and is close enough to the PIL API to not cause too much confusion.<br /><br />Something like <a href="http://djangolint.com">Django Lint</a> but for Python 2.7.x/3.x.<br /><br />An open source project that tracks test coverages across PyPI and publishes reports of the results via an API.<br /><br /><h3>Want to do your own list? here’s how:</h3><ul><li>copy-paste the questions and answer to them in your blog</li><li>tweet it with the #2012pythonmeme hashtag</li></ul>

---

## 6 comments captured from [original post](https://pydanny.blogspot.com/2011/12/new-years-python-meme.html) on Blogger

**Rok Garbas said on 2011-12-23**

hey,<br /><br />would Pillow (fork by Alex Clark and its largely used in among plonistas) be the solution for PIL you're looking for? or at least would be a place where we can get PIL working for python 2.7 and 3.x.<br /><br />or you are looking completely new library?<br /><br />http://pypi.python.org/pypi/Pillow<br />http://github.org/collective/Pillow

**pydanny said on 2011-12-23**

@Rok,<br /><br />Let's face the truth, PIL is effectively unmaintained. Pillow is Alex Clark's way of getting it to be a reliable package installation.<br /><br />Also, according to the Image experts I know (I'm engaged to one who has written a commercial Image processing library but she isn't the only one), PIL's processing capabilities are limited compared to other tools. For example, Image rotation causes a huge amount of lossy compared to tools used by other languages.<br /><br />PIL that works in all places suffices for now, but in the long run the Python world needs a real replacement.

**Unknown said on 2011-12-23**

The limited built-in shell support annoys me too, but I'm not sure an OO-path object is the answer.<br /><br />My own contributions to making shell programming in Python less painful are WalkDir and Shell Command:<br /><br />http://walkdir.readthedocs.org/<br />http://shell-command.readthedocs.org/<br /><br />(They each have some issues at the moment - I plan to release new versions of both of them in early January)<br /><br />You may also want to talk to Antoine Pitrou about releasing his pathlib work as a PyPI package:<br />http://hg.python.org/features/pathlib/file/tip/Lib/pathlib.py

**Jons Obrist said on 2011-12-27**

&quot;A PIL replacement that is maintained, works for all modern Pythons, and is close enough to the PIL API to not cause too much confusion.&quot;<br /><br />I could not agree more. And while we're at it, it would be amazing if this could be done in pure Python.

**PA Parent said on 2011-12-30**

Hi!<br /><br />I really like this idea :<br /><br />&quot;An open source project that tracks test coverages across PyPI and publishes reports of the results via an API.&quot;<br /><br />I might participate if someone starts that :)

**Ken Swift said on 2012-01-04**

&quot;How to use whatever consistently maintained project that replaces PIL that works in Python 2.7.x and Python 3.x.&quot;<br /><br />you can try Pystacia: http://liquibits.bitbucket.org/index.html<br /><br />and please spread the word!

