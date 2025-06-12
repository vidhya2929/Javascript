// let cards = []
// let sum = 0
// let hasBlackJack = false
// let isAlive = false
// let message = ""
// let messageEl = document.getElementById("message-el")
// console.log(messageEl)
// let cardsEL = document.getElementById("cards-el")
// let sumEl = document.getElementById("sum-el")
// console.log(cards)

// let player = {
//     name:"per",
//     chips:145
// ,
// sayHello:function(){
//     console.log("Heissan!")
// }
// }
// player.sayHello()

// let playerEL = document.getElementById("player-el")
// playerEL.textContent = player.name+": $"+player.chips

// function getRandomCards(){
//     let randoms = Math.floor(Math.random()*13)+1
//     if(randoms>10){
//         return 10
//     }
//     else if(randoms===1){
//         return 11
//     }
//     else{
//         return randoms
//     }
// }
// function startGame(){
//     isAlive = true
//     let firstCard = getRandomCards()
//     let secondCard = getRandomCards()
//     cards = [firstCard,secondCard]
//     sum = firstCard+secondCard
//     renderGame()
// }
// function renderGame(){ 
//     // render out firstcard and SecondCard
//     cardsEL.textContent = "Cards:"

//     for(let i=0; i<cards.length; i++){
//         cardsEL.textContent += cards[i]+" "
//     }

//     //render out All the cards we have
//     sumEl.textContent = "Sum: "+sum
//     if(sum <= 20)
//     {
//         message = "Do you want to draw a new card?"
//     }
//     else if(sum===21){
//         message = "Wohoo! You've got Blackjack!"
//         hasBlackJack = true 
//     }
//     else{
//         message="You're out of the game!"
//         isAlive = false
//     }
//     messageEl.textContent = message
// }
// function newCard(){
//     if(hasBlackJack === false && isAlive === true){
//         console.log("Drawing a new card from the deck!")
//         let cardss = getRandomCards()
//         sum +=cardss
//         cards.push(cardss)
//         console.log(cards)
//         renderGame()
//     }
// }
const playerName ="Hermione"
let credits = 45

