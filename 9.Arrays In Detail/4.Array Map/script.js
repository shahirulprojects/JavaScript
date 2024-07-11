//ARRAY MAP
//Array Map and Array ForEach is extremely similar
//The difference between the Array Map and the Array forEach is that the Array Map allocates memory in order to store and return values.Array forEach does not allocate memory therefore it has no return values
//Array forEach also allows for a callback function that allows you to change the original array.Array Map will return a new array while leaving the original array in its original state
//disebabkan Array Map ada return value therefore we can create a new array with the things we just return
//DOES NOT CHANGE THE ORIGINAL ARRAY SINCE WE CREATE A NEW ARRAY

const inventory = [
  //saja buat contoh array ni store objects
  { price: 5, name: "eggs" },
  { price: 4, name: "ham" },
  { price: 3, name: "mayo" },
  { price: 5, name: "bread" },
];

//item tu kiranya nama untuk setiap elements dalam array tula.Boleh je kalau nak bubuh nama lain
const namabarang = inventory.map((item) => item.name); //kiranya dia akan buat array baru nama namabarang
const hargabarang = inventory.map((item) => item.price); //kiranya dia akan buat array baru nama hargabarang

console.log(namabarang);
console.log(hargabarang);

//ni rupa dia kalau pakai Array forEach,tapi dia tak create array barula
const logTheName = (inventory) => console.log(inventory.name);
inventory.forEach(logTheName);

const logThePrice = (inventory) => console.log(inventory.price);
inventory.forEach(logThePrice);

// PRACTICE

// practice 1

const senaraiKereta = [
  {
    name: "BMW",
    price: "RM 100 000",
  },
  {
    name: "Camry",
    price: "RM 150 000",
  },
  {
    name: "Mercedes",
    price: "RM 300 000",
  },
  {
    name: "Volkswagen",
    price: "RM 700 000",
  },
];

const namaKereta1 = senaraiKereta.map((kereta) => {
  return kereta.name;
});
console.log(namaKereta1);

const hargaKereta1 = senaraiKereta.map((kereta) => {
  return kereta.price;
});

console.log(hargaKereta1);

// practice 2 (kalau pakai forEach)

const namaKereta2 = (kereta) => console.log(kereta.name);
senaraiKereta.forEach(namaKereta2);

const hargaKereta2 = (kereta) => console.log(kereta.price);
senaraiKereta.forEach(hargaKereta2);

const namaAndHargaKereta = (kereta) => console.log(kereta.name, kereta.price);

senaraiKereta.forEach(namaAndHargaKereta);
