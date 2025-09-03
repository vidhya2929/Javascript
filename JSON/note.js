// JSON => JavaScript Object Notation
// data representation format similar to XML
// Commonly used for API's and Configs
// Lightweight and easy to read/ write
// JSON is a superset of JAvaScript
// Integrates easily with Most Languages  => ALmost every language has some form of library or built-in functionality to parse JSON strings into objects or classes in that language


// JSON TYPES (we can represent a certain data types within it)
// 1)Strings   ==>> "Hello world", "kyle" . "l"
// 2)Numbers   ==>> 10, 1.5, -30, 1.2e10
// 3)Booleans  ==>> true, false
// null        ==>> null
// Arrays      ==>>[1,2,3]  ["Hello", "World"]
// Object      ===>> {"Key": "Value"}   {"age": 30}



// make a file with the extension 'filename.json'

//      {
//        "key": "value",
//        "key": "Value"
//      }

// Most of the times when dealing with JSON we get it back as a string and not as an actual JS object and to emulate it use backticks(``)

// To convert JSON string into a JavaScript object ==>>json.parse()
// to convert JSON object into a JAvascript string ==>>json.stringify() 


//////////////////////////////////////////////////////////////////////////////////////////////////////
// Extended from the Java Script
// Always starts and ends with curly brackets
// name and value is seperated by colon:
// More than one pair is seperated by comma , 

// key/name value pairs
// {"name": "value"}
// Objects are comma seperated
// {"name1": "value", "name2": "value", "name3": "value"}
// Arrays have square brackets with values seperated by comma
// {"name": [{"name":"value"}, {"name": "value"}]}


// APIs are made up of requests and responses

// Dot Notation vs Bracket Notation
// var myJSON = {}
// myJSON.car1 = "black"
// myJSON["car1"]="blue"


// Array of Items
var cars = {"car": ["Blue","Black"]}
console.log(cars)
// more details 
var myJSON = {"car1": {"color":"black"},"car2":{"color":"blue"}};
console.log(myJSON)
// Even more details as much as we want
var myJSON = {"car1": {"color":"black", "model":"Mustang"},"car2":{"color":"blue","model":"F150"}};
console.log(myJSON)

// JSON has double quotes while JavaScript can use single or doubles
// JavaScript can include functions which is not availabel in JSON
// json.org.com
// our JSON can be validated from ==>> jsonlint.com
// libe JSON generator ==>>ObjGen

