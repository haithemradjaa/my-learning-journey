// I use VS code and it's the best one for this, in my opinion.
// you need to know html and css and js for this course

// A runtime is an environment that executes code.
// Node.js is a JavaScript runtime, meaning it allows
// JavaScript to run outside the browser. It provides the
// necessary components (like a V8 engine, APIs, and an
// event-driven architecture) to execute JavaScript on the
// server, enabling backend development, file system access,
// networking, and more.

// In Node.js, the console refers to the terminal window where you run and interact with your Node.js programs.
// It allows you to execute JavaScript code, print output using console.log(), and see errors or debugging messages.
// For example:
// 1. Open a terminal (Command Prompt, Bash, etc.).
// 2. Run node to enter the Node.js interactive shell (REPL).
// 3. Type console.log("Hello, Node.js!"), and it prints the output in the terminal.
// This terminal serves as the interface for running and debugging Node.js applications.
// ________________________________________________________________

// In node js we have a global object which is similar to the window object in the browser.
// The window object is the global object in the browser, it is the root object of the DOM.
// It is the object that contains all of the available methods and properties of the browser.
// In node.js there is no window object, instead, we have the global object.
// The global object is the root object of the node.js environment.
// It contains all of the available methods and properties of the node.js environment.
// We can access the global object by using the keyword "global".
//________________________________________________________________

// you can see the props and methods of the global object by using
// console.log(global);

// to run the program, type on the terminal : node server (or the name of your file, you don't need the extension for this)

//____________________________________________________________

// in node js we have core modules that are not found in js
// these modules relate to the OS and the filesystem and other things on the server.

//____________________________________________________________

//when we need to import a module, we use the require keyword
// const os = require('os');

// and you can have some info about the system you're executing on like this
// console.log(os.type()); // gives what os is running
// console.log(os.version()); // its version
// console.log(os.homedir()); // the path of the home directory

// and you can do this too
//console.log(__dirname); // name of the dir of the file being ran
//console.log(__filename); // name of the file being ran

//___________________________________________________________

// another common core module is path
//const path = require('path');

// for more info using this module you can apply these :
// console.log(path.dirname(__filename)); // file path
// console.log(path.basename(__filename)); // file base = name + extension
// console.log(path.extname(__filename)); // file extension
// console.log(path.parse(__filename)); // returns an object with all the above and more! 

//____________________________________________________________

// create another .js file and write some functions into it, we have math.js in our folder, check it
// we will import those functions from it like this : 

// const math = require('./math'); // since it's not a comman       module we need to specify the path to it
// console.log(math.add(5, 4)); // will output 9

// if you wanted to import just some functions or attributs, you can destructure the source like this : 
// const { add } = require('./math'); // to import just the add  function of that module that we created, this is destructring the module down to its functions

//____________________________________________________________

// please note that node js is missing some APIs found in the vanilla js like fetch!

//____________________________________________________________