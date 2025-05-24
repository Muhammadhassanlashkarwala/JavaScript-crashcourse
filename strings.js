// =============================
//  STRINGS IN JAVASCRIPT ("") ✨📌
// =============================

//* Strings in JavaScript are a fundamental data type that represents a sequence of characters.

// Note:
// Strings created with single or double quotes (""), ('') both are same and the works also same.
// There is no difference between the two!

//* String Properties
// Length: Property that returns the length of the string (number of characters).

// const str = "Hello, World   !";
// console.log(str.length);
// Length keyword consider all words & space also!

// ===================
// ESCAPE CHARACTER
// ===================

//* Escape Character: In JavaScript, the backslash \ is used as an escape character. It allows you to include special characters in a string.
// code         result         description

// \'            '               Single quote
// \"            "               Double quote
// \\            '               Backslash

// let text = "My name is Hassan Raza & I am a Full Stack Developer!";
// let text = "My name is 'Hassan Raza' & I am a \"Full Stack \" Developer!";
// let text = 'My name is Hassan Raza \\ & I am a \'Full Stack\' Developer!';
// console.log(text);

// ========================
// STRING SEARCH METHODS
// ========================

//* String search methods:
//a: The indexOf(): The indexOf() method returns the index (position) of the first occurence of a string in a string, or it returns -1 if the string is not found:
// syntax
// indexOf(searchString)
// indexOf(searchString, position)

// let text = "Hassan Raza";
// // console.log(text.indexOf("Raza"));

// let arrFrom = Array.from(text)
// // console.log(arrFrom);

// let arrMap = arrFrom.map((currEle, index)=>{
// return `${currEle} - ${index}`
// });
// console.log(arrMap);

//b: The lastIndexOf(): The lastIndexOf() method returns the index of the last occurence of a specified text in a string:
// syntax
// lastIndexOf(searchString)
// lastIndexOf(searchString, position)

// let text = "Hello JavaScript, Welcome to our Best JavaScript Course !";
// let index = text.lastIndexOf("JavaScript");
// let index = text.lastIndexOf("JavaScript", 30);
// console.log(index);

// c: The search() method: The search method searches a string for a string (or a regular expression) and returns the position of the match
// Returns the index number where the first match is found, Returns -1 if no match is found.
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course !";
// let result =  text.search(/Javascript/i);
// console.log(result);

//* 👉 Important Tips:
//  The search() method cannot take a second start position argument
//  The indexOf() method cannot take powerful search values (regular expressions).
// They accept the same arguments (parameters), and return the same value.

// The match() method: The match() method returns an array of the matched values or null if no match is found.
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course ! JavaScript";
// let result = text.match(/Javascript/gi);
// console.log(result);

// The matchAll() method: The matchAll() method returns an iterators of all matches, providing detailed information about each match. Returns an empty iterator if no match is found.
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course !";
// let result =  text.matchAll("JavaScript");
// console.log(... result);

// for (const item of result) {
//     console.log(item[0]);
// };

// The includes() method: The includes() method returns true if the string contain the specified value, and false otherwise.
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course !";
// let includeResult = text.includes("Java");
// let includeResult = text.includes("JavaS");
// console.log(includeResult);

// Notes: includes() is case sensitive, includes() is an ES6 feature.

// The startsWith() method: The startsWith() method returns true if a string begins with a specified value, Otherwise it returns false:
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.startsWith("Hellos");
// let result = text.startsWith("Hello");
// console.log(result);

// Start position for the search can be specified.
// let result = text.startsWith("Welcome", 20);
// let result = text.startsWith("welcome", 17);
// console.log(result);

// The endsWith() method: The startsWith() method returns true if a string end with a specified value, Otherwise it returns false:
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.endsWith("Welcome");
// let result = text.endsWith("Course", 48);
// console.log(result);
