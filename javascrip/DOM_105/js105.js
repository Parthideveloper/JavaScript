
const textInput = document.getElementById("textInput");

textInput.addEventListener("keyup", function(){
          optizizeFunction();
          
});



let counting = 0;

const getDataFormApi = ()=>{
          console.log("Getting Data...." , counting++);      
};


const debounceMethod = function(fn, dealy){
          let timer;
         return function(){
          clearTimeout(timer);
          timer = setTimeout(()=>{
                    fn.apply(this, arguments);
          },dealy);
         };
};

const optizizeFunction = debounceMethod(getDataFormApi, 1000);