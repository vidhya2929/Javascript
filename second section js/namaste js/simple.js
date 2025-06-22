// let and const declarations are Hoisted
console.log(b);              //undefined due to hoisting
let a = 10;
var b = 100;


console.log(ar);             //error -; cannot access a before initialization
let ar = 10;
var b = 100;
//  var b is attached to global object
// but let and const are also allocated memory but they are stored on a seperate memory than global
// we cannot access this memory without initializing it.
