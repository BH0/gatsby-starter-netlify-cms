--- 
path: "/react-navmenu-component-using-context-api"
title: "React NavMenu Component Using Context API" 
published: true
date: "16-06-2018" 
---

In this tutorial, we will learn how to make a navigation-menu/bar component using React and the context API. This will not involve React-Router, and will hopefully be usable as a standalone component in future projects - targeted at static webpages (with little to no state) built using React. 
<!-- more --> 

## The Setup 
We will use React's built-in context API and Create-React-App for the boilerplate. The component will be styled via an external CSS stylesheet. To get started, assuming you have the "create-react-app" NPM package, simply run "create-react-app projectname", open the folder in your code-editor of choice. 
We will need the "next" versions of React and React-dom. The command to install both of these are "npm install --save react@next react-dom@next". Once this is done, feel free to run the application using "npm start". Inside your "src" (source) folder, create a folder called "Components", and inside this "Components" folder; create two files "Navigation.js", and "NavMenu".js" (or whatever names seem most appropriate to you). 

## The Context (and so on) 
The "Navigation.js" file will hold and provide our context, this is essential so we have access to our data across the application. First, we import React, create a context using the "createContext" method, create and export a consumer. 

```javascript
import React, { Component } from 'react';
const NavigationContext = React.createContext(); 
export const NavigationConsumer = NavigationContext.Consumer; 
```

Next, we  make a component which will "provide" our context [data-for-other-component], we give this component (and subsequently any components it provides to) the data through the use of state. - which our "NavMenu" component will later to use to display anchor tags appropriately, "link" will be the anchor tag's "href", and "alias" will be the text within the anchor tag [feel free to use different names if it seems more logical]. We also export this component. 

```javascript

export default class NavigationProvider extends Component { 
    state = { 
        linkData: [
            { 
                link: "https://google.com", 
                alias: "google" 
            }, 
            { 
                link: "https://youtube.com", 
                alias: "youtube" 
            }, 
            { 
                link: "https://discord.gg", 
                alias: "discord" 
            }, 
            { 
                link: "https://bh0.github.io", 
                alias: "my blog" 
            } 
        ] 
    } 
    render() { 
	// the return statement will go here 
    }
}
```

We firstly give the context-provider our data through the use of "value", and the "this.props.children", will mean any nested components inside this NavigationProvider component will have access to what we pass to "value" [which was the NavigationProvider component's state]. This code goes inside the "render" method. 

```javascript
        return (
            <NavigationContext.Provider value={{linkData: this.state.linkData}}> 
                {this.props.children}
            </NavigationContext.Provider> 
        );    
```

## The Navigation Menu/Bar ("NavMenu.js") Component  
Inside the "NavMenu.js" component, we import our NavigationConsumer [and React], the "NavigationConsumer" will allow our component to consume the required data from our context-provider. 
```javascript 
/// NavMenu.js 
import React, { Component } from 'react';
import { NavigationConsumer } from '../Components/Navigation'; 
```

We then use the map method to retrieve each index of the data (that was provided via the state) and render it inside an anchor tag. And use the Fragment tag to group such elements. Lastly, we export the component so it can become usable in our components. 

```javascript 
class NavMenu extends Component { 
    render() { 
        return( 
            <NavigationConsumer>
                {({ linkData }) => (
                    <React.Fragment>
                        {linkData.map(linkData => (
                            <a href={linkData.link}> {linkData.alias}</a>
                        ))}
                    </React.Fragment> 
                )} 
            </NavigationConsumer>
        ); 
    } 
} 
export default NavMenu; 
```

## Using Our NavMenu component 
Inside "App.js" (or whatever component you want to use "NavMenu.js" in), import the "NavigationProvider" component and the "NavMenu.js" component. 

```javascript
import NavigationProvider from "./Components/Navigation"; 
import NavMenu from "./Components/NavMenu"; 
```

Inside our "NavMenu" parent component, we will wrap the "NavMenu" component inside our "NavigationProvider" component. 

```javascript
class App extends Component { 
  render() { 
    return (
      <div className="App"> 
        <NavigationProvider> 
          <NavMenu className="navigation-menu" />           
        </NavigationProvider> 
      </div> 
    );
  } 
}
export default App;
```

## Conclusion 
Congratulations - assuming I did not mess up the tutorial, and you did not mess up either, you should be able to use this component in your React application, any time you want to change the anchor tags that are rendered, simply change the state of the "NavigationProvider" component (but make sure you maintain the format - the objects inside the array, otherwise things might break due to how the anchor tags are rendered), You can style this component however you like.  And use it in other projects. 

## Why I Like The React Context API 
I like the context API because it gives me a convenient solution for what I felt was a tedious problem regarding React when I first used it to make a hobbyist app called "Pokemon To Catch". 

When I was developing the app, I found that if I wanted to use a child component to display data, I would have to pass the data from my App component, all the way down to that component - thankfully the data only had to travel three components (I think, it has been a while since I read the app's source code), but imagine if I had to send the data down more than three components - being a beginner to React, this ("props drilling") was really frustrating. 

As I learned more about the React ecosystem I was tempted to begin learning Redux - great, I have to learn something new, which may even be more confusing than React is... 

Thankfully, the context API would have solved this problem for me - meaning I do not need to learn Redux unless I intend on working on larger apps. For clarification, the context API allows you to give data to components without having to pass them all the way down - instead, you just wrap the component in need of the data inside a "context". 
