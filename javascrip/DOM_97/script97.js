/* 

var promise = new Promise((resolve, reject)=>{
          
          const sum = 1 + 1;
          if(sum == 2){
                   resolve("success");
          }
          else{
                    reject("error")
          }
});


promise
.then((msg)=>{
          console.log(msg);
          
})
.catch((error)=>{
          console.error(error);
         
          
}); */





/* 


// promise using addeventlisterner




const button = document.querySelector("button");

function addEventPromise(element, method){
          return new Promise((resolve, reject)=>{
                    element.addEventListener(method, resolve);
          });
};



addEventPromise(button, "click").then((e)=>{
          console.log("hello now im experience person in web developer");
          console.log(e);
          
}) */


 /* 

console.log(Promise.resolve("good"));

Promise.all([Promise.resolve("Good"),Promise.reject("Error"),Promise.resolve("Good")])
.then((msg)=>{
          console.log(msg);       
})
.catch((error)=>{
          console.error(error);
})

  
Promise.any([Promise.reject("Working good"),Promise.reject("error"),Promise.resolve("Not Working")])
.then((msg)=>{
          console.log(msg);
          
})
.catch((error)=>{
          console.log(error);
          
})

 */



/* 

Promise.race([Promise.reject("Good rejected"),Promise.resolve("Good resolve")])
.then((msg)=>{
          console.log(msg);
          
})

.catch((error)=>{
          console.log(error); 
          
}) */



          
          fetch("https://fakestoreapi.com/products/").
          then((response)=> response.json())
          .then((data)=>{
                    console.log(data);
                    
          })
          .catch((err)=>{
                    console.log(err);
                    
          })