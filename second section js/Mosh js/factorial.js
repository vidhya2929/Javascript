// The factorial of a number is the product of all positive numbers from one to that number
// 0! = 1
// 1! = 1
// 2! = 2*1
export function factorial(n){
  // return 1;
  // secondly
  // if(n === 0 || n === 1) return 1;
  // return 2;
  // thirdly
  // return n * factorial(n-1);
  //4th
  if(n<0) return undefined
  if(n === 0 || n===1) return 1;
  return n * factorial(n-1);
}