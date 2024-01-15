//OBJECT
//Can store multiple data types (variable dari berlainan jenis data type)
//variable ni relate to each other

const middle = "Myers";
const lastName = "Cantik";

//Kosa kata
//key=firstName
//value="Emma"
//so rupa dia jadi cam key:value
const person = {
  //kalau nak declare properties of object kena buat curly braces
  firstName: "Emma", //terus je bubuh nama variable,takyah declare
  middleName: middle, //boleh je initialize the value to "Myers" tapi saja nak tunjuk different ways on how we can set values in an object
  lastName, //dia kalau key and value name sama,Javascript allows us to declare macamni pun takpe sebab nama sama en
  "umur person tu": 21, //boleh buat nama key jadi camni tapi kalau nak access this specific key,kena pakai square bracket notation
  car: {
    //boleh declare object inside of an object
    brand: "BMW",
    year: 2023,
    colour: "black",
  },
};

console.log(person);
