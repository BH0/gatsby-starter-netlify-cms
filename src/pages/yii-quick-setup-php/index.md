--- 
path: "/yii-quick-setup-php"
title: "Yii Quick Setup PHP (Yii-hah)" 
published: true
date: "07-07-2018" 
--- 

Yii is a mature PHP framework for building web applications of all sizes; utilizing the model-view-controller pattern, Yii is suitable for both full stack applications as well as RESTful APIs. 
<!-- more --> 

We will leverage Laragon to quickly get up and running, Yii comes with some good examples as a foundation which you can use to get acquainted with the framework. And the documentation will help with the rest (I'll provide some useful links at the end). I assume you already familiar with MVC frameworks. I intend on producing a blog post which highlights the differences and similarities between Laravel and Yii. 

# What Version of Yii 
There are two [main] versions of Yii: Yii and Yii2. Yii2 is essentially an updated version of Yii. This tutorial is for Yii2. 

# Lets Get Yii (Yii-hah)
1. Install Laragon: https://laragon.org/download/ - Personally I use the WAMP version. Laragon has an installation wizard so just follow what that says. 

# Composer 
If we were not using Laragon, we would have install Composer, personally, I found this to be tedious but Laragon comes with Composer. Simply open Laragon; click "Start All" (this starts your Apache and MySQL server), then open the terminal. And type "composer -V" + hit enter/return [on the keyboard], This should output the version of Composer being used, Now type "composer create-project --prefer-dist yiisoft/yii2-app-basic <project-name>", ensuring you name your project appropriately offcourse. 

# Change Directory, Serve Your App And Get Developing 
When the installation is completed, "cd <project-name>" to navigate into your new Yii project, if you are using VSCode, you can use "code ." to open the project in VSCode (or you can open it any essentially any other code-editor however appropriately). And lastly, to see your project in action enter the terminal command "yii serve". 

# Useful Links You Will Likely Want To Know 
* https://www.yiiframework.com/wiki/250/yii-for-beginners - Yii For Beginners 
* https://www.yiiframework.com/wiki/175/how-to-create-a-rest-api - Create  A RESTful API 
* https://www.yiiframework.com/doc/guide/2.0/en/structure-widgets - Reusable View Logic 
* https://www.yiiframework.com/doc/guide/2.0/en/start-databases - Databaes 
* https://www.yiiframework.com/doc/guide/2.0/en/start-gii - CLI Code generator 

# Thanks 
Thanks for reading, I hope to do more blog posts regarding Yii though I am sure their documentation can suffice until then. 
