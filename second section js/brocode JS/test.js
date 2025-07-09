// learn loops,conditionals, &modulo
for (let i = 1; i<=100;i++){
  let output = '';
  if(i % 3 === 0) output +='Fizz';
  if(i % 5 === 0) output += 'Buzz';
  console.log(output || i)
 }
// string manipulation and regular expression
function isPalindrome(str){
  const clean = str.toLowerCase().replace(/[^a-z0-9]/g,'');
  return clean === clean.split('').reverse().join('');
}
console.log(isPalindrome("A man, a plan, a canal, panama"));

// Introduce recursion and base cases

function factorial (n){
  if(n <= 1) return 1;
  return n* factorial(n-1);
}
console.log(factorial(5));

// Random Password Generator
function generatePassword(length){
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';
  let password = '';
  for(let i = 0; i< length;i++){
    password += chars[Math.floor(Math.random() * chars.length)];
  }
  return password;
}
console.log(generatePassword(12));
// Debounce Function
function Debounce(func,delay){
  let  timeout;
  return function(...args){
    clearTimeout(timeout);
    timeout = setTimeout(() => console.log("Debounced!"),1000);
    window.window.addEventListener('resize',log);
  }
}

function memoize(fn){
  const cache = {};
  return function(...args){
    if(key in cache) return cache[key];
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
const  slowAdd = (a,b) =>{
  console.log("Calculating")
  return a + b;
};
const fastAdd = memoize(slowAdd);
console.log(fastAdd(3, 4));
console.log(fastAdd(3,4));

function countVowels(str){
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
console.log(countVowels("Hello World"));

function reverseWords(sentence){
  return sentence.split(' ').reverse().join(' ');
}
console.log(reverseWords("JavaScript is fun"));

function convertTemp(temp, unit){
  if(unit === "C") return (temp * 9/5)+32;
  if(unit === "F") return (temp -32) * 5/9;
}
console.log(convertTemp((100, "C")));
console.log(convertTemp(212, "F"));

function capitalizeWords(sentence){
  return sentence
  .split("")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");
}
console.log(capitalizeWords("js is amazing"));

let count = 0, interval;
function start(){
  if(!interval){
    interval = setInterval(() => {
      count++;
      document.getElementById("output").textContent = count;
    }, 1000);
  }
}

function stop()
{
  clearInterval(interval);
  interval = null;
}
function reset(){
  stop();
  document.getElementById("output").textContent = count;
}
function charFrequency(str){
  const freq = {};
  for(let char of str){
    freq[char] = freq[char] +  1;
  }
  return freq;
}
console.log(charFrequency("banana"));


function removeDuplicates(arr){
  const result = [];
  for(let item of arr){
    if(!result.includes(item)) result.push(item);
  }
  return result;
}
console.log(removeDuplicates([1,2,2,3,4,4,5]));

function largestWord(sentence){
  return sentence.split(' ').reduce((longoest, current)=>
  current.length > longoest.length ? current : longest);
}
console.log(largestWord("JavaScript is super cool"));

function wordCount(str){
  const words = str.toLowerCase().split(/\s+/);
  const count = {};
  for(let word of words){
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}
console.log(wordCount("JS is cool and JS is fun"));

function playGame(player){
  const choices  = ["rock", "paper", "scissors"];
  const computer = choices[Math.floor(Math.random() 
  
  * 3)];
    console.log(`Computer : ${computer}`);
    if (player === computer) return "It's a tie";
    if(
      (player === "rock" && computer === "scissors") ||
      (player === "scissors" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    )
    return "You win!";
  return "You lose!";
}
console.log(playGame("rock"));


function getPrimes(n){
  const primes = [];
  for (let i = 2; i <=n; i++){
    let isPrime = true;
    for(let j = 2; j<= Math.sqrt(i); j++){
      if(i % j === 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime) primes.push(i);
  }
  return primes;
}
console.log(getPrimes(30));

let a = 5, b = 10;
[a,b] = [b,a];
console.log(a,b);


function digitalRoot(n){
  while(n >= 10){
    n = n.toString().split('').reduce((a,b) => a+ +b, 0);
  }
  return n;
}
console.log(digitalRoot(942));

function isPowerOfTwo(n){
  return n > 0 && (n &(n-1)) === 0;
}
console.log(isPowerOfTwo(16));

function getRandomHexColor(){
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}
console.log(getRandomHexColor());

function intersection(arr1,arr2){
  return arr1.filter(item =>arr2.includes(item));
}
console.log(intersection([1,2,3],[2,3,4]));


function findMissing(arr){
  const n = arr.length + 1;
  const expectedSum = (n *(n+1)) /2;
  const actualSum = arr.reduce((a,b) => a+b, 0);
  return expectedSum - actualSum;
}
console.log(findMissing([1,2,3,4]));


function countChars(str){
  return[...str].reduce((acc, char) => {
    acc[char] = acc[char] + 1 || 1;
    return acc;
  }, {});
}
console.log(counterChars("banana"));
