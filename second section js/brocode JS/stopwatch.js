const display = document.getElementById("display");
let timer = null;          //means no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start(){
  if(!isRunning){        // if not running we need to start the stopwatch
    startTime = Date.now() - elapsedTime  //(elapsedTime = 0 initially)
    timer = setInterval(update, 10);
    isRunning = true;
  }
 
}

function stop(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }

}
function reset(){
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00";
}
function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime    //This is in milliseconds
  // we need to convert the elapse time into a readable format using hours, minutes, seconds and milliseconds
  
  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 %60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}: ${minutes}: ${seconds}:${milliseconds}`;
}