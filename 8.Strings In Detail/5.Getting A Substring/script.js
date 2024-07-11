//GETTING A SUBSTRING

//slice();
//slice(); returns the substring of a string
//slice() digunakan bila kita nak pisahkan letter/word/sentence tapi kita TAKNAK semua letter/word/sentence yang kita dah pisahkan tu

const exampleString = "hotdog";
//kita nak slice perkataan hotdog tu supaya kita dapat "hot" dan "dog"

const hot = exampleString.slice(0, 3); //Kita slice dari index 0 ke index 3.Sepatutnya sampai index 2 je tapi memang kena tambah 1,sebab kalau tak, tak jadi
const dog = exampleString.slice(3); //kalau tak specify index kedua tu pun takpe,dia akan just assume kita nak slice sampai habis
console.log(hot);
console.log(dog);

// PRACTICE

const contohString = "I like to eat and I like to sleep";

const slicedString1 = contohString.slice(0, 13);
console.log(slicedString1);
const slicedString2 = contohString.slice(18);
console.log(slicedString2);
