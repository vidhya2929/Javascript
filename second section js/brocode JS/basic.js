// JavaScript => add interactivity

// Using javaScript we can respond to user actions  and transform user input whenever somebody interact with our site 

// output some text

console.log("Hello");       //double quotes/single quotes/backticks(template literal)
console.log("I Like pizza");

// To create an alert box

window.alert(`This is an alert`);
window.alert(`I like pizza`);

document.getElementById("heading1").textContent = `Hello`;
document.getElementById("paragraph").textContent = `I like Pizza!`;
// document => document of our webpage

// This is comment (notes for yourself or for other developers)

/*          Multiline
 comment        
     */


//                                Variables

// variable => A container that stores a Value.
            // Behaves as if it were the value it contains

// 2 steps of creating a variable

// 1. declaration  let x;
// 2.Assignment     x=100;

let x;
// let x;            // syntax error:identifier x has already declared
let y;
// each varibale name is to be unique
x = 100;
// assigning it a value
console.log(x);
// declaration and assignment in one sentence
let z = 100;

//                               DATATYPES in JS
/*
.Number

*/
let age = 25;
let price = 10.99;
let gpa = 2.1;       //grade point average
console.log(age);
console.log(price);
console.log(gpa);
console.log(typeof price);



// Using a template literal we can insert a variable using a placceholder
// To insert a variable use dollar sign curly braces and place your variable name within the braces.
console.log(`You are ${age} years old`);
console.log(`The price is $${price}`);
console.log(`Your gpa is: ${gpa}`);


//                  STRING in JS
// string is a series of characters
let firstName = "Brooo";
console.log(typeof firstName);

let firsttName = "Broonklyn";
console.log(typeof firstName);
console.log(firstName);
console.log(`Your name is ${firsttName}`);

let favouriteFood = "pizza";
console.log(favouriteFood);
console.log(`You like ${favouriteFood}`)

let email = "vidhyamr@gmail.com";
console.log(`Your email is ${email}`);
// strings can contain numbers also,but we can't use this numbers for any sort of math strings.

//                    BOOLEANS(true/false)
// typically they are used as flags in our program

let online = true;
console.log(typeof online);
console.log(`Brooklyn is online:${online}`);   //here ${} is a placeholder

let forSale = false;
console.log(`Is this car for sale: ${forSale}`);


console.log(`Enrolled: ${isStudent}`);
let fullName = "Vidhya M Robert";
let agee = 20;
let isStudent = false;

// To the HTML page not in the console

document.getElementById("p1").textContent = fullName;
document.getElementById("p2").textContent = agee;
document.getElementById("p3").textContent = isStudent;

// template literal
document.getElementById("p1").textContent = `My name is ${fullName}`;
document.getElementById("p2").textContent = `My age is ${agee}`;
document.getElementById("p3").textContent = `Enrolled:${isStudent} `;

// arithmetic operators = operands(values, variable, etc.)
//                        operators(+ - * /)
//                         eg: 11 = x + 5;

let Students = 30;

// Students = Students + 1;    //increase student by 1
// Students = Students -1;     //decrease student by 1
// Students = Students * 2;    // Multiply by 2
// Students = Students / 2;    // splitting students into two group
Students = Students ** 2;   //exponents are represented by double asterisk

// modulus operator => It gives the remainder of the division
let extraStudents  = Students % 3;
console.log(extraStudents);

// modulus operator => It gives the remainder of the division
let students = 30;

// Augmented Assignment Operators -; shortcut for the operations like students = students + 1

// students += 3;
// students -= 1;
// students *= 2;
// students /= 2;
// students **= 2;
// students %=2;

// increment & decrement operator
students++;  
students--;
console.log(students);

/*                              
OPERATOR PRECEDENCE     (working from left to right)
1.parenthesis();
2.exponents
3.multiplication & division & modulo
4.addition & subtraction
*/


let result = 1 + 2 * 3 + 4 ** 2;            //working 
console.log(result);
// O/p = 23
// step by step solution
/*
operation is taking place from left to right
. here are no paranthesis
.here comes exponent - ; 4**2 = 16
==> 1+2*3+16
.check for multiplication,division and modulo
here multiplication comes 2*3 = 6 ,(there is no more division & modulo)
==> 1+6+16
.check for addition & subtraction
==>7+16= 23
 */

let resultt = 12 % 5 + 8 / 2;
console.log(resultt);

// O/p= 6
/*
operation is taking place from left to right
. There is no parenthesis,exponents
check for multiplication,division and modulo
.here first comes division 8/2=4
==> 12%5+4
.next modulo 12%5= 2
2+4=6
*/
let res = 6 / 2 ** (2+5);
console.log(res);
// O/p = 0.046875
/*
operation takes place from left to right
.here comes parenthesis -; (2+5=7)
==> 6 / 2 ** 7
.next exponent-; 2 ** 7= 128
==> 6 / 128
.lastly division -; 
6 / 128 = 0.046875
*/
// How to accept user input

// 1. EASY WAY = window prompt
// 2. PROFFESSIONAL WAY = HTML textbox (we need a button to submit the user input)

// 1).steps for window prompt
/*
.declare all of the variables we are going to use.
.variable name = window.prompt(); within the parenthesis,the window prompt can contain some text
*/
let userrname;
 
username = window.prompt("what's your username?");

console.log(userrname);

// This is the easy way to accept user input
// here we could assign declaration and assignment together =>

    // let username = window.prompt("what's your username?");

// 2).HTML Textbox
// how to make a button is clicked when we are executing a function
// when we click on the button we are going to execute a function
let username;

document.getElementById("mySubmit").onclick = function(){     //onclick function is used to get the function on clicking the button
    username =  document.getElementById("myText").value       // value is getting into it
    console.log(username);   
    document.getElementById("myh1").textContent = `hello ${username}`        //after clicking the button the the text content is changed with this statement                                 //everything between this set of curly braces is everything we"ll do when we click on the button           
}
// This is how we accept user input in javascript

// type conversions = change the datatype of a value to another
//                    (strings, numbers, booleans)

// reason for using this 
// when we accept user input the data type of that input is a string
// if we need to use it for any sort of maths we need to convert it to a number eg:
let agge = window.prompt("how old are you?");

agge += 1;

console.log(agge);
// when user input 25
// O/p => 251
// because when we accept user input it is a string data type (a series of characters) by adding 1 we appended 1 to the end of the string
// here we are not increasing our age by one we are doing string concatenation therefore 
// we are going to convert our user input into a number

// It is done after accepting our user input and before making any changes to it

let Age = window.prompt("How old are you ?");
Age = Number(Age);  //This is a number function -; it will convert another datatype(eg:string or boolean) into a number
Age +=1;
console.log(Age);

let xe = "pizza";
let ye = "pizza";
let ze = "pizza";


xe = Number(xe);
ye = String(ye);
ze = Boolean(ze);

console.log(xe, typeof xe);
console.log(ye, typeof ye);
console.log(ze, typeof ze);