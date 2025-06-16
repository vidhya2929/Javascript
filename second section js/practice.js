// forEach() find() filter() map() reduce()
const arr = [
{
    name:'Alice',
    mark: 35,
    place:'Kannur'
},
{
    name: 'Bob',
    mark: 28,
    place:'palakkad'
},
{
    name: 'Catherine',
    mark: 44,
    place: 'Thrissur'
},
{
    name: 'Daniel',
    mark:23,
    place:'Kollam'
}
]; 
// var found = arr.forEach((item,index) =>{
// console.log(index);  // to get index
// console.log(item)
// });
// Find
// find whether the element exist or not . if it exist then it returns otherwise it becomes undefined 
var found = arr.find((item) => {
    return item.mark <30  ;  // if there is 2 answers then it returns the first that satisfies the condition
});
console.log(found);
  
