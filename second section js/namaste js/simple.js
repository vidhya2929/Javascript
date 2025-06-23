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


