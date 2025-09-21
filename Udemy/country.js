'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
// XMLHttpRequest funtion



// First step
// const request = new XMLHttpRequest();  //storing the result in a new variable
// Modern Method => promises
// old-school method -; to know XMLHttpRequest exist and to know how Ajax calls used to be handled with events and callback functions.

// request.open('GET', 'https://countries-api-836d.onrender.com/countries/name/india') // to get data 'GET'. // 2nd argument string containing the url to which the Ajax call should be made.
// request.send();
// // register a callback on the request object for the load event

// request.addEventListener('load',function(){
//   console.log(this.responseText); //response is in the property responseText.(after the data has actually arrived)
// })

// Now we need to convert this to an actaul JS object as we have JSON(terminal)
// request.open('GET', 'https://countries-api-836d.onrender.com/countries/name/${country}') // to get data 'GET'. // 2nd argument string containing the url to which the Ajax call should be made.
// request.send();
// register a callback on the request object for the load event

// request.addEventListener('load',function(){
  // console.log(this.responseText); //response is in the property responseText.(after the data has actually arrived)
///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('usa');
getCountryData('germany');




// github => Rest Countries => Cross - Origin Resource Sharing , without CORS we cannot access a 3rd party API from our own code.


// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

