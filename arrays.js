// ===================================
//  ARRAYS IN JAVASCRIPT ([""]) ✨📌
// =============================

// Iterable - object where you can use the for-of loop.
// Array like object - Any object with length property and use indexes to access items.
// Arrays as Objects: Arrays in JavaScript are a specific type of object that has numeric  keys (indices) and a length property. The indices are automatically maintained, and the length property is automatically updated when you add or remove elements form the array.
// typeof Operator: The typeof operator in Javascript returns "object" for both arrays and regular objects.

// JavaScript Array is a data structure that allows you to store and organize multiple values within a single variable. It is a versatile and dynamic object. It can hold various data types, including numbers, strings, objects and even other arrays. Arrays in JavaScript are zero-indexed i.e. the first element is accessed with an index 0, the second element with an index of 1, and so forth.

// =================
// Creating Arrays:
// =============

// let arr = [];
// console.log(typeof arr);

// Arrays in JavaScript can be created using the Array constructor or with array literals (square brackets []).
// Using Array constructor

// let fruits = new Array("apple", "banana", "grapes")
// console.log(fruits);

// Using Array literal

// let fruit = [ 'apple', 'banana', 'grapes' ];
// console.log(fruit);

// We can also create an empty array!

// let emptyArr = [];
// console.log(emptyArr);

// =====================
// Accessing Elements:
// =================

// Accessing Elements:  Array elements are accessed using zero-based indices.   

// let fruit = [ 'apple', 'banana', 'grapes' ];
// console.log(fruit[2]);
// console.log(fruit('apple'));

// =====================
// Modifying Elements:
// =================

// Modifying Elements: You can modify array elements by assigning new values to specific indices

// let fruit = [ 'apple', 'banana', 'grapes' ];

// fruit[2] = "kuchbh";
// console.log(fruit);

// ==========================================
// Array Traversal / Iterating Over Arrays:
// ======================================

// 1) for-of loop, also known as iterable
// for...of loop: The for...of loop is used to iterate over the values of an iterable object, such as arrays, strings, or other iterable objects.

// let fruits = [ 'apple', 'banana', 'grapes', 'mango', 'pineapple' ];
// for(let item of fruits){
//     console.log(item);
// }

// for(let item=0; item < fruits.length; item++){
//     console.log(fruits[item]);
// }

// 2 )for-in loop
// for...in loop: The for...in loop is used to iterate over the properties (including indices) of an object.

// let fruits = [ 'apple', 'banana', 'grapes', 'mango'  ];
// for(let item in fruits){
//     console.log(item);
// }

// 3) forEach() Method
//  The arr.forEach() method calls the provided function once for each element of the array. The provided function may perform any kind of operation on the elements of the given array.

// const myForEachArr = fruits.forEach((currEle, index, arr) => {
//     // console.log(`${currEle} ${index}`);
//     return `${currEle} ${index}`;
//     // console.log(arr);
// })
// console.log(myForEachArr);


// 4) Map() function
// map() creates a new array from calling a function for every array element. map() does not change the original array.


//  const myMapArr = fruits.map((currEle, index, arr) => {
//        return `My fav fruit is: ${currEle}`;
//     })
// console.log(myMapArr);
// console.log(fruits);








