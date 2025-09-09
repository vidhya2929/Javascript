const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){

  // }
  book(flightNum, name){
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, name})
  },
};
// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);//addEventListener is the Higher Order Function and Lufthansa.buyplane is the callback function.
// while clicking on it we get NaN because 'this' is the button element 
// In event Handler function the 'this' keyword is always points to the element on which that handler is attached to.
// we use bind instead of bind because we don't want to call the method.
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));
