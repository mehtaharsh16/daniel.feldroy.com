---
date: '2011-12-17T15:10:00.000-08:00'
description: ''
published: true
slug: 2011-12-evaluating-which-package-to-use
tags:
- rant
- python
- legacy-blogger
time_to_read: 5
title: Evaluating which package to use
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/12/evaluating-which-package-to-use.html)*.

In November of 2009 I wrote about which <a href="http://pydanny.blogspot.com/2009/11/code-ill-reuse.html">third-party Python Packages I'll use</a>. Here is my modern take on it - much of it inspired by personal experience and the advice of peers and mentors:<br /><br /><h3>Tag and release on PyPI</h3><br />I really don't like pulling from tags on <a href="https://github.com">Github</a>, <a href="https://bitbucket.org">BitBucket</a>, or whatever. Or being told to pull from a specific commit. That works in early development, but it certainly doesn't fly in production. <br /><br />I also get frustrated when people release on <a href="http://pypi.python.org/pypi">PyPI</a> but then insist on hosting the release themselves. That is because invariably at some critical point in development when PyPI is up, the host provider is down. <br /><br />A <b>huge</b> point of frustration is that I shouldn't have to leave the canonical source of <a href="http://python.org">Python</a> package versions to hunt down what I should be using. I've seen too many beginning Python developers fall into the trap of using 3 year old packages because they didn't know they should be using trunk. I was guilty of doing it for a 6+ month old release in 2010, and for that I apologize and promise I won't do it again.<br /><br />This also means your package needs to be <a href="http://pypi.python.org/pypi/pip">pip</a> installable. If you don't know how to do it, please read the <a href="http://guide.python-distribute.org/">The Hitchhiker’s Guide to Packaging</a>. <br /><br /><h3>Documentation</h3><br />2011 is closing, which means your package needs to have <a href="http://sphinx.pocoo.org/">Sphinx Documentation</a>. And those Sphinx Docs should be on <a href="http://readthedocs.org/">Read the Docs</a>. Read the Docs is great because it doesn't just host the rendered HTML, it also lets you easily push to it from a DVCS push - and implements nice search and handy PDFs too.<br /><br />Yes, I know there is <a href="http://packages.python.org">packages.python.org</a> but I don't trust it. It doesn't have the easy <strong>push/deploy</strong> workflow of Read the Docs, which means often the docs are dated because it's yet another step for developers. Plus, the lack of search outside of Sphinx makes it hard to discover documentation.<br /><br />The same goes for hosting docs yourself. In fact, that's usually worse because when someone goes on vacation and the docs go down... ARGH!<br /><br />Please don't mention <strike>easy_install</strike> in your docs. We are nearly in 2012 and ought to be unified on our package installer, which is <a href="http://pypi.python.org/pypi/pip"><b>pip</b></a>. <br /><br /><h3>Tests</h3><br />You should have them. Otherwise any update you put on PyPI puts the rest of us at risk. We can't be sure your updates to the project won't break our stuff. So please write some tests! If you add in coverage.py and some kind of lint checker, it can even be fun! It certainly does earn you bragging rights having a high coverage rating.<br /><br /><h3>Code Quality</h3><br />Are you using new-style classes or old-style classes? Do you follow PEP-8? Do you keep meta-classes to the absolute minimum? Is the code on an available DVCS so others can fork and contribute? These are things that weigh in my judgement, and certainly the judgement of others.

---

## 13 comments captured from [original post](https://pydanny.blogspot.com/2011/12/evaluating-which-package-to-use.html) on Blogger

**Unknown said on 2011-12-17**

I'd add a couple more:<br />- public source control<br />- public issue tracker<br /><br />I don't care *which* of the various public services for those a project uses (or even if they host their own), I just want to know that code and bugs are handled in am at least somewhat structured fashion.

**Mikhail Korobov said on 2011-12-17**

+1, <a href="http://kmike.ru/on-package-docs/" rel="nofollow">except the Documentation</a> part.

**Richard Jones said on 2011-12-17**

+1 for rtfd. Martin created the packages.python.org setup before rtfd came along and it was a good substitute for <b>nothing</b> but really RTFD is <b>bloody good</b>. I'm thinking about how feasible it'd be to ping rtfd for package docs and link from pypi. Probably not really, and I'd get in trouble for it eventually I'm sure (&lt;0.5 wink&gt;).

**Kurt Schwehr said on 2011-12-18**

So what are some (preferably small) python packages that you think demonstrate best practices?  I'm still trying to catch up on this area before I try to write about it, but people keep asking me for where to look for a demo project to model after and I don't know :)<br /><br />If you'll notice, I never made it to python packaging in my Research Tools class even though it's essential for good collaboration to have great packaging with documentation and testing...<br /><br /><a href="http://vislab-ccom.unh.edu/~schwehr/Classes/2011/esci895-researchtools/" rel="nofollow">http://vislab-ccom.unh.edu/~schwehr/Classes/2011/esci895-researchtools/</a><br /><br />I left the students hanging at kind of a half way point.  They are now fully capabable of shooting themselves in the foot, but have no guidance on forward progress.

**irmen said on 2011-12-18**

I'm using sphinx_upload to push my docs to packages.python.org in a single command:<br /><br />$ python setup.py build_sphinx upload_sphinx<br /><br />Is rtfd really better than doing it this way?

**pydanny said on 2011-12-18**

Cheesecake hasn't been updated in 3 years. The last PyPI release was from over 4 years ago. I bet things have changed in Python too much for it to be of much value now. Also, it fails on so many of the things labeled in this post. ;)

**pydanny said on 2011-12-18**

irmin - try out RTFD. It's not just the workflow, it's the advanced search and various alternative output methods.

**pydanny said on 2011-12-18**

@Kurt - You raise an excellent issue. I'll put out a call for what you are asking, as it would be a great resource for me and every other beginner in Python. :)

**mike bayer said on 2011-12-18**

here are my not-yet-resolved issues with readthedocs (why my small stuff is still on packages.python.org, large stuff still self-hosted):<br /><br />1. it doesn't use my selected Sphinx theme (somehow Pyramid gets it to do it, but I shouldn't have to email/get special permission for this)<br /><br />2. I *like a lot* being able to say &quot;python setup.py upload_docs&quot;.   I want to put the docs up before I have to commit sometimes (many times).   Can I point my --repository flag over to RTD ?  <br /><br />3. packages.python.org integrates nicely with pypi.   Can't we just get RTD to replace/merge into packages.python.org completely and just have one system ?<br /><br />4. RTD doesn't have easy links to its *own* docs.  There's a &quot;get started&quot; link only if I *log out of the site* and pretend I'm brand new. If I log in, this link is gone.  It's not on the homepage, it's not on my dashboard.  Major omissions like this make me feel a little unconfident about RTD.    Such as if my answers to #1 and #2 are actually very simple, well this is why I don't know the answers !<br /><br />5. for my more elaborate docs (i.e. SQLAlchemy) there's a lot of integrations with my regular site i wouldn't want to give up and while I'm sure there's ways to make it all work with fancy client side rendering trickery, it's not worth my time.  My site almost never goes down, I get an alert if it does, and when/if I get off of Trac onto Github for issues/source, I'll be able to host the regular site on  S3 where it will be mostly bombproof (I could do this now if I just put trac under a different hostname, I guess).<br /><br />That said, for all the little projects I have now (alembic, dogpile, dogpile.cache), I can switch back to RTD if I can get control over themes and the --repository flag.

**mike bayer said on 2011-12-19**

OK I have some answers to some of these issues:<br /><br />Answer #1: I am stupid.   For some reason it works so I can only imagine that I was seeing the &quot;default&quot; theme being different (http://readthedocs.org/docs/alembic/en/latest/index.html)<br /><br />Answer #2.  I am (mostly) stupid.  There's a link &quot;Upload a Zip file of HTML&quot; which appears to be compatible with the upload_docs feature.  But I don't see this mentioned in the docs at http://read-the-docs.readthedocs.org/en/latest/index.html , so this should all be laid out clearly.<br /><br />Answer #4.  I am over 40 (sorry, some of us can't help this issue).  I see the &quot;docs&quot; link is way at the bottom, in the footer, in a very pale color vs. the background.  Put this up at the top with the buttons please!

**Alex Clark said on 2011-12-19**

pythonpackages.com aims to help with some of this e.g. discovering where the docs are:<br /><br />- http://pythonpackages.com/info/blessings (python.org)<br /><br />- http://127.0.0.1:6543/info/django (rtfd.org)<br /><br />It also displays grid info from opencomparison.org :-)

**Unknown said on 2011-12-19**

Danny, I've tried to follow good current practices for walkdir, shell-command and contextlib2. The only dodgy thing I'm aware of is that I need to sort out their trove classifiers.

**Richard Jones said on 2011-12-19**

Oh. I was completely unaware of upload_sphinx! Awesome!

