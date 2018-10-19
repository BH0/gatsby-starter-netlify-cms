--- 
path: "/html-css-colour-cycling-effect"
title: "HTML & CSS Colour Cycling Effect" 
published: true
date: "11-08-2018" 
--- 

In this tutorial we will learn how to make a divs' background-color cycle through a set of colours using HTML and CSS. 
<!-- more --> 
Here is our HTML (but you can use pretty much any HTML of your choosing). 

```html
<div> 
  <h1>My Parent-element's [the div] background will cycle through colours.</h1> 
</div> 
```

We accomplish this colour changing effect using an animation, which will give our element a different colour, at each predefined interval. Here is our keyframe animaiton. 

```css
/* The animation code */
@keyframes cycleThroughColours {
  1% { /* one percentage in to anaimtion change color to red  */ 
    background-color: red; 
  } 
  30% { /* thirty percentage in to anaimtion change color to blue  */
    background-color: blue; 
  } 
  60% { /* sixty percentage in to anaimtion change color to green */ 
    background-color: green; 
  }
  90% { /* ninety percentage in to anaimtion change color to orange  */ 
    background-color: orange; 
  } 
  100% { /* when the animaiton is done, change the color back to red */ 
    background-color: red; 
  } 
} 
```

In my example, I target a div, but you can target essentially any other element you want, I then give it properties. I make divs' background-color red, then I set its width and height to 100rem - because I want to stretch the size of the div. 

And we assign our div with an animaiton proeprty, whihc will be the animation we just made, the animation will last for 3 seconds and will never end - this is accomplished using the "infinite" keyword. 

Here is the div element's properties. 
```css
div { 
  background-color: red; 
  animation: cycleThroughColours infinite 3s; 
  width: 100rem; 
  height: 100rem; 
} 
```

# What Now 
Feel free to experiment with and improve upon this simple example, CSS keyframe animations are wonderful, and I highly suggest you learn more about them if you are interested. 

