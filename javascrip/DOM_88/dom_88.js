/* classList.add();
classList.remove();
classList.toggle();


getAttribute();
setAttribute();

hasAttribute();
setAttributeName();
removeAttribute();


*/


/* 
// first 3 example above class


const btnAdd = document.querySelector("#btnAdd")
const btnRemove = document.querySelector("#btnRemove")
const btnToogle = document.querySelector("#btnToggle")

const box = document.querySelector(".box");

btnAdd.addEventListener("click", ()=>{
   box.classList.add("new-color")
});

btnRemove.addEventListener("click", function(){ // anonomyies function

   box.classList.remove("new-color");
});

btnToogle.addEventListener("click", ()=>{
   box.classList.toggle("new-color");
});

 */

const btnClick = document.querySelector(".btnClick");
const input = document.querySelector("input");

btnClick.addEventListener("click", ()=>{
   const getAtt = input.getAttribute("type");
   if(getAtt == "text"){
      input.setAttribute("type", "password")
   }
   else{
      input.setAttribute("type", "text");
   }
});

