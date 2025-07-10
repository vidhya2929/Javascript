// --------------------Example 3 <li> -------------------
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");  //h1 is referencing from newH1



// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent  = "I like pizza!";

newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";



//  STEP 3 APPEND ELEMENT TO DOM

// document.body.append(newH1);

// when we append an element to a parent this new element is the last child we can prepend if we like to be the first child

// document.body.prepend(newH1);   // here body is the parent
document.getElementById("box1").prepend(newH1);


// REMOVE HTML ELEMENT


