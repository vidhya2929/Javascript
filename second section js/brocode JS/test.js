// synchronous  = Executes line by line consecutively in a sequential manner 
//                 Code that waits for an operation to complete


// asynchronous = Allows multiple operations to be performed concurrently without waiting 
//                Doesn't block the execution flow and allows the program to continue (I/O operations, network requests, fetching data)
//                Handled with : Callbacks,Promises, Async/Await


// Synchronous code

console.log("Task 2");
console.log("TAsk 3");
console.log("TAsk 4");

// Asynchronous Code

setTimeout(() => console.log("Task 1"), 3000);

console.log("Task 5");
console.log("Task 6");
console.log("TAsk 7");

// what we could do in this is 

function func1(Callback){
  setTimeout(() => {console.log("Task 1")
                    Callback()}, 3000);
}

function func2(){
  console.log("Task 8");
  console.log("Task 9");
  console.log("Task 10");
}
func1(func2);