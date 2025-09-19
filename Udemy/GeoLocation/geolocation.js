'use strict';


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];



class Workout{  //parent class for both workouts
  date = new Date();
  id = (Date.now() + '').slice(-10);


  //take data common to both workouts
  constructor(coords, distance, duration){
    // this.date = ...
    // this.id = ...
    this.coords = coords;       //[lat,lng]
    this.distance = distance;  //in kms
    this.duration = duration;  //in min
  }

}

class Running extends Workout{
  constructor(coords, distance, duration, cadence){
    super(coords,distance,duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace(){
    //min/km
    this.pace = this.duration / this.distance;
    return this.pace
  }
}

class Cycling extends Workout{
  constructor(coords, distance, duration,elevationGain){
    super(coords,distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
  }

  calcSpeed(){
    //km/h
    this.speed = this.distance / (this.duration / 60)
    return this.speed
  }
}

// const run1 = new Running([39, -12],5.2, 24, 178);
// const cycle1 = new Cycling([39, -12],27, 95, 523);
// console.log(run1, cycle1);
////////////////////////////////////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');



// Geolocation is an API
// check if it exist
// let map, mapEvent; don't need anymore

class App {
  #workouts = [];
  #map;  //map also should be included within the App class (everything that is related to our app)
  #mapEvent;  //these 2 becomes private instance properties
  // Properties that gonna present on all the instances created through this class
   
  constructor(){
   
    this._getPosition();

    form.addEventListener('submit',this._newWorkout.bind(this));

    inputType.addEventListener('change', this._toggleElevationField)  


  }
  _getPosition(){  //current position is determined and loadMap function is called with current position
    if(navigator.geolocation){
  navigator.geolocation.getCurrentPosition( this._loadMap.bind(this/* points to the current object*/), //since it is a regular function not as a method call,   //first callback should be success so loadMap //since we are in a class use 'this'
    function(){
      alert(`Could not find position`);
    })
}

  }
  // js call the this._loadMap and pass the position argument as soon as the user is determined
  _loadMap(position){
   const latitude = position.coords.latitude;
   const {longitude} = position.coords;
   console.log(`https://www.google.com/maps/@${latitude},${longitude},15z?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D`);

   const coords = [latitude, longitude]

  // To this map const we are going to add the addEventListener 
  /*now,not a normal variable,property that is defined on the object itself*/ this.#map = L.map('map').setView(coords, 13/*13 is a reasonable number*/); 
  //  console.log(map);
   //second parameter is the zoom level
    //here L is a namespace {L namespace has some methods for example map,tile layer,marker}

  L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {  // Use the url to change the appearence of our map.
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(this.#map);

 
  // Handling clicks on map
    this.#map.on('click',this._showForm.bind(this))//type of event and callback function
     
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

  }
  _showForm(mapE){
     this.#mapEvent = mapE;
      form.classList.remove('hidden')
      inputDistance.focus();
     
  }
  _toggleElevationField(){
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden'); //closest div element to the input field /closest parent of the input field (closest =>inverse of querySelector , select parents instead of children)
  inputCadence.closest('.form__row').classList.toggle('form__row--hidden'); //by toggling the same class on both of these, there is always one of them is hidden
  }

// this keyword is not used anywhere so no need to bind 

  _newWorkout(e){
    const validInputs = (...inputs) => 
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => 
      inputs.every(inp  => inp > 0);

     e.preventDefault();


    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration =+ inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;
    //If workout running, create running object
     if(type === 'running'){
      const cadence = + inputCadence.value;
    

    // Check if data is valid
    if(
        // !Number.isFinite(distance) || 
        // !Number.isFinite(duration) || 
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) || !allPositive(distance,duration,cadence)
      ) 
      return alert('Inputs have to be positive numbers!');

       workout = new Running[(lat,lng),distance, duration, cadence];
    

    }

    // If workout cycling, create cycling object
     if(type === 'cycling'){
      const elevationGain =+ inputElevation.value;

      if(
        !validInputs(distance, duration, elevationGain) || !allPositive(distance, duration)
      )
      return alert('Inputs have to be positive numbers!')


      workout = new Cycling[(lat,lng),distance, duration, elevationGain];
    
     }


    //Add new object to workout array
      this.#workouts.push(workout);
      console.log(workout);

    // Render  workout on map as marker
      console.log(this.#mapEvent);
      // const {lat, lng} = this.#mapEvent.latlng;
       L.marker([lat, lng])
      .addTo(this.#map)
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

    //Render workout on list


    // Hide Form + clear input fields











  // clear input fields
  inputDistance.value = inputCadence.value = inputDuration.value = inputElevation.value = '';



  //Display marker
 
  } 

}

const app = new App();

































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



//
