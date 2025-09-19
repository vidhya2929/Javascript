'use strict'
// Constructor Functions  => build an object using a function
// The difference from a regular function is that we call a constructor function with the "new" operator
const Person = function(firstName, birthYear){  //arrow function doesn't work as a function constructor as it don't have it's own 'this' keyword.
  // console.log(this);

  // Instance Properties
  // because firstname and birthYear will be available on all the instances that are created through this constructor function.
  this.firstName = firstName;  
  this.birthYear = birthYear
  // // Methods -> but never use this
  // this.calcAge = function (){
  //   console.log(2037 - this.birthYear);
  // }
}
const jonas = new Person('jonas', 1991);
console.log(jonas);
// 4 STEPS happen when we calling a function using 'new' operator
//  1) New {} (empty) object is created
// 2) function is called( the 'this' keyword is set to the newly created object)., this = {}
// 3) (the newly created object) {} is linked to a prototype
// we start to set properties to that object and give them exact same name as the parameters that we are passing in here
// 4) function automatically returns {} from the beginning

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack',1975);
console.log(matilda, jack);
// jonas, matilda,jack are instances of person


const jay = 'jay';
console.log(jonas instanceof Person);

Person.hey = function() {
  console.log('Hey there');
  console.log(this);
};
Person.hey();  //whatever object is calling the method, will be the this keyword inside of that function. 
jonas.hey(); // not possible because it is not a prototype in the jonas object.
// Prototypes (prototypal Inheritance)
// Each and every function in Js automatically has a property called prototype
console.log(Person.prototype);  //This is actually an object
// All the objects that are created through the 'person' constructor function, will get access to all the methods(here calcAge is a method of prototype) and properties that are defined on the prototype property.
Person.prototype.calcAge = function (){
  console.log(2037 - this.birthYear);
}; 
jonas.calcAge(); // here the jonas object inherited the calcAge method from it's prototype. Or it delegated the calcAge functionality to it's prototype
jack.calcAge();
matilda.calcAge();
// this keyword on each of them is always set to the object that is calling the method.

// prototype of jonas =>
  console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);
// Person.prototype is the  prototype of all the objects that are created with the Person constructor function
// built - in method to check if it is a prototype
console.log(Person.prototype.isPrototypeOf(jonas));  // true
console.log(Person.prototype.isPrototypeOf(matilda)); // true
console.log(Person.prototype.isPrototypeOf(Person));  //false
// .prototypeOfLinkedObjects

// step 3) {} is linked to a prototype will create proto object and sets it value to the prototype property


// we can also set properties on the prototype and not just methods

Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species,matilda.species);
// it is not its own property
// own properties are the one that are declared directly on the object itself
// method for checking  whether it has own property
console.log(jonas.hasOwnProperty('firstname')); //true
// console.log(jonas.hasOwnProperty('species'));  false because it is not directly in it
// Prototype Chain => ability of 'jonas'(object) looking up the methods and properties in  a prototype 
// jonas object and it's prototype creates a prototype chain 
// 'prototype' of 'Person.prototype' is 'object.prototype'



console.log(jonas.__proto__); //prototype of the jonas === prototype property of person
console.log(jonas.__proto__.__proto__); // prototype property of object   {object.prototype is the top of the (prototype)scope chain}
console.log(jonas.__proto__.__proto__.__proto__);  //null
// prototype.Person has a constructor property  will point back to the person itself
console.dir(Person.prototype.constructor);

// PROTOTYPE OF ARRAYS

const arr = [3,6,6,5,6,9,5];   // new Array === []
console.log(arr.__proto__);//in this prototype the array contains all it's methods like filter,find etc... All array doesn't contain these methods but it will inherit it from it's prototype
console.log(arr.__proto__ === Array.prototype);

// Adding a new method to the prototype property of the array constructor

Array.prototype.unique = function(){
 return [...new Set(this)]//'this' be the array on which the method will be called , spread operator will convert set into an array
}
console.log(arr.unique()); //Now all arrays can inherit this method


const h1 = document.querySelector('h1'); //All the DOM elements are bts 'Objects'.
console.dir(x => x+1); // function itself also an object so it also has a prototype 

// CHALLENGE
// 1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
// 2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
// 4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

// DATA CAR 1: 'BMW' going at 120 km/h
// DATA CAR 2: 'Mercedes' going at 95 km/h

const Car = function(make,speed){
  this.make = make;
  this.speed = speed;
}

// Prototypal Inheritance
Car.prototype.accelerate = function(){
  this.speed +=10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function(){
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
}
const bmw = new Car('BMW', 120);
const Mercedes = new Car('Mercedes',95);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();

// ES6 Classes

// class Expression
// const PerrsonCl = class{}  //like a function without the argument.classes are type of functions


// class declaration
class PersonCl{
  constructor(firstName, birthYear) {  //constructor is a method of this class
    this.firstName = firstName;
    this.birthYear = birthYear;
    }
    // Methods will be added to the .prototype property
    calcAge() {
      console.log(2037 - this.birthYear)
    }
    greet(){
       console.log(`Hey ${this.firstName}`);
    }
    // All of the methods that we write in the class, outside of the constructor will be on the prototype od the object
    get age(){
      return 2037 - this.birthYear;
    }
    // to get static method only use static keyword
    static hey(){
      console.log(`Hi there`);
      console.log(this);
    }
}
const jessica = new PersonCl ('Jessica', 1996);
// new instance => constructor is gonna called and return new object => stored in jessica 
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);


console.log(jessica.__proto__ === PersonCl.prototype)
// WRITE METHOD INSIDE THE CLASS ,BUT OUTSIDE THE CONSTRUCTOR

PersonCl.prototype.greet = function(){
   
}
jessica.greet();

// // 1. Classes are NOT hoisted,(function declarations are hoisted but not the class declarations)
// 2)classes are also first-class citizens. (pass them into functions and return them from functions);
// 3) Classes are executed in strict mode


// SETTER & GETTER
// Every Object in js can have getter and setter properties =>> accessor properties
// normal properties are called data properties
// getters and setters are functions that get and set a value 
// getters and setters in a simple object literal 

const walter = new PersonCl('Walter White', 1965);
PersonCl.hey(); //here the this keyword points to the entire class.


const account = {
  owner: 'Jonas',
  movements: [200, 530, 120, 300],

  get latest(){    //to transform latest into getter prepend the latest method with get
      return this.movements.slice(-1).pop();
  },
  set latest(mov){  //needs to have exactly 1 parameter
    // can add new movement to the array
    this.movements.push(mov);
    // it is not mandatory to specify setter when we have a getter for the same property
  }
};
console.log(account.latest); //don't call the method instead write as if it was just a property
// if we want to read somrthing as a property, but still need to do some calculations before.

// for a regular function setter be like 
account.latest = 50;
console.log(account.movements);


// Validation

class PersonCl{
  constructor(fullName, birthYear) {  //constructor is a method of this class
    this.fullName = fullName;
    this.birthYear = birthYear;
    }
    // Methods will be added to the .prototype property
    calcAge() {
      console.log(2037 - this.birthYear)
    }
    greet(){
       console.log(`Hey ${this.fullName}`);
    }
    // All of the methods that we write in the class, outside of the constructor will be on the prototype od the object
    get age(){
      return 2037 - this.birthYear;
    }
    // Set a property that already exist
    set fullName(name){
        if(name.includes(' '))  //includes exists in string also
        this._fullName = name;  //if the setter property already ,exist. to avoid naming conflict and also here we are creating naming variable 
        else alert(`${name} is not a full name!`)
        // we cannot get jessica.fullName so we use getter for fullName property
    }

    get fullName(){
      return this._fullName
    }
}
// const jessica = new PersonCl ('Jessica Davis', 1996);
// // new instance => constructor is gonna called and return new object => stored in jessica 
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);

// Static Methods

// Array.from() is attached to the Array Constructor not to the prototype
// All the arrays do not inherit this method
// Numbers.parseFloat is another static method on the number constructor


//3) OBJECT.CREATE()
// diff than constructor functions and classes work

const PersonProto = {
  calcAge(){
    console.log(2037 - this.birthYear);
  },
}

// 
// Real inheritance between classes
// 1) Using constructor functions
const Person = function(firstname, birthYear){
  this.firstName = this.firstName;
  this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
}


const student = function(firstname, birthYear, course){
  // this.firstname = firstname;
  // this.birthYear = birthYear;
  // Instead Use
  Person.call(this,firstname,birthYear)   // In a regular function the 'this keyword is set to undefined

  this.course = course;
};
student.prototype = Object.create(Person.prototype)

student.prototype.introduce = function() {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
}
const mike = new student('Mike',2005,'Computer Science')
// console.log(mike);
mike.introduce();
// 
