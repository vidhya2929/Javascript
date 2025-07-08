// CALCULATOR PROGRAM

const display = document.getElementById("display");
function appendToDisplay(input){
  display.value += input;

}
function clearDisplay(){
  display.value = "";
}
function calculate(){
//   display.value = eval(display.value)
// }

// eval() function takes an expression and gives the output

try{
  display.value = eval(display.value);
}
catch(error){
  display.value = "Error";
}
}