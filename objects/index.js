//* =======================
//* Object in JavaScript
//* =======================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* =======================
//* Creating Objects:
//* =======================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

//* =======================
//* Accessing Properties:
//* =======================
//? You can access object propertiesusing dot notation or square bracket notation:

//* ===================================
//* Adding and Modifying Properties:
//* ===================================
//? You can add new properties or modify existing ones:
//? Methods in Objects are function associated with the object. They can be invoked using the same notation as properties:

// console.log(person.greet());

//* ======================================
//* We can add dynamic keys in an object:
//* ======================================

// let student = {
//     idType: "H786786",   // Dynamic key based on idType
//     sName: "Hassan",
//     sAge: 20,
//     isStudent: true,
//     greet: function (){
//         console.log(
//         `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.`
//         );
//     },
// };
// student.greet();


//? useCase: when we want to get the user name and value in react

//* =======================
//* Data Modeling:
//* =======================
//? Data modeling is the process of creating a visual representation of either a whole information system or parts of it to communicate connections between data points and structures. The goal is to illustrate the types of data used and stored within the system, the relationships among these data types, the ways the data can be grouped and organized and its formats and attributes.

// Objects are excellent for modeling real-world entities. For instance, you might represent a car, a user, or a product as an object with properties like color, brand, username etc.

// let car = {
//     brand: "Suzuki",
//     model: "Alto",
//     year: 2024,
//     start: function (){
//         console.log("Engine Started!");
//     },
// };

//* ======================
//* Interview Questions
//* ======================

//! Explain the difference between passing object by references and by value in JavaScript. Provide an example to demonstrate each scenario.

//? sol: In JavaScript, primitive data types like numbers and strings are passed by value, while objects are passed by reference.
//? Passing by value: when passing the value, a copy of the primitive value is created and passed to the functionor assigned to a variable. Any changes made to the copy do not affect the original value.

// let a = 10;
// const modifyValue = (x) => (x = 20);
// console.log(modifyValue(a));
// console.log(a);

//? Passing by reference: When passing  by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the  original object.

// let obj = { id: 5, name: "modyfier"};

//  To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator ( ... );

