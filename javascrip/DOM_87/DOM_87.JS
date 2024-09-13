

/* DOM87

Style
innerHTML
innerText

cloneNode()
setInterval()
classList.add()
classList.remove()
classList.toggle()
getAttribute()
setAttribute()  */

const h1  = document.querySelector("h1");

h1.style.color = "red"
h1.style.backgroundColor = "black"

const h2 = document.createElement("h2");

h2.innerHTML = "learning create element"

const body = document.querySelector("body");

body.appendChild(h2);
h2.style.backgroundColor = "red"


//cloneNode()


const cloneh1 = h2.cloneNode(true);
const cloneh2 = h2.cloneNode(false);
body.appendChild(cloneh1);
body.appendChild(cloneh2);

function clock1()
{
   const date = new Date();
   console.log(date.getDate());
   console.log(date.getDay());
}

clock1();




let clockdiv = document.querySelector(".clock");

function clock(){
   const date = new Date();
   
   const time = date.getHours()+ " : " + date.getMinutes()+ " : "  + date.getMilliseconds();

   clockdiv.innerHTML = time;
}

setInterval(clock , 1000)




/* 

let clockdiv = document.querySelector(".clock");

function clock(){
   const date = new Date();

   let hours = date.getHours();
   let minutes = date.getMinutes();
   let seconds = date.getSeconds();
   let ampm = hours>12? "PM": "AM";


   //Convert hours to 12hours format

   hours = hours%12;
   hours = hours? hours :12;

   // pad minutes and Seconds with leading Zeros if needed

   const minuteStr = minutes <10?"0" + minutes : minutes;

   const secondsStr = seconds<10? "0" + seconds : seconds;

   const time = hours+ " : " + minuteStr+" : " + secondsStr+ " "+ ampm;

   clockdiv.innerHTML = time;


}

setInterval(clock, 1000) */