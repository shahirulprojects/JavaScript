//LOGIC AND CONTROL FLOW

//1.IF ELSE STATEMENT
const age = 18;

if (age > 18) {
  console.log("You may enter!");
} else if (age === 18) {
  console.log("You just turned 18,welcome!");
} else {
  console.log("Grow up lil bro");
}

//2.TERNARY OPERATOR
//Digunakan bila nak buat if else tapi pendek je sebab takde "else if"
//condition ? blocks of code if true:blocks of code if false
// "?" dibaca sebagai "is"
//so cam condition is true:false

const umur = 18;

umur >= 18 ? console.log("You can drive") : console.log("You cannot drive");

//3.FOR & WHILE LOOP

//FOR LOOP
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//WHILE LOOP
let i = 0;

while (i < 10) {
  console.log(i);
  i++;
}

// PRACTICE

// if statement
const duit = 1000;

if (duit > 5000) {
  console.log("You can buy this item");
} else if (duit === 5000) {
  console.log("You can buy this item but you will not have any money left");
} else {
  console.log("Up your money game lil bro");
}

// ternary operator
const saya = "hensem";

saya === "hensem"
  ? console.log("fuiyoo hensemla awak ni")
  : console.log("eee tak hensemm");

// for loop
const loop = 19;

for (let i = 0; i < loop; i++) {
  console.log(`count:${i}`);
}

// while loop
let ulang = 0;

while (ulang != 10) {
  console.log(
    `This will loop until the number reaches 10, current number:${ulang}`
  );
  ulang++;
}
