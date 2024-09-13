/*

What is DOM and DOM Manipulation
What is DOM?
The DOM is not part of the JavaScript language but is instead a Web API used to build websites
The DOM is a tree-like structure that represents the HTML of a web page

The DOM was designed to be independent of any particular programming language.

The browser creates the DOM to render the page.

The Browser gives JavaScript access to the DOM which is a programming language.

The DOM is not a part of JavaScript Engine.

Brower gives the DOM API Function likes getElementById().createElement() etc. and these functions are not from JavaScript but these all are provided by DOM API.

In order to speak with DOM the browser gives us access by DOM API Application Programming Interface.

JavaScript is programming language that browsers can execute.

We can divide the browser into two components


1. DOM

2. JavaScript Engine (Chrome V8 Engine)

DOM API is the bridge between the DOM and JavaScript Engine
The JavaScript engine is also present in the browser independently.


 -----------------------------------------------------------------------------------------------------------------------

# What is DOM and DOM Manipulation
Change css styles applied to elements.

Remove HTML Elements

We can add Event Listeners to HTML elements like (click, keyup, etc..)

Change attribute values dynamically (e.g href, src, alt)

Create new dynamic HTML element.

*/




// ------------how to accessing DOM 

// document.getElementById()      return an element object

// document.getElementByClassName()   return an HTML COLLECTION

// document.getElementByTagName()     return an HTML COLLECTION

// document.querySelector()           return an element object


// document.querySelectorAll()        returns an NodeList





//1 document.getElementById()

let brand = document.getElementById("brand");
console.log(brand);
console.log(brand.nodeType);
brand.style.backgroundColor = "purple"
brand.style.color = "white"



//2. document.getElementByClassName()

let stitle = document.getElementsByClassName("sub-title");

console.log(stitle);

stitle[0].style.color = "red";

stitle[1].style.color = "blue";


for(let i = 0; i<stitle.length; i++){
               stitle[i].style.backgroundColor = "black"
}


// 3. document.getElementByTagName()


let para = document.getElementsByTagName("p");
console.log(para);

for(let i =0; i<para.length; i++){
               para[i].style.color = "purple";
}

//4. document.querySelector

let heading = document.querySelector('h1');
console.log(heading);

heading.style.color = 'orange';

//5. document.querySelectorAll

let qpara = document.querySelectorAll('p')
console.log(qpara);

qpara.forEach((element)=>{
               element.style.color = "blue"
})



//HTML Collection

/*
let li = document.getElementsByTagName('li');

let elementli = document.createElement('li');

elementli.innerHTML = 'JavaScript';

li[0].parentNode.appendChild(elementli);

console.log('li');

for(let i =0; i<li.length; i++){
               li[i].style.color = 'red'
};

*/


//query Browser method

let li = document.querySelectorAll('li')

let elementli = document.createElement('li');

elementli.innerHTML = "JavaScript";

li[0].parentNode.appendChild(elementli);

console.log('li');

li.forEach((elementli)=>{
               elementli.style.color = 'green';
});

li = document.querySelectorAll('li');
console.log(li);



