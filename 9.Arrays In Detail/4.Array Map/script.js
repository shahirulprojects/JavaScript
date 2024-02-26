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
// const logTheName=(name)=>console.log(name);
// inventory.forEach(logTheName)

// const logThePrice=(price)=>console.log(price);
// inventory.forEach(logThePrice)
