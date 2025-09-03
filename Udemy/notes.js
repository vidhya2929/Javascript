// JavaScript engine is a computer program that interprets the jS code and this engine is responsible for the execution of code.
// Every browser has a Js engine to execute JS code. eg: V8 engine of Google Chrome,SpiderMonkey by Mozilla for Firefox,JavaScriptCore for safari browser, chakra for internet explorer.
// JavaScript engine consists of a call stack and a heap.
// The code is executed in the call stack.
// heap => Unstructured memory pool to store all objects required for the application.
// Jscode -> engine -> parsing - AST(Abstract Syntax Tree)->machine codes
// Through execution context the execution in the Js engine call stack happens.
// components needed to run JS.
// 1)JS engine
// 2)web APIs =>functionalities provided to the engine  but are not pat of JS language.
// eg: DOM , Fetch API
// 3)callback queue => contains callback functions(which are ready to be executed) and also it ensures the callbacks are exectued in the FIFO method and passed into stack 
// browser runtime and Node.js are examples of runtime environments.
// browser runtime environment gives access to DOM
// Node.js provides server-Side runtime enviornment for executing JS ouside the browser.

// Using compilation and interpretation => JScode to machine code occurs
// Compilation -;
// Source code -> machineCode at once and written into a binary file to be executed by the computer
// Interpretation -;
// interpreter goes through sourcecode and interprets line by line
// Js is an interpreted language ,interpreted languages are slower than compiled language
// JS combines both interpretation and compilation  which is called 'Just -in-Time' compilation to optimize the performance of web application.
// Just-in Time =>compiles the entire code into machine code all at once and executes it.
// 'Inlining'=>engine replaces the function call with actual code of function at call site.