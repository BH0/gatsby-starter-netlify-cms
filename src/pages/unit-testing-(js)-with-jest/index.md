--- 
path: "/unit-testing-(js)-with-jest"
title: "Unit Testing (JS) With Jest" 
published: true
date: "06-04-2018" 
--- 

# Unit Testing (JS) with Jest 

Unit testing is a form of automated testing (a form of test which done programmatically). It means that we test each piece [unit[ of our code separate from the other parts of our code. 
<!-- more --> 

In this tutorial, we will make Fizzbuzz with a test-driven development approach. The testing tool we will be using is Jest (by Facebook) -  because as far as I'm aware; it is the easiest to set up and I like Facebook's React library.  

Disclaimer: It could be argued I don't yet fully understand test-driven development (TDD) and we will not be taking an extensive look at Jest. 

# Test Driven Development (TDD) 
The main idea behind test-driven development is that we write our unit tests first which will then allow us to know [exactly[ what code we need to write - our test will fail due to non-existent code (red). We then write the code needed to pass the unit test, check that it passes (green), ask ourselves "does this code do what we want"? If not, write more code (red) Check if our updated code passes the test, if not (red), then keep writing until it does (green). And proceed with this (red green) cycle until we are satisfied. 

# Fizzbuzz 
 The concept of Fizzbuzz is that if a number is a multiple of 3, we output fizz, if its a multiple of 5 we output buzz, if it is a multiple of both 3 and 5 we output fizzbuzz, and I have an optional function (unit) which will let us know that it is neither fizz, buzz or fizzbuzz. 

# Setting Up 
This tutorial assumes you have Node & NPM installed and thus are able to use the command line. Run "npm init" inside your project folder, make sure the entry point is called "fizzbuzz.js". The test command will be "jest", Everything else is optional and can be left as the default values if you wish. 

Now to install Jest run "npm install --save-dev jest". This will mean only our development environment will care about Jest as a package, 

Now create two files (assuming you haven't done so already): "fizzbuzz.js" and "fizzbuzz.test.js" - this is the file that Jest will know to look for our testing code in. And now we just have to write our unit test(s) than our code that will be tested - notice that we write a unit test first. To run our test we then type "npm run test", and the result of the test will be logged to the console (red = fail, green = pass). 

# Our First Test 
```javascript
test("Check function which outputs fizz when multiple of 3 is given", () => { 
    expect(fizz(3)).toBe("fizz"); 
}); 
```

What this code does is: check if that when the fizz function [unit} is invoked with 3 as its argument/parameter, the output will be fizz. This unit will not pass its test because the code does not exist, but at least we now know what code we have to write. 

This is what our fizz function will look like. 

```javascript
function fizz(n) { // multiples of 3 
    if (n % 3 == 0) { 
        return "fizz"; 
    } 
} 
module.exports.fizz = fizz; // we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file 
```

We then have to import our function into our test file. For quickness, I'm just going to put the code for each function that will be tested as a unit. 

```javascript
const fizz = require("./fizzbuzz").fizz; 
const buzz = require("./fizzbuzz").buzz; 
const fizzbuzz = require("./fizzbuzz").fizzbuzz; 
const notFizzNorBuzz = require("./fizzbuzz").notFizzNorBuzz; // neither fizz, buzz or fizzbuzz 
```

If we run "npm run test" our one unit test will pass, unless we change its parameter/argument to something that is not a multiple of 3 - such as 2, this will cause our test to fail. This is the behavior we want.  

# Something interesting regarding Unit Tests 
Be aware that if we simply wrote: ```function fizz(n) { return "fizz"; }```; this is because of our unit testing only expecting "fizz" to be returned. Unit tests should not be 100% relied upon, Use your own judgment when able to ensure that the code does exactly what you want it to do - unit tests (and other automated tests) are more of a safety net than a replacement to a human. 

# Practice 
We know that if we have a multiple of 3, we get fizz, but we still need buzz and fizzbuzz. I DARE YOU TO DO THIS PART YOURSELF - MAKE SURE YOU WRITE YOUR BUZZ UNIT TEST BEFORE THE BUZZ FUNCTION, AND THE FIZZBUZZ UNIT TEST BEFORE THE FIZZBUZZ FUNCTION. 

# Buzz Fizzbuzz Not Fizz and Not Buzz and not Fizzbuzz 
```javascript
/// Unit Test 
test("Check function which outputs buzz when multiple of 5 is given", () => { 
    expect(buzz(5)).toBe("buzz"); 
}); 

/// Function to be tested 
function buzz(n) { 
    if (n % 5 == 0) { 
        return "buzz"; 
    } 
} 
module.exports.buzz = buzz; // we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file 

/// Unit Test 
test("Check function which outputs fizzbuzz when multiple of 3 and 5 is given", () => { 
    expect(fizzbuzz(15)).toBe("fizzbuzz"); 
}); 

/// Function to be tested 
function fizzbuzz(n) { 
    if (n % 3 == 0 && n % 5 == 0) { 
        return "fizzbuzz"; 
    } 
} 
module.exports.fizzbuzz = fizzbuzz; // we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file 

/// Unit Test 
test("Check function which outputs not fizz, buzz or fizzbuzzz", () => { 
    expect(notFizzNorBuzz(2)).toBe("not fizz, buzz or fizzbuzz");     
}); 

/// Function to be tested 
function notFizzNorBuzz(n) { 
    if (n % 3 != 0 || n % 5 != 0 || n % 3 != 0 && n % 5 != 0) { 
        return "not fizz, buzz or fizzbuzz";  
    } 
} 
module.exports.notFizzNorBuzz  = notFizzNorBuzz; // we have to export this function [unit] so that it can be used in our fizzbuzz.test.js file 
```

# Optional 
Feel free to write a test that will fail when a number that is not a multiple of 3 is given in the case of fizz and so on for buzz and fizzbuzz. Its important to not fear that your tests will fail, in fact, embrace this - also for the tests that should (eventually) pass - look forward to the time in which they do pass. Try not to write unit tests that deliberately pass every time. 

# More Practice 
Writing good code and good unit tests take time and practice. Make sure your practice. And sooner or later you will reap the benefits of unit testing: quality code and clarity. 

# Why Unit Testing Rocks 
In the case of the "notFizzNorBuzz " function, I accidentally put "n % 3 == 0" which obviously didn't return my expected result, but thankfully I had written the unit test beforehand so was able to quickly realize it was this exact function that I had to look at, and quickly realized my subtle mistake. 

# Finishing Up 
We have confirmed each individual unit of our code works, but let's face it, this isn't exactly fizzbuzz is it? We will now make our "fizzbuzzMaster" function which will run fizz, buzz, fizzbuzz and notFizzNorBuzz. The "fizzbuzzMaster" function will essentially nest our smaller functions inside a for loop, which will determine what number we should pass to each function. 

```javascript
function fizzbuzzMaster() { 
    for (let i = 0; i < 100; i++) { 
        fizz(i); 
        buzz(i); 
        fizzbuzz(i); 
        notFizzNorBuzz(i); 
    } 
} 
fizzbuzzMaster(); 
```

You can now begin to refactor (change) your individual functions and be [almost] confident that they still do exactly what they should do. 

# Integration Testing & Continuous Integration 
There is one function we didn't test, and that is because this is not an isolated unit though it is comprised of individual units, thus it will have to be tested with an integration test - which is a blog post for another day. In a future blog post. I will demonstrate how to and identify the benefits of continuous integration (using CircleCI & Github). 

# Beware 
While unit testing and integration testing etc can benefit greatly; automated testing does not guarantee that the code does exactly what you want it to do - you should multi check yourself at least once. Nor is automated testing is not a complete replacement to quality assurance. 