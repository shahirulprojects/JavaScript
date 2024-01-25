//CLASS
//a class is a schema/template for an object

//ni kalau declare object cara biasa
const person = {
  name: "Peyi", //String
  age: "21", //Number
  isWorking: true, //Boolean
};

//ni kalau pakai class
//kita pakai cara ni bila ada banyak benda dari object yang sama yang kita kena initialize value dia
//contoh:
//katakanla kita nak declare 3 person and semua person tu requirements dia sama je which is name,age,isWorking
//so that means dia from the same objectla kan sebab keys dia semua sama je for every person
//kalau kita guna cara biasa,kita kena declare person Object tu 3 kali
//contoh:

// const person1={
//     name:"Peyi",
//     age:"21",
//     isWorking:true,
// }

// const person2={
//     name:"ZeroTwo",
//     age:"24",
//     isWorking:false,
// }

// const person3={
//     name:"Hori",
//     age:"21",
//     isWorking:true,
// }

//so tak efficientla kan nak declare camni,so this is where class comes in
//dengan class kita hanya perlu declare person Object tu sekali je and then untuk initialize value tu kita boleh buat cam contoh di bawah

class Person {
  //sama macam Java //kena declare sekali je tak kirala orang tu beribu pun
  constructor(name, age, isWorking) {
    //constructor tu akan terima the values of key from the person Object
    this.name = name; //boleh je bubuh nama lain untuk elak guna "this" keyword tapi kalau nak lagi senang pakai je nama sama
    this.age = age;
    this.isWorking = isWorking;
  }
}

//initialize the value
const user1 = new Person("Peyi", 21, true);
const user2 = new Person("ZeroTwo", 24, false);
const user3 = new Person("Hori", 21, true);

console.log(user1);
console.log(user2);
console.log(user3);

//TAPIIIIIIII
//TAPI TAPI TAPI class ni ialah cara Object Oriented Programming which is popularly used by Java
//as for Javascript pulak,dia sedang slowly bergerak ke functional programming which means that dia akan pakai banyak function
//so how do we implement the concept of class ni ke dalam function?
//kita buat camni

const createPerson = (name, age, isWorking) => {
  const userSchema = {
    name, //sepatutnya name:name tapi sebab key and values tu sama nama so kita boleh buat camni
    age,
    isWorking,
  };
  return userSchema;
};

//initialize the value
const person1 = createPerson("Peyi", 21, true);
const person2 = createPerson("ZeroTwo", 24, false);
const person3 = createPerson("Hori", 21, true);

console.log(person1);
console.log(person2);
console.log(person3);

//kalau katakanla person tu ada sorang je,kita boleh declare function kita camni

// const createPerson=(name,age,isWorking)=>{
//     return {name,age,isWorking};
//}

//mula asalnya rupa dia camni tapi kita boleh simplify lagi,so kita buat gini

// const createPerson=(name,age,isWorking)=>({name,age,isWorking}); //kena letak kurungan () and curly braces {} sebab tu memang cara dia kalau nak simplekan arrow function Object ni
