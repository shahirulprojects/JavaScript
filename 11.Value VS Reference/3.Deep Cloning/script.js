//DEEP CLONING

const person = {
  firstName: "Emma",
  car: {
    brand: "BMW",
    colour: "black",
    topSpeed: "200",
  },
};

const newPerson1 = { ...person }; //copying the person Object into a new Object
newPerson1.firstName = "Mia"; //changing the properties of the firstName to Mia

console.log(person); //firstName is still "Emma"
console.log(newPerson1); //firstName changed to "Mia"

//it would not be a problem if we change the OUTER Object properties
//but it would be a problem if we change the INNER Object properties
newPerson1.car.colour = "red";

console.log(person.car.colour); //will change to "red"
console.log(newPerson1.car.colour); //will change to "red"

//but why did the old Object properties also change?
//this is because we only removed the references for the OUTER Object when copying
//we did not remove the INNER Object reference
//hence the term shallow cloning and deep cloning
//Shallow=copy outer object
//Deep=copy inner object

//so how do we change this
const newPerson2 = { ...person, car: { ...person.car } }; //to make sure we also remove the reference from the inner object.The curly braces{} is because car tu kan object,so declare object kan memang kena pakai curly braces{}

newPerson2.car.colour = "green";

console.log(person.car.colour); //tak berubah
console.log(newPerson2.car.colour); //will changed to "green"

//but this only works when we have only 2 layers of Object
//what if we have more?
//We will be using JSON.stringfy and JSON.parse to destroy all references

//JSON.stringify converts an Object or any value to a string and all references are destroyed
//but that will not be useful to us since all of it is now string.This is where the JSON.parse comes in
//JSON.parse will be used to convert the strings back to Object
const newPerson3 = JSON.parse(JSON.stringify(person));

console.log(newPerson3);

//Proving that there is no more references in the new Object and it is indeed a deep clone

newPerson3.firstName = "Dahyun";
newPerson3.car.colour = "Burgundy";

console.log(person.firstName); //tak berubah
console.log(newPerson3.firstName); //changed to "Dahyun"
console.log(person.car.colour); //tak berubah
console.log(newPerson3.car.colour); //changed to "Burgundy"
