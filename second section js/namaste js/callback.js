//click handler button

// document.getElementById("click me").addEventListener("click",function xyz(){            //here the function is a callback function
//     console.log("button Clicked");
// });


//It should show button clicked 1,button clicked 2,button clicked 3
function attachEventListeners(){
let count = 0;
document.getElementById("click me").addEventListener("click",function xyz(){
    console.log("Button Clicked",++count)
});
}
attachEventListeners();
//GARBAGE COLLLECTIONS & removeEventListeners
