---
date: '2008-05-30T11:53:00.005-07:00'
description: ''
published: true
slug: 2008-05-inheritence-is-fun
tags:
- ruby
- python
- java
- legacy-blogger
time_to_read: 5
title: Inheritence is fun!
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2008/05/inheritence-is-fun.html)*.

Imagine this view in python:<br /><blockquote><span style="font-weight: bold;">class MyFirstForm(formbase.PageForm): lots and lots of finicky code.</span></blockquote><br />Now lets say we want to capture everything in that view, but give it a slightly different behavior. How about this?<br /><blockquote><span style="font-weight: bold;">class MySecondForm(formbase.SubPageForm,FeedbackForm): pass<br /></span></blockquote><br />So what does this do?<br /><br />Well, in Python what this does is make the second class inherit the properties of a similar base class, then overwrite it with the properties of the first form.  The order of precedence in inheritance in Python is very clear and straightforward.  The result is a wonderful case of object oriented code reuse.<br /><br />I believe Ruby does it in a very similar fashion.

---

