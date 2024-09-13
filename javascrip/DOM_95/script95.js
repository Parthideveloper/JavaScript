document.addEventListener("DOMContentLoaded",function(){
          const modal = document.querySelector(".modal");
          const closeButton = document.querySelector(".close");
          const tableBody = document.querySelector("#dataList");
          const dataForm = document.getElementById("dataForm");



         const nameInput = document.getElementById("nameInput");
         const ageInput = document.getElementById("ageInput");
         const genderSelector = document.getElementById("genderSelector");


         const editForm = document.getElementById("editForm");
         const editIndex = document.getElementById("editIndex");
         const editNameInput = document.getElementById("editNameInput");
         const editAgeInput = document.getElementById("editAgeInput");
         const editGenderSelector = document.getElementById("editGenderSelector");



          dataForm.addEventListener("submit", function(e){
                    e.preventDefault();
                    const name = nameInput.value.trim();
                    const age = parseInt(ageInput.value);
                    const gender = genderSelector.value;
                    if(name !== "" && !isNaN(age) && gender !== "" ){
                              const user = {
                                        name : name,
                                        age : age,
                                        gender : gender
                              };
                              addToLocalStorage(user);
                              loadStoredData(); // reload
                             dataForm.reset(); // reset submit


                    }else{
                              alert("please fill All the Details");
                    }

          });


          editForm.addEventListener("submit", function(e){
            e.preventDefault();
            const index = editIndex.value.trim();
            const newName = editNameInput.value.trim();
            const newAge = parseInt(editAgeInput.value);
            const newGender = editGenderSelector.value;
            if(newName !== "" && !isNaN(newAge) && newGender !== "" ){
              const storedData = JSON.parse(localStorage.getItem("myData")) || [];
            storedData[index].name = newName;
            storedData[index].age = newAge;
            storedData[index].gender = newGender;
            localStorage.setItem("myData", JSON.stringify(storedData));
            editForm.reset();
            modal.style.display = "none"
            loadStoredData();


                      
                      
            }else{
                      alert("please fill All the Details");
            }

  });

          function addToLocalStorage(user){

                    const storedData = JSON.parse(localStorage.getItem("myData")) || [];
                    storedData.push(user);
                    localStorage.setItem("myData", JSON.stringify(storedData));  // update and restore date


          }

          loadStoredData();

          function editData(){
            const index = this.dataset.index;
            const storedData = JSON.parse(localStorage.getItem("myData")) || [];
            const data = storedData[index];
            editIndex.value = index;
            editNameInput.value = data.name;
            editAgeInput.value = data.age;
            editGenderSelector.value = data.gender;
            
            modal.style.display = "block";
          };

          function deleteData(){
            if(confirm ("Are You Sure to Delete ? ")) {

              const index = this.dataset.index;
              const storedData = JSON.parse(localStorage.getItem("myData")) || [];
              storedData.splice(index, 1);
              localStorage.setItem("myData", JSON.stringify(storedData));
              loadStoredData();
            }
          };



          // Function to close the modal using Close Btn

          closeButton.addEventListener("click",function(){
                    modal.style.display  = "none";
          });


          //Function to close th emdal using Modal window click


          window.addEventListener("click", function(e){
                    if(e.target == modal){
                              modal.style.display = "none";
                    }

          });



          function loadStoredData(){
                    const storedData = JSON.parse(localStorage.getItem("myData")) || [];

                    tableBody.innerHTML= "";
                    storedData.forEach(function(data, index){
                              const row = document.createElement("tr");
                              row.innerHTML = `
                            <td>${data.name}</td>
                            <td>${data.age}</td>
                            <td>${data.gender}</td>
                            <td><button data-index = "${index}" class = "btnEdit"> Edit </button> </td>
                            <td><button data-index = "${index}" class = "btnDelete">Delete </button> </td>
                              `;
                              tableBody.appendChild(row);
                    });
                    const editButtons = document.querySelectorAll(".btnEdit");
                    editButtons.forEach((btn)=>{   // Each button click
                              btn.addEventListener("click", editData)
                    });

                    const delButtons = document.querySelectorAll(".btnDelete");
                    delButtons.forEach((btn)=>{   // Each button click
                              btn.addEventListener("click", deleteData)
                    });
          };
});





/* [{"name": "Tiya","age":12, "gender":"Female"},{"name": "rajani","age":32, "gender":"male"}] */



