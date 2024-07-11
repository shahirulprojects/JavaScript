//EXERCISE

const guestList = "Our guests are: Emma, Shahirul, Isabella, Ethan";

//1.Get the length of the string.
//Store it in a variable called length
length = guestList.length;
console.log(length);

//2.Uppercase the entire string.
//Store the result in a variable called uppercasedGuestList
const uppercasedGuestList = guestList.toUpperCase();
console.log(uppercasedGuestList);

//3.Check whether "ETHAN" is on the uppercasedGuestList.
//Store the answer in a variable called isEthanOnTheList.The data type of the variable must be a boolean
const isEthanOnTheList = uppercasedGuestList.includes("ETHAN");
console.log(isEthanOnTheList);

//4.Create a substring that only contains the following:"EMMA,SHAHIRUL,ISABELLA,ETHAN"
//Store the answer in a variable called substringGuests
const substringGuests = uppercasedGuestList.slice(16);
console.log(substringGuests);

//5.Out of the substring you just created,create an array of names of people that are on the list.
//Store that array in a variable called guests
const guest = substringGuests.split(",");
console.log(guest);

// PRACTICE

const senaraiNama = "Ali, Abu, Seman, Manap, Dahyun";

// get the length of the string
console.log(senaraiNama.length);

// uppercase the entire string
console.log(senaraiNama.toUpperCase());

// lowercase the entire string
console.log(senaraiNama.toLowerCase());

// check whether "Dahyun" is in the senarai Nama
console.log(senaraiNama.includes("Dahyun"));

// create a substring that contains only the following "Ali, Abu, Dahyun"

// cara 1
const newSenarai = senaraiNama.slice(0, 9) + senaraiNama.slice(23);
console.log(newSenarai);

// cara 2
const arrayName = senaraiNama.split(", "); // turning it into array and secara tak langsung buang comma tu

const selectedName = [arrayName[0], arrayName[1], arrayName[4]];

const selectedList = selectedName.join(", "); // turning it back into string
console.log(selectedList);

// cara 3 (paling efficient in case array tu berubah susunan)

// Finding the start and end positions for "Ali, "
const startAli = senaraiNama.indexOf("Ali");
const endAli = startAli + "Ali, ".length;

// Finding the start and end positions for "Abu, "
const startAbu = senaraiNama.indexOf("Abu");
const endAbu = startAbu + "Abu, ".length;

// Finding the start position for "Dahyun"
const startDahyun = senaraiNama.indexOf("Dahyun");

// Combining the slices
const combinedString =
  senaraiNama.slice(startAli, endAli) +
  senaraiNama.slice(startAbu, endAbu) +
  senaraiNama.slice(startDahyun);
console.log(combinedString); // Output: "Ali, Abu, Dahyun"
