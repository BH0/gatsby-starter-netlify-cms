--- 
path: "/learn-the-basics-of-brainfuck-and-pseudocode"
title: "Learn-the-Basics-of-Brainfuck-and-Pseudocode" 
published: true
date: "28-09-2017" 
--- 

# Learn the basics of Brainfuck and Pseudocode.

## What is Pseudocode?

Pseudocode is an readable vocabulary used for designing programs. It assists designers and developers both understand the design requirements of a program such as what the program should do and how the program will achieve what it needs to do. It is important to remember that Pseudocode is not a real programming language, but I tend to imagine it as a simplified programming language (one reason I like programming languages such as Cobol and Ruby is because they resemble Pseudocode).

## What is Brainfuck?

Unlike Pseudocode, Brainfuck is a real programming language. Brainfuck belongs to a categorically of programming languages referred to as esoteric-programming-languages (esolangs for short). Esolangs are real programming languages usually designed to prove a point but arent intended for industry standard use. Brainfucks design is incredibly minimlist.
## What will be using Pseudocode for?
Brainfuck (for the most part) is not a nice programming language to write in, so to ensure we have a general idea of our program, we will use Pseudocde - which will serve as a suitable reference whilst were developing the actual program. Think of a Pseudocode as a to do list.

## What will be making using Brianfuck?

To be honest, I cant really do much in Brainfuck, so we will be keeping things super simple and simply outputting (displaying) a line (or so) of text. This text can be your name, country just make sure it isnt too long - about less than 15 characters will be fine.

## Why is Pseudocode important?

While it is unlikely that we will forget the end-goal of this program, for larger programs, it can be difficult (sometimes even tedious) to remember every step to our program, so we use Pseudocode to ensure we know the general outline of our program, then we can pick the language were going to develop it with and get on with other important tasks.

## The basics of Brainfuck

Brainfuck has only 8 commands, Most tasks are generally accomplished using a while loop. It is represented by an array (a row) of cells, and has a pointer - which we will use to point to a cell of our choosing.

## Brainfuck commands:

+ Increment (add) cell value
- Decrement cell value
> Move pointer one cell to the right
< Move pointer one cell to the left
. Output (display) cells ASCII value
, Wait for input
[ & ] These are used to signify loops, for the [ unless the current cells value is 0 it enters a loop, for the ] if the cells value is 0, it exits the loop and goes to the next instruction (assuming there is one), however, if the cells value is not 0, it will move backwards and go to the preceding instruction

Brainfuck (depending on the version) will not read any commands other than the 8 which I have listed, this means that plain text can be written in your program, but to make things more readable we are going to use a # symbol to distinguish between our codes commands from a comment. Comments are simply just notes in the programmer for the developer.
I mentioned something called ASCII, on a (common) keyboard, each key has an ID, this ID is known as its ASCII value which the computer uses to associate the key with a particular character. For example, the ASCII value of the space-bar is
## Environment Setup
We will now setup our tools and endure we are ready to work, preparation / organisation is one of the keys to successful programming so let’s prepare. To make tasks easier we will be using two tools, a Brainfuck Visualiser - which we will use to make and test our program
An ASCII to Text Converter - because there’s no little reason to memorise ASCII codes this tool will give us the desired value.

ASCII to Text Convertor:.http://www.unit-conversion.info/texttools/ascii/
Brainfuck Visualiser: https://fatiherikli.github.io/brainfuck-visualizer/

The Visualiser will come in handy for debugging (finding and removing issued) our program as it displays the behavior of our program in real-time. You’re welcome to use an ASCII table of your choice so long as you have access the desired values. And a text-editor or pen+paper may come in useful for note-taking and writing our pseudocode. A calculator may be useful too. Visit the two links I provided, I recommend having them both open in separate tabs let’s delete the default example program in the Visualiser. We will now make a short Brainfuck program to ensure everything is working. Let’s output the number zero (accomplished by multiplying 16 by 3 as this equals 48 - the ASCII value for zero).

Code: 
```
+++ [> ++++ ++++ ++++ ++++ <-] >.
```

## The Pseudocode of our program
For simplicity, I’ll be using the word programming. I’m deliberately choosing an odd numbered word to demonstrate a useful technique I use (note that you may have to alter your Pseudocode if you have chosen a smaller or larger word than mine.) .
## Pseudocode:
Move pointer one cell to the right
Use a loop to increment this cell to 112 (by multiplying 14 by 8)
Move pointer one cell to the right
Output the ASCII value of this cell
Increment this cell by 2
Output the ASCII value of this cell
Decrement this cell by 3
Output the ASCII value of this cell
Decrement this cell by 8
Output the ASCII value of this cell
Increment this cell by 11
Output the ASCII value of this cell
Decrement this cell by 12
Output the ASCII value of this cell
Output the ASCII value of this cell
Decrement this cell by 4
Output the ASCII value of this cell
Increment this cell by 5
Output the ASCII value of this cell
Decrement the value of this cell by 7
Output the ASCII value of this cell

## The actual program

When I typed the word programming into the ASCII -to-Text Convertor it produced the following values 112 114 111 103 114 097 109 109 105 110 103- the ASCII value of p is 112 and so on. Type your word into the ASCII-to-Text convertor and paste the values into the Brainfuck Visualiser for ease of reference like so.

Code: # 112 114 111 103 114 097 109 109 105 110 103

Here is our Pseudocode alongside the actual code (Pseudocode lines will be comments)
## Code:
```
// ASCII Values: 112 114 111 103 114 097 109 109 105 110 103

// Move pointer one cell to the right
+++++ +++++ ++++ [> ++++ ++++ < -] # Use a loop to increment this cell to 112 (by multiplying 14 by 8)
// Move pointer one cell to the right
. // Output the ASCII value of this cell
++ // Increment this cell by 2
. // Output the ASCII value of this cell
— // Decrement this cell by 3
. // Output the ASCII value of this cell
—– — // Decrement this cell by 8
. // Output the ASCII value of this cell
+++++ +++++ + // Increment this cell by 11
. // Output the ASCII value of this cell
—– —– —– – # Decrement this cell by 12
. // Output the ASCII value of this cell
+++++ +++++ ++ # Increment this cell by 7
. // Output the ASCII value of this cell
. // Output the ASCII value of this cell
—- // Output the ASCII value of this cell
. // Output the ASCII value of this cell
+++++ // Output the ASCII value of this cell
—– – // Decrement this cell by 7
. // Output the ASCII value of this cell
```

Note that a common goal of using Brainfuck is to make the smallest program as possible, so here is the short version of this program. As Brainfuck doesnt care about whitespace (newlines, spaces, indentations) we can have our program all on the same line, this however is generally avoided in other programming languages for readability.

## Code:
```
// Program which outputs the word “programming”
// ASCII Values: 112 114 111 103 114 097 109 109 105 110 103

+++++ +++++ ++++ [> ++++ ++++ < -] > . ++ . — . —– — .
+++++ +++++ + . —– —– —– – . +++++ +++++ ++ . . —- .
+++++ . —– – .
```

## Conclusion
Congratulations, you have made a program in Brainfuck which outputs a string (a piece of text), yes you couldve done this without Pseudocode, but then you would be risking disastrous consequences such as forgetting the goal of your program, the next step you were to take and the general flow of your program - thanks to Pseudocode we can avoid these catastrophes, we can also adapt our Pseudocode and can use it for designing (and developing) programs of all sizes.
