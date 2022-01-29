---
date: '2010-11-06T15:26:00.000-07:00'
description: ''
published: true
slug: 2010-11-release-classifiers-in-distutilspypi
tags:
- django
- plone
- python
- django packages
- zope
- legacy-blogger
time_to_read: 5
title: Release classifiers in distutils/pypi
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/11/release-classifiers-in-distutilspypi.html)*.

Thanks to <a href="http://dougma.com/">Doug Napoleone</a> I'm now aware there is already a convention followed for the <a href="http://python.org">python</a> and framework versions, but it appears that not enough people are aware of it. This post is pretty much a <a href="https://www.blogger.com/comment.g?blogID=4477131926658044957&amp;postID=7921310865600322429">reposting of the second comment of the post immediately preceding this one</a> and Doug gets full credit for this post. I'm just repeating his message:<br /><br />The release classifiers in this post should be included in the standard distutils documentation. For the moment, you can see the full list of classifiers here:<br /><a href="http://pypi.python.org/pypi?%3Aaction=list_classifiers">http://pypi.python.org/pypi?%3Aaction=list_classifiers</a><br /><br />For the python language version the classifier is:<br /><br /><blockquote>Programming Language :: Python :: x.y.z</blockquote><br />With each version on it's own line. That way you can browse the repository by python version (see the bottom of the page):<br /><br /><a href="http://pypi.python.org/pypi?:action=browse&amp;c=214">http://pypi.python.org/pypi?:action=browse&amp;c=214</a><br /><br />There is also support for frameworks which you can see on that page as well. There it is done with:<br /><br /><blockquote>Framework :: Django :: x.y.z</blockquote><br />There is Zope, Plone, and a number of other frameworks already there.<br /><br />In the example you gave the proper, and supported way of writing the metadata is:<br /><br /><blockquote>Programming Language :: Python<br />Programming Language :: Python :: 2.4<br />Programming Language :: Python :: 2.5<br />Programming Language :: Python :: 2.6<br />Programming Language :: Python :: 2.7<br />Framework :: Django<br />Framework :: Django :: 0.96<br />Framework :: Django :: 1.0<br />Framework :: Django :: 1.1<br />Framework :: Django :: 1.2.1<br />Framework :: Django :: 1.3</blockquote><br />Now it becomes a matter of education and illumination. This should be in the standard distutils documentation and arguably the home page of PyPI (or easily found there). And <a href="http://djangopackages.com">Django Packages</a> will be supporting this functionality in the near future.

---

## 4 comments captured from [original post](https://pydanny.blogspot.com/2010/11/release-classifiers-in-distutilspypi.html) on Blogger

**Alexis Metaireau said on 2010-11-06**

I can't see the classifiers about Django versions here: http://pypi.python.org/pypi?%3Aaction=list_classifiers.<br /><br />Am I missing something ?

**pydanny said on 2010-11-06**

@Alexis - You are right, they aren't there. Can you make up your own classifications with this list or are we stuck with what classifiers are provided in the formal PyPI list?

**Doug Napoleone said on 2010-11-07**

I was going to post a followup stating that I was wrong about the framework version, but then life got in the way. then I noticed this post and realized I had better, but someone else had beaten me to it. The internets: the fastest way to make me feel like a fool ;-)<br /><br />I am sure the PyPi folks will have no problems adding framework version classifiers.

**Alexis Metaireau said on 2010-11-07**

@Danny<br /><br />I think the best thing is to use the existing classifiers, otherwise it will be useless, for now at least.<br /><br />It's possible to ask about that on the catalog-sig mailing list, BTW (adding new classifiers), but I'm not sure it's good to support each different version os each frameworks this way, it will be hell for the classifiers maintainers.

