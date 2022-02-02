var http = require("http");
const express = require('express');
const app = express();
var timeslot = require("./timeslot.js");

var timeslots = new timeslot.timeslots();

var getAllTimeslots;
getAllTimeslots = function () {
  return timeslots.getTimeslots();
};

var GetListOfFloors;
GetListOfFloors = function (timeslotId) {
  console.log("timeslotId = ", timeslotId);
  return timeslots.getFloors(timeslotId);
};

var GetSeatsByFloor;
GetSeatsByFloor = async function (timeslotId, floorId) {
  var floor = timeslots.timeslots.get(timeslotId);
  return await floor.getFloorSeats(floorId);
}

var BlockUserSelectedSeats;
BlockUserSelectedSeats = async function (timeslotId, floorId, ...seats) {
  var floor = timeslots.timeslots.get(timeslotId);
  var seat = floor.floors.get(floorId);
  return await seat.setSelectedSeats(...seats);
}

var BookUserSelectedSeat;
BookUserSelectedSeat = async function (timeslotId, floorId, ...seats) {
  var floor = timeslots.timeslots.get(timeslotId);
  var seat = floor.floors.get(floorId);
  return await seat.finishPayment(...seats);
}

// Get list of floors
app.get('/getlistoffloors', function(req, res) {
  res.send(JSON.stringify(Array.from(GetListOfFloors(req.query.timeslot).entries())));
})

// Get seats by floor
app.get('/getseatsbyfloor', async function(req, res) {
  res.send(JSON.stringify(await GetSeatsByFloor(req.query.timeslot, req.query.floor)));
})

// Block user selected seats
app.get('/blockuserselectedseats', async function(req, res) {
  res.send(JSON.stringify(await BlockUserSelectedSeats(req.query.timeslot, req.query.floor, ...req.query.seats)));
})

// Book user selected seats
app.get('/bookuserselectedseats', async function(req, res) {
  res.send(JSON.stringify(await BookUserSelectedSeat(req.query.timeslot, req.query.floor, ...req.query.seats)));
})

// Listen on port 8080
app.listen(8080);