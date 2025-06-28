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


// 
let e = "";
let t = "";
let o = "";

e = Number(e);
t = String(t);
o = Boolean(o);

console.log(e, typeof e);
console.log(t, typeof t);
console.log(o, typeof o);
//  if string is empty we can chack for the boolean and if it is false then the reason is that the user may not enter the input,& we can let them know.

let a;
let b;
let c;

a = Number(a);
b = String(b);
c = Boolean(c);

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);

// if a variable is declared but not assigned then the Number becomes NaN,String becomes undefined and Boolean becomes false.


let xx = "0";
let yy = "0";
let zz = "0";

xx = Number(xx);
yy = String(yy);
zz = Boolean(zz);

console.log(xx, typeof xx);
console.log(yy, typeof yy);
console.log(zz, typeof zz);

// This is all Type conversion

//                                 CONST (constant)-;
// A variable that can't be changed once you assign them.
// here is a program to calculate the circumference of a circle given radius

let pi = 3.14159;
let radius;
let circumference;

radius = window.prompt(`Enter the radius of a circle`);
radius = Number(radius);   //when we acept user input it will be a string so to convert it we use "Number" function.


circumference = 2 * pi * radius;
console.log(circumference);

// Use of const => somebody may malicious our program or an error they make like reassignment we use const so that it cannot be changed or reassigned

let Pi = 3.14;
let radiuss;
let perimeter;


Pi = 420.69;    //reassigned

radiuss = window.prompt(`Enter the radius of circle`);
radiuss = Number(radiuss);

perimeter = 2 * Pi * radiuss;
console.log(perimeter);
// here the output changes
// So to ensure security use "const" for variables that shouldn't change

// replace let with const (use captial variable while using const)
// Capitalizing the constants is only done with primitive datatypes like numbers,boolean... and not with reference datatypes such as strings...
// here "PI" is a constant and a number so we are assigning it uppercase.(if it is a string then not used).

const PE = 3.14159;
let radiuus;
let circum;

PE = 420.9;           //TypeError:assignment to const variable        
// js won't allow us to reassign constants once they are assigned once ,we can't make any changes to it
radiuus = window.prompt(`Enter the radius of circle`);
radiuus = Number(radiuus);

circum = 2 * PE * radiuus;
console.log(circum);

const PI = 3.14159;
let raddius;
let circummference;

document.getElementById("mySub").onclick = function(){
    raddius = document.getElementById("radi").value;
    raddius = Number(raddius);
    circummference = 2 * PI *raddius
    document.getElementById("myH3").textContent = circummference + "cm";
    console.log(circummference);
}   


// Math
// -> built-in object that provides a collection of properties and methods

// if we need PI then we can use it from Math =>

    console.log(Math.PI);
    console.log(Math.E);
    // Math gives access to all math related methods
    
    let ex = 3.21;
    let ey = 3;
    let ez;
    let s;
    
    ez = Math.round(ex);   //to round
    s = Math.ceil(ex);
    d = Math.trunc(ex);
    console.log(ez);
    console.log(s);
    console.log(d);
    
    let r = 3.99;
    let tt = 2;
    let w;
    z = Math.floor(ex);
    console.log(z);
    
    let g =3;
    let v =2;
    l = Math.pow(g, v)  //x to the power of y
    console.log(l);

let f =81;
s = Math.sqrt(f);   //square root
b = Math.log(f);    // to find natual logarithmic function
a = Math.sin(f);
aa = Math.cos(f);
ab = Math.tan(f);
console.log(a);
console.log(aa);
console.log(ab);
console.log(s);
console.log(b);
// 

let h = -3.21;
zz = Math.abs(h);     //absolute of a negative number
console.log(zz);

// To find the sign of a number we use sign function
c = Math.sign(h);
console.log(c);     // O/p => -1; if it is a positive number then it becomes 1, and if it is zero sign also become 0

let re = 3;
let de = 2;
let te = 1;

let Max = Math.max(re,de,te);
let Min = Math.min(re,de,te);
console.log(Max);
console.log(Min);

// RANDOM NUMBER GENERATOR

let randomNum = Math.random();
console.log(randomNum);           //It will generate a random number between 0 and 1

// if we wanted a random number between 1 and 6 not including the decimal portion
/*
1). Multiply "Math.random * 6"  => It will give  random number between 0 and 6 exclusive
2).To avoid decimal portion,we enclose this with "Math.floor" method
*/
let randNo = Math.floor(Math.random() * 6)+1;
// we can increase the minimum by adding plus one or whatever we wanted the minimum to be

console.log(randNo);
// if we want a random number between 50 and 100

const min = 50;
const max = 100;
let randmNo = Math.floor(Math.random() * (max-min)) + min;
console.log(randmNo);

// IF STATEMENTS  => if a condition is true, execute some code
//                   if not, do something else

let aage = 25;

if(aage >= 18){
    console.log("You are old enough to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}


let time = 9;

if(time < 12){
    console.log("Good morning");
}
else{
    console.log("Good afternoon");
}

let issStudent = false;

if(issStudent){                                 // true
    console.log("You are a student");
}
else{
    console.log("You are NOT a student");
}

// NESTED IF
let Aage = 14;
let hasLicence =false;

if(Aage >= 16){
    console.log("You are old enough to drive");
    if(hasLicence){
        console.log("You have your licence");
    }
    else{
        console.log("You do not have your licence yet!");
    }
}
else{
    console.log("You must be 16+ to have a license");
}
// else if
let aAge = -1;

if(aAge >= 18){
    console.log("You are old enough to enter this site");
}
else if(aAge<0){
    console.log("Your age can't be below 0");
}
else if(aAge >= 100){
    console.log("You are TOO OLD to enter this site");
}
else{
   console.log("You must be 18+ to enter this site"); 
}
// O/p => Your age can't be below 0
// 
let Agee = 108;

if(Agee >= 18){
    console.log("You are old enough to enter this site");
}
else if(Agee < 0){
        console.log("Your age can't be below 0");
}
else if(Agee >=100){
    console.log("You are TOO OLD to enter this site");
}
else{
    console.log("You must be 18+ to enter this site");
}

// O/p => you are old enough to enter this site
// but we expected it's output to be You are TOO OLD to enter this site
// because of the order ,the first encountered sentence will be executed...

// It should be like =>

let AG = 112;

if(AG >=100){
    console.log("You are TOO OLD to enter this site");
}
else if(AG == 0){                         // = (assignment operator) , ==(equals(comparison))
    console.log("You can't enter.You were just born.");
}
else if(AG >= 18){
    console.log("You are old enough to enter this site");
}
else if(AG < 0){
    console.log("Your age can't be below 0");
}
else{
    console.log("You must be 18+ to enter this site");
}


const myText = document.getElementById("myText");
const myBtn = document.getElementById("myBtn");
const resultElement = document.getElementById("resultElement");
let AgG;

myBtn.onclick = function(){

    AgG = myText.value;
    AgG = Number(AgG);
    if(AgG >=100){
        resultElement.textContent = `You are TOO OLD to enter this site`;
    }
    else if(AgG == 0){                         // = (assignment operator) , ==(equals(comparison))
        resultElement.textContent = `You can't enter.You were just born`;
    }
    else if(AgG >= 18){
        resultElement.textContent = `You are old enough to enter this site`;
    }
    else if(AgG < 0){
        resultElement.textContent = `Your age can't be below 0`;
    }
    else{
        resultElement.textContent = `You must be 18+ to enter this site`;
    }
}

// .checked = property that determines the checked state of an HTML checkbox or radio button element
const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const PaymentResult = document.getElementById("PaymentResult");
mySubmit.onclick = function(){
    // we will first check the  checked property of the subscribe button
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }
    if(visaBtn.checked){
        PaymentResult.textContent = `You are paying with visa`;
    }
    else if(masterCardBtn.checked){
        PaymentResult.textContent = `You are paying with MasterCard`;
    }
    else if(paypalBtn.checked){
        PaymentResult.textContent = `You are paying with PayPal`;
    }
    else{
        PaymentResult.textContent = `You must select a payment type`;
    }
}

// ternary operator = a shortcut to if() and else() statements
//                    helps to assign a variable based on a condition 
//                    condition ? codeIfTrue : codeIffalse

let aje = 22

let msg;

if(aje >= 18){
    msg = "You are an adult";
    console.log(msg);
}
else{
    msg = "You are a minor";
    console.log(msg)
}

// instead we can use the below method

let aege = 9;
let messaage = aege >= 18 ? "You are an adult":"You are a minor";
console.log(messaage);

let timee = 16;
let greeting = timee < 12 ? "Good Morning":"Good Afternoon!";
console.log(greeting);


let isSStudent = true;
let message = isSStudent ? "You are a student":"You are not a student";
console.log(message);

let purchaseAmount = 1500;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount/100)}`);


// Switch = can be an efficeint replacement to many else if statements

let day = "pizza";


if(day == 1){
    console.log(`It is Monday`);
}
else if(day == 2){
    console.log(`It is Tuesday`);
}
else if(day == 3){
    console.log(`It is Wednesday`);
}
else if(day == 4){
    console.log(`It is Thursday`);
}
else if(day == 5){
    console.log(`It is Friday`);
}
else if(day == 6){
    console.log(`It is Saturday`);
}
else if(day == 7){
    console.log(`It is Sunday`);
}
else{
   console.log(`${day} is not a day`);
}
// it can be done using switch that is simple
let dayy = 7;

switch(dayy){
   case 1:
           console.log(`It is Monday`);
           break;
    case 2:
           console.log(`It is tuesday`);
           break;
   case 3 : 
           console.log(`It is Wednesday`)
           break;
   case 4 : 
           console.log(`It is Thursday`);
           break;
   case 5 :
           console.log(`It is Friday`);
           break;
   case 6:
           console.log(`It is saturday`);
           break;
   case 7:
           console.log(`It is Sunday`);
          break;
   default:
       console.log(`${dayy} is not a day`);
}
// break is used to break out of the switch
// if we don't have break, once we have a matching case we will execute the code found within that space then cascade down and execute any code that follows after including code within different cases 

// A Complex Example

let testScore = 33;
let letterGrade;

switch(true){
    case testScore >= 90:
        letterGrade = "A";
        break;
    case testScore >= 80:
        letterGrade = "B";
        break;
    case testScore >= 70:
        letterGrade = "C";
        break;
    case testScore >= 60:
        letterGrade = "D";
        break;
    default:
        letterGrade = "F";
}
console.log(letterGrade);
