const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const talkList = document.getElementById("taskList");

addBtn.addEventListener("click",addtask);

function addtask(){
  const text = taskInput.value.trim();
  if(text === ""){
    alert("Please enter a task!");
    return
  }
  const quotes = [
    "Believe in yourself.",
    "You are stronger than you think.",
    "Never stop learning.",
    "Small steps every day.",
    "Push through the hard days.",
    "Success is built daily.",
    "Stay consistent and focused.",
    "Dream big. Work hard.",
    "Every day is a fresh start.",
    "You’ve got this!"
  ];
  
  const quoteElement = document.getElementById("quote");
  const button = document.getElementById("generateBtn");
  
  button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteElement.textContent = quotes[randomIndex];
  });
  
const li = document.createElement("li");
li.textContent = text;

const delBtn = document.createElement("button");
delBtn.textContent = "*";
delBtn.className ="delete";
delBtn.onclick = () => li.remove();

li.appendChild(delBtn);
taskLost.appendChild(li);

taskInput.value = "";
taskInput.focus();
}