---
date: '2010-07-16T15:14:00.000-07:00'
description: ''
published: true
slug: 2010-07-getting-piston-forms-to-play-nicely
tags:
- django
- json
- python
- xml
- legacy-blogger
time_to_read: 5
title: Getting piston forms to play nicely with JSON
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/07/getting-piston-forms-to-play-nicely.html)*.<blockquote><b>Critical Update 2012/05/10!!!</b> <br /><b>Critical Update 2012/05/10!!!</b> <br /><b>Critical Update 2012/05/10!!!</b> <br /><br />Except for a critical security patch,&nbsp;<a href="http://bitbucket.org/jespern/django-piston/wiki/Home">django-piston</a> has been unsupported for about 3 years. That is an eternity, and the number of forks to address multiple issues is cause for alarm. Also, the original author has left the project. Because of that, in it's place at this time I recommend <a href="http://pypi.python.org/pypi/django-tastypie">django-tastypie</a>. It is <a href="https://github.com/toastdriven/django-tastypie/commits/master">up-to-date</a>, has <a href="http://django-tastypie.readthedocs.org/">very good documentation</a>, <a href="http://django-tastypie.readthedocs.org/en/latest/authentication_authorization.html#oauthauthentication">supports OAUTH</a>, and scored second place in the Django Packages thunderdome (it got nearly 3x as many points!). Another tool to consider is <a href="http://django-rest-framework.readthedocs.org/">Django Rest Framework</a>, which is as good as django-tastypie but lacks the OAUTH support.</blockquote><br /><b>Back to the existing blog post...</b><br /><br />A commonly used tool by <a href="http://djangopeople.com/">Djangonauts</a> is <a href="http://bitbucket.org/jespern/django-piston/wiki/Home">django-piston</a>, which is designed to make building a <a href="http://en.wikipedia.org/wiki/REST">REST</a> API easier. It even works with <a href="http://djangoproject.com/">Django</a> forms to provide easily written PUT/POST validation, which should be pretty darn nice. Unfortunately,&nbsp;if you go with django-piston forms validation it doesn't accomodate the JSON (or XML or YAML) requests and if validation fails it responds in HTML. Even more unfortunate, making validation accept and return JSON with&nbsp;PUT/POST requests is not documented.<br /><br /><i>While one could argue that it is documented in the django-piston docstrings, in my opinion that is not sufficient.</i><br /><br />Fortunately while working on a project for <a href="http://www.revsys.com/">Revolution Systems</a> we worked out a solution:<br /><br /><pre class="prettyprint lang-py">"""<br />myapi/resource.py<br /><br />    author: Daniel Greenfeld<br />    license: BSD<br /><br />This assumes your API accepts JSON only.<br />"""<br /><br />import json<br /><br />from piston.decorator import decorator<br />from piston.resource import Resource<br />from piston.utils import rc, FormValidationError<br /><br />def validate(v_form, operation='POST'):<br />    """ This fetches the submitted data for the form <br />        from request.data because we always expect JSON data<br />        It is otherwise a copy of piston.util.validate.<br />    """<br />        <br />    @decorator<br />    def wrap(f, self, request, *a, **kwa):<br />        <br />        # Assume that the JSON response is in request.data<br />        # Probably want to do a getattr(request, data, None)<br />        #   and raise an exception if data is not found<br />        form = v_form(request.data)<br /><br />        if form.is_valid():<br />            setattr(request, 'form', form)<br />            return f(self, request, *a, **kwa)<br />        else:<br />            raise FormValidationError(form)<br />    return wrap<br /><br />class Resource(Resource):<br />    <br />    def form_validation_response(self, e):<br />        """<br />        Turns the error object into a serializable construct.<br />        All credit for this method goes to Jacob Kaplan-Moss<br />        """<br />        <br />        # Create a 400 status_code response<br />        resp = rc.BAD_REQUEST<br />        <br />        # Serialize the error.form.errors object<br />        json_errors = json.dumps(<br />            dict(<br />                (k, map(unicode, v))<br />                for (k,v) in e.form.errors.iteritems()<br />            )<br />        )<br />        resp.write(json_errors)<br />        return resp</pre><br />Usage in handlers.py:<br /><br /><pre class="prettyprint lang-py">from django import forms<br /><br />from piston.handler import BaseHandler<br /><br />from myapp.models import Article<br /><br /># We use our custom validate rather than piston's default<br />from myapi.resource import validate<br /><br />class ArticleForm(forms.Form):<br />    """ This is best stored in forms.py but we put <br />        here for sake of clarity"""<br /><br />    author      = forms.CharField(required=True)<br />    title       = forms.CharField(required=True)<br />    content     = forms.CharField(required=True)<br /><br />class ArticleHandler(BaseHandler):<br /><br />    allowed_methods = ('GET', 'POST', 'PUT', 'DELETE', )<br />    model = Article<br />                    <br />    @validate(ArticleForm)<br />    def create(self, request):<br />        # Create/POST code goes here. <br /><br />    @validate(ArticleForm)<br />    def update(self, request, id):<br />        # Update/PUT code goes here. <br /><br /></pre><br />Usage in urls.py:<br /><br /><pre class="prettyprint lang-py">from django.conf.urls.defaults import *<br /><br />from piston.authentication import HttpBasicAuthentication as auth<br /><br /># Import our ArticleHandler<br />from myapi.handlers import ArticleHandler<br /># Use our custom Resource class instead of piston's default<br />from myapi.resource import Resource <br /><br />article_handler = Resource(ArticleHandler, authentication=auth)<br /><br />urlpatterns = patterns('',<br />   url(<br />        r'^articles/(?P(\d+))$', <br />        article_handler,<br />        { 'emitter_format': 'json' },<br />        name='api_article'<br />       ),   <br />)<br /></pre><br />Of course, this assumes you are mapping Create/Read/Update/Delete (<a href="http://en.wikipedia.org/wiki/Create,_read,_update_and_delete">CRUD</a>) actions to your API.<br /><br />I'm interested to see other solutions people have used to handle this in django-piston, and what suggestions people have that could improve on the examples I'm supplying here.

---

## 5 comments captured from [original post](https://pydanny.blogspot.com/2010/07/getting-piston-forms-to-play-nicely.html) on Blogger

**Tom said on 2010-07-17**

Nice. I created an XML mimer for piston so that it could receive XML in the same format that it emits XML which worked well for what I wanted. It's @ http://bitbucket.org/cootetom/xml-mimer/overview

**pydanny said on 2010-07-17**

@Tom,<br /><br />Do you have the non-patch version of the code?

**Ryan Blunden said on 2011-02-08**

This is absolutely brilliant work. I've had a few challenges getting Django Piston to work and this blog post was immensely useful. Thanks heaps!

**Unknown said on 2012-10-06**

hey, thanks to for setting clear that piston is not developed anymore, that really makes me considering to try another framework... unfortunaly i have to say that the documentation of tastypie is awful especially if you try wo work with non-rel datatsources

**pydanny said on 2012-10-06**

Marty,<br /><br />If you have problems with the tastypie documentation, might I suggest you do one of the following:<br /><br />1. Submit a ticket to github.com/toastdriven/django-tastypie/issues and specify where you feel there are specific areas of weakness.<br /><br />2. If you figure it out, submit it as a pull request to django-tastypie.<br /><br />Also, there is a MongoEngine wrapper someone wrote for tastypie that you can find at http://www.djangopackages.com/packages/p/django-tastypie-mongoengine/. If MongoDB isn't your nonrel database, then at least you can use that as a baseline for your own implementation.

