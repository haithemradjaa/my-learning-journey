// we will be creating a readable stream and a writeable stream

// const fs = require('fs');

// const rs = fs.createReadStream('.files/lorem.txt', {encoding: 'utf8'}); // this will create a readable stream
// const ws = fs.createWriteStream('./files/newLorem.txt'); // this will create a new file called newLorem.txt in the files folder

// rs.on('data', (datachunk) => {
//     ws.write(datachunk); // When data is received from the read stream, write it to the write stream
// })

// when a readable stream is created, it emits a data event when data is available to be read
// a data event means that data is available to be read from the stream
// when the data is read, it is passed as an argument to the callback function in the datachunk parameter

//________________________________________________________________

// a better way to do this is by using the pipe method
// the pipe method takes a readable stream and a writable stream as arguments
// it pipes the data from the readable stream to the writable stream
// piping means that the data is being passed from one stream to another without any modification
// the pipe method returns the writable stream

// remove the newLorem.txt file and run the code below to see that we have the same result
// rs.pipe(ws);

//_________________________________________________________________

// now go the the dir.js file