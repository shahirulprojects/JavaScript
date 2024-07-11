//UPPERCASE AND LOWERCASE LETTERS

const mixedCaseString = "Hello!,how are you?";

//1.LOWERCASE
const lowerCaseString = mixedCaseString.toLowerCase(); //kena declare variable baru sebab toLowerCase() method tak ubah string tu tapi dia cipta string baru yang lowercase
console.log(lowerCaseString);

//2.UPPERCASE
const upperCaseString = mixedCaseString.toUpperCase(); //kena declare variable baru sebab toUpperCase() method tak ubah string tu tapi dia cipta string baru yang uppercase
console.log(upperCaseString);

// PRACTICE

const hurufBesar = "ayat ini asalnya ditulis dengan huruf kecil";
console.log(hurufBesar.toUpperCase());
