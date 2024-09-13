const btnText = document.querySelector("#btn-text");
const outPutText = document.querySelector("#text-output");


btnText.addEventListener("click", getText);




function getText(){
          fetch("data.txt")
          .then((res)=>res.text())
          .then((data)=>{
                    outPutText.innerHTML = data;
          })
}


// --------------------json fetch --------------------

const btnjson = document.querySelector("#btn-json");
const jsonoutput = document.querySelector("#json-output");



btnjson.addEventListener("click", getJsonData);


function getJsonData(){
          fetch("user.json")
          .then((res)=>res.json())
          .then((users)=>{

                    let data = "<ul>";
                    users.forEach((user)=>{
                              data += `<li>${user.name} : ${user.age} </li>`;
                    });

                    data += "</ul>";
                    jsonoutput.innerHTML = data;

          })
}


//----------------------------------API Fetching-----------------------------



const btnApi = document.querySelector("#btn-api");
const apiOut = document.querySelector("#api-out");

btnApi.addEventListener("click", getApi);



async function getApi(){
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");

          const jsonData = await response.json();

          let output = "";
         

          jsonData.forEach((post)=>{
                    output += `<div class="post">
                    <h6> ${post.id}</h6>
                    <h2> ${post.title}</h2>
                    <p> ${post.body}</p>
                    </div>`;
          });
          

 
          apiOut.innerHTML = output;
          
};





