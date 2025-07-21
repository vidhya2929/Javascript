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
  // 
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
function openFridge(...foodes){
    console.log(foodes);
    console.log(...foodes);   //spread operator
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
  const foodes = getFood(food1,food2,food3,food4,food5);
  console.log(foodes); //bundled into an array

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

// callback = a function that is passed as an argument to another function
// used to handle asynchronous operations:
// 1.Reading a file
// 2.Network requests
// 3.Interacting with databases


// ("Hey, when you're done,call this next." )


hello();
goodbye();
function hello(){
  console.log("Hello")
}
function goodbye(){
  console.log("Goodbye!");
}
// we should check whether the js engine waits 
hello();
goodbye();
function hello(){
  setTimeout(function (){
    console.log("Hello");
  },3000);                           //here it delays
// Therefore the goodbye function doesn't wait for anything
 
}
function goodbye(){
  console.log("Goodbye!");
}
// here by adding a callback to the "goodbye" function we can ensure that the "goodbye" function follows after the hello function
// to use a callback -; we can pass the goodbye function as an argument to another function(here "hello" function)
// within the set of parenthesis type the name of the function goodbye

hello(wait);

function hello(callback){
  console.log("Hello!");
  callback();
}
function leave(){
  console.log("leave!");
}
function wait(){
  console.log("wait!");
}
function goodbye(){
  console.log("Goodbyee!");
}

// second example

sum(displayPage, 1, 2);
function sum(callback, x, y){
  let result = x+y;
  callback(result);
}

function displayConsole(result){
  console.log(result);
}

function displayPage(result){
  document.getElementById("myH1").textContent = result;
}
//  after the calculation processes, execute the callback and this time we are passing it to the displayPage function that we created.

// By using a callback we can ensure that a function executes after the processess are complete not before...

// DOM(Document Object Model) -; when a browser loads a webpage,it converts the HTML into a tree-like structure of objecs  called the DOM

// forEAch() = method used to iterate(loop through) over the elements of an array  and apply a specified function (callback)
//             array.forEach(callback)
//             element, index, array are provided
// eg:

let nuumbers = [1,2,3,4,5];

numbers.forEach(double);
nuumbers.forEach(display);
nuumbers.forEach(triple);
nuumbers.forEach(square);
nuumbers.forEach(cube);

function double(element, index, array){
    array[index] = element * 2;
}
function triple(element, index, array){
    array[index] = element * 3;
} 
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
function display(element){
    console.log(element);
}
// 

let fruits = ["apple","orange","banana","coconut"];
// fruits.forEach(uppercase);
fruits.forEach(lowerCase);
fruits.forEach(Capitallize);
fruits.forEach(display);
function uppercase(element,index,array){
  array[index] = element.toUpperCase();
}
function lowerCase(element,index,array){
  array[index] = element.toLowerCase();
}
function Capitallize(element,index,array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);                                     //method chaining
}                                                                                                        //element.slice(1);  -; This character create a substring of every character besides the first    
function display(element){
  console.log(element);
} 

// .map() = accepts a callback and applies that function to each element of an array, then return a new array
const numbbers = [1,2,3,4,5];

const squares = numbbers.map(square); //passing the function as a callback function
const cubes = numbbers.map(cube);
console.log(squares);
console.log(cubes);

function square(element){
  return Math.pow(element, 2);
}
function cube(element){
  return Math.pow(element, 3);
}
// 
// new map() example
const studeents = ["SPONGEBOB","CLARA","MARTIN","MELLISA"];
const studentsUpper = studeents.map(uppercase);
const studentslower = studeents.map(lowercase);
console.log(studentsUpper);
console.log(studentslower);

function uppercase(element){
  return element.toUpperCase();
}

function lowercase(element){
  return element.toLowerCase();
}
// example 3
const dates = ["2024-01-10", "2025-05-25", "2013-06-21","2018-07-12"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);
function formatDates(element){
    const parts = element.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}}`;
}
// filter() => creates a new array by filtering out elements

let numbeers = [1,2,3,4,5,6,7];
let evenNums = numbeers.filter(isEven);
let oddNums = numbeers.filter(isOdd);

function isEven(element){
  return element % 2 === 0;

}
function isOdd(element){
  return element !== 0;
}
// the filter method will take any values that return true(that is it will effectively filter out any elements that don't return true)
const ages = [16,17,18,18,19,20,60];
const adults = ages.filter(isAge);
const children = ages.filter(isChild);
console.log(adults);
console.log(children);
// Using filter method to filter out anybody that is under 18
function isAge(element){
  return element >= 18;
}
function isChild(element){
  return element < 18;
}

// example 3
const words = ["apple", "orange","banana","kiwi","pomegranate","coconut"];
const shortWords = words.filter(getShortWords);
const longwords = words.filter(getLongWords);
console.log(longwords);
console.log(shortWords);
// we want to filter words having length above 6
function getShortWords(element){
      return element.length <= 6;
}
function getLongWords(element){
  return element.length > 6;
}

// reduce() = reduce the elements of an array to a single value.

const prices = [5, 30, 10, 25, 15, 20];

const tootal = prices.reduce(sum);
console.log(`$${tootal.toFixed(2)}`);                         //toFixed(2) means it will fix to 2 decimal places

function sum(accumulator, element){           //function sum(previous,next){ return previous + next};
    return accumulator + element;             // function sum(0,5){return 0+5;}  so here 5 will be returned to the accumulator during next iteration
}                                             // so on the next iteration accumulator becomes 5 and element becomes 30  , next it will be 35
// we have 2 parameters
// accumulator -> previous
// next -> current

const grades = [75, 50, 90, 80, 65, 95];
 const maxximum = grades.reduce(getMax);
 const minnimum = grades.reduce(getMin);

 console.log(maxximum);
 console.log(minnimum);
 function getMax(accumulator,element){
    return Math.max(accumulator,element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

// function declaration = define a reusable block of code that performs a specific task



function hello(){
  console.log("Hello");        //we can assign a function to a variable or pass it as a value to another function
}
// function expression = a way to define functions as values or variables

const hello = function(){
  console.log("Hello");
}
// In javascript we can pass a function as a value

// setTimeout(hello, 3000);


// after 3000 milliseconds hello function will be executed
// instead of using a function declaration we pass a function expression as an argument to the setTimeout() function
// instead of callback we create a function and we will pass an entire function as an argument =>
setTimeout(function(){
  console.log("Hello")
}, 3000);
// i.e, In javaScript it is legal to pass an entire function as an argument or treat it as a value

const numbiers = [1,2,3,4,5,6];
const squaries = numbiers.map(square);
console.log(squaries);


// we will treat this function as a value
const nnums = [1,2,3,4,5.6];
const squat = nnums.map(function(element){
    return Math.pow(element, 2);
});
console.log(squat);

// // function declaration = define a reusable block of code that performs a specific task
// function expressions = a way to define functions as values or variables
// 1.Callbacks in asynchronous operations
// 2.Higher-order Functions 
// 3.Closures
// 4.Event Listeners

const nums = [1,2,3,4,5,6];
const squa = nums.map(function(element){
  return Math.pow(element, 2);
});
const cubees = nums.map(function(element){
  return Math.pow(element, 3);
});
const evenNo = nums.filter(function(element){
  return element % 2 === 0;                           //if the number is dividible by 0
});
const oddNo = nums.map(function(element){
  return element % 2 !==0;
});
const totaal = nums.reduce(function(accumulator, element){
  return accumulator + element;
})

console.log(totaal);
// Instead of passing function declaration and callback we can pass an entire function expression as an argument to these methods

// Arrow Functions = a consice way to write function expressions good for simple functions that you use only once.
//                   (parameters) => some code
function hello(){
  console.log("hello");
}
hello();
// function expression
  const hello = function(){
    console.log("hello");
  }
  hello();
  // Arrow function of above function expression be like  => 
const hello = () => console.log("Hello");  //we can also send some arguments to arrow function

// To write more than 1 sentence of code inside the arrow function, it should be enclosed within the curly braces.

const names = (name, age) => {
  console.log(`Hello ${name}`)
  console.log(`You are ${age} years old`)
};
names ("Felix",76);
// we have some parameters =>(arrow function) some code
// eg 2
setTimeout(hello, 3000);      //callback

function hello (){
  console.log("Hello");
}
// function expression
setTimeout(function(){
  console.log("Hello");
}, 3000);

// Arrow function
setTimeout( () => console.log("Hello"), 3000);


// Arrow function with map,filter and reduce

const numb = [1,2,3,4,5,6];

const squ = numb.map((element) => {
  return Math.pow(element, 2);
});                                                //ME
console.log(squ);

const nos = [1,2,3,4,5,6];
const sqa = nos.map((element) => Math.pow(element, 2));
const cubess = nos.map((element) => Math.pow(element, 3));
const evennum = nos.filter((element) =>{ 
  return element % 2 === 0
});
// const evennum = nos.filter((element) => element % 2 === 0);
const Oddnum = nos.filter((element) => element % 2 !== 0);
console.log(sqa); 
console.log(cubess);
console.log(evennum);
console.log(Oddnum);
// we don't neccessarily need a statement when we have only one statement.
const tot = nos.reduce((accumulator, element) =>
    accumulator = accumulator + element);
console.log(tot);
// OBJECT = A collection of related properties and / or methods                                     //properties are things that an object has
//          Can represent real world objects (people, products, places)                             //method is a function that belongs to an object 
//          object = {key:value,function()}

const person1 ={
  firstName: "Vasco",
  lastName: "degama",
  age: 30,
  isEmployed: false,
  sayHello: function(){
    console.log("Hi! I am Vascodegama!")
  },
  eat: function(){console.log("I am eating a burger...")},
}
// const person =                          objects need different names,here it is not possible to have person because it already exist(syntax error)

const person2 = {
  firstName: "Elon",
  lastName: "Musk",
  age: 68,
  isEmployed : true,
  // sayHello: function(){
  //   console.log("Hello! I am elon....")
  // }
  sayHello : () => console.log("Hello! I am Elon..."),
  // eat: function(){console.log("I am eating pizza")}
  eat: () => console.log("I am eating pizza...")
}

person2.sayHello();
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person1.eat();
person2.eat();

// this = reference to the object where THIS is used 
//        (the object depends on the immediate context)
//         person.name = this.name
const peson1 = {
  name: "Hermione",
  favFood: "Hamburger",
  sayHello: function(){console.log(`Hi! I am ${this.name}`)},
  eat: function (){console.log(`Heyy!${this.name} 's favourite food is ${this.favFood}`)}
}
peson1.eat();

console.log(this);  //It gives window obect 
// THIS keyword doesn't work with arrow functions

const pers2 = {
  name:"Patrick",
  favFood: "Broasted Chicken",
  eat: () => {console.log(`${this.name} is eating ${this.favFood}`)}
}
pers2.eat();
// O/p => this (undefined is eating  undefined) because window object doesn't have a favFood,name object

// CONSTRUCTORS in JavaScript
// special method for defining the properties and methods of object

const car1 = {
  make: "Ford",
  model: "Mustang",
  year: 2024,
  color: "red",
  drive: function(){console.log(`You drive the ${this.model}`)}
}
const car2 = {
  make: "Cheverolet",
  model: "Camaro",
  year: 2025,
  color: "blue",
  drive: function(){console.log(`You drive the ${this.model}`)}
}
const car3 = {
  make: "Dodge",
  model: "Charger",
  year: 2026,
  color: "silver",
  drive:function(){console.log(`You drive the ${this.model}`)}
}
//

function Car(make,model,year, color){          //or function Car(a,b,c,d){              //these are the arguments we receive when we construct a car object
// To assign these properties we are going to use "this" keyword
this.make = make,                                      //this.make = a,
this.model = model,                                    //this.model = b,
this.year = year,                                      //this.year = c,
this.color = color,                                    // this.color = d 
this.drive = function(){console.log(`You drive the ${this.model}`)}
}                                                   // }

// our car object is a reusable method where we can define the properties and methods of objects we create
// To use this constructor, create an instance of an object 
const car11 = new Car("Ford","Mustang",2024,"red");
const car12 = new Car("Chevrolet","camaro",2025,"blue");
const car13 = new Car("Dodge","Charger",2026,"black");

car11.drive();
car12.drive();
car13.drive();

/*console.log(car11.make);
console.log(car11.model);
console.log(car11.year);
console.log(car11.color);

console.log(car12.make);
console.log(car12.model);
console.log(car12.year);
console.log(car12.color);

console.log(car13.make);
console.log(car13.model);
console.log(car13.year);
console.log(car13.color);*/


// constructor is a special method for defining the properties and methods of objects

// class = (ES6 feature) provides a more structured and cleaner way to work with objects compared to traditional constructor functions 
// eg: static keyword, encapsulation,inheritance

class product{
  constructor(name,price){                      //constructor inside class => to use a constructor use the keyword constructor
    this.name = name;
    this.price = price;
  }
  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`price: $${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax){                           // As it is inside the class we don't need the class keyword
    return this.price + (this.price * salesTax);
  }
}
//
///////////// Inside a class function keyword is not required for function ///////////////
const product1 = new product("Shirt", 19.99);      //COnstructor is going to be constructed automatically but need to pass the arguments.
const product2 = new product("Pants",23.33);
const product3 = new product("tshirt",34.999);
const salesTax = 0.05;
//

product1.displayProduct();
product2.displayProduct();
product3.displayProduct();
const totall = product1.calculateTotal(0.05);
console.log(`Total price(with tax):$${totall.toFixed(2)}`);
const ttotal = product3.calculateTotal(0.05);
console.log(`Total  price(with tax):$${ttotal.toFixed(2)}`);


// static = keyword that defines properties or methods that belong to a class itself  rather than the the objects created from that class (class owns anything static, not the objects)

class MathUtil{
  static PI = 3.14159;

  static getDiameter(radius){
    return radius * 2;                     //method
  }
  static getCircumference(radius){
    return 2 * this.PI * radius;           //"this" here MathUtil
  }
  static getArea(radius){;
    return this.PI * radius * radius;
  }
}
console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
//  static property is accessed by its class
// Anything declared as static belongs to the class itself(not any objects created from that class)
// mix of regular properties and methods ,static properties and methods
class User{
  static userCount = 0;     //To track the amount of users we create
  constructor(username){
    this.username = username;
    User.userCount++;
  }
  static getUserCount(){
    console.log(`There are ${User.userCount} users on online`)         //static method
  }
  sayHello(){
    console.log(`Hello,my username is ${this.username}`);             //regular method
  }
}
// user objects
const user1 = new User("Hermione");
const user2 = new User("Granger");
const user3 = new User("Harry");


user1.sayHello();
user2.sayHello();
user3.sayHello();
console.log(user1.username);
console.log(user2.username);
console.log(user3.username);
User.getUserCount();
// constructor is automatically called when we instantiate a new object
// Inheritance =allows a new class to inherit properties and methods from an existing class (parent -> child)
//              helps with code reusability
// eg:
class Animal{
  alive = true;
  eat(){
    console.log(`This ${this.name} is eating`);
  }
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}
class Sloth extends Animal{
  name ="sloth";
  run(){
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal{
  name = "fish";
  swim(){
    console.log(`This ${this.name} is swimming`);
  }
}
class Hawk extends Animal{
  name = "hawk";
  fly(){
    console.log(`This ${this.name} is flying`);
  }
}
const sloth = new Sloth();
const fishy = new Fish();
const hawky = new Hawk();
console.log(fishy.alive);
console.log(sloth.alive);
console.log(hawky.alive);
sloth.sleep();
sloth.eat();
sloth.run();
fishy.sleep();
fishy.eat();
fishy.swim();
hawky.sleep();
hawky.eat();
hawky.fly();
// All child classes inherited the preoperties and methods of parent class
// It provides code reusability

// children can also have their own unique properties and methods too
// eg: sloth can run but but fish and hawk can't run so it only belongs to sloth class

//         this refers to this object 
//         super refers to the parent

class Animal{
  constructor(){

  }
}
class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super();
    this.name = name;                           //before we are using the "this" keyword we have to call the constructor of the parent the super class
    this.age = age;
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super();
    this.name = name;
    this.age = age;
    this.swimSpeed = this.swimSpeed;
  }
}
class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super();
    this.name = name;
    this.age = age;
    this.flySpeed = flySpeed;
  }
}

const rabbitt = new Rabbit("rabbo",1,25);
const fishh = new Fish("fishy",2,12);
const hawkk = new Hawk("hawky",3,50);
// one of the advantage of using constructor is that if there is any properties that the children all share in common we can send them to the constructor of the parent


// DRY ===> DON'T REPEAT YOURSELF
class Animal{
  constructor(name,age){
    this.name = name;
    this.age = age;
  }
}
// here we need to pass the name and age arguments inside the super keyword.
class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
}
class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
}
class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super(name, age);
    this.flySpeed = flySpeed;
  }
}
// the properties that are in common with the child classes, it can be send to the parent constructor
// It helps code reusability

const rabbit = new Rabbit("rabbo",2,25);
const fish = new Fish("fishy",2,12);
const hawk = new Hawk("hawky",3,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);
// 1). by using the "super" keyword we can instead of every single time for each child we write it in one place and reuse it.
// 2). Another use of "super" keyword is that we can extend a method from the parent

// so we are creating a move method in the animal class
// and within each subclasses we extend the move method of parent animal.
class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  move(speed){
    console.log(`The ${this.name} moves at a speed of ${speed} mph`)
  }
}
class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
  run(){
    console.log(`This ${this.name} can run`);
    // to refer to the parent class we use super keyword and use the parent's move method with the argument(speed)
    super.move(this.runSpeed);
  }
}
class Fish extends Animal{
  constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  swim(){
    console.log(`this ${this.name} can swim`);
    super.move(this.swimSpeed);
  }
}
class Hawk extends Animal{
  constructor(name, age, flySpeed){
    super(name,age);
    this.flySpeed = flySpeed;
  }
  fly(){
    console.log(`This ${this.name} can fly`);
    super.move(this.flySpeed);
  }
}

const rrabbit = new Rabbit("rabbo",1,25);
const ffish = new Fish("fishy",2,12);
const hhawk = new Hawk("hawky",3,50);

hhawk.fly();
ffish.swim();
rrabbit.run();

// getter = special method that makes a property readable
// setter = special method that makes a property writeable

// validate and modify a value when reading/writing a property
// It helps with validation when creating an object or updating one of its properies

class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
}
const rectangle = new Rectangle(-100000, "pizza");
// we don't want to enter in garbage value like negative or sting like this, we are expecting positive values
// getters and setters ensure it

console.log(rectangle.width);
console.log(rectangle.height);

// setters
class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  set width(newWidth){                          //here the underscore refers that it is a private property
    //                      this private property of width is different tham our standard width property
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.error("Width must be a positive number");
    }
  }
  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("Height must be a positive number");
    }
  }
}
const rectanglee = new Rectangle(12,27);
// By using Setters we can update those values later
rectangle.width = 5;                                          
rectangle.height = 6;
// rectangle.width = "pizza";
// rectangle.height = -100000;
// Even if we try to give negative,or string like above, then the error will be showed again and the object retains its initial values that previously assigned it

console.log(rectanglee.height);
console.log(rectanglee.width);
// O/p => undefined
// They are writable via Getters

class Rectangle{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }
  set width(newWidth){                          //here the underscore refers that it is a private property
    //                      this private property of width is different tham our standard width property
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.error("Width must be a positive number");
    }
  }
  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("Height must be a positive number");
    }
  }
  // Getters
  // With getters we can add additional logic (here toFixed is used)
  get width(){
    return `${this._width.toFixed(1)} cm`;
  }
  get height(){
    return `${this._height.toFixed(1)} cm`;
  }
// With Getters we can even use  the property accessor that dot to access a property that doesn't neccessarily exist
  get area(){
    return `${(this._width * this._height).toFixed(1)} cm^2`;
  }
// here area is not found within the constructor but we can access it as if it was a property with a getter
}
const rectangl = new Rectangle(3,4);

console.log(rectangl.width);
console.log(rectangl.height);
console.log(rectangl.area);

class Persan{
  constructor(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // here we need to validate this input before assigning the properties,that's why we use setters
  set firstName(newFirstname){
    if(typeof newFirstname === "string" && newFirstname.length > 0){
      this._firstName = newFirstname;
    } 
    else{
      console.error("First name must be a non-empty string");
    }
  }
  set lastName(newLastname){
    if(typeof newLastname === "string" && newLastname.length > 0){
      this._lastName = newLastname;
    }
    else{
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    }
    else{
      console.error("Age must be a non-negative number");
    }
  }
} 
const persan = new Persan(420,69,"pizza");


console.log(persan.firstName);
console.log(persan.lastName);
console.log(persan.age);

// getters
class Persaan{
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstname){
    if(typeof newFirstname === "string" && newFirstname.length > 0){
      this._firstName = newFirstname;
    }
    else{
      console.error("Firstname must be a  non-empty string");
    }
  }
  set lastName(newLastname){
    if(typeof newLastname === "string" && newLastname.length > 0){
      this._lastName = newLastname;
    }
    else{
      console.error("Last name must be a non-empty string");
    }
  }
    set age(newAge){
      if(typeof newAge === "number" && newAge >= 0){
        this._age = newAge;
      }
      else{
        console.error("Age must be a non-negative number");
      }
    }
 
}
const persen = new Persaan("Peter","Parker",26);
// Now it become only undefined as we didin't use the getter


console.log(persen.firstName);
console.log(persen.lastName);
console.log(persen.age);

// getters
class Persaan{
  constructor(firstName,lastName,age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  set firstName(newFirstname){
    if(typeof newFirstname === "string" && newFirstname.length > 0){
      this._firstName = newFirstname;
    }
    else{
      console.error("Firstname must be a  non-empty string");
    }
  }
  set lastName(newLastname){
    if(typeof newLastname === "string" && newLastname.length > 0){
      this._lastName = newLastname;
    }
    else{
      console.error("Last name must be a non-empty string");
    }
  }
  set age(newAge){
    if(typeof newAge === "number" && newAge >= 0){
      this._age = newAge;
    }
    else{
      console.error("Age must be a non-negative number");
    }
  }
// getters
  get firstName(){
    return this._firstName;
  }
  get lastName(){
    return this._lastName;
  }
  get age(){
    return this._age;
  }
  get fullName(){
    return this._firstName +" "+ this._lastName;        //by using getter ,we can even use it when we have no property for fullName...
  }

}
const persaan = new Persaan("Peter","Parker",26);
// Now it become only undefined as we didin't use the getter


console.log(persaan.firstName);
console.log(persaan.lastName);
console.log(persaan.age);
console.log(persaan.fullName);
// By using both Setters and Getters we can validate and modify a value when reading or writing a property
// destructuring = extract values from arrays and objects, then assign them to variables in a convinient way
//     []        = to perform array destructuring
//     {}        = to perform object destrucuring
//               5 examples

//                 Example 1
// SWAP THE VALUE OF TWO VARIABLES
let ea = 1;
let eb = 2;

[ea,eb] = [eb,ea];   // left hand side we are using destructuring ,on the right hand side we are creating an array

console.log(ea);
console.log(eb);

//             Example 2
// SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red","green","blue","black","white"];
[colors[0], colors[4]]=[colors[4], colors[0]];       //right hand side => destructuring, left handside =>new array
console.log(colors);

//                   Example 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colours = ["red","green","blue","black","white"];
const [firstColor, secondColor, thirdColor,...extraColors] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
// Array destructuring with rest parameters
console.log(extraColors);



//                    Example 4
// EXTRACT VALUES FROM OBJECTS

const person3 ={
  firstName: "Peter",
  lastName: "Parker",
  age: 30,
  job:"Life saver"
}

const{firrstName, lastName, ahge, job} = person3;  //This is how we extract values
console.log(firrstName);
console.log(lastName);
console.log(ahge);
console.log(job);

const person4 = {
  firsName: "Mellisa",
  lasName: "Johnson",
  agfe: 34,
}
const{firsName, lasName, agfe, joob="unemployed"} = person4; //Values extracted even can have default values
console.log(firsName);
console.log(lasName);
console.log(agfe);
console.log(joob);

//                 Example 5
// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({fName,lName,AGe,Job="unemployment"}){     //As there is a value then it will not give "unemployment" output
  console.log(`name ${fName} ${lName}`);
  console.log(`age : ${AGe}`);
  console.log(`Job: ${Job}`)
}
const person5 = {
  fName: "peter",
  lName: "parker",
  AGe: 30,
  Job:"Doctor",
}

displayPerson(person5);
// we can pass an object to a function and destructure when it it is passed in 

// NESTED OBJECTS = Objects inside of other Objects.
//                  Allows you to represent more complex data structures.
//                  Child Object is enclosed by a Parent Object


//                   Person{Address{}, ContactInfo{}}
//                   ShoppingCart{keyboard{}, Mouse{}, Monitor{}}

// Each of the child object would have their own properties and methods
// example
const person ={
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate","jellyfishing","cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int.Water"
  }                                          //objects can also contain arrays 
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
// console.log(person.hobbies);                   returns whole array
console.log(person.hobbies[1]);              //To get specific element

console.log(person.address);          //returns whole object
// To access a property within a nested object we have to use the property accessor(.)
// To get a specific element from an object -;
console.log(person.address.street);
console.log(person.address.city);
console.log(person.address.country);
// If you have to loop through the properties of a nested object we can write a "for" loop like this

for(const property in person.address){
  console.log(person.address[property]);
}
// In this example Address is the child object of Person object

class Person{
  constructor(name, age, ...address){
    this.name = name;
    this.age = age;
    this.address = new Address(...address);             //we are going to call the constructor of the adress class and pass in our address
  }
}
class Address{
  constructor(street, city, country){
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const peerson1 = new Person("Peter",28,
         "124 Conch St.","Bikini Bottom","Int.Waters");
const peerson2 = new Person("parker",36,
          "128 Conch St.","Bikini Bottom","Int.waters");
const peerson3 = new Person("Jane",25,
          "126 Conch St.","Bikini Bottom","Int.Waters");

console.log(peerson1.address.country);
console.log(peerson1.address.city);
console.log(peerson1.address.street);
console.log(peerson1.name);

console.log(peerson3.address.country);
console.log(peerson3.address.city);
console.log(peerson3.address.street);

// Array of objects

const fruits = [{name: "apple", color: "red", calories: 95},
  {name: "orange", color:"orange", calories: 45},
  {name: "banana", color:"yellow", calories:105},
  {name: "coconut",color:"white",calories: 159},
  {name: "pineapple",color:"yellow",calories:37}
];
// accessing an element in the arrray of objects

console.log(fruits[4].name);
console.log(fruits[1].calories);
console.log(fruits[2].color);
// To add a new object we can use the push method
fruits.push({name: "grapes",color:"purple",calories:62});
console.log(fruits);
// to remove an element in the array of obects
fruits.pop();
console.log(fruits);
// splice will remove the elements at certain indices
// fruits.splice(1,2); 
// console.log(fruits);
//      forEach()
// to loop through the elements of the array
fruits.forEach(fruit => console.log(fruit));
// to get one of the property
fruits.forEach(fruit => console.log(fruit.color));


//                    Map()
const fruitNames = fruits.map(fruit =>fruit.name);
const fruitColors = fruits.map(fruit =>fruit.color);
console.log(fruitNames);
console.log(fruitColors);

// filter
const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow"); //(fruit) parenthesis is not necessary as there is only one element.
console.log(yellowFruits);
const lowcalorieFruits = fruits.filter(fruit => fruit.calories < 100);
console.log(lowcalorieFruits);
const  highcalorieFruits = fruits.filter(fruit => fruit.calories > 100);
console.log(highcalorieFruits);

// reduce() [return a single value]
// return the object with greatest amount of calories
const maxFruitCalorie = fruits.reduce((/*(accumulator)*/max,/*(element) */fruit) => fruit.calories > max.calories? fruit : max);
console.log(maxFruitCalorie);

const leastFruitcalorie = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit: min);
console.log(leastFruitcalorie);

// SORT()= method used to sort elements of an array in place.
//        Sorts elements  as strings in lexicographic order, not alphabetical
//        lexicographic = (alphabet + numbers + symbols) as strings

let vegs = ["carrot", "onion","cucumber","lettuce"];
vegs.sort();

console.log(vegs);

let numbi = [1,10,2,9,3,8];
numb.sort();
console.log(numbi);
// O/p => [ 1, 10, 2, 3, 8, 9 ] (we are not sorting this array numerically ,it is based on lexicographically...)
// we treating this numbers as strings 
// For sorting numbers -;

let nus = [1,10,2,9,3,8,4,7,5,6];
  //Inside of the sort method we have to write a custom comparison function (this is normally a callback,we can write a functionexpression or even better an arrow function)
nus.sort((a,b) => a-b);    //  function a-b will return either  a negative zero or positive value depending on the values we are examining
// The sort method will sort those values  depending on what value returned is and array get sorted  
console.log(nus);


//  For reverse order
nus.sort((a,b) => b-a);
console.log(nus);

// Obects can be dorted by a given property
const people = [{name: "peter", age: 30, gpa: 3.0},
                {name: "parker",age:25, gpa:1.5},
                {name: "mary", age: 52, gpa:3.0},
                {name: "Jane", age: 62, gpa:4.0}
              ];
              // Sorting based on the age 
people.sort((a,b) => a.age - b.age);
console.log(people);

people.sort((a,b) => a.gpa - b.gpa);
console.log(people);

// if we want to sort by a property that contains a string within an object -;
// There is a formula  =>
people.sort((a,b) => a.name.localeCompare(b.name));
// This statement will examine two strings for lexicographic order 

//  DATE OBJECTS  = objects that contain values that represent dates and times 
//                  These date objects can be changed and formatted


// const date = new Date();
// console.log(date);

// Date(year, month, day, hour, minute, second, ms)
// const date = new Date(2024, 0, 1, 2, 3, 4, 5);
// console.log(date);


// passing a string representation of time is also valid to the date object

const date =new Date("2024-01-02T12:00:00Z");
console.log(date.toString());

// use toString() or localeString() to show the in this format -; Tue Jan 02 2024 17:30:00 GMT+0530 (India Standard Time)

const datee = new Date();
const year = datee.getFullYear();   //To get the year
const month = datee.getMonth();      // To get the month(if this is july we will get the output as 6)
const daey = datee.getDate();           // To get the day(if this is saturday we will get the ouput as 5)
const hour = datee.getHours();
const minutes = datee.getMinutes();
const seconds = datee.getSeconds();
const dayOfWeek = datee.getDay();
console.log(year);
console.log(month);
console.log(daey);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(dayOfWeek);

const dater = new Date();
dater.setFullYear(2024);      //setting date with a method
dater.setMonth(0);
dater.setDate(1);
dater.setHours(2);
dater.setMinutes(3);
dater.setSeconds(5)
console.log(dater);

// Comparison of dates
// const date1 = new Date("2023-12-31");
// const date2 = new Date("2023-01-01");

// if(date2 > date1){
//   console.log("HAPPY NEW YEAR!");
// }

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-01-01");

if(date2 > date1){
  console.log("HAPPY NEW YEAR!");
}

// closure = A function defined inside of another function,
//           the inner function has to access to the variables and scope of the outer function
//           Allow for private variables and state maintenance
//           Used frequently in JS frameworks : React, Vue, Angular
function outer(){
  let message = "Hello";
  function inner(){              //here the inner function has access to everything within the outer function
    console.log(message);
  }
}
outer();            //O/p => nothing


// if we want to call an inner function from within the outer function we need to call it somewhere inside the outer function...

function outer(){
  let message = "Hello";
  function inner(){
    console.log(message);
  }
  inner();
}
message = "goodbye"  // it doesn't work as it is not in the outer scope
outer();
// benefit of using closure is that any variables are considered private i.e, we can encapsulate varibles and make them private

// example 2

function increment(){
  let count = 0;
  count++;
  console.log(`Count increased to ${count}`);
}
increment();
increment();
increment();
// here we are resetting each time we call this function
// but by using a closure we can have state maintenance and remember where this variable was previously

// let count = 0;                  here anybody can access this variables
count = 1000000;

function increment(){
  count++;
  console.log(`Count increased to ${count}`);
}
increment();
increment();
increment();
increment();

// A closure maintains the state of a variable and makes it private
// so we will enclose the whole inside a function
function createCounter(){
  let count = 0;
  function increment(){
    count++;
    console.log(`Count increased to ${count}`);
  }
  function getCount(){
    return count;
  }
  //return {increment:increment}
  return{increment,getCount};       //we can use the function name as the property    
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.increment();
// here the closuremaintains it's state

console.log(`The current count is ${counter.getCount()}`);

// Example
let score = 0;

function increaseScore(points){
  score += points;
  console.log(`+${points}pts`);
}
function decreaseScore(points){
  score -= points;
  console.log(`-${points} pts`);
}
function getScore(){
  return score;
}
score = 1000000;                         

increaseScore(5);
increaseScore(6);
decreaseScore(3);
console.log(`The final score is ${getScore()}pts`);

// for some security we should enclose the code  within a closure
function createGame(){
  let score = 0;
  function increaseScore(points){
    score += points;
    console.log(`+{points}pts`);
  }
  function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
  }
  function getScore(){
    return score;
  }
  return {increaseScore,decreaseScore,getScore}
}
const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);
console.log(`The final score is ${game.getScore()} pts`);

// setTimeout function in javascript
// setTimeout() = function in javaScriot that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)
//                Times are approximate (varies bcript runtime env.)
//                setTimeout(callback, delay);

// example

function sayHello(){
  window.alert("hello");
}
setTimeout(sayHello, 3000);

// Anonymous function
setTimeout(function(){window.alert("Hello")}, 3000);

// Arrow Function
setTimeout(() => window.alert("Hellooo"), 3000);

// clearTimeout(timeoutId) = can cancel a timeout before it triggers

const timeoutId = setTimeout(() => window.alert("hello"), 3000)
// to clear this timeout use clearTimeout but we have to pass that timeoutId along with it
clearTimeout(timeoutId);


let timeoutIdd;
function startTimer(){
  timeoutIdd = setTimeout(() => window.alert("Hellow"),3000);
  console.log("started");
}
function clearTimer(){
  clearTimeout(timeoutIdd);
  console.log("cleared");
}



//////////////      MathUtil             ///////////////
// ES6 Module = An external file that contains reusable code that can be imported into other JavaScript files.
//              Write reusable code for many different apps.
//              Can contain variables, classes, functions... and more 
//              Introduced as part of ECMAScript 2015 update
// Example


// to import a module we have to make script type ="module" in html

import {Pi,getArea,getCircumference,getVolume} from './mathUtil.js' ;
 // 
// we are using object destructuring 
// write the elements that we want to import inside the destructuring 

console.log(Pi);
const circumfereence = getCircumference(10);
const area = getCircumference(10);
const volume = getVolume(10);

console.log(`${circumfereence.toFixed()}cm`);
console.log(`${area.toFixed(2)} cm^2`);
console.log(`${volume.toFixed(2)}cm ^3`);


// synchronous  = Executes line by line consecutively in a sequential manner 
//                 Code that waits for an operation to complete


// asynchronous = Allows multiple operations to be performed concurrently without waiting 
//                Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data)
//                Handled with : Callbacks,Promises, Async/Await


// Synchronous code

// console.log("Task 2");
// console.log("TAsk 3");
// console.log("TAsk 4");

// Asynchronous Code
setTimeout(() => console.log("Task 1"),3000)

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// 
function func1(callback){
  setTimeout(() =>{ console.log("Task 1");
    callback()}, 3000);                                            //here task 2,3,4 are followed by task 1
}

function func2(){
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}
func1(func2);
// After task 1 is complete we invoke the callback to func2

// Using callbacks is one method for handle asynchronous code


// Error = An object that is created to represent an problem that occurs often with user inout or establishing a connection
console.lag("Hello");   //uncaught  TypeError

console.log("You have reached the end!");
// interrupt the normal flow of the program
// Errors can be -;
/*
.Network Errors
.Promise Rejection
.security Errors

*/
// Errors can be handled by using try,catch and finally blocks

// try {} => Enclose code that might potentially cause an error
// catch {} => Catch and handle any thrown Errors from try{}
// finally {} => (optional) Always executes. Used mostly for clean up ex.close files, close connections, release resources

try{
  console.log(x);
}
catch(error){
  console.error(error);
}
console.log("You have reached the end!");
// for catching errors use console.error

// finally block executes regardless of the error

// CLOSE FILES
// CLOSE CONNECTIONS
// RELEASE RESOURCES

try{
  console.log("Hello");
}
catch(error){
  console.error(error);
}
finally{
  console.log("This always executes");
}
console.log("You have reached the end");
const dividend = window.prompt("Enter a dividend: ");
const divisor = window.prompt("Enter a divisor: ");

const reseault = dividend / divisor ;
console.log(reseault);


// if we divide 1 /0 => infinity

try{
  const dividend = Number(window.prompt("Enter a dividend:"));
  const divisor = Number(window.prompt("Enter a divisor"));

  if(divisor == 0){
    throw new Error("You can't divide by zero");
  }
  if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor ;
  console.lag(result);
}
catch(error){
  console.error(error);
}
console.log("You have reached the end!");

// Callback Hell = Situation in javascript where callbacks are nested within other callbacks to the degree where the code is difficult to read.
// Old pattern to handle asynchronous functions.Use promises + async/await to avoid Callback Hell

function task1(callback){
  setTimeout(() =>{
    console.log("Task 1 complete");
    callback();
  },2000);
 
 }
 function task2(callback){
  setTimeout(() => {
    console.log("task 2 complete");
    callback();
  },1000)
 }
 function task3(callback){
  setTimeout(()=>{
    console.log("task 3 complete");
    callback();
  },2000)
}
 function task4(callback){
  setTimeout(()=> {
    console.log("task 4 complete");
    callback();

  },1500)
 }

 task1(()=>{
  task2(()=>{
    task3(()=>{
      task4(()=> console.log("All tasks complete"))
    })
  })
 })

 console.log("All task complete");
//  To make it synchronous each of these accept a callback
// Promise = An Object that manages asynchronous operations.
// Wrap a promise Obhect around {asynchronous code}
// "I promise to return a value"
//  PENDING -> RESOLVED or REJECTED
// new Promise ((resolve, reject)=>{asynchronous code})

// Do chores in order

// 1.Walk the dog
// 2.clean the kitchen
// 3.Take out the trash

function walkDog(callback){
  setTimeout(() =>{
    console.log("You walk the dog");
    callback();
  },1500);
}
function cleanKitchen(callback){
  setTimeout(()=>{
    console.log("You clean the kitchen");
    callback();
  },2500);
}
function takeoutTrash(callback){
  setTimeout(()=>{
    console.log("You take out the trash");
    callback();
  },500);
}
//callback hell
walkDog(()=> {
  cleanKitchen(()=>{
    takeoutTrash(()=> console.log("You finished all the chores"));
  });
});

// By instead of callbacks we use promise
// At the end of each object we will return an object



// sometimes get rejected
function walkDog(){
  return new Promise((resolve,reject) =>{
    setTimeout(()=>{

      const dogwalked = true;
      if(dogwalked){
        resolve("You walk the dog");
      }
      else{
        reject("you didn't walk the Dog");
      }
    },1500);
  });
}

function cleanKitchen(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{

      const kitchenClean = true;
      if(kitchenClean){
        resolve("You cleaned the kitchen");
      }
      else{
        reject("You didin't clean the kitchen");
      }
  },2500)
});
}

function takeTrash(){
  return new Promise((resolve,reject)=>{
    setTimeout(() =>{
      const takeTrash = false;
      if(takeTrash){
        resolve("You take the trash");
      }
      else{
        reject("You didn't take the trash");
      }
    },500);
  });
}
walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeTrash()})
         .then(value =>{console.log(value); console.log("You have finished all the chores")})
         .catch(error => console.error(error));


         // Async / Await = Async = makes a function return a promise 
//                 Await = makes an async function wait for a promise

//                 Allows you write asynchronous code in a syncronous manner
//                 async doesn't have resolve or reject parameters 
//                 Everything after Await is placed in an event queue

// a function declared with an async returns a promise ,that promise doesn't resolve or reject
// async works together with await, by using these 2 keywords together when calling all these asynchronous in order we don't need method chain the statements
async function walkDog(){

}
// there is a more synchronous manner in which we can write the method chaining
 function walkDog(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const dogwalked = false;
      if(dogwalked){
        resolve("You walk the dog");
      }
      else{
        reject("You didn't walk the dog");
      }
    },1500)
  });
}
function cleanKitchen(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const cleankitchen = true;
      if(cleankitchen){
        resolve("You clean the kitchen")
      }
      else{
        reject("You didn't clean the kitchen");
      }
    },2500)
  });
}
function takeTrash(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const takeTrash = true;
      if(takeTrash){
        resolve("You take the trash");
      }
      else{
        reject("You didn't take the trash");
      }
    },500)
  });
}
async function doChores(){
  const walkdogResult = await walkDog();
  console.log(walkdogResult);

  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);

  const takeoutTrashResult = await takeTrash();
  console.log(takeoutTrashResult);

  console.log("You finished all the chores")
}

doChores()
// await is only valid in async function
// await makes a async function wait for a promise before continuing it

async function doChores(){
  try{
    const walkdogResult = await walkDog();
    console.log(walkdogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult);

    const takeoutTrashResult = await takeTrash();
    console.log(takeoutTrashResult);

    console.log("You have finished all the chores")
  }
  catch(error){
    console.error(error)
  }
}
// DOM = Document Object Model is an OBJECT in JavaScript
//       Object{} that represents the page you see in rhe web browser and provides you with an API to interact with it.
//       Web browser constructs the DOM when it loads an HTML document, and structures all the elements in a tree like representation.
//       JavaScript can access the DOM to dynamically change the content, structure, and style of a web page.

// documment is an object it contains properties and methods and other nested objects
// document.title = "document";
// document.body.style.backgroundColor = "black";           // even we have css we are stilll able to dynamically change the background color
// console.log(document);



// const username = "";
// const welcomeMsg = document.getElementById("welcome -msg");
// welcomeMsg.textContent += username === "" ? `Guest` : username ;



// Element Selectors = Methods used to target and manipulate HTML elements
// They allow you to select one or multiple HTML elements 
// from the DOM(Document Object Model)
// These are the built-in  methods of DOM

// 1. document.getElementById()           //ELEMENT OR NULL
// 2.document.getElementsClassName()     // HTML COLLECTION
// 3.document.getElementByTagName()     //HTML COLLECTION
// 4.document.querySelector            // ELEMENT OR NULL
// 5.document.querySelectorAll()     //NODELIST



// 1. document.getElementById()  
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";
console.log(myHeading);
// getElementById returns a single element if it finds it or ,null if it doesn't.


// 2.document.getElementsClassName()
// It is similar to an array but it is limited in the built - in methods

const fruits = document.getElementsByClassName("fruits");          //it gives an HTML COLLECTION,HTML collections are iterable
// fruits[2].style.backgroundColor = "yellow";

// To iterate the backgroundColor through the elements we use enhanced for loop 
for(let fruit of fruits){
  fruit.style.backgroundColor = "yellow"
}
// HTML COLLECTIONs don't have a built - in for each method
// we can only typecast the HTML collection as an array
// it has a limited amount of utility methods
Array.from(fruits);         //this is how we typecast the HTML COLLECTION as an array
// HTML collections don't have a forEach Method,but after type casting it -;
const fruits = document.getElementsByClassName("fruits");
Array.from(fruits).forEach(fruit =>{
  fruit.style.backgroundColor = "yellow";
});
// If we want to use array method with this HTML collection then you would want to typecast it to an array

// 3.getElementsByTagName()
// we can select one of the element from the unordered list by using getElementsByTagName()

// const liElements = document.getElementsByTagName("li");
// h4Elements[0].style.backgroundColor = "yellow";  //backgroundColor will be applied to Root Vegetables
// for(let h4Element of h4Elements){
//   h4Element.style.backgroundColor = "yellow";
// }


// for(let liElement of liElements){
//   liElement.style.backgroundColor = "lightgreen";
// }


// if we want to change the background color of these using foreach method
// typecast HTML COLLECTION of H$ elements as an array and method chain to use forEach method
const h4Elements = document.getElementsByTagName("h4");
Array.from(h4Elements).forEach(h4Element =>{
  h4Element.style.backgroundColor = "yellow";
});

const liElements = document.getElementsByTagName("li");

Array.from(liElements).forEach(liElement =>{
  liElement.style.backgroundColor = "lightgreen";
});

// 4.document.querySelector()                      
// returns first matching element , or null if it doesn't find any matches 

// const element = document.querySelector();
// query selector will return the first match
// const element = document.querySelector(".fruits");

// element.style.backgroundColor = "yellow";
// here O/p => Apple  which is the first match

// if we select list item that would select beets

// const  element = document.querySelector("li");             //It will selsct first li item
// element.style.backgroundColor = "yellow";

// const element = document.querySelector("ul");               //It will select first unordered list
// element.style.backgroundColor = "yellow";

const element = document.querySelector("ol");
console.log(element);                                       // as there is no matching element it returns null

// 5.document.querySelectorAll()                        // NODELIST
// since node lists are static they do not update automatically in the DOM ,HTML collections are live they will
// select all elements that have same class

const foods = document.querySelectorAll("li");
console.log(foods);             
// foods[1].style.backgroundColor = "yellow";

// NODELIST do have a built -in forEach() method ,so we don't need to typecast it aas an array

foods.forEach(food => {
  food.style.backgroundColor = "yellow";
});

// combination of getElementById and querySelector


// DOM NAVIGATION      =  The process of navigating through the structure of an HTML document using JavaScript.


// .firstElementChild
// .lastElementChild
// .nextELementChild
// .previousElementSibling
// .parentElement
// .children

// firstelementChild = they each have their own children (a child element)
// secondElementChild = any element that is found within the parent element
// In the HTML  <ul id="fruits"> is the firstElementChild
// list of fruit has 3 children -; Apple,orange,banana

// unordered sets of fruit is a parent
//  In which apple will be the firstborn
// orange will bw the middle child
// Banana will be the lastborn

// ----------.firstElementChild--------------
const elementt = document.getElementById("fruits");
const firstChild = elementt.firstElementChild;
firstChild.style.backgroundColor = "yellow";
// It will select apple which is the firstborn of fruits id

const elem = document.getElementById("dessers");
const firstt = elem.firstElementChild;
firstt.style.backgroundColor = "green";

// if we use querySelectorAll

const ulElements = document.querySelectorAll("ul");   //This will return a nodelist
// nodelist do have their own built-in forEach method
ulElements.forEach(ulElements => {
  const firstChild = ulElements.firstElementChild;
  firstChild.style.backgroundColor = "blue"
});
// This is how we can use querySelectorAll to select all of the first children of all matching elements

//  To get lastborn
// -------------.lastElementChild----------------

// const lastt = document.getElementById("dessers");
// const lastChild = lastt.lastElementChild;
// lastChild.style.backgroundColor = "yellow";     // it will select Ice Cream

// const las = document.getElementById("fruits");
// const last = las.lastElementChild;
// last.style.backgroundColor = "green"

// const ulElements = document.querySelectorAll("ul");

// ulElements.forEach(ulElement =>{
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = "purple";
// })
// ----------------------------nextElementSibling------------------
const elen = document.getElementById("apple");
const nextSibling = elen.nextElementSibling;
nextSibling.style.backgroundColor = "red"            //orange will be red

// There is no nextElement for mango

const wen = document.getElementById("fruits");
const nextSib = wen.nextElementSibling;
nextSib.style.backgroundColor="red"      // vegetables will be grey


// --------------------------------previousElementSibling----------------------
// It will select the prevoius element

const pre = document.getElementById("Orange");
const prev = pre.previousElementSibling;
prev.style.backgroundColor = "orange";


// ---------------------------ParentElement-------------------
const access = document.getElementById("Cake");
const parent = access.parentElement;
parent.style.backgroundColor = "pink";         //here the unordered list "dessers" will be the parent

//---------------------chidren----------------------------------
const en = document.getElementById("fruits");
const childrren = en.children;
console.log(childrren);

// By accessing the children of an element that returns an HTML COLLECTION(has 3 list item elements)

Array.from(children).forEach(child =>{
  child.style.backgroundColor ="yellow";          //3 children of the corresponding class is selected
});


// it can be done using index number
// like highlighting middle element
const elek = document.getElementById("dessers");
const middle = elek.children;
middle[1].style.backgroundColor = "gold";


// Mouse events in javascript

// eventListeners = Listen for specific events to create interactive web pages
//                  events: click, mouseover(when hover over something), mouseout(when hover over something and leave that element)
//                  to add an eventlistener => .addEventListener(click,changeColor(to change the color))
//                  .addEventListener(event, callback);
//                  .addEventListener(event, anonymous function);
//                  .addEventListener(event, arrow function);


const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton")

function changeColor(event){   //event is an object  provided automatically by the web browser when somthing happens
  event.target.style.backgroundColor = "tomato";
  event.target.textContent =  "OUCH!";


}
  // target is what we clicked on ,there is information about out target within the event object
  // console.log(event)
// when clicks a pointer event occurs
// }
// myBox.addEventListener(event, callback)
myBox.addEventListener("click", changeColor);
// we don't need to explicitly pass in an event object with the call back changeColor

// we don't necessarily need to pass in a call back we can also pass in an anonymous function / arrow function

// using anonymous function for eventListener


// myBox.addEventListener("click", function(event){
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH!";
// });



// Arrow Function

// myBox.addEventListener("click", event => {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUch!";
// })

// mouseover

myBox.addEventListener("mouseover",event =>{
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Don't do it";
});

// mouseOut
myBox.addEventListener("mouseout",event =>{
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click Me";
})

// Adding Event Listener to myButton

myButton.addEventListener("click",event =>{
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "Don't Do It";
});

myButton.addEventListener("mouseover", event =>{
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "OUCH!"
});
myButton.addEventListener("mouseout",function(event){
  event.target.style.backgroundColor ="green";
})


// eventListener = Listen for specific events to create interactive web pages
//                 events : keydown(when you press down on a key), keypress,keyup(when you release a key)
//                 document.addEventListener(event, callback);


// document.addEventListener("keydown", event =>{
//   console.log(`Key down = ${event.key}`);
// });
// document.addEventListener("keyup",event =>{
//   console.log(`Key up = ${event.key}`);
// });

// const myBox = document.getElementById("myBox");
// document.addEventListener("keydown", event =>{
//   myBox.textContent = "emojidown";
//   myBox.style.backgroundColor = "tomato";
// });

// document.addEventListener("keyup", event =>{
//   myBox.textContent = "emojiUp";
//   myBox.style.backgroundColor = "yellow";
// })

const mybox2 = document.getElementById("mybox2");
const moveAmount = 100;   // to increase the distance
let tx = 0;
let ty = 0;

document.addEventListener("keydown", event =>{
   if(event.key.startsWith("Arrow")){

    event.preventDefault();


    switch(event.key){
    case "ArrowUP":
      y -= moveAmount;
      break;
    case "ArrowDown":
      y += moveAmount;
      break;
    case "ArrowLeft":
      x -=moveAmount;
      break;
    case "ArrowRight":
      x += moveAmount;
      break;
    }
    mybox2.style.top = `${ty}px`
    mybox2.style.left = `${tx}px`
   }

});

const myButtons = document.getElementById("myButtons");
const myImg = document.getElementById("myImg");

myButtons.addEventListener(event,callback);
myButtons.addEventListener("click", event =>{

  if(myImg.style.display === "none"){           //we don't reserve  a space for display "none"
    myImg.style.display = "block";
  }
  else{
  myImg.style.display = "none";
  myButton.textContent = "show";
  }
});

// if we want to retain the space for the image then toggle the visibility not the display

myButtons.addEventListener("click", event => {

    if(myImg.style.visibility === "hidden"){
      myImg.style.visibility = "visible";
      myButton.textContent = "Hide";
    }
    else{
      myImg.style.visibility = "hidden";
      myButton.textContent = "show";
    }
});
