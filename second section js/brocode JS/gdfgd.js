// Even or Odd
function checkeven(){
  const num = document.getElementById("num").ariaValueMax;
  const result = (num % 2 === 0) ? "Even " : "Odd";
  document.getElementById("result").innerText =  `Result: ${result}`;
}

// factorial of a number
function factorial(){
  let n = parseInt(document.getElementById("factNum").value);
  let result = 1;
  for(let i = 1;i <= n; i++){
    result = result * i;
  }
  document.getElementsById("factResult").innerText = `Factorial: ${result}`;
}

// palindrome Checker
function isPalindrome(){
  let str = document.getElementById("text").value;
  let reversed = str.split('').reverse().join('');
  let result = (str === reversed) ? "Palindrome" : "Not Palindrome";
  document.getElementById("PalindromeResult").innerText = result;
}

// reverse an array

const arr = [1,2,3,4,5];
const reversed = arr.reverse();
console.log("Reversed array:", reversed);
// vowels in string
function countvowels(){
  let text = document.getElementById("vowelText").value.toLowerCase();
  let count = 0;
  for (let char of text){
    if("aeiou".includes(char)){
      count++;
    }
  }
  document.getElementById("vowelCount").innerText = "Vowel count: "+count;
}
// prime Number
function checkprime(){
  let num = parseInt(document.getElementById("primeNum").value);
  let isprime = num > 1;
   
  for(let i =2; i <= Math.sqrt(num); i++){
    if(num % i === 0){
      isprime = false;
      break;
    }
  }
  document.getElementById("primeResult").innerText = isPrime ? "It is Prime" : "Not Prime";
}

// find the longest word in a sentence
function longestword(){
  let sentence = document.getElementById("sentence").value;
  let words = sentence.split(" ");
  let longest = "";

  for(let word of words){
    if(word.length > longest.length){
      longest = word;
    }
  }
  document.getElementById("longestResult").innerText = "Longrst word:" + longest;
}
function findGCD(){
  let a = parseInt(document.getElementById("n1").value);
  let b = parseInt(document.getElementById("gcdResult").innerText = "GCD: "+a)
}
// LCM 
function findLCM(){
  let a = parseInt(document.getElementById("lcm1").value);
  let b = parseInt(document.getElementById("lcm2").value);
  let max = a > b ? a: b;
  while(true){
    if(max % a ===0 && max % b === 0){
      document.getElementById("lcmResult").innerText = "LCM: " +max;
      break;

   }
   max++;
  }
}
// Leap Year
function checkLeap(){
  let y = parseInt(document.getElementById("year").value);
  let isLeap = (y % 4 === 0 &&  y % 100 !==0) || (y% 400 === 0);
  document.getElementById("leapResult").innerText = isLeap ? "Leap Year": "Not a leap year"
}
// multiplication Table Generator
function printTable(){
  let num = parsseInt(document.getElementById("tableNum").value);
  let output = ""
  for(let i = 1; i <=10;i++)
    output +=`${num} * ${i} = ${num * i}\n`;
}
document.getElementsById("tableResult").innerText = output;

// Decimal to binary Converter
function convertToBinary(){
  let num = parseInt(document.getElementById("binaryResult").innerText) = "Binary: "+ convertToBinary;
}
// FIbanocci Series up to N Terms
function fibanocci(){
  let n = parseInt(document.getElementById("fibCount").value);
  let a=0, b=1, result = "";

  for(let i = 0; i < n;i++){
    result += a + " ";
    let temp = a + b;
    a = b;
    b = temp;
  }
  document.getElementById("fibResult").innerText = result;
}

// ArmStrong Number Checker

function checkArmstrong(){
  let num = parseInt(document.getElementById("armNum").value);
  let sum = 0;
  let temp = num;

  while (temp > 0){
    let digit = temp % 10;
    sum += digit ** 3;
    temp = Math.floor(temp/10);
  }
  document.getElementById("armResult").innerText = 
  sum === num ? "Armstrong Number": "Not Armstrong";
}
// perfect Number
function checkPerfect(){
  let num = parseInt(document.getElementById("perfectNum").value);
  let sum = 0;
  for (let i = 1; i < num ; i++){
    if(num % i === 0){
      sum += 1;
    }
  }
document.getElementById("perfevtResult").innerText =
(sum === num) ? "perfect Number" : "Not Perfect";
}
 function power(){
  let a = parseInt(document.getElementById("base").value);
  let n = parseInt(document.getElementById("exp").value);
  let result = Math.pow(a,n);
  document.getElementById("powerResult"),innerText = `${a} ^${n} = ${result}`;
 }

 function squareRoot(){
  let num = parseFloat(document.getElementById("sqrtnum").value);
  let root = Math.sqrt(num).toFixed(3);
  document.getElementById("sqrtResult").innerText = "Square Root: "+root
 }

 function convertTemp(){
  let t = parseFloat(document.getElementById("temp").value);
  let unit = document.getElementById("unit").value;
  let result = 0;

  if(unit === "C"){
    result = (t * 9/5) + 32;
  }
  else{
    result = (t- 32)* 5/9;
  }
  document.getElementById("tempResult"),innerText = 
  "Converted Temp : " + result.toFixed(2);
 }

// Array logic programs
const arrr = [4,7,1,9,3];
let max = arr[0];
let min = arr[0];

for(let i = 1; i < arr.length; i++){
  if(arrr[i] > max) max = arrr[i];
  if(arrr[i] < min) min = arrr[i];
}
console.log("Max:",max);
console.log("Min:",min);

// reverse an array
const arrn = [10,20,30,40];
const revesed = [];
for(let i = arrn.length-1; i >= 0;i--){
  reversed.push(arrn[i]);
}
console.log("Reversed:", revesed);

// sum of array elements
const ar = [5,10,15];
let sum = 0;
for(let i = 0; i< ar.length; i++){
  sum +=ar[i];
}
console.log("Sum :",sum);

// Check if array is sorted
const dd = [1,2,3,4];
let sorted = true;

for(let i =1; i < arr.length; i++){
  if(arr[i] < arr [i -1]){
    sorted = false;
    break;
  }
}
console.log("sorted", sorted);
// find second largest number
const qq = [10,40,20,30];
let first = -Infifnity, second = -Infinity;
 
for(let num of qq){
  if(num > first){
    second = first;
    first = num;
  }
  else if(num > second && num < first){
    second = num;
  }
}
console.log("second Largest:", second);


// merge 2 sort 
const a = [5,3,1];
const b = [6,4,2];
const merged = [...a, ...b].sort((x,y) => x -y);
console.log("Merged & Sorted :");

const rr = [0,1,false,2,"",3,null];
const  filtered = arr.filter(Boolean);
console.log("");

