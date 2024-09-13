document.addEventListener("DOMContentLoaded", function(){

          const model = document.querySelector(".model")
          const modelClose = document.querySelector(".close");
          const tableTbody = document.querySelector("#dataList");
          const dataForm  = document.getElementById("dataForm");
          const nameInput = document.getElementById("nameInput");
          const editAgeInput = document.getElementById("editAgeInput");
          const editGenderSelect = document.getElementById("editGenderSelect");

          const editInput = document.getElementById("editInput");
          const editNameInput = document.getElementById("editNameInput");
          const ageInput = document.getElementById("ageInput");
          const genderSelect = document.getElementById("genderSelect");

          
         



// input restrict
          nameInput.addEventListener("input", function(){
            this.value = this.value.replace(/[^a-zA-Z\s]/g, '');
          });
        

          ageInput.addEventListener("input", function(){
            this.value = this.value.replace(/[^0-9]/g, '');
          });



          dataForm.addEventListener("submit", function(e){
                    e.preventDefault();
                    const name = nameInput.value.trim();
                    const age = parseInt(ageInput.value);
                    const gender = genderSelect.value;
                    if(name !== " " &&  !isNaN(age) && age>=1 && age<= 100 && gender!== "" ){
                            const user = {
                              name : name,
                              age : age,
                              gender : gender 
                            };
                            addToLocalStorage(user);
                            loadStoredData();
                            dataForm.reset();
                             
                    }else{
                           alert("Nanba Nanbi please select all details")   
                    }
          });





        
          

          function addToLocalStorage(user){

                    const storedData = JSON.parse(localStorage.getItem("myData")) || [];

                    storedData.push(user);
                    localStorage.setItem("myData", JSON.stringify(storedData));

          };
          
        
      




          dataForm.addEventListener("submit", function(e){
                    e.preventDefault();
          });

          loadStoredData();


          // close btn



           // modelClose.addEventListener("click", function(){
          //           model.style.display = "none";
          // });

          window.addEventListener("click", function(e){
                    if(e.target == model ||  e.target == modelClose){
                              model.style.display = "none";
                    }
                    
          });



         function loadStoredData(){
          const storedData = JSON.parse(localStorage.getItem("myData")) || [];
          tableTbody.innerHTML = " ";
          storedData.forEach((data, index)=>{ 
                    const row = document.createElement("tr");
                    row.innerHTML = `
                    <td>${data.name}</td>
                    <td>${data.age}</td>
                    <td>${data.gender}</td>
                    <td><button  data-index = "${index}" class="btnEdit">Edit</button></td>
                    <td><button  data-index = "${index}" class="btnDelete">Delete</button></td>
                   
                  `;
                  tableTbody.appendChild(row);   // td data list append

          });

          



          const editButton = document.querySelectorAll(".btnEdit");
          editButton.forEach((btn)=>{
                    btn.addEventListener("click", function(){
                       const index = this.dataset.index;
            const storedData = JSON.parse(localStorage.getItem("myData")) || [];
            const data = storedData[index];
            editInput.value = index;
            editNameInput.value = data.name;
            editAgeInput.value = data.age;
            editGenderSelect.value = data.gender;
             model.style.display = "block"

                    });
                    

                    
          });

         

          const delButton = document.querySelectorAll(".btnDelete");
          delButton.forEach((btn)=>{
                  btn.addEventListener("click", function(){

                    if(confirm("Are you sure to Delete")){
                      const index = this.dataset.index;
                      const storedData = JSON.parse(localStorage.getItem("myData")) || [];
                      storedData.splice(index,1);
                      localStorage.setItem("myData", JSON.stringify(storedData));
                      loadStoredData();
                    }
                
                  });

                    
          });

          };
       

});