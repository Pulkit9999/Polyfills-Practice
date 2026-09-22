let myArray = [1, 2, 3, 4, 5];

// let output = myArray.map((x)=>x*x);
// console.log(output);

// custom map function

function mapPolyfill(arr, cb) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultArray.push(cb(arr[i]));
  }
  return resultArray;
}

function square(x) {
  return x * x;
}
console.log(myArray);
console.log(mapPolyfill(myArray, square));
