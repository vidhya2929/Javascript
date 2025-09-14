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







// CHALLENGE
// Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

// - Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
// - Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
// - Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

// YOUR TASKS:
// 1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
// 2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
// 3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
// 4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
// 5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
// 6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
// 7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
// 8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
// 9. Group the dogs by the number of owners they have
// 10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

// HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
// HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

// TEST DATA:
// const dogs = [
//   { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//   { weight: 8, curFood: 200, owners: ['Matilda'] },
//   { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
//   { weight: 18, curFood: 244, owners: ['Joe'] },
//   { weight: 32, curFood: 340, owners: ['Michael'] },
// ];



const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1)
dogs.forEach(dog => dog.recFood = Math.floor(dog.weight ** 0.75 *28));
console.log(dogs);

// 2)
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(`Sarah's dog eats too ${dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
}`)

// 3)
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
console.log(ownersTooMuch);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners)

// into one nice string
// join() to get string out of an array
console.log(`${ownersTooMuch.join(' ')}'s dogs are eating too much`)
// 5)
console.log(dogs.some(dog => dog.curFood === dog.recFood));
// 6)