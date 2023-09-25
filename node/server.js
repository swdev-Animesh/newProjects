const http = require("http");

//we creating this server and this gets 2 arguments ..req and response ...runs everytime whenever server gets request
const server = http.createServer((req, res) => {
  console.log("req made ");
});

//we created a server now we listen to request from port from domain and run a funciton when we here the comment.
server.listen(3000, "localhost", () => {
  console.log("server running line 3");
});
