--- 
path: "/js-html-css-working-with-classes"
title: "JS-HTML-CSS Working With Classes" 
published: true
date: "19-05-2018" 
--- 

It is possible to add styling (CSS rules) using Javascript, but that can become difficult to manage and is not very readable, so instead it is easier just to put our CSS rules in a class and give that class to the appropriate HTML tag (using Javascript). This is what we will learn how to do today. 

<!-- more --> 

I assume you know basic programming, HTML, and CSS. Here is the HTML and CSS we will be working with. 

## The Setup 
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">     
    <title>Working With Classes</title> 
    <style> 
      div { 
        width: a100; 
        height: 64px; 
        background-color: red; 
        margin: 20px 20px 20px 20px; 
        font-size: 120%; 
      } 

      .class-to-be-added { 
        background-color: green; 
      }

      .class-to-be-toggled { 
        background-color: orange; 
      } 

      .class-to-be-removed { 
        animation: Move 5s infinite; 
      } 

      @keyframes Move { 
        0% { 
          height: 64px; 
        } 
        50% { 
          height: 100px; 
        } 
        100% { 
          height: 64px; 
        }
      }
    </style> 
  </head>
  <body>
    <div class="" id="add-class-on-click"> 
      Click me to add my class 
    </div> 

    <div class="class-to-be-toggled" id="toggle-class-on-mouseover"> 
      Click me to toggle my class   
    </div> 

    <div class="class-to-be-removed" id="remove-class-on-click"> 
      Click me to remove my class thus stopping me from stretching 
    </div>  
    <script> 
    /* Javascript code  can go here */ 
    </script> 
  </body> 
</html> 
```

We will now learn how to remove, toggle or add classes using Javascript. We do this each time an event occurs (but where you do it is optional). An event-listener is simply a block of code which checks to see if a user performs a particular type of action on something - such as clicking a div. 

For convenience, we will store our HTML tags of interest inside a variable. You may place this code inside the script tag. 
```javascript
let divWithoutAClass = document.querySelector("#add-class-on-click"); 
let divColorChanges = document.querySelector("#toggle-class-on-mouseover"); 
let divWhichCanStretch = document.querySelector("#remove-class-on-click"); 
```

## Adding A Class After Mouse Click 
To add a class; all we do is use the "classList.add" method, to detect a mouse click event we use the "addEventListener" method. 

```javascript
divWithoutAClass.addEventListener("click", e => { 
  divWithoutAClass.classList.add("class-to-be-added"); 
}); 
``` 

Notice that I use Javascript to select HTML tags which have specific IDs - this is because an ID in my opinion is usually permanent, and thus I do most my styling using classes. Now, when we click our top div, it's colour will change. 

## Toggling A Class on hover (mouseover) 
To toggle a class when the mouse is over the div, we simply detect for a "mouseover" event and use the "toggle" method. 

```divColorChanges.addEventListener("mouseover", e => { // mouseover is essentially hover 
  divColorChanges.classList.toggle("class-to-be-toggled"); 
}); 
```

Now when we hover our mouse over the middle div, it's colour will change. 

## Removing A Class 
If you understand what the above code does, I am sure you can figure out what this code does. 
```javascript
divWhichCanStretch.addEventListener("click", e => { 
   divWhichCanStretch.classList.remove("class-to-be-removed"); 
}); 
```

This will stop the div from stretching (which was accomplished using a CSS keyframe animation). 

## More  
There is an alternative way of doing this stuff which I will provide code for but I recommend using the code beforehand as it is much cleaner. But, never the less: here are some code snippets that might be of interest. 

```javascript
console.log(document.querySelector("div").className == "class"); // true (assuming your element has the class "class"), useful inside conditional statements 
console.log(document.querySelector("div").className == "class class2"); 
document.querySelector("div").className = "class"; // set classes  
document.querySelector("div").className = "class class2"; // set classes  
document.querySelector("div").className += "class"; // add class 
document.querySelector("div").className -= "class"; // remove class 
document.querySelector("div").id = "id"; // set ID to "id" 
document.querySelector("div").style.cssText = "background-color:red;" // messy styling using Javasctript (what we were trying to avoid doing) 
```
## What Now 
Now you should no longer feel lost when it comes to creating interactive websites using HTML, CSS, and Javascript, so go make something awesome and have fun being classy. 
