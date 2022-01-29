---
date: '2010-06-08T17:29:00.000-07:00'
description: ''
published: true
slug: 2010-06-my-little-unit-test-trick
tags:
- python
- legacy
time_to_read: 5
title: My little unit test trick
---

This is an oldie but a goodie.<br /><br />I love writing unit tests for <a href="http://python.org">Python</a> code. It makes me so happy seeing the little dots go by. Add in some <a href="http://nedbatchelder.com/code/coverage/">coverage.py</a> and you can even make a game out of how much your code is covered. Of course, adding in <a href="http://hudson.dev.java.net/">Hudson</a> just makes it even better.<br /><br />However, sometimes when your unit tests get sophisticated it can be a pain to introspect via the Python shell (<a href="http://en.wikipedia.org/wiki/REPL">REPL</a>) on one terminal shell and then go back to the unittest. Especially when the unit tests get even the least bit sophisticated. In the shell you can forget steps since you are entering things manually.<br /><br />So as soon as things get the least bit complicated I simply start using the Python help() function and <a href="http://docs.python.org/library/pdb.html">pdb</a> library inside my test code. For example:<br /><br /><pre class="prettyprint lang-py">class MyTests(unittest):<br />    def test_pretending_to_be_complex(self):<br />        ...<br />        complex_object = really_complex_actions()<br />        ...<br />        <br />        # help demonstration<br />        help(complex_object)<br /><br />        # PDB example cause everyone loves that too.<br />        import pdb        <br />        pdb.set_trace()<br /></pre><br />So what does this give you? Well, the <b>help()</b> function acts here <b>exactly</b> the same way it does from the Python shell. It stops the code processing and lets you do introspection. pdb lets you step through things with joy.<br /><br />Try it out!<br /><br /><b>EDIT</b>: Of course, you probably wouldn't use both help and pdb. Thats because you can call help() inside of PDB. My example just shows you available options. Thanks to Gary for pointing this out!