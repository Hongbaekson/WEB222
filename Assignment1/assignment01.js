/*********************************************************************************
 * WEB222 – Assignment 01
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Hongback Son Student ID: 133181164 Date: sep 13th 2018
 *
 ********************************************************************************/

// TASK #1 Student Info

var student_name = "Hongback Son";
var numcourses = 4;
var partjob = false;
var program = "CPA";

console.log(
  "My name is " +
    student_name +
    " and I'm in " +
    program +
    " program. " +
    "I'm taking " +
    numcourses +
    " course in this semester."
);

if (partjob == true) {
  var have = "have";
} else {
  var have = "don't have";
}

console.log(
  "My name is " +
    student_name +
    " and I'm in " +
    program +
    " program. " +
    "I'm taking " +
    numcourses +
    " course in this semester and I " +
    have +
    " a part-time job now."
);

//TASK #2 Birth and graduate year

var year = 2018;
var age = prompt("Please enter your age: ");

var birthyear = year - age; // This only counts the year, so it could generate wrong answer

console.log("You were born in the year of " + birthyear + ".");

var gradyear =
  Number(
    prompt("Enter the number of years you expect to study in the college: ")
  ) + year;

console.log(
  "You will graduate from Seneca college in the year of " + gradyear + "."
);

//TASK #3 Celsius and Fahrenheit temperatures

var cel = 23;
var ctof = cel * (9 / 5) + 32;

console.log(cel + "°C is " + ctof + "°F" + ".");

var fer = 34;
var ftoc = (fer - 32) * (5 / 9);

console.log(fer + "°F is " + ftoc + "°C" + ".");

//TASK #4 Even and odd numbers

for (i = 0; i < 11; i++) {
  if (i % 2 != 0) {
    console.log(i + " is odd.");
  }
}

//TASK #5 Larger or largest number

//Declaration Approach
function largerNum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
}

console.log("The larger number of 7 and 6 is " + largerNum(7, 6) + ".");

console.log("The larger number of 5 and 8 is " + largerNum(5, 8) + ".");

//Expression Approach
var greaterNum = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else return num2;
};

console.log("The greater number of 10 and 16 is " + greaterNum(10, 16) + ".");

console.log("The greater number of 100 and 98 is " + greaterNum(100, 98) + ".");

//TASK #6 Evaluator

function Evaluator() {
  var sum = 0;
  var avg = 0;

  for (i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    avg = sum / (i + 1);
  }

  if (avg >= 50) return true;
  else return false;
}

console.log(
  "Average greater than or equal to 50: " + Evaluator(50, 50, 50) + "."
);
console.log(
  "Average greater than or equal to 50: " + Evaluator(2, 70, 30) + "."
);

//TASK #7 Grader

var Grader = function (mark) {
  var grade;

  if (mark >= 90) grade = "A+";
  else if (mark >= 80) grade = "A";
  else if (mark >= 70) grade = "B";
  else if (mark >= 60) grade = "C";
  else if (mark >= 50) grade = "D";
  else grade = "F";

  return grade;
};

console.log("90 is " + Grader(90) + ".");
console.log("48 is " + Grader(48) + ".");
console.log("65 is " + Grader(65) + ".");

//TASK #8 ShowMultiples

function showMultiples(num, numMultiples) {
  for (i = 1; i <= numMultiples; i++) {
    console.log(num + " x " + i + " = " + num * i);
  }
}

console.log("The 4 multiples of 5 are as below.");
showMultiples(5, 4);

console.log("The 10 multiples of 2 are as below.");
showMultiples(2, 10);

console.log("The 3 multiples of 21 are as below.");
showMultiples(21, 3);
