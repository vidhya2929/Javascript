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
 