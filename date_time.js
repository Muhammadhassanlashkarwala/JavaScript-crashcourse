//* ==================================
//* Date & Time Objects in JavaScript
//* ============================

//? Date() constructor: The Date() constructor creates Date objects. When called as a function, it returns a string representing the current time.

//? Creating a Date Object:
// You can create a new Date Object using the  new keyword. It can be done in several ways: 
//! todo There are 9 ways to create a new date object:

// Syntax
// new Date()
// new Date(date String)


// new Date(year, month)
// new Date(year, month, day)
// new Date(year, month, day, hours)
// new Date(year, month, day, hours, minutes)
// new Date(year, month, day, hours, minutes, seconds)
// new Date(year, month, day, hours, minutes, seconds, ms)

// new Date(milliseconds)

//? Current date & time
//? new Date(): Creates a Date object representing the current date & time.

// const currentDate = new Date();
// console.log(currentDate);    

//! todo this is the ISO 8601 format, which is a standard for representing dates & times In this format, tha date & time are represented together, seperated by the letter "T". The "Z" at the end indicates that the time is in UTC ( Coordinated Universal Time ).

// But the same when you run on browser it will return more human-readable format   

//? new Date(dateString): Creates a Date object based on the provided date string.

// const dateString = "2025-11-01T10:04:54.879Z";  
// const dateFromString = new Date(dateString)
// console.log(dateFromString);


//? new Date(year, month): Creates a Date object with the specified year & month.
// const date1 = new Date(2025, 12);
// console.log(date1);

//? new Date(year, month, day): Creates a Date object with the specified year, month & day.
// const date2 = new Date(2025, 10, 5);
// console.log(date2);

//? new Date(year, month, day, hours): Creates a Date object with the specified year, month, day & hours.
// const date3 = new Date(2025, 10, 5, 11);
// console.log(date3);  

//? new Date(year, month, day, hours, minutes): Creates a Date object with the specified year, month, day, hours & minutes.
// const date4 = new Date(2025, 10, 5, 11, 30);
// console.log(date4);  

//? new Date(year, month, day, hours, minutes, seconds): Creates a Date object with the specified year, month, day, hours, minutes & seconds.
// const date5 = new Date(2025, 10, 5, 11, 30, 8);
// console.log(date5);  

//? new Date(year, month, day, hours, minutes, seconds, milliseconds): Creates a Date object with the specified year, month, day, hours, minutes, seconds & milliseconds.
// const date6 = new Date(2025, 10, 5, 11, 30, 8, 280);
// console.log(date6);  

//? new Date(milliseconds): Creates a Date object representing the number of milliseconds since the Unix epoch (January 1, 1970, 00:00:00 UTC).
// const curMilliSeconds = new Date().getTime();
// const milliSeconds = 1543789765307;  // Example milliseconds
// const dateFromMilliSeconds = new Date(milliseconds);
// console.log(dateFromMilliSeconds);

//! todo Note:
//? JavaScript counts months from 0 to 11:
//? January = 0, December = 11;

//? JavaScript Stores Dates as Milliseconds: JavaScript stores dates as number of milliseconds since January 01, 1970.

//* Date String Format: If the dateString is in a recognizable format, the Date object will be created accordingly.
//? new Date(date string) creates a date object from a date string. 
// const date1 = new Date("2025-10-30");     // Year-Month-Day
// const date2 = new Date("October 30, 2025");     // Month-Day-Year
// console.log(date1);
// console.log(date2);

//* ================================================
//* JavaScript Get Date Methods / Getting Components:
//* ================================================

// You can get various components of a date using the methods of the Date object:
// const currentDate = new Date();
// In a date object, the time is static.

// console.log(currentDate);    

// const year = currentDate.getFullYear();

// const month = currentDate.getMonth();    // 0-based index
// const date = currentDate.getDate();
// const day = currentDate.getDay();
// console.log(day);
// In JavaScript,the first day of the week (day 0) is Sunday.
// day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday) 

//* ================================================
//* JavaScript Set Date Methods / Setting Components:
//* ================================================

// const date = new Date();
// console.log(date);

//? setFullYear(yearValue[, monthValue[, dayValue]]): Sets the full year for a specified date according to local time.

// date.setFullYear(2030);
// console.log(date);  // Date object with the year set to 2025

//? setMonth(monthValue[, dayValue]): Sets the month for a specified date accordingly to local time.

// date.setMonth(5);    // months = 0-based
// console.log(date);    // Date object with the month set to June

//? setDate(dayValue): Sets the day of the month for a specified date accordingly to local time.

// date.setDate(18);
// console.log(date); // Date object with the day of the month set to 15.


//* ================================================
//* JavaScript Get Time Methods / Getting Components:
//* ================================================

// const currentTime = new Date();

// const hours = currentTime.getHours();  //15
// const minutes = currentTime.getMinutes();
// const seconds = currentTime.getSeconds();
// const time = currentTime.getTime();
// console.log(minutes);

//* ================================================
//* JavaScript Set Time Methods / Getting Components:
//* ================================================

// const date = new Date()
// console.log(date);

//? setHours(hourValue[, minuteValue[, secondValue[, millisecondValue]]]): Sets the hours for a specified date according to local time.
// date.setHours(10);
// console.log(date);   // Date object with the hours set to 10

//? setMinutes(minuteValue[, secondValue[, millisecondValue]]): Sets the minutes for a specified date according to local time.
// date.setMinutes(40);
// console.log(date);   // Date object with the minutes set to 30

//? setSeconds(secondValue[, millisecondValue]): Sets the seconds for a specified date according to local time.
// date.setSeconds(35);
// console.log(date);  // Date object with the seconds set to 35

//? setMillieconds(millisecondValue): Sets the milliseconds for a specified date according to local time.
// date.setMilliseconds(700);
// console.log(date);  // Date object with the milliseconds set to 600

//? setTime(timeValue): Sets the date object to the time represented by a number of milliseconds since January 1, 1970, 00:00:00 UTC.

// date.setTime(1632090690883)
// console.log(date);    //Date object representing the specified time.


//* =================================

// A few useful methods of the Date object in JavaScript

//* =================================

//? 1:toLocaleString(): Returns a string representing the date and time portion of a date object the current locale's conventions.

// const date = new Date();
// const localString = date.toLocaleString();
// console.log(localString);   // Example output: "11/12/2025, 5:30:00 PM" (depending on the locale);

//? 2:toLocaleDateString(): Returns a string representing the date portion of a date object using the current locale's conventions.
    
// const date = new Date();
// const localString = date.toLocaleDateString();
// console.log(localString);   // Example output: "11/12/2025" (depending on the locale);

//? 3:toLocaleTimeString(): Returns a string representing the time portion of a date object using the current locale's conventions.

// const date = new Date();
// const localString = date.toLocaleTimeString();
// console.log(localString);   // Example output: "05:30:00" (depending on the locale);

//? 4:parse(): Parses a string representation of a date and returns the number of a milliseconds since January 1, 1970, 00:00:00 UTC.
// const dateString = "2025-11-13T17:30:00Z";
// const parsedDate = Date.parse(dateString);
// console.log(parsedDate);   //Example output: 17032540690883 (milliseconds)
