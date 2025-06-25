const arey = [5, 1, 3, 2, 6];
// Filter Function is used to filter
// here we take this array as an input and finding an array which has only the values which are filtered based on some logic

// filter odd values
function isOdd(x){
    return x % 2;
}
const output = arey.filter(isOdd)
console.log(output);
// filter even values
function isEven(x){
    return x % 2 ===0;
}
const op = arey.filter(isEven)
console.log(op);
//  filter numbers greater than 4
function isGreater(x){
    return x>4;
}
const oop = arey.filter(isGreater)
console.log(oop);
// OR 
const four = arey.filter(function isGreater(x){
    return x>4;
});
console.log(four);
// OR
const outputt = arr.filter((x) =>  x > 4);
console.log(outputt)
// reduce()
const arr = [5,1,3,2,6];

//  sum or max


function findSum (arr){
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));
const ott = arr.reduce(function(acc,curr){   // acc=accumulator, curr=current

});
