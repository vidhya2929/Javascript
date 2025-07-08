setTimeout(() => console.log("Task 1"),3000)

console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

// 
function func1(callback){
  setTimeout(() =>{ console.log("Task 1");
    callback()}, 3000);                                            //here task 2,3,4 are followed by task 1
}

function func2(){
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}
func1(func2);