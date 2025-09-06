// compilation  ==>> creation of global execution context(for top-level code(=>not inside a function))
// execution context =>the environment where a piece of JS is executed
// One global execution  Context , 
// one execution context per function, for each function call, a new execution context is created

// Inside EXECUTION CONTEXT
// 1) Variable Environment
// let, const and var declarations 
// functions 
// arguments object

// 'This' keyword
// special variable that is created for every execution Context(every function).Takes the value of the owner of the function in which the 'this' keyword is used.
// the value of 'this' keyword is not static. It depends on how the function is actually called and its value is only assigned when the function is actually called.
// 1. In method , 'this' points to the' object that is calling the method'
// eg:
const jonas = {
  name: 'jonas',
  year: 1989,
  calcAge: function(){
    return 2037- this.year
  }
}
jonas.calcAge // here 'this' refers jonas
// 2. simple function call  => 'this' is undefined
// 3. Arrow function => do not get their own 'this', if we use 'this' in arrow function then it refers to the 'this' of surrounding function  /parent function(lexical 'this' keyword)
// 4.Event listener => 'this' refers the DOM element that the handler is attached to.

console.log(this); //window (outside the function)

// inside a regular function
const calcAge = function(birthYear){
  console.log(2037-birthYear);
  console.log(this);
}
calcAge(1991)  //'this' keyword is undefined here


// Arrow function              =>doesn't have their own this
const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);           //window as it uses the its parent scope


const matilda = {
  year: 2017
};
matilda.calcAge = jonas.calcAge;
matilda.calcAge();  //give it from jonas

// Regular vs Arrow Functions
var firstName = 'Matilda';
const jonsas = {
firstName: 'jonas',
year: 1991,
calcAge: function (){
  console.log(this);
  console.log(2037 - this.year);
},

greet: () => console.log(`Hey ${this.firstName}`),
};
jonsas.greet();