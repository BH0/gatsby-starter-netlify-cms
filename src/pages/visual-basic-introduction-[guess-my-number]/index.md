--- 
path: "/visual-basic-introduction-[guess-my-number]"
title: "Visual Basic Introduction [Guess My Number]" 
published: true
date: "08-09-2018" 
--- 

In this tutorial, we will learn how to program using Visual Basic, by making a Windows Forms application that allows the user to guess a randomly generated number. This tutorial is intended for people who have written less than a hundred lines of code (and anyone else who wishes to read). 

I assume you know how to create a Visual Basic Windows Forms application and run your project via Visual Studio. Windows Forms is tool programmers can use to make [desktop] applications that involve a graphical user interface. You may be aware that Visual Studio offers a Form Designer but I have deliberately chosen not to use that. 

You can view the code of your form by double-clicking on it from within the Form Designer. Immediately you will see: 

```vb
Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
	
    End Sub
End Class
```

# The Language Of Computers 
Visual Basic is what is known as a high-level language - this means that it is close to English. The computer does not understand English, it only understands what is referred to as "1s" and "0s" [binary or machine code]. But since it is tedious to program using such machine code - we make use of three programs (a program is just a section of code). Program one is Visual Basic - the programming language that humans can interpret quickly, program two is a program which transforms our Visual Basic into the tedious code [machine code] that computers understand. And program three is the text-editor we use to produce the Visual Basic code - in our case: Visual Studio. Computer code is an instruction - and a program is a set of instructions. 

# Object Oriented 
Visual Basic uses a coding style called "object-oriented". This simply just means that code can be split into components which are called "objects". To create an object, we need a class - a class is a template or blueprint for what an object should look like. 

Objects can control other objects, in our application, the master object is our form - this controls everything in our application. 

# Variables 
A variable can be used to store information - we want our master object (the form) to have access to these variables so we must first tell the computer that they will be needed, note that we are not actually giving them information yet - this is called a "declaration". And looks something like the following in Visual Basic. 

```vb
Public Class Form1
    Private textbox As TextBox
    Private randomNumber As Integer
    Private prevNumber As Integer
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    End Sub
End Class
```

The private keyword does not matter much here, but later on, if we only wanted the object we give the variable to have access to the given variable, then we would use the private keyword. Visual Basic makes use of something known as "types", a type is just a type of data - there are many different types of data, in our code, we make use of the integer (whole number) data type - this means that this variable expects an integer and no other type. We can also store objects in variables [here is an example of composition, but don't worry about this term yet], The TextBox is a Windows Forms object, and all it is is an input box that text can be entered into. 

# Sub Procedures 
A sub procedure is just a miniature program inside our program. It accomplishes a precise task and is used to make code reusable. 

```vb
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
	' I have loaded 
End SUb 
```

# Events 
We are using something called event-driven program (as well as object-0oriented). This just means that some of our code will only occur if specified events happen. An example of an event is a click of the mouse, a key press etcetera. Later on, we will use the "text-changed" event. 

Events are represented as subprocedures. The "Form1_Load" is an event, and thus a sub procedure, that will run code when the form has loaded. 

# Parameters / Arguments 
Subprocedures can have data passed into them, this data can be anything so long as it is a valid data type (or abstract data type). In the case of our form load event, the data this event expects is a sender which is of type object - I will touch on this later. Variables can also be passed into subprocedures - the subprocedure can then use this variable to complete its task. 

# Storing Information In Variables 

```vb
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        randomNumber = CInt(Math.Ceiling(Rnd() * 9))
        prevNumber = randomNumber
    End Sub
```

Here we are storing a random number between 1 and 9 inside our variable, and then we are storing our variable inside another variable which is called "prevNumber". Remember how we declared our variables earlier but had not yet given them information? This is us now giving those variables information - this is known as a definition. The reason they are called variables is that their values can vary and thus are not constant. 

# Creating More Objects [And Storing Them In Variables] 
We need three more form controls - a form control is simply an object that can be interacted with. Put this code inside the form_load event [the same below our prevNumber variable]. 

```vb
Dim instructions As Label = New Label()
        instructions.Location = New Point(150, 50)
        instructions.Width = 300
        instructions.Text = "Please enter a number between 1 and 9 into the textbox."

        textbox = New TextBox()
        textbox.Location = New Point(170, 80)
        textbox.Height = 60
        AddHandler textbox.TextChanged, AddressOf textbox_TextChange

        Me.Controls.Add(instructions)
        Me.Controls.Add(textbox)
```

Here we are creating a label (a line of text) object and a textbox object. In order for our form to be able to control these, and for them to be displayed we use "Me.Controls.Add(textbox)", this is a sub procedure which belongs to the form that expects an object to be given to it, in our case we give it the label (which is called "instructions"), and the TextBox object. And lastly, we want to give our textbox an event, this event is the "text-changed" event, which will be triggered when we type something into our textbox. 

# Another Event 
```vb
 AddHandler textbox.TextChanged, AddressOf textbox_TextChange
```

This line is what we use to give our code an event, but as of now, when that code runs - it does not know what event we are referring to, so let us fix that. note that nothing will happen when text is entered, we will come back to this. 

```vb
    Public Sub textbox_TextChange(sender As Object, e As EventArgs)

    End Sub
```

# Properties 
I hope you have noticed the following line: 

```vb
instructions.Text = "Please enter a number between 1 and 9 into the textbox."
```

This is what is known as property, there are many properties, in our case, we use the "Text" property. A property is simply a variable specific to the object in question. We make use of properties to give our objects information specific to them; as well as retrieve such information. 

# Methods 
A method is similar to a property, in that it belongs to an object, except a method is not a variable, but a sub procedure - that the object in question will use to represent behavior. For example, we could have a "car.Drive(5)" method, this could make our car object drive, "5" could be the miles per hour in which the car shall drive - we could also replace "5" with a variable called "speed", that would mean that we do not need remember what speed is, we just need to know that it exists - and thus speed could be "5", "10" or "10000". 

# Syntax 
The "." is simply just a character that is used to link data and/or instructions together. This is an example of syntax, the syntax is simply how the could be structured, remember how I said that there is a program which transforms our code into a language the computer understands? Well, that program can only understand a minimal representation of English - it does not entirely understand English (as that would be a  lot of work). 

Note that there are cases when the "." is optional, but some people like to make use of it for clarity.. And other programming languages may require it 

A comment in Visual Basic is a line of code that the computer will ignore but can be used to inform the (human) reader of your code about the code. To make a comment simply put some text after a single quotation mark. 
```vb
' this is garble that the computer will not read and is an example of a comment 
```

# Control Structures 
A control structure decides what code should be run depending on the criteria we tell it to check for, there are various control structures. Here we will make use of the "If Else" control structure. Inside our text-changed event, type this code. 

```vb
    Public Sub textbox_TextChange(sender As Object, e As EventArgs)
        If (textbox.Text IsNot "") Then
            If (Convert.ToInt16(textbox.Text) = randomNumber) Then
                MsgBox("Yes! You knew my number was " & textbox.Text & vbNewLine & "I have chosen a new number")
                randomNumber = CInt(Math.Ceiling(Rnd() * 9))
                prevNumber = randomNumber
                If (randomNumber = prevNumber) Then
                    randomNumber = CInt(Math.Ceiling(Rnd() * 9))
                    prevNumber = randomNumber
                    MsgBox(randomNumber)
                End If
            Else
                MsgBox("Sorry, " & textbox.Text & " was not my number, try again.")
            End If
        End If
    End Sub
```

Yes, I know, there is a lot happening in this, one of the great techniques programmers make use of is breaking things down, this helps us to reason about things easier - so let's break down what this code does line by line. 

First, we tell the application to find out what the value of our textbox is, if it is empty, then we will not do anything. 

However ("else"), if the textbox has text, we then ask, if the text is the random number our program had generated and stored in a variable earlier. Notice the "ToInt16" method, this just means that we want to change the data type from text (string) to an integer because our random number is also an integer [commonly called type casting or conversion]. If the text the user has inputted is the same integer our program had generated. 

Then we create a message box which tells the user that they have guessed correctly, the "&" character is used to join text together, as we can not put our variable inside quotes because if we did, the computer we just output "textbox.Text", instead of the value of what textbox.Text is. 

We then go onto have our program generates a new random number (and ensure it is not the number that was previously generated). 

But what if the user inputted the wrong number? In that case, we simply tell them that they have inputted the wrong number - we leave the random number to what it currently is, and allow the user to try again. 

# Comparisons and Operators 
An operator is simply a character or key-phrase that represents an instruction, for example, the "+" operator will allow us to do addition, example: "1 + 1". The "isNot" operator is used to check that the value expected is not the value that we specify, in our case we did not want our code to run if the textbox was empty - thus is value would simply be "". "&" is also an example of an operator - which is used to join text,  and allows us to mix text with the values of variables. This is known as "concatenation".  

# Congratulations 
```vb
Public Class Form1
    Private textbox As TextBox
    Private randomNumber As Integer
    Private prevNumber As Integer

    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        randomNumber = CInt(Math.Ceiling(Rnd() * 9))
        prevNumber = randomNumber

        Dim instructions As Label = New Label()
        instructions.Location = New Point(150, 50)
        instructions.Width = 300
        instructions.Text = "Please enter a number between 1 and 9 into the textbox."

        textbox = New TextBox()
        textbox.Location = New Point(170, 80)
        textbox.Height = 60
        AddHandler textbox.TextChanged, AddressOf textbox_TextChange

        Me.Controls.Add(instructions)
        Me.Controls.Add(textbox)
    End Sub

    Public Sub textbox_TextChange(sender As Object, e As EventArgs)
        If (textbox.Text IsNot "") Then
            If (Convert.ToInt16(textbox.Text) = randomNumber) Then
                MsgBox("Yes! You knew my number was " & textbox.Text & vbNewLine & "I have chosen a new number")
                randomNumber = CInt(Math.Ceiling(Rnd() * 9))
                prevNumber = randomNumber
                If (randomNumber = prevNumber) Then
                    randomNumber = CInt(Math.Ceiling(Rnd() * 9))
                    prevNumber = randomNumber
                    MsgBox(randomNumber)
                End If
            Else
                MsgBox("Sorry, " & textbox.Text & " was not my number, try again.")
            End If
        End If
    End Sub
End Class
```

This is how our final code should look like. If you were able to input all of the code correctly, then you now have a simple "guess my number" game. Otherwise, you will have to endure a process called "debugging". This is often a painstaking process that programmers spend a ton of time doing... And doing... And doing... Ah hell, I am still doing this for many of my applications. Just keep reading your code and my code - determine what you did wrong, and try to fix it - and try not to give up - if you are good at this skill, you are one step closer to being the programmer the world wants you to be. 

# Improvements 
If we enter a value into our program that is not an integer, our program will "break", there are various approaches to this problem, the most obvious one, in my opinion, is using a "try" statement. I challenge you to fix this. 

