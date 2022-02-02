var floor = require("./floor.js");

// Array of all timeslots
function timeslots() {
  this.timeslots = new Map();
  this.timeslots.set("11:00-12:00", new floor.floors());
  this.timeslots.set("12:00-1:00", new floor.floors());
  this.timeslots.set("1:00-2:00", new floor.floors());
  this.timeslots.set("2:00-3:00", new floor.floors());
  this.timeslots.set("3:00-4:00", new floor.floors());
  this.enumerable = true;
}

timeslots.prototype.getTimeslots = function() {
  return this.timeslots;
}

timeslots.prototype.getFloors = function(timeslot) {
  console.log("timeslot = ", timeslot);
  return this.timeslots.get(timeslot).getAllFloors(timeslot);
};

module.exports = {
  timeslots
};
