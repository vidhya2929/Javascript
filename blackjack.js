// let firstCard = 10
// let secondCard = 11
// let sum = firstCard+secondCard
// let hasBlack =false
// let isAlive = true
// if(sum<=20){
//     console.log("Do you want to draw a new card")
// }
// else if(sum===21){
//     console.log("Wohoo! You've got Blackjack!")
//     hasblack = true
// }
// else{
//     console.log("You are out of the game")
//     isAlive=false
// }

// console.log(isAlive)
// console.log(hasBlack)

// console.log(4===3)//false
// console.log(5>2)//true
// console.log(12>12)//false
// console.log(3<0)//false
// console.log(3>=3)//true
// console.log(11<=11)//true
// console.log(3<-2)//false
let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""
// 
let messageEl = document.getElementById("message-el")
console.log(messageEl)
let cardsEL = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
console.log(sumEl)
function renderGame(){ 
    // render out firstcard and SecondCard
    cardsEL.textContent = "Cards:" + cards[0]+ " "+ cards[1]
    //render out All the cards we have
    sumEl.textContent = "Sum: "+sum
    if(sum <= 20)
    {
        message = "Do you want to draw a new card?"
    }
    else if(sum===21){
        message = "Wohoo! You've got Blackjack!"
        hasBlackJack = true 
    }
    else{
        message="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}
function newCard(){
    console.log("Drawing a new card from the deck!")
    let card = 6
    sum +=card
    renderGame()
}
function startGame(){
    renderGame()
}
let featuredPosts = ["Check out my Netflix clone",
                    "Here's the code for my project",
                    "I've just relaunched my portfolio"]
console.log(featuredPosts[0])
