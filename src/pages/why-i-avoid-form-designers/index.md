--- 
path: "/why-i-avoid-form-designers"
title: "Why I Avoid Form Designers" 
published: true
date: "25-08-2018" 
--- 

For making applications, such as a Windows desktop application or mobile application, some integrated development environments offer "form designers", I will explain why I tend to avoid these. 

<!-- more ---> 
A form designer is typically a drag and drop interface that allows you to create user interfaces for your application's using code - this is only for the presentation - as the rest of the logic will have to be coded. Examples of environments that offer a form designer: Microsoft's Visual Studio IDE for Windows Forms applications, Qt Creator, and Android Studio. 

These form designers for small applications and quick prototypes can be productive and massive time savers - and are intended to generate appropriate markdown for interfaces, but for larger applications, they quickly become an obstacle. And either pure code or markdown should be used instead. 

The reason I say this is because such form designers do not offer a good way of making components reusable, meaning code has to be duplicated. instead, I feel that UIs that are composed via markdown should be generated from object-oriented or functional code - this means the code is reusable; this also means that logic can be applied to the code, for example: looping through and displaying a UI component for each user in a friends list component. This is why React is a popular framework - and can be combined with Electron for desktop applications, and React Native for mobile applications - there are of course other options out there. 

Not to mention such Form Designer's user-interfaces tend to be difficult/tedious to navigate. Admittedly, I do not avoid Form-designers entirely, but, if you want to continue the development of your project seriously, think twice [perhaps more than twice] about what parts of it you involve a form-designer for. They are good for beginners, but not for reusabillity. 
