//NPM => Node Package Manager
// It is a software and a package repository
// when there is no npm we used to include external libraries into our HTML using the script tag
// /to check if npm exist  run 'npm -v' in terminal (to check version)
// In any project to start with npm we need to initialize it -;
// Run 'npm init' to create a package.json file.


// Leaflet library using npm

// npm install [name of the package]
// or
// npm i leaflet

// dependencies become leflet in package.json &
// includes a node modules 
// the more packages we install it will get stored into the node modules folder.

// A module bundler is required to use the library(leaflet) because the library uses a common JS module system.
// Use lodash -es which is not uses a common js module system
// use cloneDeep to import 
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
const state = {
  cart: [   // cart is an array , which contains some object
    {product: 'bread', quantity: 5},
    {product: 'pizza', quantity: 5}
  ],
  user: {loggedIn: true},  //deeply nested Object
};
// copy it using JS
const stateClone = Object.assign({}, state);  //Object.Assign to create a copy of an object, here we create an empty object and merge with the state.
const stateDeepClone = cloneDeep(state);
// If make change 
state.user.loggedIn = false; 
console.log(stateClone);  //false (original and new)
console.log(stateDeepClone);  // It  will still give true even if we changed the original object
// manually creating a deep clone, deep copy that is tough
// So we can use deepClone from lodash 