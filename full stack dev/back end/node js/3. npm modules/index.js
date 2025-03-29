// we will be learning about node package manager also know as npm
// when you insatll node you get npm with it
// npm is a package manager for javascript, and you can check its documentation at https://docs.npmjs.com/

// the difference between a core module and an npm package is that a core module is built into node and npm packages are not
// npm packages are also called dependencies, and thery're created by third parties in opposition to core modules which are created by the node team
// you need to install the package before you can use it


// to install an npm package run this command in your terminal
// npm install <package name> or npm i <package name>

// install nodemon, it's a 

// the package will be installed gloablly, meaning 

// you can run it typing 'nodemon' alone and it'll search for a file named 'index.js' to run by default
// if the file name is different from that, you need to specify it

// if you make changes and save them, nodemon will detect that and run them automatically

// to exit nodemon, press ctrl + c

// to initialize npm for our project we type 
// npm init, just like git init if you know it
// this command will ask you some questions after you execute it, so you can say yes to all of em by default like this 
// npm init -yes
// but go ahead and check the question the first time! your answers will be stored in a Package.json file
// this file is important for hosting and github because 

// _________________________________________________________________

// install date-fns which stands for date functions 
// after you install it, it'll be added to the package.json file as a dependency, this means 
// these are production dependencies that are included, when you build your project they're installed globally for the project

// a package-lock.json file is created to, its role is to lock the version of the dependencies to a specific version, meaning if you run npm install again, it'll install the same version of the dependencies
// in other words, it'll install the same version of the dependencies that were installed the first time, and this is usuful because if you update a dependency, it'll update the version of the dependency in the package-lock.json file, and when you run npm install again, it'll install the same version of the dependency

// the node_modules directory is created when you install a package, it contains the packages that you installed
// it's fairly large and we don't wanna push it to github, so we wanna add it to the .gitignore file

// if you clone a git repo that has a package-lock.json file, you need to run npm install to install the dependencies and create the node_modules directory

//________________________________________________________________________

// const { format } = require('date-fns');

//console.log(format(new Date(), 'yyyy-MM-dd\tHH:mm:ss'));

// This line formats today's date using date-fns library
// new Date() creates current date object
// format() function from date-fns formats it to year-month-day
// 'yyyy-MM-dd' is the format pattern where:
// yyyy = full year (4 digits)
// MM = month (2 digits)
// dd = day (2 digits)
// \t = tab
// HH = hour (24-hour format)
// mm = minute
// ss = second

//__________________________________________________________________

// a dev dependency is a dependency that's only used for development, not for production
// Dev dependencies are packages used only during development, not in production
// They help with tasks like:
// - Testing (Jest, Mocha)
// - Code formatting (Prettier, ESLint)
// - Development servers (nodemon)
// - Build tools (webpack, babel)
// - Documentation generators
// They make development easier but aren't needed to run the actual application
// for example, we can install nodemon as a dev dependency
// npm install nodemon --save-dev or npm i nodemon -D
// you can see the changes in the package.json file

//__________________________________________________________________

// 00.57.12

