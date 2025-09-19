// 'use strict';


// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// const form = document.querySelector('.form');
// const containerWorkouts = document.querySelector('.workouts');
// const inputType = document.querySelector('.form__input--type');
// const inputDistance = document.querySelector('.form__input--distance');
// const inputDuration = document.querySelector('.form__input--duration');
// const inputCadence = document.querySelector('.form__input--cadence');
// const inputElevation = document.querySelector('.form__input--elevation');

// if(navigator.geolocation){
//   navigator.geolocation.getCurrentPosition(function(position){
//     const {latitude} = position.coords;
//     const {longitude} = position.coords;
//     console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D`);

//     const coords = [latitude, longitude];

//     const map = L.map('map').setView(coords,13);

//     L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'})
//       .addTo(map);

//     map.on('click', function(mapEvent){
//       const {lat, lng} =mapEvent.latlng;
   

//     L.marker([lat,lng])
//     .addTo(map)
//     .bindPopup(L.popup({
//       maxWidth:250,
//       minWidth: 100,
//       autoClose: false,
//       closeOnClick: false,
//       className: 'running-popup',
//     }))
//     .setPopupContent('workout')
//     .openPopup();
//      })
//   },function(){
//     alert(`Could not find position`)
//   })
// }


'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation is an API
// check if it exist
let map, mapEvent;

class App {
  constructor(){

  }
  _getPosition(){
    
  }
  _loadMap(){}
  _showDorm(){}
  _toggleElevationField(){}
  _newWorkout(){} 

}

if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function (position){
   const latitude = position.coords.latitude;
   const {longitude} = position.coords;
   console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D`);

   const coords = [latitude, longitude]

  // To this map const we are going to add the addEventListener 
   map = L.map('map').setView(coords, 13/*13 is a reasonable number*/); 
  //  console.log(map);
   //second parameter is the zoom level
    //here L is a namespace {L namespace has some methods for example map,tile layer,marker}

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {  // Use the url to change the appearence of our map.
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

 
  // Handling clicks on map
    map.on('click', function(mapE){  //type of event and callback function
      mapEvent = mapE;
      form.classList.remove('hidden')
      inputDistance.focus();
     
    // console.log(mapEvent);
    //   const {lat, lng} = mapEvent.latlng;
    //    L.marker([lat, lng])
    //   .addTo(map)
    //   // .bindPopup('Workout')
    //   .bindPopup(L.popup({
    //     maxWidth: 250,
    //     minWidth: 100,
    //     autoClose: false,
    //     closeOnClick: false,
    //     className: 'running-popup',
    //   }))
    //   .setPopupContent('Workout')
    //   .openPopup();
    })

    },
    function(){
      alert(`Could not find position`);
    })
}

form.addEventListener('submit',function(e){
  e.preventDefault();
  // clear input fields
  inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';



  //Display marker
   console.log(mapEvent);
      const {lat, lng} = mapEvent.latlng;
       L.marker([lat, lng])
      .addTo(map)
      // .bindPopup('Workout')
      .bindPopup(L.popup({
        maxWidth: 250,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: 'running-popup',
      }))
      .setPopupContent('Workout')
      .openPopup();
});

inputType.addEventListener('change', function(){
  inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //closest div element to the input field /closest parent of the input field (closest =>inverse of querySelector , select parents instead of children)
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); //by toggling the same class on both of these, there is always one of them is hidden
})































// NOTES
  // 2 callback functions for navigater.geolocation.currentPosition =>1) called on success(whenever the browser got the coordinates of the current position of the user)
// 2)Error Callback =>called when there happend an error while getting the coordinates



// leaflet => Open source JS library for mobile friendly interactive apps
// Any variable that is global to the script is available to all the other scripts.As long as they appear after that script

// tile layer => the map we see on a page is made up of small tiles,comes from open street map
// Open street map => open source map that everyone can use for free.


// Note :
// navigator.geolocation
// const coords
// const map = L.map('').setView(coords, 13);
// L.tileLayer('',{attribution:''}).addTo(map);
// map.on('click', function(mapEvent){
//   const {lat, lng} = mapEvent.latlng;
// L.marker([lat, lng])
// .addTo(map);
// bindPopup(L.popup({
//   // properties
// }))
// .setPopupContent('Workout')
// .openPopup();
// })
// },function(){
  // alert('Could not find Position');
// }
