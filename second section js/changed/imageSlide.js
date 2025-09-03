const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;              //declare am index of the current slide 
let intervalId = null;

// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){         //function to initialize our slider
  if(slides.length > 0){
  slides[slideIndex].classList.add("displaySlide");
  intervalId = setInterval(nextSlide, 5000);
  }
}
function showSlide(index){     // there will be one parameter index (index of the next slide)
  // access the nodelist of slides

if(index >= slides.length){
  slideIndex = 0;
}
else if(index < 0){
  slideIndex = slides.length - 1;
}


  slides.forEach(slide => {
    slide.classList.remove("displaySlide");
  });
  slides[slideIndex].classList.add("displaySlide");
  
}
function prevSlide(){
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}
function nextSlide(){
  slideIndex++;
  showSlide(slideIndex);
}
// 