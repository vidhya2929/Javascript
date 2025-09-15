 let arr = ['a','b','c','d','e'];
//  SLICE
console.log(arr.slice(2)); // It does not mutate the original array instead of that it returns a new array
console.log(arr.slice(2,4));  // here it is till 4 (not include 4)
console.log(arr.slice(-2)); //second last item in the array
// Slice method to create a shallow copy of an array
console.log(arr.slice());    //Or
console.log([...arr]);
// SPLICE
// mutates the original array
// console.log(arr.splice(2));
arr.splice(1,2) //strting of splice ,2 is the number of elements that we want to delete
console.log(arr);
console.log(arr);
// REVERSE
array = ['a','b','c','d','e'];
const array2 = ['j','k','l','i']
console.log(array2.reverse());//mutate the array
// CONCAT
const letters = arr.concat(array2);

// CONCAT
console.log(letters.join('-'));


const arra = [23, 11, 64];
console.log(arr[0]);
// ====================
console.log(arr.at(0))
// getting last element
console.log(arr[arr.length-1]);
console.log(arra.slice(-1)[0]);
console.log(arra.at(-1)); 
// .at also on the strings
console.log('Jonas'.at(2));

//FOREACH()
// ifelse
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const movement of movements) {
  if(movement > 0){
    console.log(`You deposited ${movement}`);
  }
  else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}
// forEach() 
// requires a callback function as forEach method is a higher order function.
movements.forEach(function(movement) {              //forEach will loop over the array and it will execute the callback function.
  // In each iteration it will pass in the current element of the array as an argument.
  if(movement >0){
    console.log(`You deposited ${movement}`);
  }
  else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});

// Accessing the current index in the [FOR....OF] loop  
for(const [i, movement] of movements.entries()){ //.entries returns an array of arrays, which in the first position contains the current index and then the value itself
  if(movement > 0){
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  }
  else{
    console.log( `Movement ${i+1}:You withdraw ${Math.abs(movement)}`);
  }
}
//  Accessing the current index in the [FOREACH] loop 
movements.forEach(function (mov,i,arr){   //order should not be changed.=> current element, current index, entire array
if(mov > 0){
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  }
  else{
    console.log( `Movement ${i+1}:You withdraw ${Math.abs(mov)}`);
  }
})
// break and continue do not work in a forEach loop
// FOREACH for MAP
const currencies = new Map([
  ['USD', 'United STates dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
// In this array of arrays => inner array is one element of Map with key and value
// Calling forEach on a map
currencies.forEach(function (value, key, map){  //args-; current value, key, entire map
  console.log(`${key}: ${value}`);
})


// FOREACH for Set
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);

/*
currenciesUnique.forEach(function(value, key, map){
  console.log(`${key}:${value}`);   // if we do so then the key is exactly same as the value.
})
*/

// because a set doesn't have keys and indices, SO the key is not needed there

currenciesUnique.forEach(function(value,_,map){    //   '_' underscore means a throwable variable in javaScript(variable that is completely unnecessary).
  console.log(`${value}: ${value}`);
})

// DATA TRANSFORMATION WITH MAP, FILTER AND REDUCE

// MAP() =>Alternative method to loop over arrays.
// similar to forEach() , diff is that map creates a new array based on the original array.
// map() takes an array ==>> loops over that array ==>> at each iteration it applies a function specified in the code to the current array element.==>> and returns a new array

// FILTER() => Used to filter elements in the original array which satisfies a certain condition.
// filter() ==>> all the elements that pass the test that we specified filtered into a new array ==>> remaining will be filtered out not added to the new array

//REDUCE() => reduce all array elements to a single value
// reduce() method has an accumulator and a current variable.
// reduce() method loops over the array => It keeps adding the current element onto the accumulator until the end of the loop.
// reduce returns the result so no new array is there only the reduced value


/////////////////////////////  MAP()  ///////////////////////////////////////////////////////////////
const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});
// Arrow Function
// const movementsUSD = movements.map(mov => 
//    mov * eurToUsd
// );


console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// map() also have access to 3 parameters => 
const movementsDescriptions=movements.map((mov,i,arr) => {
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}` //3rd parameter is not used in this (arr)
 
 
  // if(mov > 0) {
  //   return `Movement ${i +1}: You deposited ${mov}`;
  // }
  // else 
  // {
  //   return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
  // }
});
console.log(movementsDescriptions);

// FILTER method
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];       //  Above uncommented 
const deposits = movements.filter(function(mov){
  return mov > 0;
})
console.log(deposits);

const depositsFor = [];
for(const mov of movements) if(mov > 0) depositsFor.push(mov);
console.log(depositsFor);
// Advantage for not using regular'for loop' is usage of chaining different methods.

const withdrawals = [];
for(const mov of movements) if (mov < 0) withdrawals.push(mov);
console.log(withdrawals);

const withdrawalfil = movements.filter(mov => mov < 0);
console.log(withdrawalfil);

const withfilnotArr = movements.filter(function(mov){
  return  mov < 0;
})
console.log(withfilnotArr);

// REDUCE() METHOD => all the elements of an array into a single value
// finding globalbalance (sums up)
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
// const balance = movements.reduce(function(acc,cur,i,arr){
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);  //0 is the second parameter , which is the initialize value,(value of the accumulator in the first loop iteration)
// console.log(balance);

// More Simpler
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; 
const balance = movements.reduce((acc,cur) => acc + cur, 0);  //0 is the second parameter , which is the initialize value,(value of the accumulator in the first loop iteration)
console.log(balance);

// for loop
// let balance2 = 0;
// for(const mov of movements) balance2 +=mov;
// console.log(balance2);

// Maximum value of movements array

const max = movements.reduce((acc, mov) => {
  if(acc > mov){
    return acc;
  }
  else {
    return mov;
  }
}, movements[0]);
console.log(max);

// Chaining Methods
// We can only chain a method after another one, if the first one returns an array. 

// const eurToUsd = 1.1;  Above
console.log(movements);

// PIPELINE
const totalDepositUSD = movements
.filter(mov => mov > 0)
.map((mov, i, arr)=> {          // we can inspect the current array at any stage of the pipline using the 3rd parameter of the callback function.
  console.log(arr);
  return mov * eurToUsd;
})
// .map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);


// CHALLENGE - 1  (CHECK PUPPY)

const checkDogs =  function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice(); // shallow copy creation 
  dogsJuliaCorrected.splice(0,1);  //(startIndex(0) deleteCount(1)
  dogsJuliaCorrected.splice(-2);  //since no second arg is given, so removes everyhting from index -2 to the end.
  const dogs = dogsJuliaCorrected.concat(dogsKate);//also done by spread operator
  console.log(dogs);
  dogs.forEach(function(dog, i){
    if(dog >= 3){
      console.log(`Dog number ${i+1}  is an adult, and is ${dog} years old`);
    }
    else{
      console.log(`Dog number ${i+1}  is still a puppy`);
    }
  })
}
// checkDogs([3,5,2,12,7],[4,1,15,8,3]);
checkDogs([9,16,6,8,3],[10,5,6,1,4]);

// CHALLENGE - 2
const calcAverageHumanAge = function(ages){
  const humanAges = ages.map(age => age <= 2 ? 2 * age : 16 + age * 4);
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);

  const average = adults.reduce((acc, age) => acc +age, 0) / adults.length;
  return average;

  // const average = adults.reduce(
  //   (acc,age,i,arr) => acc + age / arr.length, 0
  // );

}
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4]);
console.log(avg1);
console.log(avg2);

// CHALLENGE - 3
// Above Using arrow function and chaining

const calcAverageHumanAge2 = ages => ages.map(age =>(age <=2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce(
     (acc,age,i,arr) => acc + age / arr.length, 0 ); // here length from the 3rd parameter (arr)
    //  .reduce((acc, age) => acc +age, 0) / adults.length; // not possible here because adult.length is not exist anywhere.

const avg21 = calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
const avg22 = calcAverageHumanAge2([16,6,10,5,6,1,4]);
console.log(avg21);
console.log(avg22);

// FIND method
// retrieving one element of an array based on a condition.
// loops over the array
// Unlike filter method it doesn't give an new array instead it will only returns the first element in the array that satisfies  the condition. 
 const firstWithdrawal = movements.find(mov => mov < 0) //accepts a callback function that returns a boolean
 console.log(movements);
 console.log(firstWithdrawal);

//  Diff b/w Filter() and Find() 
// 1) Filter returns a new array, Find only returns the element itself
// 2) Filter returns all the elements that match the condition , Find only returns the first condition.

// FindIndex() 
// returns the index of the found element and not the element itself

// some() and every()
// EQUALITY
 console.log(movements.includes(-130));
// CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposits = movements.some(mov => mov > 0)
console.log(anyDeposits);   //true
// Every()
// returns true if all of the elements in the array satisfy the condition
console.log(movements.every(mov => mov >0));  //false
console.log(account4.movements.every(mov => mov > 0)); //true

// funtion sepration and pass the function as a callback. [Seperate Callback]
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//FLAT & FLATMAP
const flarr = [[1,2,3],[4,5,6],7,8];
console.log(flarr.flat());

const arrDeep = [[[1,2],3],[4,[5,6]],7,8];
console.log(arrDeep.flat()); // It only flatten 1 level 
// we can specify the depth of flattening
console.log(arrDeep.flat(2));

// flatMap
// combines a map and a flat into one method
const overallBalance2 = accounts
.flatMap(acc =>acc.movements)
.reduce((acc,mov)=> acc + mov,0);
console.log(overallBalance2);
// flatMap only go one level deep, we cannot change it.

// CHALLENGE
// 1. Store the the average weight of a "Husky" in a variable "huskyWeight"
// 2. Find the name of the only breed that likes both "running" and "fetch" ("dogBothActivities" variable)
// 3. Create an array "allActivities" of all the activities of all the dog breeds
// 4. Create an array "uniqueActivities" that contains only the unique activities (no activity repetitions). HINT: Use a technique with a special data structure that we studied a few sections ago.
// 5. Many dog breeds like to swim. What other activities do these dogs like? Store all the OTHER activities these breeds like to do, in a unique array called "swimmingAdjacent".
// 6. Do all the breeds have an average weight of 10kg or more? Log to the console whether "true" or "false".
// 7. Are there any breeds that are "active"? "Active" means that the dog has 3 or more activities. Log to the console whether "true" or "false".

// BONUS: What's the average weight of the heaviest breed that likes to fetch? HINT: Use the "Math.max" method along with the ... operator.

const breeds = [
  {
    breed: 'German Shepherd',
    averageWeight: 32,
    activities: ['fetch', 'swimming'],
  },
  {
    breed: 'Dalmatian',
    averageWeight: 24,
    activities: ['running', 'fetch', 'agility'],
  },
  {
    breed: 'Labrador',
    averageWeight: 28,
    activities: ['swimming', 'fetch'],
  },
  {
    breed: 'Beagle',
    averageWeight: 12,
    activities: ['digging', 'fetch'],
  },
  {
    breed: 'Husky',
    averageWeight: 26,
    activities: ['running', 'agility', 'swimming'],
  },
  {
    breed: 'Bulldog',
    averageWeight: 36,
    activities: ['sleeping'],
  },
  {
    breed: 'Poodle',
    averageWeight: 18,
    activities: ['agility', 'fetch'],
  },
];
// 1)
const huskyWeight = breeds.find(breed => breed.breed === "Husky").averageWeight;
console.log(huskyWeight);

// 2)
const dogBothActivities = breeds.find(breed => breed.activities.includes('fetch') && breed.activities.includes('running')).breed;
console.log(dogBothActivities);

// 3)
// const allActivities = breeds.map(breed => breed.activities);
// const allactivities2 = new Set(allActivities.flat());
// console.log(allactivities2);
const allActivities = breeds.flatMap(breed => breed.activities);
console.log(allActivities);

// 4)
const uniqueActivities = [...new Set(allActivities)]; //Now it becomes an array with unique names
console.log(uniqueActivities); //to convert this set into an array use spread operator

// 5)
const swimmingAdjacent = [...new Set(breeds
.filter(breed => breed.activities
.includes('swimming'))
.flatMap(breed => breed.activities)
.filter(activity => activity !== 'swimming')
)];
console.log(swimmingAdjacent);

// 6)
console.log(breeds.every(breed => breed.averageWeight > 10));
// 7)
console.log(breeds.some(breed => breed.activities.length >=3));
// Bonus
const fetchWeight = breeds.filter(breed => breed.activities.includes('fetch'))
.map(breed => breed.averageWeight);
const heaviestFetchBreed = Math.max(...fetchWeight); // here spread operator is used because Math.max does not work on Array.(works for multiple values)

console.log(fetchWeight);
console.log(heaviestFetchBreed);


// Sort() Method
// Strings
const owners = ['Jonas', 'Zach','Adam','Martha'];
console.log(owners.sort());
 // sort =>> mutates the original array

//  Numbers
console.log(movements);
// console.log(movements.sort());
// Sort() does the sorting based on strings i.e,converts everything to strings and sort itself
// Sorting in number can be fixed by passing in a compare callback function into sort().

// return < 0, A, B  KEEP ORDER
// return >0, B,A    SWITCH ORDER
// Ascending
movements.sort((a,b) => {
  if(a > b)
    return 1;
  if(b > a)
    return -1;           // this callbacks until the base case is reached.
});
console.log(movements);

// OR
movements.sort((a,b)=> a-b);
// Descending
movements.sort((a,b) => {
  if(a >b)
    return -1
  if(b > a)
    return 1
}
)
movements.sort((a,b)=> b-a);
// with 2 parameters 1)current value, 2) next value
// Working -; suppose a = 450 and b = -400 , if we return 0 , then the value 'a' will be sorted before value 'b'. and vice versa

// Array Grouping
// Allows to group values in an array based on a condition.
console.log(movements); 
const groupedMovements = Object.groupBy(movements, movement => movement > 0 ? 'deposits': 'withdrawals') ; // 2 arguments -; 1) array we wnat to group , 2) callback function that determines how exactly we want to group the values in the array.
console.log(groupedMovements);

// More Ways of Creating and Filling of Arrays

console.log([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7));

// Non -Destructive(non - mutating) Alternatives
//  TOREVERSED() , TOSORTED() , TOSPLICEDWITH()
const reversedMovements = movements.reverse();
console.log(reversedMovements);
console.log(movements);
//  here the original array is get mutated. 
// to preserve the original array 
// Use toReversed()
const reversednotMutated = movements.toReversed();
console.log(reversednotMutated);
console.log(movements);

// movements[1]  = 200;
// to update a value without mutating the original array
const mewMovemenets = movements.with(1,2000);
console.log(mewMovemenets);

// Array Methods Practice
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov>0).reduce((sum,curr) => sum+curr,0);
console.log(bankDepositSum);

const numDeposits1000 = account.flatMap(acc => acc.movemets).filter(mov => mov > 1000).length

// 3.
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
  // cur > 0 ? sums.deposits += cur : sums.withdrawals +=cur;
  sums[cur >0 ? 'depoits' : 'withdrawals'] += cur;
  return sums;
}, {deposits: 0, withdrawals: 0});
console.log(deposits, withdrawals);

//  this is a nice title => This Is a Nice Title

const convertTitleCase = function (title){
  const captalize = str = str[0].toUpperCase() + str.slice(1);
  const exceptions = ['a','an','the','And','but','or','on','in','with'];

  const titleCase = title.toLowerCase()
  .split(' ')
  .map(word => exceptions.includes(word) ? word : word[0].toUpperCase()+ word.slice(1).join(' '));
  return captalize(titleCase);
};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));


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

const checkEatingokay = dog => 
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
console.log(dogs.every(checkEatingokay));

// 7)
const dogsEatingOkay = dogs.filter(checkEatingokay);
console.log(dogsEatingOkay);
// 8)
const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if(dog.curFood > dog.recFood) {
    return 'too - much'
  }
  else if(dog.curFood < dog.recFood){
    return 'too-little'
  }
  else {
    return 'exact';
  }
});
console.log(dogsGroupedByPortion);

// 9.
const dogsOwnersGroup = Object.groupBy(dogs, dog => `${dog.owners.length} - owners`
);
console.log(dogsOwnersGroup);

// 10.
const dogsSOrted = dogs.toSorted((a,b) => a.recFood - b.recFood)