// // CLOSURES
// // Inner function has access to variables from an outer function even after the outer function has finished execution(or the outer function is returned)
// function outerFunction(){
//   let outerVariable = 'I am from outer scope';
//   function innerFunction(){
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// const myCLosure = outerFunction();
// myCLosure();
// // Even outerFunction() has finished execution, innerFunction() still has access to outerVariable.
// function treasureBox(){
//   let secretNumber = 7;
//   function helperRobot(){
//     console.log('The secret number is:'+ secretNumber);
//   }
//   return helperRobot
// }
// const myRobot = treasureBox(); 
// myRobot();

// 
// Some() and Every() in JavaScript

//  .every() checks if all elements in an array satisfies a condition.
// It returns 'true' if every element passes the test.
// 'false' if any element fails the test.
const numbers = [2,4,6,8];
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven);


const number = [2,3,6,8];
const allEve = number.every(num => num % 2 === 0);
console.log(allEve);
//  .some() check if atleast one element in the array satisfies the conditon.
// returns true if  any element passes the test 
// returns false if no element passes the test 
const num = [2,4,6,8];
const hasEven =num.some(num => num % 2 === 0);
console.log(hasEven);

// .flat()
// creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax -;
// arr.flat(depth)    //here depth is optional (how deep wanted to flatten the array.Default is 1)

// Flatten 1 level 
const arr = [1,2,[3,4],5];
constflatArr = arr.flat();
console.log(flatArr);


























//  flat map
// Sorting