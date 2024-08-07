const names = ["Shahirul", "Emma", "Dahyun", "Cate", "Emilia"];

//1.ARRAY PUSH
//adds a new element containing the entered value to the END of the array
names.push("Zoe");
//console.log(names.push()) kalau buat camni dia akan return the length of the current array
console.log(names);

//2.ARRAY POP
//deletes the LAST element of an array
names.pop(); //remove Zoe since Zoe is the last element
//console.log(names.pop()) kalau buat camni dia akan pop nama yang kena buang tu
console.log(names);

//3.ARRAY SHIFT
//deletes the FIRST element of an array
names.shift(); //remove Shahirul since Shahirul is the first element
console.log(names);

//4.ARRAY UNSHIFT
//adds a new element to the START of an array
names.unshift("Shahirul"); //adds Shahirul to the start of the array
//console.log(names.unshift()); kalau buat camni dia akan return the length of the current array
console.log(names);

//5.ARRAY SPLICE
//Splice maksudnya join kan benda
//adds a new values from ANY position of an array or can also be used to remove certain elements in an array
names.splice(2, 3, "Sana", "Momo");
//first parameter untuk tau mana nak letak new element tu.Contoh kalau letak index 2,dia akan letak SEBELUM index 2
//second parameter tu untuk how many elements we want to remove after the new element.Contoh kalau letak 3,dia akan remove 3 elements SELEPAS element baru tu masuk.
//kalau second parameter tu letak 0 pun takpe sebab katakanla kita just nak tambah element je tanpa delete elements lain
//third parameter untuk apa value elements yang kita nak letak tu

//names.splice(2,3) boleh jugak buat camni in case kita nak delete elements je tanpa tambah element baru
console.log(names);

//6.ARRAY SLICE
//copies certain elements of an array into a newly created array
const ShahirulWives = names.slice(1); //index 1 tu adalah index di mana kita start copy and pasting the elements into a new array
//const peopleThatLikeShahirul=names.slice(1,3); //boleh buat camni kalau kita nak stop copy dekat certain index.Contoh kalau dia letak 3,dia akan berhenti SEBELUM index 3
console.log(ShahirulWives);

// PRACTICE

const array = ["nasi", "sambal", "kicap", "telur"];

// add element at the end of the array
array.push("kuih");
console.log(array);

// remove element at the end of the array
array.pop();
console.log(array);

// add element at the start of the array
array.unshift("maggi");
console.log(array);

// remove element at the start of the array
array.shift();
console.log(array);

// array splice
array.splice(0, 3, "aiskrim");
console.log(array); // will display "aiskrim" , "telur"

// array.slice
const newArray = array.slice(0, 1); // will display "aiskrim"
console.log(newArray);
