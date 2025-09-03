// JSON = (JavaScript Object Notation) data-interchange format
//         Used for exchanging data between a server and a web application
//         JSON files {key:value} OR [value1, value2, value3]

//         JSON.stringify() = converts a JS object to a JSON string.
//         JSON.parse()   = converts a JSON string to a JS object

const names = ["spongebob", "patrick", "squidward","Sandy"];
const person = {
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["Jellyfishing","karate","cooking"]
}
const objjsonstr = JSON.stringify(person);
// console.log(person);
// console.log(objjsonstr);

// const jsonString = JSON.stringify(names);
// console.log(jsonString);
// JSON files work with one long string that represents an object or an array

const people = [{
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true
},
{
  "name": "patrick",
  "age": 34,
  "isEmployed": false
},
{
  "name": "Squidward",
  "age": 50,
  "isEmployed": true
},
{
  "name": "Sandy",
  "age": 27,
  "isEmployed":false
}]
const jsonNames = `["Spongebob", "patrick", "Squidward","Sandy"]`;
const json = `{"name":"spongeBob","age":30,"isEmployed": true, "hobbies":["jellifishing","karate","cooking"]}`
const peoplee = `[{"name":"Spongebob", "age":30,"isEmployed":true},
                  {"name":"Spongebob","age":30,"isEmployed": false},
                  {"name": "Patrick", "age":34,"isEmployed":true},
                  {"name": "Sandy", "age": 27,"isEmployed":false}
]`;

const parseData = JSON.parse(jsonNames);
console.log(parseData);

const parsed = JSON.parse(json);
console.log(parsed);

const peopleparse = JSON.parse(peoplee);
console.log(peopleparse);


// fetch()
// fetch is a function as an argument we can pass in a relative or absolute file path or a URL 

fetch("person.json")
// fetch returns a promise, and we follow with ".then()" method we will be provided with a response object
    .then(response => response.json())
    // response.json also return a Promise
    .then(value => console.log(value))

// if you want to iterate through all the objects
// rename value as values and use built-in method "forEach" of arrays
fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)))
  // to iterate through and to print each object  if we want some specific properties like name,age ... follow the value with it
  fetch("people.json")
  .then(response => response.json())
  .then(values => values.forEach(value =>console.log(value.age)))
  .catch(error => console.error(error)) ;
