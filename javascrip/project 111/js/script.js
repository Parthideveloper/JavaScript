const inputBox = document.querySelector("#searchText");
const suggestBox = document.querySelector(".suggest-box");


inputBox.addEventListener("keyup",filterSuggesstions);

inputBox.addEventListener("click",()=>{
          inputBox.select();
})

async function filterSuggesstions(){
          const response = await fetch("./data/data.json");

          const keywordsList = await response.json();   // response convert to json
          // console.log(keywordsList); check

        
          let suggest = []; 
           
          let input = this.value.trim().toLowerCase();
          // console.log(input);
          
          if(input.length){
                    suggest = keywordsList.filter((keyword)=>{
                             return keyword.search.toLowerCase().includes(input); // search property in data.json
                    });
          }
          // console.log(suggest);
         
          display(suggest); 
          if(!suggest.length){
                    suggestBox.innerHTML = " ";
          }

          // call display functions

}

function display(suggest){
          const content = suggest.map((list)=>{
                    const data = list.search; //search index data for json 
                    return `<li onclick="selectInput('${data}')">${Highlight(data)}</li>`

          });

          suggestBox.innerHTML = `<ul>${content.join("")}</ul>`;
}
 
function selectInput(data){
          inputBox.value = data;
          suggestBox.innerHTML = " ";
}

function Highlight(textToSearch){
          const searchString = inputBox.value.toLowerCase();
          const startIndex = textToSearch.toLowerCase().indexOf(searchString);
          const highlightedText = textToSearch.substring(0, startIndex)+ "<mark>" + searchString + "</mark>" + textToSearch.substring(startIndex + searchString.length);

          return highlightedText;
}