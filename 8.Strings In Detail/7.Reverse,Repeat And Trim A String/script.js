//1.REVERSE A STRING
//use reverse() method but have to transform the string into array first because reverse() method is only for array
//to transform the string into array,we will need to SPLIT the string first sebab kan bila split dia jadi array

const exampleString1 = "test";

const reversedString1 = exampleString1.split("").reverse().join(""); //reverse() and join() adalah array method so kena ubah string jadi array dulu baru boleh guna. join() method akan kita belajar di array nanti

console.log(reversedString1);

//2.REPEAT A STRING
//use repeat() to repeat a string a few times

const dogSays = "woof";

console.log(dogSays.repeat(5)); //specify berapa kali nak repeat,kalau camni dia repeat 5 kali

//3.TRIM A STRING
//used to remove unnecessary items in string such as unnecessary spacebar
//kenapa unnecessary spacebar pun jadi isu?
//sebab "    emma@gmail.com  " tak sama dengan "emma@gmail.com"
//nanti katakanla kita nak send email tu ke page macam login form ke,dia akan jadi salah sebab benda tu tak match

const exampleString2 = "        Hello World!      "; //ada unnecessary spacebar
console.log(exampleString2.trim()); //dia akan trim unnecessary spacebar tu

// PRACTICE

// practice 1
const exampleString3 = "ayat ini akan diterbalikkan";
const reversedString = exampleString3.split("").reverse().join("");
console.log(reversedString);

// practice 2
const exampleString4 = "meow";
console.log(exampleString4.repeat(10));

// practice 3
const exampleString5 = "       emma@gmail.com";
console.log(exampleString5.trim());
