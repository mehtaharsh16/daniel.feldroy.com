---
date: '2007-06-12T05:12:00.000-07:00'
description: ''
published: true
slug: 2007-06-thought-on-methods-in-plone
tags:
- plone
- zope
- legacy-blogger
time_to_read: 5
title: A thought on methods in Plone
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/06/thought-on-methods-in-plone.html)*.

<span style="font-style: italic;">Note: Because of the limitations of blogger, I am replacing the '<' and '>' in <span class="blsp-spelling-error" id="SPELLING_ERROR_0">XHTML</span> statements with '[' and ']'.</span><br /><br />We just did a sprint on our big project at work.  My first step was to create a bunch of methods in the content types that would traverse between items via the reference catalog (yes Virginia, we are using the Relations product along with Association Classes get <span class="blsp-spelling-error" id="SPELLING_ERROR_1">ArchGenXML</span>).<br /><br />Our first thought was to return a <span class="blsp-spelling-error" id="SPELLING_ERROR_2">tuple</span> of the title, description, and <span class="blsp-spelling-error" id="SPELLING_ERROR_3">url</span> of the referred item.  Well, that turned out to be annoying because: <blockquote style="font-weight: bold;">[div content="python:item[1]"]</blockquote> is not as much fun as: <blockquote style="font-weight: bold;">[div content="item/description"]</blockquote>Also, for the graphic designers, having them start doing '<span style="font-weight: bold;">python:</span>' everywhere just seemed like fighting a battle we didn't need to fight.<br /><br />Then we decided to return a dictionary containing title, <span class="blsp-spelling-error" id="SPELLING_ERROR_4">url</span>, and description.  And in some cases, acronym, image, and more.  Now we have: <blockquote style="font-weight: bold;">[div content="item/description"]</blockquote>Hooray!  Except that there are about 10+ and growing examples now of times when we missed something that needed to be returned.<br /><br />So it hit me, why not just return the darn catalog brain?  Sure, reference_catalog doesn't return a usable URL (you have to strip off the /at_reference/<span class="blsp-spelling-error" id="SPELLING_ERROR_5">md</span>5_hash), but I've already written an often reused python script that does this called <span class="blsp-spelling-error" id="SPELLING_ERROR_6">cleanUrl</span>.  If we went this method, we get: <blockquote style="font-weight: bold;">[div content="<span class="blsp-spelling-error" id="SPELLING_ERROR_7">itemBrain</span>/description"]</blockquote>And if we hit another snag where we need to also return field x, y, and z, we have them do this: <blockquote style="font-weight: bold;">[div define="item python:<span class="blsp-spelling-error" id="SPELLING_ERROR_8">itemBrain</span>.<span class="blsp-spelling-error" id="SPELLING_ERROR_9">getObject</span>()" content="item/<span class="blsp-spelling-error" id="SPELLING_ERROR_10">funnyQuote</span>"]</blockquote>