'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// XMLHttpRequest funtion

// First step
const request = new XMLHttpRequest();  //storing the result in a new variable
// Modern Method => promises
// old-school method -; to know XMLHttpRequest exist and to know how Ajax calls used to be handled with events and callback functions.

// request.open('GET', 'https://countries-api-836d.onrender.com/countries/name/india') // to get data 'GET'. // 2nd argument string containing the url to which the Ajax call should be made.
// request.send();
// // register a callback on the request object for the load event

// request.addEventListener('load',function(){
//   console.log(this.responseText); //response is in the property responseText.(after the data has actually arrived)
// })

// Now we need to convert this to an actaul JS object as we have JSON(terminal)
request.open('GET', 'https://countries-api-836d.onrender.com/countries/name/india') // to get data 'GET'. // 2nd argument string containing the url to which the Ajax call should be made.
request.send();
// register a callback on the request object for the load event

request.addEventListener('load',function(){
  console.log(this.responseText); //response is in the property responseText.(after the data has actually arrived)

  const data = JSON.parse(this.responseText);
  console.log(data);
})








// github => Rest Countries => Cross - Origin Resource Sharing , without CORS we cannot access a 3rd party API from our own code.


// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

