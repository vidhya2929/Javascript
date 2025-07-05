const display = document.getElementById("display");
let timer = null;  // null means no value
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;           //If the stopwatch is running correctly it becomes true

function start(){
  if(!isRunning){
    startTime = Date.now() - elapsedTime //elapsedTime will be zero initially
    timer = setInterval(update, 10);
    isRunning = true;
  }

}
function stop(){

}
function reset(){

}
function update(){
  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  
}