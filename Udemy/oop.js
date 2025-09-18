//  OOP => programming paradigm based on the concepts of objects
// we use object to model(describe) real-world or abstract features

// Objects contain data and code (properties and methods)
// objects are self-contained pieces/blocks of code
// In OOP => objects are self contained pieces/blocks of code

// Objects are building blocks of applications, and interact with one another.

// Interactions happen through public interface(API)
// Class => blueprint from which we can create new objects 
// 4 principles of building a class
// 1)Abstraction      ==> Ignoring or hiding details that don't matter (gives an overview)
// 2)Encapsulation    ==> Keeping some properties and methods private inside the class
// 3)Inheritance     ==> making all properties and methods of a certain class available to a child class(child class extends parent class), reuse common logic
// 4)Polymorphism   ==> Achild class can overwrite a method it inherited from a parent class

// OOP in JS
// Objects(instances) are instantiated from a class.
// Prototypes  ==> Objects are linked to a prototype object
// Prototypal inheritance/ delegation: The prototype contains methods that are accessible to all objects linked to that prototype (Instance inherting from a class)

// 3 ways of implementing prototypal inheritance in JS
// 1) Constructor functions
//      create objects from a function
//      This is how built-in- objects like Arrays, Maps, or Sets are actually implemented
// 2) ES6 Classes
//      Modern alternative to constructor function syntax
//     ES6 classes work exactly like constructor functions
// 3)Object.create()

// Constructor Functions and the NEW opweator

const Person = function(firstName, birthYear){
this.firstName = firstName;
this.birthYear = birthYear;
}
const jonass =new Person('jonas', 1996);
console.log(jonass);

// instanceof   => to check if it is an instance
// isPrototypeOf => to check if it is a prototype
