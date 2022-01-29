---
date: '2011-05-26T05:40:00.000-07:00'
description: ''
published: true
slug: 2011-05-python-http-requests-for-humans
tags:
- rant
- python
- legacy-blogger
time_to_read: 5
title: Python HTTP Requests for Humans
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/05/python-http-requests-for-humans.html)*.

Ever try to use <a href="http://python.org/">Python's</a> standard library for doing a <a href="http://en.wikipedia.org/wiki/POST_(HTTP)">POST</a>? Or a <a href="http://en.wikipedia.org/wiki/GET_(HTTP)">GET</a>,&nbsp;<a href="http://en.wikipedia.org/wiki/PUT_(HTTP)">PUT</a>, or <a href="http://en.wikipedia.org/wiki/DELETE_(HTTP)">DELETE</a>? What about when you have to deal with&nbsp;<a href="http://en.wikipedia.org/wiki/Basic_access_authentication">HTTP Basic Auth</a>?<br /><br />In a word, ugh.<br /><br />Let's face it, this is one part of Python that is really not for human consumption. While there are a million things you can do with things like&nbsp;<a href="http://docs.python.org/library/urllib.html">urllib</a>,&nbsp;<a href="http://docs.python.org/library/urllib2.html">urllib2</a>,&nbsp;<a href="http://docs.python.org/library/socket.html">socket</a>,&nbsp;<a href="http://docs.python.org/library/urlparse.html">urlparse</a>, the fact of the matter is that implementing anything beyond <b>urllib.urlopen()</b> is a matter of diving into arcane APIs.<br /><br />Sure, thanks to works like <a href="http://www.doughellmann.com/PyMOTW/">Doug Hellmann's Python Module of the Week</a>&nbsp;and <a href="http://www.voidspace.org.uk/python/articles/urllib2.shtml">Michael Foord's documentation of urllib2</a>&nbsp;the problem isn't unsurmountable. Unfortunately, the eclectic mix of libraries and weird APIs means when you have to revisit your code in a few months your code feels like spaghetti.<br /><br />Do you doubt me?<br /><br /><pre class="prettyprint lang-py"># This sample gleefully taken from https://gist.github.com/973705<br /><br />import urllib2<br /><br />gh_url = 'https://api.github.com'<br />gh_user= 'user'<br />gh_pass = 'pass'<br /><br />req = urllib2.Request(gh_url)<br /><br />password_manager = urllib2.HTTPPasswordMgrWithDefaultRealm()<br />password_manager.add_password(None, gh_url, gh_user, gh_pass)<br /><br />auth_manager = urllib2.HTTPBasicAuthHandler(password_manager)<br />opener = urllib2.build_opener(auth_manager)<br /><br />urllib2.install_opener(opener)<br /><br />handler = urllib2.urlopen(req)<br /><br />print handler.getcode()<br />print handler.headers.getheader('content-type')<br /><br /># ------<br /># 200<br /># 'application/json'</pre><br />Really?<br /><br />This much code to make a simple HTTP GET request with some auth?!?<br /><br /><b>Really?!?</b><br /><br />This is a debugging nightmare! Especially when you have to deal with complex service APIs provided by Paypal, Amazon, Google, Authorize.net, and a million other systems.<br /><br />I bet I could earn a decent living by charging Pythonistas a buck each time they took the shortcut of doing HTTP actions in the shell via curl or wget. <br /><br />Anyway, wouldn't it be great if we could just call a single function with the URL and auth data as parameters? And that the same dialogue would exist for GET, POST, PUT, DELETE or whatever? Wouldn't that be just plain wonderful? If only we could have that functionality in Python!!!<br /><br />Fortunately for us, we do have that functionality courtesy of <a href="http://kennethreitz.com/">Kenneth Reitz</a>'s <a href="http://pypi.python.org/pypi/requests">Requests</a> library! Our verbose code sample above becomes the wonderfully terse and easy-to-memorize script as shown below:<br /><br /><pre class="prettyprint lang-py"># This sample joyfully taken from https://gist.github.com/973705<br /><br />import requests<br /><br />r = requests.get('https://api.github.com', auth=('user', 'pass'))<br /><br />print r.status_code<br />print r.headers['content-type']<br /><br /># ------<br /># 200<br /># 'application/json'</pre><br />Want to do a post with data? Try this:<br /><br /><pre class="prettyprint lang-py"># This example cooked up by me!<br /><br />import requests<br />post_data = {"amount":10000, "service":"writing blog posts"}<br /><br />r = requests.post('http://example.com/api', post_data, auth=('user', 'pass'))<br /><br />print r.status_code<br />print r.headers['content-type']<br /><br /># ------<br /># 200<br /># 'application/json'</pre><br />The <a href="https://github.com/kennethreitz/requests">Requests</a> library is still young, but I've yet to run into any bugs or undocumented edge cases. The <a href="http://docs.python-requests.org/en/latest/index.html">documentation is awesome</a>, but you don't really need it at all. The library is intuitive, fun, and and there is clearly one way to do.

---

## 8 comments captured from [original post](https://pydanny.blogspot.com/2011/05/python-http-requests-for-humans.html) on Blogger

**Argentino said on 2011-05-26**

What about httplib2. I think it's pretty straightforward too.

**Douglas Camata said on 2011-05-26**

There's a similar API that can be used for http requests named Restfulie. It was made originally to work with RESTful and hypermedia resources, but it can handle simple requests as well in a simple and intuitive. <br /><br />And if you want, it can convert the response into Python objects (by default, only xml and json, but  you can add your own converters) and can convert the kwargs to request parameters (again, by default only to xml or json, but you can add your own converters).<br /><br />Just converting the examples shown here to Restfulie:<br /><br />response = Restfulie.at('https://api.github.com').auth('user', 'pass').get()<br />response.body<br />response.code<br />response.headers<br /># if you want it as an object<br />response_as_object = response.resource()<br /><br />response = Restfulie.at('http://example.com/api').auth('user', 'pass').post(amount=1000, service=&quot;writing blog posts&quot;)<br />response.body<br />response.code<br />response.headers<br /># if you want it as an object and the content-type is application/json, Restfulie figures it out and use the right converter<br />response_as_object = response.resource()<br /><br />If you want more information, like how to interact with hypermedia, please visit the project's page at github: https://github.com/caelum/restfulie-py

**Unknown said on 2011-05-26**

Faced the same problem with Ruby's NetHTTP. Tried to solve it in a way that wouldn't leave my eyes bleeding. See this <a href="https://github.com/kaiwren/wrest/blob/master/examples/delicious.rb" rel="nofollow">example</a> demonstrating using the Delicious api.

**Rach said on 2011-05-26**

While the requests project looks interesting, it seems a little disingenuous for the project's author to compare usage snippets with appears to be a purposely inflated LoC count in the urllib2 case.<br /><br />[That said it wouldn't make the urllib2 case much better if, for example, gh_url/gh_user/gh_pass were inlined as in the requests example.]<br /><br />Would love to see a comparison to other libraries by someone with the experience too(not me :( ), with feature comparisons.  Like voidspace did with his mock comparison.

**Aramgutang said on 2011-05-26**

Another great &quot;feature&quot; of the requests library is that its developers are friendly and responsive. I submitted a pull request fixing a bug in cookie handling, and it was merged in within an hour (and they even added me to AUTHORS just for a 2-line change).

**pydanny said on 2011-05-27**

@Argentino - I've used httplib2 quite a bit but do not care for its API or response objects. It isn't intuitive. Tuples for the response? Why not an object like requests?<br /><br />@Douglas Camata - Restfulie looks pretty neat - especially how it handles response objects. That said, I'm not so sure about the API. It is interesting that you fire it off with a .get() or .post() method, but the rest just seems a bit cumbersome.<br /><br />@klotz - You raise a good point, in that it seems like Requests only allows dicts of data to be encoded. Seems like it should also accept a string, right?<br /><br />@Rach - I'll see if I can come up with a good follow up post to demonstrate how the various libraries do this sort of thing. Maybe next week...

**Argentino said on 2011-05-27**

@pyDanny<br />I don't mind about doing:<br /><br />resp, content = h.request(&quot;http://example.org/&quot;, &quot;GET&quot;)<br /><br />But i agree that an object is much nicer.<br /><br />thanks and nice post. ;-)

**andry said on 2011-11-11**

very good tutorial and can hopefully help me in building json in the application that I created for this lecture. thank you

