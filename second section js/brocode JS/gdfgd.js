function hangeText(){
  document.getElementById("demo").innerHTML = "You clicked the button!";
}
function addNumbers(){
  let a = Number(document.getElementById("num1").value);
  let b = Number(document,getElementById("num2").value);
  document.getElementById("result").innerHTML = "Sum:" +(a+b);
}
function changeColor(){
  document.body.style.backgroundColor = "lightblue";
}

for(let i= 1; i <= 5; i++){
  let li = document.createElement("li");
  li.textContent = "Number "+i;
  document.getElementById("list").appendChild(li);
}

function sayHi(){
  alert("Hi there!");
}
function showDate(){
  document.getElementById("date").innerHTML = new Date();
}
function toUpperCase(){
  let input = document.getElementById("name").value;
  document.getElementById("output").innerHTML = input.toUpperCase();
}
function changeImage(){
  document.getElementById("myImg").src = "https://via.placeholder.com/100/ff0000";
}

function toggleText(){
  let text = document.getElementById("text");
  if(text.style.display === "none"){
    text.style.display = "block";
  }
  else{
    text.style.display = "none";
  }
}
function multiply(){
  let a = document.getElementById("n1").value;
  let b = document.getElementById("n2").value;
  document.getElementById("res").innerHTML = a * b;
}

let name = prompt("what is your name?");
alert("hello")