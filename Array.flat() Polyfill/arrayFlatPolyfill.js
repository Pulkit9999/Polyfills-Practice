
let arr = [ 1,2,[3,4, [5,6 ,[7,8,9,[10]]]]];
// Method 1
// console.log(arr.flat().flat().flat().flat());
// Method 2
// console.log(arr.flat(4));
// Method 3
//console.log(arr.toString().split(',').map(Number))

// Method 4 (Recommended) ----> custom flat() function

function flatten(arr){

    let result = [];

    arr.forEach(function (element){

        if(Array.isArray(element)){
            result.push(...flatten(element))
        }
        else{
            result.push(element)
        }
    })


    return result;
}

console.log(flatten(arr));

