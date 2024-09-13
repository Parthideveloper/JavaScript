/*
createElement
appendchild
insertBefore
removeChild
remove
cloneNode

*/


/*
let para = document.createElement("p");

para.innerHTML = "This a  sample Paragraph";

const body = document.querySelector("body");

body.appendChild(para);

para.style.color = "red";

let h1 = document.createElement("h1");

h1.innerHTML = " This is a Heading Tag";

h1.style.color = "green";

body.insertBefore(h1,para);

*/


const removebtn = document.querySelectorAll(".btnRemove");


removebtn.forEach((btn)=>{
   btn.addEventListener("click", function(){
      const tr = this.parentNode.parentNode;
      // tr.remove()
      const td = tr.childNodes[5];
      console.log(td);
      tr.removeChild(td)
   });
});