//

// import { changeBg, stopChangingBg } from "./feature2.js";
import { createButton } from "./widget.js";
createButton('Feature 1',() => {
    alert("Feature 1");
});
createButton('Feature 2',() => {


    import('./feature2.js')  //import function returns us a promise so we need to resolve it
        .then((obj) => {
        createButton('start Disco',obj.changeBg);
        createButton('stop Disco',obj.stopChangingBg)
    });
}); 
//setInterval() is used to call the callback in a particular interval
// disadvantage of having more unused features which is loaded 
// 1) Delayed Page Load
// 2) Unnecessary Server Load
// The solution for this is that it is loaded when the needed feature(feature 2 here) is clicked 
// It is not possible with static imports because 
//it should be on the top of the page and it shold not be inside the click
// for all this we use dynamic import
// here as it returns promise we can use async...await

import {createButton} from "./widget.js";

createButton('Feature 1', () => {
    alert('feature 1');
});
createButton('Feature 2',async () =>{
    const obj = await import('./feature2.js');
    createButton('Start Disco',obj.changeBg);
    createButton('Stop Disco', obj.stopChangingBg);
}); 
