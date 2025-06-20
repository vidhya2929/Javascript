const val1 = 5;
const val2 = 5;
console.log("Integer",val1 === val2);

const val3 = "Code Malayalam";
const val4 = "Code Malayalam";
console.log("string", val3 === val4);

const val5 = ["code", "Malayalam"];
const val6 = ["code", "Malayalam"];
console.log("Array",val5 === val6);

const val7 = { name: "Code Malayalam"};
const val8 = { name: "Code Malayalam"};
console.log("Object", val7 === val8); 
// primitive DataTypes -> it is not an object and has no methods 
// All primitives are immutable
/*
.string
.number
.bignit
.boolean
.undefined
.symbol
.null
*/
//Non-Primitive DataTypes
/*
.Object
.Array
.Map
.Function
*/
//Equality acts diffferent for primitive and non-primitive
 