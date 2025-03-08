// A data type define the type of values can hold or store.

// string value
// var myName = "MuhammadHassan";
// console.log(myName);

// Number value
// var myFavNum = 12;
// console.log(myFavNum);

// boolean value
// var isStudent = false;
// console.log(isStudent);

// Undefined value
// var myAge;
// console.log(myAge);


// null value
// var nullVal = null;
// console.log(nullVal);

// bigint value
// var bigInt = 123456788109865n;
// console.log(bigInt);

// Symbol value.



// What is the purpose the typeof operator in javascript.

// var myName = "Hassan";
// console.log(myName);
// console.log(typeof myName);


// var myAge = 25;
// console.log(myAge);
// console.log(typeof myAge);

// How to converting String to a number
// var againPrintMyName = "5";
// console.log(againPrintMyName);
// // console.log(typeof +againPrintMyName);
// console.log(typeof Number(againPrintMyName));

//Number converting to String
// var myFavNum = 12;
// console.log(myFavNum);
// console.log(typeof String(myFavNum));


// Now the "typeof Null"
// var nullVal = null;
// console.log(nullVal);
// console.log(typeof nullVal);




// Now the Turn of parseInt & parseFloat. 
// Both functions they are converting string in to numbers. but both functions are different use cases.


// var str = "hassan";
// console.log(str);
// console.log(typeof str);


// Using of ParseInt
// var num = "12";
// var strConNum = num;
// console.log(strConNum);
// console.log(typeof strConNum);


// var num = "12.5";
// var strConNum = parseInt(num);
// console.log(strConNum);
// console.log(typeof strConNum);



// Using Of ParseFloat.

// var num1 = 18.5;
// var usingFloat = parseFloat(num1);
// console.log(usingFloat);
// console.log(typeof usingFloat);


// More Examples:

var exam = "&abd"
var exam1 = parseInt(exam);
console.log(exam1);

var exams = "  123"
var exam2 = parseInt(exams);
console.log(exam2);

var examss = "43.6"
var exam3 = parseFloat(examss);
console.log(exam3);

var examsss = "-12.1"
var exam4 = parseFloat(examsss);
console.log(exam4);



//  Differece between on ParseInt & ParseFloat
//  tww ab ye baat krte hen ke bhaee ye ju hamare pass ParseInt h and ParseFloat h isme difference kiya h??
// so now the difference is.
// ParseInt.
// parseInt totally ignore krta h integers values ko mtlbb ke mene aik number define kiya 55.5 point k baad ju value hooti h hamare pass usko khete hen integers itna tww app logo ko pata hooga.

// so parseInt ke agar mene 55.5 define kiya usse tww wo mujhe answer return ju kare gya woo kare ga 55 kyuu ke ye uska behavior h parseInt ka ke woo totally ignored krta h integers ko thkk h yaha tww baat hoo gai parseInt ki.

// ParseFloat.

// AB parseFloat ju h uska aulat h parseInt ka ke bhaee agar parseInt ignore kr raha h integers ko tww parseFloat ne bola ke me appki help kr deeta ho me appke solution ko easy kr deeta ho and me integers ko ignore bh nh krta ho.
// so parseFloat acha bacha h hamare pass ju hamari help krta h string ko number me convert krne me aur agar ko integer number bh ajai tww usse bh solve kr deeta h. 

// Ab example bh dikhata ho me appko.
// phele me parseInt dikhata ho appko ke wooo integers ko ignore kr deeta h 
// then appko parseFloat ki example dikhata ho