console.log("one")

const a = [2,3,7,6,4,5];


// document.getElementById('button').onclick= myFunction;
function myFunction(arg){
    console.log(arg);
}
a.forEach(myFunction);
console.log("two")