--- 
path: "/a-very-insecure-ajax-social-network"
title: "A Very Insecure AJAX Social Network" 
published: true
date: "26-05-2018" 
--- 

# What We Will Build 
In this blog post, we will learn how to create a VERY INSECURE web application using  HTML, Javascript and PHP. We will learn how to make AJAX requests, work with JSON files and basic DOM manipulation. We are going to make a simple "social network" application, which allows users to create an account and have a discussion. 

<!-- More --> 

# I Mean Insecure 
This by no means is a production easy application. This is a tutorial to allow you to get your feet wet in Javascript whilst making something cool. The application lacks various security features - most notably encryption and thus data protection. Though having said this, you can easily add some security features to this application with the right kind of research - maybe I will touch on that in the future. 

# The Setup and Terminology 
I assume you know some basic web programming concepts. And HTML, so assuming you have an HTML file ready; here is the HTML. Make sure to create a file called, "users.json", "comments.json", "createItem.php" and optionally a Javascript file (or just 
use script tags) inside the root of your folder (or wherever else appropriate),  

We also need to use a (development) web server that can run PHP, I have done a tutorial using Laragon, MAMP, WAMP etcetera are good choices too.  before so feel free to check that out, Once you have an appropriate web server ready to use, feel free to proceed - otherwise you will not be able to use the PHP. code 

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <title>title</title>
    </head>
    <body>
        <!-- Sign In -->
        <nav> 
            <input id="username-login"> 
            <input id="password-login"> 
            <a href="#" id="login">Login</a> 
        </nav> 

        <!-- Sign Up -->
        <div class="create-account-container"> 
            <form action="POST"> 
                <input id="username-create" name="username"> 
                <input id="password-create" name="password"> 
                <input type="submit" id="create-account" value="Create Account"> 
            </form> 
        </div> 

        <!-- Post Comment -->
        <div id="post-comment-container">  
            <h2>Post Comment</h2>
            <form action="POST"> 
                <textarea id="content" name="content"></textarea>  
                <input type="submit" id="send-comment" value="Send Comment"> 
            </form> 
        </div> 
        
        <!-- Comments -->
        <div class="comments-container"> 
            <button id="refresh">Refresh</button> 
            <div id="comments-section"> 
                <!-- comments will be displayed here thanks to JS -->
            </div>
        </div>

        <script> 
		/* Javascript can go here */ 
    </script>
    </body>
</html> 
```

# Terminoloy 
* Laragon - A development tool which allows us to use Apache server and PHP. 
* JSON - A format for data 
* Client side - what the browser sees 
* Server side - what the server sees 
* Request - Browser asks for something 
* AJAX [Request] - A type of request which can be made (and forgotten about) and does not cause a reload 
* DOM - The document object model (how the browser and Javascript * understands our HTML) 
* DOM Manipulation - Interacting with and manipulating the DOM 
* XmlHttpRequest - The Javascript object we use to send AJAX requests 
* HTTP Methods - At least Create (post) and Read (get) [types of requests] 

Instead of XML, we use JSON - I strongly recommend you investigate the aforementioned terms as it will solidify your understanding of the code we produce. 

# The Code 
We first have to initialize an array, a boolean variable and an empty object so that we have access to them in the global scope of our code. 
```javascript
        /// Initialize Variables so they can be used in varying scopes 
        let users = []; 
        let userIsLoggedInBool; 
        let currentUser = {}; 
```

We use an event listener which will run code when the document is loaded, this code will hide our comment input areas, our program assumes no user is logged in, and we do not want a user that has not yet signed up/in to make posts.   
```javascript
        /// Hide Section  which require Authentication  
        document.addEventListener("DOMContentLoaded", e =>  {
            createCommentButton.style.display = "none"; 
            createCommentSection.style.display = "none"; 
        });
```

## Create Account Javascript Code 
We use getElementById to get the appropriate HTML for later use, we then attach an event listener to our "createAccountButton" which will invoke a create account function when clicked - assuming the user has not yet logged in. 
```javascript
        /// Create Account 
        let createAccountButton = document.getElementById("create-account"); 
        let usernameCreateAccount = document.getElementById("username-create"); 
        let passwordCreateAccount = document.getElementById("password-create"); 
        createAccountButton.addEventListener("click", e => { 
            e.preventDefault(); 
            if (loginButton.innerText == "Login") { 
                createAccount(); 
            } 
        }); 
```

Our createAccount function will: get the values from the input field, use them to create a "user" object, we then turn this object in to JSON and send a POST AJAX. As client-side Javascript does not have access to our filesystem, we will instead use a PHP script for the actual saving of the data to a file. This code will run that script and give it the appropriate data. I believe we are sending as a hyperlink (reffered to as request parameters). 

```javascript 
        function createAccount() { 
            let user = {
                "username": document.getElementById('username-create').value, 
                "password": document.getElementById('password-create').value 
            } 
            let params = "user="+JSON.stringify(user); 
            let xhr = new XMLHttpRequest(); 
            xhr.open('POST', 'createItem.php', true); 
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.onload = function() { } 
            xhr.send(params);
        } 
```

Once we have gotten the data (username and password) that our user (from the URL/hyperlink) will contain [by using AJAX], we have to use PHP (or any server-side language script) save the data, as client-side Javascript does not have access to the users filesystem (for security reasons). 

This code, will firstly: check the user data exists, then we get our existing data from our JSON file. to make things easier we turn our existing data into data that we can work with, we then update our data with our new user, and lastly, we save our new data into the JSON file as JSON data (for later use). 

```php
<?php 
    //// Create Item (User and Comment) 

    /// Save User 
    if (isset($_POST['user'])) { 
        $jsonUsers = file_get_contents('users.json'); 
        $users = json_decode($jsonUsers);
        $users[] = $_POST['user'];
        file_put_contents('users.json', json_encode($users)); 
    } 
```

## Login 
Now that user has created an account, we want to give them the ability to log in. As this is a very insecure application, we do this using a GET request, but you should do this on the server side in a production application. 

Similar to before, we get the corresponding HTML, and give our login button an event listener, which will either log the user out if they are logged in, otherwise, it will validate their username and password by comparing it with our existing user data and log the user in. 

If the user is logged in our event listener will call the logout function (as the text will be "Logout"). 

```javascript
        /// Login 
        let loginButton = document.getElementById("login"); 
        let usernameLogin = document.getElementById("username-login"); 
        let passwordLogin = document.getElementById("password-login"); 
        loginButton.addEventListener("click", e => { 
            e.preventDefault(); 
            if (loginButton.innerText == "Logout") { 
                loggedOut(); 
            } else if (loginButton.innerText == "Login") { 
                loadUsersAndLogin(e);  
            } 
        }); 
``` 

We send a GET request to our "users.json" file, then turn the data from a string into a Javascript object (as JSON stands for JavaScript Object Notation). We then loop through each of our users and compares said user with the data that the user has inputted. 

With the assumption that it is correct, we will proceed to log the user in, we store the appropriate user in our currentUser object so we can use it throughout our application. In my code I have put an alert to inform the user if their entered password is incorrect; but, this is of course optional. We then hide and display the appropriate HTML. For example, if the user is logged in, we do not want to let them create an account. 

```javascript
        function loadUsersAndLogin(e) { 
            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'users.json', true); 

            xhr.onload = function() { 
                if (this.status == 200) { 
                    users = JSON.parse(this.response); 
                    for (let i = 0; i < users.length; i++) { 
                        if (JSON.parse(users[i]).username == usernameLogin.value) { 
                            if (JSON.parse(users[i]).password == passwordLogin.value) { 
                                userIsLoggedInBool = true; 
                                loginButton.innerText = "Logout";                                
                                currentUser = { 
                                     username: JSON.parse(users[i]).username, 
                                     password: JSON.parse(users[i]).password 
                                }  
                                /// Hide Appropriate Elements 
                                usernameLogin.style.display = "none"; 
                                passwordLogin.style.display = "none"; 
                                usernameCreateAccount.style.display = "none"; 
                                passwordCreateAccount.style.display = "none"; 
                                createAccountButton.style.display = "none"; 

                                /// Show Appropriate Elements 
                                createCommentSection.style.display = "block"; 
                                createCommentButton.style.display = "block"; 

                                loginButton.innerText = "Logout";                                
                                alert("authenticated..."); 
                            } else { 
                                alert("Incorrect password. "); 
                                break; 
                            } 
                        } 
                    }  
                } 
            } 
            xhr.send(); 
        } 
```

## Logout 
Now that the user can log in, we want to give them the option to log out. To accomplish this, we invoke a function which hides and displays the appropriate HMTL. Essentially does the opposite to our login function. We also want to make our currentUser an empty object. 

```javascript 
        /// Logout 
        function loggedOut() { 
            usernameLogin.style.display = "inline"; 
            passwordLogin.style.display = "inline"; 
            usernameCreateAccount.style.display = "inline"; 
            passwordCreateAccount.style.display = "inline"; 
            createAccountButton.style.display = "inline"; 

            createCommentSection.style.display = "none"; 
            createCommentButton.style.display = "none"; 

            loginButton.innerText = "Login"; 

            currentUser = {}; 
        } 
```

## Displaying Comments 
We can automatically update our comment section using the setInterval function, but we also give the user a button to allow them to manually do this. 

```javascript
        /// Display Comments 
        let commentsDivs = []; 
        document.getElementById("refresh").addEventListener("click", e => { 
            loadComments(); 
        }); 
        setInterval(loadComments, 3000); 
``` 

Our load comments function will, make a GET request to comments file, remember it is easier in our case to use JSON, thus we turn our data into JSON format. We then loop through each comment and do some DOM manipulation to generate the HTML which will display our comment. We also want to keep track of our comments so we store them inside an array - we call this array "commentsDivs". 

At the beginning of our "loadComments" function we loop through our existing "commentsDivs" array, and remove each comment - if we did not do this, then duplicate comments would be displayed, and that in my opinion is a waste of space and will make keeping track of conversations difficult for our users. 

```javascript 
        function loadComments() { 
            commentsDivs.forEach(comment => { 
                comment.remove(); 
            }); 

            let xhr = new XMLHttpRequest();
            xhr.open('GET', 'comments.json', true);

            xhr.onload = function() {
                if(this.status == 200) {
                    let comments = JSON.parse(this.response);
                    for (let i = 0; i < comments.length; i++) { 
                        let commentDiv = document.createElement("div"); 
                        let comment = document.createTextNode(`
                            ${JSON.parse(comments[i]).author} said: 
                            ${JSON.parse(comments[i]).content} 
                        `); 
                        commentDiv.appendChild(comment); 
                        commentSection.appendChild(commentDiv); 
                        commentsDivs.push(commentDiv); 
                    }                     
                } 
            } 
            xhr.send(); 
        }
```

## Post Comment 
Okay, we can create an account, we can log into our account, we can log out of our account. and we can read comments - but we can not comment, so let us fix that. We attach an event listener which will check to see if the user commands our page to send a comment (with the assumption that they are logged in. 

```javascript
        function createComment() { 
            let comment = { 
                "author": currentUser.username, 
                "content": document.getElementById('content').value 
            } 
            let params = "comment="+JSON.stringify(comment); 
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'createItem.php', true); 
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'); 
            xhr.onload = function() { }
            xhr.send(params); 
            loadComments(); 
        } 
``` 

To save a comment, we essentially do the exact same thing as we did when saving a user.     

```php
    /// Save Comment 
    if (isset($_POST['comment'])) { // check comment data exists 
        $jsonComments = file_get_contents('comments.json'); // get JSON data 
        $comments = json_decode($jsonComments); // turn JSON data into usable data 
        $comments[] = $_POST['comment']; // update data 
        file_put_contents('comments.json', json_encode($comments)); // save data 
    } 
```

# Conclusion 
With the assumption that we are free of issues and errors, we should have a simple web-app which allows multiple users to have a group discussion in real time. 

# What Now? 
Now, you can do so much now - or at least learn how to. For example, our application looks ugly, feel free to style it up. Or, perhaps you enjoy security - in that case, I challenge you to implement encryption (and decryption). Or, maybe you just want to add more features to practice, do it! Long story short, if you truly enjoy software development, never give up. Thanks for reading. 
