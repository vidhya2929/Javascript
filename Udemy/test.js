// // CLOSURES
// // Inner function has access to variables from an outer function even after the outer function has finished execution(or the outer function is returned)
// function outerFunction(){
//   let outerVariable = 'I am from outer scope';
//   function innerFunction(){
//     console.log(outerVariable);
//   }
//   return innerFunction;
// }
// const myCLosure = outerFunction();
// myCLosure();
// // Even outerFunction() has finished execution, innerFunction() still has access to outerVariable.
// function treasureBox(){
//   let secretNumber = 7;
//   function helperRobot(){
//     console.log('The secret number is:'+ secretNumber);
//   }
//   return helperRobot
// }
// const myRobot = treasureBox(); 
// myRobot();

