'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

///////////////////////////////////////
// Modal window

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//  <a class="nav__link nav__link--btn btn--show-modal" href="#" it is a link with href = "#" , that will make the page jump to the top.

// Implementing Smooth Scrolling

btnScrollTo.addEventListener('click', function(e){
  // get the coordinates of the element that we want to scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect()); //getBoundingClientRect is relative to the visible viewport

  // current scrolling position 
  console.log(`Current scroll (X/Y)`, window.pageXOffset,pageYOffset);
  // Use scrollX and scrollY insted of it.

// y coordinate is the distance between current position of the viewport and the top of the page

// height and width of the viewport
console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth);

// // scrolling (Current Position + Current Scroll)  => scrollTo (global function available on window object)
// window.scrollTo(s1coords.left + window.scrollX, s1coords.top + window.scrollY)  //1)left position 2) top position and also add the current scroll position

// window.scrollTo({
//   left: s1coords.left + window.scrollX,
//   top: s1coords.top + window.scrollY,
//   behavior:"smooth",
// })

// MODERN WAY
section1.scrollIntoView({behavior: "smooth"})
// here section1 is where we want to scroll to
})

// mouseenter event

const h1 = document.querySelector('h1');

// h1.addEventListener('mouseenter', function(e){   //triggers whenever a mouse enter certain element
//   alert(`addEventListener: Great! You are reading the heading :D`);
// });

// // Another way of attaching an eventListener to an element
// //  onevent property direcly on element
// h1.onmouseenter = function(e){
//   alert('onmouseenter: Great! You are reading the heaing :D')
// }               //OLD METHOD

// multiple event listeners to the same event
// can remove addeventListener if we don't need  => steps -;
// 1) we need to export the function into a named function


const alertH1 = function(e) {
  alert('addEventlistener: Great! You are reading the heading');
  // h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter',alertH1);   //Only once
// To remove an addEventListener


// Also set setTimeout
setTimeout(() => h1.removeEventListener('mouseenter',alertH1),3000);