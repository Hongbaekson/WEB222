/*********************************************************************************
 * WEB222 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy. No part of
 * this assignment has been copied manually or electronically from any other source (including web sites)
 * or distributed to other students.
 *
 * Name: Hongback Son Student ID: 133181164 Date: Oct 6th 2018
 *
 ********************************************************************************/

// an array of course objects
var courses = [
  {
    code: "APC100",
    name: "Applied Professional Communications",
    hours: 3,
    url: "http://www.senecacollege.ca/",
  },
  {
    code: "IPC144",
    name: "Introduction to Programming Using C",
    hours: 4,
    url: "https://scs.senecac.on.ca/~ipc144/",
  },
  {
    code: "ULI101",
    name: "Introduction to Unix/Linux and the Internet",
    hours: 4,
    url: "https://cs.senecac.on.ca/~fac/uli101/live/",
  },
  {
    code: "IOS110",
    name: "Introduction to Operating Systems Using Windows",
    hours: 4,
    url: "https://cs.senecac.on.ca/~fac/ios110",
  },
  { code: "EAC150", name: "College English", hours: 3, url: null },
];

// prototype object for creating student objects
var student = {
  name: "",
  dob: new Date(),
  sid: "",
  program: "",
  gpa: 4.0,
  toString: function () {
    return (
      "Student info for " +
      this.name +
      ": born on " +
      this.dob.toLocaleDateString() +
      ", student id " +
      this.sid +
      ", progrem " +
      this.program +
      ", current GPA " +
      this.gpa
    );
  },
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

var removed = courses.slice(4);
courses.pop();
console.log(
  "*** Task 1 ***\n\nCourse EAC150 was deleted from the array (courses)\n"
);

console.log("Adding new course objects into the array (courses)\n");
var newcourses = [
  {
    code: "IBC233",
    name: "iSeries Business Computing",
    hours: 4,
    url: "https://cs.senecac.on.ca/~ibc233/",
  },
  {
    code: "OOP244",
    name: "Introduction to Object Oriented Programming",
    hours: 4,
    url: "https://cs.senecac.on.ca/~oop244/",
  },
  {
    code: "WEB222",
    name: "Web Programming Principles",
    hours: 4,
    url: "https://cs.senecac.on.ca/~web222/",
  },
  {
    code: "DBS201",
    name: "Introduction to Database Design and SQL",
    hours: 4,
    url: "https://cs.senecac.on.ca/~dbs201/",
  },
];

courses = courses.concat(newcourses);
console.log("\nCourse objects in the array (courses):\n");

for (i = 0; i < courses.length; i++) {
  console.log(
    '"' +
      courses[i].code +
      ", " +
      courses[i].name +
      ", " +
      courses[i].hours +
      " hours/week, " +
      "website: " +
      courses[i].url +
      '"\n'
  );
}

// task 2

var student1 = {
  name: "BTS",
  dob: new Date(1990, 8, 10),
  sid: "010454101",
  program: "CPA",
  gpa: 4,
  toString: function () {
    return (
      "Student info for " +
      this.name +
      ": born on " +
      this.dob.toLocaleDateString() +
      ", student id " +
      this.sid +
      ", progrem " +
      this.program +
      ", current GPA " +
      this.gpa
    );
  },
};
var student2 = {
  name: "Joey",
  dob: new Date(1992, 0, 17),
  sid: "012345678",
  program: "CPD",
  gpa: 3.5,
  toString: function () {
    return (
      "Student info for " +
      this.name +
      ": born on " +
      this.dob.toLocaleDateString() +
      ", student id " +
      this.sid +
      ", progrem " +
      this.program +
      ", current GPA " +
      this.gpa
    );
  },
};
var student3 = {
  name: "Jimin",
  dob: new Date(1994, 2, 1),
  sid: "0987654321",
  program: "CAN",
  gpa: 3,
  toString: function () {
    return (
      "Student info for " +
      this.name +
      ": born on " +
      this.dob.toLocaleDateString() +
      ", student id " +
      this.sid +
      ", progrem " +
      this.program +
      ", current GPA " +
      this.gpa
    );
  },
};
var student4 = {
  name: "V",
  dob: new Date(1992, 0, 12),
  sid: "123456789",
  program: "CAN",
  gpa: 4,
  toString: function () {
    return (
      "Student info for " +
      this.name +
      ": born on " +
      this.dob.toLocaleDateString() +
      ", student id " +
      this.sid +
      ", progrem " +
      this.program +
      ", current GPA " +
      this.gpa
    );
  },
};

var students = [student1, student2, student3, student4];

console.log("\n*** Task 2 ***\n\nStudent objects in the array (students): \n");

function toString(item, index) {
  console.log(index + ": " + item);
}

students.forEach(toString);
