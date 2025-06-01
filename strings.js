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


// ============================
// EXTRACTING STRING PARTS:
// ============================
// a: The slice method(): The slice method() extracts a part of a string and  returns the extracted part in a new string.

// syntax:
// slice(start,end);

// Todo JavaScript counts positions from zero.
// First position is 0, Second position is 1.

// Main point is:
// slice() extracts up to but not including indexEnd.
//          012345678910111213
// let text = "Hello JavaScript";
// let result = text.slice(6);
// let result = text.slice(6,13);
// console.log(result);

// a: substring: Extracts a portion of the string based on starting and ending indices.
// camelCase is used to seperate words, substring is not to be intended as Sub String but as Substring.

// syntax
// substring(indexStart);
// substring(indexStart, indexEnd);

// substring() is similar to slice(). the difference is that start and end values less than 0 are treated as 0 in substring().
//          01234                                                   
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.substring(-6);
// let result = text.slice(-6);
// console.log(result);

// Simple Question HomeWork !!!
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.substring(0);
// let result = text.substring(5);
// let result = text.substring(-8);
// console.log(result);

// similarities
// In both  teh slice() and substring() methods, the end parameter indicatesthe ending index up to which the extraction occurs, but the character at the end index is excluded from the extracted substring.


// Interview Questions
// What is the output of the following code? 🤔
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.slice(1); 
// let result = text.replace("H", "Hassan");
// let result = text.replace("JavaScript", "Hassan");
// let result = text.replaceAll("JavaScript", "Hassan");
// let result = text.substring(1);
// console.log(result);

// ============================
// EXTRACTING STRING CHARACTERS:
// ============================
// There are three methods for extracting string characters.

// The charAt(position) Method
// The charCodeAt(position) Method
// The at(position) Method

// charAt(): The charAt() method returns the character at a specified index (position) in a string.
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.charAt(8);
// let result = text.charAt(-5);
// console.log(result);

// charCodeAt(): The charCodeAt() method returns the code at a specified index in a string. The method returns a UTF-16 code (an integer between 0 to 65535).
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.charCodeAt(7);
// console.log(result);

// todo ES2022 introduced the string method at().
// The at() method returns the character at a specified index (position) in a string. The at() method returns the same as charAt().
// let text = "Hello JavaScript, Welcome to our Best JavaScript Course";
// let result = text.at(6);
// let result = text.at(-6);
// console.log(result);

// Note & Benefits of at() method!
// The at() method is a new addition of JavaScript.
// It allows the use of negative indexes while charAt() do not.
// Now you can use result.at(-2) instead of charAt(result.length-2).


// =========================
// OTHER USEFUL METHODS:
// =========================
// toUpperCase and to LowerCase: converts the string to uppercase or lowercase.

// const str = "Hassan";
// console.log(str.toUpperCase());   // output: ?

// const str2 = "HASSAN";
// console.log(str2.toLowerCase());  // output: ?

// trim: removes whitespace from both ends of the string.
// const str = "     Hello, World     ";
// console.log(str.length);

// const str2 = str.trim();
// console.log(str2);
// console.log(str2.length);

// split: Splits the string into an array of substrings based on a specified delimiter.
// const str = "apple, orange, banana";
// console.log(str.split(",").reverse().join());

// =========================
// Interview Questions !
// =========================

// Q:01) Write a JavaScript function that prints the letter "a" through "z" in the console. You should use a loop to iterate through the letter and print each one on a new line.

// console.log("a".charCodeAt());
// console.log("z".charCodeAt());
// for(let char= 97; char <= 122; char++){
//     console.log(String.fromCharCode(char));
// }

// Q:02) Write a function to count the number of vowels in a string?

// const countVowels = (str) =>{
//     const vowels = "aeiou";
//     let count = 0;
//     for(let char of str){
//         console.log(char);
//         // console.log(str.includes(char));
//         if(vowels.includes(char)){
//            count++;
//         }
//     };
//     return count;
// };
// console.log(countVowels("Hello, a i o u World "));

// Q:03) Write a function to check if all the vowels presents in a string or not?

// const checkAllVowelsPresent = (str) =>{
//     const vowels = "aeiou";
//     for(let char of vowels){
//         // console.log(char);
//         // console.log(str.includes(char));
//         if(!str.includes(char)){
//             return false;
//         }
//     };
//     return true;
// }
// console.log(checkAllVowelsPresent("my name is muhammad hassan !"));