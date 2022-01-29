---
date: '2010-11-06T12:34:00.000-07:00'
description: ''
published: true
slug: 2010-11-request-for-new-pypi-classifiers
tags:
- django
- plone
- python
- django packages
- zope
- legacy
time_to_read: 5
title: A request for new pypi classifiers
---

This request is to help enhance <a href="http://djangopackages.com/">Django Packages</a>, <a href="http://code.activestate.com/pypm/">PyPM Index</a>, and other projects. This would also help the Python community at large.<br /><br />Would it be possible that a standard be established for listing in <a href="http://pypi.python.org/pypi">PyPI</a> <a href="http://docs.python.org/distutils/setupscript.html#additional-meta-data">classifiers</a> which versions of a package is known to operate? Using <a href="http://b-list.org/">James Bennett</a>'s django-registration at <a href="http://pypi.python.org/pypi/django-registration">http://pypi.python.org/pypi/django-registration</a> as an example (see my bolded, last two lines to understand what I'm trying to demonstrate):<br /><blockquote>Development Status :: 5 - Production/Stable<br />Environment :: Web Environment<br />Framework :: Django<br />Intended Audience :: Developers<br />License :: OSI Approved :: BSD License<br />Operating System :: OS Independent<br />Programming Language :: Python<br />Topic :: Utilities<br /><b>Python Versions :: 2.4, 2.5, 2.6, 2.7<br />Django Versions :: 0.96, 1.0, 1.1, 1.2.1, 1.3</b></blockquote>The metadata system I'm writing about in this blog post is <a href="http://docs.python.org/distutils/setupscript.html#additional-meta-data">specified on the distutils documentation page</a>.<br /><br />I picked a Django package but this could be for Zope, Pyramid, PyQT, or anything.<br /><br />If we had something like this in place then people could quickly identify on PyPI and other resources if a tool can be of use to&nbsp;them or if it needs to be updated to the latest code base. If this already exists, then can someone point me at the existing specification so I can promote it?<br /><br /><b>Edit: </b><a href="https://coderanger.net/">Noah Kantrowitz</a> suggested I take a look at the 'requires' keyword which is part of the distutils spec. However, this does not show up in the PyPI API (<a href="http://wiki.python.org/moin/PyPiXmlRpc">http://wiki.python.org/moin/PyPiXmlRpc</a>) and so doesn't fit our needs.