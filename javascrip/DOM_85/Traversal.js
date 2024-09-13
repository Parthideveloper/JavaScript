/*

const para = document.getElementsByTagName("p");

const parent = para[0].parentNode;

console.log(parent);

parent.style.backgroundColor="green";

parent.style.padding = "10px";

const h1 = document.getElementsByTagName("h1");

console.log(h1);

const parent_h1 = h1[0].parentNode;

console.log(parent_h1);

parent_h1.style.backgroundColor= "blue"
parent_h1.style.padding = "10px";



// firstElementChild


const firstElementChild = parent.firstElementChild;

console.log(firstElementChild);

firstElementChild.style.color = "white"

// lastElementChild


const lastElementChild = parent.lastElementChild;

lastElementChild.style.color = "yellow"


*/



//children


const div = document.getElementsByTagName("div")[0];

console.log(div);
console.log(div.children[0]);
console.log(div.children[1]);
console.log(div.childElementCount);
console.log(div.childNodes);




//siblings

const p = document.getElementsByTagName("p")[0];
console.log(p);
console.log(p.previousSibling);
console.log(p.previousElementSibling);

const h2 = document.getElementsByTagName('h2')[0];
console.log(h2);
console.log(h2.nextSibling);
console.log(h2.nextElementSibling);

const section = document.getElementsByTagName('section')[0];

console.log(section);

console.log(section.previousSibling);
console.log(section.previousElementSibling);

console.log(section.nextSibling);
console.log(section.nextElementSibling);

// Closest

const h1_tag = document.querySelector("h1") 

console.log(h1_tag)

const section1 = h1_tag.closest("section");
console.log(section1);
section1.style.backgroundColor = "purple";
section1.style.color = "white";
section1.style.padding = "10px";