const clockEl = document.getElementById("clock");
function updateClock(){
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();


  hours = String(hours).padStart(2,"0");
  minutes = String(minutes).padStart(2,"0");
  seconds = String(seconds).padStart(2, "0");

  const timeString = `${hours} : ${minutes} : ${seconds}`;

  clockEl.textContent = timeString;

}
updateClock();




