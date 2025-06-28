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
let result = userName.startsWith(" ");
console.log(result);
// To determine if a string ends with a given character -;endsWith()
console.log(userName.endsWith(" "))

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