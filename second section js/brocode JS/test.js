// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions... and more 
//              Introduced as part of ECMAScript 2015 update
// Example


// to import a module we have to make script type ="module" in html
console.log(Pi);
import {Pi, getCircumference, getArea, getVolume} from './mathUtil.js';

const circumference = getCircumference