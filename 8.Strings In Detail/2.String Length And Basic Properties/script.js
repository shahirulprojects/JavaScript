//untuk kira berapa banyak huruf dalam satu string tu
//do note that dia kira spacebar as 1 unit jugak
const name1 = "Emma";
console.log(name1.length);

//untuk access certain letter in a string
const name2 = "Emma";
console.log(name2[0]); //do note that kiraan start dari 0 bukannya 1

//untuk store certain letter yang kita dah access tu

//untuk access first character
const firstLetter = name2[0];

//untuk access last character
//const lastLetter=name2[13]; boleh buat camni tapi tak efficient sebab katakanla string tu panjang,tak ke pishang nak kira satu2
//so kita buat camni

const lastLetter = name2[name2.length - 1]; //boleh adjustla tolak2 ni cam katakanla hang nak second last ke en,ha tolakla 2
console.log(firstLetter, lastLetter);

// PRACTICE

// practice 1
const name3 = "Shahirul";
console.log(name3[3]);

console.log(name3[name3.length - 1]);
