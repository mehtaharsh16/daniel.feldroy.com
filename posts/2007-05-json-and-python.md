---
date: '2007-05-08T08:29:00.000-07:00'
description: ''
published: true
slug: 2007-05-json-and-python
tags:
- json
- python
- xml
- legacy-blogger
time_to_read: 5
title: JSON and Python
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2007/05/json-and-python.html)*.

I hate XML.<br />I love JSON.<br /><br />Now that I've made that clear, lets go into how I want Python to handle my JSON.<br /><ol><li>I want a built-in function to JSONify.</li><li>I want a built-in function to deJSONify.</li></ol>Now in the Python world there are multiple JSON libraries.  cJSON, simplejson, demjson and more.  I've used a few of these and they all seem good.  However, most have extraneous methods that I don't care about, or name their json handling methods funny.  For example, simplejson has you do loads() and dumps() for loading and dumping of objects/strings, and load() and dump() for loading and dumping of files.  Kind of nice, but all I really want is a JSONify and a deJSONify function from my JSON handler.  I can do the rest!<br /><br />So what I've thought about doing is writing a Python JSON package that would do the following:<br /><ol><li>Load a JSON handling package.  It would have a list to select from so that if simplejson was not already on your machine, it might check for cjson, demjson, etc and grab the alternate instead. </li><li>Have a JSONify function that would convert Python objects to JSON.</li><li>Have a deJSONify function to convert JSON into Python objects.</li></ol>This looks like a fun and handy little project.

---

