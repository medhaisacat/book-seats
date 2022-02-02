var seat = require("./seat.js");

// Array of all floors
function floors () {
  this.floors = new Map();
  this.floors.set("1st floor", new seat.seats());
  this.floors.set("2nd floor", new seat.seats());
  this.floors.set("3rd floor", new seat.seats());
  this.floors.set("4th floor", new seat.seats());
  this.floors.set("5th floor", new seat.seats());
}

floors.prototype.getAllFloors = function () {
  return this.floors;
};

floors.prototype.getFloorSeats = async function (number) {
   return await this.floors.get(number).getAllSeats();
};

floors.prototype.selectSeats = function (...selected) {
  this.floors.get(number).setSelectedSeats(...selected);
};

floors.prototype.finishPayment = async function (...paid) {
  await this.floors.get(number).finishPayment(...paid);
};

module.exports = {
  floors
};
