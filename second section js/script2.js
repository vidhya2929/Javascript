// var button = document.getElementById('hello');
// button.style.background = 'green';
// button.onclick = () => {
//     console.log(button.innerHTML);
// }


// here button has global scope therfore the first value will be continue whether we change the button variable.
//  new button overwrite to old button
//therefore  there should be only one value in the button now 
// so to avoid this we need to use local scope instead of global scope

function main(){
    var button = document.getElementById('hello');
    button.style.background = 'green';
    button.onclick = () =>{
        console.log(button.innerHTML)
    }

}
main()          //  it is a global funtion so there is a chance of rewriting  
// This is immediate invokation
// to avoid global scope problem in immediate invokation js introduce immediate invoke function.

 //wrap a function and call it immediately after declaraing it 
 //Self invoking function
 (function(){
    var button = document.getElementById("hello");
    button.style.background = 'green';
    button.onclick = () =>{
        console.log(button.innerHTML);
    }
 })(); 


//  (function(a,b){
//  console.log(a,b);
// })(15,20);
