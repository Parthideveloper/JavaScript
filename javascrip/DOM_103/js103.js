// const grandparent = document.querySelector("#grandparent");
// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");


// Event Bubbling false

/* grandparent.addEventListener("click", function(){
          console.log("GrandParent Clicked");
          
});

parent.addEventListener("click", function(){
          console.log("Parent clicked");
          
});

child.addEventListener("click" , function(){
          console.log("Child Clicked");
          

});
 */

/* outPut Event Bubbling


child clicked
parent clicked
grandParent clicked

 */





//------------------------------------------------------------------------------


// Event Capturing



/* grandparent.addEventListener("click", function(){
          console.log("GrandParent Clicked");
          
}, true);

parent.addEventListener("click", function(){
          console.log("Parent clicked");
          
}, true);

child.addEventListener("click" , function(){
          console.log("Child Clicked");
          

}, true)


 */

/* outPut EVent Capturing


Grandparent
Parent Clicked
Child Clicked 

*/

//--------------------------------------------------------------------------



//stop propagation


/* grandparent.addEventListener("click", function(){
          console.log("GrandParent Clicked");
          
}, true);

parent.addEventListener("click", function(){
          console.log("Parent clicked");
          
}, false);

child.addEventListener("click" , function(e){
          console.log("Child Clicked");
          e.stopPropagation();                        // stopPropagation method
          

}, true)
 */



//----------------------------------------------------------------------------

// stop ImmediatePropagation


/* grandparent.addEventListener("click", function(){
          console.log("GrandParent Clicked");
          
}, true);

parent.addEventListener("click", function(){
          console.log("Parent clicked");
          
}, false);

child.addEventListener("click" , function(e){
          console.log("Child Clicked");
          e.stopImmediatePropagation();     // stopimmediatepropagation  method
          

}, true)

child.addEventListener("click", function(e){          

          console.log("Child clicked 2");
          
}, true)
 */

