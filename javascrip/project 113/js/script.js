const toggleBtn = document.querySelector("#toggleBtn");

const input = document.querySelector(".input-container input");


let password = true;

toggleBtn.addEventListener("click", function(){
          if(password){
                    input.setAttribute("type", "text");
                    password = false;
                    toggleBtn.classList.remove("fa-eye");
                    toggleBtn.classList.add("fa-eye-slash");
          }
          else{
                    input.setAttribute("type", "password");
                    password = true;
                    toggleBtn.classList.add("fa-eye");
                    toggleBtn.classList.remove("fa-eye-slash");
          }


})


