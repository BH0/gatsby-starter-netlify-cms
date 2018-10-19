--- 
path: "/a-simplified-introduction-to-objects-in-javascript"
title: "A Simplified Introduction To Objects In Javascript" 
published: true
date: "10-11-2017" 
--- 

The scope of this post: this post will cover what objects are, how to create your own object and access an object’s data. But it will not touch on prototypes, parents and children, destroying objects and when to use a particular method of creating an object (it also ignores JSON format and leaves a lot out regarding scope). It also ignores many other topics related to object oriented programming.

Firstly, what is an object and why might we want one? Objects can be containers of data - think “variables on steroids”, the great thing about them is that it can be a decent chunk of code written once but reused multiple times in multiple ways - this is accomplishable as you can create as many instances of an object as you want - an instance is essentially the object with it's own ID meaning it won't affect the others. They're often used for namespacing too. Also, everything or at least most things in Javascript is an object.

##How to create an object: There are three ma8n ways
```javascript
/// Object Literal 
var car = { 
    fuelVariable: 300, 
    driveFunction: function() {

    } 
}
/// “new” and Constructor Functions (similar to classes - first letter should be capitalised) var car = new Object; function Person(age) { this.personAge = age; } var oldPerson = new Person(200); // new AnArray().localArray[1]; console.log("age: " + oldPerson.personAge);


var car2 = Object.create(car);
```

Try not to get confused by the syntax. To access data inside an object simply do “objectName.variableName” or “this.propertyName” if you're inside the object - a property is anything you associate with that particular object. Personally I use the Constructor function or the Object Literal method which I'll hopefully explain why in a future post. 
