let arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((acc, current) => {
//   acc += current;
//   return acc;
// }, 0);

// console.log(arr);
// console.log(result);

// custom reduce() function

function reducePolyfill(arr, cb) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}

function sum(acc, curr) {
  return acc + curr;
}
console.log(reducePolyfill(arr, sum));
