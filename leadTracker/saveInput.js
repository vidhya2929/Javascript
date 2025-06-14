let myLeads = []
const ulEL = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value =""
    renderLeads()
})

function renderLeads(){
        let listItems = ""

        for(let i = 0; i<myLeads.length; i++){
            // listItems += "<li><a target='_blank'href='"+ myLeads[i] +"'>" +myLeads[i] + "</a></li>"
            listItems += `
            <li>
            <a target='_blank'href='${myLeads[i]}'>${myLeads[i]}
            </a>
            </li>
            `
        }
        ulEL.innerHTML = listItems
}
// const container = document.getElementById("container")
// container.innerHTML = "<button onclick='buy()' >Buy!</button>"
// function buy(){
//     console.log("Thak you for buying")
//     container.innerHTML += "<p> Thank you for buying</p>"
// }