//ARRAY INCLUDES
//Checks if an array contains a certain value and return true or false based on the result
//Includes ni case-sensitive so kalau lain case pun dia akan return false
//Includes ni pun kita ada guna dalam string bila kita nak search for a substring

//Example 1
const array1=[1,2,3];
console.log(array1.includes(2)); //kalau kita letak "2" (double quote disengajakan) dia akan return false sebab "2" ialah string

//Example 2
const pets=["cat","dog","llama"];
console.log(pets.includes("cat"));

//Example 3
const bookshelf=["Moby Dick","The Great Gatsby","Pride and Prejudice"];

if(bookshelf.includes("Moby Dick")){ //kalau buat "Moby dick" dia akan return false sebab includes ni case-sensitive
    console.log("We have that book,here you go")
}
else{
    console.log("Cannot find the book,sorry!")
}




