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
const outputt = arey.filter((x) =>  x > 4);
console.log(outputt)
// reduce()
const arr = [5,1,3,2,6];

//  sum or max


function findSum (arey){
    let sum = 0;
    for(let i = 0; i<arey.length; i++){
        sum = sum + arey[i];
    }
    return sum;                                       // here curr = arr[i], and acc = sum
}
console.log(findSum(arr));
const ott = arey.reduce(function(acc,curr){          //// acc=accumulator, curr=current
      acc = acc + curr;
      return acc;
}, 0); 
console.log(ott);
//here 0 is the initialsing value
// reduce function iterates over each and every elements of the array
// when we are running this function, the curr => represents the values of array
// the accumulator accumulates the result value.
// here the reduce function takes 2 arguments, first one is a function and the second one is any initial value which we want to pass   


// max among array
const ar =[5,1,3,2,6];
function findMax(ar){
    let max = 0;
    for(let i = 0;i<ar.length;i++){
        if(arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(arr));

const ouput = ar.reduce(function(max,curr){
    if(curr > max){
        max = curr;
    }
    return max;
}, 0)
console.log(ouput);

const users = [
    {firstName:"akshay", lastName:"saini",age:26},
    {firstName:"Riya", lastName:"Paul", age:75},
    {firstName:"elon", lastName:"musk", age:50},             //Array of objects
    {firstName:"deepika", lastName:"padukone",age:26},
];//assuming this is coming from some API(list of users)

// List of full names
// O/p => ["akshay saini",riya paul,elon musk,deepika padukone]

//map(to obtain a list of items)
const oup = users.map(x => x.firstName +" "+ x.lastName);            //the function inside the map will run through each of the objects
console.log(oup);

// age { 26: 1, 75: 1, 50:1 } how many people are of particular age
// Using reduce because we want one value inside it (we don't need a list of values)
 
const outpt = users.reduce(function(acc,curr){

    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1
    }
    return acc;
},{}) 
console.log(outpt);
// initial value should be empty object
//    {firstName:"akshay", lastName:"saini",age:26} <= current will be poniting initially to this


// first name of all the people whose age is less than 30
// filter

// o/p =>"akshay","deepika"
function isThirty(user){
    return user.age< 30;
}
 const okt = users.filter(isThirty)
 console.log(okt)
// filter & map
 const opo = users.filter((x)=> x.age < 30).map((x) => x.firstName);     //we can chain map function in reduce  
 // i.e,  after we filtering the array we can run a map over it
 console.log(opo);

 const okk = users.reduce(function(acc,curr){
    if(curr.age<30){
        acc.push(curr.firstName);
    }
    return (acc)
 },[]);
 console.log(okk);