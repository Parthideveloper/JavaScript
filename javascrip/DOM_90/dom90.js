/* 
2.keyboard

keydown
keypress
keyup 
key 
code  */


const input = document.getElementById("input-num");

const msg = document.getElementById("error");

input.addEventListener("keypress", (event)=>{
   const key = event.key;
   console.log(key);
   if(isNaN(key)){
      event.preventDefault();
      msg.textContent = "please Enter Number Only";
   } else{
      msg.textContent = "";
   }
});

return
<>
</>
