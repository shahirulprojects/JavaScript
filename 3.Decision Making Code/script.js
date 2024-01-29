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
