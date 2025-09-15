console.log(23 === 23.0) //true
// Numbers are always stored in a binary format

// Base 10 => 0 to 9
// Binary base 2 => 0 and 1

// conversion of strings to numbers
console.log(Number('23'));
console.log(+ '23'); // + will do type coercion it will automatically convert everything to numbers

// Parsing
console.log(Number.parseInt('40px', 10));  // parseInt will find the number and log out it but the string should begin with number . 2) arg called regex =>vase of the numeral system
console.log(Number.parseInt('e23')); // not possible to convert as the string is not begin with a number


console.log(Number.parseFloat(' 2.5rem '));
console.log(parseInt('  2.5rem  '));  // Also called as global functions

// console.log(parseFloat(' 2.5rem '));  //also applicable but old method


// Check if value is NaN
console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false
console.log(Number.isNaN(+'20X'));  //true

// It is better to use isFinite()
// Check if value is number
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); //false


console.log(Number.isInteger(23));
console.log(Number.isInteger(23.0));
console.log(Number.isInteger(23 / 0));
// Some Methods
console.log(Math.sqrt(25));                                                                       
console.log(25 ** (1/2));      //exponentiation operator  to get square root
console.log( 8 ** (1/3));

console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.max(5, 18, '23', 11, 2));   // Math.max do type coercion
console.log(Math.max(5, 18, '23px', 11, 2));  // does no parsing

// console.log(Math.min(5, 18, 23, 11, 2)); To get minimum

// Constants on the Math object
console.log(Math.PI * Number.parseFloat('10px') ** 2);

console.log(Math.trunc(Math.random() * 6) + 1);
//Function for getting random numbers between 2 values(max,min)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) +min;
console.log(randomInt(10, 20));
console.log(randomInt(0,3));

// Rounding integers = All the methods do type coercion
console.log(Math.trunc(23.3));  //23
console.log(Math.round(23.9));  //24

console.log(Math.ceil(23.3));  //24
console.log(Math.ceil(23.9));  //24

console.log(Math.floor(23.3));  //23
console.log(Math.floor('23.9')); //23


// floor and trunc both cut off the decimal part while dealing with positive numbers.
// not for negative numbers

console.log(Math.trunc(-23.3));  //-23  (trunc simply remove the decimal part)
console.log(Math.floor(-23.3));  // -24 (because -24 is the floor value of -23.3)

// Rounding decimals  / floating point numbers
console.log((2.7).toFixed(0)); // toFixed() always return a string not a number
console.log((2.7).toFixed(3));
console.log((2.345).toFixed(2));
console.log(+(2.345).toFixed(2));

// Remainder Operator
//returns the remainder of a division
console.log(5 % 2);  //1
console.log(5 / 2); //2, 5 = 2 * 2 + 1

console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

// Numeric Seperators => way of formatting numbers
const diameter = 287_460_000_000;
// That are underscores that can be used wherever we want and helps to parse large numbers
console.log(diameter);

const priceCents = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI);

// when  we try to convert strings that contain underscore to a number then not work
console.log(Number(2300000));  // we get that numbr itself
console.log(Number230_0000); //NAn

// wORKING WITH BigInt
// Among 64 bits 53 bits are only used to store the number, the rest are string the decimal pont an the sign. 

console.log(2 ** 53 - 1);  // The biggest number avaScript can easily represent.  // here 2 because we are working with base 2.

console.log( 2 ** 53 + 6);   //Unsafe Numbers
// BigInt => Big Integer used to store big int,data

console.log(1236542687425386538465288342384726666666666n)  //hre the 'n' converts a regular number into BigInt number
// Creating BigInt using  BigInt function
console.log(BigInt(1236542687425386538465288342384726666666666));

// Operations
console.log(10000n + 10000n); //20000n
// mix BigInt with regular number
const huge =  2347946234556358276374343n;
const num = 23;
console.log(huge * BigInt(num));

console.log(20n > 15);console.log(20n === 20)
console.log(typeof 20n);
console.log(20n == '20');
