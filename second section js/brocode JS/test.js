// SORT()= method used to sort elements of an array in place.
//        Sorts elements  as strings in lexicographic order, not alphabetical
//        lexicographic = (alphabet + numbers + symbols) as strings

let vegs = ["carrot", "onion","cucumber","lettuce"];
vegs.sort();

console.log(vegs);

let numb = [1,10,2,9,3,8];
numb.sort();
console.log(numb);
// O/p => [ 1, 10, 2, 3, 8, 9 ] (we are not sorting this array numerically ,it is based on lexicographically...)
// we treating this numbers as strings 
// For sorting numbers -;

let nus = [1,10,2,9,3,8,4,7,5,6];
  //Inside of the sort method we have to write a custom comparison function (this is normally a callback,we can write a functionexpression or even better an arrow function)
nus.sort((a,b) => a-b);    //  function a-b will return either  a negative zero or positive value depending on the values we are examining
// The sort method will sort those values  depending on what value returned is and array get sorted  
console.log(nus);


//  For reverse order
nus.sort((a,b) => b-a);
console.log(nus);

// Obects can be dorted by a given property
const people = [{name: "peter", age: 30, gpa: 3.0},
                {name: "parker",age:25, gpa:1.5},
                {name: "mary", age: 52, gpa:3.0},
                {name: "Jane", age: 62, gpa:4.0}
              ];
              // Sorting based on the age 
people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => a.gpa - b.gpa);
console.log(people);

// if we want to sort by a property that contains a string within an object -;
// There is a formula  =>
people.sort((a,b) => a.name.localeCompare(b.name));
// This statement will examine two strings for lexicographic order 

// SHUFFLE the elements of an array

const cards = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];
shuffle(cards);
/*
cards.sort(() => Math.random() - 0.5);
console.log(cards);
 This method becomes inefficient when the array is large
*/

// Fisher- Yates algorithm
function shuffle(array){
  for(let i = array.length - 1; i>0; i--){
    const random = Math.random() * (i+1)
  }
}
//  
function shuffle(array){
  for(let i = array.length - 1; i < 0;i--){
    const random = Math.random() * (i+1)
  }
}
function shuffle(array){
  for(let i= array.length-1; i < 0; i--){
    const random = Math.random() * (i+1)
  }
}
function shuffle(array){
  for(let i= array.length -1 ; i<0; i--){
    const random = Math.random() * (i+1)
  }
}
function shuffle(array){
  for(let i=array.length -1;i<0;i--){
    const random = Math.random()
  }
}
function shuffle(array){
  for(let i=array.length -1;i<0;i--){
    const random = Math.random()
  }
}
function shuffle(array){
  for(let i=array.length -1;i<0;i--){
    const random = Math.random()
  }
}
function shuffle(array){
  for(let i=array.length -1;i<0;i--){
    const random =Math.random()
  }
}
function shuffle (array){
  for(let i=array.length-1;i<0;i--){
    const random = Math.random();
  }
}
function shu