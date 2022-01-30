---
date: '2007-11-09T07:07:00.001-08:00'
description: ''
published: true
slug: 2007-11-zope-3-security
tags:
- zope
- legacy-blogger
time_to_read: 5
title: Zope 3 Security
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/11/zope-3-security.html)*.

Everyone is right, its not hard to figure out. I would have to say that the docs for it are a bit wordy. So here is my brief summary of things:<br /><ul><li>Permissions are associated with components of your applications. Zope has some built in ones but you can define new ones via ZCML and link them to components via ZCML.</li><li>Roles are what something is supposed to be generally doing. Such as be a 'user' or 'manager'. They are defined in ZCML and are associated with Permissions and Principals via grants.</li><li>Principals are anything that accesses something. You could call them 'users' or 'members'. They are called principals because nearly anything can serve as one. Hence why users and members is not used. Principals are associated to Roles via grants. Principals are defined in ZCML but can also be called from special components called 'Password Authentication Utilities'.</li><li>Grants are how things are related to each other in this via grants.</li></ul>And since a picture says a thousand words...<br /><br /><a href="http://1.bp.blogspot.com/_KEFU5_uGRyw/RzR6raHBvOI/AAAAAAAAAAs/g8M1AfV1xao/s1600-h/auth.jpg"><img alt="" border="0" id="BLOGGER_PHOTO_ID_5130860761643597026" src="http://1.bp.blogspot.com/_KEFU5_uGRyw/RzR6raHBvOI/AAAAAAAAAAs/g8M1AfV1xao/s320/auth.jpg" style="margin: 0px auto 10px; display: block; text-align: center; cursor: pointer;" /></a>