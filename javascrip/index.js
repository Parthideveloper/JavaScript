//string
myVariable = "codebyparthi";
console.log(myVariable.length);
console.log(myVariable.charAt(4));
console.log(myVariable.indexOf("by"));
// string method
console.log(myVariable.toUpperCase());
console.log(myVariable.toLowerCase());

//string includes method

console.log(myVariable.includes("parthi"));

// string split method
console.log(myVariable.split("b"));
console.log("subscribe my channel".split("my"));
console.log("subscribe my channel".split(""));

//functions

function samsung() {
  console.log("samsung");
}
samsung()

function redmi() {
  console.log("redmi");
}
redmi();
function iphone() {
  console.log("iphone");

}
iphone()


// exercies sum
var a = 10;
var b = 20;
function add() {
  console.log(a + b);
}
add();

var c = 5;
var d = 7;

function add() {
  var sum = c + d;
  console.log("this addition of" + c + "and" + d + "is:=" + sum)
}
add();



var factor = "vijay";
var fplayer = "dhoni";
var fmovie = "manjumal boys";



function favourite() {
  console.log("favourite Actor:" + factor);
  console.log("favourite fplayer:" + fplayer);
  console.log("favourite fmovie:" + fmovie);
}
favourite();

// parameter functions

function add(a, b) {
  console.log(a + b)
}
add(20, 40);


function area(l, b) {
  console.log(l * b)
}
area(20, 20);

//return function

function myName() {
  return "Parthiban"
}
var a = myName();
console.log(a);


function addd(x, y) {
  return 320 + 330;
}
var a = addd();
console.log(a);


// if else condition

var rain = false

if (rain) {
  console.log("bring umbrella")
}
else {
  console.log("no need to bring umbrella")
}


var homework = true

if (homework) {
  console.log("Great job do it!")
}
else {
  console.log("enjoy")
}


var cookie = false
if (cookie) {
  console.log("would you like a cookie?")
}
else {
  console.log("Time to bake more cookies")
}


//logical AND(&&), OR(||) , NOT(!)

var color = "red"

if (color == "red") {
  console.log("Wait");
}
if (color == "yello") {
  console.log("ready to go")
}
if (color == "Green") {
  console.log("Go")
}


var season = "autumn"

if (season == "spring") {
  console.log("Enjoy the blooimg flowers");
}

else if (season == "summer") {
  console.log("have fun in the sun");
}

else if (season == "autumn") {
  console.log("Admire the colorul leaves");
}

else if (season == "winter") {
  console.log("Bundle up and stay warm");
}


////////


var score = 69

if (score <= 50) {
  console.log("you need to improve")
}

if (score >= 51 && score <= 70) {
  console.log("Good Job")
}
if (score <= 100) {
  console.log("your great")
}






/// ------------jutor joes stanly----------------

console.log("-------------------");

console.log([33, 33, 334, 343, 3,]);
console.table({ fname: 'parthi', age: '25' });
console.error("sample error");
console.warn("warning");
//console.clear();

console.time("Timer");
for (i = 0; i <= 100; i++) {
  console.log(i);
}
console.timeEnd("Timer");



// var let const

//var  1997
if (true) {
  const msg = 'welcome da mapla'
  console.log(msg);
}





const student = { 'name': "ram", "age": 12 };
console.table(student);
student.name = "parthi";
console.table(student);




             // data type in javascript
            /*  js dynamic programming  
            
            javascript is dynamic programming language


            Number eg: 1.25, 35
            string
            boolean eg: true:false
            null
            undefinded
            symbols e6
            array
            object literals
            data
                 
            
            */






var d = new Date(); // current date and time 
console.log(typeof d);
console.log(d);


// type conversion

a = 25;
console.log(a, typeof a);
a = a.toString();
console.log(a, typeof a);

a = true;
console.log(a, typeof a);
a = String(a);
console.log(a, typeof a);

a = new Date();
console.log(a, typeof a);
a = String(a);
console.log(a, typeof (a));

//  string to number

var course = ['c', 'c++', 'c#', 'java'];
var fstudent = {
  'name': 'joes',

}
console.log(typeof course);







// type coercion

let x = "25";
let y = 75;
console.log(x + y);
x = Number(x);
console.log(x + y);


// Arithmetic operation

var a = 100;
var b = 20;
var c;
c = a + b;
c = a - b;
c = a * b;
c = a / b;
c = a % b;
c = 2 ** 3;
c = ++a;
c = --b;
console.log(c)


// aerthi metric operators Assigment operators


var a = 55;

// a = a+5; // shot of +=
a += 5;
a -= 10;
a *= 2;
a /= 2;
a %= 5;

console.log(a);



//comparison operators


var a = 100;
var b = "200";

console.log(a === b); // == , === , !=

console.log(a == b);

console.log(a != b); // not equal check both is not equal


// Relational Operation in Javascript

/*    >Greater than 
      < less than
      >= Greater than or equal to
      <= less than or equal to
*/


var a = 10;
var b = 20;

console.log("Greater than :", a > b);
console.log("Less than :", a < b);
console.log("Greater than or Equal to :", a >= b);
console.log("Greater than or Equal to :", a <= b);






//  Logical operators in javascript

/*   
    && logical and
    || logical or
    ! logical not
*/

var mark = 44; // &&
console.log(mark >= 35 && mark <= 100);


var a = 10; // ||

console.log(a == 1 || a == 8);

a = false; // !
console.log(!a);


// condition or ternary operator(?!)


var age = 34;
var result = age >= 18 ? "Eligible" : "not eligible";
console.log(result);


//handling null values 

//------------------------------------------------------------------------------------------
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
const iterator = colors.keys();
for (const key of iterator) {
  console.log(`${key}: ${colors[key]}`);
};
const newcolors = colors.reverse();

console.log(newcolors);


console.log("Hello world");

//---------------------------------------------------------

// Array Concept 


let favColors = ["red", "white", " Black"] // Empty array

// {} object
// [] array squre bracket empty array
favColors[4] = "green";
console.log(favColors[1]);
console.log(favColors);

console.log(typeof favColors);
console.log(favColors.length);


// functions ============================================

//#region 

function GreetUser(){
  let name = "parthi";
  let msg = "Hello my name is "+ name + " im learning in javascript!";

console.log(msg);
}
GreetUser();

function Green(firstName, lastName){
  let message = "hello " + firstName + " "+ lastName + " Im doing JavaScript!";
  console.log(message);
}
Green("parthi", "ban");


function add(number1 , number2)
{
  console.log(number1 + number2);
}

add(23, 22)

//#endregion


// javascript Operators
// + - * / % ++ -- += -= *= /= %=
// == === != !== > < >= <=
// && || !
// variable + operators = Expression(Algorithm)
// Arithmetic Operators
// Comparison Operators
// Assignment Operators
// Logical Operators
// Bitwise Operators
// Equality Operators  === , !==

// string comparison

console.log('p' < 'a'); // dictionary

// comparsion of different type

console.log('1'<5);
console.log(true == 0); // 1-true, 2-false

// strict Equality Operator(Datatype + value is same) 
console.log("strict Equality operators");
console.log(1 === 1); // Number === Number,  ot= true
console.log('1' === 1); // string === Number, ot = false

// lose Equality Operator
console.log("loss Equality operator")
console.log(1 == 1); // number == number
console.log('1' == '1'); // string == string
console.log(true == '1'); // bolean == string



// ---------------Ternary operators--------------
// task if person's age is more than 18, they are 'Adult' category otherwise, they are a 'child' category
// if , else alternative using this method ? : 
let age1 = 18;
let type = age1 >=18 ? "Adult Ticket" : "Child Ticket" // condition ? 'value1' : 'value2' 
console.log(type);



// -------------Logical Operators---------------

// logical AND (&&)
// Returns TRUE if both Operands are TRUE, same 
console.log(false && false);


// logical OR (||)
// returns TRUE if anyone Operands are TRUE\
console.log(false || true);

// logical NOT (!)

console.log(!true);


//task 
// highIncome, CIBILSCORE -> Loan Eligible, Ineligible

// ---------------BITWISE OPERATORS------------





// -----------*OPERATOR PRECEDENCE*--------------


//------------condition operators----------------

/*
let weather = "hot";

if(weather === "cold"){
  console.log("weather is cold!");
}
else{
  console.log("weather is hot!");
}

-------------------------------

let isRaining  = false;
let isCloudy = true;

if(isRaining || isCloudy){
      console.log("Dont forget to take umbrella");
}
else{
      console.log("Sky is normal! Enjoy the Weather!");
    }


*/

// exercise
// If hour is between 12AM(0) TO 1PM(13) --- Good Morning 

// Else if hour is between 1PM(13) TO 5PM(17) -- Good Afternoon

// Else hour is between 5PM(17) To 12AM(0) -- Good Evening







let hour = new Date().getHours;


if (hour >=0 && hours <=13){
  console.log("Good Morning");
}
else if(hour>=13 && hour<= 17){
  console.log("Good Afternoon");
}
else{
  console.log("Good Evening");
}



//----------Switch Case-----------------

//#region  switch case

let grade = "S"
switch(grade){
  case "S":      
    case "s":  // DOUBLE CASE USE
    console.log("supper Grade");
    break;
    case "A":
      console.log("Excellent Grade");
      break;
      case "E":
      console.log("Just Pass");
      break;
      default:
        console.log("UnKnown Grade");
}

//#endregion

// TASK mark

let marks = 33 ;

switch (true){
  case marks > 50:
    console.log("Pass");
    break;
    case marks > 90:
      console.log("Excellent");
      break;
      case marks <50:
        console.log("Failed!");
        break;
        default : 
        console.log("Unknown mark");
}

// task 
//Example: Mobile buying suggestion
// If given saving amount is >10k Buy Android Mobile
// Else if given amount is >60k Buy iphone Mobile
// Else if given amount is >5 && <10 Buy Basic Mobile 
// Else Print "You can't afford mobile phone now"


let amount = 3;

switch (true) {

  case amount >= 60 :
      console.log("Buy iphone Mobile");
      break;


  case amount >=10 :
    console.log("Buy Android Mobile");
    break;

    

      case amount >5 && amount <10 :
        console.log("Buy a Basic Mobile");
        break;

  default:
    console.log("You can't afford mobile phone now!");
    break;
}
//region loop
// -----------------JAVASCRIPT LOOPS-------------
// 1. for loop
// 2. while loop
// 3. Do while loop
// 4. For-in-loop
// 5. For-of-loop
 
/* for(initialExpression; Condition; step){
  console.log("")
} */


  // for(let i = 1; i<=5; i++){
  //   console.log("Number " + i);
  // }

//odd number loop
 
// for(let i = 1; i<=10; i++){
//   if(i%2 !== 0){
//     console.log("odd Number " + i);
//   }
// }
  
// for(let i = 10; i>=1; i--){
//   if(i%2 !== 0){
//     console.log("odd Number " + i);
//   }
// }
  
//-------- while loop
//   let i = 10;
// while( i>=1){
//   if(i%2 !==0){
//     console.log(i);
//   }
//   i--;
// }


// let i = 10;
// while (i >= 1) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i--;
// }
//-------------------------------------------------------------------------------------------------------
//-------do while 

//-------------------------------------------------------
// for-in 
// for-of

const  people1 = {       // objects
  name : 'Parthiban',
  age : 25,
  Gender : 'Male',
  location : 'chennai'
};

for(let key in people1){
  console.log(key + " : ", people1[key]);
}

var colors1 = ['Red','Blue', 'Green']; 

for(var key in colors1){     // for-in method
  console.log(colors1);
}

for(var colors1 of colors1){ // for-of method
  console.log(colors1);
}
//----------------------------------------------
// free infinity loops
// for(;;){
//   console.log("this is infinite loop!");
// }
//---------------------------------------------------


// variable to Object

// var name = 'parthiban';
// var age = 25;
// var interest = ['Creating, Technical a  new thing'];

// var address = {
//   city : "chennai",
//   state : "TamilNadu"
// }

// function Greeting(){
//   var msg = `my name is ${name} i lve coading my age is ${age} and my interest is ${interest}`;
  
//   console.log(msg);
// }

// Greeting();



// Object-Oriented Programming (oop)

var person = {
  name : 'parthiban',
  age : 25,
  interest: ['Creating, Technical a  new thing'],
  isAlive : true,
  address : {
      city : "chennai",
      state : "TamilNadu"
    }
}


//-------------- factory functions--------------


function createperson(name){
  return{
    name : name,
    greeting: function(){
      let msg =  `my name is ${this.name}`;
      console.log(msg);
    }
  };
}

let parthi = createperson("parthi");
let trisha = createperson("Trisha");

parthi.greeting();
trisha.greeting();


// ------------------------dynamic object-------------------

const person01 = {
  name : "Parthiban"
}

person01.age = 25;
person01.Gender = 'male';
person01.hour = 24;


delete person01.age;
delete person01.Gender;
console.log(person01);

// ----- condtion or ternary operator(?!)-----

const qage = 18;

const qresult =  qage>=18?"Eligible":"Not Eligible";
console.log(qresult);

// handling null values

function welcome (name){
  const presult = name?name:"no name";
  console.log("Welcome "+ presult);
}
welcome();
welcome(null);
welcome('parthiban');

//object type

user = {'name':'parthiban', 'age':25};
console.log(user);
console.log(user.name);

const greet =(user) =>{
  const name = user.name?user.name: "no name"
  return "Hello "+ name;
}

console.log(greet(user));

// conditional Chains 

/*
avg >=90 A Grade
avg >=80 B Grade
C Grade
*/


const avg = 85;
const Grade = avg>=90? "A Grade" :  avg>=80? "B Grade" : "C Grade";

console.log("Grade : " , Grade);




// NUllish coalescing operator (??)

var a = null??'no value';
console.log(a);

var b = null??33;
console.log(b);

//??=

var user = {'name': 'Parthi'};
console.log(user);
console.log(user.name);

user.city??='chennai';
console.log(user.city);
console.table(user);

//--------------------------------- if, else statement 
//

// var age = prompt("Enter your Age");
// if (age!=null && age>=18){
//   console.log("your Eligible");
// }
// else{
//   console.log("your not eligibe");
// }

// ---------------else if

// example 1

// var number = prompt("Enter you value");

// if(number<0){
//   console.log(number+" is negative number");
// }
// else if(number>0){
//   console.log(number+" is positive number");
// }
// else{
//   console.log("Given number is zero");
// }

// example 2

// var mark = prompt("enter you mark");

// if(mark >=90 && mark <=100){

//   console.log(" your grade is A" + mark );
// }

// else if(mark >=80 && mark <=89){

//   console.log(" your grade is B " + mark );
// }

// else if(mark >=70 && mark <=79){

//   console.log(" your grade is C" + mark );
// }

// else
// {
//   console.log(" your grade is D : "+ mark);
// }


// Nested If Condition

// let english= parseFloat(prompt("Enter English Mark")), 
// tamil = parseFloat(prompt("Enter Tamil Mark")),
// maths = parseFloat(prompt("Enter Maths Mark")),
// total = english+tamil+maths;
// Avg = total/3;

// console.table("Tamil mark :"+tamil);
// console.table("English mark :"+english);
// console.table("maths mark :"+maths);
// console.table("Total : "+ total);
// console.table("Average : "+ Avg.toFixed(2));

// if(english>=35 && tamil>=35 && maths>=35)
//   {
//   console.table("Result : PASS");

//   if(Avg>90 && Avg <=100){
//     console.log("Grade : A Grade");
//   }
//   else if(Avg>80 && Avg<=90){
//     console.log("Grade : B Grade");
//   }
//   else if(Avg>70 && Avg<=80){
//     console.log("Grade : C Grade");
//   }
// else{
//   console.table("Result : Fails");
//   console.table("Grade : NO GRADE");
// }
//   }

//---- switch case----------
 
let num = 2;

switch (num) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("Two");
    break;
  case 3:
    console.log("Three");
    break;
  case 4:
    console.log("Four");
    break;

  default:
    console.log("Invalid input");
    break;
}

// switch case combining cases statement

let letter = 'O';

switch (letter) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log( letter + " Its a VOWEL");
    break;

  default:
    console.log("its not VOWEL");
    break;
}


// while looping

var i = 1;  // initialsation i = 1;
while (i<=10) {
  console.log(i);
  i++;
}

//---------------- do while ----------------
/*do{
  code to be executed if the condition is true
}
while(conditon);
*/

var table = 2; limit=10; i=1;

do{
  console.log(table + "X" + i + " = "+(table*i));
  i++;
}
while (i<=limit);

// -------for loop------------


for(let i=1; i<=10; i++){
  console.log(i);
}


let arr=[]; // index add array
for (let i = 0; i<100; i+=3) {
  arr.push(i);
}
console.table(arr);
console.table(arr[5]);

//---Nested for loop------

let nums = [];
for (let i = 0; i<3; i++){
  nums.push([])
  for (let j=0; j<3; j++){
    nums[i].push(j);

  }
}
console.log(nums);
console.table(nums);


// ---------(for of) loop----------

var names = ["tyya", "Ramji", "samji", "umhiji", "kumkumji"];
for( var i=0; i<names.length; i++){
  console.log(names[i]);
}


console.log("For loop :  ");
for (let name of names){
  console.log(name);
}

// ----------------(for in) loop------------

let user1 = {
  name: "tyya",
  age: 25,
  city: "Ahmedabad",
  country: "India"
  };

  // for( let prop in user){
  //   console.log(prop + " : " + user[prop ]);
  // }

//----Looping over objects by converting to an array
let arr_keys = Object.keys(user1);
console.table(arr_keys);

let arr_values = Object.values(user1);
console.table(arr_values);

for( let i=0; i<arr_keys.length; i++){
  console.log(arr_keys[i] + " : "+ arr_values[i]);

}


//-------Break in JavaScript------------

for(let i=1; i<=10; i++){
  console.log(i);
  if(i ==5){
    break;
  }
}

// -------------Continue in Javascript----------

for(let i=1; i<=10; i++){
  if(i%2==0){
    continue;
  }
  console.log(i);
}

//------math function--------
 
var q;
q= Math.PI;
q= Math.round(4.3);
console.log(q);


//-------------string function method in javasct----------

let first_name = "Parthi";
let last_name = "ban";

//concatenation
let g = first_name+" "+last_name;
console.log(" Concatenation : " + g);


//concat

g=first_name.concat(' ', last_name);
console.log("Concat : "+ g);

//Append
m = "tutor";
m+= "Joes";
console.log("Append : "+ m);

//Escaping

j = ' he can\'t run';
console.log("Escaping :" + j);

//length

var c = first_name.length;
console.log("Length : " + c);

// String toUpperCase
var d = first_name.toUpperCase();
console.log("UpperCase : "+ d);

var f = last_name.toLowerCase();
console.log("LowerCase : "+ f);


//IndexOf

I = first_name.indexOf('t');
console.log("IndexOf : "+ I);
I = last_name.lastIndexOf('b');
console.log("LastIndexOf : "+ I);

//charAt()
 
I = first_name.charAt(2);
console.log("charAt : "+ I);
 
// charCodeAt
I = first_name.charCodeAt(2); // printAsky values
console.log("charcodeAt : "+ I);

// substring

let text = "01234567890";

c = text.substring(0,4);
console.log("Substring : "+ c);

c = text.substring(4);
console.log("Substring : "+ c);

c = text.substring(4,0);
console.log("Substring : "+ c); //op : 0123

c = text.substring(25,30);
console.log("Substring Invalid Length :" + c);  //op invalid nothing op


// ---------slice--------


c= text.slice(2,4); //index, value  <---( second index 4th value )
console.log("Slice : "+ c); // output 23

c= text.slice(4,2);
console.log("Slice : "+ c); // output: nothing

c= text.slice(34,44);
console.log("Slice : "+ c);  // output: nothing

c= text.slice(-3);
console.log("Slice : "+ c); // output: 890

//----------split in javascript--------------

let ab = "Tutor Joes Computer Education";

sp = ab.split(",");

console.log("split :" + ab);
console.table(ab);

// ---------------------replace------------------------

 var a = "I am from Thiruvanamalai";

console.log("Befor Replace : "+ a); // op: Befor Replace : I am from Thiruvanamalai


c = a.replace('Thiruvanamalai' , 'Chennai');

 console.log("After Replace : " + c); //op: After Replace : I am from Chennai


 //------Includes() functions---------------------

 var pets = ['cat', 'dog', 'cow'];
console.log(pets.includes('cat')); //op : true
console.log(pets.includes('rat')); //op: false


//------trim in js--------------
//remove unwanted space

var a = " parthi ";
console.log(a.length); 

a = a.trim();
console.log(a.length); // op: 6


//------------padStart padEnd-------------


a = "5";
a = a.padStart(4,0);
console.log(a); //op: 0005

a="5";
a = a.padStart(4,'$');
console.log(a); //op: $$$5

a="5";
a= a.padEnd(4,0);
console.log(a); //op: 5000

a="5";
a = a.padEnd(4,'$');
console.log(a); //op: 5$$$

//-----Long literal string in js-----------

//method 1
let longstring1 = "A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116)." + " Length and appearance do not determine whether a section in a paper is a paragraph." + " For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long"

console.log(longstring1);

let longstring2 = "A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116).\Length and appearance do not determine whether a section in a paper is a paragraph.\For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long"
console.log(longstring2);

//------strin.fromcharCode()----------

// ascii values (American Standard Code for Information Interchange)

console.log(String.fromCharCode(65,66,67,68)); //op: ABCD



// #region Function in javascript

function add(a,b) {
  return a+b;
}
console.log(add(5,6)); //op: 11
console.log(add(33,88)); //op: 121

//#endregion Function in javascript

// #region Function with Arbitrary arguments in javascript


function sum() {
    let total = 0;
    for (let i=0; i<arguments.length; i++){
      total += arguments[i]; //total = total+arguments[i]
    }
    return total;
}

console.log(sum(22,2,45,98)); //op : 167
console.log(sum(22,2,45,98,33,22)); // op: 222


// spread operation 
function total(...spread) {
  let total = 0;
  for(let i = 0; i<spread.length; i++){
    total += spread[i];
  }
  return total;
}
console.log(total(22,2,45,98)); //op:167;

console.log(total(22,2,45,98,33,22)); // op: 222

//#endregion Function



// #region Function as Expression in Js


const expression = function sayhello()
{
  console.log("Hello World from expression");
}
expression();

//#endregion Function as Expression in js

// #region Function as Anonymous function in Js

const Anonymous = function sayhello()
{
  console.log(" Anonymous");
}
Anonymous();

//#endregion Function as Anonymous in js

// #region Function as Arrow function in Js


// arrow function single Argument

const squre = (x) =>{
  return x * x;

};
const resultarrow = squre(2);
console.log(resultarrow);



// arrow functions or fat arrow functions  

// note: Arriw fynctions do not have their wn this.value. The value of this inside an arrow function remains the same throughtout the lifecycle of the function and is always equal to the value of this in the closest non-arrow parent function. This makes them unsuitable for ethods( functions defined inside objects) if you plan to use this to access the object's properties.


var add=(a,b)=>{
  return a+b
}
console.log(add(25,35));

// 1. using arrow functions with MAP()

let number = [1,2,3,4,5,6];
console.log(number);
let double = number.map(number=> number*2);
console.log(double);

// 2. using arrow function with Filter();

let words = ['apple','banana','orange','grape'];
console.log(words);

let checkwords = words.filter(words=>words.length>5);
console.log(checkwords);

// 3. Using arrow functions with reduce();

console.log(number);
var total = number.reduce((sum,number)=>sum+number,0);
console.log(total);

//4. Using arrow function to create a closure

let createcounter = ()=>{
  let count = 0;
  return ()=>{
    count++;
    return count;

  }
};


let counter = createcounter();
console.log(counter()); //output: 1
console.log(counter()); //output: 2
console.log(counter()); //output: 3
console.log(counter()); //output: 4
console.log(counter()); //output: 5

const per = {
  firstname : "Parthiban",
  lastname : "Ganesan",

  getname :()=> {
    return per.firstname+ " " + per.lastname;
  },

  };
  console.log(per.getname());
  

// callback function


function callbackfunction(){
  console.log("callback function called");
}

function higherorderfunction(callbackfunction){
  callbackfunction();
}

higherorderfunction(callbackfunction);

// setTimeout(function,1000)

// setTimeout(function(){
//   console.log("its setTimeout functions");
// },3000);

// setInterval

// setInterval(function(){
//   console.log("its setInterval functions");
// }, 3000);

// callback foreach function
const number0 = [1,2,3,4,5,6,7,8,9];
number0.forEach(function(number0){
  console.log(number0);
})

// javascript scope, block scope , function scope

if(true){
  let blockScoperVariable = 'Im in variable with block scope';
  console.log(blockScoperVariable);
}

// function scope

function myfunctionscope(){
  let functionScopeVariable = 'my function scope variable';
  console.log(functionScopeVariable);
  function add(){  // nested function

    console.log(functionScopeVariable);

  }
  
}
myfunctionscope();

// what is array ?

let numa = [10,20,30,40,50,60,70,80,90,100];

console.table(numa);
console.table(numa[1]);


let numb = new Array(10,29,304,203);
console.table(numb);

let numc = new Array("parthi", 25, true,{
  m1:100, m2:75, m3:50
});

console.table(numc);


//#region forEach method


// js foreach array

var numberforEach = [1,3,4.5,2,1,36,665,4];

// value,index,array this is parameters value is compalosory

numberforEach.forEach((value)=>{
  console.log(value);
});


numberforEach.forEach((value,index)=>
{
  console.log("Index : "+ index +" "+ "Value :"+ value
  );
 
});


var users = [
  {full_name: "Ram", age:12,city: "Salem",
  salary:10000},
  {full_name: "Sam", age:15,city: "Chennai",
  salary: 10500},
  {full_name: "Ravi", age: 22,
  city: "Namakkal", salary: 12000},
  {full_name: "Joes", age: 18, city: "Hosur",
  salary:6000},
  {full_name: "Aureen", age: 47,
  city: "Dharmapuri", salary: 10000},
  {full_name: "Stanley", age:10,
  city: "Salem", salary:8000},
  ];

  console.table(users);

users.forEach((value)=>{
  console.log(value.full_name );
})


// Exploring the forEach method in JavaScript

// 1. Example of using the forEach method to print each elemetn of an Array

const Fruits = ['Apple', 'Banana','Cherry', 'Orange','manogo'];
console.log(Fruits);
Fruits.forEach(Fruits=>console.log(Fruits));


//2. Example of using the forEach method to sum all elements of an array


var numberf = [1,2,3,4,5,6,7,8,9];

var total = 0;

numberf.forEach(numberf=>{
  total += numberf;
})
console.log(total);


// 3. Example of using the forEach method to create a new array from an existing one
var doubleNumber = [];
numberf.forEach(numberf=>{
  doubleNumber.push(numberf*2); //using push function
});
console.log(doubleNumber);

//4. Example of using the forEach method to find the [max element of an array]

console.log(numberf);
var max = numberf[0];
numberf.forEach(numberf=>{
  if (numberf>max) {
    max = numberf; 
    
  }
});
console.log(max);

// 6. Example of using the forEach method to filter an array:
// find odd number only
const number6 = [43,5,53,2,456,876,666,576,44,32,234,565,98,879,];

const evenNumber = [];
number6.forEach(number6=>{
  if(number6%2==0){ 
    evenNumber.push(number6);
  }

});
console.table(evenNumber);

// 7. forEach method using uppercase
const nameg = ['oarth', 'apa', 'ndjdjg', 'dgdfd'];
nameg.forEach((name,index)=>{
  nameg[index] = name.toUpperCase();
});

console.log(nameg);

//8. ForEach method remove elements from an array

const number8 = [1,2,3,4,5,6,7,8,9,10];
number8.forEach((number,index)=>{
  if(number>5){
    number8.splice(index,3);
  }
});
console.log(number8);


//9. forEach method using check if an elements exists in an array

const fruit =  ['apple', 'banana', 'cherry'];

let exists = false;
fruit.forEach(fruit=>{
  if(fruit === 'applle'){
    exists = true;
  }
});
console.log(exists);


//10. forEach method to check concat array element

const word10 = ["hello", "world"];
let concat = "";
word10.forEach(word=>{
  concat += word+ " ";
});
console.log(concat);



//#endregion forEach method






//#region MAP

//-------------------------------------map method---------------------------------------

const  numbers = [1,2,3,45,6];

const squres = numbers.map(number=>
  number*2
);

console.log(squres);

const numbers1 = [1,2,3,4,5,6,7,89,9];

// map(value, index, array)

let sqrt = numbers1.map((value)=>{ // value paramaters
  return  Math.sqrt(value);
});
console.table(sqrt);


const userss = [
  {name: 'john', age:16, city: 'chennai', salary: 120333},
  {name: 'parthi' , age:15, city: 'thiruchy', salary:12000},
  {name: 'rahgai', age: 23, city: 'chennai', salary: 400020}, 
  {name:'ban', age: 25, city: 'chengalpatu', salary: 120494},
  {name: 'ram', age: 17, city: 'chennai', salary: 392000 },
  {name: 'hari', age: 25, city: 'villivakkam', salary: 120000},
  {name: 'palani', age: 19, city: 'palani', salary:900000}
];

var Eligible_status = userss.map((user)=>({
  // name:userss.name,
  // age:userss.age,
  // city:userss.city,
  // salary:userss.salary,
  ...user, // this spread operator using easly this method 
  status:user.age>=18?"Eligible": "Not Eligible"
}));

// var Eligible_status = userss.filter
// (person=>person.city == 'chennai' );

console.table(Eligible_status);


// 1. map using number double a nuber values
const double0 = [1,2,3,4,5,6,11,45];
const doubleanumber = double0.map(number=>number*2)
console.log(doubleanumber);

//originalArray.map(current_value,index, orginalArray);

// 2. Modifying array Elements

const wordds = ["hello", "woorld"];
const capitalwords = wordds.map(word=>word.toUpperCase());

console.log(capitalwords);


// 3. combining array using map functions

const fruiti = ['apple', 'Bananna'];
const colouri = ['red', 'yellow'];

const fruiticolouri =  fruiti.map((fruit,index)=> fruit+ "-"+ colouri[index]);
console.log(fruiticolouri);


// 4. filtering an array


const numberss = [1,2,3,4,5,6,7,8];

const evennumberss = numberss.map(num=>num%2===0);
console.log(evennumberss);

//5. Extract properties from an Array of objects

const usersss = [
  {name: 'hookum', age:33, salary:10000},
  {name: 'raghul', age:24, salary:23332},
  {name: 'mapingga', age:22, salary: 92000}
];

const namefind = usersss.map(user=>user.name);
console.table(namefind);

// 6. Modifying an Array of Objects
const updateuserssage = usersss.map(user=>{
  return{
    name:user.name,
    age:user.age+1
  }
 
});

console.table(updateuserssage);

//7. Get currentvalue and index, array


const wordscheck = ['apple','binapple','orange'];

const checkwordss = wordscheck.map(function(currentvalue,index,array){
  return{
    word:currentvalue,
    wordlength: currentvalue.length,
    position: index,
    totalWords: array.length

  };

});

console.table(checkwordss);

//#endregion MAP


//#region FILTER

//-------filter() methods in javascripts-----------

// 1. Filter an Array of Numbers
const numfilter = [10,2,3,4,5,6,7,8,9,10];

const numbfilt = numfilter.filter(num=>num%2===0);
console.table(numbfilt);

// 2. Filter an Array of Objects

const filobj = [
  {name: 'Alice', age: 25 },
{name: 'Bob', age: 45 },
{name: 'Charlie', age: 35 }

];

const filterobj = filobj.filter(fil=>fil.age>30);
console.table(filterobj);

//3. find filter method using 4 letters

const findfilter = ['apple','binapple','orange','banana','mango','pineapple'];

const findfilter4 = findfilter.filter(find=>find.length===5);
console.table(findfilter4);


//4. find category using filter method

const fruitfilter = [
  {name: "Apple", category: "Fruits"},
  {name: "Banana", category: "Fruits"},
  {name: "Carrot", category: "Vegetable"},
  {name: "Orange", category: "Fruits"},
  {name: "Onion", category: "Vegetable"},
  {name: "Mango", category: "Fruits"},
  {name: "Tomoto", category: "Vegetable"},
  {name: "Pineapple", category: "Fruits"},
];

const filterfruit = fruitfilter.filter(filter=>filter.category==="Vegetable");
console.table(filterfruit);


//5. filter method using 1st letters

const wordss = ['apple','binapple','eorange','banana','mango','Epineapple'];


const wordfilter = wordss.filter(word=>word.startsWith('e'));

 console.table(wordfilter);

// 6. multiple 

const product = [
  {name:'Apple', category:'fruit', price:100},
  {name:'Carrot', category:'Vegetable', price:140},
  {name:'Orange', category:'fruit', price:50},
  {name:'Broccoli', category:'Vegetable', price:400},
  {name:'Mango', category:'fruit', price:190},
];
// implementaion multiple conditions
const productfilter = product.filter(pro=>pro.category==='fruit' && pro.price<=150 );
console.table(productfilter);




// 7.filtering array of object based on seach term

const  books = [{
  title: 'The Great Gatsby', author:'parthiban author', year:2020
},
{ title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
{ title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
{ title: 'Learning Web Design: A Beginner\'s Guide to HTML, CSS, JavaScript, and Web Graphics', author: 'Jennifer Niederst Robbins', year: 2012 },
{ title: 'HTML and CSS: Design and Build Websites', author: 'Jon Duckett', year: 2011 },
{ title: 'CSS Secrets: Better Solutions to Everyday Web Design Problems', author: 'Lea Verou', year: 2015 },
{ title: 'JavaScript and JQuery: Interactive Front-End Web Development', author: 'Jon Duckett', year: 2014 },
{ title: 'You Don\'t Know JS', author: 'Kyle Simpson', year: '2014-2019' },
{ title: 'React: Up html & Running', author: 'Stoyan Stefanov', year: 2016 },
{ title: 'Node.js Design Patterns', author: 'Mario Casciaro', year: 2014 },
{ title: 'Head First Design Patterns', author: 'Eric Freeman and Elisabeth Robson', year: 2004 }
];


const seaching = 'HTML'.toLowerCase();
const year = 2011;
const searchresult = books.filter(book=>{
  return book.title.toLowerCase().includes(seaching) || book.year===year;
});

console.table(searchresult);
 
//#endregion FILTER



//region Reduce

// Reduce() in javascript

/*  
Reduce() is a method which is used to reduce the array to a single value.
Reduce() method executes a provided function for each value of the array (from left-to-right) and
returns the value returned by the last call of the function.
*/

/* four parameter intial
array.reduce(function(accumulator,currentValue, currentIndex, array){
}, initialValue);

// accmulator : join panni vara value, loop value
// currentValue : current value
// currentIndex : current index
// array : current array
// initialvalue: optional
 */


let numberr = [1,2,3,4,5,6,7,8,9];
let summ = numberr.reduce((accumulator,currentvalue)=>accumulator+currentvalue);

console.log(summ);
 

//2. Flattening an Array

let nestedArray = [[1,2],[3,4],[5,6],[8,9]];

let flattendarray = nestedArray.reduce((accumulator,currentvalue)=> accumulator.concat(currentvalue));
console.log(flattendarray);

//3. finding value of colors


let colorsr = ['red', 'blue', 'green', 'red', 'green','blue','yellow','Red','YellOW'];

colorsr = colorsr.map(col=>col.toLowerCase());


let colorCounter = colorsr.reduce((accumulator, currentvalue)=>{
  if(currentvalue in accumulator){
    accumulator[currentvalue]++;
  }
  else{
    accumulator[currentvalue]=1;
  }
  return accumulator;
},{});

console.table(colorCounter);


// 4. find largest number


let numberl = [10,23,44,56,43,77,688];

let largel = numberl.reduce((accumulator,currentvalue)=>{
  return Math.max(accumulator,currentvalue);
});

console.log(largel); 


//5. store array groupby

let people = [
  { name:'parthiban', age:34, city:'Bengular'},
  { name:'Raja', age:34, city:'Salem'},
  { name:'Sara', age:34, city:'chennai'},
  { name:'Rakesh', age:34, city:'chennai'}
];
 

let Groupbycity  = people.reduce((accumulator,currentvalue)=>{
  if(currentvalue.city in accumulator){
    accumulator[currentvalue.city].push(currentvalue);
  } else{
    accumulator[currentvalue.city] = [currentvalue];
  }
  return accumulator;
},{})

console.log(Groupbycity);

//#region Slice


//slice(start, end)


const numberslice = [1,2,3,4,5,6,7,8,9,0];
 
console.log(numberslice);

console.log("slice : " + numberslice.slice(2));
console.log("slice : " + numberslice.slice(2,9));

//#Endregion slice



//#region SPLICE

/*
splice is to Remove Elements in array It will change original Array

Removed_element = Splice(start, Length, new elements)
*/

const n1 = [1,2,3,4,5,6,7,8,9,10];

console.log("Before splice n1 : " + n1);

let remove_element = n1.splice(2);
console.log(remove_element);
console.log("After splice n1 : " + n1);




const n2 = [1,2,3,4,5,6,7,8,9,10];

console.log("Before splice n2 : " + n2);

let remove_elementn2 = n2.splice(2,2);
console.log(remove_elementn2);
console.log("After splice n2 : " + n2);


const n3 = [1,2,3,4,5,6,7,8,9,10];

const remove_elementn3 =  n3.splice(2,2,36,46) // [36,46]array is add array value in splice method

console.log(remove_elementn3); // 3,2
console.log(n3);


//without remove anything add new value in splice method using

const n4 = [1,2,3,4,5,6,7,8,9,10];

n4.splice(2,0,100,200);

console.log(n4);

//#endregion SPLICE



//#region  Concat


var a = [10,20,30];
var b = [40,50,60];
var c = [70,80,90];


var d = a.concat(b); // 10,20,30,40,50,60
var d = a.concat(b,c); //10,20,30,40,50,60,70,80,90
var d = a.concat(b,c,100,110); //10,20,30,40,50,60,70,80,90,100,110
var d = a.concat(b,c,100,110,['a','b','c','d']); //10,20,30,40,50,60,70,80,90,100,110,'a','b','c','d

console.table(d);

//#endregion



// #region SORT

const sortname = ['parthiban','Angle','zara', 'lungi','jungle'];

sortname.sort();
console.log(sortname); //['Angle', 'jungle', 'lungi', 'parthiban', 'zara']

const sortsum = [10,200,303,304,210,20,13,9,4];

sortsum.sort(function(a,b){      // (a,b)=>{} --arrow functions
  return a-b; // Asc= a-b, Dsc = b-a
});

console.log(sortsum); //[4, 9, 10, 13, 20, 200, 210, 303, 304]

sortsum.sort((a,b)=>{
  return b-a;
});

console.log(sortsum); //[304, 303, 210, 200, 20,13, 10, 9, 4]



const users1 = [ {name: "Ram", age:12,city: "Salem",
  salary:10000},
  {name: "Sam", age:15,city: "Chennai",
  salary: 10500},
  {name: "Ravi", age: 22,
  city: "Namakkal", salary: 12000},
  {name: "Joes", age: 18, city: "Hosur",
  salary:6000},
  {name: "Aureen", age: 47,
  city: "Dharmapuri", salary: 10000},
  {name: "Stanley", age:10,
  city: "Salem", salary:8000},
  ];

  users1.sort((a,b)=>{
    return a.age-b.age; // age asccending order 
  });
   
  users1.sort((a,b)=>{ // name ascending order
    if(a.name>b.name) return 1;
    if(a.name<b.name) return-1;
    return 0;
  });
  console.table(users1);
// #endregion 

//#region Fill

// fill(value,start,end)

const fillmethod = [1,2,3,4,5,6];

console.log("Before Fill :" + fillmethod);

// fillmethod.fill(10);
// fillmethod.fill(10,3);
fillmethod.fill(10,3,5);

console.log("After Fill : "+ fillmethod);

//#endregion

//#region Includes


var products = ["pen","pencil","Eraser","Box",'pen'];
var resultincludes = products.includes("pen");//true
var resultincludes = products.includes("Box",2);//true

console.table(resultincludes);


//#endregion Includes


//#region Join

//array.join(separator)

const arrayjoinstring = ['parthi','ban','komaki','bike','jamesbond'];

console.log(arrayjoinstring);

console.log(arrayjoinstring.join()); //Default method
console.log(arrayjoinstring.join('*'));

//#endregion Join


//#region Reverse

const n = [1,2,3,4,5,6,7,8,9];
n.reverse();
console.log(n);

//Array Element with Length Property

const length1 = { 0:10, 1:20, 2:30, 3:40, 4:50, length: 5};

console.log(length1);

Array.prototype.reverse.call(length1);
console.log(length1);

//#endregion Reverse


//#region Push

// 1. Number array push method

const numpush = [1,2,3,4,5];

console.log(numpush.push(30,67,70,20));
console.log(numpush);

//2. string array push method

const strpush = ['apple','van','james','komaki'];

console.log(strpush.push('parthiban'));

console.log(strpush);

//3. Array merage using push with ...spread operator

const userp1 = ["parthi", "ban", "jamesdobd"];
const userp2 = ["ihtrap", "nab", "dhansun"];

userp1.push(...userp2);

console.log(userp1); // array merage

console.log(userp1.join()); // Array to string 

//#endregion Push


//#region Pop

// remove array last index using  popo() method

const userpop = ['ran','fan', 'apple','table'];
console.log(userpop); //['ran', 'fan', 'apple', 'table']

console.log(userpop.pop()); //table
console.log(userpop); //['ran', 'fan', 'apple']
console.log(userpop.pop()); //apple
console.log(userpop); //['ran', 'fan']


//#endregion Pop


//#region shift

// remove 1st index using shift() method

const studendshift = ['jakk','kumer','Joes','Stanley','Rajesh'];

console.log(studendshift); //['jakk', 'kumer', 'Joes', 'Stanley', 'Rajesh']
console.log(studendshift.shift()); //jakk
console.log(studendshift); //['kumer', 'Joes', 'Stanley', 'Rajesh']

// shift is remove index an array


//#endregion shift



//#region Unshift

// add 1st index using unshift() method


const user_unshift = ['kumar','Aurreen','Joes','Zara','Stanley','Rajesh'];
console.log(user_unshift.unshift('parthiban'));

console.log(user_unshift);

// multiple values add

user_unshift.unshift('murthi oil','naveen raj','great product');

console.log(user_unshift);


//#endregion Unshift



//#region indexOf

// find index value using indexOf 0,1,2,3,4,5,6,7,8,9



const student_iof = ['kumar','Aurreen','Joes','Zara','Stanley','Rajesh'];

let iof = student_iof.indexOf("Joes");
console.log(iof);

    // im find indexOf method using string values

const stringiof = 'parthiban';

console.log(stringiof.indexOf('a',4)); // find another same value using this method


//#endregion indexOf



//#region  lastIndexOf

const student_liof = ['kumar','Aurreen','Joes','Zara','Stanley','Rajesh', 'kumar'];


console.log(student_liof.lastIndexOf('kumar')); // 6



const string_liof = "Parthiba  chennai Agateshwar kovil street villivakkam chennai";

console.log(string_liof.lastIndexOf('chennai')); //54

//#endregion  lastIndexOf

//#region  Every and some in javascript

const useres = [
{name : 'ram', age: 25},
{name : 'uma', age: 29},
{name : 'thrun', age: 19},
{name : 'varuman', age: 18},
{name : 'sara', age: 12},
];


function check_every_some(value){
  return value.age>=18
}


console.log(useres.every(check_every_some)); // false
console.log(useres.some(check_every_some)); // true

// 2 example

const nes = [2,19,23,44,46,60,70];

let resultnes = nes.every((value)=>{
  return value%2===0;
});
console.log(resultnes); //false

let resultness = nes.some((value)=>{
  return value%2===0;
});
console.log(resultness); //true



function checkeverysome(value){
  return value%2===0;
 
}

console.log(nes.every(checkeverysome)); //false
console.log(nes.some(checkeverysome)); //true


//#endregion 


//#region primitive and reference data type

let namep ="tutor hoes stanley";
console.log(typeof namep);  // string

let agep = 25;
console.log(typeof agep); // number 

let isstudent = true;
console.log(typeof isstudent); // boolean

let xz;
console.log(typeof xz); // undefined

let id = Symbol();
console.log(typeof id); // symbol

let ap = 10;
let bp = ap;
ap = 25;
console.log(ap);

console.log("ap :" + ap);
console.log("bp :" +bp);

// Reference Data Types

//Object

let userr1 = {name : "parthi", age: 25}
let userr2 = userr1;
console.log("user1 :", userr1);
console.log("user2 :", userr2);

userr1.age=70;

console.log("user1 :", userr1);
console.log("user2 :", userr2);


// Array

let arr1 = [10,20,30];
let arr2 =   arr1;
console.log("arr1 :", arr1);
console.log("arr2 :", arr2);
arr1.push(50);

console.log("arr1 :", arr1);
console.log("arr2 :", arr2);



//Object Clone use Spread and Object assign() in javascript

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};


// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);


const obj3 = {...obj1,...obj2}; //spread operator method

console.log(obj3);



//#endregion primitive and reference data type








//#region Multiple ways to clone an array in JavaScript


let origArray = [1,2,3,4,5,6,7,8,9,0];

            //spread operator:

// let cloneArray = [...origArray];

             // Slice();
// let cloneArray = [origArray.slice()];

            // concat
// let cloneArray = [].concat(origArray);

            // Array.from()
//let cloneArray = Array.from(origArray);

           // JSON.parse(), 
           //JSON.Stringify()          arrary to string using ths method
let cloneArray = JSON.parse(JSON.stringify(origArray));

console.log(cloneArray);

//#endregion Multiple ways to clone an array in JavaScript

//#region section 7

//#region Create Objects

//--------------------------------------------------Section 7. Object and More in Javascript--------------------------------------------------


// object create types

// 1.example Object Literal Notation

const studentobj = {
  fullName: "Paarthiban",
  FatherName: "Ganessan",
  Age: 25,
  Address: "Tamilnadu,chennai, villivakkam",
  about: function(){
    return ` my name is ${this.fullName} and my father name is ${this.FatherName} and my city-address is ${this.Address}`;
  },
  eligibility: ()=>{
    return this.age >=18;
  },

};

console.log(studentobj);
console.log(studentobj.about());


//2. Factory Function

function addstudent(fullNames, Fathername, ages, address, city) {
  const userx = {};
  userx.fullNames = fullNames;
  userx.Fathername = Fathername;
  userx.ages = ages;
  userx.address = address;
  userx.city = city;

 userx.about= function(){
    return ` my name is ${this.fullNames} and my father name is ${this.Fathername} and my city-address is ${this.address}`;
  },
  userx.eligibility= ()=>{
    return this.ages >=18;
  };
  return userx;

};


console.log(addstudent('parthi','ganaes',13,'villivakkm','chennai'));




//3. prototype Inheritance

const studentMethod = {   //object
  about : function(){
    return ` my name is ${this.fullNames} and my father name is ${this.Fathername} and my city-address is ${this.address}`;

  },

eligibility : ()=>{
  return this.ages >=18;
}

};


function addstudents(fullNames, Fathername, ages, address, city) {
  const userxy = {};
  userxy.fullNames = fullNames;
  userxy.Fathername = Fathername;
  userxy.ages = ages;
  userxy.address = address;
  userxy.city = city;
  userxy.about = studentMethod.about;
  userxy,eligibility = studentMethod.eligibility;

  return userxy;

};

console.log(addstudents("parthiban", "ganesan",253,"villivakkam",'chennai'));


//4. ProtoType Inheritance method


const studentmethods = {
  about : function(){
    return ` my name is ${this.fullNames} and my father name is ${this.Fathername} and my city-address is ${this.address}`;
  },
  eligibilities : function(){
    return this.ages >=18;
  }
};


function add_student_names (namef, fathname, agies,mugavari,cities) {
  const userxyz = Object.create(studentmethods);
  userxyz.namef= namef,
  userxyz.fathname= fathname,
  userxyz.agies= agies,
  userxyz.mugavari= mugavari,
  userxyz.cities= cities
  return userxyz;
};

console.log(add_student_names('parthiban','ganesan', 12, 'villivakkam', 'chennai'));

// another example

const obj = {
  keyvalue1 : "Value 1",
  keyvalue2 : "Value 2"
};

console.log(obj);

// const objj = {keyvalue3 : "Value3"}

const objj = Object.create(obj);

objj.keyvalue3 = "value 3";

objj.keyvalue2 = " new value 2"

console.log(objj);

//#endregion Create Objects


//#region  Optional  ?.

const useroptional = {
  name : "parthiban",
  age : 12,
  addresss :{
    citys : "Chennai"
  }
};

//option 1

console.log(useroptional.addresss?useroptional.addresss.citys:undefined);

//option 2

console.log(useroptional.addresss && useroptional.addresss.citys);

//option 3

console.log(useroptional.addresss?.citys);

//option 4 

let keyo = 'city';

console.log(useroptional.addresss?.[keyo]);


//complex data

const UsersOptional = { 
  userId: '456',
  account:{
    accountNumber: 'AE45943',
    accountType: 'Savings',
    holder:{
      profile:{
        firstNamef: 'parthiban',
        lastNamel : 'Ganesan',
        birthDay : '1998-10-01'
      }
    },
    contact:{
      addressss :{
        city : 'salem',
        state : 'tamilnadu',
        country : 'India'
      },
      phone:[
        {
          type:'home',
          phoneNumber:'4027899'
        },
        {
          type: 'Office',
          phoneNumber: '9080496471'

        }
      ]
      
    }
  
  }


}

// console.log(UserOptional);


console.log(UsersOptional.account?.contact.addressss?.state);




//#endregion Optional



//#region  Function inside Object

const Objects = {
  name: 'parthiban',
  age: 25,
  method(){
    console.log("im method hello");
  }

};

console.log(Objects);
console.log(Objects.name);
// console.log(Objects.method());

Objects.method();

console.log(this);

//#endregion Function inside Object



//#region  Destructuring-------------------------------


//Array Destructuring

//Befor ES6 THIS ARRAY DESTRUCTURING

const numberdest = [1,2,3,4,5,6];

const f1st = [0];
const s2nd = [1];
const tslice = numberdest.slice(2);

console.log(f1st);
console.log(s2nd);
console.log(tslice);

// After ES6 OBJECT DESTRUCTURING


const numberdestnew = [1,2,3,4,5,6,7]; //OP 1,2,[3,4,5,6,7]
const [f1stnew,s2ndnew, ...trdnew] = numberdestnew;

console.log(f1stnew);
console.log(s2ndnew);
console.log(trdnew);



// OBJECT DESTRUCTURING
//Befor ES6 THIS OBJECT DESTRUCTURING

const persons = {name: 'parthiban', ages:49, Gender:'male'};

//before Destructuring
// const name  = persons.name;
// const ages = persons.age;
// const Gender = persons.Gender;

// After Destructuring
const {name,ages,Gender}= persons;

console.log(name);
console.log(ages);
console.log(Gender);
//-----------------------------------


// using Default values with Array Destructuring

// default array Destructuring

const numd = [1,2,49];
const numdestru = [x,y,z=3] = numd;


console.log(x);
console.log(y);
console.log(z);



// default Object Destructuing

const obd = {named: 'parthiban', aged: 25};
const {named,aged, Genderd = 'Male'}= obd;

console.log(named);
console.log(aged);
console.log(Genderd);


//-------------Swapping Variables Destructuring

let as = 1;
let bs = 2;
let cs;
// console.log(as);
// console.log(bs);
// cs = as;
// as = bs;
// bs = cs;

// console.log(as);
// console.log(bs);

[as,bs]=[bs,as]    //after ES6 swapping variables Destructuring
console.log(as);
console.log(bs);



// skipping Unwanted Items With Destructuring Assignment

let myarray = [1,2,3,4,5,6];
let [first,,,,,six] = myarray;

console.log(first);
console.log(six);

// ...rest skip

let[firstf,second, ...rest]= myarray;  //REST USING destructuring

console.log(firstf);
console.log(second);
console.log(rest);


//object ...rest method

let myobj = {a:1, b:2, c:3, d:4, e:5, f:6, g:7};


let {AO, BO, ...spread} = myobj;

console.log(AO);
console.log(BO);
console.log(spread);



// Nested array  destructed

const userd = {
  name_d: "Muruga",
  age_d:10,
  addressd:{
    city_d: "palani",
    state_d: "Tamilnadu",
    country_d: "India"
  }
};

const { name_d, 
  age_d,
  addressd:{city_d,state_d},
} = userd

 
console.log(name_d);
console.log(city_d);
console.log(state_d);


// number array destructed

// const numberd = [1,2,3,[4,5,6[7,8,9]]];

// const [i,j,k,[l,m,n,[o,p,q]]] = numberd;

// console.log(i);


const userdest = [
  {
  namede: "tutor joes",
  addressde: {
    cityd : "salem",
    stated: "Tamilnadu"
  }
},
{
  namede: "Parthiban",
  addressde: {
    cityd : "Chennai",
    state: "Tamilnadu"
  }
}
];


const [ 
  {namede:name1,
    addressde:{cityd:city1}
},
  {namede:name2,
    addressde:{cityd:city2}
  }
] = userdest;

console.log(name1);
console.log(city1);
console.log(name2);
console.log(city2);




//#endregion Destructuring


//#region  72.  Array and Object Destructuring in JavaScript

// Array  Destructure
var nu = [10,20,30,40,50,60]; 

var [a,b,c,,,f] = nu

console.log(a); //10
console.log(b); //20
console.log(c); //30
console.log(f); //60

var [a,b,...c] = nu

console.log(a); //10
console.log(b); //20
console.log(c);// [30,40,50,60]


// nested array Destructure

var nestedA = [[1,2], [3,4], [5,6]];

var [[a,b],[c,d],[e,f]] = nestedA;

console.log(a); //1
console.log(b); //2
console.log(c); //3
console.log(d); //4
console.log(e); //5
console.log(f); //6


// Object Destructure

//normal object destructure

var persono = {nameo: "Tiya", ageo:5, Gendero: "Female"};

var {nameo,ageo,Gendero} = persono;

console.log(nameo);
console.log(ageo);
console.log(Gendero);




// nested object destructure

var addresso = {
  street: "Cherry Road",
  city: "New York",
  state: "USA",
  zip: "543454"
};

var employee = {
  namee: "Tiya",
  age:11,
  gender: "Female",
  addresso 
};

console.table(employee);

var {namee,age,gender,addresso:{street,city,state,zip}}= employee;

console.log(namee);
console.log(age);
console.log(gender);
console.log(street);
console.log(city);
console.log(state);
console.log(zip);
 

//Unknown


let personu = {nameu: "Tiumssa", ageu:5, /*Genderu:'male'*/ };

let {nameu,ageu,Genderu='unKnown'} = personu

console.log(nameu);
console.log(ageu);
console.log(Genderu);




//#region create Object in javascript

//create object in JavaScript
//1. Object Literal *
//2. Object Constructor*
//3. Object.create() *
//4. Object.assign()
//5. Object.createProperty()
//6. Object.defineProperties()
//7. Object.defineProperty()
//8. Object.entries() *
//9. Object.fromEntries()
//10. Object.getOwnPropertyDescriptors()
//11. Object.getOwnPropertyNames()
//12. Object.getOwnPropertySymbols()
//13. Object.getPrototypeOf()
//14. Object.is()
//15. Object.isExtensible()
//16. Object.isFrozen()
//17. Object.isSealed()
//18. Object.keys() *
//19. Object.preventExtensions()
//20. Object.seal()
//21. Object.freeze()
//22. Object.setPrototypeOf()
//23. Object.values()*
//24. Object.prototype.hasOwnProperty()
//25. Object.prototype.isPrototypeOf()
//26. Object.prototype.propertyIsEnumerable()
//27. Object.prototype.toLocaleString()
//28. Object.prototype.toString()
//29. Object.prototype.valueOf()


//1. Using Object Literals:

var personl ={
  namel: "john Cena",
  agel : 49,
  jobl : "Software Developer"
};

console.log(personl);



//2. Using the Object Constructor

const personoc = new Object();

personoc.nameoc = "John Cena";
personoc.ageoc = 30;
personoc.joboc = "Software Developer";

console.log(personoc);




//3. Using the Object.create() method:

//Object.create (prototype,propertiesObject);


const personproto = {
  SayHello: function(){
   console.log(`hello my name is ${this.namepp} and my age is ${this.agepp } interesting factor my job i love my job is ${this.jobpp}`);
  }
};

const protoperson = Object.create(personproto);

protoperson.namepp = 'parthiban';
protoperson.agepp = 25;
protoperson.jobpp = "Developer";
protoperson.SayHello();
console.log(protoperson);




// 4. Using Class:

class operson {
  constructor (oname,oage,ojob){
    this.oname = oname;
    this.oage = oage;
    this.ojob = ojob;
  }
};

const opersons = new operson('parthiban',25, 'software Developer');

console.log(opersons);


//#endregion create Object in javascript



//#region  Dot Notation and Brcket Notation in Javascript



var userdn = {
  namedn: "Parthiban",
  agedn : 25,
  jobdn : "software developer"

};

console.log(userdn);

// Dot Notation

console.log(userdn.namedn);

userdn.namedn = "Ganesan Parthiban";

console.log(userdn.namedn);

console.log(userdn);



// Bracket Notation

console.log(userdn['namedn']);

userdn['namedn'] = 'parthiban Ganesan'

console.log(userdn); //{namedn: 'parthiban Ganesan', agedn: 25, jobdn: 'software developer'}

const propt = "namedn";

console.log(userdn[propt]); //parthiban Ganesan



const usersdn = {
  "First name" : "Parthiban",
  "Last name" : "Ganesan"
};

console.log(usersdn["First name"]);  //Parthiban
console.log(usersdn["Last name"]);   //Ganesan





//#endregion Dot Notation and Brcket Notation in Javascript



//#region Iterating Through JavaScript Objects

// Using the for-in loop
// using Object.keys()
// using object.entries()



//1. Using the for in loop 

const userfip = {
  namefip : "Prth",
  agefip :24,
  jobfip: "software developer"
};

console.log(userfip);

for(let key in userfip){
console.log(`${key} : ${userfip[key]}`);
}

//2.using Object.Keys()   

const obk = Object.keys(userfip);
console.log(obk);

obk.forEach(key=>{
  console.log(`${key } : ${userfip[key]}`);
});


//3. Object.value

const valueso = Object.values(userfip);

console.log(valueso);

valueso.forEach(value=>{
  console.log(`${value}`);
});

//4. Object.entries()


const entries = Object.entries(userfip);
console.log(entries); // 

entries.forEach(entry=>{
  console.log(`${entry[0]} : ${entry[1]}`);
});


for(let i = 0; i<entries.length; i++){
  console.log(`${entries[i][0]} : ${entries[i][1]}`);
}

//#endregion  Iterating Through JavaScript Objects

//#region Organizing Data with Objects inside Arrays in JavaScript

const usersodo = [
{ nameod : 'hoes',ageod: 25, email: 'hoes@gmail.com'},
{ nameod : 'hoes',ageod: 31, email: 'hoes@gmail.com'},
{ nameod : 'hoes',ageod: 40, email: 'hoes@gmail.com'}
];

for(const user of usersodo){
  console.log(user.nameod);
};

const oldusersodo = usersodo.filter(user=>user.ageod>30);

console.log(oldusersodo);



//#endregion Organizing Data with Objects inside Arrays in JavaScript


// #region Rest Parameter Functions and Spread Operators in JavaScripts


     // Rest parameters Functions

function myfunction(first, second, ...rest){ // function inside rest parameter
  console.log(first);
  console.log(second);
  console.log(...rest);
};

myfunction(10,20,30,40,50,60,70);


      // Spread Operators 

let Myarraysp = [1,2,3,4];  

let newArray = [...Myarraysp, 5,6] //spread operator

console.log(newArray);

//#endregion Rest Parameter Functions and Spread Operators in JavaScripts






//#region Parameter Destructuring in Javascript

//Example 1
const personjs = {namejs: 'pathiban',agejs:25};



function sayjs({namejs,agejs=40}) // standard values 40
{
  console.log(`Hello, ${namejs}`);
  console.log(`Hello, ${agejs}`);
}

sayjs(personjs)


//Example 2


const numberpd = [1,2,3];

function addpd([a,b,c]) {
  return a+b+c;
}

console.log(add(numberpd));


//Example 3


const personpd = {namepd: "parthiban", agepd:39, citypd: 'chennai', Countrypd: 'India'};

function saypd({namepd, agepd, ...rest}){
  console.log(`Hello!! my name is ${namepd} and my age is ${agepd}`);

  console.log(rest);
};

saypd(personpd);

//#endregion  Parameter Destructuring in Javascript

//#region call, apply, bind methods

// call

const studentcall = {user_name : "harish"};

function welcomecall(){
  console.log(`welcome : ${this.user_name}`);
};

welcomecall.call(studentcall);


function totald(eng, mat){
  console.log(`this is my name ${this.user_name} and i got my mark is ${(eng+mat)}`);

}

totald.call(studentcall,35,45); //this is my name harish and i got my mark is 80



// apply methods


let subjectcall = [35,45]; //create a one array format apply this methods

totald.apply(studentcall,subjectcall) //this is my name harish and i got my mark is 80




// bind methods

const fun_bind = totald.bind(studentcall, 43,33);
console.log(fun_bind);

fun_bind(); // this is my name harish and i got my mark is 76



const personabc = {
  first_Name : "tutor",
  last_Name : "Joes",
  full_Name: function(){  // object method
    return this.first_Name+ " "+ this.last_Name;
  },
};

console.log(personabc.full_Name());

 const anotherPerson = {
  first_Name : "pathi",
  last_Name : "ban",
 };



 console.log(personabc.full_Name.call(anotherPerson));



//#endregion call apply bind methods




//#region Class & Inheritance in javascript
 

//ES5  class

function Personci(nameci){
  this.nameci = nameci;
}

Personci.prototype.sayhelloci = function(){
  console.log("Hello, My Name is " + this.nameci);
};


var personci = new Personci
console.log(personci); // op: Personci {namec: 'Parthiban'}

personci.sayhelloci(); //op : Hello, My name is Parthiban


// ES6 class


class Person_class {
  constructor(namec){
    this.namec = namec;
  }
  sayHello_class(){
    console.log("Hello, My Name is " + this.namec);
  }
};

var person_class = new Person_class("Parthi");
console.log(person_class);

person_class.sayHello_class(); //Hello, My Name is Parthi


 


class ChatGpt {
  constructor(chat){
    this.chat = chat;
  }
  sayChat(){
    console.log("Hello, Im AI chartGpt how may i help You ("  +  this.chat);
  }
}
 
let chatGpt = new  ChatGpt("Version 3.5");

console.log(chatGpt);
 
chatGpt.sayChat();

// Example 2. 

class studentclass{
  constructor(namex, agex,countryx){
    this.name = namex;
    this.age = agex;
    this.country = countryx;
  }

  studmethod() {
    return ` Hello my name is ${this.name} and im ${this.age} years old im live in ${this.country} this countryies ahhhh`
  }
};


const Studentselfintro = new studentclass(
  "Rajesh",26,"ireland"
);


console.log(Studentselfintro.studmethod());


// Example 3

//learner (name, age, professionType)



class Learnere {
  constructor(namele, agele, professionTypele){
    this.name = namele;
    this.age = agele;
    this.profession = professionTypele;

  }

  learn(){
    return `Hello, You doing a GreatJob has many of as learning this course thank you May I know your name please okay. My name is "${this.name}" ok may i know your age and profession. sure my age is "${this.age} and im "${this.profession}" You need more about me `
  }


}

const interestLearner =new Learnere("Cyberdude",27,"Software Engineer");

console.log(interestLearner.learn());



//ES6 Inheritance 

          // parent or base class
class Inparents {          
  constructor(namei){
    this.namei = namei;
  }

  hellomethod(){
    console.log(`Hello this inheritance methods tell me your name ${this.namei}`);
  }
};

       // Child
class Instudents extends Inparents{    
  constructor(namei, agei){
    super(namei);
    this.agei= agei;

  }

  eligiblity(){      // methods
    console.log(`Hello ${this.namei} and age is ${this.agei}
      ${this.agei>=18? 'Eligible' : 'not eligible'}`);

  }
};


var inparents =  new Inparents("Ganesan");
var instudents = new Instudents("Parthiban", 25);


console.log(inparents.hellomethod());
console.log(instudents.eligiblity());

instudents.eligiblity();



//#endregion Class & Inheritance in javascript
 






//#region Getter and Setter in javascript

class PersonGS {
  constructor(FirstNameGS, LastNameGs){
    this.firstname = FirstNameGS;
    this.secondname = LastNameGs;
  }

  get fullNameGS(){
    return this.firstname + " " + this.secondname;
  }
  
 set fullNameGS(namegs){
    const partss = namegs.split(" ");
    this.firstname = partss[0];
    this.secondname = partss[1];
  }
}


const p1 = new PersonGS("parthiban" , "Ganesan");

console.log(p1);
console.log(p1.fullNameGS);

p1.fullNameGS = "Ganesan Parthiban"

console.log(p1.fullNameGS);



// task 

/*
1. create a class called Circle
2. Radius values a constructor
3. Getter and setter function
*/

class Circles {
  constructor(radius){
    this.radius = radius;
  }

  get diameter(){
    return this.radius * 2;
  }
  set  diameter(diameter){
    this.radius = diameter /2;
  }

  get area (){
    return Math.PI * this.radius * this.radius;
  }
};

const myCircles = new Circles(5)

console.log(myCircles.radius);
console.log(myCircles.diameter);
console.log(myCircles.area);

myCircles.diameter = 12;
console.log(myCircles.diameter );

console.log(myCircles.radius);

console.log(myCircles.area);

//#endregion Getter and Setter in javascript









//#region Static

class myclass {
  static mystaticproperty = " this static property parthiban";
  static mystaticlass(){
    console.log("this is my static class aha aha aha");
  }
};

myclass.mystaticlass();

console.log(myclass.mystaticproperty);



// example1 Utitility class 


class MathUtils{
  static add(a,b){
    return a + b;  
  };
  static sub(a,b){
    return a - b;  
  };
  static multi(a,b){
    return a * b;  
  };
  static div(a,b){
    return a / b;  
  };

};


console.log(MathUtils.add(10,20));
console.log(MathUtils.sub(10,20));
console.log(MathUtils.multi(10,20));
console.log(MathUtils.div(20,10)); 




//Example 2


class DataBase{
  static connect = null;
  static connectDB(){
    if(!DataBase.connect){
      DataBase.connect = new DataBase();
    }
    return DataBase.connect;
  }

  query(sql) {}

};


const db1 = DataBase.connectDB();
const db2 = DataBase.connectDB();


console.log(db1==db2);


//Example 3

class Color{
  static RED = '#ff0000';
  static BLUE = '#00FF00';
  static GREEN = '#00FF00';
}

console.log(Color.BLUE);
console.log(Color.GREEN);
console.log(Color.RED);


//#endregion Static



//#region Prototype


function Personp(namep,agep){
  this.namep = namep;
  this.agep = agep;
}
Personp.prototype.gree = function () {
  console.log(`Hello, my name is ${this.namep}`);
};

const alice = new Personp('Alice');
const bob = new Personp('Bob');

alice.gree();
bob.gree();

       // prototype inheritance 
function Employeep (namep, agep, jobtitlep){
Personp.call(this, namep,agep);
this.jobtitlep = jobtitlep;
}

Employeep.prototype = Object.create(Personp.prototype);

Employeep.prototype.work = function() {
  console.log(` ${this.namep} is working as a ${this.jobtitlep}`);
};

const employee1 = new Employeep("Charlie", 28, "software developer");

employee1.gree();
employee1.work();


//#endregion Prototype


 


//#region DOM

/*
 What is DOM and DOM Manipulation
What is DOM?
The DOM is not part of the JavaScript language but is instead a Web API used to build websites
The DOM is a tree-like structure that represents the HTML of a web page

The DOM was designed to be independent of any particular programming language.

The browser creates the DOM to render the page.

The Browser gives JavaScript access to the DOM which is a programming language.

The DOM is not a part of JavaScript Engine.

Brower gives the DOM API Function likes getElementById().createElement() etc. and these functions are not from JavaScript but these all are provided by DOM API.

In order to speak with DOM the browser gives us access by DOM API Application Programming Interface.

JavaScript is programming language that browsers can execute.

We can divide the browser into two components


1. DOM

2. JavaScript Engine (Chrome V8 Engine)

DOM API is the bridge between the DOM and JavaScript Engine
The JavaScript engine is also present in the browser independently.


 -----------------------------------------------------------------------------------------------------------------------

# What is DOM and DOM Manipulation
Change css styles applied to elements.

Remove HTML Elements

We can add Event Listeners to HTML elements like (click, keyup, etc..)

Change attribute values dynamically (e.g href, src, alt)

Create new dynamic HTML element.

*/










