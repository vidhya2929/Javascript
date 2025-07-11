// MOUSE EVENTS IN JAVASCRIPT
// eventListener = Listen for specific events to create interactive web pages
//                 events: click(when we click on something), mouseover(hover over something),mouseout(hovering out something)
//                 .addEventListener(event,callback);
                  // .addEventListener(click, changeColor);


const myBox = document.getElementById("myBox");

function changeColor(event){

}
// myBox.addEventListener("click",changeColor);


// event is an object it is provided by the web browser (it is an object that contains information about something that happens)

// to change the color while clicking
function changeColo(event){
  event.target.style.backgroundColor = "tomato";
}