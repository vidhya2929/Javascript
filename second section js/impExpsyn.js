import { addAll,findMax, libraryName } from "./expimp.js"; 
// use with addAll name
const val = addAll([1,2,3]);
const max = findMax([22,12,67,4]);
console.log(val);
console.log(max);

// 2)
import{
    addAll,
    findMax,
    libraryName                   //use name which is updated
}from './lib.js';

console.log(libraryName);

// Default import
// default import doesn't need curly brace.
// it can be import using any name
//To get all  use '*'
//eg:
import anyname from './expimp.js';
const maxi = anyname(22,12,67,4);
console.log(Name);
  //anonymous functions can be get through this
 
  //  how to import named and default exports together
import myPrint, {
    addAll,
    findMax
} from './expimp.js';

import * as libObj from './expimp.js';
    console.log(libObj);

const maxu = libObj.findMax([1,4,2]);
console.log(maxu);

// an imported item can be exported syntax
// import can be done from many files
// after 'from' in import statement is not a string eg:
//var a ='./expimp.js'
//import * as libObj from a ;                    is not possible
