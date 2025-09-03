// To make **20 `<div>` elements inside 1 main `<div>`**, you can do it like this:

// ### ✅ Example in HTML:

// ```html
// <!DOCTYPE html>
// <html>
// <head>
//   <title>20 Divs</title>
//   <style>
//     .container {
//       border: 2px solid black;
//       padding: 10px;
//     }

//     .child {
//       border: 1px solid blue;
//       margin: 5px;
//       padding: 10px;
//     }
//   </style>
// </head>
// <body>

//   <div class="container">
//     <!-- 20 child divs inside the main container -->
//     <div class="child">Div 1</div>
//     <div class="child">Div 2</div>
//     <div class="child">Div 3</div>
//     <div class="child">Div 4</div>
//     <div class="child">Div 5</div>
//     <div class="child">Div 6</div>
//     <div class="child">Div 7</div>
//     <div class="child">Div 8</div>
//     <div class="child">Div 9</div>
//     <div class="child">Div 10</div>
//     <div class="child">Div 11</div>
//     <div class="child">Div 12</div>
//     <div class="child">Div 13</div>
//     <div class="child">Div 14</div>
//     <div class="child">Div 15</div>
//     <div class="child">Div 16</div>
//     <div class="child">Div 17</div>
//     <div class="child">Div 18</div>
//     <div class="child">Div 19</div>
//     <div class="child">Div 20</div>
//   </div>

// </body>
// </html>
// ```

// ---

// ### 🔁 Want to generate them using JavaScript?

// ```html
// <div class="container" id="mainDiv"></div>
// 
// <script>
//   const mainDiv = document.getElementById("mainDiv");
//   for (let i = 1; i <= 20; i++) {
//     const childDiv = document.createElement("div");
//     childDiv.className = "child";
//     childDiv.textContent = `Div ${i}`;
//     mainDiv.appendChild(childDiv);
//   }
// </script>
// ```
// Let me know if you want this in a separate file setup (HTML + CSS + JS files).
