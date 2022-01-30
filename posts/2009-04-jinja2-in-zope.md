---
date: '2009-04-04T06:03:00.006-07:00'
description: ''
published: true
slug: 2009-04-jinja2-in-zope
tags:
- geek celebrities
- django
- kss
- grok
- plone
- python
- zope
- legacy-blogger
time_to_read: 5
title: Jinja2 in zope
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2009/04/jinja2-in-zope.html)*.

Getting Django Tempates inside of zope is not trivial. Yet getting <a href="http://jinja.pocoo.org/2/">Jinja2</a> to run inside of zope is easy! Use easy_install (or whatever) to fetch Jinja2 from PyPi and then from the zope debug shell:<br /><blockquote>>>> from jinja2 import Template<br />>>> t = Template('{{ name }} rocks!')<br />>>>  t.render(name='Guido')<br />u'Guido rocks!'</blockquote>So what does this mean?<br /><br />It means that right now you can have Django style templates inside of Plone, Zope, Grok, et al. However, you can't mix TAL and Jinja2 in any way via template inheritence.<br /><br />Off the top of my head I can think of two possible use cases:<br /><ol><li>You have the HATE for XML based template languages and just need something else for all rendering of all content including HTML. This is actually a very feasible option for Grok and pure Zope application development, yet functionally impossible for Plone. Too much of Plone is woven into TAL to make this work.</li><li>You are using lots of AJAX via KSS, JQuery, YUI, plain old JavaScript, etc and want something handy to help you write content coming from the server side. This is feasible in Zope, Grok, and even Plone.</li></ol>The downside of using Jinja2 is that you are adding more complexity to the mix. I like simplicity. I would be very careful about using Jinja2 in Zope products, and would only consider option #2.<br /><br />Thanks to the the indomitable <a href="http://ianbicking.org/">Ian Bicking</a> for suggesting Jinja2.

---

## 3 comments captured from [original post](https://pydanny.blogspot.com/2009/04/jinja2-in-zope.html) on Blogger

**Laurence Rowe said on 2009-04-05**

Macros aren't the only way to integrate a template, you can always do<br /><br />  tal:replace="structure view/my_jinja_template"

**pydanny said on 2009-04-05**

@Laurence Row: Good point. Thanks very much!

**Unknown said on 2009-04-06**

``z3c.pt`` introduces "text templates" which will evaluate ${some_path_expression} –– e.g. ${python: 2 + 2}; you can't do TALES evaluation with any other template engine.

