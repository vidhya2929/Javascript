const PI = 3.14159;

function getCircumference(radius){
  return 2 * PI * radius;
}
function getArea(radius){
  return PI * radius * radius;
}

function getVolume(radius){
  return 4 * PI * radius * radius;
}

// we should prefix each with export keyword 
export const Pi = 3.14159;

export function getCircumference(radius){
  return 2 * PI * radius;
}
export function getArea(radius){
  return PI * radius * radius;
}

export function getVolume(radius){
  return 4 * PI * radius * radius;
}