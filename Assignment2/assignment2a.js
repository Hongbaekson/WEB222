/*********************************************************************************
 * WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Hongback Son Student ID: 133181164 Date: sep 27th 2018
 *
 ********************************************************************************/

/*****************************
 * Step 1
 *****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************
 * Step 2
 *****************************/
function capFirstLetter(a) {
  var string1, string2;
  string1 = a.substr(0, 1).toUpperCase();
  string2 = a.substring(1, a.length + 1).toLowerCase();
  a = string1 + string2;

  return a;
}

e1 = prompt("Enter your first name: ", "Hongback");
e1 = capFirstLetter(e1);

/*****************************
 * Step 3
 *****************************/
var getAge = function (a) {
  var thisyear = new Date().getFullYear();

  a = thisyear - a;

  return a;
};

e2 = prompt("Enter the year you were born: ", 1990);

e2 = getAge(e2);

/*****************************
 * Step 4
 *****************************/

e3 = prompt("Enter the name of college you are attending: ", "Seneca College");

var myarray = e3.split(" ");

var college = "";

for (i = 0; i < myarray.length; i++) {
  college += capFirstLetter(myarray[i]) + " ";
}

e3 = college;

/*****************************
 * Step 5
 *****************************/

e4 = prompt(
  "Enter your 5 favourite sports(in lower case seperated by comma): ",
  "hockey,football,basketball,tennis,golf"
);
e4 = e4.replace(/football/, "soccer");
e4 = e4.split(",");
e5 = prompt("Enter one more sports you like: ", "formula 1");
e4.push(e5);

/*****************************
 * Step 6
 *****************************/

for (i = 0; i < e4.length; i++) {
  e4[i] = e4[i].toUpperCase();
}

e4 = e4.sort();

/*****************************
 * Step 7
 *****************************/

var currentdate = {
  year: new Date().getFullYear(),
  month: new Date().getMonth() + 1,
  day: new Date().getDate(),
  hour: new Date().getHours(),
  min: new Date().getMinutes(),
  sec: new Date().getSeconds(),
};

e6 = currentdate;

function getDateString(a) {
  if (a.month < 10) {
    a.month = "0" + a.month;
  }

  if (a.day < 10) {
    a.day = "0" + a.day;
  }

  a = a.year + "-" + a.month + "-" + a.day;

  return a;
}

e7 = getDateString(e6);

/*****************************
 * Step 8
 *****************************/

str =
  "User info:\n\n" +
  "name (e1): " +
  e1 +
  "\n" +
  "age (e2): " +
  e2 +
  "\n" +
  "school (e3): " +
  e3 +
  "\n" +
  "favorite sprots (e4): \n\t" +
  e4[0] +
  "\n\t" +
  e4[1] +
  "\n\t" +
  e4[2] +
  "\n\t" +
  e4[3] +
  "\n\t" +
  e4[4] +
  "\n\t" +
  e4[5] +
  "\ncurrent date (e7): " +
  e7;

console.log(str);
