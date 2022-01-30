---
date: '2010-05-11T12:14:00.003-07:00'
description: ''
published: true
slug: 2010-05-using-modernizr-to-help-with-canvas
tags:
- canvas
- javascript
- HTML5
- legacy-blogger
time_to_read: 5
title: Using modernizr to help with canvas
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/05/using-modernizr-to-help-with-canvas.html)*.On my current project I've been using a little bit of the <a href="http://en.wikipedia.org/wiki/HTML5">HTML5</a>&nbsp;<a href="http://en.wikipedia.org/wiki/Canvas_element">Canvas element</a> to provide a little bell/whistle. However, the problem with Canvas is that not all browsers support it. Out of the box though Canvas gives you a quick and handy way of dealing with that problem:<br /><br /><pre class="prettyprint lang-html">&lt;div id="content"&gt;<br />    &lt;div id="demo-space-wrapper"&gt;<br />        &lt;canvas height="100" id="demo-space" width="100"&gt;<br />            This text is displayed if the client browser does not support HTML5 Canvas.<br />        &lt;/canvas&gt;<br />    &lt;/div&gt;<br />&lt;/div&gt;<br /></pre><br />The problem with this approach is that if your layout expects to have an object there and your client's use of Internet Explorer doesn't include the Canvas extension then this could damage the overall feel of your layout.<br /><br />And that is where <a href="http://www.modernizr.com/">Modernizr</a> comes in to play. It is a trivial to use JavaScript library that makes it possible to detect if a browser can use Canvas or any other HTML control. So what I did was take the <a href="http://www.modernizr.com/docs/#canvas">Modernizr Canvas detection documentation</a> and apply it to my JavaScript. With that in hand I wrote this:<br /><br /><pre class="prettyprint lang-js">// check for canvas<br />if (Modernizr.canvas) {<br />    // We have canvas so add a rectangle<br />    var demospace = document.getElementById('demo-space');<br />    var context = demospace.getContext('2d');<br />    context.fillStyle = "rgb(255,0,0)";<br />    context.fillRect(10, 10, 10, 10)            <br />} else {<br />    // No canvas. Remove the layout space to preserve the layout.<br />    var ul = document.getElementById('content');<br />    var li = document.getElementById('demo-space-wrapper');<br />    ul.removeChild(li);<br />};<br /></pre>