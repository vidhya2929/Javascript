// Synchronous => executed line by line  in the exact order of execution
// eg: const p = document.querySelector('.p')
package.textContent = 'My name is Jonas';
alert('Text set!');  // alert is the long running operation,which blocks the execution of code 
package.style.color = 'red';
// execution of thread is a part of the execution context
// Each line of code waits for previous line to finish.

// Asynchronous  ==> Not occuring at the same time.
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
//  callback functions or event listeners individually does no make code asynchronous.


// eg: timer, loading img, geolocation API,Ajax calls
// Asynchronous JavaScript And XML  =; Allow us to communicate with remote web servers in an asynchronous way
// With AJAX => we can request data from web servers dynamically.
// XML is a data format -; used to be widely used to transmit data on the web.(Old method)
// Most API's use 'JSON'  which is the most popular data format today.
// JSON is basically just a JS object, but converted to a string. 


// WORKING OF AJAX -;
// if a JS application is running in the browser(usually called as 'Client')  ==>> To get some data from the web server =>> with AJAX we can do an HTTP request to the server which has this data.
// The server will then set back a response containing that data that we requested (This back and forth process happens asynchronously in the background)


// Different types of requests -;
// Get requests to receive data / post requests to send data to a server
// These web servers contain an API which contains our requested data
// API => Application Programming Interface => It is a piece of software that can be used by another piece of software.
// Types -; DOM API,Geolocation API (they are self contained API's )
// Own Class API => small and simple API in a class where make some methods available as public interface


// Online API (API/Web API) -; Application running on a server, that receives requests for data, and sends data back as response;
// we can build our own web API's or use 3rd party APIs


// FIRST API CALL : XML HttpRequest
// Look country