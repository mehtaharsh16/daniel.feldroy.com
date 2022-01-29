---
date: '2007-11-13T05:27:00.000-08:00'
description: ''
published: true
slug: 2007-11-im-serving-out-image-and-audio-files
tags:
- zope
- legacy-blogger
time_to_read: 5
title: What do you do when zope.Public refuses to be Public?
---

I'm serving out image and audio files from Zope 3 for my Captcha application.  Since the images and audio files are for public consumption, I marked their components in the zcml as having the permission of zope.Public.  This works fine for the image, but not for the audio component.  Is there something I'm missing?  For reference, this is part of my ZCML:<br /><pre>browser:page<br />name="captcha.wav"<br />for="captchad.interfaces.ICaptchaContainer"<br />class="captchad.browser.folder.CaptchaAudio"<br />permission="zope.Public"<br /><br /><br />browser:page<br />name="captcha.png"<br />for="captchad.interfaces.ICaptchaContainer"<br />class="captchad.browser.folder.CaptchaImage"<br />permission="zope.Public"<br /><br /></pre><br /><span style="font-weight: bold;">Update 2007/11/14</span>: Looks like the object those things reside in need to have <span style="color: rgb(153, 0, 0);">zope.Public</span> declared for it as well.  I'm not sure I like that approach, and I'm wondering if I'm just not '<span style="font-style: italic;">getting</span>' something about Zope 3 security.