let myLeads = []
// let myLeads = `["www.awesomelead.com"]`
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.bryondcomy.com")
// myLeads = JSON.stringify(myLeads)
// console.log(typeof myLeads)
let leadsFromlocalStorage = JSON.parse(localStorage.grtItem("myLeads"))
console.log(leadsFromlocalStorage)
const ulEL = document.getElementById("ul-el")
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
console.log(localStorage.getItem("myLeads"))
localStorage.clear()




inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value =""
    localStorage.setItems("myLeads",JSON.stringify(myLeads))
    renderLeads()
    console.log(localStorage.getItem("myLeads"))
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