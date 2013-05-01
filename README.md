glowing-tyrion
==============

Project Overview
----------------
Idea to grab data from VCS (Git, SVN) and display stats? commits? in Panic's Status Board or other monitoring software




StatusBoard Information
-----------------------
 - [Status Board Homepage](http://panic.com/statusboard/)
 - [Table Tutorial](http://www.panic.com/statusboard/docs/table_tutorial.pdf)
 - [Graph Tutorial](http://www.panic.com/statusboard/docs/graph_tutorial.pdf)
 - [DIY Tutorial](http://www.panic.com/statusboard/docs/diy_tutorial.pdf)

Confluence By Atlassian
-----------------------
 - [Dashboard Doc](https://confluence.atlassian.com/display/DOC/Dashboard)

Example Applications
--------------------
 - [Jenkins (Ruby)](https://github.com/krzysztofzablocki/jenkins_jobs_to_statusboard)
 - [ServerStats (PHP)](http://www.bensmann.no/server-statistics-in-statusboard/)

VCS Monitoring
--------------
 - [GitFeed (Ruby RSS)](https://github.com/scotchi/gitfeed))
 - [node-github](https://github.com/ajaxorg/node-github)
 - [gift (guh: Coffeescript)](https://github.com/sentientwaffle/gift)
 - [node-git](https://github.com/christkv/node-git/)
 - [nodegit (libgit2)](https://github.com/tbranyen/nodegit)
 - [node-git (wrapper)](https://github.com/creationix/node-git/)
 - [repoman (git+svn)](https://github.com/cliffano/repoman)
 - [nodesvn](https://github.com/enmand/nodesvn)

 ### Hooks

 - SVN: http://stackoverflow.com/questions/2004981/how-to-set-a-trigger-to-prevent-commits-to-svn-with-mergeinfo-property
 - GIT: http://git-scm.com/book/en/Customizing-Git-Git-Hooks

RSS Feed
--------
 - [node-rss](https://github.com/dylang/node-rss)

	    site.get("/rss.xml", function(req, res) {
	        res.contentType("rss");
	        res.send(posts.feed.xml());
	    });
	

 - [RSS+Express+Backbone](http://tbranyen.com/post/generating-rss-feeds-from-a-backbonejs-collection-in-nodejs)