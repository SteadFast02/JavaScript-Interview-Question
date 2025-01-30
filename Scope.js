// var vs let vs const

// function name()
// {

// }

// Block Scope
// {

// }

var a1 = 1; // Global Scope
console.log("Value of a is:", a1);

{
  var a2 = 2; // Block Scope
}
console.log("Value of a2 is:", a2);

{
  let a3 = 3; //Block Scope
}
// console.log("Value of a3 is:", a3);  // throw Error

{
  let a4 = 4; //Block Scope
  console.log("Value of a4 is:", a4);
}

// Shadowing Concept (variable shadowing->should not cross boundry of scope)

function test() {
  let a = "Test1";
  var b = "Test2";
  var c = "Test3";
  //   let d = "Test4";
  if (true) {
    let a = "User1";
    var b = "User2";
    let c = "User3";
    var d = "User4";
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
  }
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}

test();

// Declaration without initialisation
var a5;
let a6;
// const a4;

console.log(a5);
console.log(a6);

// Declaration without Re-initialisation
var a7 = 7;
a7 = "A7";

let a8 = 8;
a8 = "A8";

const a9 = 9;
// a9 = "A9";

console.log(a7);
console.log(a8);
console.log(a9);

console.log("A10:", a10);
var a10 = 10; // hoisted in Global Scope
let a10 = 10; // hoisted in temporal dead zone (in seprate Script)

// Temporal dead zone is the term to describe the state where variable are in the scope but they are not yet declare