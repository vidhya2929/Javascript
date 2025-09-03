// type Conversion
const inputYear ="1991";
console.log(Number(inputYear) +18);
console.log(String(23), 23);
// Invalid number => NaN(Not a Number)
// type Coercion => used when 2 values having different datatypes.
console.log('I am ' + 23 + 'years old')
// + opertor triggers a coercion to strings.when there is an operation between a string  and a number, the number is converted into a string.
let n = '1' + 1;   // '1'+'1' = 11
n = n-1;    // 11 - 1
console.log(n); //10

// Strings and Template Literals
const firstname = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037
const jonas ="I'm " +firstname+', a '+ (year-birthYear) + ' years old' + job + '!';
console.log(jonas);
// template literal 
const jonasNew = `I' m ${firstname}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew)
console.log('String  with \n\
  multiple \n\
  lines');

  console.log(`String 
    multple 
    line`);

  // let, const, var
  // let and const are in modern javaScript
  // var is old way of declaring variables

  let age = 30;   //let can be reassigned , block-scoped
  age = 31;
  // 'let' is also used to declare empty variables
  let month;
  month = "January";
  // const is used for non-mutating and needs an initial value
  const birth = 2005;
// try to use const as much as possible
// var   => function-scoped
var jobb = 'programmer';
jobb = 'teacher'      //reassinable

// operator Precedence
// ()*/+- =>higher precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018)
let x, y;
x = y = 25-10-5
console.log(x,y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);
// Challenge 1
const massMark = 78;
const heightMark = 1.69

const massJohn = 92;
const heightJohn = 95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn)
let markHigherBMI = 
BMIMark > BMIJohn ? "BMIMark" : "BMIJohn";
// Truthy and Falsy
// 5 falsy values: 0, '', undefined, null, NaN
// all these above becomes false when we try to convert it to boolean.they are not false initially ,but they will become when converted to a boolean.
// Everything else are called Truthy values
console.log(Boolean(0));           //false
console.log(Boolean(undefined));   //false
console.log(Boolean('jonas'));     //true
console.log(Boolean({}));          //true
console.log(Boolean(''))          //false


const money = 0;         //here it becomes false so else will run
if(money){
  console.log("Don't spend it all");
}
else{
  console.log("You should get a job!");
}

let height;  //as we didn't assign any value height is undefined so it becomes falsy value
if(height){
  console.log("YAY! Height is defined");
}
else{
  console.log("Height is Undefined")
}
// Equality Operators
const aege = 18;
if(aege === 18) console.log("You just became an adult"); //as here is only one sentence we can avoid curly bracket.
//   = ->Asignment operator
//  === ->comparison operator  (strict, (does not perform type coercion),returns true when both values are exactly same)
//   == -> loose equality operator does type coercion

// eg: "18" == 18 //true because double equal does type coercion
//  "18" === 18  //false because triple equal does not perform type coercion.

// Getting a value from a webpage  => prompt()

// const favourite = prompt("What's your favourite number?");

console.log(favourite);
// prompt always return a string

if(favourite === 23) {
  console.log('Cool! 23 is an amazing number!')
}
else if(favourite === 7){
  console.log('7 is also a cool number')
}
else{
  console.log('Number is not 7 or 23')
}
// here favourite is a prompt so it returns a string so here we get false "23" === 23
// we can use Number function to convert the string from prompt to a number

const favourite = Number(prompt("what's your favourite number?"));
// Different Operator
if (favourite !== 23) console.log('Why not 23?');
// 