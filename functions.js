// Functions In JavaScript 🔥
// In javscript, a function is a block of reusable code that performs a specific task or set of tasks. Functions re used to  organize code into modular and managebale pieces, promote code reuse, and make program more readable.

// Now simple Example.
// 3 students at a time wants to find the sum of two numbers.

// 1st Student:

// var a = 10, b = 20;
// var sum = a + b;
// console.log(sum);

// // 2nd Student:

// var a = 25, b = 40;
// var sum = a + b;
// console.log(sum);

// // 3rd Student:

// var a = 20, b = 75;
// var sum = a + b;
// console.log(sum);

// function sum(a, b){
//    return a + b;
// }
// console.log(sum(5, 15));
// console.log(sum(25, 15));
// console.log(sum(60, 180));

// Function Declaration:
// function sum(){
//    console.log("Hey everyone!!");
// };

// Function Invocation:
// Means how to call a function. So only you call a function name and perenthesis.
// sum();

// Now practice time:
// Write a function to find the sum of two numbers.

// todo tips "first you declare the function & then you call it". In Javascript, it's a good practice to declare (define) your functions before you call them. This ensures that the function is available for use when you try to call it.

//  Function Parameter:
// function sum(a, b, d){
//   console.log( a + b + d);
// }


// Function Arguments:
// sum(5, 10, 20);
// sum(20, 40, 180);


// Let's practice time:
// 1) Write a javascript program that defines a function called greet to welcome individuals to the Coding zone Js Course. The function should take a name parameter and output the message "Hello [name], welcome to Coding zone JS Course". Call the function twice, once with the argument "Hassan" and once with the argument "Raza".

// function greet(name) {
//     console.log("Hello " + name, "welcome to Coding zone JS Course");
// }
// greet("Hassan");
// greet("Raza");
// greet("Ali");


// 2) Write a function to find the product of two numbers with parameters.

// function product(a, b) {
//     console.log(a * b);
// }
// product(6, 7);


// So now the turn of Function expression:
// A function expression is a way to define a function as part of an expression. It can be either named or anonymous. If it's named, it becomes a named function expression.


// var myName = function product(a, b) {
//     console.log(a * b);
// };
// myName(10, 20);


// So now the turn of Anonymous Function:
// An anonymous function is a function without a name, It can be created using either a function expression or a function declaration without a specidfied name.

// function res(a, b) {
//     console.log(a + b);
// };
// res(10, 15);

// Now so finally is Return Keyword!!
// Return Keyword: In Javascript, the return statement is used with in a function to specify the value that the function should produce or provide back to the code that called it. The return statement stop the execution of a function and sends a value back to the caller.

// Syntax
// return expression;

// function sum(a, b) {
//     return a + b;
// };

// var result = sum(5, 15);
// console.log(result);
// console.log(sum(5, 15));
// console.log(sum(25, 15));
// console.log(sum(60, 180));

// IIFE : Immediately Invocked Function Expression !!!
// An IIFE, Immediately Invocked Function Expression is a javascript function that is defined and executed immediately after its creation. It is a way to create a self-contained block of code that doesn't interface with the surrounding code and executes immediately.

// Syntax
// (function () {
//     // code to be executed
// })();

// (function () {
// console.log("I'm a IIFE function");
// })();

// Practice Time!
// (IIFE with parameters)

//  var funExp = (function (a, b){
// console.log("Now the answer is ", a + b);
// return a + b;
// }(10, 20));

// var res = funExp;
// console.log("Thirty aii ga kyu ke humne return ka keyword use kiya h!!!", res);

// Interview Questions
// Q.1) Calculator Function:
// Write a javascript function calculator that takes two numbers and an operator as parameters and returns the result of the operation. The function should support addition, subtraction multiplication and division.

// console.log(calculator(5, 10, "+")); // output: 15 !
// console.log(calculator(5, 10, "-"));  //output: -5
// console.log(calculator(5, 10, "*"));   // output: 50
// console.log(calculator(5, 10, "/")); 

// function calculator(num1, num2, operator){
//     switch (operator) {
//         case "+":
//             return num1 + num2;
//         case "-" :
//             return num1 - num2; 
//         case "*":
//             return num1 * num2;  
//         case "/":
//             return num1 / num2    
    
//         default:
//          return "No operations found !!"
//     }
// }
// calculator(console.log(calculator(5, 10, "+")));
// calculator(console.log(calculator(15, 10, "-")));
// calculator(console.log(calculator(15, 10, "*")));
// calculator(console.log(calculator(15, 10, "/")));

// Q.2) Reverse a string:
// Write a function to reverse a given string without using built-in reverse methods

// function isReversed(str){
//     // console.log(str);
//     let reverse = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse = reverse + str[i]
//     }
//     return reverse;
// }
// console.log(isReversed("Hassan Raza"));

// let str = "Hassan Raza";
// console.log(str[7]);

// Q.3) Palindrome Check:
//  Create a function to determine if a given string is a palindrome (reads the same backward as forward)

// function isPalindrome(str){
//     // console.log(str);
//     let reverse = ""
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverse = reverse + str[i]
//     }
//    if(str === reverse){
//     return "It is palindrome!"
//    }else{
//     return "It is not Palindrome"
//    }
   
// }
// console.log(isPalindrome("ahmed"));