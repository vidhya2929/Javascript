//converting to promise
/* 1)implementing the code of myFetch
2) arg is url in the myFetch so take url as argument and returns a pr object 
3) promise has a constructor which takes a function as argument therefore put whichever code we wanted (ajax code) inside that function
*/

function myFetch(url){
    return new Promise((res, rej) =>{
        $.ajax({
            type: "GET",
            url: url, 
            success: function(msg){
                res(msg);
            },
            error: function(xhr, statusText){
                rej(statusText);
            }, 
        });
    });   
}
// Atlast tell to promise that it has been resolved or rejected -> promise object use 2 args in the callback called 'res'(for resolved) and 'rej'(for rejection)