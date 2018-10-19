--- 
path: "/html-js-swear-word-detector"
title: "HTML & JS Swear Word Detector" 
published: true
date: "21-07-2018" 
--- 

We will learn how to detect a swear word inside an HTML textarea element using Javascript. But, as I don't want to promote bad language, my program will detect fruit. 
<!-- more -->  

We start with our template. Then we will get to the Javascript. 
```html
<style> 
textarea { 
  width: 400px; 
  height: 200px; 
  float: left; 
} 
button { 
  color: red; 
  float: left; 
} 
</style> 
<h2>HTML/JS Swear Word Detector</h2> 
<textarea></textarea> 
<button>Detect swearing</butt> 
```

And now for the [fun] JavaScript stuff. We want to grab our elements and store them in variables. 
```javascript
let textarea = document.querySelector("textarea"); 
textarea.innerText = "Enter a sentence containing a swear word"; // optional 
let button = document.querySelector("button"); 
```

You can probably think of a better way of inputting swear words into our program but for now, I will be using a one-dimensional array. I will also initialize our sentence variable (which could also be done inside the  [anomynous] function that is executed when the button is clicked). 
```javascript
let swearWords = ["grape", "apple", "orange", "pineapple"]; 
let sentence; 
```

We then attach our event listener to the button. And inside this we get the value of our textarea (what the user has typed in). 
```javascript
button.addEventListener("click", () => { 
  sentence = textarea.value; 
}); 
```

Inside our button's event-listener's anomynous function "() => {}", we will split our sentence up (separated depending on spaces), so it becomes an array. 
```javascript
  let splitted = sentence.split(" "); 
```

We will now compare the array version of our sentence to our swear words array by looping through the sentence, and inside this loop, we do another loop through our swear words. So basically, we check if any of the words appear in our swear word array, the code might look complicated at first, but it is so useful that I suggest you study it thoroughly on your own. If we find a swear word, we will alert the user of the swear word/s that we found. 

```javascript
  for (let i = 0; i < splitted.length; i++) { 
    for (let l = 0; l < swearWords.length; l++) { 
      if (splitted[i] == swearWords[l] || splitted[i] == swearWords[l]+"ing" || splitted[i] == swearWords[l]+"ed") { 
        alert(`${swearWords[l]} is a swear word.`); 
      } 
    } 
  }   
```

Notice that we also test for the edge cases of if the swear word has "ing" or "ed" in it (I forget the proper definition for these types of words). 

# Thanks for reading 
Now we have a neat little app which will allow the user to type a sentence in, and inform the user if a swear word exists inside the sentence or not, I encourage you to make any improvements you like, perhaps you could use a regular expression to see if a swear word exists inside a word which is not a swear word, such as "cock" existing inside "shuttlecocks". And you might even be able to use "textarea.innerText" to remove or replace the swear words. 
