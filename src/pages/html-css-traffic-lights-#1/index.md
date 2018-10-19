--- 
path: "/html-css-traffic-lights-#1"
title: "HTML & CSS Traffic Lights #1" 
published: true
date: "01-09-2018" 
--- 

In this tutorial, we will make a traffic light using HTML and CSS. 
<!-- more --> 
Here is our HTML. 
```html
<h1>HTML/CSS Traffic Light/s #1 </h1> 
<div class="traffic-light"> 
    <div class="red"> 
        red 
    </div> 
    <div class="orange"> 
        orange
    </div> 
    <div class="green"> 
        green 
    </div> 
</div> 
```

# Circular Divs 
We use the "border-radius" property to make our divs ciruclar - the great part about this property is that we do not need a border. We then set the width and height to the same value. Now that we have a circular div, the rest is just optional styling. 

# The Indiviudal Lights 
The initial properties of each light will vary, but what is important each has a keyframe animation. And for the green and orange lights, their animation will be delayed. We want green to retain it's green after its animation has occurred, therefore we use the "forward" value. The most notable difference is that instead of going from brown to red [like the others], the red light starts as red and turns to brown - and will remain brown thanks to the use of "forwards". 

```css
.green { 
  animation: animGreen 3s forwards; 
  animation-delay: 3.8s; 
} 
.orange { 
  animation: animOrange 2s; 
  animation-delay: 2s; 
} 
.red { 
  background-color: red; 
  color: white; 
  animation: animRed 3s forwards; 
} 
```

# Keyframe Animations 
The animations are pretty simple once you understand CSS keyframe animations, so I challenge you to understand them yourself and perhaps even improve them. 

```css
@keyframes animRed { 
  from { 
    background-color: red; 
  } 
  to { 
    background-color: brown;   
  }
} 
@keyframes animOrange { 
  from { 
    background-color: brown; 
  } 
  to { 
    background-color: orange;   
  }
} 
@keyframes animGreen { 
  from { 
    background-color: brown; 
  } 
  to { 
    background-color: green; 
  }
} 
```

# Congratulations 
You now have the ability to display a simple traffic light on your webpage. And it may be possible to reuse the one animation using a CSS preprocessor (SASS mixins) - which I hope to demonstrate in a future tutorial, 
