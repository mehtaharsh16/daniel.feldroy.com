---
date: '2009-05-20T15:31:00.001-07:00'
description: ''
published: true
slug: 2009-05-eight-things-i-dont-like-about-python
tags:
- rant
- python
- legacy-blogger
time_to_read: 5
title: Eight things I don't like about python
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2009/05/eight-things-i-dont-like-about-python.html)*.<a href="http://jessenoller.com/">Jesse Noller</a> threw down a challenge on twitter. Or rather he said something and I've purposefully taken it out of context and am considering it a challenge. His statement was that you should be able to to find at least five things you don't like about your language or tool of choice.<br /><br />So why should you read what I have to say on the subject?<br /><br />This one is easy. I'm not a luminary in the field of python. I'm just Joe Developer. I am the user base. If something annoys me then it could annoy others.<br /><br /><span style="font-weight: bold;">1. Division sucks in Python</span><br /><br />This is fixed in Python 3 and right now in the python version I am using I can do<span style="font-style: italic;"> from __future__ import division</span>. Nevertheless this should have been fixed ages ago with the release of python 2.4.3 or earlier. Why python 2.4.3? Because it was on that release that I started doing professional python coding.<br /><br /><span style="font-weight: bold;">2. TKinter blows</span><br /><br />I've done a tiny bit of TKinter coding. I stopped because it was too ugly. Python needs either an updated, prettier version of TKinter or it needs something in its place as part of core python.<br /><br /><span style="font-weight: bold;">3. Lambdas make it easy to obfuscate code</span><br /><br />I remember when I thought Lambdas was overheated excrement.<a href="http://pydanny.blogspot.com/2007/07/lambdas-no-more.html"> I changed my mind.</a> I found myself obfuscating my code, or trying to stumble through someone else's code that was ridden with lambdas. I suppose they have their place, but it seems like 90% of the time they don't add anything besides reducing your line count by a small amount.<br /><br /><span style="font-weight: bold;">4. Sorting objects by attributes is annoying</span><br /><br />Yes, the snippet of code is trivial. Still, couldn't sorting objects by attributes or dictionaries by elements be made a bit easier? sort and sorted should have this built right in. I still have to look this up each and every time.<br /><br /><span style="font-weight: bold;">5. Regex should be a built-in function</span><br /><br />Actually I sit on the fence on this one. Sometimes I wish python was like Perl and Ruby in that you didn't need to call in a new module when you needed a regular expression. Other times I am grateful I don't have to wade through the inevitable obfuscated crap we coders all too easily generate with regular expressions.<br /><br /><span style="font-weight: bold;">6. Reload could be less annoying</span><br /><br />I am a python coder. I love the shell. Except reload only works on modules. Bah! I want it to work on every object in the stack.<br /><br /><span style="font-weight: bold;">7. Help doesn't let me skip over the '__' methods</span><br /><br />Python's introspection and documentation features makes me happy. And yet when I have to scroll past <span style="font-style: italic;">__and__</span>, <span style="font-style: italic;">__or__</span>, and <span style="font-style: italic;">__barf__</span> each time I type help(myobject), I get just a tiny bit cranky. I want help to accept an optional boolean that defaults to True. If you set it to False you skip anything with double underscores.<br /><br /><span style="font-weight: bold;">8. Not enough female Pythonistas</span><br /><br />I'm lucky that I work with a lady pythonista. And I've got an internet friend who is also a lady pythonista.<br /><br />And that is it.<br /><br />What a damned shame.<br /><br /><span style="font-weight: bold;">Conclusion</span><br /><br />I've just handed you eight things to think about. It was hard coming up with actual meaningful things, which proves that at heart I'm just a gushing <a href="http://www.python.org/%7Eguido/">Guido Van Rossum</a> fan boy.<br /><br /><blockquote><h3>Update 2011/11/04</h3>New commentary on this post is at <a href="http://pydanny.blogspot.com/2011/11/redux-python-things-i-dont-like.html">Redux: Python Things I dont like</a><br /></blockquote>

---

## 7 comments captured from [original post](https://pydanny.blogspot.com/2009/05/eight-things-i-dont-like-about-python.html) on Blogger

**Unknown said on 2009-05-20**

If that's all you can come up with, you're doing pretty good.

**Unknown said on 2009-05-20**

It's funny - my first few weeks of Python, I was deeply disappointed that I couldn't just do regexes /like in Perl/.  I don't think I'd change it now, though - it would muck with the consistency and obviousness, and I've come to value that more than saving the keystrokes.<br /><br />I can only come up with one thing:<br /><br />1. DB-API2 allowing *five different syntaxes* for bind variables.  Heresy against the Zen!

**jespern said on 2009-05-21**

Reloading every instantiated object on the stack is insane (should it re-init the object through its constructor, what happens to references to self or attributes on self, methods that disappear/change behavior, etc.) and I don't think *any* language will let you do that. Even Erlang with its infamous "hot swap" does the same dance as Python (only for new invocations of code.)<br /><br />As Chris said, if that's all you can complain about, Python is doing pretty well :-)

**pydanny said on 2009-05-21**

@jespern, I should have been more clear on the reload issue. I want to be able to do reload(my_module), reload(my_class), reload(my_function), and reload(my_variable). I want specificity, not an insane generic function. Then you can re-init as needed. I think that is a bit more realistic.

**pydanny said on 2009-05-21**

@Catherine, when I first used Python I needed to use DB-API2 and it nearly broke my heart. Now I rely on stuff like SqlAlchemy, DjangoOrm, and hopefully some day soon Sql-Python in order to use python to interact with Sqlite3 and PostGreSQL.

**david said on 2009-05-26**

My biggest complains aren't in Python itself, but in the standard library.  Python 3 goes a long way to cleaning up some of the cruft and illogical baggage that's developed over the years, but in the 2.x line, you have things like urllib and urllib2.

**Unknown said on 2009-05-26**

In terms of Tkinter being ugly, Ttk support was added for 2.7/3.1.

