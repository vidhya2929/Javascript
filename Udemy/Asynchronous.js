// Synchronous => executed line by line  in the exact order of execution
// eg: const p = document.querySelector('.p')
package.textContent = 'My name is Jonas';
alert('Text set!');  // alert is the long running operation,which blocks the execution of code 
package.style.color = 'red';
// execution of thread is a part of the execution context
// Each line of code waits for previous line to finish.

// Asynchronous 
const p = document.querySelector('.p');                       //synchronous 
setTimeout(function (){                                       // setTimeout starts a timer in asynchronous way
  // the timer will run in the background without preventing the main code from executing
  // also register a callback function, which will be executed only after the  timer has finished running
  p.textContent = 'My name is Jonas';
}, 5000);
p.style.color = 'red';
// This callback function is called asynchronous javaScript.
// Timer with callback
// Asynchronous code is executed after a task that runs in the background finishes execution.
// Asynchronous code is non-blocking;
// Execution doesn't wait for an asynchronous task to finish its work.
// 
