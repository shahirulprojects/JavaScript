//1.STATIC OR SIMPLE STRING
const single = "This is a string";
const double = "This is a string";

console.log(single);
console.log(double);

//2.DYNAMIC OR COMPLEX STRING

//Example 1
const backticks = `This is a string`;
console.log(backticks);

//Example 2
const sum = (a, b) => a + b;
const total = `The sum is ${sum(2, 2)}`;
console.log(total);

//Example 3
const rows = `1
2
3`;

console.log(rows); //nanti dia akan print 1,2,3 tu dekat different rows.Kalau guna single or double ticks takleh buat camni

//Interesting thing

//const greeting1='Hi I'm Mikey';
//kalau buat camni takleh sebab dalam ayat tu ada single tick jugak so dia akan cancel out single tick yang kita guna untuk string tu
//There are two ways to encounter this which is pakai type of ticks yang lain atau buat camni
const greeting1 = "Hi,I'm Mike"; //works for any kind of ticks,kena letak \ SEBELUM tick yang kita nak guna dalam ayat tu
console.log(greeting1);

//Another example
//const greeting2="Hi,I'm Mike but people call me "Mikey"";
//Ni pun sama gak kes dia
//Cara repair dia ialah
const greeting2 = 'Hi,I\'m Mike but people call me "Mikey"';
console.log(greeting2);

//sebenarnya part i'm tu tak letak \ pun takpe tapi saja je nak tunjuk
//boleh jugak betulkan benda ni dengan pakai jenis tick yang lain tapi sajala nak tunjuk cara ni

// PRACTICE

// practice 1
const result = (number1, number2) => {
  return number1 + number2;
};

const jumlah = `Jumlahnya adalah ${result(10, 2)}`;
console.log(jumlah);

// practice 2
const string1 = `hai
nama 
saya
Shahirul`;

console.log(string1);

// practice 3
const string2 = "hai, I'm Shahirul"; // sepatutnya jadi const string2 = 'hai, I\'m Shahirul'; tapi lepas save dia cam simplified jadi const string2 = "hai, I'm Shahirul";
