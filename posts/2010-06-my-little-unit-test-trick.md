---
date: '2010-06-08T17:29:00.000-07:00'
description: ''
published: true
slug: 2010-06-my-little-unit-test-trick
tags:
- python
- legacy-blogger
time_to_read: 5
title: My little unit test trick
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/06/my-little-unit-test-trick.html)*.This is an oldie but a goodie.<br /><br />I love writing unit tests for <a href="http://python.org">Python</a> code. It makes me so happy seeing the little dots go by. Add in some <a href="http://nedbatchelder.com/code/coverage/">coverage.py</a> and you can even make a game out of how much your code is covered. Of course, adding in <a href="http://hudson.dev.java.net/">Hudson</a> just makes it even better.<br /><br />However, sometimes when your unit tests get sophisticated it can be a pain to introspect via the Python shell (<a href="http://en.wikipedia.org/wiki/REPL">REPL</a>) on one terminal shell and then go back to the unittest. Especially when the unit tests get even the least bit sophisticated. In the shell you can forget steps since you are entering things manually.<br /><br />So as soon as things get the least bit complicated I simply start using the Python help() function and <a href="http://docs.python.org/library/pdb.html">pdb</a> library inside my test code. For example:<br /><br /><pre class="prettyprint lang-py">class MyTests(unittest):<br />    def test_pretending_to_be_complex(self):<br />        ...<br />        complex_object = really_complex_actions()<br />        ...<br />        <br />        # help demonstration<br />        help(complex_object)<br /><br />        # PDB example cause everyone loves that too.<br />        import pdb        <br />        pdb.set_trace()<br /></pre><br />So what does this give you? Well, the <b>help()</b> function acts here <b>exactly</b> the same way it does from the Python shell. It stops the code processing and lets you do introspection. pdb lets you step through things with joy.<br /><br />Try it out!<br /><br /><b>EDIT</b>: Of course, you probably wouldn't use both help and pdb. Thats because you can call help() inside of PDB. My example just shows you available options. Thanks to Gary for pointing this out!

---

## 7 comments captured from [original post](https://pydanny.blogspot.com/2010/06/my-little-unit-test-trick.html) on Blogger

**Eric Florenzano said on 2010-06-08**

I've read through this a few times, and I'm embarrassed to admit that I don't understand what you're getting at here.

**EOL (Eric O LEBIGOT) said on 2010-06-09**

Thank you so much for sharing!  Interesting and useful.

**Brandon Craig Rhodes said on 2010-06-09**

I only wish the debugger could be invoked with a builtin so that we could stop having to add an inline &quot;import&quot; statement everywhere we needed PDB! Anyway, nice point about how the debugger can be so easily invoked even deep inside of a series of tests.

**pydanny said on 2010-06-09**

Eric Florenzano: Try it with a simple example. Create a simple unittest and stick in help(str). The test will be interrupted by the help() interface.

**Gary Robinson said on 2010-06-09**

To tell the truth, I don't see the utility of calling help() before calling pdb.set_trace() in your example. I insert set_trace() calls into my test scripts all the time when I'm debugging. <br /><br />I use it not only for stepping but also for examining variables. If I want to see the docstring for a particular object when I'm in pdb, I can do !help(object).<br /><br />You say calling help() &quot;stops the code processing and lets you do introspection.&quot; But just calling set_trace(), without a preceding help(), also stops the code processing and lets you do whatever you want in the pdb environment.<br /><br />Please let me know if there's something I'm missing.

**pydanny said on 2010-06-09**

Gary: I guess I should be more explicit. You can use the help and pdb functions. I tend to use one or the either, not both. I'll edit the post to reflect this thought.

**akaihola said on 2010-06-10**

For fans of nose, django-nose and IPython, here's a tweaked fork of the ipdb package:<br /><br />http://github.com/akaihola/ipdb<br /><br />Drop this in your code:<br /><br />    import ipdb;ipdb.set_trace()<br /><br />And you'll get the fancy IPython-enchanced debugger even in the middle of a nose test run.

