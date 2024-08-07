//ARRAY SORT
//Sorts an array of string ALPHABETICALLY or NUMERICALLY
//CHANGES THE ORIGINAL ARRAY SINCE WE DONT CREATE A NEW ARRAY
//Takde effect pun,tapi pentingla untuk kita tau yang array kita akan berubah once kita guna sort
//It always good to know which methods mutate the original array and which not

//Example 1
const names = ["Anne", "Carl", "Bob", "Dean"];

names.sort();

console.log(names);

//Example 2
const numbers = [6, 3, 1, 7, 9, 2, 15, 25, 99, 44];

numbers.sort();

console.log(numbers); //dia akan jadi ceni [1, 15, 2, 25, 3, 44, 6, 7, 9, 99] which is salah
//Javascript ingat since nombor first start dengan 1,then nombor second pun patut start dengan 1 la en
// camna nak counter benda ni,ha kita buat camni

//ASCENDING ORDER
const ascendingOrder = [...numbers].sort((a, b) => a - b); //untuk compare the values
console.log(ascendingOrder);

//DESCENDING ORDER
const descendingOrder = [...numbers].sort((a, b) => b - a);
console.log(descendingOrder);

// PRACTICE

const nombor = [1, 2, 3, 4, 55, 5, 6, 8, 9, 99, 100];

const nomborMenaik = [...nombor].sort((a, b) => a - b);
console.log("Nombor Menaik", nomborMenaik);

const nomborMenurun = [...nombor].sort((a, b) => b - a);
console.log("Nombor Menurun", nomborMenurun);
