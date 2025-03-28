// int his file we will handle directories

// const fs = require('fs');

// fs.mkdir('./new', (err) => {
//     if (err) throw err;
//     console.log("directory created");
// })

// we can check if the directory exists or not

// if (!fs.existsSync('./new')) {
//     fs.mkdir('./new', (err) => {
//         if (err) throw err;
//         console.log("directory created");
//     })
// } else {
//     console.log("Directory already exists");
// }

// This code checks if a directory named 'new' exists in the current folder
// If the directory does not exist (!fs.existsSync), it creates it using fs.mkdir
// If there's an error during creation, it throws the error
// If directory is created successfully, it logs "directory created"
// If the directory already exists, it logs "Directory already exists"

// you wanna check the existence of a file or directory before applying something on them

// to remove a directory the same way 

// if (!fs.existSync('./new')){
//     fs.rmdir('./new', (err) => {
//         if (err) throw err;
//         console.log("directory removed!")
//     })
// }

//____________________________________________________________________

// Chapter 2 done.
