

/*   async function welcome(){
          return "Hello World";

    }

    console.log(welcome());
    
    welcome()
    .then((msg)=>{
          console.log(msg);
          
    }).catch((err)=>{
          console.error(err);
          
    });
 */

    //----------------------------------------------------------------











// fetching data using async and await
/* 




    async function getData(){

          let blogPost = new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                              resolve("Blog Post");
                    }, 2000 );
          });


          let blogCommand = new Promise((resolve, reject)=>{
                    setTimeout(()=>{
                              resolve("comments Blog")

                    }, 8000);
          });


          console.log("Fetching Post.....");

          let post = await blogPost;
          console.log("Post : " , post);
          
          console.log("Fetching Command......");

          let command = await blogCommand;
          console.log("Command : ", command);
          
          return [post, command];
          
    };


console.log("Welcome to Blog Post");

let data = getData();


data.then((value)=>{
          console.log(value);
          
}).catch((error)=>{
          console.log(error);
          
})

 */


//---------------------------------------------------------------------------


let result = function(marks){
      return new Promise(function(resolve,reject){
            console.log(" Calculating a Result");
            setTimeout(()=>{
                  let total = 0;
                  let result = "Pass"
                  
                  marks.forEach((mark)=>{
                        total += mark;

                        if(mark <35){
                              result = "Fail";
                        }

                  });

                  resolve({total: total, result: result});

            } , 2000);
            

      });

};



let grade = function (response) {
      return new Promise(function(resolve,reject){

            if(response.result == "Pass"){
              let avg= response.total/3;
              let gradeText = "Grade D"
              if(avg >=90 && avg <=100){
                  gradeText = "Grade A"
              }else if(avg >=80 && avg <=89){
                  gradeText = "Grade B"
              }
              else if(avg >=70 && avg <=79){
                  gradeText = "Grade C";
              }
             resolve(gradeText);


            }
            else{
                  console.log("You Failed");
                  
                  
            }
      })
};

/* result([98,99,9])
.then((value)=>{
      console.log("Total : " , value.total);
      console.log("result : ", value.result);
      return grade(value);    
})
.then((data)=>{
      console.log(data);
      
}).catch((err)=>{
      console.log(err);
      
}) */

      async function getResults(){
            try {
                  const value = await result([98,98,98]);
                  console.log("Total : ", value.total);
                  console.log("Result : ", value.result);
                  const gradeText = await grade(value);
                  console.log(gradeText);

                } catch (error) {
                  console.log(error);
                  
                  
            }
      }

     getResults();