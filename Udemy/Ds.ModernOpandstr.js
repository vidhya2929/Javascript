// Destructring ARRAYS
// es6 feature
// unpacking values from an array/onjects into seperate variables.
'ues strict';


const arr = [2,3,4];
const a = arr[0];
const b = arr[1];   //retrieving without destructuring

const [x,y,z] = arr; //destructuring
console.log(x,y,z); //original array is not affected

const restaurant = {
  name: 'Classico Italiano',
  location: 'Voa amgelo Tavanti 23, Firennze, Italy',
  Categories: ['Italian', 'Pizzeria','vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'BrusChetta', 'GarlicBread'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close:22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function(starterIndex, mainIndex){
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function({starterIndex =1, mainIndex=0, time, address}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
  }
};
// 
restaurant.orderDelivery({
  time: '22:30',
  address:'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2 
});

let[first, ,second] = restaurant.Categories;
console.log(first, second);
// Switching variables

[first, second]=[second, first];
console.log(first, second);

restaurant.order(2,0)
// Receiving 2 return values from a function
const[starter, mainCourse] = restaurant.order(2,0);
console.log(starter, mainCourse);
// Nested Destructuring
const nested = [2,4,[5,6]];
// const[i, , j] = nested
// console.log(i, j);  //2,[5,6]
// to get individual values from it ; destructuring inside destructuring
const[i, ,[j,k]] = nested;

// default Values
//const[p,q,r]=[8,9]; //r becomes undefined
const [p,q=1,r=1] = [8,9]; // r becomes 1

// Destructuring OBJECTS => use {}
const {name,openingHours, Categories} = restaurant;
console.log(name, openingHours, Categories);

// to make variable names different from property name

const{name: restaurantName, openingHours: hours,Categories: tags} = restaurant;
console.log(restaurantName, hours, tags);

// restaurant.menu //undefined
const {menu = [], starterMenu: starters = []} =restaurant;
console.log(menu, starters); //give default value for menu which is not in the object
// default is useful when there is no hardcoded values like this.

// Mutating variables while destructuring objects.
// let v = 111;
// let m = 999;
// const object = {v: 23, m: 7, r:14}
// ({v,m} = object);
// console.log(v,m);

// Nested Objects
const {fri} = openingHours;
console.log(fri);
// we want to further destructure 'fri'
const{fri: {open: o, close: c}} = openingHours;
console.log(o, c);

// Spread Operator
// unpacking all the elements at once
const arra = [7,8,9];
const badNewArr = [1,2,arra[0],arra[1],arra[2]];
console.log(badNewArr);//it can be done by using spread operator

const newArra = [1,2, ...arra];
console.log(newArra);

console.log(...newArra);  // whenever we need an elements of array individually, then we can use the spread operator 

const newMwenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMwenu);
// here we  are creating a new array , not manipulating the existing array

// Spread vs destructuring-;
// Spread-;takes all the elements from the array and it doesn't create new variables.

// Usecases of spread operator -; 1.shallow copies of arrays , 2.merge 2 arrays together
// copy array
const mainMenuCopy = [...restaurant.mainMenu];
// Join 2 arrays 
const menuu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menuu);

// Iterables: arrays, strings, maps,sets. Not objects
// Spread Operator on strings
const str = 'jones';
const letters = [...str, '', 'S.'];
console.log(letters);
// we can't use the spread operator to build a template literal
// console.log(`${...str} Schmedtmann`);
//only expects multiple values 1.when pass arguments into functions or 2.when we build new array


// Rest Operator => syntatically similar to spread operator
// collect multiple elements and condense them into an array
// Spread => unpack the elements of an array[Right side of the '='], Rest => pack the elmenets into an array

// REST , because on the left side of the '='
const [f,g,...others] = [1,2,3,4,5];
// 