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

