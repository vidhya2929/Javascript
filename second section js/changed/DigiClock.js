// DIGITAL CLOCK PROGRAM
function updateClock(){
 const now = new Date();
 let hours = now.getHours()      //built-in method(getHours,toString...) with strings there is a padStart method padStart(2, 0) => for the first 2 characters pad them with zero;
 const meridiem = hours >= 12 ? "PM":"AM";
 hours = hours % 12 || 12;
 hours = hours.toString().padStart(2, 0);
 const minutes = now.getMinutes().toString().padStart(2,0);
 const seconds = now.getSeconds().toString().padStart(2,0);
const timeString = `${hours}:${minutes}:${seconds} ${meridiem}`;
document.getElementById("clock").textContent = timeString;
}
updateClock();
// To update this clock each time use setInterval()
// setInterval() => works like setTimeout except it will call a function repeatedly not just once
setInterval(updateClock, 1000);

// To make AM or PM
