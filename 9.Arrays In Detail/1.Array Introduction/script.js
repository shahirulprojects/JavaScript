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
const variousDataTypes = [
  "Apple", //string
  { name: "Emma" }, //object
  true, //boolean
  () => {}, //arrow function
];
console.log(variousDataTypes);
