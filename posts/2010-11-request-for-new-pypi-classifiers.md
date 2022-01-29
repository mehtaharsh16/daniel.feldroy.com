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
- legacy-blogger
time_to_read: 5
title: A request for new pypi classifiers
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/11/request-for-new-pypi-classifiers.html)*.

This request is to help enhance <a href="http://djangopackages.com/">Django Packages</a>, <a href="http://code.activestate.com/pypm/">PyPM Index</a>, and other projects. This would also help the Python community at large.<br /><br />Would it be possible that a standard be established for listing in <a href="http://pypi.python.org/pypi">PyPI</a> <a href="http://docs.python.org/distutils/setupscript.html#additional-meta-data">classifiers</a> which versions of a package is known to operate? Using <a href="http://b-list.org/">James Bennett</a>'s django-registration at <a href="http://pypi.python.org/pypi/django-registration">http://pypi.python.org/pypi/django-registration</a> as an example (see my bolded, last two lines to understand what I'm trying to demonstrate):<br /><blockquote>Development Status :: 5 - Production/Stable<br />Environment :: Web Environment<br />Framework :: Django<br />Intended Audience :: Developers<br />License :: OSI Approved :: BSD License<br />Operating System :: OS Independent<br />Programming Language :: Python<br />Topic :: Utilities<br /><b>Python Versions :: 2.4, 2.5, 2.6, 2.7<br />Django Versions :: 0.96, 1.0, 1.1, 1.2.1, 1.3</b></blockquote>The metadata system I'm writing about in this blog post is <a href="http://docs.python.org/distutils/setupscript.html#additional-meta-data">specified on the distutils documentation page</a>.<br /><br />I picked a Django package but this could be for Zope, Pyramid, PyQT, or anything.<br /><br />If we had something like this in place then people could quickly identify on PyPI and other resources if a tool can be of use to&nbsp;them or if it needs to be updated to the latest code base. If this already exists, then can someone point me at the existing specification so I can promote it?<br /><br /><b>Edit: </b><a href="https://coderanger.net/">Noah Kantrowitz</a> suggested I take a look at the 'requires' keyword which is part of the distutils spec. However, this does not show up in the PyPI API (<a href="http://wiki.python.org/moin/PyPiXmlRpc">http://wiki.python.org/moin/PyPiXmlRpc</a>) and so doesn't fit our needs.

---

## 7 comments captured from [original post](https://pydanny.blogspot.com/2010/11/request-for-new-pypi-classifiers.html) on Blogger

**Richard Jones said on 2010-11-06**

It's quite easy to enhance the XML-RPC interface.

**Doug Napoleone said on 2010-11-06**

I am very glad you brought up this topic. There is already a convention followed for the python and framework versions, but it appears that not enough people are aware of it. It should be included in the standard distutils documentation.<br /><br />You can see the full list of classifiers here:<br />http://pypi.python.org/pypi?%3Aaction=list_classifiers<br /><br /><br />For the python language version the classifier is:<br /><br />Programming Language :: Python :: <br /><br />With each version on it's own line. That way you can browse the repository by python version (see the bottom of the page):<br /><br />http://pypi.python.org/pypi?:action=browse&amp;c=214<br /><br />There is also support for frameworks which you can see on that page as well. There it is done with:<br /><br />Framework :: Django :: <br /><br />There is Zope, Plone, and a number of other frameworks already there.<br /><br />In the example you gave the proper, and supported way of writing the metadata is:<br /><br />Programming Language :: Python<br />Programming Language :: Python :: 2.4<br />Programming Language :: Python :: 2.5<br />Programming Language :: Python :: 2.6<br />Programming Language :: Python :: 2.7<br />Framework :: Django<br />Framework :: Django :: 0.96<br />Framework :: Django :: 1.0<br />Framework :: Django :: 1.1<br />Framework :: Django :: 1.2.1<br />Framework :: Django :: 1.3<br /><br /><br />People should already be following this convention, and it should be advertised more.

**pydanny said on 2010-11-06**

@Richard, I would love to see the XML-RPC interface for PyPI enhanced! However, as @Doug pointed out, the information is there already in the classifiers.<br /><br />The question then becomes does it make sense to have PyPI slurp information out of the classifiers that are already returned by the XML-RPC API? If so, I'm happy to tes the results via Django Packages and another project I'm on.<br /><br />Another issue to be raised is educating the Python audience at large about classifiers.

**Richard Jones said on 2010-11-06**

Generally speaking if there's a need for something in PyPI it can be done. We (Martin von Löwis and myself) just need to be aware of it. Which we usually aren't, for some reason. And people write HTML scapers instead.

**Alexis Metaireau said on 2010-11-06**

Hi, <br /><br />The classifiers already exists for python versions:<br /><br />Programming Language :: Python :: 2<br />Programming Language :: Python :: 2.3<br />Programming Language :: Python :: 2.4<br />Programming Language :: Python :: 2.5<br />Programming Language :: Python :: 2.6<br />Programming Language :: Python :: 2.7<br />Programming Language :: Python :: 3<br />Programming Language :: Python :: 3.0<br />Programming Language :: Python :: 3.1<br />Programming Language :: Python :: 3.2<br /><br />BTW, I'm not sure the right way to define that a project is dependent on which or which version of a framework is to use the classifiers.<br /><br />We already can do that using the requires fields, and it will be easy to deal with them with the upcoming distutils2 release, because the setup.py thing will disappear, going to be replaced by a static setup.cfg file.

**pydanny said on 2010-11-06**

@Richard - Maybe a bigger typeface or more precedence to to the bug tracker and help links?

**Doug Napoleone said on 2010-11-07**

*sigh* oops! I was wrong about the framework version classifiers. They are not part of the list. I should double check my facts first. Sorry... Richard and others should be able to add that feature though.<br /><br />We should put out a request for feedback on which versions need official listing for which frameworks. I would not expect the PyPi folks to track down all the versions themselves. Nor should al the potential versions be included IMHO. For example Django 0.92 is just out.

