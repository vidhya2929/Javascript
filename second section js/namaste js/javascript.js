// Everything in JavaScript happens inside an "Execution Context"
// Execution Context has 2 components 
// 1) Memory Component also called as (Variable Environment)
//  In which the elements are stored as key:value pair 
//   a:10
//   fn:{... }
// 2) code Component also called (Thread of Execution)
// this is the place where the code get executed one line at a time
// JavaScript is a synchronous, single-threaded language
//                   |                     |
//                   |           js can only execute 1 line at a time
//                 In a specific order

 var n = 2;                   //it allocates memory to n and stores a special value 'undefined'
 function square(num){        // it allocates a memory to square and the whole code of the function inside the memory space
    var ans = num*num;
    return ans;
 }
 var square2 = square(n);
 var square4 = square(4);
 // After running this code a global execution context is created with 2 componenets

// Execution phase is created in 2 phases

// 1)Creation  phase or Memory creation phase
/*we where allocate the memory to all the variables and functions inside the global space*/
// store undefined for square2 and square 4

// 2)Code execution phase
// javascript once again run line by line and executes the code
// At this phase as it encounter the first line n stores 2
// at this phase it does'nt have anything to do on function.so move to var sqaure2  and invoke the function
// function name and round brackets represent function invokation
// whenever we execute a function a new execution context is created asusual with 2 components.
// return states that pass the whole control to where the function invoked

// when the whole function is executed the execution context for that instance will be deleted.

// when the program execution completed,the whole execution context get ddeleted

//JavaScript manages a stack
//Call Stack -;Bottom of the stack contains the global execution context
//manage the execution context.
// after the whole get executed the call stack get empty
// whenever any javascript is run the whole stack is populated with the global execution context

// call stack maintains the order of execution of execution contexts

// call stack is also know by -;
/*
.Execution context stack
.program stack
.control stack
.Runtime stack
.Machine stack
*/
var x = 7;
function getName(){
    console.log("Namaste javascript");
}

getName();                           
console.log(x);
console.log(getName);
// when it is executed the execution context will be popped from the call stack.
//The global execution context has created and put it in the call stack.

//         HOISTING
// it is a phenomenon in java script in which it access the variabels and functions even before initializing it

var x=7;
 
function getName(){
    console.log("Namaste Javascript");
}

getName();
console.log(x);
console.log(getName);



getName();
console.log(x);
console.log(getName);

var x = 7;

function getName(){
    console.log("Namaste JavaScript");
}

// difference between not defined and undefined

// there is no value for x in the memory then it returns not defined

//suppose we have getName as the arrow function

getName();
console.log(x);
console.log(getName);

var x = 7;
// Case 1
function getName2 (){                         // it behave like a function

}
// case 2
var getName3 = function(){                     // it behave like a variable

}

// Case 3
var getname = ()=>{                             //it behave just like a variable not a function
    console.log("Namaste Javascript");
}


// In the proper function syntax, it will copy the whole function
function getName(){

} 


//FUNCTION INVOKATION & VARIABLE ENVIRONMENT
var x = 1;
a();
b();
console.log(x)
function a(){
    var x = 10;
    console.log(x);
}
function b(){
    var x = 100;
    console.log(x);            // finds the value of x from the local memory and print it in the console.
}
// how function invokation behaves
//In the first phase inside the memory, x get undefined ,a and b get function code .
//When the function get invoked a new execution context is created,and it get pushed to the call stack.
// after the execution of function a ,it will be vanished.
// now it get back to line 2 and invoke b()
// after completing the execution fully,the global execution context is also popped from the call stack.
//Call Stack all these global execution context are kept.


//  Undefined vs Not defined
console.log(a);
var a =  7;

console.log(x)   // herre is what not defined, x is not defined here...
// form the place where the javascript engine allocated "undefined"
//undefined is taking memory not like 'not defined' (it is a placeholder)

var a;
console.log(a);                       // O/p -; undefined
a =10;
if(a === undefined){
    console.log("a is undefined");
}
else{
    console.log("a is not undefined");
}
//Javascript is a loosely typed language ,i.e it does not attaches its variables to any specific datatype.
//we can put  any datatype together
var a;
console.log(a);
a=10;
console.log(a);
a = "hello world";
console.log(a);
// Loosely typed language is also known as weekly typed language(which is not weak actually)

// *a = undefined               // don't do this
//undefined is a keyword in javascript

// Scope and javascript are directly related to Lexical Environment
//scope,scope chain,closure
function a(){
    console.log(b);      //when reaches here it will look for 'b' in the local scope 
    function c (){
    }
}
var b= 2;
a();
// O/P -; 10
// That is somehow b can access the value outside the function. 
function a(){
    function c(){
        console.log(b);
    }
}
var b = 2;
a();

function a(){
    c();
    function c(){
        console.log(b);
    }
}
var b = 10;
a();  
//scope means where you can access a specific variable or function inside our code.
// consider a program
function a(){                              // a is lexically inside the global scope
    var b = 10;
    c();
    function c(){                         // c 's function is lexically sitting inside the function a

    }
}
a();
console.log(b);
 
// when we run this program a gec(global execution context) is put into the stack
// where ever an execution context is created a lexical environment is also created, lexical environment is the local memory along with the lexical environment of its parent.
// lexical means in hierarchy or in a sequence or in order
// when an execution context is created, along with its memory we get a reference to the lexical environment of it's parent.
// lexical parent of c is a
/*
As 'a' is the lexical parent of 'c',c can access lexical environment of 'a' also.
*/

// lexical environment of a is its memory space and lexical environment of a's parent
// At global level the reference to the outer environment is points to null


function a(){
    var b =10;
    c();
    function c(){
        console.log(b);                       // here js engine try to find the b inside the local memory of c , so js engine goes to the reference and goes to the lexical environment of its parent so it will go to the lexical environment of 'a'.(as a is the parent of c)
    }
}
a();

// suppose 'b' is also not in inside a then  it goes to the lexical environment of a's  parent
// if there is no 'b' anywhere in our code then it goes to the lexical environment of global's parent and it finds null
// then atlast the js engine says b is not defined .

// This way of finding is known as "SCOPE CHAIN"

// scope chain is nothing but the chain of all the lexical environment and the parent references

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


