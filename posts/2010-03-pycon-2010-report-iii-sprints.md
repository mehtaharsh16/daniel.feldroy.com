---
date: '2010-03-05T10:11:00.003-08:00'
description: ''
published: true
slug: 2010-03-pycon-2010-report-iii-sprints
tags:
- pycon
- django
- python
- pinax
- legacy-blogger
time_to_read: 5
title: 'Pycon 2010 report III: Sprints'
---

*This was originally posted on blogger [here](https://pydanny.blogspot.com/2010/03/pycon-2010-report-iii-sprints.html)*.

<div>My report for the sprints of <a href="http://us.pycon.org/2010">Pycon 2010</a>. This isn't a general review of the sprints, just how it affected me.</div><div><br /></div><div><b><a href="http://pinaxproject.com/">Pinax</a> Sprint</b></div><div><br /></div><div>I don't have a hard count of how many people participated on Pinax this year. Last year's sprint looked like we had a lot more, but last year the Pinax room was home to people doing other things, albeit mostly <a href="http://djangoproject.com/">Django</a> related stuff. In any case, this year we had probably about 10 people working on Pinax, or things that went directly into Pinax.</div><div><br /></div><div>While <a href="http://jtauber.com/">James Tauber</a> is the leader of the Pinax community, this year <a href="http://oebfare.com/">Brian Rosner</a> stepped up and did an amazing job being both a technical resource and director of geeks. The mutual clarity of vision and obvious telepathy between Brian and James is truly a joy to behold. </div><div><br /></div><div>I also appreciate the entire Pinax community. Besides coaching me on <a href="http://git-scm.org/">Git</a> branches (work uses SVN so I just don't get enough Git practice) they also gracefully understood that <a href="http://pydanny.blogspot.com/2010/02/pycon-2010-report-i.html">I was a bit distracted this year</a>. </div><div><br /></div><div><b>My specific contributions to Pinax</b></div><div><br /></div><div>One of the things that had bugged me about Pinax for some time were the individual project tag apps. These were a per project extension of <a href="http://code.google.com/p/django-tagging/">django-tagging</a>, and were used to simply display tagged data. I was never happy about the displays of the tags, the lack of pagination, or that you had to create/modify an entire project level application just to control a display.</div><div><br /></div><div>So last <a href="http://www.djangocon.org/">DjangoCon</a> I wrote <a href="http://github.com/pydanny/django-tagging-ext">django-tagging-ext</a>. What it does is let you control the displays of tags via a root urlconf wiring. It still needs some work (cleaning a query, 100% test coverage, better documentation), but its a big step up from the alternative.</div><div><br /></div><div>For Pycon I volunteered to go into all the Pinax projects that used tags and replace the tag_app there with django-tagging-ext wiring. I thought it would be relatively trivial, but in practice it was not.</div><div><br /></div><div>The issue was that immediately prior to the conference, changes had been made to Pinax trunk that caused a small number of errors. All them passed existing tests but failed when you actually clicked through pages. Yeah, that does mean that Pinax <a href="http://nedbatchelder.com/code/coverage/">code coverage </a>needs improvement, but that is something we are working feverishly on. In any case, what that meant was that by implementing the new tag display system, I got the chance to fix a number of small but poignant bugs.</div><div><br /></div><div>I also worked some to help the code coverage of tests. Brian Rosner worked with me and gave me some excellent pointers. I feel sad because I think we had a disconnect on what we consider pair programming, and want to assure him that the time he gave me was a high mark of the conference.</div><div><br /></div><div><i>In regards to pair programming, I don't mind working with someone until you figure something out, but spending hours and hours sharing a computer drives me nuts. Once a person 'gets it', go do something else and let them go forward.</i></div><div><br /></div><div><b>Volume of Contribution</b></div><div><br /></div><div>Looking at the <a href="http://github.com/pinax/pinax/graphs/impact">Pinax impact chart on github</a> I can claim that I had the most impact during the sprint. Heck, <a href="http://twitter.com/pydanny/status/9908711789">I even jokingly claimed it on Twitter</a>. </div><div><br /></div><div>Except that claim is false.</div><div><br /></div><div>The truth of the matter is that how many commits I did in a brief period is nothing compared to what Brian and James did to equip others to make commits. Or what they've done during the history of Pinax. Or what they might have done to side projects that touch Pinax. Also, during the sprints my work was really focused to a specific area of Pinax, and besides some work I did with <a href="http://skyl.org/">Skylar Saveland</a>, I worked mostly by myself.</div><div><br /></div><div>So that claim is full of hubris and rather silly. If that claimed annoyed anyone in the Pinax community I'll buy your forgiveness with a beer.</div>

---

## 1 comments captured from [original post](https://pydanny.blogspot.com/2010/03/pycon-2010-report-iii-sprints.html) on Blogger

**Jerry Seutter said on 2010-03-05**

I was annoyed by that beer^H^H^H^Hclaim!  <br /><br />Wait, what's Pinax? :)

