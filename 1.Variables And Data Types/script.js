//LIST OF CONSOLE COMMANDS
//console.log() for messages/print
//console.error() for error messages
//console.warn() for warning messages
//console.info() for informational messages
//console.clear() for clearing console output
//console.table() for displaying data in tabular form
//console.group() for grouping console logs together in collapsible group
//console.groupEnd() for ending a group created by console.group()
//console.time() for starting a timer for measureing code execution time
//console.timeEnd() for stopping a timer started by console.time() and logs the elapsed time
//console.assert() for making assertions and logs an error message if the assertion fails
//console.dir() for displaying an interactive listing of an object's properties in the console

//VARIABLE DECLARATION
//untuk variable name yang ada symbol,boleh ada dengan $ and _ sahaja

//the old way
var speech1 = "saya suka javascript"; //var kasi kita declare two variables with the same exact name so cam pelikla en sebab nanti cepat confuse
console.log(speech1);

//the modern way tapi boleh reassign value
let speech2 = "i like javascript";
console.log(speech2);

//the modern way jugak tapi tak boleh reassign value
const speech3 = "ana suka javascript";
console.log(speech3);

//DATA TYPE DECLARATION
//typeof digunakan untuk cek apa data type variable tu
//String,Numbers,Boolean,Null,Undefined adalah primitive data types
//primitive data types can only contain one value in their variables
//Objects pulak adalah complex data types
//complex data types contains collections of data in a more complex entities

// 1.STRING
//Ada tiga jenis String declaration which is single quote(' '),double quote (" "),back tick quote (` `)
//single quote and double quote sama je,takde beza (simple string)
//kalau backtick quote dia complex string,complex string ni dia boleh masukkan variable lain dalam string tu guna ${}

//single quote
const string1 = "hi";
console.log(string1);

//double quote
const string2 = "hello";
console.log(string2);

//backtick quote
const string3 = "shahirul";
const string4 = `hai,${string3}`;
console.log(string4);

//kalau nak buat operation guna backtick pun boleh pakai ${}
const string5 = `${2 + 2}`;
console.log(string5); //kalau tak pakai ${} dia akan just literally print 2+2

//example of typeof usage
console.log(typeof string5);

// 2.NUMBERS
//dalam JavaScript,kita takyah declare jenis type number tu cam int,float,double
//kita boleh guna let atau const untuk declare number,takyah susah2 pikir jenis type number tu

//Example 1
const nomborBulat = 5;
const nomborPerpuluhan = 0.5;

console.log(nomborBulat);
console.log(nomborPerpuluhan);

//Example 2
const firstNumber = 5;
const secondNumber = 10;

const result = firstNumber / secondNumber;
console.log(result);
console.log(typeof result);

//Example 3
const myNumber = new Number(100.234);
console.log(myNumber.toFixed(0)); //untuk pastikan nombor tu tiada tempat perpuluhan

// 3.BOOLEANS

//Example 1
const betulKeTak = true;
console.log(betulKeTak);
console.log(typeof betulKeTak);

if (betulKeTak) {
  console.log("ye wei kau betul");
} else {
  console.log("kau salah do");
}

//Example 2
const nilai = 20;
console.log(nilai > 100);

// 4.NULL
//Variable yang kena assign dengan no value

//Example 1
const duit1 = null;
console.log(duit1);

//Example 2
let duit2 = null; //guna let sebab nak assign value lain ke duit2

duit2 = 100; //assign value ke null
console.log(duit2);

// 5.UNDEFINED
//Variable yang tak kena assign value lagi

let x;
console.log(x);

// 6.OBJECTS
//mengandungi banyak variables
//Array and Date adalah dikira sebagai single object data type

const person = {
  name: "Shahirul",
  age: 21,
};
console.log(person);

//guna dot notation untuk access specific value within the object
console.log(person.name);

//ARRAY

const arr = [1, 2, 3, 4];
console.log(arr);

const date = new Date();
console.log(date);

//There are two  types of programming languages which is statically typed and dynamically typed
//Statically typed:A variable CANNOT at one moment be a string and at another moment be a number
//Example:c,c++,java

//Dynamically typed:A variable CAN at one moment be a string and at another moment be a number
//Example:javascript

let message = "Hello World";
console.log(message);
console.log(typeof message);

message = 5;
console.log(message);
console.log(typeof message);

message = true;
console.log(message);
console.log(typeof message);
