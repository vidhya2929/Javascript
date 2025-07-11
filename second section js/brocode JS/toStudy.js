let name = "Hermion";
const age = 21;
let isStudent = true;
console.log(name, age,isStudent);


// Conditional statement
let marks = 85;
if(marks >= 90){
  console.log("Grade A");
}
else if(marks >= 75){
  consolr.log("Grade C");
}

for(let i; i5; i++){
  console.log("Number,")
}

// Loops
let i = 1;
while(i<= 5)
{
  console.log("Count:", i);
  i++;
}
// Normal Function
function greet(name){
  console.log("Hello" + name);
}
greet("Vidhya");
// Arrow Function
const square = (n) => m*n;
console.log(square(5));

// Arrays
let fruits = ["apple","banana","mango"]
fruits.push("orange");
console.log(fruits);

fruits.forEach((fruit) =>{
  console.log("Fruit:",fruit);
});

// Objects
let student = {
  name: "Harry",
  age: 20,
  course:"cs",
  greet: function(){
    console.log("Hi, I am"+ this.name);
  }
};
console.log(student.name);
student.greet();

// simple Calculator
function Calculator(a, b, operator){
  switch(operator){
    case '+': return a+b;
    case '-': return a-b;
    case '*': return a*b;
    case '/': return "Invalid operator";
  }
}
console.log(Calculator(10,5,'+'));

// Callback Function 

function greetUser(name, callback){
  console.log("Hi" + name);
  callback();
}
function sayBYe(){
  console.log("Bye!");
}
greetUser("Harry", sayBYe);

// JS CLasses and Inheritance
class Animal{
  constructor(name){
    this.name = name;
  }
  speak(){
    console.log(`${this.name} barks.`);
  }
}
let dog = new Dog("Tommy");
dog.speak();

// promises

let myPromise = new Promise((resolve,reject)=>{
  let success = true;

  if(success){
    resolve("Task completed!");
  }
  else{
    reject("Task failed");
  }
});
myPromise.then((message)=>("tick", message))
.catch((error) => console.log("cross",error));

// Async/ Await
function delay(ms){
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function showMsg(){
  console.log("Message 1");
  await delay(2000);
  console.log("Message 2 after 2 seconds");
}
showMsg();

// MAP, FILTER, REDUCE

let squares = numbers.map(n => n * n);
console.log("Squares:", squares);

let evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:",evens);

let total = numbers.reduce((sum, n)=> sum+n, 0);
console.log("Sum:", total);

// setTimeout & Callback example
function firstTask(callback){
  setTimeout(()=>{
    console.log("First Task done(after 2s)");
    callback();
  }, 2000)
}
function secondTask(){
  console.log("Second Task Done");
}
firstTask(secondTask);