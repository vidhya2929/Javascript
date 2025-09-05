'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

const OpenModal = function(){
console.log('Button Clicked');
modal.classList.remove('hidden'); //can pass multiple classes by using comma 
overlay.classList.remove('hidden');
}

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}


for(let i = 0; i< btnOpenModal.length;i++)
  btnOpenModal[i].addEventListener('click', OpenModal);


btnCloseModal.addEventListener('click', closeModal);

// closes the popup while clicking outside 
// here comes repetition of code 
// overlay.addEventListener('click', function() {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// })

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function(e) {  // 'e' stands for an event
  // when an event occur the js will call the function with event object as argument

  // console.log('A key was pressed');
  console.log(e.key);


  if(e.key === 'Escape'){
    if(!modal.classList.contains('hidden')){
      closeModal();
    }
  }
});

// 