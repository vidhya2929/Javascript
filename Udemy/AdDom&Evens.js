// DOM => interface between all JavaScript code and the browser
//  or HTML docs rendered in and by the browser
// How the DOM API  is Organized behind the scenes
// every node in the DOM is represented by JS object
// .textContent, .childNodes, .parentNode , cloneNode()
// child types of node type => element type, text type, comment type, document type
// Element type  =>> innerHTML,classlist,childre, parentElement,..
// querySelector is available on both the document and element types.
// document types => querySelector(),createElement(),getElementById()
// Inheritance  => all the child types also get access to the methods and properties f all their parent node types.
// EventTarget => parent of both node type and window node type



///////////////////////////////////////////////////
// Selecting Elements
// selecting the entire document
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
// for this we don't need selectors

document.querySelector('.header')  //returns the first element that matches the selector.
const allSections = document.querySelectorAll('.section')  // to select multiple elements
document.getElementById('section--1');
const allbuttons = document.getElementsByTagName('button');
console.log(allbuttons);
// nodelist doesn't update itself,HTMLCOLLECTION can update themselves
console.log(document.getElementsByClassName('btn'));

// Creating  & insertig HTML elements
// insertAdjacentHTML
const msg = document.createElement('div');
msg.classList.add('.cookie-message');
msg.textContent = 'we used cookied for improved functionality'
msg.innerHTML = `We use cookied for improved funcionaliy and analytics. <button class=btn btn--close-cookie>Got it!</button>`;

header.prepend(message);  // adds as the first child of the element
header.append(message);   //adds the element as the last child of this element.
// these methods are not only used to insert elements but also to move them.
// to make the element both appen and prepend use clone method
header.prepend(message);
header.append(message.cloneNode(true)) // passing true to the cloneNode is that all the child elements will also be copied.

header.before(message); // insert the element before the header element as a sibling
header.after(message); // nsert the element after the header element
// delete
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  msg.remove();
  // Old method => message.parentElement.removeChild(message);
})

// styles
msg.style.backgroundColor = '#37383d'
console.log(msg.style.width);
console.log(msg.style.backgroundColor);  //inline styles 
// we can't access which are hidden or don't exist

console.log(getComputedStyle(msg)); //contains all of the properties with all of the values.
console.log(getComputedStyle(message).height);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');  //to set the color here used setProperty
// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src);
console.log(logo.designer);  //undefined as it is not there and can be worked by getAttribute             //designer="Jonas" in html
console.log(logo.getAttribute('designer'));
logo.setAttribute('company','Bankist'); //set attribute

console.log(logo.src);   // gves absolute version
console.log(logo.getAttribute('src'));  //here relative version

const link = document.querySelector('.twitter-link');
console.log(link.href);                                         //both returns absolute
console.log(link.getAttribute('href'));  

// Data Attribute
//  data-version-number="3.0" in html here version - number should be in camelCase
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('class1','class2');  // can give multiple classes
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');
// Don;tUse 
logo.className = 'jonas';

//  Implementing Smooth Scrolling

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

// Events => mouseenter Event 
 h1.addEventListener('mouseenter', function(e){   //triggers whenever a mouse enter certain element
  alert(`addEventListener: Great! You are reading the heading :D`);
 });

// JavaScript Events have a capturing phase and a bubbling phase
// the event actually generated at the root of the document and from there the capturing phase happens
// It will pass through every single parent element
// As soon as the target reaches the target phase begins.
// After reaching the target the event travels all the way up to the document again in the so-called bubbling phase.(Only through parents not through any sibling elements.)
// if we attach the same event for th section element as well, the section element will also get the wxact same alert widow for the section element as well.
// Events can set up event listeners in a way
// Events propagate which is what apturing and bubbling.its events propagate from one place to another

// LIFECYCLE DOM EVENTS
// lifeCycle => the momnt the page is first accessed, until the user leves it.
// DOM Content Loaded
// fired by the document ASA the HTML is completely parsed(HTML has been downloaded and converted to the DOM tree),also all scripts must be downloaded and executed before the DOM content loaded event can happen.

document.addEventListener('DOMContentLoaded', function(e){ //DOMContentLoaded doesn't wait for images and other external resources to load. Just html, and Js needed to be loaded
  console.log('HTML PArsed and DOM tree built!', e);
});

// When we have the script tag at the end of the html , we don't need to listen for the DOM content loaded

// load event 
// fired by the window after all loaded(when the complete page has finished loading)

window.addEventListener('load', function(e){
  console.log('Page fully loaded',e);
});
// before unload event
// triggered before a user is about to leave the page
window.addEventListener('beforeunload',function(e){
  e.preventDefault();
  e.returnValue = '';
})

// Loading a Js scriptin HTML
// async or defer attribute and it influence the way in which the JS file is fetched

// script tag can be witten in the head or in the body
// Regular => HTML parsing            ==>  fetch Script ==> Execute

// ASYNC => HTML parsing and Fetch script  ==> Execute  ==> Finish parsing HTML

// DEFER  => parsing HTML and Fetch script  ==>> 
// here the HTML parsing is never interrupted,script is only executed at the end

// End Of Body
// Scripts are fetched and executed after the HTML is completely parsed

// ASYNC in Head 
// Scripts are fetched asynchronously and executed immediately
// DEFER
// Scripts are fetched asynchronously and executed after the HTML is completely parsed
// Use when order of execution matters
