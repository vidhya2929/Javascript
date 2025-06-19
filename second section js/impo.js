// console.log("Impo");

// function addArray(arr){
//     return arr.reduce((total, item) => total+item, 0);

// }
// const value = addArray([3,5,5]);
// console.log(value);



//reduce takes an array → runs a function for each item → combines everything into one final result
// here fn addArray is global scope - it can be overriden by others

//Using IMPORT
// BY making 3 files into modules can solve the issue of global scope 
// To make a script file module give 'script type = module' inside the html.After that 3 files become independent and only '1' module can access the function, so to make access for every module js use import & export keywords.

//export

console.log("Impo");
export function addArray(arr){
    return arr.reduce((total, item) => total + item,0);
}

//import, export different syntaxes
