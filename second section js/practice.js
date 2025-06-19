// Throw 
// we can throw our own exceptions using 'throw' keyword
console.log('started');
let h,k,resu;
try{
    console.log('on try');
    a = getVal1();
    b = getVal2();
    resu = processValues(a,b);
}
catch(e){
    console.log("Inside Catch")
    resu = 0
}
console.log(resu);
console.log('ended');


function fetVal1(){
    return 12;
}
function getVal2(){
    console.log("inside getVal2");
    throw("my error");
    return 22;
}
function processValues(a,b){
    return a+b;
}