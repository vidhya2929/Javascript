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
// const numbers = [2,4,6,8];
// const allEven = numbers.every(num => num % 2 === 0);
// console.log(allEven);


// const number = [2,3,6,8];
// const allEve = number.every(num => num % 2 === 0);
// console.log(allEve);
// //  .some() check if atleast one element in the array satisfies the conditon.
// // returns true if  any element passes the test 
// // returns false if no element passes the test 
// const num = [2,4,6,8];
// const hasEven =num.some(num => num % 2 === 0);
// console.log(hasEven);

// .flat()
// creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Syntax -;
// arr.flat(depth)    //here depth is optional (how deep wanted to flatten the array.Default is 1)

// Flatten 1 level 
// const arr = [1,2,[3,4],5];
// constflatArr = arr.flat();
// console.log(flatArr);

//  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 

// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
//   type: 'premium',
// };

// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
//   type: 'standard',
// };

// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
//   type: 'premium',
// };

// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
//   type: 'basic',
// };

// const accounts = [account1, account2, account3, account4];


// console.log(movements); 
// const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits': 'withdrawals') ; // 2 arguments -; 1) array we want to group , 2) callback function that determines how exactly we want to group the values in the array.
// console.log(groupedMovements);

// const groupedByActivity = Object.groupBy(accounts, account => {
//   const movementCount = account.movements.length;

//   if(movementCount >= 8) return 'Very Active';
//   if(movementCount >= 4) return 'active';
//   if(movementCount >= 1)return 'moderate';
//   return 'inactive';
// });
// console.log(groupedByActivity);

// More Ways of Creating and Filling of Arrays


const arr = ([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7));

// EMPTY ARRAYS
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));         //DOESN"T WORK
// When we pass only one argument to ARRAY CONSTRUCTOR FUNCTION then it creates a new empty argument with that length.
// Or we can't  use methods like map()
// Only one method is allowed in an empty array which is fill()
// FILL()
x.fill(1, 3); //here the entire empty array is filled with this 1, second value specifies were to begin filling.(like slice)
console.log(x);
x.fill(1,3,5);  // here the ending parameter 5 is not included.
console.log(x);
arr.fill(23,4,6);
console.log(arr);  // 1,  2, 3, 4,  23, 23, 7


// Array.from
Array.from()

console