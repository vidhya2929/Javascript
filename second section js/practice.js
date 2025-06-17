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
//In javascript any function can be used as constructor


function MyButton(name){
    this.button = document.createElement('button');
    this.button.innerHTML = name;
    document.body.appendChild(this.button);
}

var b2 = new MyButton('clickyy')    // by calling using new any function act as a constructor
console.log(b2)
// new means  a new obj is created and it's constructor is  -> function MyButton(){}
// if there is no 'new' then it is a normal function 

