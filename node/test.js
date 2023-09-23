//ep1
// const namie = "Ganesh";
// console.log(namie);
// //global object in node is global just like window is present in browser
// global.setTimeout(() => console.log(" Running setTimeout"), 2000);
// //not using global object because it is present by default
// setTimeout(() => console.log(`no global used in this settimeout`), 4000);

//import export files module.exports
//const xyz = require("./people");
//console.log(xyz);

//operating system module
// const os = require("os");
//console.log(os); separate variables with ,
// console.log(os.platform(), os.homedir());

//file syste .. read create delete files using node
//read file
// const fs= require('fs'); this is required for fs file system
// fs.readFile(filename,callback function); this is a async process
//write file
// fs.writeFile(file location , what we want in that file...everything will be deleted and this will be written on the file , callback function
// this is also a async funciton
//make directory
// fs.mkdir(new directory name and location , callback function to handle error and do something)
//check if something /folder exists or not
// fs.existsSync(location of that folder); returns true or false .valueOf.is not an async process .. is Sync
//fs.rmdir

// /stream and buffer ===> tap and bucket example
//reading and writing streams

//reading streams ... we create a stream reader in file system ... add event listener .on to it .. event is data and we run function with
//chunk as argument
// const fs = require('fs');
// const readStream = fs.createReadStream('file location ', {encoding scheme encoding:utf8});
// readStream.on('data', (chunk)=> console.log(chunk.toString()));

//stream writing
// const writeStream = fs.createWriteStream("location of file");
// writeStream.write(chunk); what ever we have in chunk will be written on file
// ...continuous adding and not overlapping as it works with buffers

//piping
// readStream.pipe(writeStream);
// this will take streams from location and write it to location
