// const cache = {
//     name: 'Code Malayalam'
// };
function getJson(url){
    // if(cache){
        // return Promise.resolve(cache);      It is a static function so we call it using class name
        // promise.reject()             it reject the promise
    //     return convertToPromise(cache);
    // }

    return fetch(url)
    .then((data)=>{
        return data.json();      //it returns promise
    })
}
// here cache fn is not working so we want to convert cache object into promise
//  1)By writing a function


/*         same as Promise.resolve()              */
function convertToPromise(data){
    return new Promise((res, rej)=>{
        res(data);
    });
} 