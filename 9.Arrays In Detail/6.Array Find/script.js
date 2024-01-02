//ARRAY FIND
//Returns the FIRST value that satisfies the condition

//Example 1
const numbers=[5,6,7,8,9,10,11,12,13,14];

const value=numbers.find((number)=>number>8) //"number" tu akan diganti satu2 dengan setiap element dalam array tu sampaila dia jumpa the FIRST number yang greater than 8
                                 //contoh: 
                                //  iteration pertama :"number" diganti dengan nombor 5
                                //  iteration kedua:"number" diganti dengan nombor 6
                                //  and begitula sampai dia jumpa the FIRST number yang greater than 8
console.log(value);

//Example 2

const states=["Alaska","California","Colorado","Hawaii"];

//finding the first state that begins with the letter "C"

const stateThatStartsWithC=states.find((state)=>state.startsWith("C"));//startsWith() is a string method

console.log(stateThatStartsWithC);