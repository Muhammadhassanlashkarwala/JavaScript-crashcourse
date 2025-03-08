



// Operators Section!

// So now is operator section me hum dekhne wale hen.
// all types of operators OR operand and operator in expression.








// sab se phele me appko ye bata deeta ho ke operand and operator kiya hoota h and expression kiya h ok

             
// var ope = 80 + 90;
//              operator
//     80          +          90 
//   operand                operand

// 80 and 90 boths are operand and (+) is operator.
// and me in teeno cheezo ko combine kr do tww hamare pass bante hen expressions alright!





// TYPES OF OPERATORS!

// 1) Assignment Operators.
// 2) Arithmetic Operators.
// 3) Comparison Operators.
// 4) String Operators.
// 5) Logical Operators.
// 6) Unary Operators.
// 7) Ternary(Conditional) Operators.


//  1) Assignment Operators.
//  sab se easy example de raha ho.
//  variables ko aik value assign krne ke liye ju operator hum use
//  krte hen usse khete hen assignment operator.
//  aur hum assignment operator use bh kr chuke h bss appko ye nh     
//  pata tha ke isse assignment operator khete hen. 

//   Ex:
//   var name = 'hassan';
//   ab samje app mene aik value assign ki with the help of = this 
//   operator and yeah you are right it is called assignment operator.


   
//  So now the turn is Arithmetic Operator
//  2) Arithmetic Operator
//  Arithmetic Operator perform mathematically operations on 
//  variables or values. Types of mathematically operations:
//  addition, subtraction, multiplication, division and modulus.

//  Ex:
//  Addition
//  var a = 10;
//  var b = 20;
//  var add = a + b;
//  console.log(add);

//  Subtraction
//  var c = 20;
//  var d = 10;
//  var sub = c - d;
//  console.log(sub);

//  Multiplication
//  var e = 5;
//  var f = 6;
//  var mul = e * f; 
//  console.log(mul);

//  Division
//  var g = 48;
//  var h = 8;
//  var div = g / h;
//  console.log(div); 

//  Modulus
//  var x = 15;
//  var y = 10; 
//  var mod = x % y;
//  console.log(mod);





// Tricky Questions.
// var ope = "hassan" / 5;
// console.log(ope);

// var ope1 = 0.1 + 0.2;
// console.log(ope1.toFixed(4));

// var ope2 = 77 * "hassan";
// console.log(ope2);


//  So now the turn is Comparison Operator
//  3) Comparison Operator.
//  comparison operators woo hoote hen hamare pass jisko apas me compare kiya jai means appne dekha hooga 10 = 10 tww hum ye kiya kr rahe hen 10 ko 10 se compare krwa rahe hen ke kiyaa ye equal h agar equal h tww woo hume true return kare gay and agar true nh h tww woo hume false return kare ga ok and hamare pass truthy and falsy values hooti h in javascript. aur appko ye baat yaad rakhni h jab bh app comparison method use kroo gay woo appko sirf doo values hi return kare ga ya tww true and ye tww false bss iska ilawa kuch teesri value nh batai ga woo appko got it!

//  Truthy Values.               // Falsy Values.
//  100                                 0

//  3.14                               -0

//  -15                                " "

//  "Hello"                            null

//  "false"                          undefined

//  7 + 1 + 3.14                        NaN 
               

//  and ab agar mujhe kisi bh value ko compare krwana h?
//  tww me kiya krooga sawaal appse h?



// console.log("");  10 = 10







//  appka ans hooga sir kisi bh value ko compare krwana bhot easy h bss = tww lagana h lekin agar appka ans yehi tha tww app wrong h ab app bolein gay sir comparision tww asaa hi hoota h tww appki baat right h lekin abhi humne upper parha tha. Assignment operator value assign krne ke liye ju operator use hoota h hum usse khete hen assignment opeartor = tww ye wala tww assignment operator h isko hum comparison opeartor nh bol sakte tww ab kiya hooga chalo ab me ziada lmbi nh krta ho bata deeta ho appko.










//  jab hume kisi bh doo value ko apas me compare krwana hoo tww hum == dual equal two ka use kare gay.

//  asaa mene nh bola bhai asaa hamari javascript boltii h ok
//  tww ab hum example bh dekh leete hen


// EX:
// ALL IN ONE EXAMPLE IS THERE "==" , "!=" , "<" , ">" , "<=" , ">=" , "===" ,

// console.log(5 == 5);

// console.log(20 == 5);

// console.log("hassan" == 6);

// console.log(15 != 5);  

// console.log("25" == 5);

// console.log("2" == 2);   

// console.log("2" === 2);

// console.log("ali" === "Ali");

// console.log(50 < 30);

// console.log(30 > 50);

// console.log(30 > hassan);

// console.log(30 >= 30);

// console.log(10 >= 20);  
                                  
                                 
                                    







//  So now the turn is String Operator
//  3) String Operator.
// tww bhayo mene us din appko bataya tha ke do string ko apas me  joint krne ke liye hamare pass different ways hoote hen lekin aik tareeqa ye bh bataya tha ke concatenation kis tarah hooti h doo string ki means ke string ko hum apas me kis tarah joint kr sakte hen ? tww is (+) plus opeartor ka use kr ke. and second method h hamare pass concat ke method jisko hum parhe gay strings ke chapter me jab hum string ko cover kare gay! alright. 

//  See the example:
// var con = 'hello';
// var con1 = 'world';
// var ans = con + " " + con1;
// console.log(ans);

// var con  = 'how ';
// var con1 = 'are ';
// var con2 = 'you ';
// var con3 = 'guys';
// var ans  = con + con1 + con2 + con3; 
// console.log(ans);







// Logical Operators in Javascript!
// It is so important...


// so there are three Logical operators..
//  Logical AND (&&) ; Logical OR (||) ; Logical NOT (!) ;

// Logical AND (&&) operator: 
// Ab logical AND operator ye kheta h ke appne mujhe both conditions dii h aur agar appki dono condition sahi hooti h tww hi me appko true return krooga else me appko false return kr dooga!.
 

// tww ab hum phele Logical AND ko example ke saath dekh leete hen then aage hum Logical OR ki taraf jai gay ok!

// EXAMPLE:
// var a = 20;
// var b = 40;
// console.log(a > 0 && b > 0);

// var a = 20;
// var b = 40;
// //          false      true
// console.log(a < 0 && b > 0);


// Now the turn Logical OR (||) operator:
// Ab logical OR operator ye kheta h ke appne mujhe both conditions dii h aur agar appki aik condition bh sahi hooti h tww me appko true return kr dooga!. lekin agar appki dono conditions hi galat hoogi tww zahir si baat ha phr tww false hi return hooga..

// EXAMPLE:
// var x = 0;
// var y = 8;
// console.log(x < 5 || y > 15);


// Now the turn Logical NOT (!) operator:
// Logical NOT operator ju h bilkul hi alag h in dono operators se ye kiyaa krta h ke ju appki true value hooti h na isko ye false me convert kr dein ga and ju appki false value hoogi isko ye true me return kr dein gay. iska kaam h har cheez ko aulat krna h means appke friend circle me ya appke relative me koi tw asaa banda hooga jisko app khete kiya ho and woo krta kiya h samj rahe ho meri baat mtlb har kaam ulta kr deena. so ab isko example ki throw smajte hen!

// EXAMPLE:   

// var logicalNot = true;
// console.log(logicalNot);

// var logicalNot = false;
// console.log(!logicalNot);






// Now resolve the questions with the use of conditions!
// Q1: One guy and it's Age is greater then 18 so he derived the car or bike else he's not derived the car or bike.









// var age = 18;
// // Now this time using conditions if and else.
// if(age == 18){
//     console.log("you are eligible to drive the car or bike!");
// }else{
//     console.log("you are not eligible to drive the car or bike!");
// };

// var age = 12;
// if(age == 18){
//     console.log("you are eligible to drive the car or bike!");
// }else{
//     console.log("you are not eligible to drive the car or bike!");
// }



// Q2: Age is greater then 18 and derivedLicense is true so he derived the car or bike else he's not derived the car or bike.
// Now this question is completed fine and two conditions in this question.

// ab question ko samjey ke woo kiyaa khee raha h ke age tww uski greater then 18 hooni chahiye and drivingLicense bh true hoona chahiye.







// var age = 16;
// var drivingLicense = true;

// if (age >= 18 && drivingLicense) {
//     console.log("you re completely fine and you derived the truck! 😁");
// }
// else{
//     console.log("Beta abhi app chotte ho!😁");
// }






// NOW THE TURN OF TERNARY OPERATOR: 
// syntax: Condition ? expressionIfTrue : expresssionIfFalse

// Ternary opeartor helps you to more comfortable and code is one lined
// means ke hume condition me bh yee kaafi help krta h and hamara ju if and else ka ju syntax tha hum ternary opeartor ko use krte hue conditions bana sakte hen baaqi aagey hum if else statements and loop and everything aagey detail se parhe gay abhi sirf opeartors me appko bata raha ho ke kis tarah hum ye cheeze use kr sakte hen!


// EXAMPLE:

// var myAge = 19;

// var res = myAge > 18 ? "Yes you are 18+" : "you are minor";

// console.log(res)






