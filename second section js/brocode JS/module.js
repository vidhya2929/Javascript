import {PI,getCircumference,getArea,getvoulme} from './mathUtil.js';                                          //object destructuring
console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);

console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}`);
