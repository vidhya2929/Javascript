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
// pack the elements into an array

// Short  Circuiting (&& and ||)
// OR  
console.log('-------OR---------');
// (Use ANY data type, return ANY data type)
console.log(3 || 'Jonas'); //3  because, in the case of OR operator the short-circuiting means if the first value is a truthy value, it will immediately returns that first value. (2nd value is not even get evaluated)
console.log('' || 'Jonas'); // Jonas as '' is a false value.
console.log(true || 0);  // true as 0 is a falsy value
console.log(undefined || null);  //null
console.log(undefined || 0 || '' || 'Hello' || 23 || null);  //Hello

// ternary and its short circuiting with || (Practical Example)
restaurant.numGuests = 23;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
// OR
const guest2 = restaurant.numGuests || 10 ;
console.log(guest2);

// AND Operator short Circuiting => Opposite of OR operator
console.log('--------AND--------');
console.log(0 && 'Jonas');  // 0  // && operator short circuits when the first value is falsy
console.log(7 && 'Jonas'); // 'jonas' // continues when it is truthy and log last value
console.log('Hello' && 23 && null && 'jonas'); // null

// Practical Example
if(restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms' , 'spinach')
}
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');
// Nullish Coalescing Operator(??)
restaurant.NumGuests = 0;
// Nullish values are null and undefined
const guestCorrect = restaurant.NumGuests ?? 10;
console.log(guestCorrect);  // 0  because 0 is a nullish value , first non-nullish value is only returned

const rest1 = {
  name: 'Capri',
  numGuests: 20,
};
const rest2 = {
  name: 'La Piazza',
  Owner: 'Giovanni Rossi',
  numGuests: 0
};
rest1.numGuests = rest1.numGuests || 10;
rest1.numGuests ||= 10;

rest2.numGuests ??= 10;

// CHALLENGE
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1; //one goalkeeper and remiaing so we used rest operator here

const allPlayers = [...players1, ...players2]; //all players so we used spread operator
// player1 with 3 other players
const players1Final= [...players1, 'Thiago','Coutino','Periscic'];
const{odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

const printGoals = function(){

}

// for......of 
const manu = [...restaurant.starterMenu,...restaurant.mainMenu]
for(const item of manu) console.log(item);
// to get each item as an array with array number use entries
for(const item of manu.entries()){
  console.log();
}

for (const [i, el] of menu.entries()){
  console.log(`${i + 1}: ${el}`);
}


// OPTIONAL CHAINING( ?. )
if(restaurant.openingHours && restaurant.openingHours.mon?.open); // only if monday exists(not null or not undefined), then the open property will be read from there, if not then immediately undefined will be returned.
// If a certain property is nor existing then undefined is returned immediately

// Practical Example
const days = ['mon','tue','wed','thu','fri', 'sat', 'sun'];
for(const day of days){
  console.log(day);
  restaurant.openingHours[day] ?.open || 'closed'
  console.log(`On ${day}, we open at ${open}`);
  // to use variable name as a property name, then use square bracket
}
// property NAMES =>> Object.keys()
// property VALUES =>> Object.values()

// entries on objects
Object.entries(openingHours);
console.log(entries);


// To avoid duplicates use 'Set()'
const orderSet = new Set([
'Pasta',
'Pizza',
'Pizza',
'Risotto',
'Pasta',
'pizza'
]);
console.log(orderSet);
// Order of elements in the sets are irrelevant.
console.log(orderSet.size);   // to get the size of the array.
console.log(orderSet.has('Pizza'));  //similar to includes method in arrays. returns true or false...
orderSet.add('garlic Bread');
orderSet.add('garlic Bread');  // only one is added as it is set.
orderSet.delete('Risotto');   //delete  particular item
orderSet.clear();  //clears the set completely(delete all the elements)
// Sets are also iterables
for(const order of orderSet) console.log(order) //looping is possible like any other iterables

// 
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager','Chef', 'Waiter'];
const staffUnique = [...new Set(staff)]; //here using spread operator converted the set into an array.
console.log(staff);


const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ',commonFoods);
console.log([...commonFoods]);  // converting set to array.

const fusion = italianFoods.union(mexicanFoods);
console.log('Union: ', fusion);
console.log([...fusion]);
console.log([...new Set([...italianFoods, ...mexicanFoods])]);

const uniquefoods = italianFoods.difference(mexicanFoods);
console.log('Difference italian', uniquefoods);

const uniquemexicanItalian = italianFoods.symmetricDifference(mexicanFoods);    // just opposite of intersection.
console.log(uniquemexicanItalian);
console.log(italianFoods.isDisjointFrom(mexicanFoods));


// map => ds that used to map values to keys
// key can be any type unlike objects
const rest = new Map();
rest.set('name', 'Classico Italiano');  //here the 'set' method is similar to 'add' method in sets
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));  //not only calls the set methood but also returns the map.

rest.set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']).set('Open', 11).set('close', 23).set(true, 'We are open :)').set('false','We are closed :(')
// Read data from the map
// Use Get Method
console.log(rest.get('name'));
const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));