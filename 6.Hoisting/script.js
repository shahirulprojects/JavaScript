//HOISTING
//Almost never used in modern Javascript
//Saja belajar in case interview tanya
//When Javascript compiles the code,all variable declarations and function declarations are hoisted/lifted to the top of their scope whether it is local/global

//KEEP IN MIND THAT THIS ONLY WORKS WITH "VAR" AND FUNCTION DECLARATION (NOT FUNCTION EXPRESSION/ARROW FUNCTION)
//SEBAB MODERN JAVASCRIPT CUBA ELAK HOISTING NI
//KALAU KITA BUAT GUNA MODERN JAVASCRIPT,KITA AKAN DAPAT ERROR INSTEAD OF "UNDEFINED"

//Example 1
// console.log(age); kalau declare macamni akan dapat error sebab age tu kita tak defined lagi value dia berapa

console.log(age);
var age=20; //kalau macamni dia takkan dapat error cuma akan dapat "undefined" sebab dia lift variable declaration tu ke atas console.log(),so kira cam variable age tu dideclare sebelum console.log() la
            //keep in mind yang dia hanya lift "var age" bukannya nilai age tu,sebabtu still dapat undefined

//What hoisting looks like
//var age;
//console.log(age);
//age=20;


//Example 2
function umur1(){
    console.log(message);
    var message="test";
}
umur1(); //akan dapat undefined sebab declare message tu bawah console.log()


//Example 3
umur2(); //panggil function sebelum kita defined function tu
         //tapi kalau function kena hoisted,kita akan dapat result function tu instead of "undefined" sebab function tak kisah pun kena declare sebelum atau selepas dia kena panggil
         //akan dapat "test"
function umur2(){
    var message="test2"
    console.log(message);

}



