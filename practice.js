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
// let inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked from addEventListener")
// })
// let box = document.getElementById("box")
// box.addEventListener("click",function(){
//     console.log("I want to open the box!")
// })
// const basePrice = 520
// const discount = 120
// let shippingCost =12
// let shppingTime = "5-12 days"
// const fullPrice = basePrice -discount + shippingCost
// console.log("Total cost:"+fullPrice+".It will arrive in" +shppingTime)
// const container = document.getElementById("container");
// container.innerHTML = "<button onclick='buy()'>Buy!</button>";
// console.log(container)
// function buy() {
//     container.innerHTML += "<p>Thank you for buying!</p>";
// }
// let myLeads = ["www.beyondinsane.com","www.comybeyond.com","www.yahoo.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     console.log(myLeads)
// })
// for (let i=0; i<myLeads.length; i++){
//     ulEl.textContent += "<li>" myLeads[i] + "</li>" 
// }
// const ulEl = document.getElementById("ul-el")
// let myLeads = ["www.beyondinsane.com","www.comybeyond.com","www.yahoo.com,www.qwerty.com"]
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("input-btn")
// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })
// function renderLeads(){
// let listItems = ""
// for (let i=0; i < myLeads.length; i++){
//     listItems += "<li><a target='blank' href ='#" +myLeads[i] +"</a></li> "
//      const li = document.createElement("li")
//      li.textContent = myLeads[i]
//      ulEl.append(li)
//     // "<li><a target='_blank' href ='" +myLeads[i] +"</a></li> "
//     listItems +=
//     <li>
//         <a target='_blank' href='${
//         myLeads[i]+}'>${
//             myLeads[i]}</a>
//     </li>
// }
// ulEl.innerHTML = listItems
// }
// const recipient = "james"
// let sender = "Hermione granger"
// const email = 
//     `Hey ${recipient}!
//     How is it going? 
//     Cheers ${sender}`
// console.log(email)
// let myLeads = []
// const inputEl = document.getElementById("input-el")
// const inputBtn = document.getElementById("Input-btn")
// const ulEl = document.getElementById("ul-el")
// localStorage.setItem("myLeads","www.examplelead.com")

// inputBtn.addEventListener("click",function(){
//     myLeads.push(inputEl.value)
//     inputEl.value = ""
//     renderLeads()
// })
// function renderLeads(){
//     let listItems = ""
//     for(let i=0; i<myLeads.length;i++){
//         listItems +=
//             <li>
//                 <a target='_blank' href='${
//                 myLeads[i]+}'>${
//                     myLeads[i]}</a>
//             </li>
//     }
// }
// localStorage.setItem("Myname","Hermione Granger")
// let name = localStorage.getItem("myName")


//truthy
//falsy

// false
//zero
// false
//0
//""
//null
//undefined
//Nan
// const credits = 0
// if (credits > 0){
//     console.log("Let's play")
// }
// else{
//     console.log("Sorry, you have no credits")
// }
// let currentViewers 
// console.log(currentViewers)
// let currentViewerser =["jane","kainy"]
// console.log(currentViewerser[5])

// let trueOfFalse = Boolean("hello")


// console.log(trueOfFalse)
// console.log(Boolean("") ) //false
// console.log( Boolean("0") ) //true
// console.log( Boolean(100) ) //true
// console.log( Boolean(null) )//false
// console.log( Boolean[0] )//true
// console.log( Boolean(-0) )//flase
let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.grtElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myleads"))
if (leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage
    render(myLeads)
}
function render(leads){
    let listItems = ""
    for(let i=0; i < leads.length; i++){
        listItems +=
                    <li>
                        <a target='_blank' href='${
                        leads[i]+}'>${
                            leads[i]}</a>
                    </li>
    }
}
deleteBtn.addEventListener("dblclick",function(){
    console.log("double clicked!")
    localStorage.clear()
    myLeads = []
})
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render()
})