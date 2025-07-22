// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {     //for each button in the nodelist do add class enabled
//   button.classList.add("enabled");
// });

// buttons.forEach(button => {let buttons = document.querySelectorAll(".myButtons");



// buttons.forEach(button => {     //for each button in the nodelist do add class enabled

//   button.classList.add("enabled");

// });



// buttons.forEach(button => {

//   button.classList.remove("enabled");

// });

// buttons.forEach(button =>{

//   button.addEventListener("mouseover", event =>{

//     event.target.classList.toggle("hover");

//   });

// });

// buttons.forEach(button => {

//   button.addEventListener("mouseout", event => {

//     event.target.classList.toggle("hover");

//   });

// });
//   button.classList.remove("enabled");
// });
// buttons.forEach(button =>{
//   button.addEventListener("mouseover", event =>{
//     event.target.classList.toggle("hover");
//   });
// });
// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
//   });
// });

let buttons = document.querySelectorAll(".mButtons");

buttons.forEach(button => {
  button.classList.add("enabled");
});

buttons.forEach(button =>{
  button.addEventListener("mouseover", event =>{
    event.target.classList.toggle("hover");
  });
});

buttons.forEach(button =>{
  button.addEventListener("mouseout", event =>{
    event.target.classList.toggle("hover");
  });
});
buttons.forEach(button => {
  button.addEventListener("click", event =>{
    if(event.target.classList.contains("disabled")){
      event.target.textContent +="emj"
    }
    else{
      event.target.classList.replace("enabled" , "disabled");
    }
  });
});