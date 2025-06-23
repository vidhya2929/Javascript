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


// let and const declarations are Hoisted
console.log(b);              //undefined due to hoisting
let a = 10;
var b = 100;


console.log(ar);             //error -; cannot access a before initialization
let ar = 10;
var b = 100;
//  var b is attached to global object
// but let and const are also allocated memory but they are stored on a seperate memory than global
// we cannot access this memory without initializing it.
//temporal dead zone -: the time between the (let) variable has hoisted and till it is initialized some value

console.log(a);
let aea = 10;
var b = 100;
// here the temporal dead zone ends when the js engine reaches line containing 'let aea' =10
//whenever we try to access a variable in the temporal dead zone then it gives us a reference error(not initialized)
//they can only be accesssed when some value is initialized to them

//Another condition for reference error

console.log(x)          //reference error -;x is not defined
let be = 10;
var b =100;
// if we try to access 'b' it gives special placeholder 'undefined'
// if we try to access 'be' it gives reference error here 'be' is in a temporal dead zone we can only access it after initialization.
//whenever we initialize the 'b' it gets attached to the window object and we get 100 when we access it like 'window.b'
//but 'be' don't get attached to window object they are stored in a seperate storage which is the reserved space for the 'let' and 'const' 

// at global level 'this' === "window". therefore we can't access let and const using 'this' variable
// for "let" we cannot do redeclaration.Here if we try to declare 'be' again it will throw syntax error,and no code will be run

// if we have a "let r" we cannot use the same name for var like "var r" in the scope
// But var can be redeclared

//                           let
// it also goes through temporal dead zone
// with 'let' we can declare it and after some time we can initialize it ,
//                           const
//But with 'const' we cannot initialize it after some time of declaration.if we do so we get syntax error(missing initializer in the const declaration)
// whenever we are writing something with 'const'  it expects we will initialize it in the same line
// i.e, we definitely have to put some value in the const variable
// whenever we try to reassign the 'const' value we get a "type error"(assignment to constant variable)

/*
type error -; because it was a const type
syntax error -; because there is a missing syntax(also no duplications/redeclaration allowed)
reference error -; when js engine try to find a specific variable inside the memory space and you cannot access it (because at that time the variable is in the temporal dead zone | which is not defined)
*/

//  try to use "const" whenever possible 
// else use "let" because by using this "let" and "const" we can reduce the unexpected errors


// to avoid the temporal deadzone which leading to unexpected errors, we should always put our declarations and initializations on the top of the scope
// we can shrink the temporal deadzone window to zero while moving initializations and declarations on to the top of the scope


// Block Scope

// BLOCK
/*
A block is defined by the "{}" curly braces
It is also called as Compound Statement
It is used to combine multiple js statement into one group


*/
// eg:
{
    var q = 10;
    console.log(q);
}
// we can use block where js expects one statement eg:
{
    var w = 10;
    consolelog(w);
}
if(true) true;  // valid
// but if we want to write multiple statement instead of this single statement "true" we need to use "block" to group things


// Block Scope
/*
what all variables and functions we can access in this code
*/
// eg:
{
    var j = 10;
    let k =20;
    const h =30;
    console.log(j);
    console.log(k);
    console.log(h);
}

console.log(j);
console.log(k);                 // thows an error "k" is not defined...(because b is not in the global scope)
console.log(h);
// here 'k' and 'h' are in the block scope(i.e, they are stored in a seperate space which is reserved for this block) and 'j' is in the global scope
// we cannot acccess this "let" & "const" outside this block that is known as "let" and "const" are in block scope
//where as we can access the "var" outside the block because they are in the global scope

//     SHADOWING IN JAVASCRIPT
/*
if we have same named variable outiside this block then the same named variable inside the block shadows that varible
*/
//                   VAR

var a = 100;                           // this value is modified as 10 later because both are pointing to the same memory location
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);  
}
console.log(a);     //O/p -; become 10
// here the value of 'a' become 10 so the value is shadowed and also get modified
// As we used 'var' inside the block it is global scope so when the first line inside the block executes the value of 'a' becomes "10" from "100"

//               LET
let b = 100;                            // this 'b' is in the script it's not even in the global scope(outside of the block)
{
    var a = 10;
    let b = 20;                         // this 'b' is in the block scope
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(b);           // O/p-;100
//the 'b' having the value 20 shadowing the "b" having the value 100
// here the variable inside the block shadowed the outside variable
// here we have 3 scope => global,script and block

const c = 100;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(c);

// here "const" also happen thing similar to "let"

//shadowing is not only a concept of block. it behaves similar in the function also...
// eg:

const r = 100;
function x(){
    const r =40;
    console.log(r);
}
x();
console.log(r);
// it works similar to the shadowing in the block


// ILLEGAL SHADOWING
/*


*/
var a =20;
{
    var a = 20;          // shadowing possible 
}

let a =40;
{
    var a =40;              // O/p-; will be error (not valid)
}
// we cannot do shadowing  a "let" variable with a "var" variable which is inside the block scope
// But we can shadow a "let" using a "let", can't shadow a "let" using "var" => this is illegal shadowing

var a =60;
{
    let a =60;           // it is valid,no error
}

// reason -; if something shadows anything else it should not cross it's boundary of it's scope
// In a particular scope a "let" cannot be re-declared
// block scope also follows lexical scope

// lexical means one inside the another
const a =20;
{
    const a = 100;
    {
        const a = 200;
        console.log(a);       //this 'a' will get the access from the nearest 'a'  (O/p ->200)
    }
}

//
const a = 20;
{
    const a = 100;
    {
        const a= 200;
    }
    console.log(a);             // O/p -> 100
}
// lexical scope remains same in the block also
// whether we declare a function with function keyword or arrow function the scope rules are same

//                  CLOSURES
function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    y();
}
x();
/*
closure is a function which is bundeled with its lexical environment
or function along with it's lexical scope forms a closure
 */
// MDN
// A closure is the combination of a function bundled together with it's lexical environment
/* we can assign "functions" to a variable */
function x(){
    var a = function y(){
        console.log(a);
    };
    y();
}
x();
// & also we can pass a function inside a function as parameter
function x(){
    var a =7;
    y();
}
x(function y(){
    console.log(a);
});
// similarly we can return functions from functions

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
 var z = x();            // while run this statement x will be no longer in the call stack
 console.log(z);

 z();
//  when a function is returned from another function they still remains their lexical scope
// so closure is returned that is (a function along with it lexical scope).(lexical scope->they rember where they actually present)

//Another method of returning
function x(){
    var a = 7;
    return function y(){      // it's just returning a function
        console.log(a);
    }
}
var z = x();
console.log(z);
z();
//

function x(){
    var a = 7;
    return function y(){
        console.log(a);
    }
    a = 100;           //  O/p -> 100 is wanted
    return y;
}
var z = x();
console.log(z);
z();
//

function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a,b);
        }
        y();
    }
    x();
}
z();
// closure helps to remember things even when they are not in that lexical scope


//       USES OF CLOSURE
/*
.Module Design Pattern
.Currying
.Functions like once -which can only run once,we can't run it twice
.Memoize
.maintaining state in async world
setTimeouts
Iterators
.Data hiding and Encapsulation -; if we have some variable and want some data privacy over it or other pieces of code cannot have access to this particular data
// eg: 
*/
var counter = 0;              // anybody can change(access) this counter .It should not be like that it should only be changed through the increment operator.
                            // to achieve that we use closure
function incrementCounter(){
    counter++;
}
//Questions for Interview

function x(){
    var i = 1;
    setTimeout(function(){
        console.log(i);
    }, 1000)
}
x();


//After running it the value of i(1) will be printed after 1s(1000ms)

function  x(){
    var i = 1;
    setTimeout(function (){
        console.log(i);
    },3000);
    console.log("NamasteJavaScript")
}
x();
// the function setTimeout forms a closure and remembers the reference to i,So where ever it goes it takes the 'i' with it.
// And the setTimeout takes the callback function and store it into some place and attach the timer to it.when the timer expires it takes back the function and puts it again into the callstack and runs it.
//here  first prints 'namaste javascript' and then waits for 3000ms and then print the value of i
// javascript does not wait for anyone

// we want to print 1 after 1s, 2 after 2s, 3 after 3s etc..

function x(){
    for(var i = 1; i<= 5; i++){
        setTimeout(function (){
            console.log(i);           // the problem lies in the 'i'.The copy of "i" refresh to the same memory location
        }, i * 1000);
    }
    console.log("Namaste Javascript");
}
x();
//here when it runs it remembers the reference to 'i' not value. here i is refrring same for all 5
//there is no time for js engine to wait for the timer so it prints namaste js and at that time i becomes 6 due to the continous working of loop and when the callback function(setTimeout) runs the value of i is six
//Use let over here -> let has a block scope.
// As let is a block scope whenever the loop runs the 'i' is a new varible alltogether
//Each time the setTimout runs, the callback function have the new copy of 'i' with it;

function x(){
    for(let i=1; i<=5; i++){
        setTimeout(function (){                   //it forms a closure with a new variable, i.e the copy of 'i' in each iteration
            console.log(i);
        },i*1000);
    }
    console.log("Namaste javascript");
}
x();
// when we do i++ => i = 2  is a new copy of variable
// Each time the function is called it is reffering to different memory location.


// we can done it using var by using closure concept

//create a new function(close here)and enclose setTimeout in it and then call it with an 'i'
function x(){
    for(var i = 1; i <= 5; i++){
        function close(x){
            setTimeout(function (){
                console.log(x);
            }, x* 1000);
        }
        close(i);
    }
    console.log("Namastee JavaScript");
}
x();

// INTERVIEW QUESTIONS
/*
.Each and every function in javascript has access to its outer lexical environment i.e, like access to the variables and functions which are presented in the environment of it's parent
.each and every function has access to them.
.Even when this function is executed in other scope not in its own original scope,it still remembers it's outer lexical environment where it was originally present in the code
*/
// eg: 
// suppose we have nested functions
function outer(){
    var a = 100;
    function inner(){   // in js the inner function has access to it's outer environment, So the inner function has access to 'a' variable
        console.log(a);
    }
    return inner;          // if we return this inner function also and try to access it from the outside also,it still remembers what the value of 'a' was
}
outer()();    //O/p => 100 (even if it is not in the scope it still remembers the value of 'a')
 
// outer();   ==>This will return the inner function
// outer()();  ==> Call the inner function in the same line.


//
var close = outer();
close();
// which is equal to  ==>
var close = outer()();

// ? what if the program is like this 
function outer(){
    function inner(){
        console.log(a);
    }
    var a = 10;
    return inner;
}
outer()();
//  Now if this is a closure?

// ans
/*
It will still form a closure and it will work in the same way
Because the inner function forms a closure with it's outer function not in a particular sequence where it is presented in the code.
 */

// what if we change the "var" to "let" in the above question.considering that "let" is a block scope

function outer(){
    function inner(){
        console.log(a);
    }
    let a = 10;
    return inner;
}
outer()();

// In this case "a" has a block scope here.we cannot access this "a" outside.but still it forms a closure

// ? what if it was like this
function outer(b){
    function inner(){
        console.log(a,b);  // suppose we access this 'b' here
    }
    let a = 10;
    return inner;
}
var close = outer ("helloworld");
outer()();
// even if it is called outside it will work in the same way
// here both a and be will be logged out 
// because inner function forms a closure with it outer environment and "b" is also a part of the outer environment of inner function
// O/p => 10,helloworld
// if the outer function is nested inside another function it will again forms a closure with the environment of that function also.
function outest(){
    var c = 20;
    function outer(b){

    function inner(){
        console.log(a,b,c);
    }
    let a = 10;
    return inner;
}
return outer;
}
var close = outest()("helloworld");
close();
// if there is a conflict in the name of let "a"; want to do
function outest(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        let a = 10;
        return inner;
    }
    return outer;
}
let a =100;                    // it is in the global scope, therfore these two similar name variables are like different variable
var close = outest()("helloworld"); //a copy of inner function is goes to close ,it remembers the value of a is pointing to 10,not 100
close(); 
// in this case if we don't have let a = 10, then it will be defaulted to the global variable the inner function forms a closure with its outer environment so if it does not find "a" it goes to the global scope to resolve that variable
// if it is not present in the global scope then it will return error that 'a' is not defined


