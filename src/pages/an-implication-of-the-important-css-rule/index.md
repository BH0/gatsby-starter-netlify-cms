--- 
path: "/an-implication-of-the-important-css-rule"
title: "An Implication of the !Important CSS Rule" 
published: true
date: "18-08-2018" 
--- 

# An Implication of the "!important" CSS Rule 
This CSS rule is a rule I rarely use - and I am thankful I rarely use it due to the implication I am about to tell you about. 
<!-- more --> 
The CSS "color: red !important;" rule means that the important style will be applied no matter what - and will overrule any contradicting CSS. The rule is a powerful rule that should be used sparingly. 

# Get To The Point! 
If a developer has used this rule a lot in their CSS, chances are, they were not quite sure as to what they were doing at the time - for example, they were incapable [or too lazy to] find the appropriate CSS for the element they wished to target, so opted just to overrule the unfound CSS. 

# I Know From Personal Experience 
The first time I had ever used the "!important" rule was when I was using the Materialize CSS framework, I had made a form - and Materialize styles forms by default - while I do like the design of the default Materialize form,  It was not was I wanted, as the design did not fit the design of my website. 

So obviously, I had to customize the form, I was not very familiar with CSS frameworks at this time, so I did not want to touch the Materialize source code myself, and despite inspecting the form's elements thoroughly using the browser's developer tools - I was unable to find the correct element to target. As a [hacky] workaround, I decided just to litter that page's CSS with the "!important" tag in an attempt to overrule Materialize's default styling. 
