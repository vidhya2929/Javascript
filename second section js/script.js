// console.log("one")
// document.getElementById("Button").onclick = myFunction;        //Thread of execution (execution flow)  
// function myFunction(arg){
//     console.log(arg);              //this log is not in the main execution so it is asynchronus callback (eg:event handlers)
//     myFunction(10)
// }
// console.log("Two"); 

// console.log("one")

// const a = [2,3,7,6,4,5];
//                                   //synchronous callback  eg: forEach,map,reduce etc... 
// function myFunction(arg){
//     console.log(arg)
// }
// a.forEach(myFunction );

// console.log("two")


console.log("One");
const a = [2,3,7,6,4,5];
a.forEach(function(arg){
    console.log(arg);
});
console.log("two")

 
function myFunction(val){
    console.log("Hello world!",val);             //function declaration
}  
const values = [1,2,3,4,5,6,7];
values.forEach(myFunction);

const value = [1,2,3,4,5,6,7];
value.forEach(function(val){                           //anonymous function 
    console.log("Hello world!!!!",val);
});


// function (val){
//     console.log("hey there",val);              //error without name
// }

const fn = function (val){
    console.log("Hello there",val);       //variable declaration
    return 10;                  
}
// anonymous functions can be called only after declaration
//Hoisting -> assign declaration on the top only declaration not fn=rhjjvh that's why anonymous fn cannot call before declaration


//Arrow Fn -> New way for writing anonymous function
const fn2 = (val) => {
    console.log("Hello everyone = ",val);
    return 20;
}
fn(1);
fn2(2);

//More eg:

const fcn = function(a,b){
    return a*b
}

const fcn2 = (a,b) => {  //if there is only one line then we can remove *(both) curly brace and return 
    return a+b;
}
// const fcn2 = (a,b) => a+b;

const mult = fcn(2,4);
const add = fcn2(2,4);
console.log(mult)
console.log(add)
// if there is only one argument then no need for normal bracket eg:
// const fn2 = a => a+100;

const fun2 = () => "Hello"   //string,array 

const obj = {
    a: 1,
    b:2
};

const fn3 = () => ({
    a:1,
    b:2                          //object when rep in single brace
});

const fn4 = () => {
    return {
        a:1,
        b:2
    };
};
const val = fn4()
console.log(val)

const obje = {
    a: 100,
    b:200,
    myFun: function(){
        return this.a + this.b;   //to access variables from inside the same object is by using "this"
    }
}

console.log(obje.myFun());

//when Arrow fn is used

const objec = {
    a: 100,
    b:200,
    myFu: () => {
        return this.a + this.b;
    }
}
console.log(objec.myFu());


// "this" -> related to objects ( data structure which have a key value pair)
const myOb = {
    a: 1,
    b: 2,
    c: function() {
        console.log("heyy");
    }
};
console.log(myOb);

// if we call a fn inside an object using "this" inside the same object ,it wll print the same object

const myOnj = {
    a:1,
    b:2,
    c: function() {
        console.log(this);
    }
};
var aa = myOnj.c;                   //here myOnj is the context
// All function have an inner function called "call" & "apply"
aa.call(myOnj)   // To set the context while calling
//use "bind" to set the context while writing
myOnj.c = myOnj.c.bind(myOnj);

var k = myOnj.c;
k();


console.log(aa);
// or 
// aa();            here window is the context

//In js this is the context of who calls a function

const myObb = {
    a: 1,
    b:2,
    c: () => {
        console.log(this);
    }
};
// context of a function is the context of it's parent function...
// if there is no parent function then window is the context

//normal fn and anonymous fn ->this -> calling context
//arrow function -> this -> writing context 
const yourObj ={
    k: 12,
    j: 22
};

// if we use "apply" the argument should be an 'array'
//eg:
const oj = {
    a:1,
    b:2,
    c: function(a,b){
        console.log(this,a,b);
    }
};

 var k = oj.c;
 k.apply(oj,[1,2]); 
 // if we use "call" the argument can use 'comma' 
//eg:
const jo = {
    a:1,
    b:3,
    c: function(a,b){
        console.log(this,a,b);
    }
};
var k = jo.c;
k.call(jo, 1,2);


//new eg:

class Myclass{
    myFunction(){
        console.log(this);
    }
}

var onj = new MyClass();
var aa = onj.myFunction;
//if it is inside class window will not print
// if there is no context which is inside the class it is undefined not window...
aa();

//arrow fn
class Myclass{
    myFn = () => {
        console.log(this);
    }
}

const myc = new Myclass();
myc.myFunction()
const k = myc.myFunction
k()


//call by value & call by reference

function one(){
    var a = 100;
    two(a);
    console.log("one",a);
}                                       // when variable passed does not changed
function two(a){
    a= a+1;
    console.log("two",a);
}
one();

function on(){
    var a = {
        value: 100
    };
    two(a);
    console.log("one",a.value);
}                                        //when an object passed it reflected its change
function two(a){
    a.value = a.value+1;
    console.log("two",a.value);
}
one();

function one(){
    var a = [100];
    two(a);
    console.log('one',a[10]);
}                                           //when an array passed it reflected its change
function two(a){
    a[0] = a[0] + 1;
    console.log('two',a[0]);
}
one()

// variable declared inside a function is called local variable .they are stored on stack memory(life -> onlt till return or closing parenthesis).
// when fn declared it will be on the stack,when the function get exit then the values are popped from the stack.  
//if it is an object or array then it will only store a reference or base address on the stack.
//big data structures, object,set,string and array are stored on heap memory.



// Closure 

function add(a,b){
    function myAdd(){                                        //we can write a function inside another function in javascript
    const c = a + b;
    return c;
     }
    return myAdd();                                                                
}

function main(){
    const res = add(3,4);
    console.log(res);
}
main();


function add(a,b){
    function myAdd(){
        const c = a+b;
        return c;
    }
    return myAdd;
}

function main(){
    const res = add(3,4);
    const val = res();
    console.log(val);
}
main();
 // the method js use in an enclosing fn  have the access to use its parent variable and that is stored on heap that is closure


 function main(a){
    [1,2,3,4,5]
    .forEach(function(i){
        console.log(i,a);
    })
 }
 main(10);

 //example for closure usecases
 var objs = [
    {
        name: "One",
        msg: "Hello I am one"
    },
    {
        name: "Two",
        msg: "Hello I am two"
    },
    {
        name: "Three",
        msg: "Hello I am Three"
    },
 ];

 function main(){
    objs.forEach((item) => {
         const btn = document.createElement('button');
         btn.innerHTML = item.name;
         btn.onclick = getCallBack(item.msg);
         document.body.appendChild(btn);
    });
 }
 function getCallBack(arg){
    return function(){
        alert(arg)
    }
 }
main();


//spread operator
//new syntax in javascript
//mainly used for arrays and objects
// also used for function arguments
//... -> spread operator

var ocj = {
    a: 1,
    b: 2,
    c: 'hello'
}
var ocj2 = {
...ocj      // elements except opening and closing brackets
}
//  a:1,
    // b:2,
    // c:'hello'
console.log(ocj)

var aa = [1,2,3,4];

var bb = [...aa];

console.log(aa);
console.log(bb);

var onc = {
    a:1,
    b:2,
    c: 'Hello'
}
var onc2 = onc;
console.log(onc);

//spread
var noc = {
    a: 1,
    b: 2,
    c: "hello"
}
var noc2 ={
    ...noc
};

console.log(noc2 === noc);

var onc = {
    a:1,
    b:2,
    c: 'Hello'
}
var onc2 = onc;
console.log(onc === onc2);


//spread
var noc = {
    a: 1,
    b: 2,
    c: "hello"
}
var noc2 ={
    ...noc
}; 
console.log(noc2 === noc);
// cloning ->  creating new object using old object,

var objA = {
    a: 1,
    b: 2,
    c: 'Hello'
}
var objB = {
    a1: 1,
    b1: 2,
    c: 'Hello 2'
}
var obj2 = {
    ...objA,
    ...objB,
    z: 32
};
console.log(obj2)
//uses of spread op
//  *to make a Clone
//  *concatinate objects
//  * to add a property
// * to give args

var aa = [1,2,3,4];
var b = [6,7,8,9];
var c =[...aa,...b]
console.log(c);
var aa = [1,2,3,4];
var b = a;

console.log(b === a);

var c = [1,2,3,4];
var b = [...a]

console.log(a === b);

var obj1 ={
    a:1,
    b:2
}

var obj2 = obj1;
obj2.c = 33;          // change for obj1 because obj1,obj2 has same reference. There is only one object.

console.log(obj1, obj2); 
var obj1 ={
    a :1,
    b: 2
}
 var obj2 = {...obj1};   //shallow copy
 obj2.c = 33;
 console.log(obj1, obj2);

 var obj1 ={
    a :1,
    b:2,
    c: {
        name: 'raman',   //c is an object it doesn't get copied that's not a key value pair,   i.e, it copies only first level key values
        age: 45         // shallow cloning
    }
}
 var obj2 = {...obj1};  
obj1.d = 44;
 obj1.c.name = 'layne'
console.log(obj1, obj2);
// deep cloning is not possible using spread operator

var arr = [1,2,33,49,15,6];
var k =Math.max(arr);
console.log(k);                // O/p : NaN


var arr = [1,2,33,49,15,6];
var k = Math.max(arr[0],arr[1],arr[2],arr[3],arr[4],arr[5])
console.log(k)          //Not convinient              

var arr = [1,2,33,49,15,6];
var k = Math.max(...arr);   //convinient
console.log(k);

 // de, Structuring
// tecnique of assigning the value of an obj or arr to a variable
const obj1 = {
    name: 'Code Malayalam',
    place: 'kerala',
    rank: 100
};
function myFunction(){
    // const name = obj1.name;
    // const place = obj1.place;             // without de ,-Structuring
    // const rank = obj1.rank;

    const{
        name,
        place,
        rank
    }= obj1;

    // const{
    //     name 
    // }= obj1;
 
    const {
        namee,
        ...rest
    }=obj1
    console.log(name,rest);


    // console.log(name,place,rank);
}
myFunction();

 // Array
 const obj1 = {
    name: 'code Malayalam',
    place: 'kerala',
    rank: 1000
 };

 const marks = [1,4,6,7,12];
 function myFunction(){
    const [a,b,c,d,e] = marks;
    console.log(a,b,c,d,e);

 }
 myFunction();

  // Array
  const obj1 = {
    name: 'code Malayalam',
    place: 'kerala',
    rank: 1000
 };

 const markss = [1,4,6,7,12];
 function myFunction(){
    const [a, ,b] = markss;
    console.log(a,b);

 }
 myFunction();

 // Array
 const obj1 = {
    name: 'code Malayalam',
    place: 'kerala',
    rank: 1000
 };

 const markse = [1,4,6,7,12];
 function myFunction(){
    const [a, ,b,...others] = markse;
    console.log(a,b.others);

 }
 myFunction();  

  // de structuring ..
  const obj1 = {
    name: 'code Malayalam',
    place: 'kerala',
    rank: 1000,
 };

 const mark = [1,4,6,7,12];

 function myFunction(){
    const {
        name,
        place,
        status = false,
        rank
    } = obj1

    console.log(name,place,rank,status);
 }
 myFunction();


  // de structuring ..
  const obj1 = {
    name: 'code Malayalam',
    place: 'kerala',
    rank: 1000,
    status : null
 };

 const mar = [1,4,6,7,12];

 function myFunction(){
    const {
        name,
        place,
        status =false,
        rank
    } = obj1

    console.log(name,place,rank,status);
 }
 myFunction();

 const markz =[1,4,6];
function myFunction(){
    const [j,d,g,r= false] = markz
    console.log(j,d,g,r);
}
myFunction();


// OR


const markze =[1,4,6];
function myFunction([a,b,c]){
    
    console.log(a,b,c);
}
myFunction(markze);
const marky = [1,4,6];
var obj1 = {
   name: 'code Malayalam',
   place: 'kerala',
   rank: 100
};
function myFunction(){
//    var arr = getValue();
//    console.log(arr)
   var [a,b,c] = getValue()
   console.log(a,b,c);
}
function getValue(){
   return marky;
}
myFunction(obj1);

var obj1 = {
    name: 'Code',
    place: 'kerala'
}
var obj2 = {
    name: 'Bob',
    place:'America'
}
function abc(){
    var{
        name,
        place
    } = obj1;
    var{
        name: name2,
        place: place2
    } = obj2;
    console.log(name,place,name2,place2);
}
abc() 
// forEach() find() filter() map() reduce()
const arr = [
    {
        name:'Alice',
        mark: 35,
        place:'Kannur'
    },
    {
        name: 'Bob',
        mark: 28,
        place:'palakkad'
    },
    {
        name: 'Catherine',
        mark: 44,
        place: 'Thrissur'
    },
    {
        name: 'Daniel',
        mark:23,
        place:'Kollam'
    }
    ]; 
    console.log(arr);
     let sum =0;
     arr.forEach((item,index) => {
     sum= sum+item.mark;
     });
     console.log(sum);
    // arr.forEach((item) => {
    // console.log(item.name);    //insted of 'for loop'
    // });
    // forEach() find() filter() map() reduce()
const arr = [
    {
        name:'Alice',
        mark: 35,
        place:'Kannur'
    },
    {
        name: 'Bob',
        mark: 28,
        place:'palakkad'
    },
    {
        name: 'Catherine',
        mark: 44,
        place: 'Thrissur'
    },
    {
        name: 'Daniel',
        mark:23,
        place:'Kollam'
    }
    ]; 
    // var found = arr.forEach((item,index) =>{
    // console.log(index);  // to get index
    // console.log(item)
    // });
    // Find
    // find whether the element exist or not . if it exist then it returns otherwise it becomes undefined 
    var found = arr.find((item) => {
        return item.name === 'qwerty ';
    });
    console.log(found);
    
var found = arr.filter((item)=>{
    return item.name === 'Boobkejj';
});
var found = arr.find((item) => {
    return item.mark <30  ;  // if there is 2 answers then it returns the first that satisfies the condition
});
console.log(found);
// Filter
var found = arr.filter((item) =>{
    return item.mark< 30;
});
console.log(found);  
var objj = {
    name: 'Alice',
    mark: 35,
    place: 'Kannur',
    subject: {
        teacher: 'Bob'
    }
}
var{
    subject :{
        teacher
    }
}=obj;
console.log(teacher)
// var{
//     name,
//     mark
// }= obj;
// console.log(name,mark);
var arr = [11,22,33];
var [val1,val2]=arr;
console.log(val2) 
var arr = [
    {
        name: 'Alice',
        mark: 35,
        place: 'kannur',
        subject: {
            teacher: 'Bob'
        }

}
,22,33];
var [{
    subject :{
        teacher
    }
},val2]=arr;
console.log(teacher,val2); 
var arr = [
    {
        name: 'Alice',
        mark: 35,
        place: 'kannur',

}
,22,33];
var [{
    subject :{
        teacher
    }={}
}]=arr;
console.log(teacher); 
//lodash library//

// class
// it is a blueprint of object
var student1={
    name: 'helen',
    yob: 2005,
    getAge: function(){
        return new Date().getFullYear() - this.yob;
    },
    getName: function(){
        return this.name;
    }
};
console.log(student1.getName(),student1.getAge());
// class
// it is a blueprint of object 
class Student{
    name;
    yob;
    place;
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }
    getAge(){
        return new Date().getFullYear() - this.yob;
    };
    getName(){
        return this.name;
    };
}
var student1 = new Student('helen',2005);
var student2 = new Student('milan',2003);
var student3 = new Student('heaven',2008);

console.log(student1);
console.log(student2);
console.log(student3);

// here there is code maintenance problem;
// functions get duplicated
// if any property is added, we should add it for every object without fail.
// class can store reused 
// function inside class is called "constructor" it is called when we create objects
   

//static function -related to class
// class
// it is a blueprint of object 
function printMinYob(...args){
    var arr = args.map((item => item.yob));
    console.log(Math.min(...arr));
}

class Student{
    name;
    yob;
    place;
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }
    getAge(){
        return new Date().getFullYear() - this.yob;  //instance functions
    };
    getName(){                                       //instance functions
        return this.name;
    };
}
student.printMinYob = function(...args){
    var arr = args.map((item => item.yob));              //static fns
    console.log(Math.min(...arr));
}

var student1 = new Student('helen',2005);
var student2 = new Student('milan',2003);
var student3 = new Student('heaven',2008);

// console.log(student1);
// console.log(student2);
// console.log(student3);
// printMinYob(student1,student2,student3);
Student.printMinYob(student1,student2,student3);
// here there is code maintenance problem;
// functions get duplicated
// if any property is added, we should add it for every object without fail.
// class can store reused 
// function inside class is called "constructor" it is called when we create objects
   

//static function -related to class

// class
// it is a blueprint of object 
class Student{
    name;
    yob;
    place;
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }
    static printMinYob(...args){
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr))
    }
    getAge(){
        return new Date().getFullYear() - this.yob;  //instance functions
    };
    getName(){                                       //instance functions
        return this.name;
    };
}
// Student.printMinYob = function(...args){
//     var arr = args.map((item => item.yob));              //static fns
//     console.log(Math.min(...arr));
// }

var student1 = new Student('helen',2005);
var student2 = new Student('milan',2003);
var student3 = new Student('heaven',2008);

// console.log(student1);
// console.log(student2);
// console.log(student3);
// printMinYob(student1,student2,student3);
Student.printMinYob(student1,student2,student3);
// here there is code maintenance problem;
// functions get duplicated
// if any property is added, we should add it for every object without fail.
// class can store reused 
// function inside class is called "constructor" it is called when we create objects
   

//static function -related to class

// class
// it is a blueprint of object 
class Student{
    name;
    yob;
    place;
    constructor(name,yob){
        this.name = name;
        this.yob = yob;
    }
    static printMinYob(...args){
        var arr = args.map((item => item.yob));
        console.log(Math.min(...arr))
    }
    getAge(){
        return new Date().getFullYear() - this.yob;  //instance functions
    };
    getName(){                                       //instance functions
        return this.name;
    };
}
// Student.printMinYob = function(...args){
//     var arr = args.map((item => item.yob));              //static fns
//     console.log(Math.min(...arr));
// }

var student1 = new Student('helen',2005);
var student2 = new Student('milan',2003);
var student3 = new Student('heaven',2008);

// console.log(student1);
// console.log(student2);
// console.log(student3);
// printMinYob(student1,student2,student3);
Student.printMinYob(student1,student2,student3);
// here there is code maintenance problem;
// functions get duplicated
// if any property is added, we should add it for every object without fail.
// class can store reused 
// function inside class is called "constructor" it is called when we create objects
//static function -related to class

// Setters & Getters
class Button{
    constructor(name,width,height){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
}
new Button("Click Me!",100,100);


class Button{
    constructor(name,width,height){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    setWidth(width){
        this.button.style.width = width+"px";
    }
    setHeight(height){
        this.button.style.height = height +"px";
    }
}
var b1 = new Button("Click Me!");
b1.setWidth(100);
b1.setHeight(100);

class Button {
    constructor(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    set height(height){
        this.button.style.height = height + 'px';
    }
    set width(width){
        this.button.style.width = width + 'px';
    }
    get width(){
       return parseInt(this.button.style.height,10);
    }
    get height(){
        return parseInt(this.button.style.width,10);
    }
}
var b1 = {
    init(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    },
    set height(height){
        this.button.style.height = height + 'px';
    },
    set width(width){
        this.button.style.width = width + 'px';
    },
    get width(){
       return parseInt(this.button.style.height,10);
    },
    get height(){
        return parseInt(this.button.style.width,10);
    }
}
b1.init('Click');
b1.width = 100;
b1.height = 100;
// var b1 = new Button("Click Me!");
// b1.width = 100;
// b1.height = 100;
// console.log(b1.width,b1.height)
// setter - to turn an assignment operator to a function call
// getter - turning function call into a assignment operator
//inheritance
class Button {
    constructor(name) {
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }

    onClick(fn){
        this.button.onclick = fn;
    }
}
class Greenbutton extends Button{
   onClick(fn){
        this.button.onclick = function(){
            this.button.style.background = 'green';
            fn();
        }.bind(this);
    }
}
var b1 = new Greenbutton('Gbutton');
b1.onClick(function(){
    console.log("Clicked");
});

// if we want to modify only a particular portion from parent class then use inheritance i.e,by using 'extends' keyword we can override the desired portion.and also if we wanted to make call parent then use 'super' keyword.
 // we can add more functions/variables to inherited classes  eg:
 class Button{
    constructor(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    onClick(fn){
        this.button.onclick = fn;
    }
 }
 class Greenbutton extends Button{
    constructor(name){
        super(name);
    }
    onClick(fn){
        super.onClick(function(){
            this.button.style.background = 'green';
            fn();
        }.bind(this));
    }
    printme(){
        console.log("me")
    }
 }
 var b1 = new Greenbutton('Gbutton');
 b1.onClick(function(){
    console.log("Clicked");
 });
 b1.printme();
 //before 2015 js used class with the concept of prototype
// transpilers can be used to compile our class to prototype
class Button{
    constructor(name){
        this.button = document.createElement('button');
        this.button.innerHTML = name;
        document.body.appendChild(this.button);
    }
    onCLick(fn){
        this.button.onclick = fn;
    }
}
var b1 = new Button('Hello');
console.log(b1);
console.log(typeof Button);
//In javascript any function can be used as constructor


function MyButton(name){
    this.button = document.createElement('button');
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
}

MyButton.prototype.onclick = function(fn){    //to create a function inside a function we use prototype property
    this.button.onclick = fn;
}
 
var b2 = new MyButton('clickyy')    // by calling using new any function act as a constructor
b2.onclick(function(){
    console.log('clicked'); 
})
console.log(b2)

// new means  a new obj is created and it's constructor is  -> function MyButton(){}
// if there is no 'new' then it is a normal function 
// all fn have a prototype property


// difference is :
// instead of class we use function 
// things inside the constructor is written inside function 
//then objects are created using function names instead of class names  
// if we want to pass a function inside it then use prototype


//Asynchronous callback
// javascript is an event based program
 
// console.log("hello");
var button = document.getElementById('mybutton');
button.onclick = () =>{                           //onclick is an event
    console.log("started click event");
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/1",
        success: (data) =>{
            console.log(data);
        }
    });
    console.log("Ended click event");
}
// here o/p be like
/*started click event
ended click event
user Id:1 ......*/
//therefore it is Asynchronus callback            // look at the order of execution of callback function
// ie, if the event occurs in its registered callback it is synchronous callback


//synchronous callback

var button = document.getElementById('mybutton');
button.onclick =() =>{
    console.log("started click event");
    $.ajax({
        url:"https://jsonplaceholder.typicode.com/todos/1",
        success: (data) =>{
            console.log(data);
        },
        async: false
    });
    console.log("Ended click event");
}
// here the registered callback is executed in the same event 
// callback of everey util functions are synchronous callback for eg:


var button = document.getElementById('mybutton');
button.onclick = () =>{
    console.log("started click event");

    var arr = [1,2,3,4,5];
    arr.forEach((item)=>{
        console.log(item);
    });

    console.log("ended click event");
}


//most of the events are asynchronous callback...


// synchronous callback
var button = document.getElementById('mybutton');
button.onclick = () =>{
    console.log("started click event");
    var arr = [];
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success: (data) => {                                                      // TO GET A NETWORK DATA
             console.log('ajax1 started',data.title);
             arr.push(data.title);
             console.log('ajax1 ended');                                                   
        },
        async: false
    });
    
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success: (data) => {
            console.log('ajax2 started',data.title);
            arr.push(data.title);
            console.log('ajax2 ended');
        },
        async: false
    });
    document.getElementById('mytext').value = arr.join('\n');
    console.log("ended click event");
}


//asynchronous callback

var button = document.getElementById('mybutton');
button.onclick = ()=>{
    console.log("started click event");
    var arr = [];
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success: (data) =>{
            console.log("ajax1 started",data.title);
            arr.push(data.title);
            console.log("ajax1 ended"); 
        },
        async: true
    });

    $.ajax({
        success: (data) =>{
            console.log("ajax2 started",data.title);
            arr.push(data.title);
            console.log("ajax2 ended");
        },
        async: true
    });
    document.getElementById("mytext").value = arr.join('\n');
    console.log("ended click event")

}


//asynchronous callback another method

var button = document.getElementById('mybutton');
button.onclick = ()=>{
    console.log("started click event");
    var arr = [];
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/todos/2",
        success: (data) =>{
            console.log("ajax1 started",data.title);
            arr.push(data.title);
            $.ajax({
                success: (data) =>{                                                     //ajax is inside first ajax
                    console.log("ajax2 started",data.title);
                    arr.push(data.title);
                    console.log("ajax2 ended");
                    document.getElementById("mytext").value = arr.join('\n');
                    
                },
                async: true
            });
            console.log("ajax1 ended"); 
        },
        async: true
    });
    console.log("ended click event")     
}
// major disadvantage of synchrous callback
/* it is event blocking that result in UI stucking*/
// In javasript if 1 event get blocked the entire UI get stucked.Becouse it is single threaded.

//Asynchronous callback
//disadvantage -> complications in writing (nested,chained)
/* every code except browser code will run without connection*/
 // to reduce the complications of writing asynchronous callback javascript uses "promises"



 //To reduce the complications of writing asynchronous callback javascript uses "promise".
/* promise is a library which helps to organize the asynchronous callback codes.*/
console.log("started")
$.ajax({
    type: 'GET',
    url: "https://jsonplaceholder.typicode.com/todos/1",    // it is an API call with 2 callback fns, sucess and error to fetch the data from the given link 
    success: (msg) => {
        console.log(msg);
    },
    error:(xhr, statusText) => {
        console.log(statusText);
    },
});
console.log("ended");
// in the above example the callback functions are passed as arguments.

// Resolve -> means success callback is called after an API call

//Reject ->error callback is called after an API call
/*       One of the main advantage of promise       */
//here resolve and reject are called at the same place as API call.we can't do later resolve or later rejections
// eg: 

//             PROMISE FUNCTION
// a function is using promise is means that it returns a promise object...

//if success is working
console.log('started');

const pr = myFetch('https://jsonholder.typicode.com/todos/1');
    console.log(pr);
pr.then((data) =>{                  //here callback function is not passed as arguments ,it is passed with the returning pr object using "then" fn.
    console.log(data);
});
console.log('ended'); 
// Major advantage is that we can write "then " anywhere i.e,we can do resolve or reject anywhere for example, consider a button
                    
 // it is called "promise" because whenever we used, the data is guaranteed
 /* Also called "future" as we use it in the future and "differ" as we postpond it's use.*/

 // if error is working

 console.log("started");
 
 
const prr = myFetch('https://jsonplaceholder.typicode.com/todos/1');
 
function buttonClick(){
    console.log('clicked');
    prr.then((data) => {
        console.log(data);
    }, (err) => {
        console.log(err);
    });
}
console.log('ended');

console.log('started');
const pro = myFetch("https://jsonplaceholder.typicode.com/todos/1");

function buttonClick(){
    console.log("clicked");
    pro.then((data) => {
        console.log(data);
    },
    (err) => {
        console.log(err);
    });
}
console.log('ended');


//promise chaining
//promise discard nesting by using chaining
console.log("requesting 1");
const pru = myFetch('https://jsonplaceholder.typicode.com/todos/1');

pru.then((data) => {
    console.log(data);

    console.log("requesting 2");
    const pru = myFetch('https://jsonplaceholder.typicode.com/todos/2');

    pru.then((data) =>{
        console.log(data);

        console.log("requesting 3");
        const pru = myFetch('https://jsonplaceholder.typicode.com/todos/3');
        pru.then((data)=>{
            console.log(data);
        });
    });  
});


//rewriting using chaining

console.log("requesting 1");
const pre = myFetch("https://jsonplaceholder.typicode.com/todos/1")

const pr2 = pre.then((data) => {                        //here then returns a promise so there is a 'then' for that promise
    console.log(data); 
    console.log("requesting 2")
    return myFetch('https://jsonplaceholder.typicode.com/todos/2')              
});  
const pr3 = pr2.then((data)=>{
    console.log(data);
    console.log("requesting 3")
    return myFetch('https://jsonplaceholder.typicode.com/todos/3');
}); 
pr3.then((data) => {                 // it resolves the value which the above 'then' returns ,i.e here prints "hello"
    console.log(data);
});
//a promise returned by 'then' is resolved by what the callback in the 'then' returns. 

// organizing promise chain more...
console.log("requesting 1");
myFetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((data) => {
        console.log(data);
        console.log("requesting 2");
        return myFetch('https://jsonplaceholder.typicode.com/todos/2');    // till here is pr2
    })
    .then((data)=>{
        console.log(data);
        console.log("Requesting 3");
        return myFetch('https://jsonplaceholder.typicode.com/todos/3');     // till here is pr3
    })
    .then((data)=>{
        console.log(data);
    });


    // Fetch by javascript
console.log("Requesting 1");
getJson("https://jsonplaceholder.typicode.com/todos/1")
    .then((data)=>{
        console.log(data);
    });

// Promise Catch & Utils
// 1st method it uses second argument "err"
console.log("=== Requesting 1");
getJson('https://jsonplaceholder.typicode.com/todos/1')
   .then((data)=>{
       console.log(data);
       console.log("=== Requesting 2");
       return getJson('https://jsonplaceholder.typicode.com/todos/2')
   },
   (err) => {
       console.log("ERROR:",err)
   }
   )
   .then((data)=>{
       console.log(data);
       console.log("=== Requesting 3");
       return getJson('https://jsonplaceholder.typicode.com/todos/3')
   })
   .then((data)=>{
       console.log(data);
   }); 

// catch is used for error handling i.e,promise get rejected...

//using Catch

console.log('===Requesting 1');
getJson('https://placeholder.typicode.com/todos/1')
.then((data)=>{
   console.log(data);
   console.log('=== Requesting 2');
   return getJson('https://jsonplaceholder.typicodex3bjh.com/todos/2');
})
.then((data)=>{
   console.log(data);
   console.log("=== Requesting 3");
   return getJson('https://jsonplaceholder.typicode.com/todos/3');      // o/p becomes undefined becouse it gets the value from catch
})
.then((data)=>{
   console.log(data);
})
.catch((err)=>{
   console.log('ERROR',err);
   return {};
});
//usually catch is at the end because if an error occurs one then there is no need to execute that chain.so if there is an error it looks for catch and execute catch only not others
// promise provide us a function for error handling called catch 
//if promise resolve it goes to "then"
//if promise rejects it goes to "catch"
//once we catch the error then it will visit all "then's"


//         UTIL Functions by promise
// 1) promise.resolve
// 2) promise.reject
getJson('https://jsonplaceholder.typicode.com/todos/1')
    .then((data)=>{
        console.log(data);
    })
    .catch((data) =>{
        console.log(data);
    })
// 3)Promise.all()
// it takes array as an input.array of promises
// we can give 2 or more promises as input
Promise.all([
    getJson('https://jsonplaceholder.typicode.com/todos/1'),
    getJson('https://jsonplaceholder.typicode.com/todos/2'),
    getJson('https://jsonplaceholder.typicode.com/todos/3')
])
// it will resolve only after if every getJson is executed successfully... order is not a problem.
.then((data)=>{
    console.log(data); 
});
//promise.race-;
//The one which resolve first will get by using promise.race
Promise.race([
    getJson('https://jsonplaceholder.typicode.com/todos/1'),
    getJson('https://jsonplaceholder.typicode.com/todos/2'),
    getJson('https://jsonplaceholder.typicode.com/todos/3')
])
.then((data)=>{
    console.log(data);
});

// it is used to access fastly,we can request for one promise and set timer for another promise
// Try,Catch,finally,throw
console.log("started");
let aa;
try{
    console.log("on try");
   aa = getVal1();
}catch(e){
    console.log("on catch");
    aa=0; 
}
const b = getVal2();

const result = processValues(aa,b);
console.log(result);

console.log('ended');



function getVal1(){
    console.log("inside getVal1")
     var obj = undefined;
    return obj.value;
}
function getVal2(){
    console.log("inside getVal2")
     return 22;
}
function processValues(aa,b){  
    console.log("inside processvalue")
    return aa+b
}
//error prone functions are put inside the try{} block
// if we catch the error the remaining lines of code will execute.

// To get result 0 if any one become error
console.log('started');
 let d,c,resultt;

 try{
    console.log('on try');
    d = getVal1();
    c = getVal2();
    resultt = processValues(d,c);
 }
 catch(e){
    console.log("on catch");
    resultt = 0;
 }
 finally{
    console.log("This is finally");

 }

 console.log(resultt);
 console.log('ended');

 function getVal1(){
    console.log('inside getVal1');
    var obj = undefined;
    return obj.value;
 }
 function getVal2(){
    console.log('inside getVal1');

    return 22; 
 }
 function processValues(d,c){
    return d+c;
 } 
 // finally is guaranteed execution
 //whether there is no error or not it will execute for sure.

 console.log('started');
 let dd,c,rresult;

 try{
    console.log('on try');
    dd = getVal1();
    c = getVal2();
    result = processValues(dd,c);
 }
 catch(e){
    console.log("on catch");
    rresult = 0;
    vevs()
 }
 finally{
    console.log("This is finally");

 }

 console.log(rresult);
 console.log('ended');

 function getVal1(){
    console.log('inside getVal1');
    var obj = undefined;
    return obj.value;
 }
 function getVal2(){
    console.log('inside getVal1');
    dknesmc()
    return 22; 
 }
 function processValues(dd,c){
    return dd+c;
 } 
 
 // if there is an error in the catch block the 'console.log("ended") will not work but 'finally' statement will work for sure'.
 

 // Throw 
// // we can throw our own exceptions using 'throw' keyword
console.log('started');
let h,k,resu;
try{
    console.log('on try');
    h = getVal1();
    k = getVal2();
    resu = processValues(h,k);
}
catch(e){                               // here 'e' print the error
    console.log("Inside Catch",e);
    resu = 0;
}
console.log(resu);
console.log('ended');


function getVal1(){
    return 12;
}
function getVal2(){
    console.log("inside getVal2");
    throw "my error";
    return 22;
}
function processValues(h,k){
    return h+k;
}
// i.e, thro allow us to create our own exceptions
// we can give array,obj anything


//javascript provide there error class  that is ->
console.log("started");
let t,y,ress;
try{
    console.log("On try");
    t=getVal1();
    y=getVal2();
    ress = processValues(t,y);
}
catch(e){
    console.log("Inside Catch",e);
    ress=0
}
console.log(ress);
console.log("ended");

function getVal1(){
    console.log("Inside getVal1");
    return 29;
}
function getVal2(){
    console.log("Inside getVal2");
    throw new Error("my error through js")
    return 12;
}
function processValues(y,t){
    return y+t;
}
// async & await
// async is used when function is declared
// await is used when a function is called

/* eg:
async function myFunct(){
    var a = await getJson();
}
*/

async function getValue(){
    return 12; 
 }
 const op = getValue();
 op.then((data)=>{
     console.log(data);
 })
 // here we get promise as o/p
 // to make a function async ; add async keyword before function declaration
 // to get data from promise just resolve it...
 // a function is async means that it returns a "promise".
 
 // suppose a promise is returning through th fn
 async function getVal(){
     return fetch('https://jsonplaceholder.typicode.com/todos/1');
 }
 const ot = getVal();
 ot.then((data)=>{
     console.log(data);
 })

 // async function is not for converting a data into promise
// it is for make use of await   
console.log("started");
var cc = getValue();
cc.then((data)=>{
    console.log(data);
});
console.log("ended");

async function getValue(){
    // fetch('https://jsonplaceholder.typicode.com/todos/1')
    // .then((data)=>{
    //     return data.json();                   // as response is the object
    // })
    // .then((data)=>{
    //     console.log(data);
    // });

    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonData = await data.json();
    // console.log(jsonData);
    return jsonData;

//here code want to wait to get data from the server
// for that we can use await keyword
//the only condition for await to work is it need async .
// when we use await keyword it doesn't get block,instead it will waits for it.
// await will wait until we solve the promise.
}
// 2 ways of error handling
//1)
console.log('Started');
var aa = getValue()
    .then((data)=>{
        console.log(data);
    })
    .catch(() =>{
        console.log('Handled')
    });
    console.log('Ended');

async function getValue(){
    const data = await fetch('https://jsonplaceholder.typicodezd3zzzza.com/todos/1');
    const jsonData = await data.json();
    return jsonData;
}

// 2)
console.log('Started')
var aa = getValue()
    .then((data) =>{
        console.log(data);
    });
    console.log('Ended');
async function getValue(){
    try{
        const data = await fetch('https://jsonplaceholder.typicodeassxsa.com/todods/1');
        const jsonData = await data.json();
        return jsonData;
    }
    catch(e){
        console.log('Handled');
        return {};
    }
}
// Self- Invoking function in JavaScript
//it is used to solve problems related to variable scope
/*            VARIABLE SCOPE                            */
//  after declaring a variable from where we can access it .not neccessary to be in the same file...
// 2 tpes of scopes are there in the JavaScript 
// 1) Global scope -> a variable is declared outside the function,it can access from anywhere.
// 2) Local Scope ->if a function is declared inside a function,it cannot access from outside the function
//    Block Scope
//  eg local scope:
function fn1(){
    var number = 12;
    console.log(number);
}
function fn2(){
    console.log(number);
}

fn1();
fn2();

//eg global scope:
var number = 25;

function fn1(){
    console.log(number);
}
function fn2(){
    console.log(number);
}
fn1();
fn2();

//IMPORT EXPORT
// to avoid the problems by global scope in javascript we use import and export statement
 
//problems occure when we use Self Invoked Function Expression/Immediately Invoked Function Expression(IIFE) -;
// if we write 2 block of codes using self invoking function then function call or data passing between them are difficult
// Template Literal
/* it is a feature of string */


// const var1 = "codee isn't cool";
// const var2 ='codee isn't cool';                 //error example



//same case will occur for double quotes


// const var02 = "code is."super";
// const var11 ="code is super";                 //error example

console.log(var1);
console.log(var2);

console.log
// to avoid this misunderstanding we use escape (backslash)  eg:

const varr = "codee isn't cool";
const var22 = 'codee isn\'t cool';

const jve = "code is.\"super";
const eed = "code is super";

// string can be represented without single qoute and double qoute 
// that is possible by using backtick.
//Through backtick we get  all the properties of single quote and double quote and also used for template literal


// template strings are represented using `(backticks)
// Advantages of using backticks are -:
// 1.Multiline String
// 2.Expression Inside a String
const var3 =`codee isn't it cool`;



/*                Multiline String             */
// if we split a string written using double quotes or single quotes it will cause an error
// But if we split a string that uses backtick it can be split without error. eg:

// const jder= 'here is the 
// example for you';                   // error example



const mij =`here is the 
bjhjhm
vgfhjm
ngvghkv
corrected example`;


//example if we want an html element like this
/* <!DOCTYPE html >
<html lang = "en">
    <head>
        <title>Coded</title>
    </head>
    <body>
        <div className = "item" >
            <h4>Product Name</h4>
            <div>Price: 00</div>
        </div>
        <script type="module" src='scripty.js'></script>
    <body>
    </html>
 */
 
document.body.innerHTML = '<div className="item"><h4>Product Name</h4><div>Price: 00</div></div>'
//it is difficult to read
// so we split it 

document.body.innerHTML = `<div className ="item"`+ 
`<h4>Product Name</h4>`+ 
`<div>Price: 00</div>`+
`</div>`;

// Expression inside a string

const producttName = "Pen";
const price ="12";

const val1 = `The ${producttName} is ${price}`;
const msg = `The product is ${price > 10 ? 'Costly' : 'Cheap '}`
console.log(value);
console.log(msg);
// we can give another statements inside the template string
//eg:
const product = "pen";
const pri = 2;

const va = `The ${productName} is ${price} Rs`;
const msgg =`The product is ${`Hello ${price}`}`   //Nesting


const products = [
    {
        producttName: 'pen',
        price: 10
    },
    {
        productName: 'Book',
        price: 20
    }
];

document.body.innerHTML = products.map((item) => {
    return`
    <div className = "item">
        <h4>${item.productName}</h4>
        <div>Price${item.price}</div>
    </div>`;
})            //it is like a template that's why it is called as template literal
 
// Default parameters in function 
//ite is also called as Default Arguments...

function average (a,b) {
    console.log(a,b);
    const avg = (a+b) / 2;
    return avg;
}

const avg = average(5);
console.log(avg);  

//if we didn't give any values to arguments,we can get them default value 
// eg:
 function average (a=0,b=0){                                 // a=0,b=0  is default argument
    console.log(a,b);
    const avg = (a+b)/2;
    return avg
 }

 const avgg = average();
 console.log(avgg);

// eg 2;

function average(a= getDefault(),b=0){
    console.log(a,b);
    const avg = (a+b)/2;
    return avg;
}
function getDefault(){
    return 100;
}

const av = average();
console.log(av);
// Any single statements can be given as default arguments
//give default arguments even if we need only


// left arguments can be passed as right arguments...
// eg:
function average(a, b=a){
    console.log(a,b);
    const ave = (a+b)/2;
    return ave;
}

const ave = average(10);
console.log(ave); 

// operators are also applicable
// eg:
function average (a, b = a+100){
    console.log(a,b);
    const avv = (a+b)/2;
    return avv;
}

const avv = average(10);
console.log(avv);

// right arguments cannot be passed on left side. Because it is initialized from left side to right side

// Rest parameters 
// it is a syntax for accepting parameters in function  
//it's syntax is similar to spread operator and array destructuring...
function test(){
    const arr = [11,22,34,43];
    const[a, ...rest] = arr;


    console.log(a, rest);

}
test();                                                             //destructuring...

//rest will be an empty array if -;

function test(){
    const arr = [11,24,23,34];
    const [a,b,c,d, ...rest] = arr;
    console.log(a,rest)
} 
//
function test(a,b, ...rest ){
    console.log(a,b,rest);
}
 
test(11, 44, 64, 22, 66);  
// giving only rest operator
function test(...rest){
    console.log(rest);
}
test(34,21,56,76,86,65)

// its main advantage is that we can use array functions in parameters

function test(...total){
    const a = total.reduce((sum,current) => sum + current)
    console.log(a);
}

test(11,44,22,34,64,2);

// pass an array by splitting it into elements
 function test(...total){
    console.log(total)
        const a = total.reduce((sum, current) => sum+current)
        console.log(a);
 }

 const l = [11,44,64,22,34,1,100];
 test(...l); // array can be passed as sepearate elements
 // that's it rest parameters

 // Parameter Destructuring...
// // eg:

function test(a){
    const{
        name,
        age
    }=a;

    console.log(name, age);
}
const ojj = {
    name: 'Code Malayalam',
    age: 1
}
test(ojj);
//we can destructure the the parameter pass
// eg:
function test({name,age}){          //give it as single line
    
    console.log(name,age);
}
const ob = {
    name:'codd',
    age: 1
}

test(ob);
// Rest arguments -; make arguments more than one as a single array
//parameter destructuring -; making an array or objects into seperate variables.

// var   let  const
var ar ='coddee';
console.log(a);
// let is used instead for var 
//a variable can be declared in 2 places-;
//   1)inside a function//  2)outside a function

var ar = 10;                      //global variable

function test(){
    var a = 10;                   //local variable
}

// Every function has a stack memory. so if we declare a variable inside a function it will be stored on the stack
// but if we declare a variable outside the function it will be stored on window object. Every webpage have a window object.
//  when we load a webpage it will be stored as an object in the window.


var ar = 10;                  // both are equal...
window.a = 10;

// location property in the window tell us which webpage is now opened

var location = "hello";  //it will be going to windows.location 


// if we declare a variavle using var ,it will be going to window object.
let ar = "hello";
// 1)'let' will not corrupt window object.
// 1)'var' will corrupt window object.


// scope of a variable is the accessibility of a variable.

function test(){
    console.log(testVar);
    var testVar;
}
test();
// inside a function we can access a 'var' variable from anywhere inside the function.

function test(){
    console.log(testVar);
    testVar = 12;
    var testVar;
    console.log(testVar);

}
// we can declare a variable after it's use
// reason for working this is 'Hoisting',it will make the declaration on the top .
// it only carry declaration to the top
//eg:
function test(){
    console.log(testVar);
    var testVar = 12;
}
test()                             //  O/P = undefined
// 2)'var' variable does hoist
// 2) 'Let' variable  does not hoist
function test() {
    console.log(testVar);
    let testVar;
    testVar = 12;
}
test();  
// 3) Allows multiple declaration in a scope
// 3) Only one declaration in a scope

//A block start with curly brace open and end with curly brace close.
function test(){
                           // this is a block with no content.
}
test();
// scope of 'var' variable is function

//a block inside a block given below 
function test(){
    if(true) {

    }
}

test();

// scope of 'let' is a block
// 4) var - Function Scope
// 4) let - Block Scope
// let block eg:

function test() {
    let a = 20;
    if(true){
        let a = 100;
        console.log(a);
    }
    
}    
test();


//
function test(){
    let a = 20;
    if(true){
        let a = 100;
    }
    console.log(a);
}
test();

/*            VAR               */ 
// corrupts window object
// Can be declared anywhere in the function
// Hoisted
//Supports multiple declaration in a scope
// function scope


/*             LET                          */
// Doesn't corrupt window object 
// Declare before use
// Not Hoisted
// Only one declaration in scope
// Block scope

/*            CONST     (constant)                         */
// it has all properties of const with 2 extra properties
//1) when we declare a variable with const a value should be assign to it
//2) Once declared we can't change the value of const.
function test(){
    const a = 10;
    a = 100;
}
test();

// note that when it is a array or obj it only store reference not value
//eg:
function test(){
    const a = [];
    console.log(a);
}
test();
// but we can push a value to the array
function test(){
    const a = [];
    a.push(12)
    console.log(a);
}

test();
// const can mutate only already existing array ,new array cannot be created


// function test(){
// const a = [];
// a = [12, 11]
// }
// test();

//in other words a variable declared using const cannot use '='(assignment variable)

// JSON - JavaScript Object Notation

//datatypes used in JavaScript are -;

// 1)Integer
var arre = 10;

// 2) Boolean
var b = false;

//  3)String
var c = 'Codeeeed code';

// 4) Array
var dre = ['codeed', 'code'];

// 5) Object
var e = {
   name: 'codded code',
   age: 1,
   topic: ['javascript', 'React', 'SCSS','git','aws'],
   caption: 'Keep calm and Js'
};

function submit(){
    const items = document.getElementsByClassName('data');
    const data = {};
    for (let item of items){
        data[item.name] = item.ariaValueMax;
    }
    console.log(data);
}

// Data Transfer Format -conversion of data which everyone understands.
// eg for data Transfer Format -;
/*         .CSV
           .YAML
           .XML
           .JSON
*/
// Among this one of the popular data transfer format is JSON.
// JSON is Language Independent
//JSON - JavaScript Object Notation
// JSON format inspired from JavaScript

var ar = 10;        //Integer

var b = false;     // Boolean

var c = 'coded code' // String

var dr =['coded','code'] //Array

var e = {
    name: 'coded code',
    age: 22,
    topic:['javaScript','React','SCSS','git','aws'],
    caption: 'Keep calm and JS'                             //Object
};

var f = null;                      //Null

// To make these JSON
//1) make it string

// eg;
var jsonE = `
    {
        name: 'coded code',
        age: 22,
        topic:['JavaScript','React','SCSS','git','aws'],
        caption: 'Keep calm and JS'
}
`;
// inside JSON quote("") is neccessary for object key
// eg:

var jsonE = `
    {
        "name": 'coded code',
        "age": 22,
        "topic":['JavaScript','React','SCSS','git','aws']
        "caption": 'Keep calm and JS'
    }
`
// In JSON string should be in double qoutes
// In JSON don't put comma after last element
//JSON format
var jsonE = `
    {
        "name": "coded code",
        "age": 1,
        "topic":["JavaScript","React","SCSS","git","aws"],
        "caption":"Keep calm and JS" 
    }
`;
//JavaScript JSON Library to convert arr,obj etc.. to JSON /JSON string

var jsonE = JSON.stringify(e);
 // to convert string to obj,array etc..
var obbjj = JSON.parse(jsonE);
console.log(obj.name);

var json = JSON.stringify(dr);
console.log(json); 

//RegEx -; Regular Expression
// It is a library related to string. to extract substring,or particular words etc..

 //Form Validation
 function textOnChange(arg){
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if (error){
        label.innerText =error;
    }
    else
    {
        label.innerText = '';
    }
 }
  

 function validate(value){
    return false;
 }
 // restrictions we give to a value is called patterns
 //eg:
 // Characters A-Z
 //Numbers 0-9
 // Underscore_
 //


 //Regular Expression library checks whether the patterns and input string matches
 // If it matches the pattern it return succes else failure  


 //Rules for writing Patterns

 // .string should br inside forward slash
 //case sensitive
 const regexp = /cat/;

 const resullt = regexp.test('my bat'); 
 console.log(result);

 // after giving 2 forward slash for patterns we can give different flags

 const regex = /cat/i;             //it is case sensitive
 //   const regex = new regex('cat','i');          //elaborated 
   
 //   const resuult = regex.test('my Cat');
 //   console.log(resuult);
 
 const str1 = "The cat is white";
 const str2 = "Rat eats meat";
 const str3 = "Is it ok?";
 
 var result1 = regex.test(str1);
 console.log(result1);
 
 var result2 = regex.test(str2);
 console.log(result2);
 
 var result3 = regex.test(str3);
 console.log(result3);

 //Special Characters
/*

            [] -;means one of the characters inside the square bracket 
            [a,b,c] -; means a/b/c
*/
//eg:
const reeg = /[cr]at/i;
// also range can be given
  
// const reeg = /[k-z0-9]at/i

const st1 = "The cat is white";
const st2 = "Rat eats meat";
const st3 = "Is it ok?";

var rest1 = reeg.test(st1);
console.log(rest1);

var rest2 = reeg.test(st2);
console.log(rest2);

var rest3 = reeg.test(st3);
console.log(rest3);

/*
        [-](hyphon) to mention range inside the square bracket 
*/ 
/*
        [^][$] -; [^] (start of string), [$] (end of string)
*/ 

const rec = /^cat/i;
//const rec =/meat$/i;

const sst1 = "The cat is white";
const sst2 = "Cat eats meat";
const sst3 = "These are good meats";

var re1 = rec.test(sst1);
console.log(re1);

var re2 = rec.test(sst2);
console.log(re2);

var re3 = rec.test(sst3);
console.log(re3);
//      [m]-; multiline
const redd = /meat$/im;   // end of the line should be meat

const w1 = "The cat is white";
const w2 = "Cat eats meat";
const w3 = "These are good meats";
const w4 =`
good meat
is always good
`;
//if 'm' is not given then it check whether the string starting is same 
// 'm' chech whether the line start is same

/**
        [?] -;means optional / zero or one occurence 
 //eg:
 */
const  reed = /meats?$/im;

const veed = /fish(es)?$/im;

/*  
        [()] -;  to group things
*/
/*

    [*, +]  ->[*] -; zero or many occurence, [+] -; one or more occurence
    [.]     -; any character 
*/
function textOnChange(arg){
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if(error){
        label.innerText = error;
    }
    else{
        label.innerText = '';
    }
}

function validate(value){
    const recc = /^[a-z][a-z0-9_]*$/i;
    const ress = recc.test(value);
    if(ress){
        return '';
    }else{
        return 'Invalid String';
    }
}
// carrot in square bracket have another meaning
/* 
[^abc]  not abc
*/
/*
{} -> 
*/

const regeeex = /l{2}o+$/i;
const strin = 'hello'

const reult = regeeex.test(strin);
console.log(reult); 
/*
{} -> represents repeatition of just front character.
*/

const reg = /l{3}o+$/i;     //here l can repeat 3 times
const string = 'hello'

const resst = regex.test(string);
console.log(resst)


const regr =/l{4,6}o$/i;               // here l can be from 4 to 6
const stringg = 'helllo';

const rests = regr.test(stringg);
console.log(rests);

const regrr =/l{2,}o$/i;                  // here l can be 2 to more


// Meta characters
// \d = digits
const one = /\d/i;
const ten = 'Helo';

const ans = one.test(ten);
console.log(ans);

// \D = Non-digit

const two = /\D/i;
const eleven =12312;

// \s = whitespace

// \S = non-whitespace

// \w = word character

// \W = non-word character
 
// backslash is called as escape character

// \. specially dot 
//   . all characters

// Meta characters
// \d = digits
const one = /\d/i;
const teen = 'Helo';

const anss = one.test(ten);
console.log(ans);

// \D = Non-digit

const two = /\D/i;
const elevenn =12312;

// \s = whitespace

// \S = non-whitespace

// \w = word character

// \W = non-word character
 
// backslash is called as escape character

// \. specially dot 
//   . all characters


// how to extract a substring from string using regular expression
function textOnChange(arg){
    const label = document.getElementById('validation-label');
    const error = validate(arg.value);
    if(error){
        label.innerText = error;
    }
    else{
        label.innerText = '';
    }
}

function validate (value){
    const regex =/^d{1,2}-d{1,2}-d{4}$/i
    const result = regex.test(value);
    if(result){
        return '';
    }else{
        return 'Invalid String'
    }
}
// in a month there is only 31 days 
function textOnChange(arg){
    const label = document.getElementById('validation - label');
    const error = validate(arg.value);
    if(error){
        label.innerText = error;
    }
    else{
        label.innerText = '';
    }
}

function validate(value){
    const ref = /^([012]?\d | 3[01])([0]?\d|1[012])\d{4}$/i;
              // first character can be 0/1/2 second character can be any digit | if first character is 3 second character can be 0/1
                 // first character can be 0 and second character can be any digit | if first character is 1 then second characterr can be 0/1/2 only. 
    const ret = value.match(ref);
    if(ret === null){
        return 'Invalid String';
    }
    else{
        return '';
    }
}
// 'test' returns false if it doesn't match 
// match function returns null if the string is not match with the given string(ref)
// () round brace are called capturing group


// we extract substring by determining capturing with round brace.
// if we don't want to show something in the capturing brace but still wanted it in a round brace then put "?:"
// eg:
const ref = /?:([012]?\d |3[01])([0]?\d|1[012])\d{4}$/i;
"a-b-c".replace(/-/, ':')     // O/p ->a:b-c
"a-b-c".replace(/-/g,':')     // O/p ->a:b:c

//  flag g ==> global
// if there is no g then it will end in the first match
 

// $$ insert $
//$&  insert entire match
// $' Insert preceding string

const val1 = 5;
const val2 = 5;
console.log("Integer",val1 === val2);

const val3 = "Code Malayalam";
const val4 = "Code Malayalam";
console.log("string", val3 === val4);

const val5 = ["code", "Malayalam"];
const val6 = ["code", "Malayalam"];
console.log("Array",val5 === val6);

const val7 = { name: "Code Malayalam"};
const val8 = { name: "Code Malayalam"};
console.log("Object", val7 === val8); 
// primitive DataTypes -> it is not an object and has no methods 
// All primitives are immutable
/*
.string
.number
.bignit
.boolean
.undefined
.symbol
.null
*/
//Non-Primitive DataTypes
/*
.Object
.Array
.Map
.Function
*/
//Equality acts diffferent for primitive and non-primitive
// variable stores the reference not the value
// Also it stores which type is it like primitive/non-primitive
 
// while comparing 2 primitives then its value is compared
// if it is non-primitive the its reference is compared

//Mutation
//eg:
var ae ={
    name: 'Code Malayalam'
};
 
var b = ae;

b.name = 'Code Malayalam 2.0';

console.log('ae=',ae);
console.log('b=',b);

// the process of changing value of variable is called variable mutation
// Case of Primitives

var ae = 10;
var b=ae;
b=b+1;

console.log('ae=',ae);
console.log('b=',b);

// here also it stores reference but it gives 2 diff values
//primitive are non-mutable(Immutable).The value of reference can't change
//here b=b+1 so ot is trying to change the primitive so it creates a new reference

// Variable store reference
// Value can change-Mutable
// value cannot change -Immutable
 

// const -> reference cannot be changed
// Immutable ->value cannot be changed

//Issues with Mutable
function junk(obj){
    const ret = {
        ...obj,
        test: "Test"
    }
    return ret;
}
const myObj = {
    name: 'Coded code'
};
var ret = junk(myObj);
console.log(myObj);
console.log(ret)
console.log(ret === myObj);
// therefore like this we make changes in an object immutably
//This is immnutable coding
//if we encounter an object/array we can create new objects/array using spread operator.Or if we want to manipulate array we can use array functions like map(),reduce(),filter() etc...
//Avoid mutating functions
