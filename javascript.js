// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch=7

// let count = firstBatch + secondBatch

// console.log(count)
// let myAge= 20
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let count= 5

// count = count+1
// count=count+10

// console.log(count)

// let bonusPoints= 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)

// function increment(){
//     console.log("The button is clicked")
// }

// function countdown(){
// console.log(5)
// console.log(4)
// console.log(3)
// console.log(2)
// console.log(1)
// }

//setting up the race

// countdown()

//Go!
//players are running the race
//race is finished


// function print(){
//     console.log(42)
// }
// print()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// function lapSum(){
//     let totalTime = lap1+lap2+lap3
//     console.log(totalTime)
// }
// lapSum()

// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted = lapsCompleted+1
// }

// incrementLap()
// incrementLap()
// incrementLap()


// console.log(lapsCompleted)

// let countEl = document.getElementById("count-el")
// console.log(countEl)

// let count = 0
// function increment(){
//     console.log("The button is clicked")
//     count = count+1
//     countEl.innerText = count
// }
// function save(){
//     console.log(count)
// }

// let username = "per"
// console.log(username)
// let message = "You have tree new notifications"
// let messageToUser = message + ", "+username+"!"
// console.log(messageToUser)
// let name = "Vidhya M Robert"
// let greeting = "Hello, My name is "
// let myGreeting = greeting+name
// console.log(myGreeting)

// let points=4

// let bonusPoints = points + bonusPoints

// console.log(totalPoints)
// console.log(4+5)   9
// console/log("2"+"4")  24
// console.log("5"+1) 51
// console.log(100+"100") 100100
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment(){
    count+=1
    countEl.textContent = count
}

function save(){
    let newVariable = count +" - "
    saveEl.textContent += newVariable
    countEl.textContent = 0
    count = 0
}