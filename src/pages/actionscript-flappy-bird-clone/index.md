--- 
path: "/actionscript-flappy-bird-clone"
title: "ActionScript Flappy BIrd Clone" 
published: true
date: "14-07-2018" 
--- 

Hello, in this tutorial we will learn how to clone the popular mobile game "Flappy Bird" using ActionScript [3] - also known as Flash (Flash is the runtime that the language ActionScript runs within).  
<!-- more --> 
This is a beginner friendly tutorial - assuming you have basic programming knowledge (data types, variables, for loops, if statements and functions/methods), Prior knowledge of ActionScript will help, otherwise prior knowledge of Javascript and/or Java since ActionScript is heavily influenced by these languages. I will produce a tutorial for getting started with Flash Development soon, but as an IDE you can use Adobe's FlashBuilder (I believe a trial version is available), or FlashDevelop (entirely free - and is what I use). 

# The Starting Point 
First, make sure you have a public class that extends "Sprite". And initialize then defined the following variables, and input the methods (functions) like I have done so in the code snippet below. 
```java
package
{
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.display.Shape;
    import flash.events.KeyboardEvent;
    import flash.utils.setInterval;
    import flash.text.TextField;
    import flash.text.TextFormat;
   
    /**
     * //// Flappy Bird [Clone] (ActionScript/Flash)
     * @author bh0
     */
    public class Main extends Sprite
    {
        /// Player aka Bird
        public var playerSpeed:int;
        public var playerGravity:Number;
        public var playerVelocity:Number;
        public var playerThrust:int;
        public var score:int;
        public var scoreText:TextField;
       
        public var bird:Shape;
        public var pipe1:Shape;
        public var pipe2:Shape;
 
        public function Main()
        {
            playerSpeed = 10; // player aka bird
            playerGravity = 0.6; // 0.6
            playerVelocity = 0;
            playerThrust = 25; // 20 15  
            score = 0;
            if (stage) init();
            else addEventListener(Event.ADDED_TO_STAGE, init);
        }
       
        private function init(e:Event = null):void
        {
            removeEventListener(Event.ADDED_TO_STAGE, init);
            // entry point
           
            /// Draw Objects
 
           /// Enter Game Loop
        }
       
        public function update():void {
            /// Set (And Update) Score
               
            /// Handle Bird's / Player's Positiong
 
            /// Move Pipes
           
            /// Player Successfully Avoided Pipes
           
            /// Collision Detection
        }
       
        /// Movement
        public function move(e:KeyboardEvent):void {

        }
        public function draw():void {                       
            /// Bird
           
            /// Score
           
            /// Pipe/s (Pipe1 & Pipe2)
        }
    }  
} 
```

# Drawing Our Shapes 
Inside our draw method, we draw two rectangles (the pipes) and a square (the bird), After our shapes are drawn, we add them to the "stage" (game-world) using the addChild function, notice that the colours are hexadecimal. 

```java
        public function draw():void {
            /// Bird
            bird = new Shape();
            bird.graphics.beginFill(0X00FFFF00, 0.5);
            bird.graphics.drawRect(200, 200, 100, 100);
            bird.graphics.endFill();
            addChild(bird);
           
            /// Score
            // var scoreTextFormat:TextFormat = new TextFormat();
            // scoreTextFormat.size = 130;
            scoreText = new TextField();
            // scoreText.setTextFormat(scoreTextFormat);
            scoreText.x = 400;
            scoreText.y = 200;
            scoreText.textColor = 0X003E7091;
            addChild(scoreText);
           
            /// Pipe/s (Pipe1 & Pipe2)
            pipe1 = new Shape();
            pipe1.graphics.beginFill(0X00FF00, 0.5);
            pipe1.graphics.drawRect(600, 0, 100, 160); // h: 100, y: 200 or 170
            pipe1.graphics.endFill();
            addChild(pipe1);           
 
            pipe2 = new Shape(); // these had to become independant for collision to work
            pipe2.graphics.beginFill(0X00FF00, 0.5);
            pipe2.graphics.drawRect(600, 400, 100, 160); // h: 100, y: 200 or 170
            pipe2.graphics.endFill();
            addChild(pipe2);           
} 
```

Then we call our draw function. method (which is only done once) inside the initialization ("init") method, 
```java
            /// Draw Objects
            draw();
```

# The Game Loop 
A game loop in our case is one function (the update function) which will be called over and over again, forcing our game to update as if real-time events are occurring, I accomplished this using the setInterval function (JavaScripters will likely recognize this one), it essentially calls our update every 30 milliseconds. 

We then call it inside our init function (after we have drawn our objects). 
```java
           /// Enter Game Loop
            setInterval(update, 30);
```

# Moving The Bird 
Inside our update function, we can begin handling the bird's position. The first set of instructions handle are bird's "flap" mechanic (though this won't actually work yet - but it will when we implement our input code). After this, we check if the bird fell off the screen and move it back to the top if so (optional). I suggest you play around with these variables to get a feel for what each one of them does. 
```java
            /// Handle Bird's / Player's Positiong
            playerVelocity += playerGravity;
            playerVelocity *= 0.9;
            bird.y += playerVelocity;
       
            if (bird.y >= 480) { // 480 = bottom of game-area
                bird.y = 0;
                playerVelocity = 0;
            }
```

Now we will make the bird "flap" each time the up arrow key is pressed, this is the code that will do that. 

```java
        /// Movement
        public function move(e:KeyboardEvent):void {
            if (e.keyCode == 38) { // 38 = up arrow key
                playerVelocity -= playerThrust;
            }
        }
```

Though this method will never get called unless we add an event-handler - a special function which automatically detects the input for us and calls a function of our choosing when the type of input it expects occurs, obviously we will call our move function. This code goes inside our "init" function. 

```java
            // entry point
            stage.addEventListener(KeyboardEvent.KEY_DOWN, move);
```

# Pipes 
We should now be able to see the bird flap, We will move the pipes towards the left of the screen, check for a collision (if two objects are touching) between the pipe and the bird, and if there was no collision we will increase the bird's score. We will also adjust our object's positioning approrpiately. 

```java
            /// Move Pipes
            pipe1.x -= 2.4;
            pipe2.x -= 2.4;
            
	/// Player Successfully Avoided Pipes
            if (pipe1.x <= -650 || pipe2.x <= -650) { // -650 = left side of game-area
                pipe1.x = 270; // 270 = right side of game-area  
                pipe2.x = 270;
                score += 1;
            }
           
            /// Collision Detection
            if (bird.getBounds(stage).intersects(pipe1.getBounds(stage)) || bird.getBounds(stage).intersects(pipe2.getBounds(stage)) || bird.y >= stage.height - 200) {
                bird.y = 200;
                score = 0;
                pipe1.x = 270;
                pipe2.x = 270;
            }
```

# Score 
We have already implemented the scoring system, all we have to do now is make sure our score gets updated and is turned into a string so it can be displayed on the screen. 
```java
/// Set (And Update) Score
            scoreText.text = score.toString();           
```

# Congratulations and Final Code 
```java
package
{
    import flash.display.Sprite;
    import flash.events.Event;
    import flash.display.Shape;
    import flash.events.KeyboardEvent;
    import flash.utils.setInterval;
    import flash.text.TextField;
    import flash.text.TextFormat;
   
    /**
     * //// Flappy Bird [Clone] (ActionScript/Flash)
     * @author bh0
     */
    public class Main extends Sprite
    {
        /// Player aka Bird
        public var playerSpeed:int;
        public var playerGravity:Number;
        public var playerVelocity:Number;
        public var playerThrust:int;
        public var score:int;
        public var scoreText:TextField;
       
        public var bird:Shape;
        public var pipe1:Shape;
        public var pipe2:Shape;
 
        public function Main()
        {
            playerSpeed = 10; // player aka bird
            playerGravity = 0.6; // 0.6
            playerVelocity = 0;
            playerThrust = 25; // 20 15  
            score = 0;
            if (stage) init();
            else addEventListener(Event.ADDED_TO_STAGE, init);
        }
       
        private function init(e:Event = null):void
        {
            removeEventListener(Event.ADDED_TO_STAGE, init);
            // entry point
            stage.addEventListener(KeyboardEvent.KEY_DOWN, move);
           
            /// Draw Objects
            draw();
           
            /// Enter Game Loop
            setInterval(main, 30);
        }
       
        public function main():void {
            /// Set (And Update) Score
            scoreText.text = score.toString();
               
            /// Handle Bird's / Player's Positiong
            playerVelocity += playerGravity;
            playerVelocity *= 0.9;
            bird.y += playerVelocity;
       
            if (bird.y >= 480) { // 480 = bottom of game-area
                bird.y = 0;
                playerVelocity = 0;
            }
 
            /// Move Pipes
            pipe1.x -= 2.4;
            pipe2.x -= 2.4;
           
            /// Player Successfully Avoided Pipes
            if (pipe1.x <= -650 || pipe2.x <= -650) { // -650 = left side of game-area
                pipe1.x = 270; // 270 = right side of game-area  
                pipe2.x = 270;
                score += 1;
            }
           
            /// Collision Detection
            if (bird.getBounds(stage).intersects(pipe1.getBounds(stage)) || bird.getBounds(stage).intersects(pipe2.getBounds(stage)) || bird.y >= stage.height - 200) {
                bird.y = 200;
                score = 0;
                pipe1.x = 270;
                pipe2.x = 270;
            }
        }
       
        /// Movement
        public function move(e:KeyboardEvent):void {
            if (e.keyCode == 38) { // 38 = up arrow key
                playerVelocity -= playerThrust;
            }
        }
        public function draw():void {
                       
            /// Bird
            bird = new Shape();
            bird.graphics.beginFill(0X00FFFF00, 0.5);
            bird.graphics.drawRect(200, 200, 100, 100);
            bird.graphics.endFill();
            addChild(bird);
           
            /// Score
            // var scoreTextFormat:TextFormat = new TextFormat();
            // scoreTextFormat.size = 130;
            scoreText = new TextField();
            // scoreText.setTextFormat(scoreTextFormat);
            scoreText.x = 400;
            scoreText.y = 200;
            scoreText.textColor = 0X003E7091;
            addChild(scoreText);
           
            /// Pipe/s (Pipe1 & Pipe2)
            pipe1 = new Shape();
            pipe1.graphics.beginFill(0X00FF00, 0.5);
            pipe1.graphics.drawRect(600, 0, 100, 160); // h: 100, y: 200 or 170
            pipe1.graphics.endFill();
            addChild(pipe1);           
 
            pipe2 = new Shape(); // these had to become independant for collision to work
            pipe2.graphics.beginFill(0X00FF00, 0.5);
            pipe2.graphics.drawRect(600, 400, 100, 160); // h: 100, y: 200 or 170
            pipe2.graphics.endFill();
            addChild(pipe2);           
        }
    }  
} 
```

# Improvements 
Admittedly, I was not too sure Flash's coordinates system worked and were not sure about the dimensions of the stage (game-area/world), so this is something you can improve upon, perhaps using variables/properties to better represent such numbers. You could also make your code much more object-oriented and modular, I did attempt this but had issues rendering the objects, I intend on making a tutorial demonstrating how to use classes and instances in ActionScript (it is essentially the same as in Java) and hopefully at this point you can figure out how to solve/avoid the rendering issue/s I experienced. 

# Thanks For Reading 
Flash and ActionScript are technologies that used to be commonly used by "indie" game developers to make popular web-games, and since I love game development, I have always wanted to make a game using Flash/ActionScript - so this is a present to myself [as it happens to be my birthday this time of the month, partly a reason why I did not fuss on minor details.], 
