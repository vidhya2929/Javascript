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

const favourite = prompt("What's your favourite number?");

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

// const favourite = Number(prompt("what's your favourite number?"));
// Different Operator
// if (favourite !== 23) console.log('Why not 23?');

// Challenge 3
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log("Dolphins win the trophy");
}
else if(scoreDolphins === scoreKoalas && scoreDolphins >=100 && scoreKoalas >=100){
  console.log("Both win the trophy");
}
else if(scoreDolphins < scoreKoalas && scoreKoalas >=100){
  console.log("Koalas win the trophy");
}
else{
  console.log('No one wins the trophy')
}
// Statements & Expressions
// something ends with a semicolon and not produce anything is called a statement
// In template strings , we can only insert expressions , but not statements

// Challenge 4

const bill = 275;
const tip =  bill <=300 && bill >=50 ? bill * (50/100) : bill * (20/100);
console.log(`The bill was ${bill}, and the tip was ${tip}, and the total value ${bill + tip}`);

// Brenden Eich =>Mocha (first version of js)
// mocha -> LiveScript -> JavaScript
// Strict Mode
// Special mode that can activate in JS,which helps to write secure JavaScript code.
function logger(){
  //function body
  console.log('My name is Jonas');
}
// calling / running / invoking function
logger();

function fruitProcessor(apples, oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice;
}

const applejuice = fruitProcessor(5, 0);  // the actual values of the parameters are called arguments.(values in the function call/invoke/run)
console.log(applejuice);
console.log(fruitProcessor(5,0));

const appleOrangeJuice = fruitProcessor(2,4);
// function declaration
function calcAge1(birthYear){
 return 2037-birthYear;
}
// can be accessed before initialization

const age1 = calcAge1(1991);
// function Expression
const calcAge2 = function (birthYear){   //// function without name are called  anonymous function
  return 2037 - birthYear;
  const age2 = calcAge2(1991);
  console.log(age1, age2);
  // Cannot be accessed withou initialization
}
// Arrow Function
const calcAge3 = birthYear => 2037-birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsuntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
  console.log(yearsuntilRetirement(1991, 'Jonas'));
  console.log(yearsuntilRetirement(1980, 'Bob'));
}

// Function calling Other Functions
function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges){
  const applepieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applepieces} piece of apples and ${orangePieces} piece of orange.`;
  return juice
}
console.log(fruitProcessor(2,3));

// Challenge 5
const calcAverage = (d1,d2,d3) => (d1 + d2 + d23) / 3;
console.log(calcAverage(3,4,5));

const Dolphinsscore = calcAverage(44,23,71);
const koalas = calcAverage(65,54,49);

const checkWinner = function (avgDolphins, avgKoalas){
  if(avgDolphins >=2 * avgKoalas){
    console.log(`Dolphins won (${avgDolphins} vs.${avgKoalas})`);
  }
  else if(avgKoalas >=2*avgDolphins){
    console.log(`Koalas win (${avgDolphins} vs. ${avgDolphins})`);
  }
  else {
    console.log(`no teams wins...`)
  }
}
checkWinner(scoreDolphins,scoreKoalas);

// Arrays
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends)
// Another way

const years = new Array(1991,1984, 2008, 2020)   // new keyword and Array() function

console.log(friends[0]);
console.log(friends[1]);       // value in the second position
console.log(friends.length);  //length of the array
console.log(friends[friends.length - 1]) // to get last element

friends[2] = 'jay';
console.log(friends);

// Only primitive values are immutable => Array is not a primitive value so we can mutate it [even they are declared with const keyword]
// But we cannot mutate the entire array.
// Basic Array Methods
const buddies = ['michael', 'Steven', 'Peter'];
const newLength = buddies.push('Jay');
console.log(buddies);
console.log(newLength);
buddies.unshift('John');
buddies.pop();
buddies.shift();
buddies.indexOf('Steven');  //return the index at which the element is located
buddies.indexOf("bob");     // if we give an element which is not present then indexOf give -1
console.log(buddies.includes('Steven'));  //returns true
console.log(buddies.includes('Bob'));     //returns false

const calcTip = function(bill){
  return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
}
// const calcTip = bill => bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]),calcTip(bills[2])];
// console.log(bills.tips)
// const totalValues = [bills[0] + tips[0]], bills[1] + tips[1], bills[3]+tips[3]

// Objects => key-value pairs

const jonaas = {
  firstName: "jonas",
  lastName: "Schmedtmann",
  age: 2037-1991,
  job: 'teacher',
  friends: ['Michael', 'Steve', 'Peter']
}
// here this object have 5 key value pairs
// each of the keys are called a property
// Objects are used for more unstructured data
console.log(jonaas);
// 1)dot notation
console.log(jonas.lastName);
// Bracket Notation
console.log(jonas['lastName']);
// const nameKey = 'Name';
// console.log(jonaas['second' +nameKey]);
// console.log(jonaas['first'+nameKey]); //it will fetch first Name
// // console.log(jonas.'last'+nameKey)    not posiible for dot operator
// const intererstedIn = prompt('what do you want to know about Jonas > Choose between firstName, lastName,age,job and friends');
// console.log(intererstedIn); // undefined is what we get when we try to access a property on an object that does not exist
// //give job or any key in the prompt then get answer
// if(jonaas[intererstedIn]){
//   console.log(jonaas[intererstedIn]);
// }
// else{
//   console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
// }

// jonaas.location = 'Portugal';
// jonaas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

console.log(`${jonaas.firstName} has ${jonaas.friends.length} friends, and his best friend is called ${jonaas.friends[0]}`)

const jonass = {
  firstName: 'Jonass',
  lastName: 'Schmedtmann',
  birthYear: 2005,
  job:'teacher',
  friends: ['Michael', 'peter','Steven'],
  hasDriversLicense: true,
  calcAge: function(birthYear){
    this.age = 2052-this.birthYear;
    // console.log(this);
    return this.age;                 // === const calcAge = functio (birthYear){return 2037 - birthYear}
  }
};
console.log(jonas.age);
// Any function that is attached to an object is called a method
console.log(jonass.calcAge(1991));   //based on operator precedence
console.log(jonass['calcAge'](1991));
// In every method js gives us access to a special variable called this
// this keyword/ this variable is equal to the object calling the method. whatever appear before the dot is the object which is calling the method , so 'this' points to jonas 
// 'this'  keyword is also used to store new property on the current object
const jones = {
  firstName: "Jones",
  lastName: "jonas",
  birthYear: 2003,
  job: 'teacher',
  friends: ['moto', 'ramesh','ganesh','xn'],
  hasDriversLicense: true,
  getSummay: function(){
    return `${jones.firstName} is a ${2025- this.birthYear}-year old ${jones.job} and he has  ${this.hasDriversLicense ? 'a':'no'} drivers license.`
  }
} 
console.log(jones.getSummay());


// Challenge 6
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function (){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
const john = {
  fullName: 'John Smith',
  mass: 92,
  height:1.95,
  calcBMI: function(){
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi){
  console.log(`${mark.fullName}'s BMI(${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`);
}
else if(john.bmi > mark.bmi){
  console.log(`${john.fullName}'s BMI(${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`);
}
const types = [];
const jonesArray = [
  'jones',
  'Schmedtmann',
  2037-1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for(let i = 0;i<jonesArray.length; i++){
  // Reading from jonesArray
  console.log(jonesArray[i],typeof jonesArray);

  // one way of filling an array
  types[i] = typeof jonesArray[i];
  // 2nd way
  types.push(typeof jonesArray[i]);
}
console.log(types);

const yes = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < yes.length;i++){
  ages.push(2037 - yes[i]);
}
console.log(ages);
// Continue & break
// Continue =>exit the current iteration of the loop and continue the next one. 
// /break => Completely terminate the whole loop.
console.log("----ONLY STRINGS----")
for(let i = 0; i< jonesArray.length; i++){
  if(typeof jonesArray[i] !== 'string') continue;

  console.log(jonesArray[i], typeof jonesArray[i]);
}
console.log('----BREAK WITH NUMBER---')
for(let i = 0; i < jonesArray.length; i++){
  if(typeof jonesArray[i] ==='number')break;
  console.log(jonesArray[i], typeof jonesArray[i]);
}
// Backward Access
const jone = [
  'jone',
  'schmedt',
  2037-1991,
  'teacher',
  ['michael', 'Peter', 'Steven']
];
for(let i = jone.length-1; i>=0;i--){
  console.log(i,jone[i]);
}
for(let excercise = 1; excercise < 4; excercise++){
  console.log(`---------Starting excercise ${excercise}`);
  for(let rep=1; rep < 6; rep++){
    console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}`);
  }
}

// While Loop
// for(let rep = 1;rep <= 10; rep++){
//   console.log(`Lifting weights repitition ${rep}`);
// }

let rep = 1;
while(rep <=10){
  console.log(`WHILE : Lifting weights repitition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;
console.log(dice);
while(dice !== 6){
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if(dice === 6) console.log('Loop is about to end...')
}
const calcTipp = function(bill){
    return bill >=50 && bill <=300 ? bill * 0.15 : bill * 0.2;
  }
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86,52];
const tips = [];
const totals = [];
for(let i=0; i<bills.length;i++){
  const tip = calcTipp(bills[i]);  
  // reason for using const above is => a new tip variable is created at each iteration.
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills,tips, totals);


const calcAveragee = function(arr){
  let sum = 0;
  for(let i =0; i< arr.length;i++){
    // sum = sum + arr[i];
    sum +=arr[i];
  }
  console.log(sum)
  return sum/ arr.length;
}
console.log(calcAveragee([2,3,7]));
console.log(calcAveragee(totals));

console.log(document.querySelector('.message').textContent);
// manipulating the element
document.querySelector('.message').textContent = 'Correct Number!';// manipulated the textContent
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
// with input field ,to get the actual value, we use the value property
console.log(document.querySelector('.guess').value);
// An event is something that happens on the page

// refactoring =>> restructure the code but without changong how it works
// It is used to improve the code and to avoid duplicate code