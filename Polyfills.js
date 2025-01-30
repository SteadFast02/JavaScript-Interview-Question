// map (), filter and reduce

const nums = [1, 2, 3, 4, 5];
const usingMap = nums.map((nums, index, arr) => {
  return nums * 3;
});
console.log(nums);
console.log("Map:", usingMap);

const usingFilter = nums.filter((nums, index, arr) => {
  return nums < 4;
});
console.log("Filter:", usingFilter);

// if there is no initial value, it takes first element of array as value for prev
const usingReduce = nums.reduce((prev, curr, index, arr) => {
  return prev + curr;
}, 0);
console.log("Reducer:", usingReduce);

// Custom/Polyfill Map Function
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const CustomMap = nums.myMap((nums, i, arr) => {
  return nums * 10;
});

console.log("CustomMap:", CustomMap);

// Custom/Polyfill Filter Function
Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const CustomFilter = nums.myFilter((nums, i, arr) => {
  return nums > 3;
});

console.log("CustomFilter:", CustomFilter);

// Custom/Polyfill Reducer Function
Array.prototype.myReduce = function (cb, initialValue) {
  var prev = initialValue;
  for (let i = 0; i < this.length; i++) {
    prev = prev ? cb(prev, this[i], i, this) : this[i];
  }
  return prev;
};

const CustomReduce = nums.myReduce((prev, curr, i, arr) => {
  return prev + curr;
});

console.log("CustomReduce:", CustomReduce);

// map vs forEach
const arr = [1, 2, 3, 4, 5, 6];

const mapResult = arr.map((ar) => {
  return ar + 2;
});

const forEachResult = arr.forEach((arr, i) => {
  arr[i] = arr + 3;
});

console.log("Result:", mapResult, forEachResult, arr);

// Coding Question
// 1 Return only name of students in capital

let students = [
  { name: "Achal", rollNumber: 31, marks: 90 },
  { name: "Jenny", rollNumber: 32, marks: 55 },
  { name: "Bob", rollNumber: 33, marks: 35 },
  { name: "Harsh", rollNumber: 34, marks: 70 },
];

const name = students.map((items, i) => {
  return items.name.toLocaleUpperCase();
});

console.log("Name:", name);

// 2 Return only details of Those Student who scored more than 60 marks

const ScoreMoreThan80 = students.filter((items, i) => {
  return items.marks >= 60;
});

console.log("ScoreMoreThan:", ScoreMoreThan80);

// Sum of marks of all student

const sum = students.reduce((prev, curr, i, arr) => {
  return prev + curr.marks;
}, 0);

console.log("Total Sum:", sum);

// 3 Return only names of students who scored more than 60

const data1 = students
  .filter((items, i) => {
    return items.marks > 60;
  })
  .map((items, i) => {
    return items.name;
  });

console.log("Return Data:", data1);

// Return total marks for student with marks,greater than 60 after 20 marks have been added to scored less than 60

const data2 = students
  .map((items) => {
    if (items.marks < 60) {
      items.marks = items.marks + 20;
    }
    return items;
  })
  .filter((items) => {
    return items.marks > 60;
  })
  .reduce((prev, curr, index, arr) => {
    return prev + curr.marks;
  }, 0);

console.log("Data2:", data2);
