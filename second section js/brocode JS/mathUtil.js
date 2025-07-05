const PI = 3.14159;

function getCircumference(radius){
  return 2 * PI * radius;
}
function getArea(radius){
  return PI * radius *radius;
}
function getVolume(radius){
   return 4 / 3 * PI * radius* radius * radius;
}
// we can use these variables and functions for any js program and can import them
// To import it we should prefix  each bariable function or class or anything with export keyword
export const Pi = 3.14159;

export function getCircumference(radius){
  return 2 * radius * radius;
}
export function getArea(radius){
  return PI * radius * radius;
}
export function getVolume(radius){
  return 4 /3 * PI * radius * radius *radius;
}
