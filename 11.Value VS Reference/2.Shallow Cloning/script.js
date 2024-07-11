//SHALLOW CLONING
//HOW TO PROPERLY CLONE COMPLEX DATA TYPES WITHOUT COPYING THE REFERENCES

//1.CLONING ARRAYS

//1st way:Spread Operator
//Spread is used to take out the elements out of the array
//Spread is represented by three dots(...)
const numbers = [1, 2, 3, 4, 5];

console.log(...numbers); //tengah guna spread operatorla ni
//dia akan keluarkan semua elements dalam array tu individually

//but how do we use this spread operator for copying array?
//ha kita buat camni
const newNumbers1 = [...numbers]; //firstly dia akan keluarkan dulu elements tu dari array lama and then dia masukkan dala array baru
console.log(newNumbers1); //array baru tercipta and dia tak point to the same location in the memory
//so kalau array lama atau array baru ni dimodify,dia takkan affect each other

//2nd way:Array slice()
//Copies the entire array and allows you to choose the elements you want and put it in a new array
const newNumbers2 = numbers.slice(); //copies the entire array and put it in a new array.Yang ni kita tak specific kan parameter dia,so dia copy je seluruh array
console.log(newNumbers2); //array baru tercipta and dia tak point to the same location in the memory

//Trying to see whether array baru tu berubah tak kalau array lama dimodify
numbers.push(6); //assigning new elements into the old array

console.log(numbers); //akan ada new elements which is 6
console.log(newNumbers1); // tak berubah
console.log(newNumbers2); // tak berubah

//2.CLONING OBJECTS

//1st way:Spread Operator
const person = { name: "Emma", age: 21 };
const otherPerson1 = { ...person }; //copies all the properties of the person Object and put it in a new Object
console.log(otherPerson1);

//2nd way:Objects.assign()
const otherPerson2 = Object.assign({}, person); // curly braces tu {} untuk store the copied Object properties and "person" tu refers to the Object yang kita nak copy
console.log(otherPerson2);

//Trying to see whether Object baru tu berubah tak kalau Object lama dimodify
person.age = 22; //trying to change the old Object properties to see whether the new Object properties also changes
console.log(person); //age dia akan jadi 22
console.log(otherPerson1); //tak berubah
console.log(otherPerson2); //tak berubah

//do notice that we used [...] for array cloning and {...} for object cloning

// PRACTICE

// ARRAY
const array = [1, 2, 3, 4, 5];

// dot operator array
const newArray1 = [...array];
newArray1.unshift("0");
console.log(newArray1);

// slice array
const newArray2 = array.slice();
newArray2.pop();
console.log(newArray2);

// OBJECT

const personInfo = {
  name: "Shahirul",
  age: 22,
};

// dot operator object
const newPersonInfo1 = { ...personInfo };
newPersonInfo1.name = "Dahyun";
console.log(newPersonInfo1);

// Object.assign()
const newPersonInfo2 = Object.assign({}, personInfo);
newPersonInfo1.age = 23;
console.log(newPersonInfo2);
