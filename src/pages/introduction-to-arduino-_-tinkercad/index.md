--- 
path: "/introduction-to-arduino-&-tinkercad"
title: "Introduction To Arduino & Tinkercad" 
published: true
date: "12-05-2018" 
--- 

The Arduino is a platform for a programmable board which allows for customizable circuits that react based on the [easy-to-understand] code. 

Tinkercad; more specifically Tinkercad Circuits is a cloud web-app that allows for Arduino programming and circuit building using a simple drag & drop interface. 

Tinkercad will allow us to learn the basics of Arduino without having to own an Arduino. 

# Set up 
Navigate to https://www.tinkercad.com/circuits - if you have not yet registered; you will likely be prompted to do so. I use a Google account but its all down to personal preference. You might have to redirect back to that hyperlink after regressing. Scroll down and click "Launch Tinkercad Circuits". 

This will take you to a blank project. To the right, we have our components - these are little devices our circuit will be composed of. 

Drag a resister on to the center of the page. Then drag an Arduino [Uno], a Piezo buzzer and a breadboard (any size) onto the page near your resister in a similar fashion - use the search bar to find the components quickly. 

Frustratingly; the positive leg of the piezo buzzer is at an inconvenient side, (you can rotate it but in m opinion, it will just get in the way) so we will not be connecting it directly to the breadboard but instead use wires to connect it to the breadboard (this will not be done using a physical component). 

Make sure the red line (positive) on the breadboard is closest to your Arduino board and that the longer side is also closest to the breadboard. To rotate something - ensure it is selected and click the upper left corner [To the left of the trash-can icon]. And to delete something: ensure it selected and click the trash can icon. 

You can see if the piezo buzzer's leg is positive or negative by hovering your mouse over it. To connect it to the breadboard: click + drag from your positive leg to a whole that is inline with the "e". This will create a [green] wire. Do the same with the negative leg and put it to the left of the positive leg.  Put one end of another wire below the buzzer's positive leg's wire and connect the other end into the 8th Pin on the Arduino. (by clicking and dragging). 

Place the resistor from the "b" line and ensure one leg is vertically aligned with the wire that connects the negative leg of the piezo buzzer to the breadboard, and that the other leg goes into any hole that is nearest the black line on the side which is closest to the red line. 

Then connect a hole from the same line that the resistor's leg is in (near the black line) with a wire to the ground "GND" pin on the Arduino. 

We should now have a grounded circuit which we can program. One other advantage of Tinkercad is that it allows you to simulate code (sketches). We are going to make our piezo buzzer beep repeatedly. If you are aware of Scratch - Tinkercad allows a "visual" programming interface that is similar to Scratch. But, I prefer textual code so that is what we will be using. 

To open the code editor, click on the "Code" button near the top right corner , make sure the code editor is set to "Text" - if it is not, click where it either says "Blocks + Text" or just "Blocks" and select "Text" from the drop-down menu. You may see code already within the editor so just delete this. pre-typed code 

We should now be ready to insert the following code into the editor. 
```c
int time; // how long the buzzer will beep for 
int freq; // frequency 
void setup() { // this code runs once (initialization) 
  Serial.begin(9600); 
  time = 200; // milliseconds  
  freq = 2500; 
} 

void loop() { // this code will be repeatedd forever (until the Arduino loges power) 
  tone(8, freq, time); // beep 
  delay(1000 + time); // wait 
} 
```

When we click "Start Simulation" we should hear a beeping noise - it might not be the most pleasant sound in the world, but it is pretty awesome. Note: you cannot edit the code when the simulation is running so to stop it just press "Stop simulation". And if you wish to see the components menu, just click that "Code" button again. 

Congratulations. You made your first circuit which you instructed using code that the Arduino device read. 

# Enter The Physical World 
After you have made some pretty neat circuits, you might think - I really want a physical Arduino. I will not cover details regarding purchasing (or making) an Arduino but be aware that you have been using an Arduino Uno (also known as a Genuino Uno for European countries). 

The Code Editor in Tinkercad is rather minimal, the Arduino creators have much better tools available on their website for producing code - for example, the Arduino IDE comes as both downloadable software and a cloud-based web-app. 

There are also many different types of Arduino boards as well as extensions that allow you to do very interesting (yet simplified) stuff. 

# Rename Our Project 
Tinkercad automatically saves our project every so often - but it does not rename it to a sensible name for us. We will learn how to do that now for future reference. 

To get to our list of projects, click on the "Tinkercad" logo in the top left corner. Click on your project (such as the circuit you just made) Click the gear icon at the upper right within the popup modal that says "properties". And insert what you want the project to be called into the input-field underneath the "Design name", feel free to change other fields too. Then click "save changes". 

I hope you noticed the "Tinker this" button, this is what you would click anytime you want to edit the project. 

# Why I Typed This Blog Post 
As with many activities regarding programming, getting started can feel intimidating, so I typed this blog post in an effort to change that. It is also Arduino day - A worldwide celebration of Arduino so happy Arduino day. 

# The End 
If this is of an interest to you - I strongly recommend you begin exploring and making your own projects as well as researching the Arduino. Feel free to check-out my existing projects. And for help: there is a great Discord community called "Electronicity". 