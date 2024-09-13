 const btnToggle = document.getElementById("theme-toggle");
const banner = document.getElementById("banner");

btnToggle.addEventListener("click", function(toggleTheme){

         banner.classList.toggle("dark");

          const isDarkTheme = banner.classList.contains("dark");
          
          localStorage.setItem("themePreference",
                    isDarkTheme ? "dark" : "light");        
});
window.addEventListener("DOMContentLoaded", function(){
          const themePreference = this.localStorage.getItem("themePreference");
          if(themePreference ==="dark"){
                    const banner = this.document.getElementById("banner");
                    banner.classList.add("dark");
                  //  document.body.classList.add("dark");
          }
});