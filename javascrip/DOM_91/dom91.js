
/*  

form Events in JavaScript

import form events


 Submit
 rest 
 change 
 checked 
 blur 
 focus
 
 */

const form = document.querySelector("form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const course = document.querySelector("#course");
const checkbox = document.querySelector("#agree");
const radios = document.querySelectorAll('input[name="gender"]');

form.addEventListener("submit", (e)=>{
   e.preventDefault();
   console.log("Form Submitted");
   console.log("User Name : ",username.value);
   console.log("Email Id: ", email.value);


   let selectedGender  = "";

   radios.forEach((radio)=>{
      if(radio.checked){
         selectedGender = radio.value;
      }
   });

console.log("Gender :" , selectedGender);
}); 


course.addEventListener("change", function(e){
   const selectedCourse = e.target.value;
   console.log("Selected Course : ", selectedCourse);
});

form.addEventListener("reset", function(e){
 console.log("Reset or Clear Form Date");
});


checkbox.addEventListener("change", function(e){
   if(e.target.checked){
      console.log("checkedBox is checked");
   }
   else{
      console.log("checkedBox is Unchecked");
   }
});


username.addEventListener("input", function(e){
   console.log("username input changed: ", e.target.value);

});


username.addEventListener("focus", function(){
   username.style.borderColor = "green";

});

username.addEventListener("blur", function(){
   username.style.borderColor= "black";

});


