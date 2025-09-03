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
// 

