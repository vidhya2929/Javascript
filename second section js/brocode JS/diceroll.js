// DICE ROLLER PROGRAM
function rollDice(){
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");
  const values = [];              //stores all the dice rolls (the numbers)
  const images =[];              // images of dice

// for loop
  for(let i =0; i < numOfDice; i++){
        const value = Math.floor(Math.random() *6 ) + 1;
        values.push(value);
        images.push(`<img src="images_dice/${value}.png" alt="Dice ${value}">`);  //string representation of an HTML element(Using angle bracket to create an image element)
  }
  diceResult.textContent = `dice:${values.join(', ')}`;
  diceImages.innerHTML = images.join('');
}