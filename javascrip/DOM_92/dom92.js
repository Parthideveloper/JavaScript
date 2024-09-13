
/* 4. 

Touch 
touchstart
touchmove
touchend
touchcancel */


const touchArea = document.getElementById("touchArea");

touchArea.addEventListener("touchstart", (e)=>{
   e.preventDefault();
   touchArea.style.backgroundColor ="blue";
   touchArea.textContent = "Touch Started !!!"
  
});


 touchArea.addEventListener("touchmove", function(e){
   e.preventDefault();
   touchArea.style.backgroundColor = "green";
   touchArea.textContent = "Touch Moving !!!";

 });

 touchArea.addEventListener("touchend", (e)=>{
   e.preventDefault();
   touchArea.style.backgroundColor = "Orange";
   touchArea.textContent = "Touch end!!"
 });

 touchArea.addEventListener("touchcancel", (e)=>{
   e.preventDefault();
   touchArea.style.backgroundColor = "red";
   touchArea.textContent = "Touch cancel!!"
 });

