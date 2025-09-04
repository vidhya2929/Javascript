// Synchronous => executed line by line  in the exact order of execution
// eg: const p = document.querySelector('.p')
package.textContent = 'My name is Jonas';
alert('Text set!');
package.style.color = 'red';
// execution of thread is a part of the execution context
// Each line of code waits for previous line to finish.

// Asynchronous 
const p = document.querySelector('.p');                       //synchromous 
setTimeout(function (){                                       // setTimeout starts a timer in asynchronous way
  p.textContent = 'My name is Jonas';
}, 5000);
p.style.color = 'red';
// Timer with callback
// Asynchronous code is executed after a task that runs in the background finishes execution.
// Asynchronous code is non-blocking;
// Execution doesn't wait for an asynchronous task to finish its work.
