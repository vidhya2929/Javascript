// // fetch = Function used for making HTTP requests to fetch resources.
// //         (JSON style data, images, files)
// //         Simplifies asynchronous data fetching in Javascript and used for interacting with APIs to retrieve and send data asynchronously over the web.
// //         fetch(url, {options})  // will be method property instead of options


// // fetch data from an API

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//   .then(response => console.log(response))
//   .catch(error => console.error(error))

// // next step is to convert it to a readable format
// // few methods are array,bblob,text,json...

// // JSON method be like..

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//    .then(response => response.json())
//    .then(data => console.log(data))
//   //  .then (data => console.log(data.id))
//    .catch(error => console.log(error));

//    fetch("https://pokeapi.co/api/v2/pokemon/spongebob")
//    .then(response => console.log(response))
//    .then(data => console.log(data))
//    .catch(error => console.error(error));
//   //  returns 404 error
//   // even if we could not find the resource the promise is still gonna resolve it;s not gonna reject


// // throwing an error
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then(response => {

//   if(!response.ok){
//     throw new Error("Could not fetch resource")         // if ok is not true then we throw a custom error,otherwise we will return response object in a Json format
//   }
//   return response.json();
// })
// .then(data => console.log(data))
// .catch(error => console.error(error))


// // using async and awaits

// fetchData();


// async function fetchData(){
//   try{

//     const pokemonName = document.getElementsById("pokemonName").value.toLowerCase();
//     const response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");

//     if(!response.ok){
//         throw new Error("Could not fetch resource"); 
//     }
//     const data = await response.json();
//     console.log(data)
//   }
//   catch(error){
//     console.error(error);
//   }
// }

// // 






async function fetchData(){
  try{
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    if(!response.ok){
      throw new Error("could not fetch resource");
    }

    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");

    imgElement.src = pokemonSprite;
    imgElement.style.display ="block";
  }
  catch(error){
    console.error(error);
  }
}












 
  // "status"  will be "200"  that's mean it is okay
  // and "ok" property will be "true"


  // HTTP response dtatus codes 
  // 100-199 => informational responses
  // 200-299 => Successful responses
  // 300-399 => Redirection messages
  // 400-499 => Client error responses
  // 500-599 => Server error responses