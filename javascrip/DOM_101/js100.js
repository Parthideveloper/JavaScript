//Map Object in Javascript


const userMap = new Map();

// Add element to the Map

userMap.set("name","ParthiBan");
userMap.set("age", 25);
userMap.set("city", "salem");
userMap.set("country", "india");
userMap.set("contact", 9080496471);


// printing Map Object

console.log(userMap);  

//update the value for 'age'
userMap.set("age", 98);

console.log(userMap);


userMap.set("city", "Chennai");

console.log(userMap);


//Map Size


console.log("Map Size :", userMap.size);

//Delete Key

console.log("Before Delete : ", userMap);

userMap.delete("country")

console.log(userMap);


// Clear method

userMap.clear();
console.log("After Clear : ", userMap);


//get method

console.log(userMap.get("name"));
console.log(userMap.get("age"));


// has method
console.log(userMap.has("name"));
console.log(userMap.has("country"));


// keys and values
// Iterating Map with for ...of

for(const[Key,value]of userMap){
          console.log(`${Key}  = ${value}`);
          
}

//keys

for(const[key]of userMap){
          console.log(`${key}`);       
}


//values


for(const value of userMap.values()){
          console.log(value);
          
}


// entries()

for(const [key,value] of userMap.entries()){
          console.log(`${key} - ${value}`);
          
}


// forEach() method 


userMap.forEach((key, value)=>{
          console.log(`${key} -- ${value}`);
          
})

// Relation with Array object

const arr = [
          ["key1", "value1"],
          ["key2", "value2"],
];

const myMap = new Map(arr);

console.log(myMap);

console.log(myMap.get("key1"));  // value1


//Map object to Array

console.log(Array.from(myMap));

// spread


console.log(...myMap);

console.log(Array.from(myMap.keys()));
console.log(Array.from(myMap.values()));





 
// Dont do this map


const wrongMap = new Map();

console.log(wrongMap);
 
wrongMap["key1"] = "Data1";
wrongMap["key2"] = " Data2" 

console.log(wrongMap);
console.log(wrongMap.has("key1")); //false




const correctMap = new Map();
correctMap.set("key1", "data1");
correctMap.set("key2", "data2");

console.log(correctMap);
console.log(correctMap.has("key1"));

// Using NaN as Map keys

console.log(Number("Ramji"));

const myMaps = new Map();

myMaps.set(NaN, "Not a Number");


console.log(myMap.get(NaN));




// Map can be merged with Arrays

const first = new Map([
          [1, "one"],
          [2, "two"],
          [3, "three"],
]);

const second = new Map([
          [1,"first"],
          [2, "second"]
]);



const mergedMap  = new Map (([...first, ...second ,
          [1, "1st"]]
))


console.log(mergedMap);

console.log(mergedMap.get(1));
console.log(mergedMap.get(2));
console.log(mergedMap.get(3));


// 1. Counting the Frequency of words in a string  interview question



const sentence = "Fear leads to anger anger leads to hatered hatred leads to conflict parthiban web developer and software developer";


const words = sentence.split(" ");

const wordFrequency = new Map();

for(let word of words){
          if(wordFrequency.has(word)){

                    wordFrequency.set(word, wordFrequency.get(word) +1 );
          }else{
                    wordFrequency.set(word, 1)
          }
}


console.log(wordFrequency);


// 2. Grouping objects by a property


const people = [
          { name: "Raja" , age: 30},
          { name: "Sara", age: 32},
          { name: "parthiban",age:31},
          { name: "Suresh", age:30},
          { name: "Sunder",age:22}
];

const peopleByAge = new Map();

for(let person of people){
          const age = person.age;
          if(peopleByAge.has(age)){
                    peopleByAge.get(age).push(person);
          }

          else{
                    peopleByAge.set(age, [person]);
          }
          
};

console.log(peopleByAge);


// 3. Implementing a Frequency counter

