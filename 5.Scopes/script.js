//1.GLOBAL SCOPE
//Boleh digunakan dekat semua bahagian dalam code
//macam "public class" la kalau dalam Java
const name = "John"; // variable name ni boleh digunakan / dipanggil dekat mana2 part of code sebab dia global

const logName = () => {
  console.log(name);
};

logName();

//2.LOCAL SCOPE / FUNCTION SCOPE
const someFunction = () => {
  const nama = "emma"; //nama ni hanya boleh digunakan dalam arrow function ni je and tak boleh dipanggil kat luar sebab kita declare DALAM function,so dia jadi local variable
  //kalau ada function lain yang guna variable "nama" jugak pun takpe sebab benda tu hanya dideclare dalam function dia sahaja
  console.log(nama);

  const anotherFunction = () => {
    //declare function dalam function

    console.log(nama);
  };

  anotherFunction(); //dia akan print emma jugak sebab benda bawah boleh guna variable atas tapi benda atas takleh guna variable bawah
};

someFunction();

//3.BLOCK SCOPE
//Sama je macam local scope

if (true) {
  const nama = "emma";
  console.log(nama); //variable "nama" hanya boleh dipanggil dalam "if" block ni je sebab dia kena declare dalam ni
}

// PRACTICE

// global scope
const person1 = "Shahirul";

const logPerson1 = () => {
  console.log(person1);
};

logPerson1();

// local scope / function scope
const logPerson2 = () => {
  const person2 = "Ikmal";
  console.log(person2);

  const logPerson3 = () => {
    console.log(person2);
  };
  logPerson3();
};

logPerson2();

// block scope
const apple1 = 2;
const apple2 = 4;
const result = apple1 + apple2;

if (result === 6) {
  const person3 = "Emma";
  console.log(`${person3} has ${result} apples`);
}
