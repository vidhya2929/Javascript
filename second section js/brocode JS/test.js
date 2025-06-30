// RETURNS IN FUNCTIONS
function add(x,y){
  let rsul = x+y;
  return rsul;
}
let answer = add(2,3);
console.log(answer);
//Returning a function  => we can send some data back to the place in which we call a function
// 
// OR
function add(x,y){
  return x+y;
}
console.log(add(2,3));

function subtract(x,y){
  return x-y;
}
console.log(subtract(6,2));
function multiply(x,y){
  return x*y;
}
console.log(multiply(2,8));
function divide(x,y){
  return x/y;
}
console.log(divide(10,2));
function isEven(number){
if(number%2===0){
  return true
}
else{
  return false;
}
}
console.log(isEven(11));
// OR Ternary operator can be used
function isEEven(number){
  return number % 2 === 0 ? true : false
}
console.log(isEEven(24));