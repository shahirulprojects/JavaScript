//REST AND SPREAD OPERATORS

//1.REST OPERATOR
//rest operator is used when we dont know how many parameter will our function accept
//rest operator is denoted by ...

const add=(...numbers)=>{ //rest operator
    return numbers.reduce((accumulator,value)=>accumulator+value); // reduce ni kita dah belajar dah sebelum ni dalam Array
}

console.log(add(2,7,6,5,8,9,5,0,4,9,9)); //kita boleh tambah as many numbers as we want

//2.SPREAD OPERATOR / SPREAD SYNTAX
//can be used when we have an array
//also denoted by ...
//yang ni dah belajar dah dalam Value VS Reference punya topic

//Example 1
const numbers = [1,2,3,4,5] 
const newNumbers=[...numbers,6] //ni kita nak add number 6 dalam array tu tanpa modify array lama.Sebabtu kita buat array baru
                                //rupa lain dia [1,2,3,4,5,6]

console.log(numbers);
console.log(newNumbers);

//Example 2
const object1={name:"Shahirul",age:21}
const object2={...object1,name:"Emma"} //copy properties object1 sambil ubah name value

console.log(object1);
console.log(object2);

