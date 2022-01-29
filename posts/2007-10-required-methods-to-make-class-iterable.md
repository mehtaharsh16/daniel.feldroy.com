---
date: '2007-10-09T03:54:00.000-07:00'
description: ''
published: true
slug: 2007-10-required-methods-to-make-class-iterable
tags:
- legacy-blogger
time_to_read: 5
title: Required methods to make a class iterable
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/10/required-methods-to-make-class-iterable.html)*.

Really useful:<br /><pre class="prettyprint-py">#required iterable elements<br />class MyIterator(object):<br /><br />    def __iter__(self):<br />        return self.data.__iter__()<br /><br />    def __len__(self):<br />        return len(self.data)<br /><br />    def __contains__(self, v):<br />        return v in self.data<br /><br />    def __getitem__(self, v):<br />        return self.data[v]<br /></pre>

---

