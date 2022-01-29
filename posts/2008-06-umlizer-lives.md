---
date: '2008-06-15T16:14:00.003-07:00'
description: ''
published: true
slug: 2008-06-umlizer-lives
tags:
- NASA science
- geek celebrities
- django
- plone conference
- plone
- python
- ubigraph
- graphviz
- umlizer
- zope
- legacy
time_to_read: 5
title: Umlizer lives!
---

Still is an early alpha release but nevertheless it lives!  At this moment it currently handles all the formats I want for version one and has been tested against all target <a href="http://plone.org">Plone</a> versions.  In other words, it meets the requirements I set for this tool, and now what remains is cleanup, documentation, and more testing.<br /><br /><span style="font-weight: bold;">What is Umlizer?</span><br />Umlizer is a Plone 2.5x/3.x package that introspects your Zope Object DataBase (ZODB) and then returns a view of your database in the specification that you want.  Currently Umlizer provides the following formats for its view:<br /><ul><li>DOT for rendering into UML via <a href="http://graphviz.org/">graphviz</a></li><li>UML in JPG rendered via graphviz if graphviz is installed</li><li>HTML list for easy reading<br /></li><li>Comma Seperate Values (CSV)</li><li>3-d animated graph rendered via <a href="http://www.ubietylab.net/ubigraph/index.html">ubigraph</a></li></ul>Before you ask this is a very Plone specific tool.  Django already has a similiar tool called <a href="http://code.djangoproject.com/wiki/DjangoGraphviz">DjangoGraqhviz</a>. <br /><br /><span style="font-weight: bold;">Why Umlizer?</span><span id="formatbar_Buttons" style="display: block;"><span class="on" id="formatbar_CreateLink" style="display: block;" title="Link"></span></span>Umlizer was designed to represent the complexity of the <a href="http://nasascience.nasa.gov">Nasa Science</a> site architecture, which was originally a rather complex UML diagram.   The XMI for that UML diagram became corrupted, and we did not have a backup.  Training people on the database has thus been a chore since, whether they be developers or content editors.  In a couple other projects I've noticed that going through Plone code to figure out an architecture can be a pain.  So what about a pretty diagram?<br /><br />For nearly a year I tooled around with different iterations of this effort.  In general, each of these iterations relied on protected Python scripts in Plone, which are limited and forced the user of the tool to make many steps before getting a view.  These scripts were fragile and arcane, and just plain sucked.  Different views of the data were impossible to generate.  The latest version of this hack had really nice code, but was a hack.<br /><br />So I thought, why not try to make it a Zope 3 style Plone package again?  My previous attempt in September of 2007 tanked, but my skills in this arena had really improved thanks to training, a cancelled Zope 3 effort, and lately my co-worker Reed's insistence on using it and my need to maintain and extend his work.<br /><br />Also, in the <a href="http://plone.org">Plone</a> community, thanks to  <a href="http://plone.org/author/jensens">Jens Klein</a> we have <a href="http://plone.org/products/archgenxml">ArchGenXml</a> which is why we used UML in the first place.  When I met him in Italy in October of 2007 for Plone Conference 2007, he told me about a pet project of his called Genesis.  From what he said at the oldest pizzeria in the world is that Genesis is ArchGenXml with a very modular architecture.  So I was determined to make this as modular as possible, trying to work outside the confines of Plone and isolating individual pieces as much as possible.<br /><br />After about a week of playing with this along with my other duties, Umlizer is working at an alpha level!<br /><br /><span style="font-weight: bold;">Where can we get Umlizer?<br /></span>That is a very good question.  Because of our internal need for documentation this was done under the auspices of NASA.  One of the things on my schedule tomorrow is asking for permission to release Umlizer as an open source package.  Since there is nothing sensitive about Umlizer, I don't see anything preventing its release.<span style="font-weight: bold;"><br /></span>