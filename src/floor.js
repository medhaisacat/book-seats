var seats = require("./seat.js");

// Array of all floors
var floors = [1, 2, 3, 4, 5];

var getAllFloors;
getAllFloors = function () {
  return floors;
};

var getFloorSeats;
getFloorSeats = function (floor) {
  return seats.getAllSeats(floor);
};

var selectSeats;
selectSeats = function (...selected) {
  seats.setSelectedSeats(selected);
};
var finishPayment;
finishPayment = function (...paid) {
  seats.finishPayment(...paid);
};

module.exports = {
  getAllFloors,
  getFloorSeats,
  selectSeats,
  finishPayment
};
