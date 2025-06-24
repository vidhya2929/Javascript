//                                FETCH
// Fetch is not working in the same way as the eventListeners or the setTimeOut
// eg:
console.log("Start");

setTimeout (function cbT(){
    console.log("CB SetTimeOut");
}, 5000);

fetch("https://api.netflix.com").then(function cbF(){
    console.log("CB Netflix");
});
console.log("End");

//FETCH ==> Goes and request an API call
// the fetch function returns a promise and we have to pass a callback function which will be executed once the promise is resolved
// GEC => Call Stack =>execute line by line => console =>setTimeOut register the callback function in the web API's so we have cbT =>timer of 5000 started =>fetch(web API used to make network calls) it also registers the callback function in the web API so we have cbF
// the cbT is waiting for the timer to expire so that it can get pushed into the call stack through callback queue
// cbF is waiting for the data to be returned from the netflix servers.& once the data is returned then the cbF is ready to be executed
// cbF will goes to the microtask queue =>push to callstack ==>console "CB Netflix" ==>popped fromthe callstack
// after cbF the event loop will now schedule the cbT function inside the callstack and

/*            MICROTASK QUEUE                   */
//microtask que is similar to callback queue but it has higher priority
// the functions come inside the microtask queue will be executed first and the functions in the callback queue are executed later
// the callback functions (in case of promises||incase of network calls) will go to the microtask queue
// When the timer get expires the cbT will go to the callback queue 
// the event loop will continously checks whether the call stack is free.
// as there is microtask queue and callback queue ,the event loop will push the functions from the microtask to the call stack.As the microtask has the higher priority
