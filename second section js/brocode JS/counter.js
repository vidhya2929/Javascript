// COUNTER PROGRAM

const decreaseBtn = document.getElementById("decreaseBtn");        //these all are not reassigning so const is used
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countlabel = document.getElementById("countlabel");
let count = 0;             //we will reassign count(decrementing,incrementing)

increaseBtn.onclick = function(){
    count++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function (){
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}
z