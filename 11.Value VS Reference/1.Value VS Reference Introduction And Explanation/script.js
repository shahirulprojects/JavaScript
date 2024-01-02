//Javascript differentiates Data Types on:
//Primitive:Number,String,Boolean,Nulls,Undefined....
//Complex:Object,Array,Function(sebenarnya Object je tapi since Array pun dikira sebagai Object so kita letakla jugak.Function pun patutnya tak letak tapi dalam topic ni kita letak sekali)


//The concept of Values VS Reference comes from the idea of copying values

//1.WHEN WE TRY TO COPY THE VALUES OF PRIMITIVE DATA TYPES

//NUMBERS
let x=1;
let y=x; //value y akan jadi 1

x=2; //value x akan jadi 2 BUT value y kekal sama

console.log(x); //2
console.log(y); //1

//STRINGS
let firstPerson="Shahirul";
let secondPerson=firstPerson; //value secondPerson akan jadi "Shahirul"

firstPerson="Ikmal" //value firstPerson akan jadi "Ikmal" BUT value secondPerson kekal sama

console.log(firstPerson); //Ikmal
console.log(secondPerson); //Shahirul

//2. WHEN WE TRY TO COPY THE VALUES OF COMPLEX DATA TYPES

//ARRAY
const animals=["dogs","cats"];
const otherAnimals=animals; //otherAnimals elements will be "dogs","cats"

animals.push("llamas"); //animals elements akan ada satu element baru which is llamas AND otherAnimals pun akan ada satu element baru which is "llamas"

console.log(animals);//"dogs","cats","llamas"
console.log(otherAnimals);//"dogs","cats","llamas"

//OBJECTS
const person1={
    firstName:"Minatozaki",
    secondName:"Sana"
}

const otherPerson=person1; //otherPerson properties will be "Minatozaki" and "Sana"

person1.firstName="Shy Shy Shy"; //person firstName property akan jadi "Shy Shy Shy" AND otherPerson firstName property pun akan jadi "Shy Shy Shy"

console.log(person1); //"Shy Shy Shy","Sana"
console.log(otherPerson);//"Shy Shy Shy","Sana"

//3.EXPLANATION

//When a variable is assigned to a primitive data type value,it just copy that value
//When a variable is assigned to a complex data type value,it had been given the reference of the object's location in the memory.Tu yang array yang copy tu akan sama je dengan array original even though array original tu berubah

//when we did const otherAnimals=animals; and const otherPerson=person; we did not copy the values literally
//we pointed it to the same location as the original one in the memory

//Contoh:
const person2={name:"Shahirul"};
const person3={name:"Shahirul"};

console.log(person2===person3); //will return false because both of them points to a different location in the memory eventhough the properties are the same

//tapi kalau kita buat camni
const person4=person3;
console.log(person4===person3); //will return true because both of them points to the same location in the memory

//4.CONCLUSION

//Primitive data types are copied by value
//Complex data types are copied by reference

