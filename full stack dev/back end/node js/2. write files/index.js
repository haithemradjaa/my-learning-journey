// the filename module in node js let us perform CRUD ops on files
// go check the documentation of this module on the officical node js docs
// https://nodejs.org/api/fs.html

// tp import this modile we use the require keyword
// const fs = require("fs");

// to read a file we use the readFile method

// fs.readFile("./files/starter.txt", "utf-8" /* this is the encoding to read the text into human language*/, (err, data) => {
//    if (err) throw err;
//   console.log(data);
//});

// remove the encoding and see that the result is a buffer data

// another less comon way of doing this is to work with toString method

// fs.readFile("./files/starter.txt", (err, data) => {
//    if (err) throw err;
//    console.log(data.toString());
//});

// if an exception occurs we uncaught exception occurs, we can process it this way
//process.on(`uncaughtException`, err => {
//    console.error(`there was an uncaught error: ${err}`);
//    process.exit(1);
//});

// note that node functionality is asynchronous
// you can run see which instruction gets executed first between the reading file above and this 
// console.log("hello");
// you'd see that the reading file starts first, but finishes last

// a better way of passing paths into functions in node js is to use the path module
// const path = require("path");

// when we're writing into a file, the encoding specified before is by default there
// this time you'll need to pass a second argument to the writeFile method, telling it what you wanna write into the file

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "this is async", err => {
//     if (err) throw err;
//     console.log("write successful");
// });

// the above code will create a new file called reply.txt in the files folder
// if the file already exists, it will overwrite it, so be careful working with it!

// if you run multiple file handling methods in one go, you'd notice that someone them 
// finish before the one ran before them

// you can go ahead and tell node you want multiple operations to be nested and done one after the other
// but you'll get into a callback hell, it's very bad practice

// fs.writeFile(path.join(__dirname, "files", "reply.txt"), "this is the new text", err => {
//     if (err) throw err;
//     console.log("write successful");
//     fs.appendFile(path.join(__dirname, "files", "reply.txt"), "this is appended text", err => {
//         if (err) throw err;
//         console.log("append successful");
        
//         fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReplyName.txt"), err => {
//             if (err) throw err;
//             console.log("rename successful");
//         });
//     });
// });

// we can do this in a better way using promises
// const fsPromises = require("fs").promises; // this is a module that contains all the fs methods as promises meaning they return a promise

// a promise is an object that represents the eventual completion or failure of an asynchronous operation
// it's a placeholder for a value that will eventually be available
// it's a way to handle asynchronous operations in a more readable and manageable way

// const fileOps = async () => {
//     try {
//         const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8");
//         console.log(data);
        
//         await fsPromises.unlink(path.join(__dirname, "files", "starter.txt")); // this will delete the file
//         await fsPromises.writeFile(path.join(__dirname, "files", "reply.txt"), data); 
//         await fsPromises.appendFile(path.join(__dirname, "files", "reply.txt"), "\nthis is appended text");
//         await fsPromises.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReplyName.txt"));
//         const newData = await fsPromises.readFile(path.join(__dirname, "files", "newReplyName.txt"), "utf-8");
//         console.log(newData);
//     } catch (err) {
//         console.error(err);
//     }
// };

// fileOps();
// this way, we can read the file, delete it, write to it, append to it, rename it and read it again
// and we can do all these in a single function
// note that we're using the async keyword to make the function async
// and we're using the await keyword to wait for the promises to be resolved
// if an error occurs, we catch it and log it

//_________________________________________________________________________________

// when we have large filesizes, we can't move the data in one chunk
// we need to move it in chunks, this is why we need to use streams
// streams are objects that allow us to read and write data in chunks
// they are used to handle large amounts of data, and a chunk's nature is that it's a buffer containing a portion of the data
// streams are used to read and write data in chunks

// go to the stream.js file to see how to use streams

//__________________________________________________________________________________

