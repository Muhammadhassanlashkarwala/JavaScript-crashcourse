//* =======================
//* Object in JavaScript
//* =======================
//? Objects are a fundamental part of JavaScript, providing a way to group related data and functions together. In JavaScript, an object is a collection of key-value pairs, where each key is a string (or a symbol) and each value can be any data type including other objects. Objects can have properties and methods, making them versatile for various use cases.

//* =======================
//* Creating Objects:
//* =======================
//? There are several ways to create objects in JavaScript. The most common one is using object literals:

// const obj = {
//     id: 1,          // id represent to key! aur iski value hai 1 
//     pName: "Laptop",
// };

// let person = {
//     name: "Hassan",
//     age: 20,
//     isStudent: false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };

// let person = {
//     name: "Hassan",
//     age: 20,
//     "is'Student": false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };

//* =======================
//* Accessing Properties:
//* =======================
//? You can access object properties using dot notation or square bracket notation:

// let person = {
//     name: "Hassan",
//     age: 20,
//     isStudent: false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };

// let person = {
//     name: "Hassan",
//     age: 20,
//     "is'Student": false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };

// console.log(person.name);    // dot notation
// console.log(person.age);
// console.log(person.is'student);
// console.log(person[`is'Student`]);   // square bracket notation

//* ===================================
//* Adding and Modifying Properties:
//* ===================================
//? You can add new properties or modify existing ones:

// let person = {
//     name: "Hassan",
//     age: 20,
//     "is'Student": false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };

// person.job = "Mern Stack developer";
// person.age = 14;
// person["age"] = 15
// console.log(person);

// =====================
// Methods:
// =====================
//? Methods in Objects are function associated with the object. They can be invoked using the same notation as properties:

// let person = {
//     name: "Hassan",
//     age: 20,
//     "is'Student": false,
//     greet: function (){
//         console.log("Welcome to JS Course!");
//     },
// };
// person.greet();


//* ======================================
//* We can add dynamic keys in an object:
//* ======================================

// let idType = "studentId";

// let student = {
//     [idType]: "H786786",   // Dynamic key based on idType
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

//? Passing by reference: When passing by reference, a reference to the memory location of the object is passed to the function or assigned to a variable. Any changes made to the object through this reference will affect the original object.

// let obj = { id: 5, name: "modyfier"};

// let obj1 = obj;
// obj1.name = "Hassan"
// console.log(obj1);
// console.log("original ====>", obj);


//  To avoid this behavior and create a true copy of the object, you can use methods like Object.assign() or the spread operator ( ... );

//? Object.assign() is used to copy properties from one or more source objects to a target object.

// let obj = { id: 5, name: "modyfier"};

// let newObj = Object.assign({}, obj);

// newObj.name = "Bilal";
// console.log(newObj);
// console.log("original ===>", obj);

// ============================
// Comparison by Reference:
// ============================

//? Two objects are equal only if they refer to the same object.
//? Independent objects (even if they look alike) are not equal:

// const obj1 = {name: "hassan"};
// // const obj2 = {name: "hassan"};
// const obj3 = obj1;

// // const isEqual = obj1 === obj2 ? true: false;
// const isEqual = obj1 === obj3 ? true: false
// console.log(isEqual);

// =====================================
// JSON (JavaScript Object Notation):   
// =====================================


//? JSON is a data interchange format derived from JavaScript objects. Objects can be easily converted to JSON and vice versa.

// let student = {
//     id: 1,
//     sName: "Hassan",
//     sAge: 20,
//     isStudent: false,
//     greet: function (){
//         console.log(`hey my id is ${student.id} and my name is ${student.sName}`);
//     },
// };

// let jsonData = JSON.stringify(student);
// console.log(jsonData);
// let parsedObject = JSON.parse(jsonData);
// console.log(parsedObject);

// =======================
// "this" Object
// =======================

//? In JavaScript, the this keyword refers to an object.

// which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In an object method, this refers to the object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply(), and bind() can refer this to any object.

// ==========================
//  NOTE :
// ==========================

// This is not a variable. It is a keyword, You cannot change the value of this.    

//? In JavaScript, the this keyword refers to an object.

// which object depends on how this is being invoked (used or called).

// The this keyword refers to different objects depending on how it is used:

// In ab object method, this refers to the object.
// Alone,  this refers to the global object
// In a function, this refers to the global object
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), apply() and bind() can refer this to any object.

// Note:
// this is not a variable. It is a keyword. You cannot change the value of this.
// ("use strict");

// x = 5;
// console.log(x);

// function callme(){
//     console.log(this);
// }
// callme()  //try to run on browser console

//todo lets check the this keyword values in an object methods

//* Regular Function Expression:
// const obj = {
//  name: "coding",
//  greet: function (){
//     console.log(this);
//  },
// };
// obj.greet();

//* In this example, the greet method is defined using the "Method Shorthand" syntax. It's a more concise way to define in object literals.

// const obj = {
//  name: "coding",
//  greet() {
//     console.log(this);
//  },
// };
// obj.greet();

//* Fat Arrow Function

// const obj = {
//  name: "coding",
//  greet: () => {
//     console.log(this);
//  },
// };
// obj.greet();

// =========================
// Objects Useful Methods
// =========================

const product = {
        id: 1,
        name: "Laptop",
        category: "Computers",
        brand: "Dell",
        price: 4400.99,
        stock: 80,
        description: "Powerful laptop with a quad-core i6 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
        image: "image link will be added during projects",
};

//? 1: Object.keys(): Return an array containing the names of all enumerable own properties of an object.

//? 2: Object.values(): Returns an array containing the values of  all enumerable own properties of an object.

//? 3: Object.entries(): Returns an array containing arrays of key-values pairs for each enumerable own properties of an object.

//? 4: Object.hasOwnProperty(): Returns a boolean indicating whether the object has the specified property as an own property.
// console.log(product.hasOwnProperty("name"));   //output: true
// console.log(product.hasOwnProperty("isStudent"));   //output: false

//? 5: Object.assign(): Copies the values of all enumerable own properties from one or more source objects to a target object.
// const target = {a: 1, b: 2};
// const target = {a: 1, b: 2};