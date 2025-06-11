let firstCard = 10
let secondCard = 11
let sum = firstCard+secondCard
let hasBlack = false
let isAlive = true
if(sum<=20){
    console.log("Do yo want to draw a new card")
}
else if(sum===21){
    console.log("Wohoo! You've git BlackJack!")
    hasBlack = true

}
else{
    console.log("you are out of the game")
    isAlive = false
}
console.log(4===3)
console.log(5>2)
console.log(12>12)
console.log(3<0)
console.log(3>=3)
console.log(11<=11)
console.log(3<=2)

let featuredPosts = ["Checkout my Netflix clone",
                    "Here's the code for my project",
                    "I've just relaunched my portfolio"
]
console.log(featuredPosts)
let mySelf = ["Vidhya M Robert",20,true]
console.log(mySelf)
let cards= [7,4]
cards.push(6)
console.log(cards)

let messages = ["Hey,how's it going?",
                "I'm great, thank you! How about you?",
                "All good, Been working on my portfolio lately."
]

let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages)
messages.pop(newMessage)
console.log(messages)

for (let count = 1; count<11; count+=1){
    console.log(count)
}
for (let countt = 10; countt<21; countt+=1){
    console.log(countt)
}
for (let i=0; i<6; i+=1){
    console.log(i)
}
let message = ["Hey, how's it going?",
                "I'm great, thank you! How about you?",
                "All good.Been working on my portfolio lately.",
                "Smae here!"
]
console.log(message[0])
console.log(message[1])
for (let i=0; i<cards.length; i++){
    console.log(cards[i])
}
let sentence = ["Hello","my","name","is","Vidhya"]