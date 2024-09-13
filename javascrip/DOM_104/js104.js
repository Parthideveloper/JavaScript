/* const catagories = document.getElementById("catagories");

catagories.addEventListener("click", function(e){
        if(e.target.className == "product")
        {
          // console.log(e.target.id);

          window.location.href = "/"+ e.target.id;
          
        }
          
}); */





const form = document.querySelector("#form");

form.addEventListener("keyup", (e)=>{
          if(e.target.dataset.uppercase != undefined){
                    e.target.value = e.target.value.toUpperCase();
          }
});







