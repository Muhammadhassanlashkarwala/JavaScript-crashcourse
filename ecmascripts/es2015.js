// Modern JavaScript ECMA-Script 2015 ✨

// LET AND CONST 📌


// Let keyword:
// The Let keyword is used to declare variables with block scope. Variables declared with let are mutable, meaning their values can be reassigned.

// var myName = "Hassan";
// myName = "Owais"
// console.log(myName); 

// let myName = "Hassan";
// myName = "Ahmed";
// console.log(myName);

// const myFavName = "Hassan Raza";
// myFavName = "Shahzaib"
// console.log(myFavName);

// First Example with the var keyword:

// var myName = "Hassan";

// if(true){
//     var myName = "Raza";
//     console.log(myName); 
// }
// myName = "Owais";
// console.log(myName);


// Second Example with the help of let keyword:

// let myName = "Hassan";

// if(true){
//     let myName = "Raza";
//     console.log(myName); 
// }
// myName = "Owais";
// console.log(myName);


// Third Example with the help of const keyword !!

// const myName = "Hassan";   // true

// if(true){
//     const myName = "Raza";  // false
//     console.log(myName); 
// }
// myName = "Owais";
// console.log(myName);

// var

// if(true){
//     var myName = "Raza";  
//     console.log(myName); 
// }
//  myName = "Owais";
// console.log(myName);


// let :

// if(true){
//     const myName = "Let";  
//     console.log(myName); 
// }
// console.log(myName);

// Const Keyword:
// The const keyword is used to declare variables with block scope but once a value is assigned to a const variable. Const variables are immutable and it cannot be reassigned.

// This is : pi r * r

// pi = 3.142
 
// TEMPLATE Strings (``)📑

// In ECMAScript 6 (ES6), template strings, also known as template literals, provide a convenient and flexible way to create string in JavaScript. Template strings are enclosed in backticks (``) rather then single or double quotes. 

// let firstName = "Hassan";    
// let lastName = "Raza";

// let fullName = firstName + lastName;
// let fullName = `${firstName} ${lastName}`
// console.log(fullName);


// String Interpolation:
// Template string support string interpolation, allowing you to embed expressions directly with in the string. Interpolated expressions are enclosed in ${}.

// let age = 28;

// String interpolated
// let message = `I am ${age} years old.`;
// console.log(message);

// Multi-line Strings:
// Template Strings make it easy to create multi-line strings without the need for concatenation or escape characters.

// let multiLinesString = `This is a multi-line
// string using template literals. 
// It's much cleaner and easier to read!`

// console.log(multiLinesString);

// Expression Evaluation:
// Template expressions can include any valid Javascript expression.

// Practice Time!
// console.log("5 *" + num + " = " + 5 * num);
// let num = 5;
// console.log(`5 * ${num} = ${5 * num}`);

// Advantages.  
// Readability:
// Template Strings make the code more readable, especially for complex string constructions.

// Conciseness:
// They eliminate the need for explicit string concatenation and reduce the use of escape characters.

// Default Parameters ? 🤔

// In ECMA Script 6 (ES6), default parameters were introduced, providing a more concise way to handle function parameter defaults.
// Default parameters allow you to specify default values for function parameters in the function declaration itself. If a parameter is not provided when the function is called, the default value is used.    

// Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.


// Practice.
// Write a function to find sum of two numbers what if during function call user only passed one argument!

// function sum(a = 60, b = 40) {
//     return a + b
// }
// console.log(sum(20, 35));

// Now the turn of Fat Aero Function !
// In ECMA Script 6 (ES6), arrow functions, also known as fat arrow functions, were  introduced as a concise way to write anonymous functions.

// Simple function:
// const sumTwo = function(a, b){
// let message = `The sum of ${a} and ${b} is ${a + b}`;
// console.log(message);
// }
// sumTwo(5, 10)

// const sumTwos = (a, b) => {
//  let message = `The sum of ${a} and ${b} is ${a + b}`; 
//  console.log(message);
// }
// sumTwos(40, 60)


// Now syntax of Fat Aero Function !
// const fatAero = (param1, param2) => {
// //  function body!
//  return param1 + param2;  // optional!
// }
// fatAero(argu1, argu2)
 

// Benefit of fat aero function!
// Your result is one line!
// const sumTwo = function name(a,b) {
//     let message =  `Hassan`
//     console.log(message);
// }
// sumTwo(50, 10)
// const sumTwos = (a, b) => console.log(`The sum of ${a} and ${b} is ${a + b}`); 
// sumTwos(40, 60);




//  Todo Notes !!

// 1) If the function body consists of a single expression, the barces {} and the return keyword can be omitted.
// const sum = (a, b) => `The sum of ${a} and ${b} is ${a + b}`;
// console.log(sum(40, 60));

// 2) If there is only one  parameter, the parenthesis () around the parameter list can be omitted.
// const square = `The square of ${a} and ${b} is ${a * a}`;
// console.log(square(5));

// 3) If there are no parameters, use an empty set of parenthesis ().
// const greet = () => console.log(`Please LIKE, SHARE, & SUBSCRIBE 📌✨`);
// greet();


