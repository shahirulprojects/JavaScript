//ARRAY INTRODUCTION

const months = ["January", "February", "March", "April"];

//Access and print the array
console.log(months[0]); //To access January which in this case is at index 0
console.log(months); //Print the whole array

//Replacing elements in the array
months[2] = "Not March"; //Replacing elements in the array
console.log(months[2]); //Will print Not March
console.log(months); //will print Not March and all the other months

//Adding new elements in the array
months[4] = "May";
console.log(months);

//Get the total count of the elements in the array
console.log(months.length);

//For loop
//There are also different looping methods for array that we will learn in the upcoming lesson
for (let i = 0; i < months.length; i++) {
  console.log(months[i]);
}

//Array allows different data types to be store in it since array itself is the typeof object
const variousDataTypes1 = [
  "Apple", //string
  { name: "Emma" }, //object
  true, //boolean
  () => {}, //arrow function
];
console.log(variousDataTypes1);

// PRACTICE

const array = [
  "ubat gigi",
  "berus gigi",
  "sabun mandi",
  "sabun baju",
  "pencuci muka",
];

// access and print the array
console.log(array[2]);

// replacing elements in the array
array[3] = "Loofah";
console.log(array[3]);
console.log(array);

// adding new elements in the array
array[5] = "shampoo";
console.log(array[5]);

// get the total count of the elements in the array
console.log(array.length);

// for loop
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// various data types
const variousDataTypes2 = [
  {
    name: "Shahirul",
    age: "22",
  },
  "hai nama saya Shahirul",
  100,
  false,
  () => {},
];

console.log(variousDataTypes2);
