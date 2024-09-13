const btnToggle = document.getElementById("theme-toggle");

const banner = document.getElementById("banner");



btnToggle.addEventListener("click", ()=>{
          
          banner.classList.toggle("dark");
          const darktheme = banner.classList.contains("dark");
          localStorage.setItem("themePreference", darktheme?"dark":"light");
});

window.addEventListener("DOMContentLoaded",()=>{
          const themePreference = this.localStorage.getItem("themePreference");
          if(themePreference === "dark"){
                    const banner = document.getElementById("banner");
                    banner.classList.add("dark");
          };
});

