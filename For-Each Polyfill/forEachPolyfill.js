let arr = [1, 2, 3, 4, 5];

// arr.forEach((item, index) => {
//   arr[index] = item * 2;
// });
// console.log(arr);

// custom forEach() method

function forEachPolyfill(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = cb(arr[i]);
  }
  return arr;
}

function double(x) {
  return x * x;
}
console.log(forEachPolyfill(arr, double));
