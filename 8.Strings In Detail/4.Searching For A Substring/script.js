//SEARCHING FOR A SUBSTRING

//1.indexOf()
//indexOf() used to look for a substring in a string starting from a given position
const hobbies1="I love HTML, CSS and Javascript.";
const index1=hobbies1.indexOf("Javascript",0); //Kalau tak letak 0 pun takpe sebab dia akan assume kita takde letak syarat untuk start dari index mana,so dia start jela dengan 0.Boleh je kalau nak start dengan index lain
console.log(index1);//kalau dia tak jumpa substring tu,dia akan print -1

//2.lastIndexOf()
//lastIndexOf() used to look for a substring in a string yang kali terakhir dimentioned
const hobbies2="I love HTML, CSS and Javascript, Javascript.";
const index2=hobbies2.lastIndexOf("Javascript");
console.log(index2);//dia akan keluarkan index 33 sebab index 33 adalah index paling last Javascript kena mentioned

//3.includes()
//paling selalu digunakan,yang method lain tak selalu
//includes() used to tentukan ada ke tak substring tu (just a simple true or false tanpa perlu susah2 tau index substring tu,kita just nak tau substring tu wujud ke tak)
//Includes ni case-sensitive so kalau lain case pun dia akan return false
const includesJavascript1=hobbies1.includes("Javascript");
console.log(includesJavascript1);

const includesJavascript2=hobbies2.includes("React");
console.log(includesJavascript2);

//4.startsWith()
//startsWith() used to tentukan sama ada a string tu start dengan huruf atau perkataan yang dispecified tu ke tidak (true or false)
console.log(hobbies1.startsWith("I"));
console.log(hobbies2.startsWith("HTML"));

//endsWith()
//endsWith() used to tentukan sama ada a string tu ends dengan huruf atau perkataan yang dispecified tu ke tidak (true or false)
console.log(hobbies1.endsWith("."));
console.log(hobbies2.endsWith("CSS"));