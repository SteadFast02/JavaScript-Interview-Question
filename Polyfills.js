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
