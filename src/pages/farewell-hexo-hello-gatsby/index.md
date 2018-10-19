--- 
path: "/farewell-hexo-hello-gatsby"
title: "Farewell Hexo, Hello Gatsby" 
published: true
date: "22-09-2018" 
--- 

I started my blog using the static site generator Hexo, but decided to re-start the blog using GatsbyJS. This blog post will be my opinion based on the little experience I have with each tool. 

Before I chose Hexo, I considered using Jekyll and a ton of other static site generators, but ultimately chose Hexo. considered using Jekyll and a bunch of other static site generators but ultimately chose Hexo. I can't quite remember what the deciding factor was but I am glad I chose it. 

On paper, Hexo seemed great, and when I first started using Hexo I loved it. I enjoyed the EJS templating language, I found a good tutorial which allowed me to quickly create my own theme. And I enjoyed being able to use only a few commands and then markdown to painlessly create blog posts. I loved that it came as an NPM package. 

Then one day, or a series of days, things went wrong, I started experience bugs which I was certain were specific to Hexo - for example, I'd type in Hexo commands, and my computer would not recognize them, thus I'd have to re-install Hexo. And when I tried looking online for fixes to these issues, there was either no information - or the information was in a language that I do not speak. 

So, I did some research and narrowed down a list of static site generators to replace Hexo. There were a few which stood out, but given the hype that surrounded Gatsby, I decided to take a leap of faith and use Gatsby. And I love Gatsby. 

Gatsby is not lying when it claims to offer blazingly fast websites. Admittedly I am still in the process of having a ton of content, but what I have so far is pretty impressive. While it is true that I was once a fan of templating languages, I am much more a fan of React (component based libraries). I enjoyed the "excuse" to learn a tiny bit of GraphQL in the process. 

And I am now able to display beautiful code snippets thanks to the  "gatsby-remark-prismjs" plugin. I love that Gatsby is highly flexible and extendable. I like this because the "{% codeblock %} function someCode {} {% endcodeblock %}", can actually cause a bug if you forget to close the codeblock. Whereas the "``` function someCode() { }```" is rather familliar from DIscord (and Python), as well as being shorter to type and very much customizable. 

In terms of folder structure, I am still getting used to having an entire folder for one blog post - but I suspect this makes it easier to include images and other media and keep them tied to their appropriate blog post.  

And most importantly, I like being able to use Github Pages to host my blogs freely and conveniently. 

I mentioned that there was (and still is) a lot of hype regarding Gatsby - this means that there will be a good community and support will be available -  having a background in React is entirely helpful too, but even if you are new to React you can still be productive with Gatsby. 

One dislike I have about Gatsby is that it lacks a "create post" command, whereas Hexo had one. 

All in all, I am both sad and glad that I have had the opportunity to use Hexo, and have decided to begin using Gatsby. 
