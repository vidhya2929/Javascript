export function max(a,b){
  if (a>b) return a;
  else if (b > a) return b;
  return a;
}
// refactoring 
export function max(a,b){
  return (a>b) ? a:b;
}

// 
export function fizzBuzz(n){
  if( n% 3 === 0 && n % 5 === 0) return 'fizzBuzz';
  if(n % 3 === 0) return 'Fizz';
  if (n % 5 === 0)return 'Buzz';
  return n.toString();
}

export function calculateAverage(numbers){
  // secondly
  // if(numbers.length === 0) return NaN;
  // return numbers[0];
  // thirdly
  if(numbers.length === 0) return NaN;


  const sum = numbers.reduce((sum, current)=> sum + current,0)//initialize it to zero
  return sum / numbers.length;
}