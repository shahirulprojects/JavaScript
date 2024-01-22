//THE "NEW" KEYWORD
//creates a new data type

//OBJECT
const person1 = {}; //cara biasa
const person2 = new Object(); //guna "new" keyword

person1.firstName = "Shahirul";
person2.firstName = "Shahirul";

console.log(person1); //akan print Shahirul
console.log(person2); // akan print Shahirul

//ARRAY
const arr1 = [1, 2, 3]; //cara biasa
const arr2 = new Array(1, 2, 3); //guna "new" keyword

console.log(arr1); //akan print 1,2,3
console.log(arr2); //akan print 1,2,3

//kita boleh guna "new" keyword ni jugak untuk String,Number

//so if it is the same as the normal method,when do we need to use the "new" keyword?
//"new" keyword ni memang kita guna untuk create Date baru je sebab kalau guna "new" keyword untuk data types lain,syntax dia panjang sangat
//for example

const myDate = new Date("September 29,2024");
//date is a special type of an object that is built in Javascript
//There is no other way to create date, we have to use the "new" keyword

console.log(myDate.getFullYear());
