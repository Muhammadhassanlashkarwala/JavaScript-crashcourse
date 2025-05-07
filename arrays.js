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


// ==================================================================
//  How to Insert, Add, Replace & Delete Elements in Array (CRUD) p-1 📌
// =============================================================

// 👉 How to Insert, Add, Replace & Delete Elements in Array(CRUD)
// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits);
// 1: push(): Method that adds one or more elements to the end of an array.

// The push() method returns the new length.
// console.log(fruits.push("mango"));
// console.log("using of push method ===>" , fruits);

// 2: pop(): Method that removes the last element from an array.
// The pop() method returns the deleted word !
// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits);
// console.log(fruits.pop());
// console.log("using of pop method ===> " , fruits);

// 3: unshift(): Method that adds one or more elements to the beginning(first) of an array.
// The unshift() method also returns the new length.

// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits);
// console.log(fruits.unshift("guava"));
// console.log("unshift method ===>" ,fruits);

// 4: shift(): Method that removes the first element from an array. 
// The shift() method also returns the deleted word !

// let fruits = ["apple", "mango", "banana", "grapes"];
// console.log(fruits);
// console.log(fruits.shift());
// console.log("using shift method", fruits);

// ==================================================================
//  What if we want to add or remove anywhere in an elements p-2 📌
// =============================================================

//  The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// 👉 syntax 

// splice(start, deleteCount, item1, item2, /* ...,  */ itemN)

// let fruits = ["apple", "orange", "banana", "mango"];
// fruits.splice(1,2, "grapes", "guava");
// console.log(fruits);

// what if you want to add the element at the end

// ============================
// Searching in an Array
// =====================

//  Searching & Filter in an Array
// For search we have - indexOf, lastIndexOf & includes
// const things = ["salt", "sugar", "water", "milk", "sugar", "tea"];

// ?1: IndexOf Method: The indexOf Method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// syntax 
// indexOf(SearchElement);
// console.log(things.indexOf("water"));
// console.log(things);
// indexOf(SearchElement, fromIndex); 
// console.log(things.indexOf("water", 3));

// ?2: lastIndexOf Method: The lastIndexOf() method of Array instances returns the last index at which a given element can be found in the array, or -1 if it is not present. The array is searched backwards, starting at fromIndex.
// console.log(things.lastIndexOf("sugar"));

// ?3: Includes Method: The includes method check whether an array includes a certain element, returning true or false.
// syntax 
// includes(SearchElement);
// includes(SearchElement, fromIndex);

// const things = ["salt", "water", "milk", "sugar", "tea"];
// console.log(things);
// console.log(things.includes("milk"));

// let months = ["Jan", "Feb", "march", "April", "May", "June"];
// console.log(months);
//  todo challenge time !! 🔥
//? 1: Add dec at the end of an array?

// months.push("Dec");
// console.log(months);

//? 2: What is the return value of splice method?
// [] // Splice method return the empty array!!
//? 3: Update march to March (update)?
// months.splice(2,1, "March");
// console.log(months);

//? 4: Delete June from an array?
// months.pop();
// console.log(months);

// ==========================
// Filter in an Array 
// =====================

//  Search + Filter
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];

//? 1: find() Method: The find method is used to find the first element in an array that satisfies a provided testing function. It returns the first matching element or undefined if no element is found.

// const result = numbers.find((currEle)=>{
//     return currEle > 9;
// })
// console.log(result);

//? 2: findIndex() Method: The findIndex() method of TypedArray instances returns the index of the first element in a typed array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.

// const result = numbers.map((currEle)=> currEle * 5)
// console.log(result);

// const result2 = result.findIndex((currEle)=>{
//     return currEle > 20;
// })
// console.log(result2);

//? 3: filter() Method: The filter method creates a new array with all elements pass the test implemented the provided function.

// 👉 syntax 
//? filter(callbackFn);
//? filter(callbackFn, thisArg)

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];

// const result = numbers.filter((currEle)=>{
//     return currEle > 5;
// })
// console.log(result);

// UseCase: In E-commerce website when we want to  Delete or Remove any products from addToCart page.

// //! Ex: Let's say user wants to delete value 7.
// let value = 7;
// const number = [1, 2, 3, 7, 4, 5, 6, 7, 8, 9];
// const result = number.filter((currEle)=>{
//         return currEle !== value;
//     })
//     console.log(result);

// Practice Time ! 📌
//! Ex: 2 Filtering products by price !
// Filter products with a price less than or equal to 500 !!

// const products = [
//     { name: "Phone", price: 800 },
//     { name: "laptop", price: 1000 },
//     { name: "Tablet", price: 400 },
//     { name: "Smartwatch", price: 200 }
// ];

// const result = products.filter((currEle)=>{
//      return currEle.price <= 500
// });
// console.log(result);

// ==================================
// How to Sort & Compare an Array 
// ===========================

//? How to Sort and Compare an Array.
//? Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings.

// const fruits = ["Banana", "Apple", "Orange", "Mango"];
// const numbers = [1,2,5,8,3,4,5,6,7,8,9];
// numbers.sort();
// console.log(numbers);
// 1 > 2
// 2>5
// 5>8
// 8 > 3 return 1

// numbers.sort((a,b)=>{
//     if(a>b) return -1;
//     if(a<b) return 1;
// });
// console.log(numbers);


//? Compare callback function
// syntax
//  const sortedNumbers = numbers.sort((a,b)=> a-b);
// if(a>b) return 1 => switch the order
// if(b>a) return -1 => keep the order

// const numbers = [1,2,5,8,3,4,5,6,7,8,9];
//? For ascending order
// const sortedNumbers = numbers.sort((a,b)=>{
//     if(a>b){
//         return 1;
//     }else if(b>a){
//         return -1;
//     }
// });
// console.log(sortedNumbers);

//? For descending order
// const sortedNumbers = numbers.sort((a,b)=>{
//     if(a>b){
//         return -1;
//     }else if(b>a){
//         return 1;
//     }
// });
// console.log(sortedNumbers);

// ================================
// Very Important Array Methods 
// ==========================

// Map(), Filter(), Reduce(),
// Map() creates a new array from calling a function for every array element.
// Map() does not execute the function for empty elements
// Map() does not change the original array
// Original array of numbers

// Using map to square each number and create a new array
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((currEle)=> currEle * currEle);
// console.log(result);

//! 1: Using the map method, write a function that takes an array of strings and returns a new array where each string is capitalized.
// const fruits = ["BANANA", "apple", "orange", "mango"];
// const capitalizedFruits = fruits.map((currEle)=>{
//    return currEle.toLowerCase();
// })
// console.log(capitalizedFruits);

//! 2: Using the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number.

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((currEle)=>{
//  if(currEle % 2 === 0){
//   return currEle * currEle
//  }
// }).filter((currEle)=> currEle !== undefined)
// console.log(result);

//! 3: Using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr. ".
// const prefixedNames = ["Owais", "Ahmed", "Haroon"];

// const names = prefixedNames.map((currEle)=> `Mr . ${currEle}`)
// console.log(names);

// =================
// Reduce Method
// ==========

// The reduce method in Javascript is used to accumulate or reduce an arrya to a single value. It iterates over the elements of an array and applies a callback function to each element, updating an accumulator value with the result. teh reduce method takes a callback function as its first argument an optional  initial value for the accumulator as the second argument.

// syntax
// array.reduce(function callback(accumulator, currentValue, index, array){
// //  Your logic here
// //  Return the updated accumulator value.
// }, initialValue);

//  callback: A functions that is called once for each element in the array.
//  accumulator: The accumulated result of the previous iterations.
//  currentValue: The current element being processed in the array.
//  index (optional): The index of the current element being processed
//  array (optional): The array reduce was called upon.
// initialValue (optinal): An initial value for the accumulator. If not provided, the first element of the array is used as the initial accumulation value


// Challenging Question (Using Reduce-method)!! 😉

// Q.1) Write a JavaScript function that calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price.

// const productsPrice = [1000, 2000, 3000, 5000, 10000];

// const totalPrice = productsPrice.reduce((accumu,currEle)=>{
//     return accumu + currEle
// },0);
// console.log(totalPrice);