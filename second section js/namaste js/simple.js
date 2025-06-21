// At global level 'this' points to window object
// window is a global object created with global execution context
// where ever we run the javascript code there is a global object 
// here browser's global object created is called window

//In the global level or base level 'this'==='window'
/*
whenever we create an execution context a "this" is created along with it even for the functional execution context
At global level 'this' points to 'global object'(window for browser)
*/

/*                            Global Space                      */
var a = 10;                   //here a is in the global space
function b(){                  // b is also in the global space 
    var x = 100;                // but x is not in the global space
}
console.log(window.a);
console.log(a);   // if there is nothing before a it automatically refers to the global space
console.log(x);  // as here nothing is infront of the x it assumes that it is in the global space so it come up with error that it is not defined. 
console.log(this.a); 
