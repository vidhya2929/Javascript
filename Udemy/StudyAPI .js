
// Understand API basics What is an API? Why do we use APIs in web apps? Difference between frontend and backend APIs. Make your first API call Use fetch() in JavaScript. Start with a free, simple API like: JSONPlaceholder → /posts or /users Dog CEO API → /breeds/image/random PokéAPI → /pokemon Display data on the page Fetch data from the API. Show the result inside the webpage using DOM manipulation. Example: List user names from https://jsonplaceholder.typicode.com/users Show random dog images from Dog API. Style it a bit Use CSS to make the list or images look nice. Stretch goal Add a button → when clicked, it fetches new data. Example: “Get New Dog” button that loads another dog image.
 


// API => Application Programming Interface
// it is a set of rules that allows 2 applications to communicate.
// fetch() is the modern way to make HTTP requests in JavaScript 
// Syntax :
fetch(url)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => console.error('Error:', error));

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(posts =>{
  posts.forEach(post => {
    const li = document.createElement("li");
    li.textContent = post.title;
    postList.appendChild(li);
  });
})