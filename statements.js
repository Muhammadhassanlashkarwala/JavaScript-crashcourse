// Conditional Section...


// If Statement!


// If the condition is truthy so run the code of if section and condition is falsy so run the code of else section.

// Syntax

// if (condition) {
//     // Code te be executed if the condition is false
// } else {
//     // Code te be executed if the condition is false
// }

// Let check the temperature.

// var temperature = 35;
// if (temperature > 30) {
//     console.log("So guyz going to Hockey ground");
// } else {
//     console.log("Watch the T.V at home!");
// }

// Now we use an else if check additional conditions:

// var temperature = 25;
// if (temperature > 30) {
//     console.log("So guyz going to Hockey ground");
// } else if(temperature > 20){
//    console.log("temperature 20 ==>");
// }
// else {
//     console.log("Watch the T.V at home!");
// }





// Now Finalize Interview Questions & Too many conditions in one question:

// Q.1:a) If the person is 18 years or older, a citizen, and registered to vote, display a message saying they are eligible to vote. 
// Q.1:b) If the person is younger then 18, not a citizen, or not registered to vote, display a message saying they are not eligible to vote.  
// Q.1:c) If the person is 18 years or older, but not a citizen, display a message saying they are not eligible due to citizenship status.
// Q.1:d) If the person is 18 years or older, a citizen, but not registered to vote display a message saying they are not eligible due to registration status.


// var person = 12;
// var isCitizen = false;
// var isRegistered = false;
// if (person >= 18 && isCitizen && isRegistered) {
//     console.log("They are eligible to vote");
// } else if(person < 18 && !isCitizen && !isRegistered){
//     console.log("They are not eligible to vote");
// } else if(person >= 18 && !isCitizen){
//     console.log("They are not eligible due to citizenship status");
// } else if(person >= 18 && !isRegistered){
//     console.log("They are not eligible due to registration status");
// } else{
//     console.log("App abhi chotte ho & citizen bh nh ho!!");
// }

// var person = 20;
// var isCitizen = true;
// var isRegistered = true;

// if (person >= 18 && isCitizen && isRegistered) {
//     console.log("They are eligible to vote!");
// } else if(person < 18 && !isCitizen && !isRegistered){
// console.log("They are not eligible to vote!");
// } else if (person > 18 && !isCitizen){
// console.log("they are not eligible due to citizenship status.");
// } else if (person > 18 && !isRegistered){
//     console.log("they are not eligible due to Registeredship status.");
// }
// else{
//     console.log("Beta abhi app chotte ho!");
// }


// So guyzz ye tha na thoda sa tricky question i hope maza aya hooga isme appko!


// InterviewQuestion Number : 02

// Write a program to check if a number is odd or even

// var num = 60;
// if (num % 2 === 0) {
//     console.log("This number is even");
// }else{
//     console.log("This number is odd");
// }


// Write a program to check if a number is positive, negative or zero.

// var num = -20;

// if (num === 0) {
//     console.log("It's number is zero");
// }else if(num < 0){
//     console.log("It's number is negative");
// }else{
//     console.log("It's number is positive");
// }







// Switch Statements!

// Switch Statement: The switch statement is used to perform different actions based on different conditions.

// Syntax Switch Statement

// switch (expression) {
//     case value1:
//         console.log("code to be executed the value1 same is expression");
//         break;

//     case value2:
//         console.log("code to be executed the value2 same is expression");
//         break;

//     default:
//         console.log("code to be executed if the none expression is matched");

// };



// Let's see the example.
// How switch statement is work & what will be the output when the varaible day is set to different values.

// var day = "Monday";
// switch (day) {
//     case "Monday" :
//     console.log("Today is Monday!");
//     break;

//     case "Tuesday" :
//     console.log("Today is Tuesday");
//     break;

//     case "Friday" :
//     console.log("Friday it's a nice day");
//     break;

//     default :
//     console.log("None condition is matched!");
// }




// var areaOfShapes = "square";
// var x = 5;
// var y = 10;
// var radius = 2;

// switch (areaOfShapes) {
//     case "circle":
//         var result = 3.142 * (radius * radius)
//         console.log(result);
//         break;

//     case "rectangle":
//         var result = x * y;
//         console.log(result);
//         break;

//     case "square":
//         var result = x * x;
//         console.log(result);
//         break;

//     default:
//         console.log("None condition is matched!");
// };



// While Loop:

// A while loop is used to repeatedly execute a block of code as long as a specified condition is true.

// Syntax Of While Loop:

// var i = 1;
// while (i<= 10) {
//      // code to be executed as long as the condition is true.
// }


// Simple using while loop count 1 to 10 👌😊

// var count = 1;

// while(count <=10){
//     console.log(count);
//     count++
// }

// Write the table of 7 with the help of while loop!!!

// var tableSeven = 1;
// while(tableSeven <= 10){
//     console.log("10 * " + tableSeven + " = " + 10 * tableSeven);
//     tableSeven++;
// }


// Simple using Do-while loop count 1 to 10 👌😊

// var count = 1;
// do{
//     console.log("Do-while loop", count);
//     count++
// }while(count <=10);

// var index = 1;
// do{
//  console.log("15 * " + index + " =" + 15 * index);
//  index++;
// }while(index <= 10)





// Simple using for loop count 1 to 10 👌😊

// for(var count = 1; count <= 10; count++){
//     console.log("For loop ===>", count);
// }

// var sum = 0;
// for(var i = 1; i <= 10; i++){
//  sum = sum + i;
// }
// console.log(sum);


//  Write a program to check if a number is prime!
// todo prime numbers are numbers that have only two factors: 1 and themselves.


// var number = 17;
// var isPrime = true;

// for(let i = 2; i <= 10; i++){
//     if(number % i === 0){
//         isPrime = false;
//         break;
//     }
// };

// if(isPrime){
//     console.log("This number is prime!");
// }else{
//     console.log("This number is not prime!");
// }





// Now run the infinite loop with the using of For loop!
// The code for (;;) {} represents an infinite loop in JavaScript.

// for(;;){
//     // Update game logic and render frames
// }









//  Now your Homework is:
// JavaScript program to print table for given number: ( 8, 11, 13, 16) Using for loop!!