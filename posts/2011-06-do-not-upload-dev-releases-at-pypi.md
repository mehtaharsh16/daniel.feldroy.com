---
date: '2011-06-25T15:48:00.000-07:00'
description: ''
published: true
slug: 2011-06-do-not-upload-dev-releases-at-pypi
tags:
- django
- python
- legacy-blogger
time_to_read: 5
title: Do not upload dev releases at PyPI
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/06/do-not-upload-dev-releases-at-pypi.html)*.

In <a href="http://pydanny.blogspot.com/2011/06/announcing-django-uni-form-080-beta.html">my last blog post</a> I mentioned that the plan was to release the django-uni-form 0.8.0 final in about six days. To my chagrin I was pointed at Tarek Ziade's <a href="http://tarekziade.wordpress.com/2011/02/15/do-not-upload-dev-releases-at-pypi/">post about not publishing beta releases on PyPI.</a>&nbsp;So the django-uni-form team has now pushed up the 0.8.0 release of the library today, and removed the BETA from discovery via the <a href="http://djangopackages.com/packages/p/django-uni-form/">web</a> or <a href="http://pypi.python.org/pypi/pip">pip</a>.<br /><br /><b>Lesson learned</b>: Until future notice from the distutils2 effort led by Tarek, if you are running a project that has any Stable releases, don't use <a href="http://pypi.python.org/pypi">PyPI</a> to publish non-final versions.