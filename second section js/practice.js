// Template Literal
/* it is a feature of string */


// const var1 = "codee isn't cool";
// const var2 ='codee isn't cool';                 //error example



//same case will occur for double quotes


// const var02 = "code is."super";
// const var11 ="code is super";                 //error example

console.log(var1);
console.log(var2);

console.log
// to avoid this misunderstanding we use escape (backslash)  eg:

const varr = "codee isn't cool";
const var22 = 'codee isn\'t cool';

const jve = "code is.\"super";
const eed = "code is super";

// string can be represented without single qoute and double qoute 
// that is possible by using backtick.
//Through backtick we get  all the properties of single quote and double quote and also used for template literal


// template strings are represented using `(backticks)
// Advantages of using backticks are -:
// 1.Multiline String
// 2.Expression Inside a String
const var3 =`codee isn't it cool`;



/*                Multiline String             */
// if we split a string written using double quotes or single quotes it will cause an error
// But if we split a string that uses backtick it can be split without error. eg:

// const jder= 'here is the 
// example for you';                   // error example



const mij =`here is the 
bjhjhm
vgfhjm
ngvghkv
corrected example`;


//example if we want an html element like this
/* <!DOCTYPE html >
<html lang = "en">
    <head>
        <title>Coded</title>
    </head>
    <body>
        <div className = "item" >
            <h4>Product Name</h4>
            <div>Price: 00</div>
        </div>
        <script type="module" src='scripty.js'></script>
    <body>
    </html>
 */
 
document.body.innerHTML = '<div className="item"><h4>Product Name</h4><div>Price: 00</div></div>'
//it is difficult to read
// so we split it 

document.body.innerHTML = `<div className ="item"`+ 
`<h4>Product Name</h4>`+ 
`<div>Price: 00</div>`+
`</div>`;


// Expression inside a string

const producttName = "Pen";
const price ="12 Rs";

const value = `The ${producttName} is ${price}`;
console.log(value);
 




 








