// 2 types of exports
// 1)Named export -> export using name -;2 syntax
        // 1)add export keyword  before named class/function etc...


export const name = 'My Array Library';

export const options = {
    version: '1.1',
    author: 'code Malayalam'
}
export function addAll(arr = []){
    log('addAll');
    return arr.reduce((total, item) => total + item, 0)
}
export function findMax(arr = []){
    log('findMax');
    return Math.max(...arr);
}

export function log(val){
    console.log('INSIDE', val);
}
//2) use atlast 

const name = 'My Array Library';

const options = {
    version: '1.1',
    author: 'code '
}
function addAll(arr=[]){
    log('addAll');
    return arr.reduce((total, item) => total + item, 0)
}
function findMax(arr = []){
    log('findMax')
    return Math.max(...arr);
}
function log(val){
    console.log("INSIDE",val)
}


export{
    name as libraryName,            //rename using 'as'
    options,
    addAll,
    findMax
};  

export {test1} from './expsyn.js';  // it is imported and exported,here we can change name  or give * .

// 2)Default export -> that does'nt care name. it export as the name 'default'. 
// To make it default export add keyword export default.
// Only one default export is needed.
 
const nam = 'My Array Library';
  
const option = {
    version: '1.1',  
    author: 'codee'
}

function allAdd(arr = []){
    log('allAdd');
    return arr.reduce((total, item) => total + item, 0)
}
export default function findMax(arr =[]){
    log('findMax');
    return Math.max(...arr);
}

function log(val){
    console.log("INSIDE",val);
}