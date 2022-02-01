var AVAILABLE = 0;
var BOOKED = -1;
var SELECTED = 1;

var seats = [0, 0, 0, 0, 0];

// return all seats
var getAllSeats;
getAllSeats = function () {
  return seats;
};

// set seat to available after 5 minutes
var startTimer;
startTimer = function (selected) {
  setTimeout((selected) => {
    seats[selected] = AVAILABLE;
  }, 300000);
};

// set seat as selected and start timer
var setSelectedSeats;
setSelectedSeats = function (...selected) {
  seats[selected] = SELECTED;
  startTimer(selected);
};

var finishPayment;
finishPayment = function (...paid) {
  if (seats[paid] === SELECTED) seats[paid] = BOOKED;
  // else print or return error by calling callback
  // callback yet to be determined
};

module.exports = {
  getAllSeats,
  setSelectedSeats,
  finishPayment
};
