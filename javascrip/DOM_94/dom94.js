document.addEventListener("DOMContentLoaded", ()=>{
          const dataForm = document.getElementById("dataForm");
          const dataInput = document.getElementById("dataInput");
          const dataList = document.getElementById("dataList");

          loadStoredData();

          dataForm.addEventListener("submit",function(e){
                    e.preventDefault();

                    const data = dataInput.value.trim();
                    if(data !==""){
                              addToLocalStorage(data);
                              loadStoredData();
                              dataInput.value = "";
                              
                              
                    }else{
                              alert("please enter the data")

                    };
          });
    
// Add New Data to LocalStorage
function addToLocalStorage(data) {

          const storedData = JSON.parse(localStorage.getItem("myData")) || [];
          storedData.push(data); //push local storage
          localStorage.setItem("myData", JSON.stringify(storedData)); // reset local storage


}

// load all data form localstorage
          function loadStoredData(){

                    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
                    dataList.innerHTML = "";

                    storedData.forEach((data,index) => {

                            /* const li = document.createElement("li");
                              li.textContent = data;
                              dataList.appendChild(li); */

                              let output = 
                             ` <li>
                                        ${data}
                                        <div>
                                                  <button class='btnEdit' data-index='${index}'>Edit</button>
                                                  <button class='btnDelete' data-index = '${index}'>Delete</button>
                                        </div>
                              </li>
                             `;

                             dataList.innerHTML += output;
                    });

                    const delButtons = document.querySelectorAll(".btnDelete");
                    delButtons.forEach((btn)=>{
                              btn.addEventListener("click",(deleteData));
                    });

                    const EditButtons = document.querySelectorAll(".btnEdit");
                    EditButtons.forEach((btn)=>{
                              btn.addEventListener("click",(editData));
                    });               
          }

          // To Delete Data A User from LocalStorage
          function deleteData(){
                   if(confirm("Are You Sure to Delete")){
                    const index = this.dataset.index;
                    //console.log(index);

                    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
                   

                    storedData.splice(index, 1);  // using splice method remove a value

                    localStorage.setItem("myData", JSON.stringify(storedData));
                    loadStoredData();
                   }
          }

      

          // To Edit user Data from Local storage
          function editData(){


                    const index = this.dataset.index;
                    // console.log(index);

                          const storedData = JSON.parse(localStorage.getItem("myData")) || [];

                          const newData = prompt("Edit Username", storedData[index]);

                          if(newData !==null){
                              storedData[index]  = newData.trim();
                              localStorage.setItem("myData", JSON.stringify(storedData));
                              loadStoredData();
                          }

          }
});