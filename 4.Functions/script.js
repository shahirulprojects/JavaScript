//FUNCTION
//FUNCTION:A BLOCK  OF CODE TO PERFORM A TASK
//console.log() is an example of a built in function

//1.FUNCTION DECLARATION
//advantage:have access to "this" keyword
//ni la yang orang panggil normal function declaration
function square1(number) {
  //square tu nama function (can be anything you want),"number" dalam kurungan tu parameter
  return number * number;
}

//2.FUNCTION EXPRESSION
//used to defined a named or anonymous function (function that is unnamed)
//sama je macam function declaration cuma function ni dia takde nama
//notice that dia guna variable "square2" tu untuk beri nama kepada function tu
const square2 = function (number) {
  //setting the variable "square" to be a function expression
  return number * number;
};

//3.ARROW FUNCTION
//most used and most modern function
const square3 = (number) => {
  return number * number;
};

//since it only has one parameter and one return statement,it can be simplified like this:

//const square3=number=>number*number;

//FUNCTION CALL/FUNCTION INVOKING

//Example 1
const result1 = square1(5); //assigning the result of the function to a variable called "result" . "5" is delivered to the function to be used by the function.

console.log(result1);

//Example 2
function sayHi(name) {
  console.log(`Hi,${name}`);
}

sayHi("shahirul");

//Example 3
function add(a, b) {
  return a + b;
}

const sum = add(2, 2);

console.log(sum);

//Example 4
//Arrow function
const square4 = (number) => {
  return number * number;
};

const result2 = square4(5);
console.log(result2);

//Example 5
//Arrow function
//Kalau ada SATU je return statement,kita boleh buang "return" and {}

const square5 = (number) => number * number; //buang "return" and {}
const result3 = square5(5);
console.log(result3);

//Example 6
//Arrow function
//Kalau ada SATU je PARAMETER,kita boleh buang ()

const square6 = (number) => number * number;
const result4 = square5(5);
console.log(result4);

//Example 7
//Arrow function
//Set initial value for parameter in case parameter tu undefined

const greet = (name, age = 0) => {
  console.log(`${name} is ${age}  years old`);
};

greet("shahirul");
//set initial value for age to 0 sebab age tak kena defined,defined name je
//katakanla age tu defined,dia akan tunjuk age yang kita defined tu instead of 0
//0 tu macam failsafe la senang cakap
