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

// string Methods = allow you to manipulate and work wuth text (strings)

// Strings have different built-in-methods where we can manipulate text
let userName = "   Brocode";
// To get the first character of the string -; use .charAt()
console.log(userName.charAt(3));
// return the index of the first occurrence of the character -;.indexOf()
console.log(userName.indexOf("c"));
// & for the last index -;.lastIndexOf()
console.log(userName.lastIndexOf("o"));
// method to get length of the string -; .length
console.log(userName.length);  
// To make Uppercase -;.toUpperCase()
console.log(userName.toUpperCase()); //type the string |variable containing the string
// To make lowercase -; .toLowerCase()
console.log(userName.toLowerCase());
// to trim the string -; trim()
console.log(userName.trim());
// To repeat a string -;.repeat()
console.log(userName.repeat(3)); // inside the parenthesis write how many times do you want to repeat
// To determine if a string starts with a given character-; .startsWith()
let reesult = userName.startsWith(" ");
console.log(reesult);
// To determine if a string ends with a given character -;endsWith()
console.log(userName.endsWith(" "));
// includes() -; the string contain an empty space                 check chatgpt
console.log(userName.includes(" "));
let namee = "porsche";
let car = namee.startsWith(" ")

if(car){
    console.log("Your name can't begin with ' '");
}
else{
    console.log(namee);
}

let brandname = "BMW M5";
let carname = brandname.endsWith("5")

if(carname){
    console.log(brandname);
}
else{
    console.log("ok bye");
}

 // replace()
 let phoneNumber = "123-456-7890"; //it is a string even though it takes numbers because string can contain numbers but we treat them as characters
 phoneNumber = phoneNumber.replaceAll("-","/");   //if we don't want to replace with anything we can give it as replaceAll("-","");
 console.log(phoneNumber);
 
 // .padStart()
 // The first value within the padStart method is a specified length and the next value will add the corresponding one in the start to make the length
 phoneNumber = phoneNumber.padStart(15,"0");
 console.log(phoneNumber);
 // The first value within the the padEnd method is a specified length and the next value add the corresponding value in the end to make the length
 phoneNumber = phoneNumber.padEnd(20,"1");
 console.log(phoneNumber);

 // string slicing = creating a substring from a portion of another string
// string.slice(start,end)
const FullName = "Bro Code";

let FirstName = FullName.slice(0,2);                    //The ending index is exclusive so we should increase it by one
// so here to get Bro we should use slice(0,3)
let LastName = FullName.slice(4,8);
console.log(FirstName);
console.log(LastName);
// If we are creating a substring from some position all the way to the end then it is not neccessarily need to mention the ending index
// TO get the first character
let firstChar = FullName.slice(0,1);   // here it displays the first character
console.log(firstChar);
let LastChar = FullName.slice(7,8);
console.log(LastChar);
// if we use negative number then it begin at the end and by decreasing the number it will work towards starting
let gf = FullName.slice(-1);
console.log(gf);
let we = FullName.slice(-3);
console.log(we);

// To make this program more Dynamic we can combine string slicing with index of method
newName = "Broseph Code";
let namefirst = newName.slice(0, newName.indexOf(" "));
// indexOf() -; shows where is the first index of a space so that ending position where ever there is a space then we will display our first name
console.log(namefirst);
let nameSecond = newName.slice(newName.indexOf(" "));  //to avoid space here add +1 (the first index of a space and start in the position after that's and getting every letter that comes after)
console.log(nameSecond);
let nameLast = newName.slice(newName.indexOf(" ") + 1);
console.log(nameLast);

const emaiil = "Brocode12@gmail.com"
// extracting the first part of the email and to store it as a username
let usName = emaiil.slice(0,emaiil.indexOf("@"));
let extension = emaiil.slice(emaiil.indexOf("@")+ 1);
console.log(usName);
console.log(extension);
// using slice we cannot make changes in a string (also here we used const) but we tak ethe string use the built in slice method and we can list starting or ending indices
// Method Chaining = Calling one method after another in one continous line of code

//-------- METHOD CHAINING---------------




// -----------NO METHOD CHAINING---------
let usingname = window.prompt("Enter your usingname: ");
usingname = usingname.trim();
let letter = usingname.charAt(0);  //hold the first character
letter = letter.toUpperCase();
console.log(letter);

// Method Chaining = Calling one method after another in one continous line of code

// -----------NO METHOD CHAINING---------
// let usingname = window.prompt("Enter your usingname: ");
// usingname = usingname.trim();
// let letter = usingname.charAt(0);  //hold the first character
// letter = letter.toUpperCase();
// let extraCharacters = usingname.slice(1);
// extraCharacters = extraCharacters.toLowerCase();
// usingname = letter + extraCharacters
// console.log(usingname);

//-------- METHOD CHAINING---------------
// By using method chaining we can combine some steps together and can avoid creating variables that we don't need (like letter,extracharacters)

let usname=window.prompt("Enter your user name:");
usname = usname.trim().charAt(0).toUpperCase() + usname.trim().slice(1).toLowerCase(); //get the usingname and trim it and then get the first charcter and then make it uppercase and then concat the usingname which is trimmed and sliced to make lowecase for rest of the characters
console.log(usname);
// technique of calling one method rught after another in one continous line of code

// Logical Operators = used to combine or manipulate boolean values
//                    (true or false)

//                   AND = &&
//                   OR = ||
//                   NOT = !
const temp = -100;
// check if the temperature falls within a certain range

if (temp > 0){
    console.log("The weather is GOOD");
}
else if(temp <= 30){
    console.log("The weather is Good");
}
else{
    console.log("The weather is BAD");
}
// here all the temperature falls in between 0 and 30
//    &&
const tempp = -140;

if(tempp = 0 && tempp <=30 ){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}
// To join 2 conditions we use double ampersand (meaning and)
// if tempp = 25 O/p => weather is GOOD
// if any one condition among these to is false we don't execute it at all,we will skip over it
//OR
const tmp = 28;

if(tmp > 0 || tmp <= 30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}
// ==>
const tem = -250;
if(tem <= 0 || tem > 30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}
// when atleast 1 condition is true it will execute
// NOT
const isSunny = true;
if(!isSunny){
    console.log("It is Cloudy");
}
else{
    console.log("It is Sunny");
}
// Using NOT logical operator we can flip a boolean from true to false or false to true

//  = asssignment operator
//  == comparison operator(compare if values are equal)
//  === strict equality operator (compare if values & datatype are equal)
// eg:
const Pe = 3.14;

if (Pe == "3.14"){
    console.log("That is PI");
}
else{
    console.log("That is not PI")
}
//  != inequality operator
// !== strict inequality operator
// if we are using strict equality operator

const Pei=3.14159;
if(Pei === "3.14159"){                    // here when we use === it also checks the data type too 
    console.log("That is Pi");
}
else{
    console.log("That is not Pi");
}
// inequality operator will return true if 2 values are not equal
const pei = 3.14;
if(pi!="3.14"){
    console.log("That is not pi");
}
else{
    console.log("That is pi");
}  //O/p => That is pi
// 

const P = 3.14;
if(P!== "3.14"){
    console.log("That is not P");
}

// while loop = repeat some code WHILE some condition is true

let as = "";

if(as === ""){
    console.log("You didn't enter your name")
}
else{
    console.log(`Hello ${as}`);
}

// 
// let ase = "";

// while(ase === ""){
    // console.log("You didn't enter your name");            //Infinite Loop
// }
// console.log(`Hello ${ase}`);

// if we use while loop and it is true then we get into the while loop and execute that forever
// And we want some sort of condition to exit the while loop while you are in it . Otherwise we get into an infinite Loop.

// rewriting
let nam = "";
while(nam === "" || nam === null){               //when one of these condition is true execute the condition inside it forever
    nam = window.prompt("Enter your name");
}
console.log(`Hello ${nam}`);
// while loop => repeat some code until the condition is no longer true...
// if we cancel it then O/p => Hello null (null means no value)
let loggedIn = false;
let naem;
let password;
while(!loggedIn){
    usr = window.prompt("Enter your username;");
    password = window.prompt("Enter your password");

    if(usr === "myUsername" && password ==="myPassword"){
        loggedIn = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! please try again");
    }
} 



// DO ...WHILE LOOP
// In this we can move "while" and the condition to the end and then precede the set of curly braces with "do" .So it will always execute this code atleast once then check the condition at the end 
// Using do...while loop we don't neccessarily set the username it can set to undefined
// do...while loop => do the code first then checks the condition at the end.
let logged = false;
let us;
let pass;

do{
    us = window.prompt(`Enter your username`);
    pass = window.prompt(`Enter your password`);
    if(us === "myUsername" && pass === "mypassword"){
        logged = true;
        console.log("You are logged in!");
    }
    else{
        console.log("Invalid credentials! please try again");
    }
}while(!logged)


// for Loop -;repeat some code a LIMITED amount of times
for(let i = 0; i <= 2; i++){  //first is a temporary counter to keep track of the number of iterations ,// the second statement means we will continue the for loop as long as I is less than or equal to 2,// the third statement we can increment or decrement the counter by one during each iteration by typing i++
    console.log(i);
}
// we can increment the counter by 2 or more not neccessarily one
for (let i = 2; i <= 10; i+=2){
    console.log(i);
}

// 
for(let i = 10; i > 0; i--){
    console.log(i);
}

console.log("HAPPY NEW YEAR!")

// Continue & Break
// 
for(let i = 1; i<=20 ; i++){

    if(i == 13){       //here we skip over 13 we jump from 12 to 14
        continue;        //Use continue to skip an iteration
    }
    else{
        console.log(i);
    }
}
// break -; it will break out of the loop entirely
for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;
    }
    else{
        console.log(i);
    }
}

// NUMBER GUESSING GAME
// we should set the maximum and minimum numbers in our number guessing game

const minNum = 1;
const maxNum = 100;
// we should create a random number between minimum and maximum
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
// if we have minimum besides 1 ,then we will add minimum to the end
console.log(answer);

let attempts = 0;   //to keep track of the attempts
let guess;              
let running = true;       //keeeping the variable running because we can exit the game when it's over

while(running){
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }
    else if(guess< minNum || guess > maxNum){
        window.alert("please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW! TRY AGAIN!");
        }
        else if(guess > answer){
             window.alert("TOO HIGH! TRY AGAIN!");
        }
        else
        {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false;
        }
        
    } 
}

// function => a section of reusable code.
//             Declare code once. use it whenever you want.
//              Call the function to execute that code.

function happyBirthday(){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear you!");
    console.log("Happy birthday to you!")
  }
  happyBirthday();
  happyBirthday();
  happyBirthday();  // here it executes the function 3 times.
  // therefore the function is for this it invoked whenever it is called.
  // Major advantage of Function is it's reusability
  
  function heppyBirthday(useenamee, ageer){   //parameters are passed inside the declaration
    console.log("Heppy birthday to you!");
    console.log("Heppy birthday to you!");
    console.log(`Heppy birthday dear ${useenamee}!`);
    console.log("Heppy birthday to you!");
    console.log(`You are ${ageer} years old`);
  }
  heppyBirthday("Broocodee",25);    //it is called arguments -they are the data you send inside the function.But we need a matching set of parameters.
  // parameters are within the parenthesis of declaration(some temporary variables with comma seperated)
  heppyBirthday("spongeBob",68)
  heppyBirthday("keyle",23)
  // parameters => inside the parenthesis of declaration
  // arguments => along with functions
  

  //  order of the parameters does matter...suppose
  heppyBirthday(76,"Mellisa");
  // O/p will be Heppy birthday dear 76,........... You are Mellisa years old....
  // so we want to ensure that the parameters match up
  // RETURNS IN FUNCTIONS
function add(x,y){
    let rsul = x+y;
    return rsul;
  }
  let ansswer = add(2,3);
  console.log(ansswer);
  //Returning a function  => we can send some data back to the place in which we call a function
  // 
  // OR
  function add(x,y){
    return x+y;
  }
  console.log(add(2,3));
  
  function subtract(x,y){
    return x-y;
  }
  console.log(subtract(6,2));
  function multiply(x,y){
    return x*y;
  }
  console.log(multiply(2,8));
  function divide(x,y){
    return x/y;
  }
  console.log(divide(10,2));
  function isEven(number){
  if(number%2===0){
    return true
  }
  else{
    return false;
  }
  }
  console.log(isEven(11));
  // OR Ternary operator can be used
  function isEEven(number){
    return number % 2 === 0 ? true : false; 
  }
  console.log(isEEven(24));
  // function to get see if an email is valid
  function isValidemail(email){
    if(email.includes("@")){
      return true;
    }
    else{
      return false;
    }
  }
  console.log(isValidemail("brofakegmail.com"));
  
  // OR
  function emailValidate(email){
    return email.includes("@") ? true:false;
  }
  console.log(emailValidate("brookk12gmail.com"))

  // variable scope = where a variable is recognized and accessible (local vs global)
let xee = 1;
// let xee = 2;           //syntax error
// we can reuse the same variable names as long as they are in different scopes.
function1();
function2();
function function1(){
  let x = 1;
  console.log(xee);
}
function function2(){
  let x = 2;
  console.log(xee);
}
// here there is 2 variables with same name it is legal as long as they have different scope
// A variable declared inside a function has a local scope 
// one function can't know what is inside another function.
function1();

function function1(){
  let x = 1;
  console.log(y);
}

function function2(){
  let y = 2;                   //local scope
  console.log(x);
}
//here function1 has no idea what  variable y is and function2 has no idea what variable x is
// A variable declared outside of a function has a global scope


// eg :
let xex = 3;              //global scope
function1();
function2();
function function1(){
  console.log(xex);
}
function function2(){
  console.log(xex);
}
// for large programs global variables are not so good...

let xo=4;
function1();
function function1(){
  let xo = 1;
  console.log(xo);
}
function function2(){
  let xo = 2;
  console.log(x0);
}

// here O/p => 1
// if we have 2 variable with same name and they are in different scopes then we will use the local version first.

// array = a variable like structure that can hold more than 1 value
// 
let fruits = ["apple","orange","banana"];   //array are enclosed inside straight bracket
// it is not mandatory to give plural variable name
fruits[0] = "coconut";
 // it print all the elements in the array -; console.log(fruits)
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

// we can add element like -:
fruits[3] = "Mango"; 
console.log(fruits[3]);
// there is a built-in function
fruits.push("pineapple");      //Add an element to the end
console.log(fruits);
// to pop out the element -; pop()
fruits.pop();                 //Pop an element from the end
console.log(fruits);  
// To remove an element at the beginning
fruits.shift();
// To add an element at the beginning
fruits.unshift("rambutan");
console.log(fruits);

let numOfFruits = fruits.length;                // it finds the length of the array
let index = fruits.indexOf("coconut");          
console.log(index);           // to get the index of an element
console.log(numOfFruits);

let fruit = ["orange","apple","mango","pineapple"];
for(let i = 0;i < fruit.length;i++){    // i+=2   => O/p -; orange and mango
  // for(let i = 1; i<fruit.length ; i+=2)   O/p => apple and pineapple
  console.log(fruit[i]);
}

// different ways to display the elements of an array using "for loop"

// To reverse the array
for(let i = fruit.length - 1; i >=0; i--){
  console.log(fruit[i]);
}

let fruits = ["orange","apple","mango","pineapple"];
console.log(fruits.sort()); //to sort elements in alphabetical order
console.log(fruits.sort().reverse());  //to reverse the sorted array
// enhanced for loop  (shortcut to display the elements of an array)
for(let fruit of fruits){
  console.log(fruit);      
}

// spread operator = (...)allows an iterable such as an array or string to be expanded into seperate elements.(unpacks the element)
let numbers = [1,2,3,4,5];
// let maximum = Math.max(numbers);   //not a number(NaN)
let maximum = Math.max(...numbers);   //spread operator => It will spread into different elements
let minimum = Math.min(...numbers);
console.log(maximum);
console.log(minimum);

let usar = "Hermione Granger";
// let letters = [...usar];
let letters = [...usar].join("-"); // To join the elements
console.log(letters);

let fruitss =["apple","orange","banana","mango"];
let vegitables = ["carrot","cucumber","potatoes"];
let fooods = [...fruitss,...vegitables,"eggs","milk"]; //we can append seperate elements along with unpacking these arrays.
console.log(fruitss);
let fruu =[...fruitss];
console.log(fruu);
console.log(fooods);

// shallow copy is created using spread operator => It is a different data structure but it contains identical values.
// rest parameters = (...rest) allow a function work with a variable number of arguments by building them into an array

//                   spread = expands an array into seperate elements ||| rest = bundles seperate elements into an array
function openFridge(...foods){
    console.log(foods);
    console.log(...foods);   //spread operator
  }
  function getFood(...foods){
    return foods;
  }
  const food1 = "pizza";
  const food2 = "hamburger";
  const food3 = "hotdog";
  const food4 = "sushi"; 
  const food5 = "ramen"
  
  // openFridge(food1, food2,food3,food4,food5);               //variable number of argument
  
  // this function can accept any number of arguments
  // rest parameters can be used as parameters
  // spread operator is used whenever you have an array or any sort of collection of something
  const foods = getFood(food1,food2,food3,food4,food5);
  console.log(foods); //bundled into an array

  function sum(...numbers){
    let result = 0;
    for(let number of numbers){
      result += number;
    }
    return result;
  }
  const tottal = sum(1,2,3,4);
  
  console.log(`Your total is $${total}`);

  function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
      result += number;
    }
    return result / numbers.length;
  }
  const total = getAverage(75,100,85,90,50);
  console.log(total);

  function combineStrings(...strings){
    return strings.join(" ");
  }
  const fullNName = combineStrings("Mr.","Spongebob","Squarepants","III");
  console.log(fullNName);
  // the rest parameters allow a function to work with a variable number of arguments by bundling them into an array