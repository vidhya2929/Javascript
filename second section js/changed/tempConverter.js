// Temperature converting program
const textbox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temp;
function convert(){
  if(toFahrenheit.checked){
      temp = Number(textbox.value);    //the user input is may string so to convert it 
      temp = temp * 9 / 5 + 32;
      result.textContent = temp.toFixed(1) + "degF";      // .toFixed => built -in-method for precision
      // .toFixed(1) => give us one digit past the decimal place
  }
  else if(toCelsius.checked){
    temp = Number(textbox.value);
    temp = (temp - 32) * (5/9);
    result.textContent = temp.toFixed(1) + "degC"

  }
  else{
    result.textContent = "Select a unit";
  }
}