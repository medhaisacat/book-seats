var AVAILABLE = 0;
var BOOKED = -1;
var SELECTED = 1;

function seats() {
  this.seats = [AVAILABLE, AVAILABLE, AVAILABLE, AVAILABLE, AVAILABLE];
}

// return all seats
seats.prototype.getAllSeats = function () {
  var allSeats = {
    'available': [],
    'booked': [],
    'selected': []
  }
  this.seats.forEach((number, index) => {
    if (number === AVAILABLE) 
      allSeats.available.push(index);
    if (number === BOOKED)
      allSeats.booked.push(index);
    if (number === SELECTED)
      allSeats.selected.push(index);
  })
  return allSeats;
};

// set seat to available after 5 minutes
seats.prototype.startTimer = function (...selected) {
  selected.forEach( (number) => {
    setTimeout((number) => {
      if (this.seats[number] === SELECTED) {
        this.seats[number] = AVAILABLE;
        console.log("Seat/s", this.seats[number], "reset to available!");
      }
    }, 300000);
  })
};

// set seat as selected and start timer
seats.prototype.setSelectedSeats = function (...selected) {
  selected.forEach((number) => {
    if (this.seats[number] === AVAILABLE)
      this.seats[number] = SELECTED;
  })
  console.log("Seat/s" , ...selected, "selected successfully!");
  this.startTimer(selected);
};

seats.prototype.finishPayment = function (...paid) {
  paid.forEach((element) => {
    if (this.seats[element] === SELECTED || this.seats[element] === AVAILABLE) {
    console.log(...this.seats);

    this.seats[element] = BOOKED;
    console.log("Seat/s", element, "booked successfully!");
    console.log(...this.seats);
    // else print or return error by calling callback
    // callback yet to be determined
    } else {
      console.log (" Could not book seats")
    }
  })
  
};

module.exports = {
  seats
};
