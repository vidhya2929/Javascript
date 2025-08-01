// A form of automated testing where we write code to test our code
// It check if our code works as expected

function calcpayment(principal, interest, years){
  
} 
// It test using a program called a test Runner
// which displays test results in the console or terminal window
// much faster than manual testing through the user interface


// with automated testing the code base consists of 2 types of code -;
// 1) application code(production code)
// 2) Test code(tests)

// benefits
//  1)detects bugs early
// 2)facilitates refactoring => means changing the structure of the code without changing the behaviour or functionality
// eg: Moving a few lines to a function

// With unit test every time we refactor our code we can run our tests to quickly confirm if our code still behaves as expected
//  3) Improves Code quality
//  4) serves as documentation for how our functions should behave

// Types of automated testing
// 1) Unit test   => verifies the correctness of individual units or components of an application(units could be functions,classes,or even small modules)  //faster
// 2)Integration => focus on verifying how different units or components of our application work together as a whole
// 3)End- to- end => focusing on testing the entire application as a whole
// they simulate the user interaction with the entire system
// End to end gove higher confidence but they are significantly slower running


// Testing framework
// A set of tools for writing and running tests
// eg: Jest,Mocha,Jasmine,Vitest,Cypress,Playwright
