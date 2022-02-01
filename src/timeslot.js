var floors = require("./floor.js");

// Array of all timeslots
var timeslots = [1, 2, 3, 4, 5];

function getTimeslots() {
  return timeslots;
}

var getFloors;
getFloors = function (timeslot) {
  return floors.getAllFloors(timeslot);
};

module.export = {
  getTimeslots,
  getFloors
};
