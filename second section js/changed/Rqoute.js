const quote = [
  "Believe in yourself",
  "You are stronger than you think",
  "Never stop learning",
  "Small steps every day",
  "Push through the hard days",
  "Success is built daily",
  "Stay consistent and focused",
  "Dream Big.Work hard",
  "Every day is a fresh start",
  "You've got this!"
];
const quoteElement = document.getElementById("quote");
const button = document.getElementById("generateBtn");

button.addEventListener("click",() =>{                          //addEventListener => listens for an event(like a click,hover,key press) here click and also it is an arrow function -; a short way to define a function.this function will run only when the button is clicked.
  const randomIndex = Math.floor(Math.random() * quote.length);  //here quote is the array of quotes, quotes.length gives the number of items in the array                              
  quoteElement.textContent = quote[randomIndex]; //quote[randomIndex] -; gets the quote at that index
});

