

/* EvenHandlers


Inline event listeners
Inline properties
Event listeners */

/* 
Event

  1. Mouse
   click
   dblclick
   mousedown
   mouseout
   mouseup
   mouseover
   mousemove
   mouseenter
   mouseleave


   2. Keyboard
   keydown
   keyup
   keypress
   key 
   code

   


   3. Touch
   touchstart
   touchmove
   touchend

   4. Scroll
   scroll

   5. Form
   submit
   reset
   change
   */
  // 1. Mouse
  // 2. Keyboard
  // 3. Touch
  // 4. Scroll
  // 5. Form
  // 6. Window
  // 7. Document
  // 8. Media
  // 9. Animation
  // 10. Transition
  // 11. Pointer
  // 12. Drag and Drop
  // 13. Clipboard
  // 14. Storage
  // 15. Geolocation



   

   
   




const btn1 = document.querySelector(".btn");

/* btn1.addEventListener("click", function(){  //clici event
   alert("Welcome me yeahhhh");
});
 */


//or 

const btn = document.querySelector(".btn");

btn.addEventListener("dblclick", function(){
   alert("Welcome yeah its double click")
});


/* mousedown
   mouseout
   mouseup
   mouseover
   */

btn.addEventListener("mousedown", function(){
   this.style.backgroundColor = 'Red'
});

btn.addEventListener("mouseout", function(){
   this.style.backgroundColor = "blue"
} );

btn.addEventListener("mouseup", function(){
   this.style.backgroundColor = "green"
});

btn.addEventListener("mouseover",function(){
   this.style.backgroundColor = "yellow"
});