
let arr = [5,8,1,2,6,14,12,16,18];

// let result = arr.filter((x)=> x > 12);
// console.log(result);

// custom filter function

function filterPolyfill(arr,cb){
    let filteredArray = [];
    for(let i=0;i<arr.length;i++){
        
        if(cb(arr[i])){
             filteredArray.push((arr[i]));
        }
       

    }
    return filteredArray;
}

function findGreaterThanTwelve(x){
    return x > 12;
}

console.log(filterPolyfill(arr,findGreaterThanTwelve));