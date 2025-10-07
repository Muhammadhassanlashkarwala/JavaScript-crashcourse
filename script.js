// console.log("Hello World");


// function addThreeNumber (a, b, c) {
//     return (a + b + c)
// }
// let c = addThreeNumber (30 , 20 , 10 )

// console.log(c);


// let student = {
//   userName : "Muhammad Hassan" ,
//   aGe : 19 ,
//   Session : "A" ,
//   Follower : 2000
// };
// console.log(student);
// console.log(typeof student);


// Arithemtic Method 


// let a = 20
// let b = 10

// console.log("a = 20" , "& b = 10 ");
// console.log("a + b =" , a+b);    // addition 
// console.log("a - b =" , a-b);    // subtract
// console.log("a * b =" , a*b);    // multiplication
// console.log("a / b =" , a/b);   // devision
// console.log("a % b =" , a%b);  // modulus ju reminder bache ga wo batai ga
// console.log("a ** b =" , a**b);   //iska ** ye mtlb hoota h jeese power 5 k upper 2

 // Urany Method .....
 

//  let a = 20
//  let b = 10
 
//  console.log("a = 20" , "& b = 10 ");

// a = a + 1        // 21
// a++              // ye bh 21 hi aii ga line number 44 and 45 bilkul same hi h
// console.log("a = " ,a);

// a = a + 1      //19
// a--
// console.log("a = " ,a);


  // ++a kiyaa karta h ke ye phele hi change kr deeta h value a++ next line se change karta h 

// console.log("++a =" , ++a);   // ye ju h phele hi 21 ho jai a ye next line me nh hoga
// console.log("a++ =" , a++);  // ye phele 20 hi show kare ga phr next line me 21 ho jai ga 

//   Assignment Operators

//  a += 2   // result a = a + 2 
// console.log("a =" , a);
// a -= 2   // result a = a - 2 
// console.log("a =" , a);

//  COmparison operators

// let d = 90
// let e = 110
// console.log("d == e " , d == e);     //it is false   == ye tww sirf values and check kare gay
// console.log("d != e " , d != e);    //it is true

// let d = 110
// let e = "110"

// console.log("d === e" , d === e); // it is false number tww same h but typw its different upper wala number and dosra wala string    //   ye har cheez check kare ga datatype bh check kare ga

// console.log("d !== e" , d !== e);   // it is true why numer is same but type is different.


// Logical Operators


// let a = 3
// let b = 4

// console.log("a && b" , a < b &&  b === 4);  // it is true why two conditions are true if one concition false its return false
// console.log("a || b" , a < b || a > b);     // it is true only one condition is true so its return true. 
// console.log(" !(a>b)" , !(a > b));         // it is true why ! work opposite true condition is move to false.

// Conditional Statements...

// let age = 19

// if(age >= 18){
//  console.log("You Can Vote");
// }
// if(age < 18){
// console.log("You Cannot Vote");
// }

// let mOod = "darkmOod";
// let color;

// if (mOod === "darkmOod") {
//   color = "black" ;
// }
// if (mOod === "lightmOod") {
//   color = "white" ;
// }

// console.log(color);




// let Hassan = "goodbOy";
// let colors;

// if (Hassan === "goodbOy") {
//   colors = "Orange" ;
// } 
//  if(Hassan === "badbOy"){
//   colors = "Purple"
//   }

// console.log(colors);

//  odd or even

// let num = 18 

// if (num%2 === 0) {
//   console.log("num is even");
// } else {
//   console.log("num is odd");
// }



// if (num%3 === 0) {
//   console.log("num is odd");
// } else {
//   console.log("num it's not add");
// }
// let agE = 20

// if (agE < 18) {
//   console.log("you are junior");
// }else if(age > 60){
//   console.log("you are senior");
// }else{
//   console.log("you are middle");
// }

// Ternary Operator
//  let yourAge = 60
// let resUlt = yourAge <= 50 ? "adult" : "young";
//  console.log(resUlt);

//  let mOney = 5000
//  let extrA = mOney >= 5000 ? "true" : "false" ;
// console.log(extrA);

//    Switch Cases....

// const expreSS = "papayya" ;

// switch (expreSS) {
//   case "mango":
//     console.log("mango is here");
//     break;
//     case "apple":
//       console.log("apple is here");
//       break;
//       case "papayya":
//         console.log("papayya is here");
//         break;
//       case "orange":
//         console.log("orange is here");
//         break;
//   default: 
// console.log("papayya in not here");
  
// }

//   Q:01 Get user to input a number using prompt("Enter a number:"). Check if the number is a multiple of 7 or not.

// let userNum = prompt("Enter a user number")

// if (userNum%7 === 0) {
//   console.log("the number is multiply of 7");
// } else {
//   console.log("the number is not multiply of 7");
// }

//  Q:02 Write a code which can give grades to students according to their scores:
// 90 - 100, A
// 70 - 89 , B
// 60 - 69 , C
// 50 - 59 , D
// 0  - 49 , F

// let score = 95;
// let grade;

// if (score >= 90 && score <=100) {
//   grade = "A" ;
// }
// else if (score >= 70 && score <=89) {
//   grade = "B" ;
// }
// else if (score >= 60 && score <=69) {
//   grade = "C";
// }
// else if (score >= 50 && score <=59) {
//   grade = "D";
// }
// else if (score >= 0 && score <=49) {
//   grade = "F";
// }

// console.log("your grade is : " , grade);

// let score = 75;
// let grade;

// if (score >= 90 && score <=100) {
//   grade = "A" ;
// }
// else if (score >= 70 && score <=89) {
//   grade = "B" ;
// }
// else if (score >= 60 && score <=69) {
//   grade = "C";
// }
// else if (score >= 50 && score <=59) {
//   grade = "D";
// }
// else if (score >= 0 && score <=49) {
//   grade = "F";
// }

// console.log("your grade is : " , grade);


//      for loop ......

// for (let index = 1; index <= 5 ; index++) {

//   console.log("index =" , index);
  
// }

//  Calculate sum of 1 to 10 

// let sum = 0 ;
// for (let index = 1; index <= 10 ; index++) {
//   sum = sum + index
// }
// console.log(sum);

//   While loop   while loop yuhh use hoota h ke hume aik variable banana prta he jisme hum define krte hen k kahan se number shooro krne measn i = 5 ; 



// let index = 5;
// while (index <= 10) {
  
//   console.log("Hassan Raza");
//   index++
// }

// while loop and do while loop me ye farq hoota h ke means agar appki condition galat hooti h tw wo run nh krta but do while loop me agar appki condition galat bh hoogi tww woo atleast aik baaar tww run kare ga phr iske baaad nh kare ga and do while loop m hume condition (i < 5) ke baad semicolon zarooorr lagana h ; ye wala


// do {
//   console.log("Mr.hassan");
//   index++
// } while (index<= 10);



// for of loop for of loop ju h hume arrays ans string ke upper loop lagane me help krta h aur ziadar tar for of loop hi use hoota h 
// for of loop ko hum string and array ke liye use karte hen 

// let str = "MUHAMMAD HASSAN"

// for (let i of str) {
//     console.log("i = " , i);
//   }
  
// let str = "MUHAMMAD HASSAN"  
// let size = 0 ;
// for (let lenGth of str) {
//   console.log("lenGth = " , lenGth);
//   size++
// }
// console.log("size of " , size);
// console.log(str.length);  // length yuh bh hum maloom kar sakte hen.


// for in loop ko hum objects ke liyee use karte hen.

// for in loop practice. for in loop appke object ki key return krta h means mene likha name : "hassan" tww name ju h wo key h and hassan value h ok

// let stUdent = {
//   Name : "Muhammadhassan",
//   Age : 19,
//   Cpga : 8.5,
//   passEd : true ,
// }

// for (const key in stUdent) {
//   console.log("key =" , key ,",", "value =", stUdent[key]);

// }


//  practice QUestion : 

// for (let index = 0; index <= 100; index++) {
//   // console.log(index);
//   if (index%2 === 0) {
//     console.log(index);
//   }
// }

// let gameNumber= 5;

// let userGiving = prompt("Pick One number");
// if (userGiving != gameNumber) {    //if wali condtion me ye hooga ke ke wo sirf aik baar appki batai hui conation ke mutabiq chale ga and condition se bahir but loop baar baar chalta rahe ga 
//   userGiving = prompt("your pick worng number: Pick Another number");
// }
// console.log("Congratulation you pick right number and you won!");

// let gameNumBEr = 26 ;
// let userNumbEr = prompt("Choose On Correct Number")
// // console.log(userNumbEr);
//                               //   while loop kiya kare ga jab tk appki condition true nh hooti wo chalta rahe ga ok
// while (userNumbEr != gameNumBEr) {     
//   userNumbEr = prompt("Your Choosen Number is wrong :Select another number")
// }
// console.log("Congratulation you pick right number and you won!");

let sTr = "Apna school"
console.log(sTr[3]);


//  Template Literals

// let senTence = `This is a template literal`
// console.log(senTence);

let ObjeCt = {
  item : "Pen" ,
  price : 10,
}

console.log(`the cost of this ${ObjeCt.item} is ${ObjeCt.price} rupees`);

// console.log("The cost of this" , ObjeCt.item , "is" , ObjeCt.price ,"rupees");


//      javascript ke method string  me \n se linebreak ho jaati h   and \t se gap ajata h ..

console.log("Muhammad\thassan");



let nEw = "English u.s"
console.log(nEw.toUpperCase());
console.log(nEw.toLowerCase());


let newTrim = "                    English u.s                       "
console.log(newTrim.trim());     //trim se ye hoota h ke app jitna bh gape doo gay tww trim case lagane se wo saare white space khatam kr deeta h 



let newSlice = "0316024"
console.log(newSlice.slice(3));    //slice method ye work krta h ke cut kr deeta h means ab appko 0316024 ju h app chahte ho ke 6 se start ho tw app slice method use kr ke uss eindex number define kro gay


// concat method 2 strings ko apas me mila deeta h means str1 + str2 tww concat bh yehii kaam karta h str.concat(str2)

// It's concat method    

// let str1 = "Muhammad"
// let str2 = " Hassan "
// let res = str1.concat(str2)
// console.log(res);

// replace method kiya karta h name se hi pata chal raha h ke appko variable me ju replace krwana ho replace kr deeta h means 

// let str1 = "hellolololo"    // ab me ye chah raha ho ke hello ke end me ju ye lo h iski jagha me p likhna chhata ho tw me replace ka method lagao ga 

// console.log(str1.replace('lo', 'p'));  //ab agar mere pass lololo 3 baar ho tw phr hume agar teeno lo ko replace krna h tw humey replaceAll ka method use krna pare ga


// console.log(str1.replaceAll('lo', 'p'));  replaceAll se woo sab lololo ko p me convert kr deega .

//  charAt method humey index number maloom krnaa hoo tww hum charAt se kr sakte hen


// let str = "Muhammad"
// console.log(str.charAt(7));
// console.log(str[7]);  // btoh things are same .

// ab me chahta ho ke ye str me ju muhammad h isko hata ke hassan likh do tww hum ye kare
//  console.log(str.replace("Muhammad","Hassan"));




//  practice question ....

// let fullName = prompt("Enter your fullname");

// let userName = "@" + fullName +fullName.length
// console.log(userName);


// array ki value ko me loop ke zarye print krwana chahta ho console pe :

let arrayHunter = ["jamali" , "kamali" , "nagan" , "dakU" , "damali"]  //phele hum for loop se print karwa rahe hen phr for of loop se bh print krwai gay

// for (let index = 0; index < arrayHunter.length; index++) {
  
//   console.log(arrayHunter[index]);
  
// } // ye for loop se humne array ki value print karwa li h 


for (const hero of arrayHunter) {
  console.log(hero);
}


// let adding = [85 , 87 , 21 , 34, 67] ;

// let zerO = 0 ;
// for (let val of adding) {
//    zerO += val
// }
// console.log(zerO);
// let avg = zerO / adding.length
// console.log(avg);

let prices = [250, 645, 300, 900, 50] ;



for (let i = 0; i < prices.length; i++) {
  let dis = prices[i] / 10 ;
 
  prices[i] -= dis ;
 
}

console.log(prices);

// slice method

// let numberinG = [1, 2, 3, 4, 5]
// console.log(numberinG.slice(1,4));
// // document.write(numberinG.slice(1,4));


//  splice method 

let numberinG = [1, 2, 3, 4, 5, 6, 7]
console.log(numberinG.splice(1,3,101,102));
console.log(numberinG);

// practice question:

let pracQuestion = ["Bloomberg" , "Microsoft" , "Uber" ,"Google" ,"IBM", "Netflix" ]

console.log(pracQuestion.splice(0,1));
console.log(pracQuestion);
console.log(pracQuestion.splice(1,1,"Ola"));
console.log(pracQuestion);
console.log(pracQuestion.push("Amazon"));
console.log(pracQuestion);
// document.write(pracQuestion.splice(0,1));
// document.write(pracQuestion);
// document.write(pracQuestion.splice(1,1,"Ola"));
// document.write(pracQuestion);
// document.write(pracQuestion.push("Amazon"));
// document.write(pracQuestion);



// practice  

// var str = "my name is hassan owais hassan"


// console.log(str5.indexOf("h"));


// for (let i = 0; i < str.length; i++) {


//  console.log([i], str[i]);

// }


// var allWord = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni dolore deleniti impedit non odit corporis tenetur, necessitatibus doloremque dolor repudiandae."


// console.log(allWord.split());

// console.log(allWord[0].toUpperCase());


// var str = "my name is hassan"
// var conVert = (str.split(" "));
// newArr = [] 

// for ( var i = 0 ; i < conVert.length ; i++){
//     newArr.push(conVert[i][0].toUpperCase() + conVert[i].slice(1));
// }

// console.log(newArr.join(" "));



// Practice Web 25-4-24


// console.log(Math.random());  // random ye karta h ke apni tarf se random number deega but less than (1)


// console.log(Math.round(7.3)); //   7
// console.log(Math.round(7.5)); //   8
// console.log(Math.round(7.8)); //   8



// console.log(Math.ceil(7.0));  //   7
// console.log(Math.ceil(7.4));  //   8 
// console.log(Math.ceil(7.6));  //   8
// console.log(Math.ceil(7.3));  //   8 

// console.log(Math.floor(8.7));  //  8
// console.log(Math.floor(9.99));  // 9
// console.log(Math.floor(11.3));  // 11
// console.log(Math.floor(12.5));  // 12


// var user =  prompt ("enter your value")

// var yoUrValue = Math.random()*100

// if (user == Math.round(yoUrValue)) {
//     console.log("your won");
// }else if (user > Math.round(yoUrValue)) {
//     console.log("greater ");
// }else {
//     console.log("less");
// }



// let red = Math.round(Math.random()*255);
// let green = Math.round(Math.random()*255);
// let blue = Math.round(Math.random()*255);

// console.log(`RGB : (${red} , ${green} , ${blue})`);



// console.log(Math.max(10,20,50,80));  // ye ye bataii ga ke isme ju sab se bara number h usko bata dega 
// console.log(Math.min(10,20,50,80)); // ye ye bataii ga ke isme ju sab se chotta number h usko bata dega




// let num = 8.8

// console.log(typeof num);      //typeof iski type batai ga ke 8.8 ju h string h ya number h.
// console.log(parseInt(num));   //parseInt string ko number me convert ke deeta h bur number ko string me convert nh krey ga.
// console.log(typeof parseInt(num));  //



// let nuMber = '6.7'   // means ye string h ' 6.7' mujhe usko convert karna h number me twww ye number me karne ke liye kaafi type hen.
// console.log(typeof nuMber);
// console.log(typeof parseInt(nuMber));
// console.log(typeof +num);
// console.log(typeof Number(nuMber));



// var price = 9.95
// var tax = 6.5
// var Total = ( price + (price * tax))
// console.log(Total);




//                    Practice                         27-4-24


// var userName = "hassan"
// console.log(userName);

// console.log(userName[userName.length-1]);

// console.log(userName.charAt(userName.length-1));

// console.log(userName.slice(-1));


// console.log(Math.round(Math.random()*1000));


// var num = Math.floor(Math.random()*900) 
// console.log(num);
// console.log(num+100);

//date and time practice (is date and day wale method me  Sab 0 se start hoOta h bs date 1 se start hoogi).

// var now = new Date()
// console.log(now)
// console.log(now.toString())
// console.log(typeof now)
// console.log(now.toDateString());


// var weekDays = ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]; 
// console.log(weekDays);
// var now = new Date()
// console.log(now)
// console.log(now.getDay());
// console.log(weekDays[now.getDay()]);



// var noW = new Date()
// console.log(noW.getDate());
// console.log(noW.getDay());
// console.log(noW.getMonth());
// console.log(noW.getFullYear());
// console.log(noW.getMinutes());
// console.log(noW.getSeconds());
// console.log(noW.getMilliseconds());
// console.log(noW.getTimezoneOffset());


// var daTe = new Date()
// console.log(daTe.getDate()+"-"+daTe.getMonth()+"-"+daTe.getFullYear());
// console.log(daTe.getDate()+"/"+daTe.getMonth()+"/"+daTe.getFullYear());
// console.log(daTe.getMonth()+"-"+daTe.getDate()+"-"+daTe.getFullYear());


// Specific Date and Time....      Specific Date and Time me hum apni tarf se date and time dee sakte hen.

// var nOw = new Date()
// var doomDays = new Date ("MAy 12, 2024")
// console.log(nOw);
// console.log(doomDays);


// var newDate = new Date ("Apr-30-2024")
// console.log(newDate);


// console.log('Tue 30 Apr 2024 02:35 PM'); //hume is tarah ki date chhaiye h tw kiya kare?


// var now = new Date()
// console.log(now);


// var weekDays =  ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday"]; 
// var MonthNames = ["January" , "Febuary" , "March", "April" , "May" ,"June" , "July" ,"August" , "September" , "October" ,"November" ,"Deccember"]




// function greet() {
//   var userName = prompt('enter your name')
//   console.log(userName);
// }
// greet()


// function addTwoNumbers(a,b) {
//   console.log(a+b);
// }

// // addTwoNumbers(6,7) //agae app user se value leena chhate ho tw prompt ka use kro means asee.

// addTwoNumbers(prompt('enter value 1'), prompt('enter yoyur name 2')) //isko agar app means first value 3 deete ho and second value bh agar 3 ho tw wo add kr ke 6 nh deega balke 33 deega kyu ke prompt ki type string h tw uski value ko number krne ke liye hume prompt se phele + lagana pare ga.


// function clickbutton() {
//   console.log(new Date());
// }

// function randOm(){
//   console.log(Math.round(Math.random()*100));
// }



// function GuessNumber() {
//   var guessNumber = 48
//  var val = prompt ('enter your value between 1 and 50')
//   if ( guessNumber == val) {
//     console.log("congratulations");
//   }else{
//     console.log("your number is wrong");
//   }
// }


// Practice Class 02-May-2024





// for (let i = 0; i < 10; i++) {  // for ke loop me agar app let use kro gay tw wo appki loop se bahir value ko error dee deega kyu ke let blockscope element h, and agar var use kroo gay tww wo bahir wali value ko error nh deega kyu ke wo blockscope nh h. 
//  console.log(i);
// }
// console.log(i , 'outside loop value');




// function ABC() {
//   var name = 'xyza'
//   console.log(name);
// }
// ABC()




// function tellTime() {
// var now = new Date() ;
// var theHr = now.getHours() ;
// var theMin = now.getMinutes() ;
// alert("Current time: " + theHr + ":" + theMin);
// }

// tellTime()

// function fOod(x,y,z) {
//   console.log(x+y+z);
// }
// fOod(40,70,80)



// function checkNUmber(a) {
//   if (a%2 === 0) {
//     console.log("true");
//   }else{
//     console.log("false");
//   }
// }
// checkNUmber(6)



// function Checking(b) {
//  console.log(b%2 == 0);  
// }
// Checking(7)




// function CheckingoutoFFunction(c) {
//   return c%2 == 0 
//  }
//  var func = CheckingoutoFFunction(6)
//  console.log(func);
//  console.log(CheckingoutoFFunction(7));





// var weekDays =  ["Sunday" , "Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturda'y"]; 
// var findValue = prompt('enter your weekday')

// function abc(value , check) {
//   for (let i = 0; i < weekDays.length; i++) {

//   }
// }


// console.log(madam === madam);
//  var user = prompt("enter string")
// function abc() {
//   if(user == user.split("").reverse().join("")){
//     console.log("match");
//   }
// }

// var aug14 = new Date("14 Aug, 2024")
// console.log(aug14);
// document.write(aug14)

// document.write("<br><br><br>")

// var August = new Date ()
// var task2 = new Date ("14 Aug, 2024")
// var addTwo = task2 -  August
// document.write(Math.round(addTwo/1000/60/60/24));

// document.write("<br><br><br>")

// var Febuary = new Date ()
// var task2 = new Date ("05 Feb, 2025")
// var addTwo = task2 -  Febuary
// document.write(Math.round(addTwo/1000/60/60/24));

// document.write("<br><br><br>")


//TASK NO : 03

//  let sundays = 0

// for (let i = 2024; i < 2051; i++){

// let eachYear = (new Date(i , 0, 1))
// // console.log(eachYear.getDay());
// if (eachYear.getDay() == 0) {
//   //  console.log('Day Of First January');
//    console.log(i);
// }
// }

// for (let i = 2024; i <= 2050; i++) {
//   var dates = new Date(`1 Jan ${i}`)
// // console.log(dates);
//   var str = dates.toString()
//   if (str.slice(0, 0+3) == "Sun") {
//     console.log("Sunday" + i);
//   }
// }

//                           Practice    07-May-2024   //programiz.com


// var day = 'tue'
// switch (day) {
//   case 'mon':
//     console.log('Today is  Mon');
//     break
//   case 'tue':
//     console.log('Today is  Tue');
//     break
//   case 'wed':
//     console.log('Today is  Wed');
//     break
//   case 'thurs':
//     console.log('Today is  Thurs');
//     break
//   case 'fri':
//     console.log('Today is  Fri');
//     break
//   case 'sat':
//     console.log('Today is  Sat');
//     break
//   case 'sun':
//     console.log('Today is  Sun');
//     break
//   default:('Invalid day')
// }

// let age = 12

// switch (age) {
//  case '18':
//  case '20':
// }

//  var text = document.getElementById("text").innerHTML

// console.log(text);



// function show() {
//   var text = document.getElementById("name").value
//   console.log(text);
// }


// function showed() {
//   var texts = document.getElementById("dates").value
//   console.log(texts);
// }




// function Define() {
//   var texts = document.getElementById("text").innerHTML = 'hassan'
//   console.log(texts);
// }


// let valUe = 0
// function Add() {


//   valUe++

//   var addIng = document.getElementById("plus").innerText = valUe
//  console.log(addIng);

// }
// function Subtract(){


//   valUe--

//   var minus = document.getElementById("subtract").innerText = valUe
//   if (minus < 1) {
//     var minus = document.getElementById("subtract").innerText = "0"
//   }
//  console.log(minus);

// }


// function Change() {
//   //  document.getElementById("Title").innerText = "Ant"

// }



               //                      Practice  11-May-2024


// var arr1 = ['Hassan', 'Bilal' ,'Kamran' , 'Ali' ]
// var arr2 = ['Owais' ,'Ahmed', 'Raees' , 'Aqib']

// var arr3 = [...arr1 , ...arr2]    //ye dots ecma 6 ki type h ye yeh karta h ke appke dono array ko join kr deta h
// console.log(arr3);


// var roll = Math.ceil(Math.random()*6)
// console.log(roll);

  

//                                    Practice 23-May-2024

// let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur tempora, sunt autem perspiciatis nesciunt soluta odit possimus aut nam voluptate. Facere, quo laborum ratione aspernatur fugiat numquam ipsum, repudiandae itaque tempora nam, possimus tempore totam error excepturi sit sequi officiis distinctio sint maxime illum. Ab dolorum, quis qui nulla laboriosam rem molestias recusandae veritatis cum totam facilis beatae, modi, repudiandae consequatur? Eum ad quos aspernatur hic placeat. Beatae non quod reiciendis vel odio hic reprehenderit quaerat a, rem aut minus doloremque optio quo ratione, enim, accusamus quam illum voluptas? Corporis in pariatur sapiente consequuntur, earum dicta, tempore illo, quae adipisci reprehenderit voluptate excepturi? Possimus ipsam laboriosam iusto quisquam consectetur illo magnam aspernatur corporis provident molestiae suscipit, amet harum inventore cum error exercitationem facere! Optio porro est quibusdam rerum. Blanditiis expedita quidem corrupti. Dolores deserunt totam unde beatae! Ad earum unde ut exercitationem molestiae rerum blanditiis, accusamus nemo, mollitia, ullam doloribus a tempora! Est eos quaerat excepturi vitae labore ullam ab, porro, ratione perferendis reprehenderit accusamus dolor accusantium recusandae consectetur ad deleniti ipsum pariatur sequi illo qui blanditiis repellat. Officia voluptates obcaecati voluptas ipsa optio recusandae repudiandae. Alias nam aperiam corrupti expedita, maxime quisquam fuga rem, eaque iusto sunt debitis? Eum."
// let text100 = text.slice(0,100)
// let span = document.getElementById('span')
// let btn = document.getElementById('btn')
 

// function SeeMore() {
//   if(btn.innerHTML == 'See Less'){
//     span.innerText = text100
//     btn.innerHTML = 'See More'
// } 
// else{
//   span.innerText = text
//   btn.innerHTML = 'See Less'
// }
// }

let hours = 0;
let minutes = 0;
let second = 0;
let millisecond = 0;
let timer = 0;




// location.reload()   isse reset hooga ..





//  Set Interval 

// let arrAy = ["Hassan" , "Bilal" , "Naeem" , "Salman"]

// for (let index = 0; index < arrAy.length; index++) {
//   // document.write(arrAy[index]) 

//   setInterval(() => {
//     document.write (arrAy[0])
    
//   }, 10000);
// }


// let arr = ["hasaan","hunain" , "haris"];

// let count = 0;

// function ok(){
//   console.log(arr[count])  
//   count++
// }
// setInterval(ok , 10000)


// let weatherApp =[
//   {
//   City : "Karachi" , 
//   Temperature : "40°C" ,
//  PostalCode : 1111 ,
//  FeelsLike : "48°C"
// },
// {
//   City : "islamabad" , 
//   Temperature : "28°C" ,
//  PostalCode : 4656 ,
//  FeelsLike : "36°C"
// },
// {
//   City : "Lahore" , 
//   Temperature : "-15°C" ,
//  PostalCode : 3568 ,
//  FeelsLike : "-20°C"
// }
// ]

// let inputBox = document.getElementById("input");
// let buTTon = document.getElementById("btn");
// let tempeRatuRe = document.getElementById("temp");
// let feelsLike= document.getElementById("feelslike");

// buTTon.addEventListener("click" , () =>{
//    if (inputBox.value.toLowerCase() == 'karachi') {
//     console.log(`Karachi`);
//     tempeRatuRe.innerHTML = weatherApp[0].Temperature
//    }
//    if (inputBox.value.toLowerCase() == 'islamabad') {
//     console.log(`islamabad`);
//    }
//    if (inputBox.value.toLowerCase() == 'lahore') {
//     console.log(`lahore`);
//    }
// }
// )



//      class practice 15 june 
//  function validateRadios() {
//  var radios = document.getElementsByName("gender");
//  for (var i = 0; i < radios.length; i++) {
//  if (radios[i].checked) {
//  console.log("true");
//  }
//  }
//  alert("Please check one.");
//  return false;
//    }
//    validateRadios()

// var name1 = document.getElementById('text');
// function btn(){
//   console.log(name1.value);
// } 

// btn()

function sum(x, y){    // function ke parameters ju hen x and y woo like local variables of fuctions hoote hen meaans ye function tak hi zinda rehte hen agar me isko function ke bahir log karwao ke console x tw woo mujhe bole ga x is not defined kyuu ke ju hamare parameters hoote hen unki working ju h function ke andar tak hi hooti h function ke bahir me unhe call nh karwaa sakta ho
  m1 = x + y;
  return m1;        // return wo keyword h ke agar mujhe function ke bahir koi cheez call krwani h twww return ke keyword laga kar kr sakte hen.
}
let val = sum(4, 8);
console.log(val);


function mul(a, b) {
  return a*b ;
}
let m = mul(8, 10)
console.log(m);

const mulArrow = (m, n)=>{
  return m * n; 
}
const return2 = mulArrow(9, 10)
console.log(return2);

const addArrow = (s, v)=>{
  console.log(s + v);
} 
addArrow(890, 450);