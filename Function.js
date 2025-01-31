// Function JavaScript

// Q1 What is Function declaration

function square1(params) {
  return params * params;
}

// Q2 What is Function Expression
// Having Anonymous function without name Anonymous function can be assaign to variable or can we pass as callback

const square2 = function (num) {
  return num * 2;
};

// Q3 What are first class function?

function square3(params) {
  return params * params;
}

function displaySquare(fn) {
  console.log("Square is ", fn(5));
}

displaySquare(square3);

// Q4- What is IIFE (Immediate Invoked function expression)?
(function square4(params) {
  console.log(params * params);
})(4);

// closure -> A closure allows an inner function to access variables from an outer function, even after the outer function has finished execution.
(function square5(x) {
  return (function square6(y) {
    console.log(x);
    console.log(y);
  })(5);
})(6);

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i);
//   }, i * 1000);
// }

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, i * 1000);
}

var x = 21;
function f1() {
  console.log("value of x is:", x); // print undefined
  var x = 100;
}

// f1();

// Rest operator and spread operator should be last one
function f2(num1, num2, ...nums) {
  console.log(num1, num2, nums);
}

var arr = [1, 2, 3, 4, 5];
f2(...arr);

// Callback function -> A callback function is a function that is passed as an argument to another function and is executed later, usually after some operation is completed. It helps in handling asynchronous operations, like API requests, reading files, or event handling.

function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Achal", sayGoodbye);

// Arrow Function
let val1 = 10;
let val2 = 20;

const add = (val1, val2) => {
  return val1 + val2;
};

// this keyword

let user = {
  username: "Hello",
  rc1: () => {
    console.log("Subscribe to:", this.username); // Pointing to global object
  },
  rc2() {
    console.log("Subscribe to:", this.username); // pointinf to username object
  },
};

user.rc1();
user.rc2();
