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



// let featuredPosts = ["Check out my Netflix clone",
//                     "Here's the code for my project",
//                     "I've just relaunched my portfolio"]
// console.log(featuredPosts[0])
// let mySelf=["Vidhya M Robert",20,true]

// let cards = [7,4]
// cards.push(6)
// console.log(cards)

// let messages = ["Hey,how's it going?",
//                 "I'm great,thank you! How about you?",
//                 "All good, Been working on my portfolio lately."
// ]

// let newMessage = "Same here!"
// messages.push(newMessage)
// console.log(messages)
// messages.pop(newMessage)
// console.log(messages)

// for( let count = 1; count<11; count+=1){
//     console.log(count)
// }
// for (let countedd = 10; countedd<21; countedd+=1){
//     console.log(countedd)
// }
// for (let i = 10; i<101; i+=10){
//     console.log(i)
// }
// for(let i = 0; i<6; i+=1){
//     console.log(i)
// }
// let messages =[
//                 "Hey, how's it going?",
//                 "I'm great, thank you! How about you?",
//                 "All good.Been working on my portfolio lately.",
//                 "Same here!"
// ]
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// for(let i=0; i<messages.length; i+=1){
//     console.log(messages[i])
// }
// let cards = [7,3,9]
// for (let i=0; i<cards.length; i++){
//     console.log(cards[i])
// }
// let sentence = ["Hello","my","name","is","Vidhya"]
// let greetingEl = document.getElementById("greeting-el")
// for (let i=0; i<sentence.length; i++){
//     greetingEl.textContent += sentence[i] +" " 
// }
// let player1Time = 102
// let player2Time = 107

// function getFastestRaceTime(){
//     if(player1Time < player2Time){
//         console.log( player1Time)
//     }
//     else if(player2Time < player1Time){
//         console.log( player2Time)
//     }
//     else{
//         console.log( player1Time)
//     }
// }
// let getFastestRace = getFastestRaceTime()
// // console.log(getFastestRace)
// function totalRace(){
//     return player2Time+player1Time
// }
// let raceTimeTotal = totalRace()
// console.log(raceTimeTotal) 
// let randomNumber = Math.random() *6
// console.log(randomNumber)

// let flooredNumber = Math.floor(3.45632)
// let floor = Math.floor(4.9999)
// let value = Math.floor(5.98723)
// console.log(flooredNumber)
// console.log(value)
// console.log(floor)
// let randomNumber2 = Math.floor(Math.random()*6)+1
// console.log(randomNumber2)


// let randoms = Math.floor(Math.random()*7)
// console.log(randoms)

// 
// let hasCompletedCourse = false
// let givesCertificate = true
// if (hasCompletedCourse === true){
//     if(givesCertificate === true){
//         generateCertificate()
//     }
// }
// if (hasCompletedCourse === true && givesCertificate === true){
//     generateCertificate()
// }
// function generateCertificate(){
//     console.log("Generating certificate...")
// }

// let hasSolvedChallenge = false
// let hasHintsLeft = false

// if(hasSolvedChallenge === false && hasHintsLeft === false){
//     showSolution()
// }

// function showSolution(){
//     console.log("Showing the solution....")
// }
// let likeDoc = true
// let likeStartUps = false
// if (likeDoc === true || likeStartUps === false){
//     recommendMovie()
// }

// function recommendMovie(){
//     console.log("Hey, check out this new filim we think you will like!")
// }
// let courses = {
//     title:"Learn CSS Grid for free",
//     lessons:16,
//     creator:"Per Harald Borgen",
//     length:63,
//     level:2,
//     isFree:true,
//     tags:["html","css"]
// }
// console.log(courses["tags"])
// console.log(courses.tags)
// let airbnb = {
//     title:"white castle",
//     isFree: false,
//     price: 88000,
//     available:["pool","playGround","homeTheatre"]
// }
// console.log(airbnb.price)
// console.log(airbnb.title)
// let person = {
//     name: "Vidhya M Robert",
//     age: 20,
//     country: "India"
// }
// function logData(){
//   console.log(person.name +" is "+ person.age +" years old and lives in "+ person.country)
// }
// logData()
// let age = 15
// if(age < 6){
//     console.log("free")
// }
// else if(age>6 && age<=17){
//     console.log("Child Discount")
// }
// else if(age>18 && age<=26){
//     console.log("Student discount")
// }
// else if(age>27 && age<=66){
//     console.log("full price")
// }
// else{
//     console.log("senior citizen discount")
// }
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world: ")
// for(i=0; i<largeCountries.length;i++){
//     console.log("-"+largeCountries[i])
// }
// let largeCountries2 = ["Tuvalu","India","USA","Indonesia","Monaco"]
// largeCountries2.shift()
// largeCountries2.unshift("China")
// largeCountries2.pop()
// largeCountries2.push("Pakistan")
// console.log(largeCountries2)
// let dayOfMonth = 13
// let weekday = "Friday"
// if(dayOfMonth === 13 && weekday === "Friday"){
//     console.log("Spooky face")
// // }
// let hands = ["rock","paper","scissor"]

// function randomItem(){
//     let randomIndex = Math.floor(Math.random()*3)
//     return (hands[randomIndex]) 
// }
// console.log(randomItem())
// let fruit = ["apple","orange","apple","apple","orange"]
// let appleShelf = document.getElementById("apple-shelf")
// let orangeShelf = document.getElementById("Orange-shelf")


// function putApplesOranges(){
//     for( let i=0; i<fruit.length; i++){
//       if(fruit[i] === "apple"){
//         appleShelf.textContent += "apple"
//       }
//       else if(fruit === "orange"){
//             orangeShelf.textContent += "orange"
//       }
//     }
// }
// putApplesOranges()
