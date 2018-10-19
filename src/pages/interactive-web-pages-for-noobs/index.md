--- 
path: "/interactive-web-pages-for-noobs"
title: "Interactive Webpages for Noobs" 
published: true
date: "05-05-2018" 
--- 

I personally do not like to use the word noob, but I am sure you know what it means (someone new to a topic and thus lacks knowledge). 

You have probably used a lot of websites which use interactivity and thought "wow, I hope I can do that one day". I personally do this all the time. And this blog post is here to tell you; you can - with some hard work and passion. This blog post will give you a hint as to the kind of stuff you should be search-engining. 

The process of making web pages interactive (that is; they do something when given input) is called "DOM manipulation" by responding to events - Document-Object-Model which means that you manipulate the individual elements that exist on the web page. 

There are two technologies you should be aware of: CSS (version 3, though version 4 seems to be just around the corner) and Javascript. Javascript is a programming language and many perceive it to be complicated - so for now I will focus on CSS. You can do a lot with CSS. 

# CSS Hover 
Yes, if you simply type "div:hover { /background-color: red; }" you can accomplish an interactive web-page. This means that a div will turn red when the mouse hovers over it. 

# Keyframes (Animations) 
```css
@keyframes moveElement {
    from {top: 0px;}
    to {top: 300px;}
} 
div { 
	animation: moveElement 3s infinite; 
} 
/* 
div:hover { 
	animation: moveElement 3s infinite; 
} 
```

Keyframe animations are a method of adding animations (a series of individual frames) to HTML elements. The above-uncommented code is automatic, but by combining that code with "hover" we can mimic user-interaction. Hint: look into "transform" and "transitions". 

# Media Queries (I am possibly cheating here) 
Media queries are not technically a means of implementing interactivity to your web-page, though they can be used to detect the device's orientation which I am sure you can get creative with - not very flexible though and anything complex will likely require Javascript. You will learn media queries when you learn responsive design for mobile  devices so no code snippets here. 

# Javascript: Event Listeners & DOM Manipulation 
You can attach an event listener to many HTML elements, an event listener basically waits for an interaction [from the user] to be performed on the element it is attached to and does something when so. 

```javascript 
// when the web-page is clicked 
document.addEventListener("click", e => { 
	// make the web page red 
	document.style.cssText = "background-color: red;"; 
}); 
```
I plan on going more in depth on this in future blog posts, but there are many style properties and many types of events (hover, click, etcetera), You can even dynamically add and remove CSS classes and IDs as well as entire elements using Javascript. 

# Libraries 
Doing things with vanilla Javascript may be complicated and time-consuming for you so there are many libraries like JQuery out there which exist to make this kind of stuff easier.  
