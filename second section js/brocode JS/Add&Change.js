// --------------------Example 3 <li> -------------------
// Appending element to the DOM in three steps

// STEP 1 CREATE THE ELEMENT

// const newH1 = document.createElement("h1");  //h1 is referencing from newH1
const newListItem = document.createElement("li");


// STEP 2 ADD ATTRIBUTES/PROPERTIES

newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";


// newH1.textContent  = "I like pizza!";

// newH1.id = "myH1";
// newH1.style.color = "tomato";
// newH1.style.textAlign = "center";
// newH1.textContent = "I like pizza"


//  STEP 3 APPEND ELEMENT TO DOM

// document.getElementById("fruits").append(newListItem);
document.getElementById("fruits").prepend(newListItem);
const orange = document.getElementById("Orange");
document.getElementById("fruits").insertBefore(newListItem,orange);

// if it has no id then we use querySelectorAll()
const boxes  = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListItem,listItem[0]);





// document.body.append(newH1);

// when we append an element to a parent this new element is the last child we can prepend if we like to be the first child

// document.body.prepend(newH1);   // (the item is at the beginning...)here body is the parent
// document.getElementById("box4").prepend(newH1);
// document.getElementById("box1").append(newH1); //when we append to box 1 it is the last child of box 1
// document.getElementById("box1").prepend(newH1);          //Now it becomes the first child ,the paragra[gh comes after that]
// how to sandwich the content between box1 and box2
// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1,box2);//(newElement,currentElement)

//const box3 = document.getElementById("box3");
// document.body.insertBefore(newH1,box3) ;

// If the elements don't have id then we use querySelectorAll() by using that we can select everuthing with thw same class name

// const boxes = document.querySelectorAll(".box");
// document.body.insertBefore(newH1, boxes[3]);


// REMOVE HTML ELEMENT

document.getElementById("fruits").removeChild(newListItem);

// document.body.removeChild(newH1)
// document.getElementById("box1").removeChild(newH1);

