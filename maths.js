// =================================
// Math Object in JavaScript:
// =================================


//* Math: The Math namespace object contains static properties and methods for mathematical constants and functions.
//* Math work with the number type. It doesn't work with BigInt.

//? 1: Constants:
// - Math.PI: Represents the mathematical constant Pi (n).
// const piValue = Math.PI;
// console.log(piValue);

// =================================
// Basic Operations:
// =================================

//? Math.abs(): The Math.abs() static method returns the absolute value of a number.
// or in simple, how far the number is from 0. It will be always positive.

// console.log(Math.abs(-105));
// -5 - 4 - 3 - 2 - 1    0   1   2   3   4   5
//   ------------------------------------------------------

//? Math.round(x): Rounds a number to the nearest integer.
// const roundedValue = Math.round(4.3);
// console.log(roundedValue);

//? Math.ceil(x): Returns the value of x rounded up to its nearest integer.
// const ceilValue = Math.ceil(3.1);
// console.log(ceilValue);

//? Math.floor(x): Returns the value of x rounded down to its nearest integer.
// const floorValue = Math.floor(3.7);
// const floorValue = Math.floor(2.8);
// console.log(floorValue);

//? Math.trunc(x): Returns the integer part of x:
// const truncValue = Math.trunc(3.4);
// console.log(truncValue);

// Math.trunc() & Math.sign() were added to JavaScript 2015 - ES6.
// const truncValue = Math.trunc(-5.7);
// const floorValue = Math.floor(-3.4);
// console.log(truncValue);
// console.log(floorValue);

// Notes:
// No matter how many chars are there after decimal, they all will always return only number before the decimal.
// round rounds to the nearest integer.
// floor always rounds down
// ceil always rounds up


// =================================
// Exponential & Logarithmic Functions:
// =================================

// Math.pow(x,y): Returns the value of x to the power of y.
// console.log(Math.pow(2, 5));    // 2 x 2 x 2 x 2 x 2 = 32
// console.log(2 ** 5);


// Math.sqrt(): Returns the square root of x.
// let squareRoot = Math.sqrt(25);
// let squareRoot = Math.sqrt(81);
// console.log(squareRoot);

// Math.log(x): Returns the natural logarithm of x.
// let logResult = Math.log(1);
// let logResult = Math.log(2);
// console.log(logResult);

// Math.log2(x): Returns the base 2 logarithm of x.
// let logResult = Math.log2(8);
// console.log(logResult);

// =================================
// Interview Question :
// =================================

// Generate Random Number...
// Q: Math.random(): Math.random() returns a random number between 0 (inclusive), and 1 (exclusive).

// console.log((Math.random() * 100).toFixed(3));   