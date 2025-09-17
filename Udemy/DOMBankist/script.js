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

// Smooth scrolling to the corresponding section clicking on the elements of navbar (PAGE NAVIGATION)
// Without Event Delegtion


// document.querySelectorAll('.nav__link').forEach(function(el){  //here querySelectorAll returns a nodelist and forEach element in the nodelist add eventlistener.
//   el.addEventListener('click', function(e){
//     e.preventDefault();  //no longer scroll to the page
//     // Smooth scrolling
//     const id = this.getAttribute('href'); //getAttribute because don't want absolute url
//     console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   })
// })

// EVENT DELEGATION - 2 steps
// 1)Add the event listener to a common parent element of all the elements we are interested in
// 2) Determine what element Orginated the event
document.querySelector('.nav__links').addEventListener('click', function(e) {
   e.preventDefault();
  // Matching Startegy
  if(e.target.classList.contains('nav__link')){
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: 'smooth'
    });
  }
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

// attaching event handlers to the navigation link(features in bankist) and also all of it's prarent element.





// // rgb(255,255,255);
// const randomInt = (min,max) => Math.floor(Math.random() *(max-min+1) + min);
// const randomColor = () => `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
// console.log(randomColor(0,255));

// // nav_link and it's parent
// document.querySelector('.nav__link').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor()
//   console.log('LINK', e.target, e.currentTarget);  //e.target is where the first click happened, e.currentTarget where the handler is attached to
//   //  Stop Propagation   => call stop propagation on the event
//   // e.stopPropagation()
//   // below 2 prents will not work, i.e, the event never arrived at thoe elements
// });
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor()
//    console.log('CONTAINER', e.target, e.currentTarget);
//    console.log(e.currentTarget === this);
  
// });
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor()
//    console.log('NAV', e.target, e.currentTarget);
//   //  Here all three elements the target will be same.That is where the first click happened (appears in all because it has same event)
// }, false);  





// To catch the events during the capturing phase, define 3rd parameter in the addEventListener.
// here if we set the capturing parameter to 'true', the event handler no longer listen to bubbling phase instead listen to capturing events
// Now NAV become first as it listens to Capturing phase instead of bubbling phase.

// In an event handler the 'this' points on which the event handler is attached
// The event only bubbles up to its parent element

// event originates from the ('nav__link) and then bubbles up to the parent elements


// // DOM TRAVERSING
// // const h1 = document.querySelector('h1');
// // Going downwards : selecting child elements

// console.log(h1.querySelectorAll('.highlight')); //querySelector also works on elements
// // no matter how deep the children 
// console.log(h1.childNodes); //almost everything 
// console.log(h1.children); //only the direct children
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'red';

// // Going Upwards : Parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // Used for event delegation.
// h1.closest('.header').style.background = 'var( --gradient-secondary)';  //It selects the closest header to h1 element
// // querySelector finds the children no matter how far up in the OM Tree.
// //  closest() finds the parent no matter how far up in the DOM tree.

// // Going sideways : siblings
// // In Js, we can only access direct siblings.(only oprevious and the next one)

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// // To get all children => move up to parent and read all children from there.
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function (el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })

// PASSING ARGUMENTS TO EVENT HANDLERS
// Menu Fade Animation
// const nav = document.querySelector('.nav');

// REPEAT

// nav.addEventListener('mouseover', function(e){
//   // matching strategy
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5
//   }


// })  // mouseenter dos not bubble
// //ouseover  *   mouseout
// // moueenter   * mouseleave
// nav.addEventListener('mouseout', function(e){
//   if(e.target.classList.contains('nav__link')){
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }


// }) 

// DRY -REFACTOR
const handleHover = function(e){
if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;  //this=== opacity(e.currentTarget)
  }
}

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// }); 
// nav.addEventListener('mouseout', function (e){
//   handleHover(e, 1);
// }); 
// Using bind() method here
// bind() => creates a copy of the function that it is called on,and it will set the "this" keyword in the function call to whatever value we pass into bind

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5)); 
nav.addEventListener('mouseout', handleHover.bind(1)); 
// handler function can take only one argument

// Slider
const sliders = function (){
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer = document.querySelector('.dots');
let currentSlide = 0;
const maxSlide = slides.length;
// we can read length property of nodelist like an array
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';
// slides.forEach((s,i)=> (s.style.transform = `translateX(${100 * i}%)`));

// 0%, 100%, 200%, 300% because  width of each image is 100% 

// Functions
const createDots = function () {
  slides.forEach(function (_, i){
    dotContainer.insertAdjacentHTML('beforeend', `
      <button class = "dots__dot" data-slide = "${i}"></button>
      `);
  });
};
createDots();

const activateDot = function(slide){
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

  // the one we wnated are selected based on data attribute
  document.querySelector(`.dots__dot[data-slide = "${slide}"]`).classList.add('dots__dot--active')
};


const goToSlide = function (slide){
  slides.forEach(
    (s,i) => (s.style.transform = `translateX(${100 *(i-slide)}%)`))
}




// Next Slide
const nextSlide = function(){
   if(currentSlide === maxSlide - 1){
    currentSlide = 0;
  }
  else{
    currentSlide++;
  }
  // slides.forEach((s,i) => (s.style.transform = `translateX(${100 * (i-currentSlide)}%)`));
  goToSlide(currentSlide)
  // // CurSlide = 1: -100%, 0%, 100%, 200%
  activateDot(currentSlide)
}

const prevSlide = function(){
  if(currentSlide === 0){
    currentSlide = maxSlide -1;
  }
  else{
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
};

const init = function(){
  goToSlide(0);
  createDots();
  activateDot(0);
}


btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);


// Keyboard Events
document.addEventListener('keydown', function(e){
  console.log(e);
  if(e.key === 'ArrowLeft') prevSlide();
  e.key === 'ArrowRight' && nextSlide();

});

dotContainer.addEventListener('click',function(e){
  if(e.target.classList.contains('dots__dot')){
    // console.log('DOT');
    currentSlide = Number(e.target.dataset.slide);
    goToSlide(currentSlide);
    activateDot(currentSlide);
  }
});
};
sliders();

document.addEventListener('DOMContentLoaded', function(e){ //DOMContentLoaded doesn't wait for images and other external resources to load. Just html, and Js needed to be loaded
  console.log('HTML Parsed and DOM tree built!', e);
});

window.addEventListener('beforeunload',function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

