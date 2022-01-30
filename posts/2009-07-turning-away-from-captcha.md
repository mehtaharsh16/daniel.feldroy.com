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

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2009/07/turning-away-from-captcha.html)*.When I first encountered <a href="http://en.wikipedia.org/wiki/CAPTCHA">CAPTCHA</a> I thought it was a grand idea. My opinion has changed.<br /><br />First of all I believed it allowed humans and machines to be differentiated on the web. Sadly, cracking CAPTCHA is done on a regular basis, and there are white papers on how to do it in lots of different languages (<a href="http://www.wausita.com/captcha/">such as this one in Python</a>). Bugs in the submission system or cheap human labor works as well. There are enough ongoing issues that most registration systems still include some sort of email system to help filter out the robots.<br /><br />Second, <a href="http://www.456bereastreet.com/archive/200709/provide_an_accessible_alternative_if_you_must_use_a_captcha/">CAPTCHA fails on accessibility</a>. Yes, you can provide an audio alternative, but what if your users are blind AND deaf? Well, I've actually been told by accessibility experts that a non-CAPTCHA form should be provided for those people. Yes, when I said 'experts', I meant plural!<br /><br />So where does that leave us for weeding out the humans from the computers?<br /><br />Right now I'm a fan of <a href="http://www.w3.org/TR/turingtest/#logic">logic based CAPTCHA alternatives</a>. The idea is to provide simple questions that are relatively easy for humans to solve and hard for computers to answer. A good example would be, 'Today is Saturday. Yesterday was ___', and the idea is that you should have hundreds or thousands of questions. In fact, I came up with a <a href="http://plone.org/">Plone</a> widget package called <a href="http://plone.org/products/humanator/">humanator</a> to support this concept. There will be a <a href="http://djangoproject.com/">Django</a> version shortly.<br /><br />There are some issues to overcome:<br /><ul><li>We need to cook up a few thousand questions to make it a bit harder on the brute force people.<br /></li><li>Internationalization will require translators from many languages to support the projects.</li><li>There is also the issue of the cultural context of the questions. Since this is supposed to be user friendly we don't want to ask any inappropriate questions. I can police English pretty well, but I'll have little control over what happens in other languages.</li><li>Some people thing the logic method is weaker from a security perspective than CAPTCHA. Both arguably rely on a form of security through obfuscation, and I think with about the same amount of work both can be hacked. But a logic based system is easier to set up. ;)<br /></li></ul>

---

## 8 comments captured from [original post](https://pydanny.blogspot.com/2009/07/turning-away-from-captcha.html) on Blogger

**Unknown said on 2009-07-17**

Good stuff Danny. I'm reminded of Will Larson's (@lethain on the Twitter) implementation of human readable captcha in his Django blog engine. <br /><br />I'll link it here in case it might provide some inspiration towards a Django implementation of your work: http://github.com/lethain/lifeflow/blob/e8886041be227684ceb27a4a5ef2347f05c6af5e/comments/captcha/captcha.py

**pydanny said on 2009-07-17**

@Sven, can you provide specific examples of other approaches?

**Michael Warkentin said on 2009-07-17**

How exactly would a blind AND deaf user even interact with a website?

**pydanny said on 2009-07-17**

@Michael,<br /><br />Heh heh. You would be surprised. I've seen tactile Braille devices for sending text to end users.<br /><br />Also, CAPTCHA usually works really badly with those who have significant color blindness disorders.

**Unknown said on 2009-07-17**

&quot;A few thousand&quot; is such a laughably small number for any but the tinyest of sites. <br /><br />Lets assume you whip up 20,000 questions. <br />Lets further assume it takes about 2 minutes to answer one question. Then all a spamer has to do is put 100 below-minimum-wage-sweatshop-workers on it for about 6 1/2 hours [1] and all your hard tought out questions are solved and stored in a database.<br /><br />[1] 100 workers * (60 min / 2 min per question) * 6,666 h =~ 20k

**pydanny said on 2009-07-17**

@UloPe,<br /><br />Good point. In fact, there are services that will sell you several hundred thousand questions.<br /><br />So is this method crackable? Sure it is! I've said so! Heck yeah. But then so is CAPTCHA. <br /><br />So what remains? IP blocking against people who try it too many times? That is definitely under consideration.

**Colm O'Connor said on 2009-07-19**

It's all predicated upon each site that does it having a database of questions which is secret. Once it's no longer secret the carefully managed database is useless since the spammers will have it.<br /><br />So you can't open source it and a popular site couldn't do it.

**Rudiger Wolf said on 2009-07-27**

See http://haacked.com/archive/2007/09/11/honeypot-captcha.aspx<br /><br />Some simple ideas on alternative ways to block comment spam. Also see some of the comments.<br /><br />Enjoy

