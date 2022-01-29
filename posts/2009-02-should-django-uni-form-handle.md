---
date: '2009-02-10T17:17:00.005-08:00'
description: ''
published: true
slug: 2009-02-should-django-uni-form-handle
tags:
- django
- pinax
- legacy-blogger
time_to_read: 5
title: Should django-uni-form handle boilerplate HTML?
---

This is in regards to my <a href="http://code.google.com/p/django-uni-form/">django-uni-form</a> project, which lets you do proper fieldset forms in Django, letting you do prettily formatted forms that meet the Section 508 specification, not to mention various accessibility and usability guidelines.<br /><br />Basically, I think django-uni-form could be a little more helpful. So what do I mean?<br /><br />Standard uni-form looks like:<pre><div class="highlight"><pre><br />&lt;form class="login uniForm" method="POST" action=""&gt;<br />&lt;fieldset class="inlineLabels"&gt;<br />&lt;legend&gt;* Required fields&lt;/legend&gt;        <br />  &lt;div class="ctrlHolder "&gt;     <br />    &lt;label for="id_username"&gt; * User Name&lt;/label&gt;<br />    &lt;input id="id_username" type="text" name="username" maxlength="30" /&gt;<br />  &lt;/div&gt;<br />&lt;/legend&gt;<br />&lt;/fieldset&gt;<br />&lt;div class=&quot;buttonHolder&quot;&gt;<br />          &lt;button type=&quot;reset&quot; class=&quot;resetButton&quot;&gt;Reset&lt;/button&gt;<br />          &lt;button type=&quot;submit&quot; class=&quot;primaryAction&quot;&gt;Submit&lt;/button&gt;<br />        &lt;/div&gt;<br />&lt;/form&gt;<br /></pre></div></pre>django-uni-form gives just:<pre><div class="highlight"><pre><br />  &lt;div class="ctrlHolder "&gt;     <br />    &lt;label for="id_username"&gt; * User Name&lt;/label&gt;<br />    &lt;input id="id_username" type="text" name="username" maxlength="30" /&gt;<br />  &lt;/div&gt;<br /></pre></div></pre>Does it make sense for django-uni-form to provide the following?<pre><div class="highlight"><pre><br />&lt;fieldset class="inlineLabels"&gt;<br />&lt;legend&gt;* Required fields&lt;/legend&gt;        <br />  &lt;div class="ctrlHolder "&gt;     <br />    &lt;label for="id_username"&gt; * User Name&lt;/label&gt;<br />    &lt;input id="id_username" type="text" name="username" maxlength="30" /&gt;<br />  &lt;/div&gt;<br />&lt;/legend&gt;<br />&lt;/fieldset&gt;<br /></pre></div></pre>With this, you can still add in buttons elegantly. Thoughts?<br /><br /><span style="font-weight: bold;">Update:</span> I'm working with James Tauber and perhaps some others to figure out the best way to make this work.