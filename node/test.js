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
const os = require("os");

//console.log(os);
console.log(os.platform(), os.homedir());
