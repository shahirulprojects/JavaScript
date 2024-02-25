//ARRAY FOREACH
//the most used array method
//forEach method ALWAYS returns undefined value / DO NOT have a return value
//use when you want to do something with each element of the array
//don't use when you want to stop or break the loop when some conditions is true (kalau camni pakai for loop biasa je)
//don't use when working with async code (akan belajar nanti)

const names = ["Jennie", "Jisoo", "Lisa"];

//Cara biasa
for (let i = 0; i < names.length; i++) {
  //kalau method for loop biasa kita kena tambah variable baru which in this case is "i"
  console.log(i, names[i]);
}

//Another alternative is by using forEach method

//Example 1
names.forEach((name, index) => {
  //Parameter first tu untuk elements dalam array tu.Parameter second tu is index according to the elements respectively,kira dia akan print index sekali.Boleh je nak letak nama apa2 untuk parameter tu
  console.log(name, index); //dia akan print setiap name tu dan index dia
});

//or

//kalau buat cara ni dia senang sikit sebab kita boleh piih nak pakai function apa untuk forEach tu
const logTheName = (name, index) => console.log(name, index);
names.forEach(logTheName);

//Example 2

let sum = 0;
const numbers = [65, 44, 12, 14];

numbers.forEach((number) => {
  //tak bubuh index pun takpe janji bubuh parameter first.Boleh je letak nama apa2 untuk parameter
  sum += number;
});

console.log(sum);
