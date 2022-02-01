var http = require("http");
var timeslot = require("./timeslot.js");

//create a server object:
http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.write(...timeslot.getTimeslots());
    res.end(); //end the response
  })
  .listen(8081); //the server object listens on port 8080
