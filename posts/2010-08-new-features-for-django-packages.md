---
date: '2010-08-28T17:11:00.000-07:00'
description: ''
published: true
slug: 2010-08-new-features-for-django-packages
tags:
- django
- django packages
- legacy-blogger
time_to_read: 5
title: New features for Django Packages
---

Since the <a href="http://djangodash.com/">Django Dash</a> ended, the Django Packages team has been working to add new features and close out bugs.<br /><br /><b>"I Use This" added</b><br /><br />Since we only want hard metrics on this site, we incorporated an "I Use This" button on the packages. This is so you can identify which packages you use. Please don't press this button for packages that you like, only the ones that are part of your coding efforts.<br /><br /><b>Added BitBucket support</b><br /><br />We are still working out some of the kinks for coming up with stats from <a href="http://bitbucket.org/">BitBucket</a>. Most of the data we collect is fetched via the API, but a little is scraped off individual project pages.<br /><br /><b>Cache the commits</b><br /><br />Originally the commit history was &nbsp;fetched live. But <a href="http://github.com/">Github</a> only provides the last 35 commits and BitBucket limits you to the last 50 commits. So now we store the commit history and update it nightly. Which means that the sooner you post your packages the better your commit history will look on Django Packages.<br /><br /><b>Rebuilt the package updater</b><br /><br />Limitations on how many API calls you can make against Github (60 a minute) meant that we had to write some fun code to get around that problem. I think the problem is solved now, but I'm worried I might get to eat my words.<br /><br /><b>Added a help section</b><br /><br />As much as we wanted a completely intuitive site, this will hopefully make it easier for people to figure out how to participate on the site.<br /><br /><b>Package Add/Edit form refactor</b><br /><br />We completely rebuilt the Package add/edit form to make it easier to add packages. So far the response has been entirely positive.<br /><br /><b>Page cleanup and CSS Reset</b><br /><br />We've been slowly cleaning up the HTML and resetting the CSS. Everything is looking prettier. Our goal is to make things more readable, so a lot of the changes are subtle.<br /><br /><b>Email verification works</b><br /><br />It works, and now you get an email to confirm your account.