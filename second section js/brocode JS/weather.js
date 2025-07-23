// Weather App
const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");

weatherForm.addEventListener("submit",async  event =>{
      event.preventDefault();

      const city = cityInput.ariaValueMax;
      if(city){
        try{
            const weatherData = await getWeatherData(city);
            displayWeather
        }
        catch{
          console.error(error);
          displayError(error);
        }

      }
      else{
        displayError("Please enter a city");
      }
});

async function getWeatherData(city){
  const apiUrl = ``;
  const response = await fetch(apiUrl);
}
if(!response.ok){
  throw new Error("Could not fetch weather data");
}
function displayWeatherInfo(data){

}
function getWeatherEmoji(weatherId){

}
function displayError(message){
  const errorDisplay = document.createElement("p");
  errorDisplay.textContent = message;
  errorDisplay.classList.add("errorDisplay");

  card.textContent = "";
  card.style.display = "flex";
  card.appendChild(errorDisplay);
}






















let myPromise = new Prromise(function(myResolve, myReject){
  myResolve();
  myReject();
})
function myFirst(){
  myDisplayer("hello");
}
function mySecond(){
  myDisplayer("Goodbye")
}
myFirst();
mySecond();

function myFirst(){
  myDisplayer("Hello");
}
function mySecond(){
  myDisplayer("Goodbye");
}
mySecond();
myFirst();

function myDisplayer(some){
  document.getElementById("demo").innerHTML = some;

}
function myCalculator(num1, num2){
  let sum = num1+ num2;
  return sum;
}
let result = myCalculator(5,5);
myDisplayer(result);

function myDisplayer(some){
  document.getElementById("demo"),innerHTML = some;
}
function myCalculator(num1, num2, myCallback){
  let sum = num1 + num2;
  myCallback(sum);
}
myCalculator(5, 5, myDisplayer);

const myNumbers = [4,1,-20,-7,5,9,-6];
const posNumbers = removeNeg(myNumbers, (x) => x >=0);
document.getElementById("demo").innerHTML = posNumbers;

function removeNeg(numbers, myCallback){
  const myArray = [];
  for(const x of numbers){
    if(myCallback(x)){
      myArray.push(x);
    }
  }
  return myArray;
}


