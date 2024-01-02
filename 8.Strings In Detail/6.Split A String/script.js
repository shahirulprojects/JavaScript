//SPLIT A STRING

//split()
//split a string into multiple substring
//split() digunakan bila kita nak pisahkan letter/word/sentence tapi kita still NAK semua letter/word/sentence yang kita dah pisahkan tu

//Example 1
//Split word into multiple letters
const exampleString1="dog";
const letters=exampleString1.split("")//kita tak specify apa2 so dia assume kita nak pisahkan setiap letters tu
console.log(letters);

//Example 2
//Split sentence into multiple words
const exampleString2="The quick brown fox jumps over the lazy dog";
const words=exampleString2.split(" ")//specify the split by using spacebar so that dia akan potong at every spacebar
console.log(words);

