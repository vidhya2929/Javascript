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

 const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 

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


// const arr = ([1,2,3,4,5,6,7]);
// console.log(new Array(1,2,3,4,5,6,7));

// // EMPTY ARRAYS
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5));         //DOESN"T WORK
// // When we pass only one argument to ARRAY CONSTRUCTOR FUNCTION then it creates a new empty argument with that length.
// // Or we can't  use methods like map()
// // Only one method is allowed in an empty array which is fill()
// // FILL()
// x.fill(1, 3); //here the entire empty array is filled with this 1, second value specifies were to begin filling.(like slice)
// console.log(x);
// x.fill(1,3,5);  // here the ending parameter 5 is not included.
// console.log(x);
// arr.fill(23,4,6);
// console.log(arr);  // 1,  2, 3, 4,  23, 23, 7


// // Array.from
// const w = Array.from({length: 7}, () => 1);   
// console.log(w);
// // args -; 1) length property 2) mapping function
// const z = Array.from({length: 7}, (cur, i)=> i+1);
// const z = Array.from({length: 7}, (_,i)=> i+1);    //i => throwable value
// Array.from() => used to convert a nodelist to an array



// console.log()
// querySelectorAll () => returns a nodelist


// const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov>0).reduce((sum,curr) => sum+curr,0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts.flatMap(acc => acc.movemets).filter(mov => mov > 1000).length;

// const numDeposits1000red = accounts.flatMap(acc => acc.movemets)
// .reduce((acc,curr) =>  cur >=1000 ? count + 1 : count,0)

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-07-26T17:01:17.194Z',
    '2020-07-28T23:36:17.929Z',
    '2020-08-01T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

console.log(new Date(0)); 
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);


console.log(future.getFullYear());  //year
console.log(future.getMonth());   // 0 based
console.log(future.getDate());   // day
console.log(future.getDay());    // day of the week
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());
// timestamp is the milliseconds which have passed since January 1,1970
console.log(new Date(2142237180000));

//  To get current timeStamp
console.log(Date.now());

// set methods 
future.setFullYear(2040);
console.log(future);