// var button = document.getElementById('bye');
// button.style.background = 'red';
// button.onclick = () => {
//     console.log(button.innerHTML)
// }



// function main2()
// {
//     var button = document.getElementById('bye');
//     button.style.background = 'red';
//     button.onclick = () => {
//         console.log(button.innerHTML);
//     }
// }
// main2();

//Self invoking function
(function(){
    var button = document.getElementById("bye");
    button.style.background = "red";
    button.onclick = () =>{
        console.log(button.innerHTML);
    }
})();
// to avoid global scope issue in immediate invokation