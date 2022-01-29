---
date: '2009-07-17T08:12:00.006-07:00'
description: ''
published: true
slug: 2009-07-turning-away-from-captcha
tags:
- rant
- django
- plone
- python
- legacy-blogger
time_to_read: 5
title: Turning away from CAPTCHA
---

When I first encountered <a href="http://en.wikipedia.org/wiki/CAPTCHA">CAPTCHA</a> I thought it was a grand idea. My opinion has changed.<br /><br />First of all I believed it allowed humans and machines to be differentiated on the web. Sadly, cracking CAPTCHA is done on a regular basis, and there are white papers on how to do it in lots of different languages (<a href="http://www.wausita.com/captcha/">such as this one in Python</a>). Bugs in the submission system or cheap human labor works as well. There are enough ongoing issues that most registration systems still include some sort of email system to help filter out the robots.<br /><br />Second, <a href="http://www.456bereastreet.com/archive/200709/provide_an_accessible_alternative_if_you_must_use_a_captcha/">CAPTCHA fails on accessibility</a>. Yes, you can provide an audio alternative, but what if your users are blind AND deaf? Well, I've actually been told by accessibility experts that a non-CAPTCHA form should be provided for those people. Yes, when I said 'experts', I meant plural!<br /><br />So where does that leave us for weeding out the humans from the computers?<br /><br />Right now I'm a fan of <a href="http://www.w3.org/TR/turingtest/#logic">logic based CAPTCHA alternatives</a>. The idea is to provide simple questions that are relatively easy for humans to solve and hard for computers to answer. A good example would be, 'Today is Saturday. Yesterday was ___', and the idea is that you should have hundreds or thousands of questions. In fact, I came up with a <a href="http://plone.org/">Plone</a> widget package called <a href="http://plone.org/products/humanator/">humanator</a> to support this concept. There will be a <a href="http://djangoproject.com/">Django</a> version shortly.<br /><br />There are some issues to overcome:<br /><ul><li>We need to cook up a few thousand questions to make it a bit harder on the brute force people.<br /></li><li>Internationalization will require translators from many languages to support the projects.</li><li>There is also the issue of the cultural context of the questions. Since this is supposed to be user friendly we don't want to ask any inappropriate questions. I can police English pretty well, but I'll have little control over what happens in other languages.</li><li>Some people thing the logic method is weaker from a security perspective than CAPTCHA. Both arguably rely on a form of security through obfuscation, and I think with about the same amount of work both can be hacked. But a logic based system is easier to set up. ;)<br /></li></ul>