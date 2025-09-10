'use strict'
// Default Parameters
const bookings = [];
const createBooking = function(flightNum,numPass = 1 *1.24,price = 199 * numPass){
//const createBooking = function(flightNum,price = 199*numPass, numPass = 2)  IT IS NOT POSSIBLE as numPass is declared later ,it should be in the order.
  // ES5
  // numPass = numPass || 1;   //OR gives first truthy value so 1
  // price = price || 199;
  const booking = {
    flightNum,
    numPass,
    price
  }
  console.log(booking);
  bookings.push(booking);
}
createBooking('LH123');
createBooking('LH123', 2, 800);
// default values can contain any expression
createBooking('LH123',2);
createBooking('Lh3432', 5);
// we cannot skip one value for eg:
createBooking('LH123', 800); //here 800 becomes the numPass but can pass undefined
createBooking('LH123', undefined, 800);
// Value Vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas schmedtmann',
  passport: 24739479283
}
const checkIn = function(flightNum,passenger){
  flightNum = 'LH999';                   //flightNum is different variable so it does not affect flight outside
  passenger.name = 'Mr.'+passenger.name;   // when we pass a reference type to a function what is copied is just a reference to the object in the heap(equal to const passenger = jonas)

  if(passenger.passport === 24739479283){
    alert('Check in')
  }else{
    alert('Wrong Passport!');
  }
}

checkIn(flight, jonas); //flight is a primitive type (string) .Flight is copied to flightNum (equal to flightNum = flight) i.e, the are same object in the memory heap.
console.log(flight);
console.log(jonas);


// Passing a primitive typr to a function is same as creating a copy like const flightNum = flight, outside the function
// When we pass an object to a function is same as const passenger = jonas , when we change the copy will also happen in the original

// primitive type (like string, number):
const flightt = 'LH234';
// when we pass a primitive type to a function , a copy of the value is made.
checkIn(flightt,jonas);
// inside the function 
flightnum = flight  //flightnum is now a copy of flight
// but changing flightnum does not affect flight.

// Reference Type (like objects):
const jonass = {name: 'Jonas Schmedtmann', passport: 24739479282};
// when you pass an object to a function, the reference(pointer) to the object is passed
checkIn(flight, jonass);
// Inside the function:
passenger = jonass;
passenger.name = 'Mr. '+passenger.name; //changes the actual object

// example
const newPassport = function(person){
  person.passport = Math.trunc(Math.random() * 1000000000000);
}

newPassport(jonas);
// JS only have passing by value , no passing by reference
checkIn(flight, jonas);

// First Class functions and HOF
// First-Class FUnctions
// javaScript treats functions as first-class citizens (means that functions are simply values)
// Functions are just another type of object
// 

const add = (a,b) => a+b;

const counter = {
  value: 23,
  inc: function(){this.value++;}
}

// STORE FUNCTIONS IN VARIABLES OR PROPERTIES
// PASS FUNCTIONS AS ARGUMENTS TO OTHER FUNCTIONS
// RETURN FUNCTIONS FORM FUNCTIONS
// METHODS THAT WE CAN CALL ON FUNCTIONS
 
// As JS has first class functions that allows us to use HOF
// HOC ==>> A function that receives another function as an argument or a function that returns a new function.
// 1) A function that receives another function
const greet = () => console.log('Hey Jonas');
btnClose.addEventlistener('click', greet);   //addEventListener is the higher order function.because it receives greet function as the input,greet(callback function) will be called later by the HOF.

// first class Vs HOF 
// First class functions are just a concept, that a programming language either has or does not have.There is no first Class functions are in practice
// HOF are in practice

const oneWord = function(str) {
  return str.replace(/ /g, '').toLowercase();
}

const upperFirstWord = function(str){
  const [first, ...others] = str.split(' ');
  return[first.toUpperCase(),...others].join(' ');
}

// Higher-Order Function
const transformer = function(str, fn){  
  console.log(`original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`); // functions have methods and besides methods functions have properties.

}
transformer('JavaScript is the best!', upperFirstWord); //only passing the value not calling the function
// calling the transformer function and into that passing a callback function

const high5 = function(){
    console.log('Bye');
}
document.body.addEventListener('click', high5)  //high5 is the event handler or event listener
// high5 is the callback function and addEventListener is the higher order function.

['jonas', 'Martha', 'Adam'].forEach(high5);
// Callbacks
// helps to split up our code into motre reusable and interconnected parts, higher level of abstraction that is leaving the low level details to the low level functions.

// 2  Function that returns new function
// function cout(){
//   let counter = 0;
//   return function() {
//     counter++;
//   };
// }

const greett = function(greeting){
  return function(name){
    console.log(`${greeting}  ${name}`);
  }
}
const greeterHey = greet('Hey');

greeterHey('Jonas');
greeterHey('Steven');
greet('Hello') ('Jonas');

const greettArr = greeting =>name =>console.log(`${greeting} ${name}`);


// call apply and bind  ==>> Manually sets the 'this' keyword for any function call.  
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);


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
lufthansa.book(239, 'Jonas schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book //this is possible as JS has first class functions
// Does NOT work
// book(23, 'Sarah Williams'); //In regular function 'this' keyword refers to undefined
// call apply and bind  
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);
book.call(lufthansa, 239, 'Mini Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings:[],
};

book.call(swiss, 56, 'Harley David');
console.log(swiss);

// Apply Method
// Apply method does not receive a list of arguments after the 'this' keyword.It will take the array of arguments
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData)
console.log(swiss); 

book.call(swiss, ...flightData)

// Bind
// Bind does not immediately call the function, Instead it returns a new function where the 'this' keyword is bound.so it sets to whatever value we pass into bind.
// book.call(eurowings, 23, 'Sarah Williams)
book.bind(eurowings); //this will not call the book function, instead it will return a new function where 'this' keyword  will always be set to Eurowings.
const bookEW = book.bind(eurowings);
bookEW(23, 'Steven Williams');
// function for 1 specific airline and 1 specific flight number
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
// specifying the parts of the arguments beforehand => partial application [part of the arguments of the original function are already applied] ==>>bookEW23


// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++;
  console.log(this.planes);
  // lufthansa.buyPlane;
};
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);

// 
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);

// // addVAT = value => value + value * 0.23;
// console.log(addVAT(100));
// console.log(addVAT(23));


const addTax = function(rate){
  return function(value){
    return value + value * rate;
  }
}
const rateTax = addTax(0.23);
console.log(rateTax(100));
console.log(rateTax(23));

// CHALLENGE 
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1:Python', '2:Rust','3: C++'],
  answers: new Array(4).fill(0),//generates [0,0,0,0];

registerNewAnswer(){
const answer = Number(prompt(`${this.question}\n${this.options.join('\n')}\n(Write option number)`));

// here join method is used to convert the array into string.
console.log(answer);
},
};
poll.registerNewAnswer();

// Immediately Invoked Dunction Expressions(IIFE)
const runOnce = function (){
  console.log('This will never run again');
};
runOnce();

// IIFE (1 way)
(function(){                                 // Enclosed in a parenthesis to show that it is an expression.
  console.log('This will run only once');
})();
// (second way)
(() => console.log('This will never run again'))();
