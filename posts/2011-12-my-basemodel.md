---
date: '2011-12-09T07:05:00.000-08:00'
description: ''
published: true
slug: 2011-12-my-basemodel
tags:
- django
- legacy-blogger
time_to_read: 5
title: My BaseModel
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2011/12/my-basemodel.html)*.

When I build projects in <a href="http://djangoproject.com">Django</a> I like to have a 'core' app with all my common bits in it, including a <a href="https://github.com/opencomparison/opencomparison/blob/master/apps/core/models.py">BaseModel</a>. In that BaseModel I'll define the most basic fields possible, in this case a simple pair of created/modified fields built using custom <a href="http://djangopackages.com/packages/p/django-extensions/">django-extension</a> fields. <br /><br /><pre class="prettyprint-py"># core/models.py<br />from django.db import models<br />from django.utils.translation import ugettext_lazy as _<br /><br />from core.fields import CreationDateTimeField, ModificationDateTimeField<br /><br />class BaseModel(models.Model):<br />    """ Base abstract base class to give creation and modified times """<br />    created     = CreationDateTimeField(_('created'))<br />    modified    = ModificationDateTimeField(_('modified'))<br />    <br />    class Meta:<br />        abstract = True<br /></pre><br />You'll notice I also have core.fields defined. That is because (unless things have changed), django-extensions doesn't work with <a href="http://djangopackages.com/packages/p/south/">South</a> out of the box. Hence the file below where I extend those fields to play nicely with my <a href="http://djangopackages.com/grids/g/database-migration/">migration tool</a> of choice.<br /><br /><pre class="prettyprint-py"># core/fields.py<br />from django_extensions.db.fields import CreationDateTimeField, ModificationDateTimeField<br /><br />class CreationDateTimeField(CreationDateTimeField):<br /><br />    def south_field_triple(self):<br />        "Returns a suitable description of this field for South."<br />        # We'll just introspect ourselves, since we inherit.<br />        from south.modelsinspector import introspector<br />        field_class = "django.db.models.fields.DateTimeField"<br />        args, kwargs = introspector(self)<br />        return (field_class, args, kwargs)    <br />        <br />        <br />class ModificationDateTimeField(ModificationDateTimeField):<br /><br />    def south_field_triple(self):<br />        "Returns a suitable description of this field for South."<br />        # We'll just introspect ourselves, since we inherit.<br />        from south.modelsinspector import introspector<br />        field_class = "django.db.models.fields.DateTimeField"<br />        args, kwargs = introspector(self)<br />        return (field_class, args, kwargs)<br /></pre><br />Unfortunately, this all shows up as red marks when I run <a href="http://nedbatchelder.com/code/coverage/">coverage.py</a> reports. To deal with that I added in some tests. However, I'll readily I'm not super pleased with the tests below, but they are better then nothing, right?<br /><br /><pre class="prettyprint-py"># core/tests/test_fields.py<br />from django.test import TestCase<br /><br />from core.fields import CreationDateTimeField, ModificationDateTimeField<br /><br />class TestFields(TestCase):<br />    <br />    def test_create_override(self):<br />        field = CreationDateTimeField()<br />        triple = field.south_field_triple()<br />        <br />        self.assertEquals(triple[0], 'django.db.models.fields.DateTimeField')<br />        self.assertEquals(triple[1], list())<br />        self.assertEquals(triple[2], {'default': 'datetime.datetime.now', 'blank': 'True'})<br />        <br />    def test_modify_override(self):<br />        field = ModificationDateTimeField()<br />        triple = field.south_field_triple()<br />        <br />        self.assertEquals(triple[0], 'django.db.models.fields.DateTimeField')<br />        self.assertEquals(triple[1], list())<br />        self.assertEquals(triple[2], {'default': 'datetime.datetime.now', 'blank': 'True'})<br /></pre><br /><h3>Closing Thoughts</h3>My pattern is also If I need more stuff in this BaseModel I extend it with another abstract class instead of changing it. That way I can be sure at least this part works really well and any additions are isolated in another class.<br /><br />I'll reiterate that I'm not happy with the tests. I'm open to suggestions. <br /><br />I pretty much got the BaseModel from <a href="https://twitter.com/fwiles">Frank Wiles</a> of <a href="http://www.revsys.com/">RevSys</a> back in the summer of 2010. What I added was sticking all the common bits into the core app, getting the South migration to play more nicely, and adding tests.<br /><br /><h3>But much of this is moot!</h3><strong>Note</strong>: I added this segment several days after my original posting because of the stuff in the comments. Thanks <a href="http://twitter.com/jezdez">Jannis Leidel</a> and someone named John - this is part of why I post. <br /><br />Jannis and John both pointed out that django_extensions now has a TimeStampedModel that does what my BaseModel does. They also pointed out that django_extensions comes with built-in South migrations for it's CreationDateTimeField and ModificationDateTimeField fields.<br /><br />Which means thanks we can safely just do this and not worry about migrations:<br /><br /><pre class="prettyprint-py"># core/models.py<br />from django.db import models<br />from django.utils.translation import ugettext_lazy as _<br /><br />from django_extensions.db.fields import CreationDateTimeField, ModificationDateTimeField<br /><br />class BaseModel(models.Model):<br />    """ Base abstract base class to give creation and modified times """<br />    created     = CreationDateTimeField(_('created'))<br />    modified    = ModificationDateTimeField(_('modified'))<br />    <br />    class Meta:<br />        abstract = True<br /></pre>

---

## 5 comments captured from [original post](https://pydanny.blogspot.com/2011/12/my-basemodel.html) on Blogger

**Sean O'Connor said on 2011-12-09**

Carl's <a href="https://bitbucket.org/carljm/django-model-utils/src" rel="nofollow">django-model-utils</a> provides similar auto fields and base models that play nice with south.  Might be worth checking out :)

**John said on 2011-12-09**

I don't think you need your BaseModel abstract class at all as you don't need to add `created` and `modified` manually, just subclass the TimeStampedModel in django_extensions. I do this and don't need to do anything special to use south.<br />See http://packages.python.org/django-extensions/model_extensions.html<br /><br />    from django_extensions.db.models import TimeStampedModel<br />    class MyModel(TimeStampedModel):<br />        # model now has 'created' and 'modified' fields<br />        pass

**pydanny said on 2011-12-09**

@John - I think this got added to django_extensions after I created my BaseModel class. But it's a wonderful development and I'm happy!

**Diederik van der Boor said on 2011-12-09**

Awesome idea to have the creationdate and modificationdate as base class fields.<br /><br />In the recent Django versions (1.2?) it is no longer needed to have separate fields. You could also use:<br /><br />created = DateTimeField(_('created'), auto_now_add=True)<br />modified = DateTimeField(_('modified'), auto_now=True)<br /><br />Making the code even easier :-)

**pydanny said on 2011-12-15**

Diederik van der Boor,<br /><br />auto_add_now and auto_add are deprecated. We aren't supposed to use them anymore. :D

