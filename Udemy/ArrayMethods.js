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

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];   //Above declared so commented
const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd;
});
console.log(movements);
console.log(movementsUSD);

// FOR.....OF
const movementsUSDfor = [];
for(const mov of movements){
  movementsUSDfor.push(mov * eurToUsd);
}
console.log(movementsUSDfor);
// 