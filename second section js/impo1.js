import { addArray } from "./impo.js";  
import { addArray as concatArray } from "./impo2.js";          /*        './' means impo.js and impo1.js are in th e same directory. dot means current directory     */   // ../util/script1.js
const value = addArray([1,2,3]);    //This addArray get confused to call  as we declared addArray 2 times
const value2 = concatArray([1,2,3], [4,5,6]);
console.log(value);
console.log(value2); 
//To avoid the naming conflict we can rename function using "as".