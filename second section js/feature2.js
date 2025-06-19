let isGreen = true;
let handle = null;
export function changeBg(){
    if(!handle){
        handle = setInterval(()=>{
            document.body.style.background = isGreen ? 'green' : 'blue';
            isGreen = !isGreen;
        }, 500);
    }
}
export function stopChangingBg(){
    if(handle){
        clearInterval(handle);
        handle = null;
        document.body.style.background = 'none';
    }
}

//basically we don't need to use some features continously so that features should only be loaded when it trigger so we use dynamic import
// make it dynamic import 
//first we need to plan when did we want to import it -; here we want to import it when we click the feature2

// doubt