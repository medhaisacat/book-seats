var timeslot = require("./timeslot.js");
var floor = require("./floor.js");
var seat = require("./seat.js");

var getAllTimeslots;
getAllTimeslots = function () {
  return timeslot.getTimeslots();
};

var GetListOfFloors;
GetListOfFloors = function (timeslotId) {
  return timeslot.getFloors(timeslotId);
};

function GetSeatsByFloor(floorId) {
  return floor.getFloorSeats(floorId);
}

function BlockUserSelectedSeats(...seats) {
  return seat.setSelectedSeats(...seats);
}

function BookUserSelectedSeat(...seats) {
  return seat.finishPayment(...seats);
}

console.log(getAllTimeslots());
