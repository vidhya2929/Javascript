
// we will treat this function as a value
const nums = [1,2,3,4,5.6];
const squa = nums.map(function(element){
    return Math.pow(element, 2);
});
console.log(squa);
//